/* AI Business ReCode — registro de interesse.
   Reaproveita o Firebase que já serve o site: window.FIREBASE_CONFIG vem de
   assets/firebase-config.js, gerado no build a partir dos GitHub Secrets.
   Sem config (ambiente local), não há onde gravar e a interface diz isso.

   O PRD separa marketing de diagnóstico: o opt-in é campo próprio, nunca
   presumido pelo envio do formulário. */
window.RECODE_LEADS = (function(){

  var COL = "recode_leads";

  var db = null;
  if (window.FIREBASE_CONFIG && window.firebase) {
    try {
      var app = firebase.apps.length ? firebase.app() : firebase.initializeApp(window.FIREBASE_CONFIG);
      db = firebase.firestore(app);
    } catch (e) { console.warn("[ReCode] Firebase init falhou:", e); }
  }
  var ligado = !!db;

  function valido(email){ return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(String(email||"").trim()); }

  function id(){
    return "l" + Date.now().toString(36) + Math.random().toString(36).slice(2,7);
  }

  /* Guarda de 5s para a interface não ficar presa num envio lento. Ela NÃO
     cancela a gravação: a promessa do Firestore continua correndo e costuma
     chegar depois. Por isso o estado devolvido é "indefinido", não "falhou" —
     dizer que não chegou enquanto está a caminho é informação errada, e a
     tela orientava a pessoa a procurar outro canal sem necessidade.

     Nada de contato é espelhado no localStorage: eram nome, e-mail, empresa
     e cargo ficando no navegador — inclusive em máquina compartilhada ou de
     evento — sem que a pessoa fosse avisada. */
  function registrar(d){
    var reg = {
      id: id(),
      nome:    String(d.nome||"").trim(),
      email:   String(d.email||"").trim(),
      empresa: String(d.empresa||"").trim(),
      cargo:   String(d.cargo||"").trim(),
      origem:  "demo_harness_v" + (window.RECODE_DEMO ? window.RECODE_DEMO.VERSAO : "2.0"),
      marketing_opt_in: !!d.optin,
      criado:  new Date().toISOString()
    };
    if (!ligado) return Promise.resolve({ modo:"sem-backend", reg:reg });
    return new Promise(function(resolve){
      var respondido = false;
      function fim(r){ if (!respondido){ respondido = true; clearTimeout(guarda); resolve(r); } }
      var guarda = setTimeout(function(){ fim({ modo:"indefinido", reg:reg }); }, 5000);
      db.collection(COL).doc(reg.id).set(reg)
        .then(function(){ fim({ modo:"remoto", reg:reg }); })
        .catch(function(err){
          console.warn("[ReCode] gravação de lead falhou:", err);
          fim({ modo:"falhou", reg:reg, erro:String(err) });
        });
    });
  }

  return { ligado:ligado, colecao:COL, valido:valido, registrar:registrar };
})();
