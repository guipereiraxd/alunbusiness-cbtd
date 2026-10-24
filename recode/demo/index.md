---
title: "Demo"
description: "Prévia do harness organizacional: oito perguntas, de três a cinco minutos, sem cadastro. Devolve duas restrições prováveis e uma pergunta para levar à mesa executiva."
---

<style>
  .dm{padding:52px 0 76px;min-height:70vh}
  .dm-wrap{max-width:780px;margin:0 auto;padding-inline:26px}
  @media(max-width:560px){ .dm-wrap{padding-inline:20px} }

  /* ── abertura ─────────────────────────────────────────────── */
  .ab h1{font-size:clamp(28px,4vw,40px);max-width:18ch;margin-top:18px}
  .ab .sub{font-size:clamp(16.5px,1.9vw,18.5px);color:var(--tx-2);margin-top:18px;line-height:1.6}
  .ab .fat{display:flex;gap:30px;flex-wrap:wrap;margin-top:30px;padding:22px 0;
    border-top:1px solid var(--linha);border-bottom:1px solid var(--linha)}
  .ab .fat div b{display:block;font-family:var(--disp);font-weight:700;font-size:22px;color:var(--tinta);line-height:1}
  .ab .fat div span{font-family:var(--mono);font-size:10.5px;letter-spacing:.1em;
    text-transform:uppercase;color:var(--tx-3);display:block;margin-top:7px}

  /* ── questionário ─────────────────────────────────────────── */
  .barra{display:flex;align-items:center;gap:16px;margin-bottom:30px}
  .barra .pct{flex:1;height:5px;background:var(--painel);border-radius:999px;overflow:hidden}
  .barra .pct i{display:block;height:5px;background:var(--eletrico);border-radius:999px;
    transition:width .3s var(--ease)}
  .barra .n{font-family:var(--mono);font-size:12px;color:var(--tx-2);white-space:nowrap}

  .qcomp{font-family:var(--mono);font-size:11px;letter-spacing:.11em;text-transform:uppercase;
    color:var(--eletrico)}
  .qtexto{font-family:var(--disp);font-weight:600;font-size:clamp(20px,2.8vw,27px);
    color:var(--tinta);line-height:1.35;margin-top:14px;letter-spacing:-.018em}

  .ops{display:grid;gap:9px;margin-top:30px}
  .ops button{display:grid;grid-template-columns:38px 1fr;gap:16px;align-items:center;
    width:100%;text-align:left;background:var(--papel);border:1px solid var(--linha);
    border-radius:13px;padding:16px 18px;cursor:pointer;font-family:var(--sans);
    transition:border-color .16s var(--ease),background .16s var(--ease),transform .12s var(--ease)}
  .ops button:hover{border-color:var(--eletrico);background:var(--canvas);transform:translateX(2px)}
  .ops button.sel{border-color:var(--eletrico);background:var(--azul-100);box-shadow:inset 0 0 0 1px var(--eletrico)}
  .ops .v{font-family:var(--mono);font-size:15px;font-weight:500;color:var(--eletrico);text-align:center}
  .ops .r{display:block;font-size:16px;font-weight:600;color:var(--tinta)}
  .ops .d{display:block;font-size:13.5px;color:var(--tx-2);margin-top:2px;line-height:1.45}
  .ops button.ns{border-style:dashed}
  .ops button.ns .v{font-size:12px;color:var(--tx-2)}
  .ops button.ns .r{color:var(--tx);font-weight:500}

  .nav{display:flex;justify-content:space-between;align-items:center;gap:14px;margin-top:28px}
  .nav button{font-family:var(--sans);font-size:15px;font-weight:500;background:none;
    border:0;color:var(--tx-2);cursor:pointer;padding:10px 4px}
  .nav button:hover{color:var(--tinta)}
  .nav button[disabled]{opacity:.35;cursor:default}

  /* ── resultado ────────────────────────────────────────────── */
  .res h2{font-size:clamp(25px,3.4vw,34px);max-width:20ch}
  .selo{display:inline-flex;align-items:center;gap:9px;background:var(--atencao-s);
    color:var(--atencao);font-size:13px;font-weight:500;padding:9px 15px;border-radius:999px;
    line-height:1.4}

  .rest{display:grid;gap:14px;margin-top:28px}
  .rest > div{background:var(--papel);border:1px solid var(--linha);border-left:4px solid var(--eletrico);
    border-radius:0 15px 15px 0;padding:23px 25px}
  /* o nome do componente em mono quebrava em três linhas ao lado do
     título; vai para a linha de cima, onde é rótulo e não concorrente */
  .rest .cod{font-family:var(--mono);font-size:11px;color:var(--eletrico);letter-spacing:.06em}
  .rest .tit{font-family:var(--mono);font-size:11px;color:var(--tx-3);letter-spacing:.06em;
    text-transform:uppercase}
  .rest .cab{display:flex;align-items:baseline;gap:9px;margin-bottom:9px}
  .rest .nm{display:block;font-family:var(--disp);font-weight:700;font-size:20px;
    color:var(--tinta);line-height:1.3;letter-spacing:-.015em}
  .rest p{font-size:15px;color:var(--tx);margin-top:11px;line-height:1.65}

  .pe{background:var(--deep);border-radius:17px;padding:30px 32px;margin-top:26px}
  .pe .r{font-family:var(--mono);font-size:10.5px;letter-spacing:.12em;text-transform:uppercase;
    color:var(--azul-300)}
  .pe p{font-family:var(--disp);font-weight:600;font-size:clamp(18px,2.4vw,23px);color:#fff;
    line-height:1.45;margin-top:13px}

  .mapa{display:grid;gap:7px;margin-top:26px}
  .mapa > div{display:grid;grid-template-columns:34px 1fr 108px;gap:14px;align-items:center;
    font-size:14px;color:var(--tx)}
  .mapa .c{font-family:var(--mono);font-size:11.5px;color:var(--tx-3)}
  .mapa .t{height:7px;background:var(--painel);border-radius:999px;overflow:hidden}
  .mapa .t i{display:block;height:7px;background:var(--azul-300);border-radius:999px}
  .mapa .baixa .t i{background:var(--eletrico)}
  .mapa .rot{font-size:12.5px;color:var(--tx-2);text-align:right;font-family:var(--mono)}
  .mapa .ns .rot{color:var(--tx-3)}

  /* ── interesse ────────────────────────────────────────────── */
  .lead{background:var(--canvas);border:1px solid var(--linha);border-radius:18px;
    padding:30px 32px;margin-top:32px}
  @media(max-width:560px){ .lead{padding:24px 20px} }
  .lead h3{font-size:21px}
  .lead > p{font-size:14.5px;color:var(--tx-2);margin-top:10px;line-height:1.6}
  .campos{display:grid;grid-template-columns:1fr 1fr;gap:14px;margin-top:22px}
  @media(max-width:620px){ .campos{grid-template-columns:1fr} }
  .campo label{display:block;font-family:var(--mono);font-size:10.5px;letter-spacing:.1em;
    text-transform:uppercase;color:var(--tx-3);margin-bottom:7px}
  .campo input{width:100%;font-family:var(--sans);font-size:15.5px;color:var(--tinta);
    background:var(--papel);border:1px solid var(--linha-2);border-radius:11px;padding:13px 15px}
  .campo input:focus{outline:none;border-color:var(--eletrico);box-shadow:0 0 0 3px var(--azul-100)}
  .campo input::placeholder{color:var(--tx-3)}
  .optin{display:flex;gap:11px;align-items:flex-start;margin-top:20px;font-size:14px;
    color:var(--tx-2);line-height:1.55;cursor:pointer}
  .optin input{width:17px;height:17px;margin:2px 0 0;accent-color:var(--eletrico);flex:none}
  .lead .erro{color:var(--alerta);font-size:14px;margin-top:14px;display:none}
  .lead .ok{display:none;background:var(--ok-s);border-radius:12px;padding:20px 22px;
    font-size:15px;color:var(--tinta-2);line-height:1.6}
  .lead .ok b{color:var(--ok)}

  .refaz{margin-top:30px;font-size:14px;color:var(--tx-3)}
  .refaz button{background:none;border:0;color:var(--azul-700);font:inherit;cursor:pointer;
    text-decoration:underline;padding:0}
