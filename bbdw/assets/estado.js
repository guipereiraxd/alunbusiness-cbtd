/* Hybrid Skills · estado local v1
   PRD RF03, RF09, RF10 e §9: o estado vive só neste navegador, expira em
   30 dias (conferido ao abrir e antes de usar), nunca vai para a URL.
   Se o armazenamento estiver bloqueado, a jornada segue em memória e a
   página avisa que o progresso pode se perder. */
window.BBDW_ESTADO = (function(){
  var CHAVE = "bbdw_hs_v1", DIAS = 30;
  var mem = null, bloqueado = false;

  function agora(){ return Date.now(); }
  function aleatorio(){
    try { return crypto.randomUUID(); }
    catch(e){ return "s" + Math.random().toString(36).slice(2) + agora().toString(36); }
  }

  function novo(versoes){
    return {
      sessao: aleatorio(),
      criadoEm: agora(), atualizadoEm: agora(), expiraEm: agora() + DIAS * 864e5,
      versoes: versoes || {},
      etapa: "contexto",
      contexto: null, objetivo: null,
      respostas: {},
      dupla: null,             /* { par, origem: objetivo|triagem|manual|escolha, empate } */
      aprofundamento: {},      /* { H, S, I } */
      resultadoValido: false,
      compromisso: false
    };
  }

  function testar(){
    try { localStorage.setItem("__bbdw_t", "1"); localStorage.removeItem("__bbdw_t"); bloqueado = false; return true; }
    catch(e){ bloqueado = true; return false; }
  }

  function ler(){
    var e = null;
    try {
      var s = localStorage.getItem(CHAVE);
      if (s) e = JSON.parse(s);
    } catch(err){ bloqueado = true; return mem; }
    if (!e) return mem;
    if (!e.expiraEm || e.expiraEm < agora()){ apagar(); return null; }
    mem = e;
    return e;
  }

  function salvar(e){
    e.atualizadoEm = agora();
    mem = e;
    try { localStorage.setItem(CHAVE, JSON.stringify(e)); bloqueado = false; }
    catch(err){ bloqueado = true; }
    return e;
  }

  function apagar(){
    mem = null;
    try { localStorage.removeItem(CHAVE); } catch(e){}
  }

  return { novo:novo, ler:ler, salvar:salvar, apagar:apagar, testar:testar,
           bloqueado:function(){ return bloqueado; }, DIAS:DIAS };
})();
