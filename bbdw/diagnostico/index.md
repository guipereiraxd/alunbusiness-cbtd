---
title: "Descobrir meu próximo passo"
description: "Responda algumas perguntas e receba um próximo passo para praticar no dia a dia: uma combinação de habilidades, uma ação para a semana e um conteúdo da Alura."
---

<style>
  /* ── barra do topo do diagnóstico ───────────────────────────── */
  .dg-top{padding:26px 0 22px}
  .dg-top .lin{display:flex;justify-content:space-between;align-items:center;gap:16px;flex-wrap:wrap}
  .dg-top .rot{font-family:var(--mono);font-size:11.5px;letter-spacing:.14em;text-transform:uppercase;color:var(--ouro)}
  .dg-top .prog{font-family:var(--mono);font-size:12.5px;letter-spacing:.06em;color:var(--tx-2)}
  .barra{display:flex;gap:4px;margin-top:14px}
  .barra i{height:5px;flex:1;background:rgba(255,255,255,.12);border-radius:3px;transition:background .3s}
  .barra i.f{background:var(--ouro)}
  .barra i.c{background:#fff}

  /* ── etapas ─────────────────────────────────────────────────── */
  .etapa{display:none;padding:40px 0 70px}
  .etapa.on{display:block}
  .dg-wrap{max-width:720px}
  .etapa h1,.etapa h2.q{font-size:clamp(23px,3.4vw,31px);letter-spacing:-.025em;line-height:1.22;max-width:30ch}
  .etapa .intro{font-size:17px;color:var(--tx-2);margin-top:14px;line-height:1.6;max-width:60ch}
  .etapa .obs{font-size:15px;color:var(--tx-3);margin-top:10px}
  .pergunta-n{font-family:var(--mono);font-size:12px;letter-spacing:.12em;text-transform:uppercase;color:var(--ouro);margin-bottom:12px}

  /* opções: alvo grande, seleção explícita, cor nunca é o único sinal */
  .opcoes{display:grid;gap:10px;margin-top:26px}
  .opcoes[role=radiogroup]{list-style:none;padding:0}
  .opc{display:grid;grid-template-columns:auto 1fr;gap:14px;align-items:center;width:100%;text-align:left;
    min-height:56px;padding:14px 18px;border-radius:14px;cursor:pointer;
    background:var(--papel);border:1.5px solid var(--borda-campo);color:var(--tinta);
    font:500 16.5px/1.4 var(--sans);transition:border-color .14s,background .14s,transform .14s}
  .opc:hover{border-color:var(--ouro);background:var(--ouro-fundo)}
  .opc .rd{width:22px;height:22px;border-radius:50%;border:2px solid var(--borda-campo);display:grid;place-items:center;flex:none}
  .opc .rd::after{content:"";width:11px;height:11px;border-radius:50%;background:var(--ouro);transform:scale(0);transition:transform .16s}
  .opc[aria-checked=true]{border-color:var(--ouro);background:var(--ouro-fundo);box-shadow:inset 0 0 0 1px var(--ouro)}
  .opc[aria-checked=true] .rd{border-color:var(--ouro)}
  .opc[aria-checked=true] .rd::after{transform:scale(1)}
  .opc.ausente{margin-top:6px;background:transparent;border-style:dashed;color:var(--tx-2);font-weight:500}
  .opc.ausente[aria-checked=true]{color:var(--tinta)}

  .ajuda{margin-top:18px;font-size:15px;color:var(--tx-2)}
  .ajuda summary{cursor:pointer;color:var(--ouro);font-weight:600;list-style:none;display:inline-flex;align-items:center;gap:8px;min-height:44px}
  .ajuda summary::-webkit-details-marker{display:none}
  .ajuda summary::before{content:"+";font-family:var(--mono);width:22px;height:22px;border-radius:50%;
    border:1.5px solid var(--ouro);display:grid;place-items:center;font-size:14px}
  .ajuda[open] summary::before{content:"–"}
  .ajuda p{margin-top:8px;padding:12px 16px;background:var(--painel);border-radius:10px;line-height:1.55}

  .nav{display:flex;justify-content:space-between;gap:12px;margin-top:34px;flex-wrap:wrap}
  .nav .bt{min-width:160px}
  @media(max-width:480px){ .nav .bt{flex:1} }

  /* ── dupla sugerida ─────────────────────────────────────────── */
  .dupla-sug{margin-top:26px;padding:26px;border-radius:18px;background:var(--exec);color:#fff;position:relative;overflow:hidden;isolation:isolate}
  .dupla-sug::before{content:"";position:absolute;inset:0;z-index:-1;
    background:radial-gradient(520px 300px at 90% -10%, rgba(209,164,118,.2), transparent 62%),
               radial-gradient(420px 300px at 0% 110%, rgba(51,86,255,.3), transparent 64%)}
  .dupla-sug .mov{font-family:var(--mono);font-size:11.5px;letter-spacing:.14em;text-transform:uppercase;color:#D1A476}
  .dupla-sug h3{color:#fff;font-size:clamp(22px,3vw,28px);margin-top:8px;letter-spacing:-.02em}
  .dupla-sug .simples{color:#E3C19C;font-weight:600;font-size:17px;margin-top:4px}
  .dupla-sug p{color:#CFD2D8;margin-top:12px;font-size:15.5px;line-height:1.55}
  .dupla-sug .motivo{margin-top:16px;padding-top:14px;border-top:1px solid rgba(255,255,255,.14);font-size:15px;color:#E8E9EC}
  .duplas{display:grid;gap:10px;margin-top:14px}
  .duplas .opc{align-items:start;padding:16px 18px}
  .duplas .opc .rd{margin-top:3px}
  .duplas .opc small{display:block;color:var(--tx-2);font-weight:400;font-size:14.5px;margin-top:3px}
  .duplas .opc b{font-weight:600}

  /* ── resultado ──────────────────────────────────────────────── */
  .res-cab{background:var(--exec);color:#fff;padding:52px 0 54px;position:relative;overflow:hidden;isolation:isolate}
  .res-cab::before{content:"";position:absolute;inset:0;z-index:-1;
    background:radial-gradient(720px 420px at 86% -16%, rgba(209,164,118,.16), transparent 62%),
               radial-gradient(560px 400px at -4% 116%, rgba(51,86,255,.26), transparent 64%),
               linear-gradient(180deg,var(--exec) 0%,var(--exec-2) 100%)}
  .res-cab .olho{color:#D1A476}
  .forca{margin-top:22px;padding:18px 22px;border-radius:14px;background:rgba(255,255,255,.07);border:1px solid rgba(255,255,255,.14);font-size:17px;line-height:1.5;color:#fff}
  .forca b{color:#E3C19C;font-weight:600}
  .res-cab h1{color:#fff;font-size:clamp(28px,4.2vw,44px);margin-top:26px;letter-spacing:-.03em;line-height:1.1;max-width:22ch}
  .res-cab .simples{color:#E3C19C;font-size:clamp(17px,2vw,21px);font-weight:600;margin-top:8px}
  .res-cab .ori{display:inline-flex;align-items:center;gap:8px;margin-top:18px;padding:8px 14px;border-radius:999px;
    background:rgba(209,164,118,.14);border:1px solid rgba(209,164,118,.4);color:#E3C19C;font-family:var(--mono);font-size:12px;letter-spacing:.1em;text-transform:uppercase}
  .res-cab .expl{margin-top:20px;font-size:17.5px;line-height:1.6;color:#E8E9EC;max-width:62ch}

  .res-corpo{padding:48px 0 60px}
  .bloco{margin-top:34px}
  .bloco:first-child{margin-top:0}
  .bloco h2{font-size:clamp(20px,2.6vw,25px);letter-spacing:-.02em}
  .bloco .olho{margin-bottom:10px}
  .acao{margin-top:16px;padding:24px 26px;border-radius:16px;background:var(--papel);border:1px solid var(--linha);box-shadow:var(--elev-1);font-size:17px;line-height:1.6;color:var(--tinta)}
  .acao .evid{margin-top:14px;padding-top:14px;border-top:1px dashed var(--linha-2);font-size:15px;color:var(--tx-2)}
  .acao .evid b{color:var(--tinta);font-weight:600}
  .compromisso{margin-top:18px;display:flex;gap:12px;align-items:center;flex-wrap:wrap}
  .compromisso .ok{color:var(--ok);font-weight:600;font-size:15px}

  .curso{margin-top:16px;padding:24px 26px;border-radius:16px;background:var(--papel);border:1px solid var(--linha)}
  .curso .tipo{font-family:var(--mono);font-size:11.5px;letter-spacing:.12em;text-transform:uppercase;color:var(--ouro)}
  .curso h3{font-size:19px;margin-top:8px;letter-spacing:-.015em;line-height:1.3}
  .curso p{font-size:15.5px;color:var(--tx-2);margin-top:10px;line-height:1.55}
  .curso .acesso{display:inline-block;margin-top:12px;font-size:13.5px;color:var(--tx-2);padding:5px 10px;border-radius:8px;background:var(--painel)}
  .curso .bt{margin-top:16px}
  .curso.comp{padding:18px 20px;margin-top:10px}
  .curso.comp h3{font-size:16.5px}
  .mais summary{cursor:pointer;color:var(--ouro);font-weight:600;margin-top:16px;min-height:44px;display:inline-flex;align-items:center}

  .plano{display:grid;gap:12px;margin-top:16px}
  .plano .dia{display:grid;grid-template-columns:92px 1fr;gap:16px;padding:18px 20px;border-radius:14px;background:var(--papel);border:1px solid var(--linha)}
  .plano .dia b{font-family:var(--mono);font-size:12px;letter-spacing:.1em;text-transform:uppercase;color:var(--ouro);padding-top:3px}
  .plano .dia span{font-size:15.5px;line-height:1.55;color:var(--tx)}
  @media(max-width:480px){ .plano .dia{grid-template-columns:1fr;gap:6px} }

  .detalhes{margin-top:34px;border-top:1px solid var(--linha);padding-top:14px}
  .detalhes details{border-bottom:1px solid var(--linha)}
  .detalhes summary{cursor:pointer;font-weight:600;color:var(--tinta);padding:14px 0;min-height:44px;display:flex;align-items:center;justify-content:space-between}
  .detalhes summary::after{content:"+";font-family:var(--mono);color:var(--ouro)}
  .detalhes details[open] summary::after{content:"–"}
  .detalhes .corpo{padding:0 0 18px;font-size:15px;color:var(--tx-2);line-height:1.6}
  .resp{display:grid;gap:8px;margin-top:6px}
  .resp div{display:grid;grid-template-columns:1fr auto;gap:12px;padding:8px 0;border-bottom:1px dashed var(--linha)}
  .resp div span:last-child{font-family:var(--mono);font-size:12.5px;color:var(--tinta);white-space:nowrap}
  .vers{font-family:var(--mono);font-size:11.5px;letter-spacing:.06em;color:var(--tx-3);margin-top:22px;line-height:1.7}
  .acoes-fim{display:flex;gap:12px;flex-wrap:wrap;margin-top:26px}

  .aviso-arm{margin-top:0}

  /* ── impressão: só o resultado e o plano, com URL legível ───── */
  @media print{
    .dg-top,.etapa:not(#e-resultado),.nav,.compromisso,.acoes-fim,.mais,.nao-imprime{display:none !important}
    #e-resultado{display:block !important;padding:0}
    .res-cab{background:#fff;color:#000;padding:0 0 12pt;border-bottom:1pt solid #000}
    .res-cab::before{display:none}
    .res-cab h1,.res-cab .forca,.res-cab .expl{color:#000}
    .res-cab .forca{background:none;border:1pt solid #000}
    .res-cab .simples,.res-cab .olho,.res-cab .ori{color:#5a3d1a}
    .acao,.curso,.plano .dia{border:1pt solid #999;box-shadow:none;break-inside:avoid}
    .curso a.bt{display:none}
    .curso .url{display:block !important;font-family:var(--mono);font-size:10.5pt;margin-top:8pt;word-break:break-all}
    .detalhes details{display:none}
    .detalhes details.imprime{display:block}
  }
  .curso .url{display:none}
</style>

<div class="dg-top ctx-escuro" style="background:var(--exec)">
  <div class="wrap">
    <div class="lin">
      <span class="rot" id="dg-rot">Hybrid Skills · diagnóstico</span>
      <span class="prog" id="dg-prog" aria-live="polite"></span>
    </div>
    <div class="barra" id="dg-barra" aria-hidden="true"></div>
  </div>
</div>

<div class="wrap">
  <div class="nota aviso aviso-arm nao-imprime" id="aviso-arm" hidden style="margin-top:20px">
    <b>Seu navegador bloqueou o armazenamento local.</b> Você pode continuar, mas o progresso
    pode se perder se fechar esta página.
  </div>
</div>

<!-- ── Retorno ─────────────────────────────────────────────────── -->
<section class="etapa" id="e-retorno">
  <div class="wrap dg-wrap">
    <h1 tabindex="-1">Você já começou por aqui</h1>
    <p class="intro" id="retorno-txt">Encontramos respostas salvas neste navegador. Quer continuar de onde parou?</p>
    <div class="nav">
      <button class="bt bt-2" type="button" id="bt-recomecar">Começar de novo</button>
      <button class="bt bt-1" type="button" id="bt-continuar">Continuar</button>
    </div>
  </div>
</section>

<!-- ── Contexto ────────────────────────────────────────────────── -->
<section class="etapa" id="e-contexto">
  <div class="wrap dg-wrap">
    <h1 tabindex="-1">Antes de começar</h1>
    <p class="intro">Não é uma prova. Pense no que você costuma fazer. As respostas ficam só neste navegador.</p>

    <h2 class="q" id="q-ctx" style="font-size:19px;margin-top:30px">Onde você quer pensar sua prática?</h2>
    <div class="opcoes" role="radiogroup" aria-labelledby="q-ctx" id="opc-ctx"></div>

    <h2 class="q" id="q-obj" style="font-size:19px;margin-top:34px">O que você mais gostaria de melhorar agora?</h2>
    <p class="obs">Isso ajuda a escolher onde aprofundar. Você poderá trocar depois.</p>
    <div class="opcoes" role="radiogroup" aria-labelledby="q-obj" id="opc-obj"></div>

    <div class="nav">
      <a class="bt bt-2" href="{{ '/bbdw/' | relative_url }}">Voltar</a>
      <button class="bt bt-1" type="button" id="bt-ctx" disabled>Continuar</button>
    </div>
  </div>
</section>

<!-- ── Triagem ─────────────────────────────────────────────────── -->
<section class="etapa" id="e-triagem">
  <div class="wrap dg-wrap">
    <div class="pergunta-n" id="tri-n"></div>
    <h2 class="q" id="tri-q" tabindex="-1"></h2>
    <p class="obs" id="tri-instr"></p>
    <div class="opcoes" role="radiogroup" aria-labelledby="tri-q" id="opc-tri"></div>
    <details class="ajuda" id="tri-ajuda"><summary>Ver um exemplo</summary><p id="tri-ex"></p></details>
    <div class="nav">
      <button class="bt bt-2" type="button" id="tri-voltar">Voltar</button>
      <button class="bt bt-1" type="button" id="tri-cont" disabled>Continuar</button>
    </div>
  </div>
</section>

<!-- ── Dupla sugerida ──────────────────────────────────────────── -->
<section class="etapa" id="e-dupla">
  <div class="wrap dg-wrap">
    <h1 tabindex="-1" id="dupla-tit">Sua dupla para aprofundar</h1>
    <p class="intro" id="dupla-intro"></p>
    <div class="dupla-sug" id="dupla-card" hidden></div>
    <details class="ajuda" id="dupla-troca" style="margin-top:22px">
      <summary id="dupla-troca-rot">Prefiro explorar outra combinação</summary>
      <div class="duplas" role="radiogroup" aria-label="Escolher outra combinação" id="opc-dupla"></div>
    </details>
    <div class="nav">
      <button class="bt bt-2" type="button" id="dupla-voltar">Voltar</button>
      <button class="bt bt-1" type="button" id="dupla-cont" disabled>Continuar com esta dupla</button>
    </div>
  </div>
</section>

<!-- ── Aprofundamento ──────────────────────────────────────────── -->
<section class="etapa" id="e-aprof">
  <div class="wrap dg-wrap">
    <div class="pergunta-n" id="ap-n"></div>
    <h2 class="q" id="ap-q" tabindex="-1"></h2>
    <p class="obs" id="ap-instr"></p>
    <div class="opcoes" role="radiogroup" aria-labelledby="ap-q" id="opc-ap"></div>
    <div class="nav">
      <button class="bt bt-2" type="button" id="ap-voltar">Voltar</button>
      <button class="bt bt-1" type="button" id="ap-cont" disabled>Continuar</button>
    </div>
  </div>
</section>

<!-- ── Resultado ───────────────────────────────────────────────── -->
<section class="etapa" id="e-resultado" style="padding:0">
  <div class="res-cab">
    <div class="wrap dg-wrap">
      <div class="olho">Seu próximo passo</div>
      <div class="forca" id="res-forca"></div>
      <h1 tabindex="-1" id="res-dupla"></h1>
      <div class="simples" id="res-simples"></div>
      <div class="ori" id="res-ori"></div>
      <p class="expl" id="res-expl"></p>
    </div>
  </div>
  <div class="res-corpo">
    <div class="wrap dg-wrap">
      <div class="bloco">
        <div class="olho">Para esta semana</div>
        <h2>Uma ação concreta</h2>
        <div class="acao"><div id="res-acao"></div><div class="evid" id="res-evid"></div></div>
        <div class="compromisso nao-imprime">
          <button class="bt bt-1" type="button" id="bt-comprometo">Vou experimentar</button>
          <span class="ok" id="comprometo-ok" hidden>Combinado. O plano de sete dias está logo abaixo.</span>
        </div>
      </div>

      <div class="bloco" id="bloco-curso">
        <div class="olho">Para apoiar a prática</div>
        <h2>Um conteúdo da Alura</h2>
        <div id="res-curso"></div>
        <details class="mais" id="res-mais" hidden><summary>Quero continuar aprendendo</summary><div id="res-comp"></div></details>
      </div>

      <div class="bloco">
        <div class="olho">Continuidade</div>
        <h2>Seu plano de sete dias</h2>
        <div class="plano" id="res-plano"></div>
        <p class="obs" style="margin-top:12px">O plano não depende de concluir um curso nem de ter acesso à Alura.</p>
        <div class="acoes-fim nao-imprime">
          <button class="bt bt-2" type="button" id="bt-imprimir">Imprimir ou salvar o plano</button>
        </div>
      </div>

      <div class="detalhes">
        <details class="imprime"><summary>Por que esta dupla</summary><div class="corpo" id="res-motivo"></div></details>
        <details><summary>Ver minhas respostas</summary><div class="corpo"><div class="resp" id="res-resp"></div></div></details>
        <details><summary>Como o diagnóstico funciona</summary><div class="corpo">
          O resultado vem de regras fixas aplicadas às suas respostas, sem inteligência artificial e sem comparação com outras pessoas.
          Não há nota, porcentagem ou classificação. É uma reflexão guiada por autorrelato: não certifica competências e não serve
          para avaliação ou seleção. <a href="{{ '/bbdw/como-funciona/' | relative_url }}">Leia as regras e os limites</a>.
        </div></details>
      </div>

      <div class="vers" id="res-vers"></div>

      <div class="acoes-fim nao-imprime">
        <button class="bt bt-2" type="button" id="bt-refazer">Refazer o diagnóstico</button>
        <button class="bt bt-2" type="button" id="bt-apagar">Apagar meus dados locais</button>
      </div>
    </div>
  </div>
</section>

<script src="{{ '/bbdw/assets/instrumento.js' | relative_url }}"></script>
<script src="{{ '/bbdw/assets/conteudo.js' | relative_url }}"></script>
<script src="{{ '/bbdw/assets/catalogo.js' | relative_url }}"></script>
<script src="{{ '/bbdw/assets/regras.js' | relative_url }}"></script>
<script src="{{ '/bbdw/assets/estado.js' | relative_url }}"></script>
<script src="{{ '/bbdw/assets/metricas.js' | relative_url }}"></script>
<script src="https://www.gstatic.com/firebasejs/10.13.2/firebase-app-compat.js" defer></script>
<script src="https://www.gstatic.com/firebasejs/10.13.2/firebase-firestore-compat.js" defer></script>
<script src="{{ '/assets/firebase-config.js' | relative_url }}" defer></script>

{% raw %}
<script>
(function(){
  var I = window.BBDW_INSTRUMENTO, C = window.BBDW_CONTEUDO, K = window.BBDW_CATALOGO,
      R = window.BBDW_REGRAS, E = window.BBDW_ESTADO, M = window.BBDW_METRICAS;
  window.BBDW_VERSOES = { instrumento:I.versao, regras:R.versao, conteudo:C.versao, catalogo:K.versao };

  var $ = function(id){ return document.getElementById(id); };
  var ETAPAS = ["contexto","triagem","dupla","aprof","resultado"];
  var estado = null, tri = 0, ap = 0;

  /* ── estado ──────────────────────────────────────────────────── */
  E.testar();
  if (E.bloqueado()) $("aviso-arm").hidden = false;

  function salvar(){ estado = E.salvar(estado); if (E.bloqueado()) $("aviso-arm").hidden = false; }
  function novo(){ estado = E.novo(window.BBDW_VERSOES); estado.iniciado = false; salvar(); }

  var salvo = E.ler();
  if (salvo && salvo.versoes && salvo.versoes.instrumento !== I.versao){
    $("retorno-txt").textContent = "Suas respostas salvas são de uma versão anterior do diagnóstico, que não é mais compatível. Vamos começar de novo.";
    $("bt-continuar").hidden = true;
    estado = salvo; mostrar("retorno");
  } else if (salvo && (salvo.etapa !== "contexto" || salvo.contexto || salvo.objetivo)){
    estado = salvo; mostrar("retorno");
  } else { novo(); irPara("contexto"); }

  $("bt-continuar").addEventListener("click", function(){ irPara(estado.etapa || "contexto"); });
  $("bt-recomecar").addEventListener("click", function(){ E.apagar(); novo(); irPara("contexto"); });

  /* ── navegação ───────────────────────────────────────────────── */
  function mostrar(id){
    document.querySelectorAll(".etapa").forEach(function(s){ s.classList.remove("on"); });
    var s = $("e-"+id); s.classList.add("on");
    var h = s.querySelector("h1,h2.q"); if (h){ h.focus({preventScroll:true}); }
    window.scrollTo({ top:0, behavior:"auto" });
  }
  function progresso(rot, txt, total, feitos){
    $("dg-rot").textContent = rot; $("dg-prog").textContent = txt;
    var b = $("dg-barra"); b.innerHTML = "";
    for (var i = 0; i < total; i++){ var el = document.createElement("i"); if (i < feitos) el.className = "f"; else if (i === feitos) el.className = "c"; b.appendChild(el); }
  }
  function irPara(id){
    estado.etapa = id; salvar();
    if (id === "contexto") renderContexto();
    else if (id === "triagem"){ tri = Math.min(tri, 9); renderTriagem(); }
    else if (id === "dupla") renderDupla();
    else if (id === "aprof"){ ap = 0; renderAprof(); }
    else if (id === "resultado") renderResultado();
    mostrar(id);
  }

  /* ── componentes ─────────────────────────────────────────────── */
  function opcao(rotulo, marcado, extra){
    var b = document.createElement("button");
    b.type = "button"; b.className = "opc" + (extra ? " " + extra : ""); b.setAttribute("role","radio");
    b.setAttribute("aria-checked", marcado ? "true" : "false");
    b.innerHTML = '<span class="rd" aria-hidden="true"></span><span></span>';
    b.lastChild.innerHTML = rotulo;
    return b;
  }
  function grupo(cont, itens, atual, aoEscolher){
    cont.innerHTML = "";
    itens.forEach(function(it){
      var b = opcao(it.r, atual !== undefined && atual === it.v, it.cls);
      b.addEventListener("click", function(){
        cont.querySelectorAll(".opc").forEach(function(o){ o.setAttribute("aria-checked","false"); });
        b.setAttribute("aria-checked","true"); aoEscolher(it.v);
      });
      cont.appendChild(b);
    });
  }
  function escalaItens(){
    var itens = I.escala.map(function(e){ return { v:e.v, r:e.r }; });
    itens.push({ v:null, r:I.ausente.r, cls:"ausente" });
    return itens;
  }
  function respondida(v){ return v !== undefined; }

  /* invalidação (RF04): mudou objetivo ou triagem → resultado cai e a
     dupla precisa ser reconfirmada; se o par mudar, o aprofundamento vai junto */
  function invalidar(){ estado.resultadoValido = false; estado.duplaConfirmada = false; }

  /* ── contexto ────────────────────────────────────────────────── */
  function renderContexto(){
    progresso("Hybrid Skills · diagnóstico", "Antes de começar", 14, 0);
    if (!estado.iniciado){ estado.iniciado = true; salvar(); M.registrar("assessment_start","contexto"); }
    grupo($("opc-ctx"), I.contextos.map(function(c){ return { v:c.id, r:c.r }; }), estado.contexto || undefined,
      function(v){ estado.contexto = v; salvar(); checaCtx(); });
    grupo($("opc-obj"), I.objetivos.map(function(o){ return { v:o.id, r:o.r }; }), estado.objetivo || undefined,
      function(v){ if (estado.objetivo !== v) invalidar(); estado.objetivo = v; salvar(); checaCtx(); });
    checaCtx();
  }
  function checaCtx(){ $("bt-ctx").disabled = !(estado.contexto && estado.objetivo); }
  $("bt-ctx").addEventListener("click", function(){ M.registrar("step_completed","contexto"); tri = 0; irPara("triagem"); });

  /* ── triagem ─────────────────────────────────────────────────── */
  function renderTriagem(){
    var q = I.triagem[tri];
    progresso("Dez perguntas", "Pergunta " + (tri+1) + " de 10", 14, 1 + tri);
    $("tri-n").textContent = "Pergunta " + (tri+1) + " de 10";
    $("tri-q").textContent = q.texto;
    $("tri-instr").textContent = tri === 0 ? I.instrucao : "";
    var ex = (C.exemplos[q.par] || {})[estado.contexto === "nao" ? "trabalho" : estado.contexto];
    $("tri-ajuda").hidden = !ex; $("tri-ajuda").open = false; $("tri-ex").textContent = ex || "";
    grupo($("opc-tri"), escalaItens(), estado.respostas[q.id], function(v){
      if (estado.respostas[q.id] !== v) invalidar();
      estado.respostas[q.id] = v; salvar(); $("tri-cont").disabled = false;
    });
    $("tri-cont").disabled = !respondida(estado.respostas[q.id]);
    $("tri-voltar").textContent = "Voltar";
  }
  $("tri-voltar").addEventListener("click", function(){ if (tri === 0) irPara("contexto"); else { tri--; renderTriagem(); mostrar("triagem"); } });
  $("tri-cont").addEventListener("click", function(){
    if (tri < 9){ tri++; renderTriagem(); mostrar("triagem"); }
    else { M.registrar("step_completed","triagem"); irPara("dupla"); }
  });

  /* ── dupla ───────────────────────────────────────────────────── */
  function renderDupla(){
    progresso("Sua dupla", "Escolha onde aprofundar", 14, 11);
    var sug = R.sugerir(estado.objetivo, R.triagem(estado.respostas));
    /* mantém a escolha manual; senão acompanha a sugestão, limpando o
       aprofundamento quando o par muda */
    if (estado.dupla && estado.dupla.origem === "manual"){ /* prevalece */ }
    else if (sug.par){
      if (!estado.dupla || estado.dupla.par !== sug.par) estado.aprofundamento = {};
      estado.dupla = { par:sug.par, origem:sug.origem, empate:sug.empate };
    } else if (estado.dupla && estado.dupla.origem !== "escolha"){ estado.dupla = null; estado.aprofundamento = {}; }
    salvar();

    var card = $("dupla-card"), par = estado.dupla && estado.dupla.par;
    if (par){
      var d = C.duplas[par], objTxt = "";
      I.objetivos.forEach(function(o){ if (o.id === estado.objetivo) objTxt = o.r; });
      var motivo = estado.dupla.origem === "objetivo" ? "Você escolheu “" + objTxt + "”; vamos explorar esta combinação."
                 : estado.dupla.origem === "manual" ? "Você escolheu explorar esta combinação."
                 : "Pelas suas respostas iniciais, esta é a combinação com mais espaço para praticar." + (estado.dupla.empate ? " Outra dupla ficou empatada; a escolha é sua." : "");
      $("dupla-tit").textContent = "Sua dupla para aprofundar";
      $("dupla-intro").textContent = "Agora, 3 perguntas sobre esta combinação. Você pode trocar antes de continuar.";
      card.hidden = false;
      card.innerHTML = '<div class="mov">Movimento ' + d.num + ' · ' + d.movimento + '</div><h3></h3><div class="simples"></div><p></p><div class="motivo"></div>';
      card.querySelector("h3").textContent = d.nome; card.querySelector(".simples").textContent = d.simples;
      card.querySelector("p").textContent = d.resumo; card.querySelector(".motivo").textContent = motivo;
      $("dupla-troca-rot").textContent = "Prefiro explorar outra combinação"; $("dupla-troca").open = false;
    } else {
      $("dupla-tit").textContent = "Escolha uma dupla para aprofundar";
      $("dupla-intro").textContent = "Faltaram respostas para sugerir uma combinação, e isso não diz nada sobre você. Escolha a que mais tem a ver com o que você quer praticar.";
      card.hidden = true; $("dupla-troca-rot").textContent = "As cinco combinações"; $("dupla-troca").open = true;
    }
    var cont = $("opc-dupla"); cont.innerHTML = "";
    I.pares.forEach(function(p){
      var d = C.duplas[p];
      var b = opcao("<b>" + d.nome + "</b><small>" + d.simples + " · " + d.resumo + "</small>", par === p);
      b.addEventListener("click", function(){
        if (!estado.dupla || estado.dupla.par !== p) estado.aprofundamento = {};
        estado.dupla = { par:p, origem:"manual", empate:false }; salvar(); renderDupla();
      });
      cont.appendChild(b);
    });
    $("dupla-cont").disabled = !par;
  }
  $("dupla-voltar").addEventListener("click", function(){ tri = 9; irPara("triagem"); });
  $("dupla-cont").addEventListener("click", function(){ estado.duplaConfirmada = true; salvar(); M.registrar("step_completed","dupla"); irPara("aprof"); });

  /* ── aprofundamento ──────────────────────────────────────────── */
  function renderAprof(){
    var par = estado.dupla.par, q = I.aprofundamento[par][ap], d = C.duplas[par];
    progresso(d.nome, "Agora, 3 perguntas sobre sua dupla · " + (ap+1) + " de 3", 14, 11 + ap);
    $("ap-n").textContent = "Pergunta " + (ap+1) + " de 3 · " + d.nome;
    $("ap-q").textContent = q.texto;
    $("ap-instr").textContent = ap === 0 ? "Mesmo período: os últimos três meses." : "";
    grupo($("opc-ap"), escalaItens(), estado.aprofundamento[q.id], function(v){
      estado.aprofundamento[q.id] = v; estado.resultadoValido = false; salvar(); $("ap-cont").disabled = false;
    });
    $("ap-cont").disabled = !respondida(estado.aprofundamento[q.id]);
    $("ap-cont").textContent = ap < 2 ? "Continuar" : "Ver meu próximo passo";
  }
  $("ap-voltar").addEventListener("click", function(){ if (ap === 0) irPara("dupla"); else { ap--; renderAprof(); mostrar("aprof"); } });
  $("ap-cont").addEventListener("click", function(){
    if (ap < 2){ ap++; renderAprof(); mostrar("aprof"); }
    else { M.registrar("step_completed","aprofundamento"); irPara("resultado"); }
  });

  /* ── resultado ───────────────────────────────────────────────── */
  function texto(id, t){ $(id).textContent = t || ""; }
  function renderResultado(){
    progresso("Seu próximo passo", "Resultado", 14, 14);
    var r = R.resultado(estado, I, C, K);
    if (!r){ irPara("dupla"); return; }
    if (!estado.resultadoValido){ estado.resultadoValido = true; estado.compromisso = false; salvar(); M.registrar("assessment_complete","resultado"); }

    var f = $("res-forca");
    if (r.comportamento){ f.innerHTML = "Você relata que costuma <b></b>."; f.querySelector("b").textContent = r.comportamento.texto; }
    else f.textContent = r.semForca;
    texto("res-dupla", r.dupla.nome); texto("res-simples", r.dupla.simples + " · movimento " + r.dupla.num + ", " + r.dupla.movimento);
    texto("res-ori", r.orientacaoTexto.nome); texto("res-expl", r.explicacao);
    texto("res-acao", r.pratica ? r.pratica.acao : "");
    var ev = $("res-evid"); ev.innerHTML = "<b>O que você terá em mãos:</b> "; ev.appendChild(document.createTextNode(r.pratica ? r.pratica.evidencia : ""));

    /* conteúdo Alura: um principal, até dois recolhidos; sem candidato, esconde e explica */
    var cur = $("res-curso"), bloco = $("bloco-curso");
    if (r.principal){
      bloco.hidden = false; cur.innerHTML = cartaoCurso(r.principal, true);
      var comp = $("res-comp"); comp.innerHTML = r.complementares.map(function(c){ return cartaoCurso(c, false); }).join("");
      $("res-mais").hidden = !r.complementares.length;
      cur.querySelectorAll("a[data-curso]").forEach(ligaClique); comp.querySelectorAll("a[data-curso]").forEach(ligaClique);
    } else {
      bloco.hidden = false; cur.innerHTML = '<div class="nota">Não há conteúdo validado para esta combinação nesta versão. Comece pela prática sugerida; ela não depende de curso.</div>';
      $("res-mais").hidden = true;
    }

    var pl = $("res-plano"), p = r.pratica ? r.pratica.plano : {};
    pl.innerHTML = [["Dias 1 e 2", p.d12], ["Dias 3 a 5", p.d35], ["Dias 6 e 7", p.d67]].map(function(x){
      return '<div class="dia"><b>' + x[0] + '</b><span></span></div>';
    }).join("");
    [p.d12, p.d35, p.d67].forEach(function(t, i){ pl.querySelectorAll("span")[i].textContent = t || ""; });

    var mot = $("res-motivo"); mot.innerHTML = "";
    var m1 = document.createElement("p"); m1.textContent = r.motivo; mot.appendChild(m1);
    var m2 = document.createElement("p"); m2.style.marginTop = "10px"; m2.innerHTML = "<b>A pergunta deste movimento, da palestra:</b> "; m2.appendChild(document.createTextNode("“" + r.dupla.pergunta + "”")); mot.appendChild(m2);
    var m3 = document.createElement("p"); m3.style.marginTop = "10px"; m3.textContent = "Movimento " + r.dupla.num + " · " + r.dupla.movimento + ". " + r.dupla.definicao; mot.appendChild(m3);

    var rs = $("res-resp"); rs.innerHTML = "";
    function rot(v){ if (v === undefined) return "sem resposta"; if (v === null) return I.ausente.r; var e = I.escala.filter(function(x){ return x.v === v; })[0]; return e ? e.r : String(v); }
    I.triagem.forEach(function(q){ var d = document.createElement("div"); d.innerHTML = "<span></span><span></span>"; d.firstChild.textContent = q.texto; d.lastChild.textContent = rot(estado.respostas[q.id]); rs.appendChild(d); });
    I.aprofundamento[r.par].forEach(function(q){ var d = document.createElement("div"); d.innerHTML = "<span></span><span></span>"; d.firstChild.textContent = q.texto; d.lastChild.textContent = rot(estado.aprofundamento[q.id]); rs.appendChild(d); });

    $("res-vers").textContent = "Versões · instrumento " + r.versoes.instrumento + " · regras " + r.versoes.regras + " · conteúdo " + r.versoes.conteudo + " · catálogo " + (r.versoes.catalogo || "—") + " · origem da dupla: " + estado.dupla.origem;
    $("comprometo-ok").hidden = !estado.compromisso; $("bt-comprometo").hidden = !!estado.compromisso;
  }
  function esc(s){ return String(s || "").replace(/[&<>"]/g, function(c){ return { "&":"&amp;", "<":"&lt;", ">":"&gt;", '"':"&quot;" }[c]; }); }
  function cartaoCurso(c, principal){
    var url = K.base + c.item.slug;
    return '<div class="curso' + (principal ? "" : " comp") + '">' +
      '<div class="tipo">' + (principal ? "Conteúdo principal" : "Complementar") + ' · ' + esc(c.item.tipo) + (c.item.duracao ? " · " + esc(c.item.duracao) : "") + '</div>' +
      '<h3>' + esc(c.item.titulo) + '</h3>' + (c.porque ? '<p>' + esc(c.porque) + '</p>' : "") +
      '<span class="acesso">Exige acesso à Alura para fazer o curso; a página do curso é pública.</span>' +
      '<div><a class="bt ' + (principal ? "bt-1" : "bt-2") + '" href="' + esc(url) + '" target="_blank" rel="noopener" data-curso="' + esc(c.item.id) + '">Abrir o curso</a></div>' +
      '<span class="url">' + esc(url) + '</span></div>';
  }
  function ligaClique(a){ a.addEventListener("click", function(){ M.registrar("course_click","resultado"); }); }

  $("bt-comprometo").addEventListener("click", function(){ estado.compromisso = true; salvar(); $("comprometo-ok").hidden = false; $("bt-comprometo").hidden = true; M.registrar("action_commit","resultado"); });
  $("bt-imprimir").addEventListener("click", function(){ M.registrar("plan_print","resultado"); window.print(); });
  $("bt-refazer").addEventListener("click", function(){
    if (confirm("Refazer apaga as respostas salvas neste navegador. Continuar?")){ E.apagar(); novo(); tri = 0; irPara("contexto"); }
  });
  $("bt-apagar").addEventListener("click", function(){
    if (confirm("Apagar suas respostas e seu resultado deste navegador? Não dá para desfazer.")){ E.apagar(); novo(); tri = 0; irPara("contexto"); }
  });
})();
</script>
{% endraw %}
