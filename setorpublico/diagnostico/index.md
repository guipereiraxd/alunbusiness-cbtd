---
title: "Diagnóstico"
---

<style>
  .diag-score{display:flex;align-items:baseline;gap:16px;flex-wrap:wrap;margin:4px 0 10px}
  .diag-score .n{font-family:var(--disp);font-size:46px;font-weight:700;color:var(--accent);line-height:1;font-variant-numeric:tabular-nums}
  .diag-score .of{color:var(--tx3);font-family:var(--mono);font-size:13px}
  .diag-score .stage{font-family:var(--disp);font-weight:600;font-size:19px}
  .radar-wrap{display:flex;justify-content:center;margin:20px 0 6px}
  canvas.radar{max-width:100%;height:auto;display:block}
  .diagbars{display:grid;gap:9px;margin-top:6px}
  .diagbar{display:grid;grid-template-columns:158px 1fr 116px;gap:12px;align-items:center;font-size:13px}
  .diagbar .nm{color:var(--tx2)}
  .diagbar .track{height:10px;background:var(--panel2);border:1px solid var(--line);border-radius:5px;overflow:hidden}
  .diagbar .fill{height:100%;background:var(--accent);border-radius:5px 0 0 5px}
  .diagbar .lv{font-family:var(--mono);font-size:11px;color:var(--tx);text-align:right}
  .quiz-opts.col{flex-direction:column;gap:8px;align-items:stretch}
  .quiz-opts.col .quiz-opt{width:100%}
  @media(max-width:520px){ .diagbar{grid-template-columns:104px 1fr 84px} }
  @media print{
    :root{ --bg:#fff; --bg2:#fff; --panel:#fff; --panel2:#f2f2f2; --tx:#111; --tx2:#333; --tx3:#666; --line:#ccc; --line2:#bbb; }
    header.top, footer.bottom, #diag, #diag-actions, #diag-msg, .page-head .crumb, .diag-intro, .skip{ display:none !important; }
    .result{ border:1px solid #ccc !important; }
  }
</style>

<div class="wrap">
  <div class="page-head">
    <div class="crumb"><a href="{{ '/setorpublico/' | relative_url }}">Início</a> / Diagnóstico</div>
    <h1>Diagnóstico de maturidade em IA</h1>
    <p class="lede">Uma visão preliminar da capacidade da sua organização para desenvolver, utilizar, governar e escalar soluções de IA. Responda a dez perguntas — uma por dimensão — e receba nota, radar e recomendações.</p>
  </div>

  <section class="blk" style="border-bottom:0;padding-top:32px;padding-bottom:60px">
    <div class="note diag-intro"><b>Leitura orientativa:</b> o resultado é uma autoavaliação inicial e <b>não substitui</b> um diagnóstico aprofundado. Escolha, em cada dimensão, a descrição mais próxima da sua realidade.</div>

    <form id="diag" class="quiz"></form>

    <div id="diag-actions" class="actions" style="margin-top:24px">
      <button id="diag-go" class="btn btn-primary" type="button">Ver diagnóstico <svg width="16" height="16"><use href="#i-arrow"></use></svg></button>
      <button id="diag-reset" class="btn btn-line" type="button">Recomeçar</button>
    </div>
    <div id="diag-msg" class="quiz-msg">Responda a todas as dez dimensões para ver o diagnóstico.</div>

    <div id="diag-result" class="result" role="region" aria-live="polite" tabindex="-1"></div>
  </section>
</div>

{% raw %}
<script>
(function(){
  var form = document.getElementById('diag');
  if(!form) return;
  var go = document.getElementById('diag-go');
  var reset = document.getElementById('diag-reset');
  var msg = document.getElementById('diag-msg');
  var result = document.getElementById('diag-result');
  var stages = ['Consciente','Emergente','Performance','Escala'];

  var DIM = [
    { key:'estrategia', nome:'Estratégia', q:'Estratégia e direção',
      opts:['Sem direção definida; conversas isoladas.','Há interesse e algumas prioridades, sem estratégia formal.','Estratégia definida, com prioridades e patrocínio da liderança.','Estratégia integrada às políticas públicas e ao portfólio, revisada continuamente.'],
      rec:'Formalize uma estratégia de IA com prioridades, patrocínio da liderança e alinhamento às políticas públicas.' },
    { key:'governanca', nome:'Governança', q:'Governança',
      opts:['Sem política nem papéis definidos.','Discussões iniciais sobre regras e responsabilidades.','Política de IA, papéis e classificação de riscos em uso.','Governança madura, com aprovação de casos e monitoramento contínuo.'],
      rec:'Defina uma política de IA, papéis e responsabilidades e a classificação de riscos dos casos de uso.' },
    { key:'dados', nome:'Dados', q:'Dados',
      opts:['Dados dispersos, sem qualidade ou documentação.','Alguns dados disponíveis, qualidade irregular.','Dados integrados, documentados e com governança.','Dados como ativo, com qualidade, segurança e rastreabilidade.'],
      rec:'Melhore a disponibilidade, a qualidade e a documentação dos dados, com governança e segurança.' },
    { key:'tecnologia', nome:'Tecnologia', q:'Tecnologia',
      opts:['Nenhuma infraestrutura específica.','Experimentos pontuais em ferramentas avulsas.','Ambientes de desenvolvimento, teste e monitoramento.','Plataforma com observabilidade, segurança e escalabilidade.'],
      rec:'Monte ambientes de desenvolvimento, teste e monitoramento adequados para IA.' },
    { key:'pessoas', nome:'Pessoas', q:'Pessoas e competências',
      opts:['Pouco conhecimento sobre IA.','Alguns entusiastas; letramento incipiente.','Letramento em curso e especialistas em áreas-chave.','Formação por função, comunidades de prática e novos papéis.'],
      rec:'Invista em letramento em IA e forme especialistas nas áreas-chave.' },
    { key:'experimentacao', nome:'Experimentação', q:'Experimentação',
      opts:['A organização não experimenta.','Pilotos isolados, sem método.','Prototipação com avaliação e registro de aprendizados.','Cultura de experimentação disciplinada e contínua.'],
      rec:'Estruture a prototipação com método, avaliação e registro de aprendizados.' },
    { key:'contratacao', nome:'Contratação', q:'Contratação',
      opts:['Sem critérios específicos para IA.','Contratações pontuais, sem cuidados de dados ou PI.','Requisitos de segurança, dados e portabilidade nos contratos.','Contratação madura, com prevenção de dependência e direito de auditoria.'],
      rec:'Inclua requisitos de segurança, dados, portabilidade e direito de auditoria nos contratos de IA.' },
    { key:'valor', nome:'Valor', q:'Mensuração de valor',
      opts:['A organização não mede o valor gerado.','Percepções qualitativas, sem indicadores.','Indicadores e linha de base definidos.','Avaliação contínua de benefícios, custos e impacto social.'],
      rec:'Defina indicadores e linha de base para medir o valor gerado pelas iniciativas.' },
    { key:'transparencia', nome:'Transparência', q:'Transparência e participação',
      opts:['Sem transparência sobre o uso de IA.','Comunicação pontual.','Explicação, canais de consulta e contestação.','Transparência ativa, com prestação de contas e participação.'],
      rec:'Crie canais de explicação, consulta e contestação sobre o uso de IA.' },
    { key:'escala', nome:'Escala', q:'Escala',
      opts:['Iniciativas isoladas, sem reúso.','Primeiras tentativas de compartilhar.','Padrões e reutilização entre áreas.','Centro de competência e compartilhamento entre órgãos.'],
      rec:'Estabeleça padrões, reúso e um centro de competência entre áreas e órgãos.' }
  ];

  // build form
  var html = '';
  DIM.forEach(function(d, i){
    html += '<div class="quiz-q"><div class="qt">'+(i+1)+'. '+d.q+'</div>'+
      '<div class="quiz-opts col" role="radiogroup" aria-label="'+d.q+'">';
    for(var l=1; l<=4; l++){
      html += '<label class="quiz-opt"><input type="radio" name="'+d.key+'" value="'+l+'"><span><b>'+stages[l-1]+'</b> — '+d.opts[l-1]+'</span></label>';
    }
    html += '</div></div>';
  });
  form.innerHTML = html;

  function val(k){ var el = form.querySelector('input[name="'+k+'"]:checked'); return el ? parseInt(el.value,10) : null; }
  function esc(s){ return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;'); }

  function stageOf(m){ return m < 1.75 ? 1 : (m < 2.5 ? 2 : (m < 3.25 ? 3 : 4)); }

  function drawRadar(canvas, levels){
    var dpr = window.devicePixelRatio || 1;
    var size = 460;
    canvas.width = size*dpr; canvas.height = size*dpr;
    canvas.style.width = size+'px'; canvas.style.height = size+'px';
    var ctx = canvas.getContext('2d');
    ctx.scale(dpr,dpr);
    var cx = size/2, cy = size/2, R = size/2 - 52, n = DIM.length;
    function pt(i, r){ var a = -Math.PI/2 + i*(2*Math.PI/n); return [cx + r*Math.cos(a), cy + r*Math.sin(a)]; }
    // rings
    for(var ring=1; ring<=4; ring++){
      ctx.beginPath();
      for(var i=0;i<n;i++){ var p = pt(i, R*ring/4); i===0?ctx.moveTo(p[0],p[1]):ctx.lineTo(p[0],p[1]); }
      ctx.closePath(); ctx.strokeStyle='rgba(140,150,165,.20)'; ctx.lineWidth=1; ctx.stroke();
    }
    // spokes + labels
    ctx.font='11px ui-sans-serif,system-ui,sans-serif'; ctx.fillStyle='#93A0B2';
    for(var i=0;i<n;i++){
      var pe = pt(i, R);
      ctx.beginPath(); ctx.moveTo(cx,cy); ctx.lineTo(pe[0],pe[1]); ctx.strokeStyle='rgba(140,150,165,.25)'; ctx.stroke();
      var pl = pt(i, R+20), a = -Math.PI/2 + i*(2*Math.PI/n), cos = Math.cos(a);
      ctx.textAlign = cos > 0.3 ? 'left' : (cos < -0.3 ? 'right' : 'center');
      ctx.textBaseline = 'middle';
      ctx.fillText(DIM[i].nome, pl[0], pl[1]);
    }
    // data polygon
    ctx.beginPath();
    for(var i=0;i<n;i++){ var p = pt(i, R*levels[i]/4); i===0?ctx.moveTo(p[0],p[1]):ctx.lineTo(p[0],p[1]); }
    ctx.closePath();
    ctx.fillStyle='rgba(62,159,176,.22)'; ctx.fill();
    ctx.strokeStyle='#3E9FB0'; ctx.lineWidth=2; ctx.stroke();
    for(var i=0;i<n;i++){ var p = pt(i, R*levels[i]/4); ctx.beginPath(); ctx.arc(p[0],p[1],3,0,2*Math.PI); ctx.fillStyle='#3E9FB0'; ctx.fill(); }
  }

  go.addEventListener('click', function(){
    var missing = DIM.filter(function(d){ return !val(d.key); });
    if(missing.length){
      msg.classList.add('show');
      form.querySelector('input[name="'+missing[0].key+'"]').closest('.quiz-q').scrollIntoView({behavior:'smooth',block:'center'});
      return;
    }
    msg.classList.remove('show');
    var levels = DIM.map(function(d){ return val(d.key); });
    var soma = levels.reduce(function(a,b){return a+b;},0);
    var media = soma/DIM.length;
    var st = stageOf(media);

    // ranking
    var idx = DIM.map(function(d,i){ return {i:i, lv:levels[i]}; });
    var fortes = idx.slice().sort(function(a,b){return b.lv-a.lv;}).filter(function(x){return x.lv>=3;}).slice(0,3);
    var fracas = idx.slice().sort(function(a,b){return a.lv-b.lv;}).slice(0,3);

    var bars = '<div class="diagbars">' + DIM.map(function(d,i){
      return '<div class="diagbar"><span class="nm">'+esc(d.nome)+'</span>'+
        '<span class="track"><span class="fill" style="width:'+(levels[i]/4*100)+'%"></span></span>'+
        '<span class="lv">Nível '+levels[i]+' · '+stages[levels[i]-1]+'</span></div>';
    }).join('') + '</div>';

    function names(list){ return '<ul class="klist">'+list.map(function(x){ return '<li><b>'+esc(DIM[x.i].nome)+'</b> Nível '+x.lv+' · '+stages[x.lv-1]+'</li>'; }).join('')+'</ul>'; }
    var recs = '<ul class="klist">'+fracas.map(function(x){ return '<li><b>'+esc(DIM[x.i].nome)+':</b> '+esc(DIM[x.i].rec)+'</li>'; }).join('')+'</ul>';

    var sev = st>=3 ? 'val' : (st===2 ? 'via' : 'ris');
    var html =
      '<div class="rhead">'+
        '<div class="ric"><svg><use href="#i-gauge"></use></svg></div>'+
        '<div style="flex:1">'+
          '<span class="badge '+sev+'"><i></i>Nível '+st+' · '+stages[st-1]+'</span>'+
          '<div class="diag-score"><span class="n">'+media.toFixed(1).replace('.',',')+'</span><span class="of">/ 4,0</span><span class="stage">'+stages[st-1]+'</span></div>'+
          '<p class="rdesc">Média das dez dimensões. O radar abaixo mostra onde a organização está mais forte e onde estão as lacunas.</p>'+
        '</div>'+
      '</div>'+
      '<div class="radar-wrap"><canvas class="radar" role="img" aria-label="Radar de maturidade por dimensão"></canvas></div>'+
      '<div class="rk">Resultado por dimensão</div>'+bars+
      '<div class="rk">Principais fortalezas</div>'+(fortes.length?names(fortes):'<p class="rdesc">Ainda em formação — nenhuma dimensão atingiu o nível Performance.</p>')+
      '<div class="rk">Principais lacunas</div>'+names(fracas)+
      '<div class="rk">Recomendações prioritárias</div>'+recs+
      '<div class="rk">Continue por aqui</div>'+
      '<ul class="klist">'+
        '<li><b>Trilhas:</b> <a href="/setorpublico/trilhas/">capacitação por perfil</a></li>'+
        '<li><b>Governança:</b> <a href="/setorpublico/governanca/posso-usar-ia/">Posso usar IA para isso?</a></li>'+
        '<li><b>Priorização:</b> <a href="/setorpublico/ferramentas/priorizador/">Priorizador de casos</a></li>'+
      '</ul>'+
      '<div class="actions" style="margin-top:22px"><button class="btn btn-line" type="button" onclick="window.print()">Imprimir / salvar PDF</button></div>'+
      '<div class="note" style="margin-top:18px">Resultado orientativo — não substitui um diagnóstico aprofundado.</div>';

    result.className = 'result show sev-'+sev;
    result.innerHTML = html;
    drawRadar(result.querySelector('canvas.radar'), levels);
    result.scrollIntoView({behavior:'smooth',block:'start'});
    result.focus({preventScroll:true});
  });

  reset.addEventListener('click', function(){
    form.reset(); result.className='result'; result.innerHTML=''; msg.classList.remove('show');
    form.scrollIntoView({behavior:'smooth',block:'start'});
  });
})();
</script>
{% endraw %}
