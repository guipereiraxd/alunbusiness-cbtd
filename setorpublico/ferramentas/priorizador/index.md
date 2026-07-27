---
title: "Priorizador de casos"
---

<div class="wrap">
  <div class="page-head">
    <div class="crumb"><a href="{{ '/setorpublico/' | relative_url }}">Início</a> / <a href="{{ '/setorpublico/ferramentas/' | relative_url }}">Ferramentas</a> / Priorizador de casos</div>
    <h1>Este caso de uso deveria ser priorizado?</h1>
    <p class="lede">Avalie valor público, viabilidade e risco antes de iniciar um experimento. Ao final, o caso é classificado em uma de quatro faixas — com os próximos passos.</p>
  </div>

  <section class="blk" style="border-bottom:0;padding-top:32px;padding-bottom:60px">
    <div class="note no-print"><b>Leitura orientativa:</b> a classificação é uma orientação inicial e <b>não substitui</b> análise técnica, jurídica ou institucional.</div>

    <label class="no-print" style="display:block;margin-top:26px">
      <span style="font-family:var(--disp);font-weight:600;font-size:14px;color:var(--tx);display:block;margin-bottom:8px">Nome do caso <span style="color:var(--tx3);font-weight:400">(opcional)</span></span>
      <input id="caso-nome" type="text" placeholder="Ex.: triagem de solicitações do cidadão" style="background:var(--panel);border:1px solid var(--line2);border-radius:8px;color:var(--tx);font-family:var(--sans);font-size:14px;padding:11px 13px;width:100%;max-width:440px">
    </label>

    <div id="prio-wiz" class="wiz no-print">
      <div class="wiz-head">
        <div>
          <div class="wpos" id="wpos">Etapa 1 de 3</div>
          <div class="wtitle" id="wtitle">Valor público</div>
        </div>
        <div class="wiz-dots" id="wdots" role="tablist" aria-label="Etapas do priorizador"></div>
      </div>
      <div class="wiz-bar"><div class="wfill" id="wfill" style="width:33%"></div></div>

      <form id="prio">
        <div class="wiz-step on" data-step="0">
          <p class="wsub">Três perguntas para dimensionar o impacto potencial do caso.</p>
          <div class="quiz">
            <div class="quiz-q">
              <div class="qt">1. Quantas pessoas seriam beneficiadas?</div>
              <div class="quiz-opts" role="radiogroup" aria-label="Quantidade de beneficiários">
                <label class="quiz-opt"><input type="radio" name="v1" value="2"><span>Muitas</span></label>
                <label class="quiz-opt"><input type="radio" name="v1" value="1"><span>Algumas</span></label>
                <label class="quiz-opt"><input type="radio" name="v1" value="0"><span>Poucas</span></label>
              </div>
            </div>
            <div class="quiz-q">
              <div class="qt">2. Quanto reduz tempo, custo ou erro?</div>
              <div class="quiz-opts" role="radiogroup" aria-label="Redução de tempo, custo ou erro">
                <label class="quiz-opt"><input type="radio" name="v2" value="2"><span>Muito</span></label>
                <label class="quiz-opt"><input type="radio" name="v2" value="1"><span>Algum</span></label>
                <label class="quiz-opt"><input type="radio" name="v2" value="0"><span>Pouco</span></label>
              </div>
            </div>
            <div class="quiz-q">
              <div class="qt">3. É replicável em outras áreas ou órgãos?</div>
              <div class="quiz-opts" role="radiogroup" aria-label="Replicabilidade">
                <label class="quiz-opt"><input type="radio" name="v3" value="2"><span>Sim</span></label>
                <label class="quiz-opt"><input type="radio" name="v3" value="1"><span>Talvez</span></label>
                <label class="quiz-opt"><input type="radio" name="v3" value="0"><span>Não</span></label>
              </div>
            </div>
          </div>
        </div>

        <div class="wiz-step" data-step="1">
          <p class="wsub">Agora as condições internas — dados, competências, orçamento.</p>
          <div class="quiz">
            <div class="quiz-q">
              <div class="qt">4. Os dados necessários estão disponíveis e com qualidade?</div>
              <div class="quiz-opts" role="radiogroup" aria-label="Disponibilidade e qualidade dos dados">
                <label class="quiz-opt"><input type="radio" name="f1" value="2"><span>Sim</span></label>
                <label class="quiz-opt"><input type="radio" name="f1" value="1"><span>Em parte</span></label>
                <label class="quiz-opt"><input type="radio" name="f1" value="0"><span>Não</span></label>
              </div>
            </div>
            <div class="quiz-q">
              <div class="qt">5. Há competências e integrações internas para operar?</div>
              <div class="quiz-opts" role="radiogroup" aria-label="Competências e integrações">
                <label class="quiz-opt"><input type="radio" name="f2" value="2"><span>Sim</span></label>
                <label class="quiz-opt"><input type="radio" name="f2" value="1"><span>Em parte</span></label>
                <label class="quiz-opt"><input type="radio" name="f2" value="0"><span>Não</span></label>
              </div>
            </div>
            <div class="quiz-q">
              <div class="qt">6. Custo e prazo cabem no que a organização tem?</div>
              <div class="quiz-opts" role="radiogroup" aria-label="Custo e prazo">
                <label class="quiz-opt"><input type="radio" name="f3" value="2"><span>Sim</span></label>
                <label class="quiz-opt"><input type="radio" name="f3" value="1"><span>Em parte</span></label>
                <label class="quiz-opt"><input type="radio" name="f3" value="0"><span>Não</span></label>
              </div>
            </div>
          </div>
        </div>

        <div class="wiz-step" data-step="2">
          <p class="wsub">Por fim, dimensione o risco — impacto sobre pessoas, dados envolvidos e supervisão.</p>
          <div class="quiz">
            <div class="quiz-q">
              <div class="qt">7. A IA afeta direitos, benefícios ou serviços essenciais a pessoas?</div>
              <div class="quiz-opts" role="radiogroup" aria-label="Impacto sobre direitos ou serviços essenciais">
                <label class="quiz-opt"><input type="radio" name="r1" value="sim"><span>Sim</span></label>
                <label class="quiz-opt"><input type="radio" name="r1" value="indireto"><span>De forma indireta</span></label>
                <label class="quiz-opt"><input type="radio" name="r1" value="nao"><span>Não</span></label>
              </div>
            </div>
            <div class="quiz-q">
              <div class="qt">8. Envolve dados pessoais ou sensíveis?</div>
              <div class="quiz-opts" role="radiogroup" aria-label="Dados pessoais ou sensíveis">
                <label class="quiz-opt"><input type="radio" name="r2" value="sensiveis"><span>Sensíveis</span></label>
                <label class="quiz-opt"><input type="radio" name="r2" value="pessoais"><span>Pessoais</span></label>
                <label class="quiz-opt"><input type="radio" name="r2" value="nao"><span>Não</span></label>
              </div>
            </div>
            <div class="quiz-q">
              <div class="qt">9. Qual a consequência de um erro?</div>
              <div class="quiz-opts" role="radiogroup" aria-label="Consequência do erro">
                <label class="quiz-opt"><input type="radio" name="r3" value="grave"><span>Grave</span></label>
                <label class="quiz-opt"><input type="radio" name="r3" value="moderada"><span>Moderada</span></label>
                <label class="quiz-opt"><input type="radio" name="r3" value="baixa"><span>Baixa</span></label>
              </div>
            </div>
            <div class="quiz-q">
              <div class="qt">10. Há supervisão humana, e a decisão é explicável e reversível?</div>
              <div class="quiz-opts" role="radiogroup" aria-label="Supervisão humana, explicabilidade e reversibilidade">
                <label class="quiz-opt"><input type="radio" name="r4" value="sim"><span>Sim</span></label>
                <label class="quiz-opt"><input type="radio" name="r4" value="parcial"><span>Em parte</span></label>
                <label class="quiz-opt"><input type="radio" name="r4" value="nao"><span>Não</span></label>
              </div>
            </div>
          </div>
        </div>
      </form>

      <div class="wiz-nav">
        <div class="wleft">
          <button id="wprev" class="btn btn-line" type="button" disabled>Voltar</button>
        </div>
        <div class="wright">
          <button id="wnext" class="btn btn-primary" type="button">Próxima etapa <svg width="16" height="16"><use href="#i-arrow"></use></svg></button>
          <button id="wgo" class="btn btn-primary" type="button" style="display:none">Classificar caso <svg width="16" height="16"><use href="#i-arrow"></use></svg></button>
          <button id="wreset" class="btn btn-line" type="button">Recomeçar</button>
        </div>
        <div class="step-msg" id="stepmsg">Responda a todas as perguntas desta etapa para continuar.</div>
      </div>
    </div>

    <div id="prio-result" class="result" role="region" aria-live="polite" tabindex="-1"></div>
  </section>
