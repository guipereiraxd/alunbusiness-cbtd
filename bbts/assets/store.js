/* BBTS · Persistência dos registros do assessment.
   Reaproveita o Firebase que já serve /cadastro/ e as enquetes do /bancodobrasil/:
   window.FIREBASE_CONFIG vem de assets/firebase-config.js, gerado no build a
   partir dos GitHub Secrets. Sem config (ambiente local), cai em modo LOCAL e
   tudo continua funcionando no navegador — o painel avisa isso em destaque.

   Coleção: bbts_assessments. Documento identificado pelo hash do e-mail, então
   a mesma pessoa reentrando atualiza o próprio registro em vez de duplicar.
   Leitura exige autenticação: ver as regras no README desta pasta. */
window.BBTS_STORE = (function(){

  var COL = "bbts_assessments";

  var K_EU   = "bbts_eu_v1";          // identidade de quem está neste navegador
  var K_REG  = "bbts_registros_v1";   // espelho local dos registros
  var K_SEED = "bbts_seed_v1";        // coorte de referência ligada/desligada

  function ler(k, def){ try { return JSON.parse(localStorage.getItem(k)) || def; } catch(e){ return def; } }
  function grava(k, v){ try { localStorage.setItem(k, JSON.stringify(v)); } catch(e){} }

  /* ---- Firebase, no mesmo padrão defensivo do registration-core ---- */
  var db = null, fbAuth = null;
  if (window.FIREBASE_CONFIG && window.firebase) {
    try {
      var app = firebase.apps.length ? firebase.app() : firebase.initializeApp(window.FIREBASE_CONFIG);
      db = firebase.firestore(app);
      if (firebase.auth) fbAuth = firebase.auth(app);
    } catch (e) { console.warn("[BBTS] Firebase init falhou:", e); }
  }
  var ligado = !!db;

  /* ---- identidade ---------------------------------------------- */
  function idDoEmail(email){
    var e = String(email||"").trim().toLowerCase();
    if (!e) return "c" + Date.now().toString(36) + Math.random().toString(36).slice(2,7);
    var h = 0; for (var i=0;i<e.length;i++) h = (h*31 + e.charCodeAt(i)) | 0;
    return "p" + (h >>> 0).toString(36);
  }
  function valido(email){ return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(String(email||"").trim()); }

  function eu(){ return ler(K_EU, null); }
  function cadastrar(d){
    var atual = eu() || {}, email = String(d.email||"").trim();
    var r = { id: idDoEmail(email), nome: String(d.nome||"").trim(), email: email,
              criado: atual.criado || new Date().toISOString() };
    grava(K_EU, r);
    return r;
  }
  function sair(){ try{ localStorage.removeItem(K_EU); }catch(e){} }

  /* ---- gravação ------------------------------------------------- */
  /* Espelha sempre no localStorage e, havendo Firestore, grava lá também.
     Guarda de 5s para nunca travar a navegação por falha de rede. */
  function salvar(reg){
    var lista = ler(K_REG, []).filter(function(r){ return r.id !== reg.id; });
    lista.push(reg); grava(K_REG, lista);

    if (!ligado) return Promise.resolve({ modo:"local", reg:reg });
    return new Promise(function(resolve){
      var guard = setTimeout(function(){ resolve({ modo:"local", reg:reg, erro:"timeout" }); }, 5000);
      db.collection(COL).doc(reg.id).set(reg, { merge:true })
        .then(function(){ clearTimeout(guard); resolve({ modo:"remoto", reg:reg }); })
        .catch(function(err){
          console.warn("[BBTS] gravação falhou:", err);
          clearTimeout(guard); resolve({ modo:"local", reg:reg, erro:String(err) });
        });
    });
  }

  /* ---- leitura (exige autenticação quando há Firestore) --------- */
  function listar(){
    if (!ligado) return Promise.resolve({ modo:"local", registros: ler(K_REG, []) });
    if (!usuario()) return Promise.resolve({ modo:"remoto", registros: [], precisaLogin:true });
    return db.collection(COL).get()
      .then(function(snap){
        var out = []; snap.forEach(function(d){ out.push(d.data()); });
        return { modo:"remoto", registros: out };
      })
      .catch(function(err){
        console.warn("[BBTS] leitura falhou:", err);
        return { modo:"local", registros: ler(K_REG, []), erro:String(err) };
      });
  }

  /* Assinatura em tempo real — o painel enche sozinho conforme as
     pessoas respondem. Devolve a função que cancela a assinatura. */
  function assinar(cb){
    if (!ligado || !usuario()) return function(){};
    return db.collection(COL).onSnapshot(function(snap){
      var out = []; snap.forEach(function(d){ out.push(d.data()); });
      cb({ modo:"remoto", registros: out });
    }, function(err){ console.warn("[BBTS] snapshot:", err); });
  }

  function status(id, novo){
    var lista = ler(K_REG, []);
    lista.forEach(function(r){ if (r.id===id){ r.status=novo; r.statusTs=new Date().toISOString(); } });
    grava(K_REG, lista);
    if (!ligado || !usuario()) return Promise.resolve();
    return db.collection(COL).doc(id)
      .update({ status:novo, statusTs:new Date().toISOString() })
      .catch(function(err){ console.warn("[BBTS] status:", err); });
  }

  /* ---- autenticação do painel ----------------------------------- */
  /* O Firebase restaura a sessão de forma assíncrona: logo após o load,
     currentUser ainda é null mesmo para quem está logado. Quem precisa ler
     deve esperar esta promessa antes de chamar listar(). */
  var authPronta = !fbAuth
    ? Promise.resolve(null)
    : new Promise(function(resolve){
        var un = fbAuth.onAuthStateChanged(function(u){ un(); resolve(u); });
      });
  function pronto(){ return authPronta; }

  function usuario(){ return fbAuth && fbAuth.currentUser ? fbAuth.currentUser : null; }
  function entrar(email, senha){
    if (!fbAuth) return Promise.reject(new Error("Autenticação indisponível neste ambiente."));
    return fbAuth.signInWithEmailAndPassword(email, senha);
  }
  function sairPainel(){ return fbAuth ? fbAuth.signOut() : Promise.resolve(); }
  function aoMudarLogin(cb){ if (fbAuth) fbAuth.onAuthStateChanged(cb); else cb(null); }

  /* ---- coorte de referência (fictícia), desligada por padrão ---- */
  function seedOn(){ return ler(K_SEED, false) === true; }
  function setSeed(v){ grava(K_SEED, v === true); }
  function seedRegistros(){
    var D = window.BBTS_DEMO; if (!D) return [];
    return D.pessoas.map(function(p){
      return { id:"seed-"+p.id, nome:p.rotulo, email:"",
               criado:"2026-10-01T12:00:00.000Z", R:p.R, T:p.T || {},
               SK:{}, status:p.status, seed:true };
    });
  }

  return { ligado:ligado, modo: ligado ? "remoto" : "local", colecao:COL,
           temAuth: !!fbAuth,
           eu:eu, cadastrar:cadastrar, sair:sair, valido:valido,
           salvar:salvar, listar:listar, assinar:assinar, status:status,
           usuario:usuario, entrar:entrar, sairPainel:sairPainel, aoMudarLogin:aoMudarLogin,
           pronto:pronto,
           seedOn:seedOn, setSeed:setSeed, seedRegistros:seedRegistros };
})();
