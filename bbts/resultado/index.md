---
title: "Diagnóstico e PDI"
description: "Resultado do assessment de prontidão, interpretação do objetivo de 12 meses, lacunas priorizadas e proposta de Plano de Desenvolvimento Individual."
---

<style>
  .dimt{display:grid;grid-template-columns:repeat(auto-fit,minmax(248px,1fr));gap:12px;margin-top:22px}
  .dimt .d{background:var(--paper);border:1px solid var(--line);border-radius:13px;padding:17px 18px}
  .dimt .d.falta{border-color:var(--yellow-600);background:var(--yellow-soft)}
  .dimt .dh{display:flex;justify-content:space-between;align-items:baseline;gap:10px}
  .dimt .dn{font-family:var(--disp);font-weight:600;font-size:14.5px;color:var(--ink)}
  .dimt .dv{font-family:var(--mono);font-size:13px;color:var(--ink);font-weight:600;white-space:nowrap}
  .dimt .dv small{color:var(--tx-3);font-weight:400}
  .dimt .trilha{height:9px;background:var(--panel-2);border-radius:5px;position:relative;margin-top:11px}
  .dimt .trilha i{display:block;height:100%;background:var(--blue);border-radius:5px}
  .dimt .d.falta .trilha i{background:var(--warn)}
  .dimt .trilha .alvo{position:absolute;top:-4px;width:3px;height:17px;background:var(--ink);
    border-radius:2px;transform:translateX(-1.5px)}
  .dimt .dd{font-size:12.5px;color:var(--tx-2);line-height:1.45;margin-top:10px}
  .dimt .df{font-family:var(--mono);font-size:10px;letter-spacing:.07em;text-transform:uppercase;
    color:var(--warn);margin-top:8px}
  #quem{margin-top:11px;font-family:var(--mono);font-size:11.5px;letter-spacing:.05em;color:var(--tx-2)}
  #quem b{color:var(--ink);font-weight:600;letter-spacing:0;font-family:var(--sans);font-size:13.5px}
  #quem .sep{color:var(--line-2);margin:0 8px}
  #quem a{color:var(--blue);text-decoration:none;border-bottom:1px solid var(--blue-100)}
  #quem a:hover{border-color:var(--blue)}
  .rs-top{background:var(--paper);border-bottom:1px solid var(--line);padding:30px 0 26px}
  .rs-h{display:flex;justify-content:space-between;align-items:flex-start;gap:22px;flex-wrap:wrap}
  .rs-st{display:flex;align-items:center;gap:9px;background:var(--yellow-soft);border:1px solid #F5E3AE;
    border-radius:999px;padding:7px 15px;font-family:var(--mono);font-size:11px;letter-spacing:.08em;
    text-transform:uppercase;color:var(--warn);font-weight:600}
  .rs-st .d{width:7px;height:7px;border-radius:50%;background:var(--yellow-600)}

  .kpis{display:grid;grid-template-columns:repeat(4,1fr);gap:14px;margin-top:26px}
  @media(max-width:900px){ .kpis{grid-template-columns:repeat(2,1fr)} }
  @media(max-width:520px){ .kpis{grid-template-columns:1fr} }
  .kpi{background:var(--paper);border:1px solid var(--line);border-radius:13px;padding:18px}
  .kpi.hi{background:var(--blue-900);border-color:var(--blue-800)}
  .kpi .k{font-family:var(--mono);font-size:9.5px;letter-spacing:.14em;text-transform:uppercase;color:var(--tx-3)}
  .kpi.hi .k{color:var(--blue-300)}
  .kpi .l{font-size:12.5px;color:var(--tx-2);margin-top:5px;line-height:1.35}
  .kpi.hi .l{color:var(--blue-100)}
  .kpi .v{font-family:var(--disp);font-weight:800;font-size:34px;line-height:1;letter-spacing:-.03em;
    color:var(--ink);margin-top:9px;font-variant-numeric:tabular-nums}
  .kpi.hi .v{color:#fff}
  .kpi .v small{font-size:15px;font-weight:600;color:var(--tx-3);letter-spacing:0}
  .kpi.hi .v small{color:var(--blue-300)}
  .kpi .f{font-size:11.5px;color:var(--tx-3);margin-top:7px;line-height:1.4}
  .kpi.hi .f{color:var(--blue-300)}
  .kpi .v.y{color:var(--yellow)}

  .sub-g{display:grid;grid-template-columns:repeat(2,1fr);gap:14px;margin-top:20px}
  @media(max-width:780px){ .sub-g{grid-template-columns:1fr} }
  .sb{background:var(--paper);border:1px solid var(--line);border-radius:13px;padding:19px}
  .sb-h{display:flex;justify-content:space-between;align-items:baseline;gap:10px}
  .sb-n{font-family:var(--disp);font-weight:600;font-size:15.5px;color:var(--ink)}
  .sb-v{font-family:var(--disp);font-weight:700;font-size:19px;color:var(--ink);font-variant-numeric:tabular-nums}
  .sb-v small{font-size:12px;color:var(--tx-3);font-weight:500}
  .sb-d{font-size:12.5px;color:var(--tx-2);margin-top:4px;line-height:1.45}
  .trk{height:7px;background:var(--panel-2);border-radius:4px;margin-top:13px;overflow:hidden;position:relative}
  .trk i{display:block;height:100%;border-radius:4px;background:var(--blue);transition:width .7s var(--ease)}
  .trk .mk{position:absolute;top:-3px;width:2px;height:13px;background:var(--ink);opacity:.5}
  .sb-q{margin-top:13px;padding-top:11px;border-top:1px solid var(--line);display:grid;gap:7px}
  .sq{display:grid;grid-template-columns:36px 1fr auto auto;gap:9px;align-items:center;font-size:12.5px}
  .sq .id{font-family:var(--mono);font-size:10px;color:var(--tx-3)}
  .sq .nm{color:var(--tx)}
  .sq .dots{display:flex;gap:3px}
  .sq .dots i{width:7px;height:7px;border-radius:50%;background:var(--panel-2)}
  .sq .dots i.on{background:var(--blue)} .sq .dots i.tg{background:transparent;box-shadow:inset 0 0 0 2px var(--yellow-600)}
  .sq .n{font-family:var(--mono);font-size:11px;color:var(--tx-2);min-width:26px;text-align:right}

  .goal{background:var(--canvas);border:1px solid var(--line);border-radius:14px;padding:22px;margin-top:20px}
  .goal .orig{background:var(--paper);border-left:3px solid var(--yellow);border-radius:0 9px 9px 0;
    padding:13px 16px;font-size:14.5px;line-height:1.55;color:var(--tx);font-style:italic}
  .caps{display:grid;gap:9px;margin-top:16px}
  .cap{display:grid;grid-template-columns:auto 1fr;gap:11px;align-items:start;background:var(--paper);
    border:1px solid var(--line);border-radius:10px;padding:13px 15px}
  .cap .n{width:21px;height:21px;border-radius:6px;background:var(--blue-100);color:var(--blue-700);
    display:grid;place-items:center;font-family:var(--mono);font-size:10px;font-weight:600;flex-shrink:0}
  .cap .t{font-size:14px;line-height:1.5;color:var(--tx)}
  .cap .t b{color:var(--ink)}
  .confirm{display:flex;gap:11px;flex-wrap:wrap;margin-top:16px;padding-top:15px;border-top:1px solid var(--line)}

  .gap{display:grid;grid-template-columns:44px 1fr auto;gap:13px;align-items:center;padding:13px 0;
    border-bottom:1px solid var(--line)}
  .gap:last-child{border-bottom:0}
  .gap .pr{font-family:var(--disp);font-weight:700;font-size:13px;width:44px;height:28px;border-radius:7px;
    display:grid;place-items:center}
  .gap.p1 .pr{background:var(--alert-s);color:var(--alert)}
  .gap.p2 .pr{background:var(--yellow-soft);color:var(--warn)}
  .gap.pend .pr{background:var(--panel);color:var(--tx-2)}
  .gap .nm{font-family:var(--disp);font-weight:600;font-size:14.5px;color:var(--ink)}
  .gap .bl{font-family:var(--mono);font-size:10px;letter-spacing:.08em;text-transform:uppercase;color:var(--tx-3);margin-top:2px}
  /* o que fazer para fechar a lacuna — é o que a pessoa leva da tela */
  .gap .ac{font-size:13.5px;line-height:1.5;color:var(--tx);margin-top:7px;
    padding-left:11px;border-left:2px solid var(--blue-300)}
  .gap.ctx .ac{border-left-color:var(--yellow-600)}
  .gap .ac em{font-style:normal;font-family:var(--mono);font-size:9.5px;letter-spacing:.1em;
    text-transform:uppercase;color:var(--warn);display:block;margin-bottom:3px}
  @media(max-width:620px){
    .gap{grid-template-columns:44px 1fr;row-gap:6px}
    .gap .mv{grid-column:2;text-align:left}
  }
  .gap .mv{font-family:var(--mono);font-size:12px;color:var(--tx-2);white-space:nowrap}
  .gap .mv b{color:var(--blue);font-weight:600}

  .course{display:grid;grid-template-columns:auto 1fr auto;gap:14px;align-items:start;background:var(--paper);
    border:1px solid var(--line);border-radius:12px;padding:16px 18px;margin-bottom:10px}
  .course .ord{width:26px;height:26px;border-radius:7px;background:var(--blue);color:#fff;display:grid;
    place-items:center;font-family:var(--mono);font-size:11px;font-weight:600;flex-shrink:0}
  .course .ti{font-family:var(--disp);font-weight:600;font-size:15px;color:var(--ink);line-height:1.35}
  .course .me{display:flex;gap:7px;flex-wrap:wrap;margin-top:7px}
  .course .hr{font-family:var(--disp);font-weight:700;font-size:17px;color:var(--ink);white-space:nowrap}
  .course .hr small{font-size:11px;color:var(--tx-3);font-weight:500}

  .prat{background:var(--blue-900);border-radius:13px;padding:21px;color:var(--blue-100);margin-top:14px}
  .prat .k{font-family:var(--mono);font-size:9.5px;letter-spacing:.14em;text-transform:uppercase;color:var(--yellow)}
  .prat h4{color:#fff;margin-top:7px;font-size:16px}
  .prat p{color:var(--blue-100);font-size:13.5px;line-height:1.55;margin-top:8px}
  .prat .ev{margin-top:13px;padding-top:12px;border-top:1px solid rgba(91,138,230,.25);font-size:12.5px;color:var(--blue-300)}
  .prat .ev b{color:#fff}

  .cap-row{display:grid;grid-template-columns:repeat(4,1fr);gap:12px;margin-top:20px}
  @media(max-width:900px){ .cap-row{grid-template-columns:repeat(2,1fr)} }
  @media(max-width:520px){ .cap-row{grid-template-columns:1fr} }
  .cap-box{background:var(--paper);border:1px solid var(--line);border-radius:11px;padding:15px 16px}
  .cap-box .k{font-family:var(--mono);font-size:9.5px;letter-spacing:.13em;text-transform:uppercase;color:var(--tx-3)}
  .cap-box .v{font-family:var(--disp);font-weight:700;font-size:26px;color:var(--ink);margin-top:6px;
    letter-spacing:-.02em;line-height:1.1;font-variant-numeric:tabular-nums}
  .cap-box .v small{font-size:12.5px;color:var(--tx-3);font-weight:500;letter-spacing:0}
  .cap-box .f{font-size:11.5px;color:var(--tx-3);margin-top:6px;line-height:1.4}

  .cyc{background:var(--paper);border:1px solid var(--line);border-radius:14px;padding:18px 20px;margin-bottom:14px}
  .cyc.first{border-color:var(--blue);box-shadow:0 0 0 3px var(--info-s)}
  .cyc-h{display:flex;justify-content:space-between;align-items:baseline;gap:12px;flex-wrap:wrap;
    padding-bottom:13px;margin-bottom:14px;border-bottom:1px solid var(--line)}
  .cyc-n{font-family:var(--disp);font-weight:700;font-size:16px;color:var(--ink)}
  .cyc-m{font-family:var(--mono);font-size:11px;color:var(--tx-3);margin-left:10px}
  .cyc-hr{font-family:var(--mono);font-size:12px;color:var(--blue);font-weight:600;white-space:nowrap}
  .cyc .course{margin-bottom:9px;text-decoration:none;transition:border-color .15s,transform .15s}
  .cyc .course:last-child{margin-bottom:0}
  .cyc .course:hover{border-color:var(--blue-300);transform:translateX(2px)}
  .cyc .course .ti{color:var(--ink)}

  .tl{display:grid;gap:0;margin-top:16px}
  .tl-i{display:grid;grid-template-columns:78px 1fr;gap:16px;padding:13px 0;border-bottom:1px solid var(--line)}
  .tl-i:last-child{border-bottom:0}
  .tl-d{font-family:var(--mono);font-size:11px;color:var(--blue);font-weight:600;padding-top:2px}
  .tl-t{font-family:var(--disp);font-weight:600;font-size:14.5px;color:var(--ink)}
  .tl-s{font-size:13px;color:var(--tx-2);margin-top:3px;line-height:1.45}

  .empty{text-align:center;padding:70px 20px}
  .empty h2{margin-bottom:10px}
  #out{display:none}
</style>

<div id="empty" class="empty wrap">
  <h2>Nenhuma resposta encontrada</h2>
  <p class="lead" style="margin:0 auto 24px">Este diagnóstico é gerado a partir do assessment preenchido neste navegador.</p>
  <a class="btn btn-primary" href="{{ '/bbts/assessment/' | relative_url }}">Fazer o assessment →</a>
</div>

<div id="out">
  <div class="rs-top">
    <div class="wrap">
      <div class="rs-h">
        <div>
          <span class="sk">Diagnóstico e proposta</span>
          <h1 style="margin-top:10px;font-size:clamp(26px,3.6vw,36px)">Prontidão atual e plano do próximo ciclo</h1>
          <div id="quem"></div>
        </div>
        <div class="rs-st"><span class="d"></span>Aguardando revisão humana</div>
      </div>
      <div class="kpis" id="kpis"></div>
    </div>
  </div>

  <section class="sec" style="padding:40px 0">
    <div class="wrap">
      <span class="sk">Estado atual</span>
      <h2 style="margin-top:12px">Quatro sub-índices</h2>
      <p class="lead">O círculo vazado marca o nível-alvo derivado do seu objetivo. Tudo aqui é <b>autoavaliação</b> — nenhuma competência está validada por evidência ainda.</p>
      <div class="sub-g" id="subs"></div>
    </div>
  </section>

  <section class="sec plain" style="padding:40px 0">
    <div class="wrap">
      <span class="sk">Objetivo de 12 meses</span>
      <h2 style="margin-top:12px">O que você escreveu, estruturado</h2>
      <p class="lead">A interpretação abaixo é uma <b>proposta</b>. Nada vira requisito da sua função sem confirmação sua e do seu gestor.</p>
      <div class="goal" id="goal"></div>
    </div>
  </section>

  <section class="sec" style="padding:40px 0">
    <div class="wrap" id="sec-dimt" style="display:none">
      <span class="sk">Competências técnicas</span>
      <h2 style="margin-top:14px">Domínios de conhecimento técnico</h2>
      <p class="lead">Cada domínio agrupa competências próximas e mostra o que você já faz nelas.
        A marca escura é o alvo derivado do seu objetivo.</p>
      <div class="dimt" id="dimt"></div>
    </div>

    <div class="wrap">
      <span class="sk">Análise de lacunas</span>
      <h2 style="margin-top:12px">Distância entre onde está e onde quer chegar</h2>
      <p class="lead">Ordenado por tamanho da lacuna. Cada linha traz o comportamento que a fecha — o que fazer, não só o que estudar. O que não teve base suficiente aparece como pendente.</p>
      <div class="card" style="margin-top:20px;padding:6px 22px" id="gaps"></div>
    </div>
  </section>

  <section class="sec plain" style="padding:40px 0">
    <div class="wrap">
      <span class="sk">Proposta de PDI</span>
      <h2 style="margin-top:12px">Plano de 12 meses em quatro ciclos</h2>
      <p class="lead" id="pdi-lead"></p>
      <div id="capacidade"></div>
      <div style="margin-top:24px" id="ciclos"></div>
      <div id="pratica"></div>
      <h3 style="margin-top:30px">Marcos e revisão</h3>
      <div class="tl" id="tl"></div>
      <div class="note y" style="margin-top:22px" id="ressalva"></div>
    </div>
  </section>

  <section class="sec" style="padding:40px 0 60px;border-bottom:0">
    <div class="wrap">
      <span class="sk">Próxima decisão</span>
      <h2 style="margin-top:12px">Esta proposta ainda não vale</h2>
      <p class="lead">Nenhum PDI é considerado aprovado sem decisão humana explícita. Qualquer alteração posterior exige nova aprovação, vinculada à versão exata do plano.</p>
      <div class="grid g3" style="margin-top:22px">
        <div class="card"><div class="tag b" style="margin-bottom:9px">Você</div><h4>Comentar a proposta</h4><p style="font-size:13.5px;color:var(--tx-2)">Registrar o que não faz sentido no seu contexto antes de enviar ao gestor.</p></div>
        <div class="card"><div class="tag y" style="margin-bottom:9px">Gestor</div><h4>Aprovar, ajustar ou devolver</h4><p style="font-size:13.5px;color:var(--tx-2)">Validar o objetivo e as ações, ou devolver o objetivo para esclarecimento.</p></div>
        <div class="card"><div class="tag n" style="margin-bottom:9px">GEPES</div><h4>Supervisionar o processo</h4><p style="font-size:13.5px;color:var(--tx-2)">Acompanhar necessidades agregadas e manter o catálogo e a metodologia.</p></div>
      </div>
      <div style="display:flex;gap:11px;flex-wrap:wrap;margin-top:26px">
        <a class="btn btn-primary" href="{{ '/bbts/painel/' | relative_url }}">Ver painel da GEPES →</a>
        <a class="btn btn-line" href="{{ '/bbts/assessment/' | relative_url }}">Revisar respostas</a>
      </div>
    </div>
  </section>
</div>

<script src="{{ '/assets/firebase-config.js' | relative_url }}"></script>
<script src="https://www.gstatic.com/firebasejs/10.13.2/firebase-app-compat.js"></script>
<script src="https://www.gstatic.com/firebasejs/10.13.2/firebase-firestore-compat.js"></script>
<script src="https://www.gstatic.com/firebasejs/10.13.2/firebase-auth-compat.js"></script>
<script src="{{ '/bbts/assets/store.js' | relative_url }}"></script>
<script src="{{ '/bbts/assets/base-demo.js' | relative_url }}"></script>
<script src="{{ '/bbts/assets/assessment-data.js' | relative_url }}"></script>
<script src="{{ '/bbts/assets/catalogo-alura.js' | relative_url }}"></script>
<script src="{{ '/bbts/assets/pdi-engine.js' | relative_url }}"></script>
<script>
(function(){
  var B = window.BBTS, E = window.BBTS_PDI, S = window.BBTS_STORE;
  var alvoId = new URLSearchParams(location.search).get("id");

  if (alvoId){
    /* espera o Firebase restaurar a sessão antes de ler — senão o registro
       "some" para quem está logado, só porque a página carregou primeiro */
    S.pronto().then(function(){
      return S.listar();
    }).then(function(res){
      if (res.precisaLogin){ vazio("restrito"); return; }
      var todos = (res.registros||[]).concat(S.seedOn() ? S.seedRegistros() : []);
      var reg = todos.filter(function(r){ return r.id === alvoId; })[0];
      if (reg && reg.R && Object.keys(reg.R).length) montar(reg.R, reg.T||{}, reg.SK||{}, reg, true);
      else vazio("naoEncontrado");
    });
  } else {
    var st = {}; try { st = JSON.parse(localStorage.getItem("bbts_assess_v6")||"{}"); } catch(e){}
    if (Object.keys(st.R||{}).length) montar(st.R, st.T||{}, st.SK||{}, S.eu(), false);
  }

  /* Mensagens distintas: não ter respondido é diferente de não ter acesso. */
  function vazio(tipo){
    var e = document.getElementById("empty");
    if (tipo === "restrito"){
      e.innerHTML = '<h2>Acesso restrito</h2>'
        + '<p class="lead" style="margin:0 auto 24px">Este PDI é de outra pessoa. Ler o resultado '
        + 'de alguém exige estar autenticado no painel da GEPES.</p>'
        + '<a class="btn btn-primary" href="{{ "/bbts/painel/" | relative_url }}">Ir para o painel →</a>';
    } else if (tipo === "naoEncontrado"){
      e.innerHTML = '<h2>Registro não encontrado</h2>'
        + '<p class="lead" style="margin:0 auto 24px">Não há assessment com esse identificador. '
        + 'Ele pode ter sido removido, ou o link está incompleto.</p>'
        + '<a class="btn btn-primary" href="{{ "/bbts/painel/" | relative_url }}">Voltar ao painel →</a>';
    }
  }

  function montar(R, T, SK, pessoa, deOutrem){
  document.getElementById("empty").style.display="none";
  document.getElementById("out").style.display="block";

  var q = document.getElementById("quem");
  if (pessoa && pessoa.nome){
    q.innerHTML = '<b>'+String(pessoa.nome).replace(/[<>&]/g,"")+'</b>'
      + (pessoa.email ? '<span class="sep">·</span>'+String(pessoa.email).replace(/[<>&]/g,"") : "")
      + (deOutrem ? '<span class="sep">·</span><a href="{{ "/bbts/painel/" | relative_url }}">voltar ao painel</a>' : "");
  } else if (deOutrem) {
    q.innerHTML = '<a href="{{ "/bbts/painel/" | relative_url }}">voltar ao painel</a>';
  }

  var calc = B.calcular(R);
  var piso = E.alvoComPiso(R, SK, E.alvoDe(T, calc));
  var alvo = piso.alvo;
  /* eixo técnico: escala própria, lido em paralelo ao índice */
  var tec    = B.calcularTecnico(R);
  var lacTec = tec ? E.lacunasTecnicas(R, alvo) : [];
  var lac  = E.lacunas(R, SK, alvo);
  var blocoTop = E.blocoPrioritario(lac);
  function esc(s){ return String(s).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;"); }
  function nf(n){ return String(n).replace(".", ","); }

  /* KPIs */
  document.getElementById("kpis").innerHTML =
    '<div class="kpi hi"><div class="k">Índice de prontidão</div><div class="l">Soma dos quatro sub-índices</div>'
    + '<div class="v y">'+calc.indice+' <small>/ 48</small></div>'
    + '<div class="f">capacidade '+calc.capacidade+' de 36 · contexto '+calc.contexto+' de 12</div></div>'
    + '<div class="kpi"><div class="k">Perfil de uso</div>'
    + '<div class="l">degrau sustentado em P2 e P3</div>'
    + '<div class="v" style="font-size:25px">'+esc(calc.perfil.nome)+'</div>'
    + '<div class="f">'+esc(calc.perfil.desc)
    +   (calc.aCaminho ? ' <b>Em uma das duas pontas você já está acima — a caminho do degrau seguinte.</b>' : '')
    + '</div></div>'
    + (tec
        ? '<div class="kpi"><div class="k">Competência técnica</div><div class="l">T1 a T7 · escala própria</div>'
          + '<div class="v">'+tec.pontos+' <small>/ '+tec.max+'</small></div>'
          + '<div class="f"><b>'+esc(tec.nivel.nome)+'</b> · '+esc(tec.nivel.desc)+'</div></div>'
        : '')
    + '<div class="kpi"><div class="k">Tempo percebido</div><div class="l">Autodeclarado em P13</div>'
    + '<div class="v">'+(calc.horas===null?"—":nf(calc.horas))+' <small>h/semana</small></div>'
    + '<div class="f">percepção declarada, não medição</div></div>'
    + '<div class="kpi"><div class="k">Bloco prioritário</div><div class="l">Maior soma de lacunas</div>'
    + '<div class="v" style="font-size:22px">'+esc(E.ROTULO[blocoTop])+'</div>'
    + '<div class="f">concentra o esforço do primeiro ciclo</div></div>';

  /* sub-índices */
  document.getElementById("subs").innerHTML = ["uso","base","infl","ctx"].map(function(k){
    var b = B.blocos[k], v = calc.sub[k], pct = Math.round(calc.prop[k]*100);
    var qs = B.perguntas.filter(function(p){ return p.bloco===k; });
    var alvoSoma = qs.reduce(function(a,p){ return a + (alvo.porPergunta[p.id]||0); },0);
    var alvoPct = Math.round(alvoSoma / b.max * 100);
    var linhas = qs.map(function(p){
      var n = Number(R[p.id])||0, m = alvo.porPergunta[p.id]||0;
      var dots = [1,2,3,4].map(function(i){
        var cls = i<=n ? "on" : (i===m && m>n ? "tg" : "");
        return '<i class="'+cls+'"></i>';
      }).join("");
      return '<div class="sq"><span class="id">'+p.id+'</span><span class="nm">'+esc(p.titulo)+'</span>'
        + '<span class="dots">'+dots+'</span>'
        + '<span class="n">'+(SK[p.id]?"—":n+"/4")+'</span></div>';
    }).join("");
    return '<div class="sb"><div class="sb-h"><span class="sb-n">'+b.letra+' · '+esc(b.nome)+'</span>'
      + '<span class="sb-v">'+v+' <small>/ '+b.max+'</small></span></div>'
      + '<div class="sb-d">'+esc(b.desc)+'</div>'
      + '<div class="trk"><i style="width:'+pct+'%"></i><span class="mk" style="left:'+alvoPct+'%"></span></div>'
      + '<div class="sb-q">'+linhas+'</div></div>';
  }).join("");

  /* objetivo estruturado */
  var caps = [];
  caps.push({n:"1", t:"<b>Patamar de autonomia:</b> "+(T.aut || "não declarado — precisa ser confirmado")});
  if (T.proc) caps.push({n:"2", t:"<b>Processo-alvo:</b> "+esc(T.proc)});
  if (alvo.sinais.agente) caps.push({n:caps.length+1, t:"<b>Capacidade de automação e agentes:</b> o texto menciona automatizar ou integrar — isso eleva o alvo em automação, ferramentas sem programação e conceitos técnicos."});
  if (alvo.sinais.dado) caps.push({n:caps.length+1, t:"<b>Trabalho com dados:</b> o texto menciona análise ou indicadores — isso eleva o alvo no eixo de dados."});
  if (alvo.sinais.ensino) caps.push({n:caps.length+1, t:"<b>Disseminação:</b> o texto menciona time ou multiplicação — influência entra como capacidade-alvo, não como extra."});
  if (T.rest) caps.push({n:caps.length+1, t:"<b>Restrição declarada:</b> "+esc(T.rest)+" — considerada na escolha das ações."});
  caps.push({n:caps.length+1, t:"<b>Pendente de confirmação:</b> se estas capacidades são exigência da sua função ou aspiração pessoal. O sistema não decide isso."});

  document.getElementById("goal").innerHTML =
    '<div class="orig">“'+esc(T.obj||"")+'”</div>'
    + '<h4 style="margin-top:17px">Capacidades-alvo propostas</h4>'
    + '<div class="caps">' + caps.map(function(c){
        return '<div class="cap"><span class="n">'+c.n+'</span><span class="t">'+c.t+'</span></div>';
      }).join("") + '</div>'
    + '<div class="confirm"><button class="btn btn-primary" type="button" id="okGoal">Confirmar interpretação</button>'
    + '<a class="btn btn-line" href="{{ '/bbts/assessment/' | relative_url }}">Corrigir o que escrevi</a></div>';
  document.getElementById("okGoal").addEventListener("click", function(){
    this.textContent = "Interpretação confirmada ✓"; this.disabled = true;
    this.style.background = "var(--ok)";
  });

  /* leitura por dimensão técnica */
  var d1 = function(v){ return (Math.round(v*10)/10).toLocaleString("pt-BR",{minimumFractionDigits:1}); };
  if (tec && tec.dims){
    var alvoD = E.alvoDimensoes(alvo);
    document.getElementById("sec-dimt").style.display = "";
    document.getElementById("dimt").innerHTML = B.DIMENSOES.map(function(d){
      var v = tec.dims[d.id]; if (!v) return "";
      var meta = alvoD[d.id] || 0, temGap = v.valor < meta - 0.15;
      return '<div class="d'+(temGap?" falta":"")+'">'
        + '<div class="dh"><span class="dn">'+esc(d.nome)+'</span>'
        +   '<span class="dv">'+d1(v.valor)+'<small> / 4</small></span></div>'
        + '<div class="trilha"><i style="width:'+(v.valor/4*100)+'%"></i>'
        +   '<span class="alvo" style="left:'+(meta/4*100)+'%" title="Alvo: '+d1(meta)+'"></span></div>'
        + '<div class="dd">'+esc(d.desc)+'</div>'
        + (temGap ? '<div class="df">alvo '+d1(meta)+' · faltam '+d1(meta-v.valor)+'</div>' : '')
        + '</div>';
    }).join("");
  }

  /* lacunas */
  var vis = lac.concat(lacTec).filter(function(l){ return l.estado!=="atendido"; });
  document.getElementById("gaps").innerHTML = vis.length ? vis.map(function(l,i){
    if (l.estado==="pendente")
      return '<div class="gap pend"><span class="pr">—</span><div><div class="nm">'+esc(l.titulo)+'</div>'
        + '<div class="bl">'+esc(E.ROTULO[l.bloco])+' · '+l.id+'</div>'
        + '<div class="ac"><em>pendente de validação</em>'
        +   'Converse com seu gestor para esclarecer este ponto antes do próximo ciclo. '
        +   'Enquanto estiver em aberto, ele não entra no plano.</div></div>'
        + '<span class="mv">'+esc(l.motivo)+' · <b>validar</b></span></div>';
    var cls = l.delta>=2 ? "p1" : "p2";
    var ctx = E.SEM_CURSO.indexOf(l.id) >= 0;
    var acao = E.ACAO[l.id]
      ? '<div class="ac">' + (ctx ? '<em>acordo com o gestor, não curso</em>' : '')
          + esc(E.ACAO[l.id]) + '</div>'
      : '';
    return '<div class="gap '+cls+(ctx?" ctx":"")+'"><span class="pr">+'+l.delta+'</span>'
      + '<div><div class="nm">'+esc(l.titulo)+'</div>'
      +   '<div class="bl">'+esc(E.ROTULO[l.bloco])+' · '+l.id+'</div>'
      +   acao + '</div>'
      + '<span class="mv">nível '+l.atual+' → <b>'+l.meta+'</b></span></div>';
  }).join("") : '<div style="padding:18px 0;color:var(--tx-2)">Nenhuma lacuna identificada para o alvo declarado. Vale revisar se o objetivo está ambicioso o suficiente.</div>';

  /* ── plano de 12 meses ───────────────────────────────── */
  var perfilCat = E.perfilCatalogo(T, alvo);
  var cands = E.candidatos(lac.concat(lacTec), R, perfilCat);
  var horasSem = Number(T.ded) || 0;
  var plano = E.planejar(cands.slice(), horasSem);

  document.getElementById("pdi-lead").textContent =
    "Com " + horasSem + "h por semana, cabem cerca de " + plano.capCiclo
    + "h por ciclo de 90 dias. O plano abaixo distribui " + plano.totalC
    + " cursos e " + plano.totalH + " horas ao longo dos quatro ciclos.";

  document.getElementById("capacidade").innerHTML =
    '<div class="cap-row">'
    + '<div class="cap-box"><div class="k">Dedicação declarada</div><div class="v">' + horasSem + '<small> h/semana</small></div></div>'
    + '<div class="cap-box"><div class="k">Capacidade por ciclo</div><div class="v">' + plano.capCiclo + '<small> h</small></div>'
    + '<div class="f">' + horasSem + 'h x ' + plano.semanas + ' semanas x ' + plano.folga + ' de folga'
    + (plano.capCiclo >= plano.teto.horas ? ' - limitado pelo teto de ' + plano.teto.horas + 'h' : '') + '</div></div>'
    + '<div class="cap-box"><div class="k">Perfil no catálogo</div><div class="v" style="font-size:19px">' + esc(perfilCat) + '</div>'
    + '<div class="f">derivado do objetivo declarado</div></div>'
    + '<div class="cap-box"><div class="k">Cursos avaliados</div><div class="v">' + cands.length + '<small> de ' + window.BBTS_CATALOGO.cursos.length + '</small></div>'
    + '<div class="f">aderentes às lacunas identificadas</div></div></div>';

  document.getElementById("ciclos").innerHTML = plano.ciclos.map(function(c, ci){
    var meses = ["Meses 1–3","Meses 4–6","Meses 7–9","Meses 10–12"][ci];
    var corpo = c.cursos.length ? c.cursos.map(function(cur, k){
      return '<a class="course" href="' + cur.url + '" target="_blank" rel="noopener">'
        + '<span class="ord">' + (k+1) + '</span>'
        + '<div><div class="ti">' + esc(cur.t) + '</div><div class="me">'
        + '<span class="tag n">' + esc(cur.prof) + '</span>'
        + (cur.x ? '<span class="tag n">' + esc(cur.x) + '</span>' : '')
        + cur.comps.map(function(q){ return '<span class="tag b">' + q + '</span>'; }).join("")
        + '</div></div>'
        + '<span class="hr">' + cur.h + '<small> h</small></span></a>';
    }).join("") : '<div class="note" style="margin:0">Sem curso aderente adicional neste ciclo. Espaço reservado para consolidar a prática e reavaliar.</div>';
    return '<div class="cyc' + (ci===0 ? " first" : "") + '">'
      + '<div class="cyc-h"><div><span class="cyc-n">Ciclo ' + c.n + '</span>'
      + '<span class="cyc-m">' + meses + '</span></div>'
      + '<span class="cyc-hr">' + c.horas + ' de ' + c.capacidade + ' h</span></div>'
      + corpo + '</div>';
  }).join("");

  /* prática */
  var pr = E.PRATICAS[blocoTop];
  document.getElementById("pratica").innerHTML =
    '<div class="prat"><div class="k">Atividade prática · obrigatória</div><h4>'+esc(pr.titulo)+'</h4>'
    + '<p>'+esc(pr.desc)+'</p>'
    + '<div class="ev"><b>Evidência esperada:</b> '+esc(pr.evidencia)+'</div></div>';

  /* marcos */
  var hoje = new Date();
  function dMais(d){ var x=new Date(hoje); x.setDate(x.getDate()+d);
    return x.toLocaleDateString("pt-BR",{day:"2-digit",month:"short"}); }
  document.getElementById("tl").innerHTML = [
    ["Dia 0",  "Aprovação do plano", "Gestor aprova, ajusta ou devolve. Sem isso, o ciclo não começa."],
    ["Dia 30", "Primeiro curso concluído", "Registro de conclusão. Não eleva nível por si só."],
    ["Dia 60", "Atividade prática em andamento", "Primeira evidência parcial registrada."],
    ["Dia 90", "Revisão de ciclo", "Avaliação da evidência pelo responsável e recálculo do plano."]
  ].map(function(r,i){
    return '<div class="tl-i"><div class="tl-d">'+r[0]+'<br><span style="color:var(--tx-3);font-weight:400">'+dMais([0,30,60,90][i])+'</span></div>'
      + '<div><div class="tl-t">'+r[1]+'</div><div class="tl-s">'+r[2]+'</div></div></div>';
  }).join("");

  /* ressalvas */
  var res = ["<b>Conclusão de curso não eleva nível.</b> A evolução depende da evidência prática avaliada por um responsável humano."];
  var semCurso = lac.filter(function(l){ return l.estado==="lacuna" && E.SEM_CURSO.includes(l.id); });
  if (piso.elevado) res.push("<b>Seu objetivo de 12 meses já está coberto pelo seu nível atual.</b> "
    + "Em vez de devolver um plano vazio, o sistema subiu um degrau nas competências onde ainda "
    + "há espaço e montou o passo seguinte. Se o objetivo era mesmo esse, vale revisá-lo para cima "
    + "com o gestor — ou tratar este plano como consolidação.");
  if (piso.noTopo) res.push("<b>Você está no topo da escada em tudo que formação cobre.</b> "
    + "Não há curso a propor: o passo seguinte é construir algo que outras pessoas usem e ensinar "
    + "quem está atrás. A atividade prática de cada ciclo vale mais que qualquer trilha aqui.");
  if (plano.apertados && plano.apertados.length) res.push("<b>Ritmo apertado em "
    + (plano.apertados.length === 1 ? "um ciclo" : plano.apertados.length + " ciclos") + ".</b> "
    + "Com " + (T.ded||0) + "h por semana, o curso ocupa o ciclo inteiro e não sobra folga para "
    + "imprevisto. Ele entrou mesmo assim porque plano vazio não ajuda ninguém — mas é o primeiro "
    + "item a renegociar se a agenda apertar.");
  if (semCurso.length) res.push("<b>"+semCurso.length+" lacuna"+(semCurso.length>1?"s":"")+" de contexto</b> ("+semCurso.map(function(d){return d.id;}).join(", ")+") — ferramenta, ambiente ou agenda não se resolvem com curso. Requer acordo com o gestor.");
  if (!tec) res.push("<b>Bloco técnico não respondido.</b> As cinco perguntas de competência "
    + "técnica entraram no instrumento depois deste assessment. Responder de novo refina bastante "
    + "a seleção de cursos, porque elas descrevem prática e não percepção.");
  if (window.BBTS_CATALOGO.estimativaHoras) res.push("<b>Carga horária estimada.</b> A base de cursos não traz duração; as horas vêm da profundidade (Introdutório 8h · Intermediário 12h · Avançado 16h) e devem ser substituídas pela carga real antes do uso institucional.");
  var pend = lac.filter(function(l){return l.estado==="pendente";});
  if (pend.length) res.push("<b>"+pend.length+" item"+(pend.length>1?"s":"")+" pendente"+(pend.length>1?"s":"")+" de validação</b> — respondido como “não sei” ou “não se aplica”. Requer conversa com o gestor antes do próximo ciclo.");
  if (calc.contexto <= 6) res.push("<b>Contexto de trabalho baixo ("+calc.contexto+" de 12).</b> Formação não compensa falta de ferramenta, permissão ou agenda — o acordo com o gestor é pré-requisito.");
  document.getElementById("ressalva").innerHTML = res.join("<br><br>");
  }
})();
</script>