</div>

{% raw %}
<script>
(function(){
  var form = document.getElementById('prio');
  if(!form) return;
  var wiz = document.getElementById('prio-wiz');
  var steps = wiz.querySelectorAll('.wiz-step');
  var titles = ['Valor público','Viabilidade','Risco'];
  var groups = [['v1','v2','v3'],['f1','f2','f3'],['r1','r2','r3','r4']];
  var wpos = document.getElementById('wpos'), wtitle = document.getElementById('wtitle');
  var wfill = document.getElementById('wfill'), wdots = document.getElementById('wdots');
  var wprev = document.getElementById('wprev'), wnext = document.getElementById('wnext'), wgo = document.getElementById('wgo');
  var wreset = document.getElementById('wreset'), stepmsg = document.getElementById('stepmsg');
  var result = document.getElementById('prio-result'), nome = document.getElementById('caso-nome');
  var cur = 0;

  function val(n){ var el = form.querySelector('input[name="'+n+'"]:checked'); return el ? el.value : null; }
  function num(n){ return parseInt(val(n),10) || 0; }
  function stepDone(i){ return groups[i].every(function(n){ return val(n); }); }

  function renderDots(){
    wdots.innerHTML = '';
    titles.forEach(function(t,i){
      var b = document.createElement('button');
      b.type = 'button'; b.textContent = String(i+1).padStart(2,'0');
      b.setAttribute('aria-label','Ir para etapa '+(i+1)+': '+t);
      if(i === cur) b.className = 'on';
      else if(stepDone(i)) b.className = 'done';
      b.addEventListener('click', function(){ go(i); });
      wdots.appendChild(b);
    });
  }

  function paint(){
    steps.forEach(function(s,i){ s.classList.toggle('on', i === cur); });
    wpos.textContent = 'Etapa '+(cur+1)+' de '+steps.length;
    wtitle.textContent = titles[cur];
    wfill.style.width = ((cur+1)/steps.length*100)+'%';
    wprev.disabled = cur === 0;
    var last = cur === steps.length - 1;
    wnext.style.display = last ? 'none' : '';
    wgo.style.display = last ? '' : 'none';
    renderDots();
    stepmsg.classList.remove('show');
  }

  function go(i){
    if(i > cur && !stepDone(cur)){ stepmsg.classList.add('show'); return; }
    cur = Math.max(0, Math.min(steps.length-1, i));
    paint();
    wiz.scrollIntoView({behavior:'smooth', block:'start'});
  }

  wnext.addEventListener('click', function(){ go(cur+1); });
  wprev.addEventListener('click', function(){ go(cur-1); });

  var outcomes = {
    comece: { sev:'val', icon:'i-gauge', label:'Comece agora',
      title:'Bom candidato para começar já',
      desc:'Alto valor, boa viabilidade e baixo risco. É um caso promissor para iniciar com um piloto bem medido.',
      passos:['Defina indicadores e linha de base antes de iniciar.','Rode um piloto com o dono do processo responsável.','Meça o resultado e decida sobre escalar.'] },
    experimente: { sev:'via', icon:'i-scale', label:'Experimente com controles',
      title:'Promissor, mas com ambiente controlado',
      desc:'O caso vale a pena, mas pede ambiente de teste e critérios claros de avaliação antes de valer para valer.',
      passos:['Comece em ambiente de teste, com escopo reduzido.','Defina critérios de sucesso e supervisão humana.','Reavalie com base nos resultados do piloto.'] },
    fundacoes: { sev:'ris', icon:'i-tools', label:'Prepare as fundações',
      title:'Prepare a base antes de prototipar',
      desc:'A oportunidade depende de dados, processos, integrações ou competências ainda indisponíveis.',
      passos:['Mapeie e melhore a disponibilidade e a qualidade dos dados.','Resolva integrações e desenvolva as competências necessárias.','Reavalie a viabilidade antes de prototipar.'] },
    reforcada: { sev:'alr', icon:'i-shield', label:'Avaliação reforçada',
      title:'Alto impacto — avaliação reforçada',
      desc:'Há impacto significativo sobre pessoas, direitos ou serviços essenciais. Antes de prosseguir, é preciso avaliação reforçada.',
      passos:['Faça avaliação de impacto e avaliação jurídica.','Garanta supervisão humana, explicabilidade e canal de contestação.','Estabeleça monitoramento contínuo e plano de descontinuação.'] }
  };

  function nivel(s){ return s >= 4 ? 'alto' : (s <= 2 ? 'baixo' : 'médio'); }

  function classify(){
    var valor = num('v1') + num('v2') + num('v3');
    var viab = num('f1') + num('f2') + num('f3');
    var r1 = val('r1'), r2 = val('r2'), r3 = val('r3'), r4 = val('r4');
    var riscoAlto = (r1 === 'sim') || (r3 === 'grave') || (r2 === 'sensiveis' && r4 === 'nao');
    var riscoBaixo = (r1 === 'nao') && (r3 === 'baixa') && (r2 === 'nao') && (r4 === 'sim');
    var riscoNivel = riscoAlto ? 'alto' : (riscoBaixo ? 'baixo' : 'médio');
    var key;
    if(riscoAlto) key = 'reforcada';
    else if(valor >= 4 && viab >= 4 && riscoBaixo) key = 'comece';
    else if(viab <= 2) key = 'fundacoes';
    else key = 'experimente';
    return { key:key, valorN:nivel(valor), viabN:nivel(viab), riscoN:riscoNivel };
  }

  function esc(s){ return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;'); }
  function li(arr){ return arr.map(function(x){ return '<li>'+esc(x)+'</li>'; }).join(''); }
  function riscoColor(n){ return n === 'alto' ? 'alr' : (n === 'baixo' ? 'val' : 'ris'); }

  wgo.addEventListener('click', function(){
    if(!stepDone(cur)){ stepmsg.classList.add('show'); return; }
    stepmsg.classList.remove('show');
    var c = classify(); var o = outcomes[c.key];
    var nomeTxt = (nome.value || '').trim();
    var chips =
      '<div style="display:flex;gap:8px;flex-wrap:wrap;margin-bottom:16px">'+
        '<span class="badge val"><i></i>Valor · '+c.valorN+'</span>'+
        '<span class="badge via"><i></i>Viabilidade · '+c.viabN+'</span>'+
        '<span class="badge '+riscoColor(c.riscoN)+'"><i></i>Risco · '+c.riscoN+'</span>'+
      '</div>';
    var html = chips +
      '<div class="rhead">'+
        '<div class="ric"><svg><use href="#'+o.icon+'"></use></svg></div>'+
        '<div>'+
          '<span class="badge '+o.sev+'"><i></i>'+esc(o.label)+'</span>'+
          '<h3>'+(nomeTxt ? esc(nomeTxt)+' — ' : '')+esc(o.title)+'</h3>'+
          '<p class="rdesc">'+esc(o.desc)+'</p>'+
        '</div>'+
      '</div>'+
      '<div class="rk">Próximos passos</div><ul class="klist">'+li(o.passos)+'</ul>'+
      '<div class="actions no-print" style="margin-top:22px"><button class="btn btn-line" type="button" onclick="window.print()">Imprimir / salvar PDF</button></div>'+
      '<div class="note" style="margin-top:16px">Classificação orientativa — não substitui análise técnica, jurídica ou institucional.</div>';
    result.className = 'result show sev-'+o.sev;
    result.innerHTML = html;
    result.scrollIntoView({behavior:'smooth', block:'start'});
    result.focus({preventScroll:true});
  });

  wreset.addEventListener('click', function(){
    form.reset(); nome.value = '';
    result.className = 'result'; result.innerHTML = '';
    cur = 0; paint();
    wiz.scrollIntoView({behavior:'smooth', block:'start'});
  });

  // avança dot indicator quando o usuário marca respostas
  form.addEventListener('change', function(){ renderDots(); stepmsg.classList.remove('show'); });

  paint();
})();
</script>
{% endraw %}