</style>

<section class="dm">
  <div class="dm-wrap">

    <!-- ── abertura ─────────────────────────────────────────── -->
    <div id="et-ab" class="ab">
      <div class="olho">Prévia do harness organizacional</div>
      <h1>Oito perguntas sobre o sistema em que o trabalho acontece</h1>
      <p class="sub">Uma por componente do harness. Você marca o nível que descreve a sua
         organização — não você mesmo. Não há resposta certa, e “não sei” é uma resposta
         legítima que a leitura leva em conta.</p>

      <div class="fat">
        <div><b>8</b><span>perguntas</span></div>
        <div><b>3–5<small style="font-size:14px"> min</small></b><span>para responder</span></div>
        <div><b>0</b><span>cadastro exigido</span></div>
      </div>

      <div class="nota aviso" style="margin-top:26px">
        <b>O que esta prévia não é.</b> Não é um diagnóstico organizacional, não é benchmark e não
        mede a sua empresa — são oito respostas de uma pessoa só, sobre a própria percepção.
        O diagnóstico corporativo tem 32 questões, levantamento de evidências e revisão humana.
      </div>

      <div class="botoes">
        <button class="bt bt-1" id="comecar">Começar a prévia</button>
        <a class="bt bt-2" href="{{ '/recode/metodologia/' | relative_url }}">Ver a metodologia</a>
      </div>
    </div>

    <!-- ── questionário ─────────────────────────────────────── -->
    <div id="et-q" style="display:none">
      <div class="barra">
        <div class="pct"><i id="pct-i" style="width:0%"></i></div>
        <div class="n" id="pct-n">1 de 8</div>
      </div>
      <div class="qcomp" id="q-comp"></div>
      <div class="qtexto" id="q-texto"></div>
      <div class="ops" id="q-ops"></div>
      <div class="nav">
        <button id="voltar">← Voltar</button>
        <span></span>
      </div>
    </div>

    <!-- ── resultado ────────────────────────────────────────── -->
    <div id="et-res" class="res" style="display:none">
      <div class="selo">⚠ Prévia educacional — não substitui diagnóstico corporativo</div>
      <h2 style="margin-top:20px">O seu ponto de vista sugere atenção em:</h2>

      <div class="rest" id="res-rest"></div>
      <div class="pe" id="res-pe"></div>

      <h3 style="font-size:19px;margin-top:38px">Como você respondeu, componente a componente</h3>
      <p style="font-size:14.5px;color:var(--tx-2);margin-top:8px;line-height:1.6">
        Esta é a sua leitura, não a da empresa. No diagnóstico corporativo cada componente recebe
        quatro questões e é agregado só com cobertura suficiente.</p>
      <div class="mapa" id="res-mapa"></div>
      <div class="nota" id="res-ns" style="display:none"></div>

      <!-- interesse: só aparece DEPOIS do resultado, nunca antes -->
      <div class="lead">
        <div id="lead-form">
          <h3>Quer aplicar o diagnóstico na sua empresa?</h3>
          <p>Deixe um contato e a gente retorna para entender a jornada que está incomodando a
             sua operação. Se o diagnóstico não fizer sentido para ela, a gente diz isso.</p>
          <div class="campos">
            <div class="campo"><label for="f-nome">Nome</label>
              <input id="f-nome" type="text" autocomplete="name" placeholder="Seu nome"></div>
            <div class="campo"><label for="f-email">E-mail corporativo</label>
              <input id="f-email" type="email" autocomplete="email" placeholder="voce@empresa.com"></div>
            <div class="campo"><label for="f-empresa">Empresa</label>
              <input id="f-empresa" type="text" autocomplete="organization" placeholder="Nome da empresa"></div>
            <div class="campo"><label for="f-cargo">Cargo</label>
              <input id="f-cargo" type="text" autocomplete="organization-title" placeholder="Seu cargo"></div>
          </div>
          <label class="optin">
            <input type="checkbox" id="f-optin">
            <span>Também quero receber conteúdos da Alun Business sobre redesenho organizacional
              com IA. Este consentimento é separado do contato sobre o diagnóstico e pode ser
              retirado a qualquer momento.</span>
          </label>
          <div class="erro" id="lead-erro"></div>
          <div class="botoes" style="margin-top:22px">
            <button class="bt bt-1" id="lead-enviar">Quero conversar</button>
          </div>
        </div>
        <div class="ok" id="lead-ok"></div>
      </div>

      <div class="refaz">
        <button id="refazer">Responder de novo</button> · suas respostas não são enviadas a
        lugar nenhum enquanto você não preencher o formulário acima.
      </div>
    </div>

  </div>
