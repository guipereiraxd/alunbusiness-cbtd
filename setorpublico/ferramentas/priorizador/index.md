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
    <div class="note"><b>Leitura orientativa:</b> a classificação é uma orientação inicial e <b>não substitui</b> análise técnica, jurídica ou institucional.</div>

    <label style="display:block;margin-top:26px">
      <span style="font-family:var(--disp);font-weight:600;font-size:14px;color:var(--tx);display:block;margin-bottom:8px">Nome do caso <span style="color:var(--tx3);font-weight:400">(opcional)</span></span>
      <input id="caso-nome" type="text" placeholder="Ex.: triagem de solicitações do cidadão" style="background:var(--panel);border:1px solid var(--line2);border-radius:8px;color:var(--tx);font-family:var(--sans);font-size:14px;padding:11px 13px;width:100%;max-width:440px">
    </label>

    <form id="prio" class="quiz">
      <div class="sk" style="margin-top:30px">Valor público</div>
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

      <div class="sk" style="margin-top:30px">Viabilidade</div>
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

      <div class="sk" style="margin-top:30px">Risco</div>
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
    </form>

    <div class="actions" style="margin-top:24px">
      <button id="prio-go" class="btn btn-primary" type="button">Classificar caso <svg width="16" height="16"><use href="#i-arrow"></use></svg></button>
      <button id="prio-reset" class="btn btn-line" type="button">Recomeçar</button>
    </div>
    <div id="prio-msg" class="quiz-msg">Responda a todas as perguntas para classificar o caso.</div>

    <div id="prio-result" class="result" role="region" aria-live="polite" tabindex="-1"></div>
  </section>
</div>

{% raw %}
<script>
(function(){
  var form = document.getElementById('prio');
  if(!form) return;
  var go = document.getElementById('prio-go');
  var reset = document.getElementById('prio-reset');
  var msg = document.getElementById('prio-msg');
  var result = document.getElementById('prio-result');
  var nome = document.getElementById('caso-nome');
  var names = ['v1','v2','v3','f1','f2','f3','r1','r2','r3','r4'];

  function val(n){ var el = form.querySelector('input[name="'+n+'"]:checked'); return el ? el.value : null; }
  function num(n){ return parseInt(val(n),10) || 0; }

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

  go.addEventListener('click', function(){
    var missing = names.filter(function(n){ return !val(n); });
    if(missing.length){
      msg.classList.add('show');
      form.querySelector('input[name="'+missing[0]+'"]').closest('.quiz-q').scrollIntoView({behavior:'smooth', block:'center'});
      return;
    }
    msg.classList.remove('show');
    var c = classify();
    var o = outcomes[c.key];
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
      '<div class="note" style="margin-top:20px">Classificação orientativa — não substitui análise técnica, jurídica ou institucional.</div>';
    result.className = 'result show sev-'+o.sev;
    result.innerHTML = html;
    result.scrollIntoView({behavior:'smooth', block:'start'});
    result.focus({preventScroll:true});
  });

  reset.addEventListener('click', function(){
    form.reset(); nome.value = '';
    result.className = 'result'; result.innerHTML = '';
    msg.classList.remove('show');
    form.scrollIntoView({behavior:'smooth', block:'start'});
  });
})();
</script>
{% endraw %}
