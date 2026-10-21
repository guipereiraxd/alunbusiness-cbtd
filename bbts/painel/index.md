---
title: "Painel do DHO"
description: "Visão agregada da prontidão em IA do grupo: participação, distribuição, necessidades de desenvolvimento e fila de PDIs aguardando revisão humana."
---

<style>
  .pn-top{background:var(--paper);border-bottom:1px solid var(--line);padding:30px 0 0}
  .pn-h{display:flex;justify-content:space-between;align-items:flex-end;gap:22px;flex-wrap:wrap}
  .pn-h h1{font-size:clamp(25px,3.4vw,34px);letter-spacing:-.02em}
  .pn-h .sk{font-family:var(--mono);font-size:10.5px;letter-spacing:.14em;text-transform:uppercase;color:var(--tx-3)}
  .pn-ctl{display:flex;gap:9px;align-items:center;flex-wrap:wrap}
  .tgl{display:inline-flex;align-items:center;gap:7px;font-family:var(--mono);font-size:10.5px;letter-spacing:.06em;
    color:var(--tx-2);background:var(--canvas);border:1px solid var(--line);border-radius:999px;padding:7px 13px;cursor:pointer}
  .tgl:hover{border-color:var(--blue-300)}
  .tgl input{accent-color:var(--blue);width:13px;height:13px;margin:0}
  .tgl.on{background:var(--blue-100);border-color:var(--blue-300);color:var(--blue-700)}
  .btn-s{font-family:var(--mono);font-size:10.5px;letter-spacing:.08em;text-transform:uppercase;
    background:var(--ink);color:#fff;border:0;border-radius:999px;padding:9px 16px;cursor:pointer}
  .btn-s:hover{background:var(--blue)}
  .modo{display:flex;gap:9px;align-items:flex-start;margin:20px 0 0;padding:12px 15px;border-radius:11px;
    background:var(--yellow-soft);border:1px solid var(--yellow-600);font-size:13px;color:var(--ink-2);line-height:1.5}
  .modo.ok{background:var(--panel);border-color:var(--line-2);color:var(--tx)}
  .modo b{color:var(--ink)}

  .kp{display:grid;grid-template-columns:repeat(auto-fit,minmax(152px,1fr));gap:1px;background:var(--line);
    border:1px solid var(--line);border-radius:14px;overflow:hidden;margin:24px 0 30px}
  .kp>div{background:var(--paper);padding:17px 18px}
  .kp .n{font-family:var(--disp);font-weight:700;font-size:27px;color:var(--ink);letter-spacing:-.025em;line-height:1}
  .kp .n small{font-size:14px;color:var(--tx-3);font-weight:600}
  .kp .l{font-family:var(--mono);font-size:10px;letter-spacing:.1em;text-transform:uppercase;color:var(--tx-3);margin-top:9px}
  .kp .s{font-size:12px;color:var(--tx-2);margin-top:5px;line-height:1.4}

  .sec{padding:30px 0}
  .sec+.sec{border-top:1px solid var(--line)}
  .sec>h2{font-family:var(--disp);font-weight:700;font-size:21px;color:var(--ink);letter-spacing:-.018em}
  .sec>p.d{color:var(--tx-2);font-size:14.5px;margin:7px 0 22px;max-width:74ch}

  .cols{display:grid;grid-template-columns:1fr 1fr;gap:26px}
  @media(max-width:880px){.cols{grid-template-columns:1fr}}
  .card{background:var(--paper);border:1px solid var(--line);border-radius:14px;padding:21px}
  .card h3{font-family:var(--disp);font-weight:600;font-size:15.5px;color:var(--ink);margin-bottom:4px}
  .card .cd{font-family:var(--mono);font-size:10px;letter-spacing:.09em;text-transform:uppercase;color:var(--tx-3);margin-bottom:18px}

  /* barra empilhada de perfis */
  .stk{display:flex;height:34px;border-radius:8px;overflow:hidden;border:1px solid var(--line)}
  .stk span{display:grid;place-items:center;font-family:var(--mono);font-size:10.5px;font-weight:600;color:#fff;min-width:0}
  .stk span.lt{color:var(--ink-2)}
  .lg{display:grid;gap:8px;margin-top:16px}
  .lg div{display:grid;grid-template-columns:11px 1fr auto;gap:10px;align-items:center;font-size:13px;color:var(--tx)}
  .lg i{width:11px;height:11px;border-radius:3px;display:block}
  .lg b{font-family:var(--mono);font-size:12px;color:var(--ink);font-weight:600}

  /* histograma */
  .hist{display:grid;grid-template-columns:repeat(4,1fr);gap:10px;align-items:end;height:150px}
  .hist>div{display:flex;flex-direction:column;justify-content:flex-end;height:100%;gap:7px;text-align:center}
  .hist .bb{background:var(--blue);border-radius:6px 6px 0 0;min-height:3px;position:relative}
  .hist .bb.me{background:var(--yellow);border:1px solid var(--yellow-600)}
  .hist .hv{font-family:var(--mono);font-size:12px;font-weight:600;color:var(--ink)}
  .hist .hl{font-family:var(--mono);font-size:9.5px;letter-spacing:.06em;color:var(--tx-3);line-height:1.4}

  /* dimensões */
  .dim{display:grid;gap:17px}
  .dim .r{display:grid;gap:7px}
  .dim .rh{display:flex;justify-content:space-between;align-items:baseline;gap:12px}
  .dim .rn{font-size:14px;color:var(--ink);font-weight:500}
  .dim .rv{font-family:var(--mono);font-size:12px;color:var(--tx-2)}
  .dim .rv b{color:var(--blue);font-weight:600;font-size:13.5px}
  .trk{height:9px;background:var(--panel-2);border-radius:5px;position:relative;overflow:visible}
  .trk .fi{height:100%;background:var(--blue);border-radius:5px}
  .trk .rg{position:absolute;top:-3px;height:15px;border-left:1px solid var(--line-2);border-right:1px solid var(--line-2)}
  .trk .mk{position:absolute;top:-4px;width:2px;height:17px;background:var(--yellow-600);border-radius:1px}

  /* necessidades */
  .nd{display:grid;gap:3px}
  .nd .i{display:grid;grid-template-columns:38px 1fr 120px 62px;gap:13px;align-items:center;
    padding:11px 13px;border-radius:9px;background:var(--paper);border:1px solid transparent}
  .nd .i:nth-child(odd){background:var(--canvas)}
  .nd .i.ctx{border-color:var(--yellow-600);background:var(--yellow-soft)}
  .nd .id{font-family:var(--mono);font-size:11px;font-weight:600;color:var(--blue)}
  .nd .tt{font-size:13.5px;color:var(--ink);line-height:1.35}
  .nd .tt em{font-style:normal;font-family:var(--mono);font-size:10px;letter-spacing:.08em;
    text-transform:uppercase;color:var(--warn);display:block;margin-top:3px}
  .nd .bw{height:7px;background:var(--panel-2);border-radius:4px;overflow:hidden}
  .nd .bw i{display:block;height:100%;background:var(--blue-500);border-radius:4px}
  .nd .i.ctx .bw i{background:var(--warn)}
  .nd .vv{font-family:var(--mono);font-size:12px;color:var(--ink);font-weight:600;text-align:right}
  @media(max-width:700px){.nd .i{grid-template-columns:34px 1fr 56px}.nd .bw{display:none}}

  /* macro-temas */
  .mt{display:grid;gap:3px}
  .mt .i{display:grid;grid-template-columns:1fr 150px 92px;gap:14px;align-items:center;padding:11px 13px;border-radius:9px}
  .mt .i:nth-child(odd){background:var(--canvas)}
  .mt .nm{font-size:13.5px;color:var(--ink)}
  .mt .bw{height:7px;background:var(--panel-2);border-radius:4px;overflow:hidden}
  .mt .bw i{display:block;height:100%;background:var(--blue);border-radius:4px}
  .mt .vv{font-family:var(--mono);font-size:11.5px;color:var(--tx-2);text-align:right}
  .mt .vv b{color:var(--ink);font-weight:600}
  @media(max-width:700px){.mt .i{grid-template-columns:1fr 86px}.mt .bw{display:none}}

  /* fila de PDIs */
  .fl{display:grid;grid-template-columns:repeat(auto-fit,minmax(168px,1fr));gap:13px}
  .fl>div{background:var(--paper);border:1px solid var(--line);border-radius:12px;padding:16px 17px}
  .fl .n{font-family:var(--disp);font-weight:700;font-size:25px;color:var(--ink);line-height:1}
  .fl .l{font-size:12.5px;color:var(--tx-2);margin-top:8px;line-height:1.4}
  .fl>div.hot{border-color:var(--yellow-600);background:var(--yellow-soft)}
  .fl>div.hot .n{color:var(--warn)}

  /* tabela */
  .tw{overflow-x:auto;border:1px solid var(--line);border-radius:13px;background:var(--paper)}
  table.pp{width:100%;border-collapse:collapse;font-size:13.5px;min-width:760px}
  table.pp th{font-family:var(--mono);font-size:9.5px;letter-spacing:.1em;text-transform:uppercase;color:var(--tx-3);
    text-align:left;padding:13px 15px;border-bottom:1px solid var(--line);white-space:nowrap;font-weight:600}
  table.pp th.r,table.pp td.r{text-align:right}
  table.pp td{padding:12px 15px;border-bottom:1px solid var(--line);color:var(--tx);vertical-align:middle}
  table.pp tr:last-child td{border-bottom:0}
  table.pp tr.eu{background:var(--yellow-soft)}
  table.pp tr:hover td{background:var(--canvas)}
  table.pp tr.eu:hover td{background:var(--yellow-soft)}
  .who{font-weight:600;color:var(--ink)}
  .who small{display:block;font-family:var(--mono);font-size:10px;letter-spacing:.05em;color:var(--tx-3);font-weight:400;margin-top:2px}
  .pg{display:inline-block;font-family:var(--mono);font-size:10px;letter-spacing:.07em;padding:3px 8px;border-radius:999px;
    background:var(--panel);color:var(--tx);border:1px solid var(--line-2);white-space:nowrap}
  .pg.c{background:var(--blue);color:#fff;border-color:var(--blue)}
  .pg.a{background:var(--blue-100);color:var(--blue-700);border-color:var(--blue-300)}
  .pg.t{background:var(--panel-2);color:var(--ink-2)}
  .pg.i{background:var(--paper);color:var(--tx-2)}
  .num{font-family:var(--mono);font-size:13px;color:var(--ink);font-weight:600}
  .num small{color:var(--tx-3);font-weight:400}
  .lnk{font-family:var(--mono);font-size:10.5px;letter-spacing:.06em;color:var(--blue);text-decoration:none;white-space:nowrap}
  .lnk:hover{text-decoration:underline}
  select.st{font-family:var(--mono);font-size:10.5px;color:var(--tx);background:var(--paper);
    border:1px solid var(--line-2);border-radius:7px;padding:5px 7px;max-width:170px}

  .vazio{text-align:center;padding:64px 22px}
  .vazio h2{font-family:var(--disp);font-weight:700;font-size:24px;color:var(--ink);margin-bottom:11px}
  .vazio p{color:var(--tx-2);font-size:15px;max-width:56ch;margin:0 auto 24px;line-height:1.6}
  .vazio .cta{display:inline-block;background:var(--blue);color:#fff;text-decoration:none;font-weight:600;
    padding:13px 25px;border-radius:999px;font-size:14.5px}
  .vazio .cta:hover{background:var(--blue-700)}
  .nota{font-family:var(--mono);font-size:11px;line-height:1.7;color:var(--tx-2);
    background:var(--canvas);border:1px solid var(--line);border-left:3px solid var(--blue-300);
    border-radius:0 10px 10px 0;padding:15px 17px;margin-top:24px}
  .nota b{color:var(--ink)}
</style>

<div class="pn-top">
  <div class="wrap">
    <div class="pn-h">
      <div>
        <span class="sk">Visão do DHO</span>
        <h1>Prontidão do grupo e fila de revisão</h1>
      </div>
      <div class="pn-ctl">
        <label class="tgl" id="tg-anon"><input type="checkbox" id="anon" checked> Ocultar identificação</label>
        <label class="tgl" id="tg-seed"><input type="checkbox" id="seed"> Coorte de referência</label>
        <button class="btn-s" id="rec">Atualizar</button>
      </div>
    </div>
    <div class="modo" id="modo"></div>
    <div class="kp" id="kp"></div>
  </div>
</div>

<div id="vazio" class="vazio wrap" style="display:none">
  <h2>Nenhum registro ainda</h2>
  <p>O painel se monta a partir dos assessments respondidos. Assim que a primeira pessoa concluir,
     os indicadores agregados aparecem aqui.</p>
  <a class="cta" href="{{ '/bbts/assessment/' | relative_url }}">Responder o assessment →</a>
</div>

<div id="corpo" style="display:none">
  <div class="wrap">

    <section class="sec">
      <h2>Como o grupo se distribui</h2>
      <p class="d">O perfil vem de duas perguntas — autonomia de uso e capacidade de avaliar a resposta.
         O índice soma as quatro dimensões, de 12 a 48 pontos.</p>
      <div class="cols">
        <div class="card">
          <h3>Perfil declarado</h3>
          <div class="cd">P2 + P3 · quatro faixas</div>
          <div class="stk" id="stk"></div>
          <div class="lg" id="lg"></div>
        </div>
        <div class="card">
          <h3>Índice de prontidão</h3>
          <div class="cd">Distribuição em quatro faixas · 12 a 48 pontos</div>
          <div class="hist" id="hist"></div>
          <div class="nota" style="margin-top:17px" id="hist-n"></div>
        </div>
      </div>
    </section>

    <section class="sec">
      <h2>Médias por dimensão</h2>
      <p class="d">A barra azul é a média do grupo. As marcas laterais mostram o intervalo entre a pessoa
         mais baixa e a mais alta — quanto mais largo, mais desigual está o grupo nessa dimensão.</p>
      <div class="dim" id="dim"></div>
      <div class="nota" id="dim-n"></div>
    </section>

    <section class="sec">
      <h2>Necessidades de desenvolvimento agregadas</h2>
      <p class="d">Média do grupo em cada competência, da mais baixa para a mais alta. As três de contexto
         de trabalho aparecem destacadas: dependem de ferramenta, permissão e agenda, não de formação.</p>
      <div class="nd" id="nd"></div>
    </section>

    <section class="sec">
      <h2>Demanda por macro-tema do catálogo</h2>
      <p class="d">Soma das lacunas de cada pessoa, convertida nos temas que as desenvolvem.
         É a leitura que orienta compra de trilha e formação de turma.</p>
      <div class="mt" id="mt"></div>
      <div class="nota" id="mt-n"></div>
    </section>

    <section class="sec">
      <h2>Fila de revisão humana</h2>
      <p class="d">Nenhum PDI entra em vigor sem aprovação. O painel mostra onde cada proposta está
         e permite mover o status.</p>
      <div class="fl" id="fl"></div>
    </section>

    <section class="sec">
      <h2>Colaboradores</h2>
      <p class="d">Cada linha abre o resultado individual com o PDI completo. Com a identificação oculta,
         só o seu próprio registro aparece nomeado.</p>
      <div class="tw"><table class="pp">
        <thead><tr>
          <th>Colaborador</th><th class="r">Índice</th><th>Perfil</th>
          <th class="r">Contexto</th><th class="r">Dedicação</th><th>Status</th><th></th>
        </tr></thead>
        <tbody id="tb"></tbody>
      </table></div>
      <div class="nota" id="tb-n"></div>
    </section>

  </div>
</div>

<script src="{{ '/bbts/assets/store.js' | relative_url }}"></script>
<script src="{{ '/bbts/assets/base-demo.js' | relative_url }}"></script>
<script src="{{ '/bbts/assets/assessment-data.js' | relative_url }}"></script>
<script src="{{ '/bbts/assets/catalogo-alura.js' | relative_url }}"></script>
<script src="{{ '/bbts/assets/pdi-engine.js' | relative_url }}"></script>
<script>
(function(){
  var B = window.BBTS, E = window.BBTS_PDI, S = window.BBTS_STORE;
  var URL_RES = "{{ '/bbts/resultado/' | relative_url }}";
  var URL_ASS = "{{ '/bbts/assessment/' | relative_url }}";

  var CORES = { iniciante:"#8795B0", tarefa:"#5B8AE6", aplicador:"#0033A0", construtor:"#001542" };
  var CLARO  = { iniciante:true };
  var FAIXAS = [ {de:12,ate:20,r:"12–20"}, {de:21,ate:29,r:"21–29"},
                 {de:30,ate:38,r:"30–38"}, {de:39,ate:48,r:"39–48"} ];
  var ST = { rascunho:"Rascunho", submetido:"Aguardando revisão",
             em_revisao:"Em revisão", aprovado:"Aprovado" };

  var anon = document.getElementById("anon");
  var seed = document.getElementById("seed");
  seed.checked = S.seedOn();
  sincTgl();

  function sincTgl(){
    document.getElementById("tg-anon").classList.toggle("on", anon.checked);
    document.getElementById("tg-seed").classList.toggle("on", seed.checked);
  }
  function esc(s){ return String(s==null?"":s)
    .replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;"); }
  function med(a){ return a.length ? a.reduce(function(x,y){return x+y;},0)/a.length : 0; }
  function n1(v){ return (Math.round(v*10)/10).toLocaleString("pt-BR",{minimumFractionDigits:1}); }
  function pct(v){ return Math.round(v*100); }

  var eu = S.eu();
  var dados = [];

  function carregar(){
    document.getElementById("rec").textContent = "Carregando…";
    S.listar().then(function(res){
      var regs = (res.registros||[]).concat(seed.checked ? S.seedRegistros() : []);
      regs = regs.filter(function(r){ return r && r.R && Object.keys(r.R).length; });
      dados = regs.map(function(r){
        var calc = B.calcular(r.R);
        var alvo = E.alvoDe(r.T||{}, calc);
        var lac  = E.lacunas(r.R, r.SK||{}, alvo);
        return { reg:r, calc:calc, alvo:alvo, lac:lac,
                 eu: !!(eu && eu.id === r.id),
                 ded: Number((r.T||{}).ded) || 0,
                 status: r.status || "submetido" };
      });
      modo(res);
      document.getElementById("rec").textContent = "Atualizar";
      if (!dados.length){
        document.getElementById("vazio").style.display="block";
        document.getElementById("corpo").style.display="none";
        document.getElementById("kp").style.display="none";
        return;
      }
      document.getElementById("vazio").style.display="none";
      document.getElementById("corpo").style.display="block";
      document.getElementById("kp").style.display="grid";
      kpis(); perfis(); hist(); dims(); needs(); macros(); fila(); tabela();
    });
  }

  function modo(res){
    var el = document.getElementById("modo"), reais = (res.registros||[]).length;
    if (S.ligado && !res.erro){
      el.className = "modo ok";
      el.innerHTML = "<div><b>Base compartilhada ativa.</b> "
        + reais+" registro"+(reais===1?"":"s")+" recebido"+(reais===1?"":"s")
        + ". O painel se atualiza a cada 25 segundos.</div>";
    } else if (S.ligado){
      el.className = "modo";
      el.innerHTML = "<div><b>A base compartilhada não respondeu.</b> O painel está mostrando apenas "
        + (reais===1 ? "o registro" : "os "+reais+" registros") + " deste navegador.</div>";
    } else {
      el.className = "modo";
      el.innerHTML = "<div><b>Base ainda não compartilhada.</b> "
        + (reais===0 ? "Nenhum registro foi feito neste navegador."
           : reais===1 ? "Há 1 registro, feito neste navegador."
           : "Há "+reais+" registros, todos feitos neste navegador.")
        + " Para montar a base ao vivo com várias pessoas respondendo de aparelhos diferentes, "
        + "é preciso ligar o modo remoto em <code>bbts/assets/store.js</code>.</div>";
    }
  }

  /* ---------- KPIs ---------- */
  function kpis(){
    var idx = dados.map(function(d){return d.calc.indice;});
    var ctx = dados.map(function(d){return d.calc.contexto;});
    var deds = dados.filter(function(d){return d.ded;}).map(function(d){return d.ded;});
    var cont = {}; dados.forEach(function(d){ cont[d.calc.perfil.nome] = (cont[d.calc.perfil.nome]||0)+1; });
    var top = Object.keys(cont).sort(function(a,b){return cont[b]-cont[a];})[0];
    var fila = dados.filter(function(d){return d.status==="submetido";}).length;
    var horas = dados.reduce(function(a,d){
      var pf = E.perfilCatalogo(d.reg.T||{}, d.alvo);
      var pl = E.planejar(E.candidatos(d.lac, d.reg.R, pf), d.ded);
      d.plano = pl; return a + pl.totalH;
    },0);

    document.getElementById("kp").innerHTML = [
      ["n", dados.length, "", "Assessments concluídos",
       dados.filter(function(d){return d.eu;}).length ? "inclui o seu" : "nenhum é o seu"],
      ["n", n1(med(idx)), "<small>/48</small>", "Índice médio de prontidão",
       "menor "+Math.min.apply(null,idx)+" · maior "+Math.max.apply(null,idx)],
      ["t", top || "—", "", "Perfil predominante",
       top ? cont[top]+" de "+dados.length+(dados.length===1?" pessoa":" pessoas")+" ("+pct(cont[top]/dados.length)+"%)" : ""],
      ["n", n1(med(ctx)), "<small>/12</small>", "Contexto de trabalho médio",
       "ferramenta, permissão e agenda"],
      ["n", deds.length ? n1(med(deds)) : "—", deds.length?"<small>h/sem</small>":"", "Dedicação média declarada",
       deds.length+" de "+dados.length+(deds.length===1?" informou":" informaram")],
      ["n", horas, "<small>h</small>", "Formação demandada em 12 meses",
       "soma dos planos individuais"],
      ["n", fila, "", "PDIs aguardando revisão", fila ? "exigem decisão humana" : "fila vazia"]
    ].map(function(k){
      var v = k[0]==="t"
        ? '<div class="n" style="font-size:19px;line-height:1.2">'+esc(k[1])+'</div>'
        : '<div class="n">'+esc(k[1])+k[2]+'</div>';
      return '<div>'+v+'<div class="l">'+esc(k[3])+'</div>'
        + (k[4]?'<div class="s">'+esc(k[4])+'</div>':'')+'</div>';
    }).join("");
  }

  /* ---------- perfis ---------- */
  function perfis(){
    var ordem = ["iniciante","tarefa","aplicador","construtor"];
    var cont = {}; dados.forEach(function(d){ cont[d.calc.perfil.id] = (cont[d.calc.perfil.id]||0)+1; });
    var tot = dados.length;
    document.getElementById("stk").innerHTML = ordem.map(function(id){
      var n = cont[id]||0; if (!n) return "";
      var p = n/tot*100;
      return '<span class="'+(CLARO[id]?"lt":"")+'" style="flex:'+p+';background:'+CORES[id]+'" '
        + 'title="'+esc(nomeP(id))+': '+n+'">'+(p>=9?Math.round(p)+"%":"")+'</span>';
    }).join("");
    document.getElementById("lg").innerHTML = ordem.map(function(id){
      var n = cont[id]||0;
      return '<div><i style="background:'+CORES[id]+'"></i>'
        + '<span>'+esc(nomeP(id))+' — '+esc(descP(id))+'</span>'
        + '<b>'+n+' · '+pct(n/tot)+'%</b></div>';
    }).join("");
  }
  function perfObj(id){ return (window.BBTS.PERFIS||[]).filter(function(p){return p.id===id;})[0]; }
  function nomeP(id){ var o=perfObj(id); return o?o.nome:id; }
  function descP(id){ var o=perfObj(id); return o?o.desc:""; }

  /* ---------- histograma ---------- */
  function hist(){
    var bal = FAIXAS.map(function(f){
      var g = dados.filter(function(d){ return d.calc.indice>=f.de && d.calc.indice<=f.ate; });
      return { f:f, n:g.length, eu: g.some(function(d){return d.eu;}) };
    });
    var max = Math.max.apply(null, bal.map(function(b){return b.n;})) || 1;
    document.getElementById("hist").innerHTML = bal.map(function(b){
      var h = b.n ? Math.max(4, b.n/max*100) : 0;
      return '<div><div class="hv">'+b.n+'</div>'
        + '<div class="bb'+(b.eu?" me":"")+'" style="height:'+h+'%"></div>'
        + '<div class="hl">'+b.f.r+'</div></div>';
    }).join("");
    var minha = dados.filter(function(d){return d.eu;})[0];
    document.getElementById("hist-n").innerHTML = minha
      ? "<b>Seu índice: "+minha.calc.indice+" de 48.</b> A faixa em amarelo é a sua. "
        + "Metade do grupo está abaixo de "+mediana()+" pontos."
      : "Metade do grupo está abaixo de <b>"+mediana()+" pontos</b>. "
        + "Nenhum dos registros é o seu — responda o assessment para se localizar na distribuição.";
  }
  function mediana(){
    var a = dados.map(function(d){return d.calc.indice;}).sort(function(x,y){return x-y;});
    var m = Math.floor(a.length/2);
    return a.length%2 ? a[m] : Math.round((a[m-1]+a[m])/2);
  }

  /* ---------- dimensões ---------- */
  function dims(){
    var defs = [ ["uso","Uso atual",12], ["base","Base técnica",16],
                 ["infl","Influência",8], ["ctx","Contexto de trabalho",12] ];
    document.getElementById("dim").innerHTML = defs.map(function(d){
      var vs = dados.map(function(x){ return x.calc.sub[d[0]]; });
      var m = med(vs), lo = Math.min.apply(null,vs), hi = Math.max.apply(null,vs), max = d[2];
      var minha = dados.filter(function(x){return x.eu;})[0];
      var mk = minha ? '<span class="mk" style="left:'+(minha.calc.sub[d[0]]/max*100)+'%" '
        + 'title="Você: '+minha.calc.sub[d[0]]+'"></span>' : "";
      return '<div class="r"><div class="rh"><span class="rn">'+esc(d[1])+'</span>'
        + '<span class="rv">intervalo '+lo+'–'+hi+' · média <b>'+n1(m)+'</b> de '+max+'</span></div>'
        + '<div class="trk">'
        + '<span class="rg" style="left:'+(lo/max*100)+'%;width:'+((hi-lo)/max*100)+'%"></span>'
        + '<span class="fi" style="width:'+(m/max*100)+'%"></span>'+mk+'</div></div>';
    }).join("");
    var props = defs.map(function(d){
      return { nome:d[1], p: med(dados.map(function(x){return x.calc.sub[d[0]];}))/d[2] };
    }).sort(function(a,b){ return a.p-b.p; });
    document.getElementById("dim-n").innerHTML =
      "A dimensão mais frágil do grupo é <b>"+esc(props[0].nome)+"</b> ("+pct(props[0].p)+"% do máximo) "
      + "e a mais forte é <b>"+esc(props[3].nome)+"</b> ("+pct(props[3].p)+"%). "
      + (props[0].nome === "Contexto de trabalho"
          ? "Sendo contexto, o gargalo é de ambiente: ferramenta, permissão e agenda. Formação não resolve."
          : "Sendo uma dimensão de capacidade, responde a formação e prática dirigida.");
  }

  /* ---------- necessidades por competência ---------- */
  function needs(){
    var linhas = B.perguntas.filter(function(p){ return !p.foraDoIndice; }).map(function(p){
      var vs = dados.map(function(d){ return Number(d.reg.R[p.id])||0; }).filter(function(v){return v>0;});
      var pend = dados.filter(function(d){ return (d.reg.SK||{})[p.id]; }).length;
      var gaps = dados.filter(function(d){
        var l = d.lac.filter(function(x){return x.id===p.id;})[0];
        return l && l.estado==="lacuna";
      }).length;
      return { p:p, m: med(vs), n:vs.length, pend:pend, gaps:gaps,
               ctx: E.SEM_CURSO.indexOf(p.id) >= 0 };
    }).sort(function(a,b){ return a.m-b.m; });

    document.getElementById("nd").innerHTML = linhas.map(function(l){
      return '<div class="i'+(l.ctx?" ctx":"")+'">'
        + '<span class="id">'+l.p.id+'</span>'
        + '<div class="tt">'+esc(l.p.titulo)
        + (l.ctx?'<em>não se resolve com curso</em>':'')
        + '</div>'
        + '<div class="bw"><i style="width:'+(l.m/4*100)+'%"></i></div>'
        + '<div class="vv">'+n1(l.m)+'<small style="color:var(--tx-3);font-weight:400">/4</small></div>'
        + '</div>';
    }).join("");
  }

  /* ---------- macro-temas demandados ---------- */
  function macros(){
    var acc = {};
    dados.forEach(function(d){
      var vistos = {};
      d.lac.forEach(function(l){
        if (l.estado !== "lacuna") return;
        (E.MAPA[l.id]||[]).forEach(function(m){
          acc[m] = acc[m] || { peso:0, pessoas:0 };
          acc[m].peso += l.delta;
          if (!vistos[m]) { acc[m].pessoas++; vistos[m] = 1; }
        });
      });
    });
    var lista = Object.keys(acc).map(function(m){
      return { m:m, peso:acc[m].peso, pessoas:acc[m].pessoas };
    }).sort(function(a,b){ return b.pessoas-a.pessoas || b.peso-a.peso; }).slice(0,10);

    if (!lista.length){
      document.getElementById("mt").innerHTML =
        '<div class="i"><span class="nm">Nenhuma lacuna de capacidade no grupo.</span></div>';
      document.getElementById("mt-n").innerHTML = "Todas as metas declaradas já estão atendidas pelo nível atual.";
      return;
    }
    var max = lista[0].pessoas;
    document.getElementById("mt").innerHTML = lista.map(function(x){
      return '<div class="i"><span class="nm">'+esc(x.m)+'</span>'
        + '<div class="bw"><i style="width:'+(x.pessoas/max*100)+'%"></i></div>'
        + '<div class="vv"><b>'+x.pessoas+'</b> pessoa'+(x.pessoas===1?"":"s")+'</div></div>';
    }).join("");
    document.getElementById("mt-n").innerHTML =
      "<b>"+lista[0].pessoas+" de "+dados.length+" pessoas</b> têm lacuna em “"+esc(lista[0].m)+"”. "
      + "Com esse volume, vale turma fechada em vez de matrícula individual. "
      + "Os temas vêm do catálogo real de IA e Dados da Alura ("
      + window.BBTS_CATALOGO.cursos.length + " cursos).";
  }

  /* ---------- fila de revisão ---------- */
  function fila(){
    var ordem = ["rascunho","submetido","em_revisao","aprovado"];
    var cont = {}; dados.forEach(function(d){ cont[d.status] = (cont[d.status]||0)+1; });
    document.getElementById("fl").innerHTML = ordem.map(function(k){
      var n = cont[k]||0;
      var txt = { rascunho:"Assessment iniciado, sem PDI gerado.",
                  submetido:"PDI gerado pelo fluxo de agentes. Precisa de leitura humana.",
                  em_revisao:"Em análise com o gestor e o DHO.",
                  aprovado:"Aprovado e em vigor no ciclo." }[k];
      return '<div'+(k==="submetido"&&n?' class="hot"':'')+'>'
        + '<div class="n">'+n+'</div>'
        + '<div class="l"><b>'+ST[k]+'</b><br>'+txt+'</div></div>';
    }).join("");
  }

  /* ---------- tabela ---------- */
  function tabela(){
    var lista = dados.slice().sort(function(a,b){
      if (a.eu !== b.eu) return a.eu ? -1 : 1;
      return b.calc.indice - a.calc.indice;
    });
    var i = 0;
    document.getElementById("tb").innerHTML = lista.map(function(d){
      i++;
      var mostra = d.eu || !anon.checked;
      var nome = mostra ? esc(d.reg.nome || "Colaborador "+i) : "Colaborador "+i;
      var sub  = d.eu ? "você" : (mostra && d.reg.email ? esc(d.reg.email) : "");
      var cls  = { iniciante:"i", tarefa:"t", aplicador:"a", construtor:"c" }[d.calc.perfil.id];
      var op   = ["rascunho","submetido","em_revisao","aprovado"].map(function(k){
        return '<option value="'+k+'"'+(d.status===k?" selected":"")+'>'+ST[k]+'</option>';
      }).join("");
      return '<tr'+(d.eu?' class="eu"':'')+'>'
        + '<td><span class="who">'+nome+(sub?'<small>'+sub+'</small>':'')+'</span></td>'
        + '<td class="r"><span class="num">'+d.calc.indice+'<small>/48</small></span></td>'
        + '<td><span class="pg '+cls+'">'+esc(d.calc.perfil.nome)+'</span></td>'
        + '<td class="r"><span class="num">'+d.calc.contexto+'<small>/12</small></span></td>'
        + '<td class="r"><span class="num">'+(d.ded?d.ded+'<small>h/sem</small>':'—')+'</span></td>'
        + '<td>'+(d.reg.seed
            ? '<span class="pg">'+ST[d.status]+'</span>'
            : '<select class="st" data-id="'+esc(d.reg.id)+'">'+op+'</select>')+'</td>'
        + '<td class="r"><a class="lnk" href="'+URL_RES+'?id='+encodeURIComponent(d.reg.id)+'">ver PDI →</a></td>'
        + '</tr>';
    }).join("");

    document.getElementById("tb").querySelectorAll("select.st").forEach(function(sel){
      sel.addEventListener("change", function(){
        S.status(sel.dataset.id, sel.value).then(carregar);
      });
    });

    var qs = dados.filter(function(d){return d.reg.seed;}).length;
    document.getElementById("tb-n").innerHTML =
      (qs ? "<b>"+qs+" registros</b> vêm da coorte de referência, que é fictícia e serve para mostrar o painel cheio. "
            + "Desligue o seletor no topo para ver só os registros reais. "
          : "")
      + "O status é editável apenas nos registros reais — é o ponto onde a decisão humana entra no fluxo.";
  }

  anon.addEventListener("change", function(){ sincTgl(); if (dados.length) tabela(); });
  seed.addEventListener("change", function(){ sincTgl(); S.setSeed(seed.checked); carregar(); });
  document.getElementById("rec").addEventListener("click", carregar);

  carregar();
  if (S.ligado) setInterval(carregar, 25000);
})();
</script>
