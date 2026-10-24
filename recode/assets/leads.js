/* AI Business ReCode — registro de interesse.
   Reaproveita o Firebase que já serve o site: window.FIREBASE_CONFIG vem de
   assets/firebase-config.js, gerado no build a partir dos GitHub Secrets.
   Sem config (ambiente local), degrada para localStorage e a interface avisa.

   O PRD separa marketing de diagnóstico: o opt-in é campo próprio, nunca
   presumido pelo envio do formulário. */
window.RECODE_LEADS = (function(){

  var COL = "recode_leads";
  var K   = "recode_leads_v1";

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

  function espelha(reg){
    try {
      var l = JSON.parse(localStorage.getItem(K)) || [];
      l.push(reg); localStorage.setItem(K, JSON.stringify(l));
    } catch(e){}
  }

  /* Guarda de 5s: falha de rede não pode travar a tela de quem acabou de
     responder a demo — o registro fica no navegador e a interface diz isso. */
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
    espelha(reg);
    if (!ligado) return Promise.resolve({ modo:"local", reg:reg });
    return new Promise(function(resolve){
      var guarda = setTimeout(function(){ resolve({ modo:"local", reg:reg, erro:"timeout" }); }, 5000);
      db.collection(COL).doc(reg.id).set(reg)
        .then(function(){ clearTimeout(guarda); resolve({ modo:"remoto", reg:reg }); })
        .catch(function(err){
          console.warn("[ReCode] gravação de lead falhou:", err);
          clearTimeout(guarda); resolve({ modo:"local", reg:reg, erro:String(err) });
        });
    });
  }

  return { ligado:ligado, colecao:COL, valido:valido, registrar:registrar };
})();
