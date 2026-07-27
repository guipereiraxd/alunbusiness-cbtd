---
title: "Diagnóstico"
description: "Diagnóstico de maturidade em IA no setor público: dez dimensões, radar, fortalezas, lacunas e recomendações prioritárias — em minutos, no navegador."
---

<style>
  /* progresso do wizard */
  .diag-progress{position:sticky;top:70px;z-index:8;background:var(--bg);padding:14px 0;margin:0 0 8px;border-bottom:1px solid var(--line)}
  .diag-progress .row{display:flex;justify-content:space-between;align-items:center;gap:12px}
  .diag-progress .lbl{font-family:var(--mono);font-size:11px;color:var(--tx3);letter-spacing:.06em;text-transform:uppercase}
  .diag-progress .lbl b{color:var(--ink);font-weight:600}
  .diag-progress .track{height:6px;background:var(--panel);border:1px solid var(--line);border-radius:4px;overflow:hidden;margin-top:8px}
  .diag-progress .fill{height:100%;background:var(--grad);border-radius:4px;width:0;transition:width .3s var(--ease)}
  /* pergunta enriquecida */
  .quiz-q .qsub{font-family:var(--sans);font-weight:400;font-size:13.5px;color:var(--tx2);margin:-6px 0 12px;line-height:1.5;max-width:60ch}
  .quiz-q .qnum{font-family:var(--mono);font-size:10.5px;color:var(--brand-p);letter-spacing:.14em;text-transform:uppercase;margin-bottom:6px}
  .quiz-opt.picked{border-color:var(--brand-p)!important;background:var(--tint-p)!important}
  /* resultado */
  .diag-score{display:flex;align-items:baseline;gap:16px;flex-wrap:wrap;margin:4px 0 10px}
  .diag-score .n{font-family:var(--disp);font-size:52px;font-weight:700;line-height:1;font-variant-numeric:tabular-nums;
    background:var(--grad);-webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent}
  .diag-score .of{color:var(--tx3);font-family:var(--mono);font-size:13px}
  .diag-score .stage{font-family:var(--disp);font-weight:600;font-size:19px;color:var(--ink)}
  .radar-wrap{display:flex;justify-content:center;margin:20px 0 6px}
  canvas.radar{max-width:100%;height:auto;display:block}
  .diagbars{display:grid;gap:9px;margin-top:6px}
  .diagbar{display:grid;grid-template-columns:158px 1fr 116px;gap:12px;align-items:center;font-size:13px}
  .diagbar .nm{color:var(--tx)}
  .diagbar .track{height:10px;background:var(--panel);border:1px solid var(--line);border-radius:5px;overflow:hidden}
  .diagbar .fill{height:100%;background:var(--grad);border-radius:5px 0 0 5px;transition:width .5s var(--ease)}
  .diagbar .lv{font-family:var(--mono);font-size:11px;color:var(--tx);text-align:right}
  .quiz-opts.col{flex-direction:column;gap:8px;align-items:stretch}
  .quiz-opts.col .quiz-opt{width:100%;align-items:flex-start;padding:12px 14px;line-height:1.5}
  .stage-legend{display:grid;grid-template-columns:repeat(4,1fr);gap:8px;margin-top:14px}
  .stage-legend .sl{background:var(--paper);border:1px solid var(--line);border-radius:10px;padding:12px 14px}
  .stage-legend .sl b{display:block;font-family:var(--disp);font-weight:600;font-size:13px;color:var(--ink)}
  .stage-legend .sl b::before{content:"";display:inline-block;width:9px;height:9px;border-radius:50%;margin-right:8px;vertical-align:middle}
  .stage-legend .sl.s1 b::before{background:#B84330}
  .stage-legend .sl.s2 b::before{background:#B07A16}
  .stage-legend .sl.s3 b::before{background:#4A82C4}
  .stage-legend .sl.s4 b::before{background:#2E7D46}
  .stage-legend .sl span{font-size:11.5px;color:var(--tx2);line-height:1.4;display:block;margin-top:2px}
  @media(max-width:640px){ .stage-legend{grid-template-columns:1fr 1fr} }
  @media(max-width:520px){ .diagbar{grid-template-columns:104px 1fr 84px} }
  @media print{
    :root{ --bg:#fff; --paper:#fff; --panel:#fff; --panel2:#f2f2f2; --tint-b:#fff; --tint-p:#fff; --tint-m:#fff;
      --ink:#111; --ink2:#111; --tx:#333; --tx2:#333; --tx3:#666; --line:#ccc; --line2:#bbb; }
    header.top, footer.bottom, #diag, .diag-progress, #diag-actions, #diag-msg, .page-head .crumb, .diag-intro, .skip{ display:none !important; }
    .result{ border:1px solid #ccc !important; box-shadow:none !important; }
  }
</style>

<div class="wrap">
  <div class="page-head">
    <div class="crumb"><a href="{{ '/setorpublico/' | relative_url }}">Início</a> / Diagnóstico</div>
    <h1>Diagnóstico de maturidade em IA</h1>
    <p class="lede">Dez perguntas — uma por dimensão — para produzir um retrato preliminar da capacidade da sua organização de <b>desenvolver, usar, governar e escalar</b> soluções de IA. No fim, você recebe uma nota, um radar, fortalezas, lacunas e um plano de próximos passos.</p>
  </div>

  <section class="blk" style="border-bottom:0;padding-top:24px;padding-bottom:60px">
    <div class="note diag-intro"><b>Leitura orientativa.</b> Escolha a descrição mais próxima da realidade da sua organização — não da que você gostaria que fosse. O resultado é uma autoavaliação inicial e <b>não substitui</b> um diagnóstico institucional aprofundado.</div>

    <div class="diag-progress" id="diag-progress" style="display:none">
      <div class="row"><span class="lbl">Progresso · <b id="p-cur">0</b> / <b>10</b> dimensões</span><span class="lbl" id="p-pct">0%</span></div>
      <div class="track"><div class="fill" id="p-fill"></div></div>
    </div>

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
  var prog = document.getElementById('diag-progress');
  var pCur = document.getElementById('p-cur');
  var pPct = document.getElementById('p-pct');
  var pFill = document.getElementById('p-fill');
  var stages = ['Consciente','Emergente','Performance','Escala'];
  var stageDesc = [
    'A organização está construindo repertório e reconhecendo o tema.',
    'Iniciativas isoladas em andamento, sem método consistente.',
    'Soluções integradas a processos, com resultados mensuráveis.',
    'A IA é tratada como capacidade institucional, com reúso e governança.'
  ];

  // 10 dimensões, cada uma com pergunta guia + 4 opções redigidas com voz do órgão
  var DIM = [
    { key:'estrategia', nome:'Estratégia', q:'Estratégia e direção',
      sub:'Sua organização tem uma direção clara para IA — com prioridades escolhidas e patrocínio da alta administração?',
      opts:[
        'Ainda não conversamos sobre IA de forma estruturada; existem interesses avulsos, sem prioridades.',
        'Há interesse e algumas ideias de casos, mas não temos estratégia formal nem patrocínio consolidado.',
        'Temos uma estratégia definida com prioridades e patrocínio explícito da liderança.',
        'A estratégia de IA está integrada às políticas públicas e ao portfólio institucional, e é revisada continuamente.'
      ],
      rec:'Formalize uma estratégia de IA com prioridades explícitas, patrocínio da liderança e alinhamento às políticas públicas.',
      trilha:'/setorpublico/trilhas/#trilha-1' },
    { key:'governanca', nome:'Governança', q:'Governança',
      sub:'Existe política institucional para IA, com papéis definidos, classificação de riscos e aprovação de casos?',
      opts:[
        'Não temos política, nem papéis definidos para uso de IA.',
        'Há discussões iniciais sobre regras e responsabilidades, sem instrumentos formais.',
        'Temos política, papéis e uma classificação de riscos em uso pelos casos ativos.',
        'A governança é madura: casos passam por aprovação formal, com monitoramento contínuo e revisão periódica.'
      ],
      rec:'Estabeleça uma política institucional de IA, defina papéis e responsabilidades e adote uma classificação de riscos para os casos.',
      trilha:'/setorpublico/governanca/' },
    { key:'dados', nome:'Dados', q:'Dados',
      sub:'Os dados que a IA precisa existem, com qualidade adequada, integração e governança?',
      opts:[
        'Nossos dados estão dispersos, com qualidade irregular e pouca documentação.',
        'Alguns dados estão disponíveis, mas com qualidade e integração inconsistentes.',
        'Os dados relevantes estão integrados, documentados e sob governança clara.',
        'Tratamos dado como ativo institucional: qualidade, segurança, rastreabilidade e uso responsável são a norma.'
      ],
      rec:'Priorize a disponibilidade, a qualidade e a documentação dos dados dos casos escolhidos, com governança e segurança.',
      trilha:'/setorpublico/trilhas/#trilha-3' },
    { key:'tecnologia', nome:'Tecnologia', q:'Tecnologia',
      sub:'A organização tem ambientes seguros para desenvolver, testar, operar e monitorar soluções de IA?',
      opts:[
        'Não temos infraestrutura específica para IA; usamos o que estiver à mão.',
        'Fazemos experimentos pontuais, sem ambientes padronizados.',
        'Temos ambientes formais de desenvolvimento, teste e monitoramento.',
        'Operamos uma plataforma com observabilidade, segurança e escalabilidade adequadas para IA em produção.'
      ],
      rec:'Monte ambientes de desenvolvimento, teste e monitoramento adequados a IA — não use ferramentas soltas em produção.',
      trilha:'/setorpublico/trilhas/#trilha-3' },
    { key:'pessoas', nome:'Pessoas', q:'Pessoas e competências',
      sub:'A equipe tem letramento em IA, especialistas nas áreas-chave e uma cultura preparada para essas soluções?',
      opts:[
        'Há pouco conhecimento sobre IA e nenhum letramento estruturado.',
        'Existem entusiastas isolados, mas o letramento é incipiente.',
        'O letramento está em curso e temos especialistas nas áreas-chave.',
        'Temos formação por função, comunidades de prática e novos papéis institucionalizados.'
      ],
      rec:'Invista em letramento em IA para toda a organização e forme especialistas nas áreas-chave.',
      trilha:'/setorpublico/trilhas/#trilha-7' },
    { key:'experimentacao', nome:'Experimentação', q:'Experimentação',
      sub:'A organização testa hipóteses de forma disciplinada, com escopo, critério de sucesso e registro?',
      opts:[
        'A organização não experimenta com IA.',
        'Fazemos pilotos isolados, sem método consistente.',
        'Prototipamos com avaliação estruturada e registro de aprendizados.',
        'A experimentação disciplinada é parte da cultura, com ciclos contínuos e reúso de aprendizados.'
      ],
      rec:'Estruture a prototipação: escopo delimitado, critério de sucesso, ambiente controlado e registro de aprendizados.',
      trilha:'/setorpublico/ferramentas/priorizador/' },
    { key:'contratacao', nome:'Contratação', q:'Contratação',
      sub:'Ao contratar IA de terceiros, protegemos dados, PI, portabilidade e o direito de auditoria?',
      opts:[
        'Não temos critérios específicos para contratar IA — usamos os modelos gerais.',
        'Contratações pontuais, sem cuidados específicos com dados, PI ou dependência.',
        'Nossos contratos já incluem requisitos de segurança, dados e portabilidade.',
        'A contratação é madura: prevenção de dependência, direito de auditoria e cláusulas de saída em todo contrato de IA.'
      ],
      rec:'Inclua requisitos de segurança, propriedade de dados, portabilidade e direito de auditoria nos contratos de IA.',
      trilha:'/setorpublico/trilhas/#trilha-5' },
    { key:'valor', nome:'Valor', q:'Mensuração de valor',
      sub:'A organização mede o valor gerado pela IA — em eficiência, serviço, decisão ou integridade?',
      opts:[
        'A organização não mede o valor gerado pelas iniciativas de IA.',
        'Temos percepções qualitativas, sem indicadores nem linha de base.',
        'Temos indicadores definidos e linha de base para acompanhar os casos.',
        'Fazemos avaliação contínua de benefícios, custos e impacto social — e ela guia decisões.'
      ],
      rec:'Defina indicadores e linha de base antes de iniciar cada caso; mensuração começa antes da entrega.',
      trilha:'/setorpublico/ferramentas/calculadora/' },
    { key:'transparencia', nome:'Transparência', q:'Transparência e participação',
      sub:'O cidadão sabe quando há IA envolvida, pode entender a decisão e contestá-la?',
      opts:[
        'Não há transparência sobre onde e como usamos IA.',
        'Comunicamos pontualmente algumas iniciativas, sem consistência.',
        'Explicamos o uso, mantemos canais de consulta e permitimos contestação.',
        'Transparência ativa e prestação de contas fazem parte de como operamos.'
      ],
      rec:'Crie canais explícitos de explicação, consulta e contestação para o uso público de IA.',
      trilha:'/setorpublico/governanca/' },
    { key:'escala', nome:'Escala', q:'Escala',
      sub:'A organização reutiliza aprendizados, padroniza soluções e compartilha entre áreas ou órgãos?',
      opts:[
        'Cada iniciativa começa do zero, sem reúso.',
        'Há primeiras tentativas de compartilhar, sem padrões formais.',
        'Temos padrões e reutilização entre áreas.',
        'Operamos um centro de competência e compartilhamos soluções entre órgãos.'
      ],
      rec:'Estabeleça padrões, reúso entre áreas e um centro de competência que capitalize os aprendizados.',
      trilha:'/setorpublico/trilhas/#trilha-1' }
  ];

  // build form (sem expor os rótulos de nível nas opções — preserva a surpresa)
  var html = '';
  DIM.forEach(function(d, i){
    html += '<div class="quiz-q" data-q="'+d.key+'">'+
      '<div class="qnum">Dimensão '+(i+1)+' de 10</div>'+
      '<div class="qt">'+d.q+'</div>'+
      '<div class="qsub">'+d.sub+'</div>'+
      '<div class="quiz-opts col" role="radiogroup" aria-label="'+d.q+'">';
    for(var l=1; l<=4; l++){
      html += '<label class="quiz-opt"><input type="radio" name="'+d.key+'" value="'+l+'"><span>'+d.opts[l-1]+'</span></label>';
    }
    html += '</div></div>';
  });
  form.innerHTML = html;

  function val(k){ var el = form.querySelector('input[name="'+k+'"]:checked'); return el ? parseInt(el.value,10) : null; }
  function esc(s){ return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;'); }
  function stageOf(m){ return m < 1.75 ? 1 : (m < 2.5 ? 2 : (m < 3.25 ? 3 : 4)); }

  // progresso do wizard
  function updateProgress(){
    var answered = DIM.filter(function(d){ return val(d.key); }).length;
    if(answered > 0) prog.style.display = 'block';
    pCur.textContent = answered;
    var pct = Math.round(answered/DIM.length*100);
    pPct.textContent = pct + '%';
    pFill.style.width = pct + '%';
    // marca visual do card escolhido
    DIM.forEach(function(d){
      var opts = form.querySelectorAll('[data-q="'+d.key+'"] .quiz-opt');
      opts.forEach(function(o){ o.classList.toggle('picked', o.querySelector('input').checked); });
    });
  }
  form.addEventListener('change', updateProgress);

  function drawRadar(canvas, levels){
    var dpr = window.devicePixelRatio || 1;
    var size = 480;
    canvas.width = size*dpr; canvas.height = size*dpr;
    canvas.style.width = size+'px'; canvas.style.height = size+'px';
    var ctx = canvas.getContext('2d');
    ctx.scale(dpr,dpr);
    var cx = size/2, cy = size/2, R = size/2 - 58, n = DIM.length;
    function pt(i, r){ var a = -Math.PI/2 + i*(2*Math.PI/n); return [cx + r*Math.cos(a), cy + r*Math.sin(a)]; }
    // rings
    for(var ring=1; ring<=4; ring++){
      ctx.beginPath();
      for(var i=0;i<n;i++){ var p = pt(i, R*ring/4); i===0?ctx.moveTo(p[0],p[1]):ctx.lineTo(p[0],p[1]); }
      ctx.closePath(); ctx.strokeStyle = ring===4 ? 'rgba(90,46,138,.25)' : 'rgba(120,120,140,.16)'; ctx.lineWidth=1; ctx.stroke();
    }
    // legenda níveis nos anéis (1 a 4)
    ctx.font='9px ui-monospace,monospace'; ctx.fillStyle='#7A7E90'; ctx.textAlign='center';
    for(var lv=1; lv<=4; lv++){ ctx.fillText(lv, cx + 3, cy - (R*lv/4) - 4); }
    // spokes + labels
    ctx.font='11.5px "Instrument Sans","Inter",sans-serif'; ctx.fillStyle='#33334A';
    for(var i=0;i<n;i++){
      var pe = pt(i, R);
      ctx.beginPath(); ctx.moveTo(cx,cy); ctx.lineTo(pe[0],pe[1]); ctx.strokeStyle='rgba(140,140,155,.20)'; ctx.stroke();
      var pl = pt(i, R+22), a = -Math.PI/2 + i*(2*Math.PI/n), cos = Math.cos(a);
      ctx.textAlign = cos > 0.3 ? 'left' : (cos < -0.3 ? 'right' : 'center');
      ctx.textBaseline = 'middle';
      ctx.font = '600 12px "Instrument Sans","Inter",sans-serif';
      ctx.fillText(DIM[i].nome, pl[0], pl[1]);
    }
    // gradient para a área
    var grad = ctx.createLinearGradient(0,0,size,size);
    grad.addColorStop(0, 'rgba(30,42,120,.20)');
    grad.addColorStop(0.55, 'rgba(90,46,138,.24)');
    grad.addColorStop(1, 'rgba(196,53,132,.20)');
    // polígono de dados
    ctx.beginPath();
    for(var i=0;i<n;i++){ var p = pt(i, R*levels[i]/4); i===0?ctx.moveTo(p[0],p[1]):ctx.lineTo(p[0],p[1]); }
    ctx.closePath();
    ctx.fillStyle = grad; ctx.fill();
    var stroke = ctx.createLinearGradient(0,0,size,0);
    stroke.addColorStop(0,'#1E2A78'); stroke.addColorStop(.55,'#5A2E8A'); stroke.addColorStop(1,'#C43584');
    ctx.strokeStyle = stroke; ctx.lineWidth = 2.2; ctx.stroke();
    // pontos
    for(var i=0;i<n;i++){
      var p = pt(i, R*levels[i]/4);
      ctx.beginPath(); ctx.arc(p[0],p[1],4.5,0,2*Math.PI); ctx.fillStyle='#fff'; ctx.fill();
      ctx.beginPath(); ctx.arc(p[0],p[1],3,0,2*Math.PI); ctx.fillStyle='#5A2E8A'; ctx.fill();
    }
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
    var fortes = idx.slice().sort(function(a,b){return b.lv-a.lv || a.i-b.i;}).filter(function(x){return x.lv>=3;}).slice(0,3);
    var fracas = idx.slice().sort(function(a,b){return a.lv-b.lv || a.i-b.i;}).slice(0,3);

    // interpretação do estágio
    var interpret = [
      'Sua organização ainda está construindo repertório sobre IA. É um bom momento para <b>letramento e patrocínio</b> — antes de comprometer projetos.',
      'Sua organização já tem iniciativas em andamento, mas <b>sem método consistente</b>. O próximo salto é dar estrutura ao que já existe.',
      'A IA já entrega resultados mensuráveis na sua organização. O foco agora é <b>ampliar a cobertura</b> e amadurecer a governança.',
      'A IA é uma <b>capacidade institucional</b> na sua organização. O próximo estágio é liderar padrões setoriais e compartilhar com outros órgãos.'
    ][st-1];

    var bars = '<div class="diagbars">' + DIM.map(function(d,i){
      return '<div class="diagbar"><span class="nm">'+esc(d.nome)+'</span>'+
        '<span class="track"><span class="fill" style="width:'+(levels[i]/4*100)+'%"></span></span>'+
        '<span class="lv">Nível '+levels[i]+' · '+stages[levels[i]-1]+'</span></div>';
    }).join('') + '</div>';

    function names(list){ return '<ul class="klist">'+list.map(function(x){ return '<li><b>'+esc(DIM[x.i].nome)+'</b> Nível '+x.lv+' · '+stages[x.lv-1]+'</li>'; }).join('')+'</ul>'; }
    var recs = '<ul class="klist">'+fracas.map(function(x){
      var d = DIM[x.i];
      return '<li><b>'+esc(d.nome)+':</b> '+esc(d.rec)+' <a href="'+d.trilha+'" style="font-family:var(--mono);font-size:11px;letter-spacing:.05em;text-transform:uppercase;color:var(--brand-p);margin-left:6px">Trilha →</a></li>';
    }).join('')+'</ul>';

    // legenda dos estágios (aparece só no resultado)
    var legenda = '<div class="stage-legend">'+stages.map(function(s,i){
      return '<div class="sl s'+(i+1)+(st===i+1?' current':'')+'"><b>Nível '+(i+1)+' · '+s+'</b><span>'+stageDesc[i]+'</span></div>';
    }).join('')+'</div>';

    var sev = st>=3 ? 'val' : (st===2 ? 'via' : 'ris');
    var html =
      '<div class="rhead">'+
        '<div class="ric"><svg><use href="#i-gauge"></use></svg></div>'+
        '<div style="flex:1">'+
          '<span class="badge '+sev+'"><i></i>Nível '+st+' · '+stages[st-1]+'</span>'+
          '<div class="diag-score"><span class="n">'+media.toFixed(1).replace('.',',')+'</span><span class="of">/ 4,0</span><span class="stage">'+stages[st-1]+'</span></div>'+
          '<p class="rdesc">'+interpret+'</p>'+
        '</div>'+
      '</div>'+
      '<div class="rk">Radar de maturidade</div>'+
      '<div class="radar-wrap"><canvas class="radar" role="img" aria-label="Radar de maturidade por dimensão"></canvas></div>'+
      '<div class="rk">Os quatro estágios</div>'+legenda+
      '<div class="rk">Resultado por dimensão</div>'+bars+
      '<div class="rk">Principais fortalezas</div>'+(fortes.length?names(fortes):'<p class="rdesc" style="margin-top:8px">Ainda em formação — nenhuma dimensão atingiu o nível <b>Performance</b>. Todo esforço agora rende: comece pelas dimensões abaixo.</p>')+
      '<div class="rk">Principais lacunas</div>'+names(fracas)+
      '<div class="rk">Recomendações prioritárias</div>'+recs+
      '<div class="rk">Continue por aqui</div>'+
      '<ul class="klist">'+
        '<li><b>Priorização:</b> <a href="/setorpublico/ferramentas/priorizador/">Priorizador de casos</a> — escolha por onde começar.</li>'+
        '<li><b>Uso responsável:</b> <a href="/setorpublico/governanca/posso-usar-ia/">Posso usar IA para isso?</a> — orientação em 10 perguntas.</li>'+
        '<li><b>Capacitação:</b> <a href="/setorpublico/trilhas/">Trilhas por perfil</a> — cursos do Grupo Alun por papel.</li>'+
      '</ul>'+
      '<div style="margin-top:26px;padding:22px 26px;background:linear-gradient(120deg,var(--tint-b),var(--tint-p));border:1px solid rgba(90,46,138,.18);border-radius:14px">'+
        '<div style="font-family:var(--mono);font-size:10.5px;color:var(--brand-p);letter-spacing:.14em;text-transform:uppercase">Quer ir além</div>'+
        '<div style="font-family:var(--disp);font-weight:600;font-size:19px;color:var(--ink);margin-top:6px">Diagnóstico institucional aprofundado</div>'+
        '<p style="color:var(--tx);font-size:14.5px;line-height:1.55;margin-top:8px;max-width:60ch">O resultado acima é uma autoavaliação. Para um diagnóstico completo com entrevistas, análise de casos e roadmap institucional, a Alun Business estrutura um trabalho sob medida.</p>'+
        '<a href="/setorpublico/contato/" class="btn btn-primary" style="margin-top:14px">Falar com a Alun Business <svg width="16" height="16" aria-hidden="true"><use href="#i-arrow"></use></svg></a>'+
      '</div>'+
      '<div class="actions no-print" style="margin-top:22px"><button class="btn btn-line" type="button" onclick="window.print()">Imprimir / salvar PDF</button></div>'+
      '<div class="note" style="margin-top:18px">Resultado orientativo — não substitui um diagnóstico institucional aprofundado.</div>';

    result.className = 'result show sev-'+sev;
    result.innerHTML = html;
    drawRadar(result.querySelector('canvas.radar'), levels);
    // anima as barras (parte de 0)
    requestAnimationFrame(function(){
      var fills = result.querySelectorAll('.diagbar .fill');
      fills.forEach(function(f){ var w=f.style.width; f.style.width='0%'; requestAnimationFrame(function(){ f.style.width=w; }); });
    });
    result.scrollIntoView({behavior:'smooth',block:'start'});
    result.focus({preventScroll:true});
  });

  reset.addEventListener('click', function(){
    form.reset(); result.className='result'; result.innerHTML=''; msg.classList.remove('show');
    prog.style.display='none'; pCur.textContent='0'; pPct.textContent='0%'; pFill.style.width='0%';
    form.querySelectorAll('.quiz-opt.picked').forEach(function(o){ o.classList.remove('picked'); });
    form.scrollIntoView({behavior:'smooth',block:'start'});
  });
})();
</script>
{% endraw %}
