/* Hybrid Skills · métricas agregadas v1
   PRD §11 e RF09: eventos mínimos, sem respostas, sem par, sem orientação,
   sem texto livre. ID de sessão analítica separado do estado do diagnóstico
   (sessionStorage, não localStorage). Fire-and-forget: falha de rede ou de
   bloqueador nunca trava a jornada. Sem config (ambiente local) vira no-op.

   Coleção: bbdw_eventos. A regra correspondente está em firestore.rules e
   precisa ser colada no console antes do primeiro teste real. */
window.BBDW_METRICAS = (function(){
  var FONTE = "bbdw-2026", COLECAO = "bbdw_eventos";
  var PERMITIDOS = ["landing_view","assessment_start","step_completed","assessment_complete",
                    "action_commit","course_click","plan_print"];
  var db = null, fila = [], ativo = true;

  function aleatorio(){
    try { return crypto.randomUUID(); }
    catch(e){ return "a" + Math.random().toString(36).slice(2) + Date.now().toString(36); }
  }
  var sessao = (function(){
    try {
      var s = sessionStorage.getItem("bbdw_an");
      if (!s){ s = aleatorio(); sessionStorage.setItem("bbdw_an", s); }
      return s;
    } catch(e){ return aleatorio(); }
  })();

  /* tempo ativo: soma dos intervalos com a aba visível */
  var desde = (document.visibilityState === "visible") ? Date.now() : null, acumulado = 0;
  document.addEventListener("visibilitychange", function(){
    if (document.visibilityState === "visible"){ desde = Date.now(); }
    else { if (desde) acumulado += Date.now() - desde; desde = null; }
  });
  function duracaoAtiva(){ return Math.round((acumulado + (desde ? Date.now() - desde : 0)) / 1000); }

  function iniciar(){
    if (db || !ativo) return;
    if (!window.FIREBASE_CONFIG || !window.firebase || !firebase.firestore) return;
    try {
      if (!firebase.apps.length) firebase.initializeApp(window.FIREBASE_CONFIG);
      db = firebase.firestore();
      fila.splice(0).forEach(enviar);
    } catch(e){ ativo = false; }
  }

  function enviar(ev){
    if (!db) return;
    try {
      var doc = {
        evento: ev.nome, fonte: FONTE, eventId: aleatorio(), sessaoAnalitica: sessao,
        versoes: window.BBDW_VERSOES || {}, etapa: ev.etapa || "",
        duracaoAtiva: ev.duracao, ts: firebase.firestore.FieldValue.serverTimestamp()
      };
      var p = db.collection(COLECAO).add(doc);
      if (p && p.catch) p.catch(function(){});
    } catch(e){}
  }

  function registrar(nome, etapa){
    if (PERMITIDOS.indexOf(nome) < 0) return;
    var ev = { nome:nome, etapa: etapa ? String(etapa).slice(0,40) : "", duracao: duracaoAtiva() };
    if (db) enviar(ev); else if (fila.length < 50) fila.push(ev);
  }

  if (document.readyState === "complete") iniciar();
  else window.addEventListener("load", iniciar);

  return { registrar: registrar, iniciar: iniciar, ligado: function(){ return !!db; } };
})();