</section>

<script src="{{ '/assets/firebase-config.js' | relative_url }}"></script>
<script src="https://www.gstatic.com/firebasejs/10.13.2/firebase-app-compat.js"></script>
<script src="https://www.gstatic.com/firebasejs/10.13.2/firebase-firestore-compat.js"></script>
<script src="{{ '/recode/assets/demo-data.js' | relative_url }}"></script>
<script src="{{ '/recode/assets/leads.js' | relative_url }}"></script>
<script>
(function(){
  var D = window.RECODE_DEMO, L = window.RECODE_LEADS;
  var P = D.PERGUNTAS, i = 0, resp = {};

  function esc(s){ return String(s==null?"":s)
    .replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;"); }
  function mostra(id){
    ["et-ab","et-q","et-res"].forEach(function(k){
      document.getElementById(k).style.display = (k===id) ? "block" : "none";
    });
    window.scrollTo({ top:0, behavior:"instant" });
  }

  /* ── questionário ────────────────────────────────────────── */
  function render(){
    var p = P[i];
    document.getElementById("pct-i").style.width = ((i)/P.length*100) + "%";
    document.getElementById("pct-n").textContent = (i+1) + " de " + P.length;
    document.getElementById("q-comp").textContent = p.h + " · " + p.nome;
    document.getElementById("q-texto").textContent = p.texto;

    var atual = resp[p.id];
    var html = D.ESCALA.map(function(e){
      return '<button data-v="'+e.v+'"'+(atual===e.v?' class="sel"':'')+'>'
        + '<span class="v">'+e.v+'</span>'
        + '<span><span class="r">'+esc(e.r)+'</span>'
        + '<span class="d">'+esc(e.d)+'</span></span></button>';
    }).join("");
    html += '<button class="ns'+(atual==="NS"?' sel':'')+'" data-v="NS">'
          + '<span class="v">NS</span>'
          + '<span><span class="r">Não sei responder</span>'
          + '<span class="d">Não penaliza. Entra na leitura como desconhecimento, que também é um sinal.</span>'
          + '</span></button>';
    var host = document.getElementById("q-ops");
    host.innerHTML = html;
    host.querySelectorAll("button").forEach(function(b){
      b.addEventListener("click", function(){
        var v = b.dataset.v;
        resp[p.id] = (v === "NS") ? "NS" : Number(v);
        /* avanço automático: oito perguntas com um clique cada mantém a
           prévia dentro dos 3 a 5 minutos prometidos */
        if (i < P.length - 1){ i++; render(); } else { resultado(); }
      });
    });
    document.getElementById("voltar").disabled = (i === 0);
  }

  document.getElementById("comecar").addEventListener("click", function(){
    i = 0; resp = {}; mostra("et-q"); render();
  });
  document.getElementById("voltar").addEventListener("click", function(){
    if (i > 0){ i--; render(); }
  });
  document.getElementById("refazer").addEventListener("click", function(){
    i = 0; resp = {};
    document.getElementById("lead-form").style.display = "block";
    document.getElementById("lead-ok").style.display = "none";
    mostra("et-q"); render();
  });

  /* ── resultado ───────────────────────────────────────────── */
  function resultado(){
    var r = D.ler(resp);

    document.getElementById("res-rest").innerHTML = r.restricoes.map(function(x){
      return '<div><div class="cab"><span class="cod">'+x.h+'</span>'
        + '<span class="tit">'+esc(x.nome)+'</span></div>'
        + '<span class="nm">'+esc(x.leitura.restricao)+'</span>'
        + '<p>'+esc(x.leitura.hip)+'</p></div>';
    }).join("") || '<div><p>Você marcou “não sei” em todas as perguntas. Isso é, por si, a leitura '
                 + 'mais útil desta prévia: a visibilidade sobre o sistema de trabalho é baixa, e '
                 + 'é por aí que um diagnóstico começa.</p></div>';

    var pe = document.getElementById("res-pe");
    if (r.perguntaExecutiva){
      pe.style.display = "block";
      pe.innerHTML = '<div class="r">Leve esta pergunta para a mesa</div><p>'
                   + esc(r.perguntaExecutiva) + '</p>';
    } else { pe.style.display = "none"; }

    var baixas = r.restricoes.map(function(x){ return x.h; });
    document.getElementById("res-mapa").innerHTML = r.dadas.map(function(x){
      var ns = (x.v === "NS");
      var larg = ns ? 0 : (x.v/4*100);
      return '<div class="'+(ns?"ns":"")+(baixas.indexOf(x.p.h)>=0?" baixa":"")+'">'
        + '<span class="c">'+x.p.h+'</span>'
        + '<span class="t"><i style="width:'+larg+'%"></i></span>'
        + '<span class="rot">'+(ns ? "não sei" : x.v + " de 4")+'</span></div>';
    }).join("");

    var ns = document.getElementById("res-ns");
    if (r.naoSei >= 3){
      ns.style.display = "block";
      ns.innerHTML = '<b>Você respondeu “não sei” em ' + r.naoSei + ' dos 8 componentes.</b> '
        + 'Num diagnóstico corporativo isso não é falha do respondente: é cobertura baixa, e '
        + 'costuma indicar que o sistema de trabalho não está visível para quem opera dentro dele.';
    } else { ns.style.display = "none"; }

    document.getElementById("pct-i").style.width = "100%";
    mostra("et-res");
  }

  /* ── interesse ───────────────────────────────────────────── */
  document.getElementById("lead-enviar").addEventListener("click", function(){
    var b = this, err = document.getElementById("lead-erro");
    var d = {
      nome:    document.getElementById("f-nome").value,
      email:   document.getElementById("f-email").value,
      empresa: document.getElementById("f-empresa").value,
      cargo:   document.getElementById("f-cargo").value,
      optin:   document.getElementById("f-optin").checked
    };
    err.style.display = "none";
    if (!d.nome.trim()){ err.textContent = "Informe o seu nome."; err.style.display="block"; return; }
    if (!L.valido(d.email)){ err.textContent = "Informe um e-mail válido."; err.style.display="block"; return; }

    b.disabled = true; b.textContent = "Enviando…";
    L.registrar(d).then(function(res){
      var ok = document.getElementById("lead-ok");
      document.getElementById("lead-form").style.display = "none";
      ok.style.display = "block";
      ok.innerHTML = res.modo === "remoto"
        ? '<b>Recebemos o seu contato.</b><br>A gente retorna para entender qual jornada está '
          + 'incomodando a sua operação. Suas respostas da prévia não foram enviadas — elas são '
          + 'exploratórias e não compõem o diagnóstico.'
        : '<b>O envio não chegou ao servidor.</b><br>O registro ficou neste navegador. '
          + 'Se o contato for urgente, fale direto com a Alun Business.';
    });
  });
})();
</script>
