---
title: "Assessment"
description: "Assessment de prontidão em IA — 13 perguntas em quatro blocos, mais o objetivo de maturidade em 12 meses."
---

<style>
  .as-top{background:var(--paper);border-bottom:1px solid var(--line);padding:28px 0 0}
  .as-head{display:flex;justify-content:space-between;align-items:flex-end;gap:20px;flex-wrap:wrap}
  .as-head h1{font-size:clamp(25px,3.4vw,33px)}
  .as-ver{font-family:var(--mono);font-size:10.5px;letter-spacing:.1em;color:var(--tx-3);text-align:right;line-height:1.5}
  .bar{display:flex;gap:3px;margin-top:22px}
  .bar div{height:4px;flex:1;background:var(--panel-2);border-radius:2px;transition:background .3s}
  .bar div.f{background:var(--blue)} .bar div.c{background:var(--yellow)}
  .as-meta{display:flex;justify-content:space-between;gap:14px;flex-wrap:wrap;
    font-family:var(--mono);font-size:11px;letter-spacing:.06em;color:var(--tx-2);padding:11px 0 16px}
  .as-meta b{color:var(--blue);font-weight:600}
  .saved{color:var(--ok)}

  .stage{padding:34px 0 20px;display:none} .stage.on{display:block}
  .bl-h{display:flex;align-items:center;gap:13px;margin-bottom:6px}
  .bl-h .L{width:34px;height:34px;border-radius:9px;background:var(--blue-100);color:var(--blue-700);
    display:grid;place-items:center;font-family:var(--disp);font-weight:700;font-size:15px}
  .bl-h .t{font-family:var(--disp);font-weight:700;font-size:20px;color:var(--ink);letter-spacing:-.015em}
  .bl-h .r{margin-left:auto;font-family:var(--mono);font-size:11px;color:var(--tx-3)}
  .bl-d{color:var(--tx-2);font-size:14.5px;margin-bottom:22px}

  .q{background:var(--paper);border:1px solid var(--line);border-radius:14px;padding:22px;margin-bottom:14px}
  .q.done{border-color:var(--blue-100)}
  .q-h{display:flex;gap:11px;align-items:baseline}
  .q-id{font-family:var(--mono);font-size:11px;color:var(--blue);font-weight:600;flex-shrink:0;padding-top:2px}
  .q-t{font-family:var(--disp);font-weight:600;font-size:16.5px;color:var(--ink);line-height:1.35;letter-spacing:-.01em}
  .q-sub{font-family:var(--mono);font-size:10px;letter-spacing:.1em;text-transform:uppercase;color:var(--tx-3);margin-top:5px}
  .opts{display:grid;gap:8px;margin-top:16px}
  .opt{display:grid;grid-template-columns:auto 1fr auto;gap:12px;align-items:center;padding:13px 15px;
    border:1px solid var(--line);border-radius:10px;cursor:pointer;background:var(--paper);
    transition:border-color .14s,background .14s}
  .opt:hover{border-color:var(--blue-300);background:var(--canvas)}
  .opt input{position:absolute;opacity:0;width:0;height:0}
  .opt .rd{width:19px;height:19px;border-radius:50%;border:2px solid var(--line-2);flex-shrink:0;
    display:grid;place-items:center;transition:border-color .14s}
  .opt .rd::after{content:"";width:9px;height:9px;border-radius:50%;background:var(--blue);transform:scale(0);transition:transform .16s}
  .opt .tx{font-size:14.5px;line-height:1.45;color:var(--tx)}
  .opt .lv{font-family:var(--mono);font-size:9.5px;letter-spacing:.08em;text-transform:uppercase;
    color:var(--tx-3);white-space:nowrap}
  .opt:has(input:checked){border-color:var(--blue);background:var(--info-s)}
  .opt:has(input:checked) .rd{border-color:var(--blue)}
  .opt:has(input:checked) .rd::after{transform:scale(1)}
  .opt:has(input:checked) .tx{color:var(--ink);font-weight:500}
  .opt:has(input:checked) .lv{color:var(--blue);font-weight:600}
  .opt:has(input:focus-visible){outline:3px solid var(--blue-500);outline-offset:2px}

  .skipbox{display:flex;gap:16px;margin-top:11px;padding-top:11px;border-top:1px solid var(--line);flex-wrap:wrap}
  .skipbox label{display:flex;align-items:center;gap:7px;font-size:12.5px;color:var(--tx-2);cursor:pointer}
  .skipbox input{accent-color:var(--tx-3)}

  textarea{width:100%;min-height:104px;border:1px solid var(--line);border-radius:10px;padding:13px 15px;
    font-family:var(--sans);font-size:14.5px;line-height:1.55;color:var(--ink);background:var(--paper);resize:vertical}
  textarea:focus{outline:none;border-color:var(--blue);box-shadow:0 0 0 3px var(--info-s)}
  .cnt{font-family:var(--mono);font-size:10.5px;color:var(--tx-3);text-align:right;margin-top:5px}

  .goal-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:14px;margin-top:16px}
  @media(max-width:720px){ .goal-grid{grid-template-columns:1fr} }
  .fld label{display:block;font-family:var(--disp);font-weight:600;font-size:13.5px;color:var(--ink);margin-bottom:6px}
  .fld .hint{font-size:12px;color:var(--tx-3);margin-bottom:8px;line-height:1.4}
  .fld select,.fld input[type=text]{width:100%;border:1px solid var(--line);border-radius:10px;padding:12px 14px;
    font-family:var(--sans);font-size:14.5px;color:var(--ink);background:var(--paper)}
  .fld select:focus,.fld input:focus{outline:none;border-color:var(--blue);box-shadow:0 0 0 3px var(--info-s)}

  .nav-b{display:flex;gap:11px;justify-content:space-between;align-items:center;flex-wrap:wrap;
    padding:22px 0 60px;border-top:1px solid var(--line);margin-top:26px}
  .nav-b .lft{display:flex;gap:11px;flex-wrap:wrap}
  .warn{font-size:13px;color:var(--warn);background:var(--yellow-soft);border:1px solid #F5E3AE;
    border-radius:9px;padding:10px 14px;display:none}
  .warn.on{display:block}
  .btn[disabled]{opacity:.45;cursor:not-allowed;pointer-events:none}
