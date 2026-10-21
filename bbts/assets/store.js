/* BBTS · Camada de persistência dos registros do assessment.
   Dois modos:
     - LOCAL  (padrão)  → localStorage, só no navegador de quem respondeu.
     - REMOTO (opcional) → base compartilhada entre dispositivos.
   Para ligar o modo remoto, preencha REMOTO abaixo. Enquanto estiver vazio,
   tudo funciona em LOCAL e o painel avisa que a base não é compartilhada. */
window.BBTS_STORE = (function(){

  /* ---- configuração do modo remoto -------------------------------- */
  var REMOTO = {
    tipo:  "",        // "supabase" | "endpoint" | "" (desligado)
    url:   "",        // supabase: https://xxxx.supabase.co   | endpoint: URL completa
    chave: "",        // supabase: anon key                    | endpoint: ignorado
    tabela:"registros_bbts"
  };
  var ligado = !!(REMOTO.tipo && REMOTO.url);

  var K_EU  = "bbts_eu_v1";          // identidade de quem está neste navegador
  var K_REG = "bbts_registros_v1";   // registros guardados localmente
  var K_SEED= "bbts_seed_v1";        // coorte de referência ligada/desligada

  function ler(k, def){ try { return JSON.parse(localStorage.getItem(k)) || def; } catch(e){ return def; } }
  function grava(k, v){ try { localStorage.setItem(k, JSON.stringify(v)); } catch(e){} }

  /* id estável derivado do e-mail — a mesma pessoa não duplica registro */
  function idDoEmail(email){
    var e = String(email||"").trim().toLowerCase();
    if (!e) return "c" + Date.now().toString(36) + Math.random().toString(36).slice(2,7);
    var h = 0; for (var i=0;i<e.length;i++) h = (h*31 + e.charCodeAt(i)) | 0;
    return "p" + (h >>> 0).toString(36);
  }
  function valido(email){ return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(String(email||"").trim()); }

  /* ---- identidade -------------------------------------------------- */
  function eu(){ return ler(K_EU, null); }

  function cadastrar(d){
    var atual = eu() || {};
    var email = String(d.email||"").trim();
    var r = {
      id:    idDoEmail(email),
      nome:  String(d.nome||"").trim(),
      email: email,
      criado: atual.criado || new Date().toISOString()
    };
    grava(K_EU, r);
    return r;
  }
  function sair(){ try{ localStorage.removeItem(K_EU); }catch(e){} }

  /* ---- registros --------------------------------------------------- */
  function registroLocal(){
    var e = eu(); if (!e) return null;
    return (ler(K_REG, [])).filter(function(r){ return r.id === e.id; })[0] || null;
  }

  /* Grava o registro completo (identidade + respostas). Local sempre;
     remoto também, quando configurado. Devolve uma Promise. */
  function salvar(reg) {
    var lista = ler(K_REG, []).filter(function(r){ return r.id !== reg.id; });
    lista.push(reg);
    grava(K_REG, lista);
    if (!ligado) return Promise.resolve({ modo:"local", reg:reg });
    return enviar(reg).then(function(){ return { modo:"remoto", reg:reg }; })
      .catch(function(err){ return { modo:"local", reg:reg, erro:String(err) }; });
  }

  function enviar(reg){
    if (REMOTO.tipo === "supabase"){
      return fetch(REMOTO.url.replace(/\/$/,"") + "/rest/v1/" + REMOTO.tabela + "?on_conflict=id", {
        method:"POST",
        headers:{ "Content-Type":"application/json", "apikey":REMOTO.chave,
                  "Authorization":"Bearer "+REMOTO.chave, "Prefer":"resolution=merge-duplicates" },
        body: JSON.stringify([reg])
      }).then(checa);
    }
    return fetch(REMOTO.url, { method:"POST", headers:{"Content-Type":"application/json"},
                               body: JSON.stringify(reg) }).then(checa);
  }
  function checa(r){ if (!r.ok) throw new Error("HTTP "+r.status); return r; }

  /* Lista todos os registros da base. Promise → { modo, registros } */
  function listar(){
    if (!ligado) return Promise.resolve({ modo:"local", registros: ler(K_REG, []) });
    var u, h = {};
    if (REMOTO.tipo === "supabase"){
      u = REMOTO.url.replace(/\/$/,"") + "/rest/v1/" + REMOTO.tabela + "?select=*";
      h = { "apikey":REMOTO.chave, "Authorization":"Bearer "+REMOTO.chave };
    } else { u = REMOTO.url; }
    return fetch(u, { headers:h }).then(checa).then(function(r){ return r.json(); })
      .then(function(j){ return { modo:"remoto", registros: Array.isArray(j) ? j : (j.registros||[]) }; })
      .catch(function(err){ return { modo:"local", registros: ler(K_REG, []), erro:String(err) }; });
  }

  /* Muda o status de um registro (fluxo de aprovação do DHO) */
  function status(id, novo){
    var lista = ler(K_REG, []);
    lista.forEach(function(r){ if (r.id===id) { r.status = novo; r.statusTs = new Date().toISOString(); } });
    grava(K_REG, lista);
    if (!ligado) return Promise.resolve();
    if (REMOTO.tipo === "supabase"){
      return fetch(REMOTO.url.replace(/\/$/,"")+"/rest/v1/"+REMOTO.tabela+"?id=eq."+encodeURIComponent(id), {
        method:"PATCH",
        headers:{ "Content-Type":"application/json", "apikey":REMOTO.chave, "Authorization":"Bearer "+REMOTO.chave },
        body: JSON.stringify({ status:novo, statusTs:new Date().toISOString() })
      }).then(checa).catch(function(){});
    }
    return Promise.resolve();
  }

  /* ---- coorte de referência (fictícia), desligada por padrão ------- */
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

  return { ligado:ligado, modo: ligado ? "remoto" : "local",
           eu:eu, cadastrar:cadastrar, sair:sair, registroLocal:registroLocal,
           salvar:salvar, listar:listar, status:status, valido:valido,
           seedOn:seedOn, setSeed:setSeed, seedRegistros:seedRegistros,
           K_EU:K_EU, K_REG:K_REG };
})();