</style>

<div class="as-top">
  <div class="wrap">
    <div class="as-head">
      <div>
        <span class="sk">Assessment de prontidão</span>
        <h1 style="margin-top:10px">Prontidão em IA</h1>
      </div>
      <div class="as-ver">Instrumento <b>v6</b> · out/2026<br>13 perguntas · ~10 min</div>
    </div>
    <div class="bar" id="bar"></div>
    <div class="as-meta">
      <span id="pos">Bloco 1 de 6</span>
      <span id="saveSt" class="saved">Rascunho salvo neste navegador</span>
    </div>
  </div>
</div>

<div class="wrap">
  <form id="form" autocomplete="off">
    <div id="stages"></div>
  </form>

  <div class="nav-b">
    <div class="lft">
      <button class="btn btn-line" type="button" id="prev">← Voltar</button>
      <button class="btn btn-line" type="button" id="clear" style="color:var(--tx-2)">Limpar rascunho</button>
    </div>
    <div style="display:flex;gap:11px;align-items:center;flex-wrap:wrap">
      <div class="warn" id="warn">Responda todas as perguntas deste bloco para continuar.</div>
      <button class="btn btn-primary" type="button" id="next">Continuar →</button>
    </div>
  </div>
</div>

<script src="{{ '/bbts/assets/store.js' | relative_url }}"></script>
<script src="{{ '/bbts/assets/assessment-data.js' | relative_url }}"></script>
<script>
(function(){
  var B = window.BBTS, S = window.BBTS_STORE, KEY = "bbts_assess_v6";
  var R = {};            // respostas fechadas
  var T = {};            // textos abertos + objetivo
  var SK = {};           // "não sei" / "não se aplica"
  try { var s = JSON.parse(localStorage.getItem(KEY)||"{}"); R=s.R||{}; T=s.T||{}; SK=s.SK||{}; } catch(e){}

  var C = S.eu() || {};  // identidade de quem está respondendo

  var ordem = ["uso","base","infl","ctx","retorno"];
  var stages = [{ tipo:"cadastro" }].concat(ordem.map(function(k){
    return { tipo:"bloco", key:k, perguntas: B.perguntas.filter(function(p){return p.bloco===k;}) };
  }));
  stages.push({ tipo:"objetivo" });
  var cur = 0;

  function save(){
    try{ localStorage.setItem(KEY, JSON.stringify({R:R,T:T,SK:SK,ts:Date.now()})); }catch(e){}
    if ((C.nome||"").trim() && S.valido(C.email)) S.cadastrar(C);
    var el=document.getElementById("saveSt");
    el.textContent="Rascunho salvo "+new Date().toLocaleTimeString("pt-BR",{hour:"2-digit",minute:"2-digit"});
  }
  function esc(s){ return String(s).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;"); }

  function render(){
    var host = document.getElementById("stages");
    host.innerHTML = stages.map(function(st, i){
      if (st.tipo === "cadastro") return stageCadastro(i);
      if (st.tipo === "objetivo") return stageObjetivo(i);
      return stageBloco(st, i);
    }).join("");
    bind();
    show(cur);
  }

  function stageCadastro(i){
    return '<section class="stage" data-i="'+i+'">'
      + '<div class="bl-h"><span class="L">0</span><span class="t">Identificação</span>'
      + '<span class="r">entra na base do DHO</span></div>'
      + '<p class="bl-d">Seu resultado individual fica vinculado ao seu e-mail. No painel do DHO, você entra nos indicadores agregados do grupo.</p>'
      + '<div class="q">'
      + '<div class="goal-grid">'
      + '<div class="fld"><label for="c_nome">Nome</label>'
      + '<div class="hint">Como você quer aparecer no seu PDI.</div>'
      + '<input type="text" id="c_nome" value="'+esc(C.nome||"")+'" placeholder="Nome e sobrenome"></div>'
      + '<div class="fld"><label for="c_email">E-mail</label>'
      + '<div class="hint">Identifica você na base e permite o DHO devolver o PDI revisado.</div>'
      + '<input type="email" id="c_email" value="'+esc(C.email||"")+'" placeholder="nome@bbts.com.br"></div>'
      + '</div>'
      + '</div>'
      + '<div class="note"><b>O que é guardado:</b> nome, e-mail e suas respostas — usados para gerar seu PDI e compor os indicadores agregados do painel. '
      + (S.ligado
          ? 'Nesta demonstração os registros vão para uma base compartilhada, usada apenas para montar o painel ao vivo.'
          : 'Nesta demonstração a base ainda não é compartilhada: os registros ficam no navegador em que foram preenchidos.')
      + ' Você pode apagar tudo a qualquer momento no botão “Apagar respostas”.</div>'
      + '</section>';
  }

  function stageBloco(st, i){
    var b = B.blocos[st.key];
    var qs = st.perguntas.map(function(p){
      var opts = p.opcoes.map(function(txt, k){
        var n = k+1, ck = Number(R[p.id])===n ? " checked" : "";
        return '<label class="opt"><input type="radio" name="'+p.id+'" value="'+n+'"'+ck+'>'
          + '<span class="rd"></span><span class="tx">'+esc(txt)+'</span>'
          + '<span class="lv">'+esc(p.escada[k])+'</span></label>';
      }).join("");
      var sk = SK[p.id]||"";
      return '<div class="q'+(R[p.id]?" done":"")+'" data-q="'+p.id+'">'
        + '<div class="q-h"><span class="q-id">'+p.id+'</span><div>'
        + '<div class="q-t">'+esc(p.enunciado)+'</div>'
        + '<div class="q-sub">'+esc(p.titulo)+(p.perfil?" · define o perfil":"")+(p.foraDoIndice?" · fora do índice":"")+'</div>'
        + '</div></div><div class="opts">'+opts+'</div>'
        + '<div class="skipbox">'
        + '<label><input type="radio" name="sk_'+p.id+'" value="nao_sei"'+(sk==="nao_sei"?" checked":"")+'> Não sei responder</label>'
        + '<label><input type="radio" name="sk_'+p.id+'" value="nao_aplica"'+(sk==="nao_aplica"?" checked":"")+'> Não se aplica ao meu trabalho</label>'
        + (sk?'<label><input type="radio" name="sk_'+p.id+'" value=""> Limpar</label>':'')
        + '</div></div>';
    }).join("");
    return '<section class="stage" data-i="'+i+'">'
      + '<div class="bl-h"><span class="L">'+b.letra+'</span><span class="t">'+esc(b.nome)+'</span>'
      + '<span class="r">'+st.perguntas.length+' pergunta'+(st.perguntas.length>1?"s":"")+' · '+b.min+' a '+b.max+' pts</span></div>'
      + '<p class="bl-d">'+esc(b.desc)+'</p>'+qs+'</section>';
  }

  function stageObjetivo(i){
    return '<section class="stage" data-i="'+i+'">'
      + '<div class="bl-h"><span class="L" style="background:var(--yellow-soft);color:var(--warn)">F</span>'
      + '<span class="t">Objetivo de 12 meses</span><span class="r">etapa humana</span></div>'
      + '<p class="bl-d">O que você escrever aqui será transformado em capacidades-alvo — e você confirma ou corrige a interpretação antes de qualquer proposta.</p>'
      + '<div class="q"><div class="q-h"><span class="q-id">OBJ</span><div>'
      + '<div class="q-t">Daqui a 12 meses, o que você precisa ser capaz de realizar com IA no seu trabalho?</div>'
      + '<div class="q-sub">Campo principal · obrigatório</div></div></div>'
      + '<textarea id="t_obj" placeholder="Ex.: preciso conseguir prototipar agentes para processos internos, integrar fontes autorizadas e avaliar os resultados, com supervisão nas decisões sensíveis.">'+esc(T.obj||"")+'</textarea>'
      + '<div class="cnt"><span id="c_obj">0</span> caracteres · mínimo 40</div>'
      + '<div class="goal-grid">'
      + '<div class="fld"><label for="f_aut">Grau de autonomia necessário</label>'
      + '<div class="hint">Até onde você precisa ir sem depender de outra pessoa.</div>'
      + '<select id="f_aut"><option value="">Selecione…</option>'
      + ['Executar com apoio de exemplos prontos','Executar sozinho e avaliar o resultado','Construir algo que outras pessoas usem','Orientar outras pessoas e revisar o que elas produzem']
          .map(function(o){return '<option'+(T.aut===o?" selected":"")+'>'+o+'</option>';}).join("")
      + '</select></div>'
      + '<div class="fld"><label for="f_ded">Dedicação disponível por semana</label>'
      + '<div class="hint">Tempo real que você consegue reservar para estudar. Define quantos cursos cabem em cada ciclo.</div>'
      + '<select id="f_ded"><option value="">Selecione…</option>'
      + [1,2,3,4,5,6,8,10].map(function(o){ return '<option value="'+o+'"'+(Number(T.ded)===o?" selected":"")+'>'+o+' hora'+(o>1?"s":"")+' por semana</option>'; }).join("")
      + '</select></div>'
      + '<div class="fld"><label for="f_proc">Atividade ou processo que quer melhorar</label>'
      + '<div class="hint">Um processo concreto do seu dia a dia.</div>'
      + '<input type="text" id="f_proc" value="'+esc(T.proc||"")+'" placeholder="Ex.: conferência de contratos de fornecedor"></div>'
      + '</div>'
      + '<div class="fld" style="margin-top:14px"><label for="f_rest">Restrições relevantes</label>'
      + '<div class="hint">O que limita seu desenvolvimento: agenda, acesso a ferramenta, sigilo do dado, exigência de aprovação.</div>'
      + '<input type="text" id="f_rest" value="'+esc(T.rest||"")+'" placeholder="Ex.: trabalho com dado sob sigilo; preciso de ferramenta homologada"></div>'
      + '</div>'
      + B.abertas.map(function(a){
          return '<div class="q"><div class="q-h"><span class="q-id">'+a.id+'</span><div>'
            + '<div class="q-t">'+esc(a.enunciado)+'</div>'
            + '<div class="q-sub">'+esc(a.titulo)+' · opcional</div></div></div>'
            + '<textarea id="t_'+a.id+'" placeholder="'+esc(a.placeholder)+'">'+esc(T[a.id]||"")+'</textarea></div>';
        }).join("")
      + '<div class="note" style="margin-top:6px"><b>Ao concluir</b>, seu registro entra na base e você vai direto para o seu diagnóstico e PDI. Nenhuma proposta é aplicada sem revisão humana.</div>'
      + '</section>';
  }

  function bind(){
    document.querySelectorAll('.opt input[type=radio]').forEach(function(el){
      el.addEventListener("change", function(){
        R[el.name] = Number(el.value);
        SK[el.name] = "";
        var box = el.closest('.q');
        box.classList.add("done");
        box.querySelectorAll('input[name^=sk_]').forEach(function(s){ s.checked=false; });
        save(); bar(); warnOff();
      });
    });
    document.querySelectorAll('input[name^=sk_]').forEach(function(el){
      el.addEventListener("change", function(){
        var id = el.name.slice(3);
        SK[id] = el.value;
        if (el.value){ delete R[id];
          document.querySelectorAll('input[name="'+id+'"]').forEach(function(r){ r.checked=false; });
          el.closest('.q').classList.remove("done");
        }
        save(); bar(); warnOff();
      });
    });
    ["obj","proc","rest"].forEach(function(k){
      var el = document.getElementById(k==="obj"?"t_obj":"f_"+k); if(!el) return;
      el.addEventListener("input", function(){ T[k]=el.value; save(); if(k==="obj") cnt(); warnOff(); });
    });
    var aut = document.getElementById("f_aut");
    if (aut) aut.addEventListener("change", function(){ T.aut=aut.value; save(); });
    var ded = document.getElementById("f_ded");
    if (ded) ded.addEventListener("change", function(){ T.ded = ded.value ? Number(ded.value) : ""; save(); warnOff(); });
    B.abertas.forEach(function(a){
      var el = document.getElementById("t_"+a.id); if(!el) return;
      el.addEventListener("input", function(){ T[a.id]=el.value; save(); });
    });
    [["c_nome","nome"],["c_email","email"]].forEach(function(par){
      var el = document.getElementById(par[0]); if(!el) return;
      el.addEventListener("input", function(){ C[par[1]] = el.value; save(); warnOff(); });
    });
    cnt();
  }
  function cnt(){ var e=document.getElementById("t_obj"),c=document.getElementById("c_obj");
    if(e&&c) c.textContent=(e.value||"").trim().length; }

  function bar(){
    var tot = B.perguntas.length, feitas = 0;
    B.perguntas.forEach(function(p){ if (R[p.id] || SK[p.id]) feitas++; });
    var objOk = (T.obj||"").trim().length >= 40;
    var el = document.getElementById("bar");
    el.innerHTML = B.perguntas.map(function(p){
      return '<div class="'+(R[p.id]?"f":(SK[p.id]?"c":""))+'" title="'+p.id+'"></div>';
    }).join("") + '<div class="'+(objOk?"f":"")+'" title="Objetivo"></div>';
    document.getElementById("pos").textContent =
      "Etapa "+(cur+1)+" de "+stages.length+" · "+feitas+" de "+tot+" perguntas respondidas";
  }

  function show(i){
    cur = Math.max(0, Math.min(stages.length-1, i));
    document.querySelectorAll('.stage').forEach(function(s){
      s.classList.toggle("on", Number(s.dataset.i)===cur);
    });
    document.getElementById("prev").disabled = cur===0;
    var last = cur===stages.length-1;
    document.getElementById("next").textContent = last ? "Gerar diagnóstico →" : "Continuar →";
    bar(); warnOff();
    window.scrollTo({top:0,behavior:"smooth"});
  }
  function warnOff(){ document.getElementById("warn").classList.remove("on"); }

  function completo(i){
    var st = stages[i];
    if (st.tipo === "cadastro") return (C.nome||"").trim().length >= 3 && S.valido(C.email);
    if (st.tipo === "objetivo") return (T.obj||"").trim().length >= 40 && !!T.ded;
    return st.perguntas.every(function(p){ return R[p.id] || SK[p.id]; });
  }

  document.getElementById("prev").addEventListener("click", function(){ show(cur-1); });
  document.getElementById("next").addEventListener("click", function(){
    if (!completo(cur)){
      var w = document.getElementById("warn");
      var t = stages[cur].tipo;
      w.textContent = t==="cadastro"
        ? (((C.nome||"").trim().length < 3) ? "Informe seu nome."
           : "Informe um e-mail válido.")
        : t==="objetivo"
        ? ((T.obj||"").trim().length < 40 ? "Descreva seu objetivo de 12 meses com pelo menos 40 caracteres." : "Informe quanto tempo por semana você consegue dedicar.")
        : "Responda todas as perguntas deste bloco — ou marque “não sei” / “não se aplica”.";
      w.classList.add("on");
      var alvo = document.querySelector('.stage.on .q:not(.done)');
      if (alvo) alvo.scrollIntoView({behavior:"smooth",block:"center"});
      return;
    }
    if (cur === stages.length-1){
      save();
      var id = S.cadastrar(C);
      var btn = document.getElementById("next");
      btn.disabled = true; btn.textContent = "Registrando…";
      S.salvar({ id:id.id, nome:id.nome, email:id.email, criado:id.criado,
                 enviado:new Date().toISOString(), R:R, T:T, SK:SK, status:"submetido" })
       .then(function(){ window.location.href = "{{ '/bbts/resultado/' | relative_url }}"; });
      return;
    }
    show(cur+1);
  });
  document.getElementById("clear").addEventListener("click", function(){
    if (!confirm("Apagar todas as respostas salvas neste navegador?")) return;
    R={}; T={}; SK={}; C={}; S.sair();
    try{ localStorage.removeItem(KEY); }catch(e){}
    cur=0; render();
  });

  render();
})();
</script>
