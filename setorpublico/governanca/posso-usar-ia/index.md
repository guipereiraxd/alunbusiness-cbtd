---
title: "Posso usar IA para isso?"
---

<div class="wrap">
  <div class="page-head">
    <div class="crumb"><a href="{{ '/setorpublico/' | relative_url }}">Início</a> / <a href="{{ '/setorpublico/governanca/' | relative_url }}">Governança</a> / Posso usar IA para isso?</div>
    <h1>Posso usar IA para isso?</h1>
    <p class="lede">Responda a dez perguntas sobre dados, sigilo, impacto e supervisão. Ao final, você recebe uma orientação sobre como (e se) prosseguir — com os controles recomendados.</p>
  </div>

  <section class="blk" style="border-bottom:0;padding-top:32px;padding-bottom:60px">
    <div class="note no-print"><b>Leitura orientativa:</b> o resultado é uma orientação inicial e <b>não substitui</b> análise jurídica, técnica ou institucional. Na dúvida, trate como o cenário mais protetivo.</div>

    <div id="quiz-wiz" class="wiz no-print">
      <div class="wiz-head">
        <div>
          <div class="wpos" id="wpos">Etapa 1 de 5</div>
          <div class="wtitle" id="wtitle">Autorização</div>
        </div>
        <div class="wiz-dots" id="wdots" role="tablist" aria-label="Etapas do quiz"></div>
      </div>
      <div class="wiz-bar"><div class="wfill" id="wfill" style="width:20%"></div></div>

      <form id="quiz">
        <div class="wiz-step on" data-step="0">
          <p class="wsub">Antes de tudo — o uso está previsto pela organização?</p>
          <div class="quiz">
            <div class="quiz-q">
              <div class="qt">1. O uso está autorizado pela sua organização?</div>
              <div class="quiz-opts" role="radiogroup">
                <label class="quiz-opt"><input type="radio" name="autorizado" value="sim"><span>Sim</span></label>
                <label class="quiz-opt"><input type="radio" name="autorizado" value="nao"><span>Não</span></label>
                <label class="quiz-opt"><input type="radio" name="autorizado" value="naosei"><span>Não sei</span></label>
              </div>
            </div>
          </div>
        </div>

        <div class="wiz-step" data-step="1">
          <p class="wsub">Que tipo de informação está envolvida? Isso determina onde o conteúdo pode ou não ser processado.</p>
          <div class="quiz">
            <div class="quiz-q">
              <div class="qt">2. O documento ou dado é sigiloso ou classificado?</div>
              <div class="quiz-opts" role="radiogroup">
                <label class="quiz-opt"><input type="radio" name="sigiloso" value="sim"><span>Sim</span></label>
                <label class="quiz-opt"><input type="radio" name="sigiloso" value="nao"><span>Não</span></label>
                <label class="quiz-opt"><input type="radio" name="sigiloso" value="naosei"><span>Não sei</span></label>
              </div>
            </div>
            <div class="quiz-q">
              <div class="qt">3. O conteúdo contém dados pessoais?</div>
              <div class="quiz-opts" role="radiogroup">
                <label class="quiz-opt"><input type="radio" name="pessoais" value="sim"><span>Sim</span></label>
                <label class="quiz-opt"><input type="radio" name="pessoais" value="nao"><span>Não</span></label>
                <label class="quiz-opt"><input type="radio" name="pessoais" value="naosei"><span>Não sei</span></label>
              </div>
            </div>
            <div class="quiz-q">
              <div class="qt">4. Há dados sensíveis (saúde, biometria, origem, opinião, etc.)?</div>
              <div class="quiz-opts" role="radiogroup">
                <label class="quiz-opt"><input type="radio" name="sensiveis" value="sim"><span>Sim</span></label>
                <label class="quiz-opt"><input type="radio" name="sensiveis" value="nao"><span>Não</span></label>
                <label class="quiz-opt"><input type="radio" name="sensiveis" value="naosei"><span>Não sei</span></label>
              </div>
            </div>
          </div>
        </div>

        <div class="wiz-step" data-step="2">
          <p class="wsub">A IA vai apoiar decisões que afetam pessoas?</p>
          <div class="quiz">
            <div class="quiz-q">
              <div class="qt">5. A IA vai influenciar uma decisão sobre pessoas (direitos, benefícios, seleção)?</div>
              <div class="quiz-opts" role="radiogroup">
                <label class="quiz-opt"><input type="radio" name="decisao" value="sim"><span>Sim</span></label>
                <label class="quiz-opt"><input type="radio" name="decisao" value="nao"><span>Não</span></label>
                <label class="quiz-opt"><input type="radio" name="decisao" value="naosei"><span>Não sei</span></label>
              </div>
            </div>
          </div>
        </div>

        <div class="wiz-step" data-step="3">
          <p class="wsub">Existe supervisão humana, explicabilidade e revisão antes da saída valer?</p>
          <div class="quiz">
            <div class="quiz-q">
              <div class="qt">6. Uma pessoa vai revisar o resultado antes de ele valer?</div>
              <div class="quiz-opts" role="radiogroup">
                <label class="quiz-opt"><input type="radio" name="revisao" value="sim"><span>Sim</span></label>
                <label class="quiz-opt"><input type="radio" name="revisao" value="nao"><span>Não</span></label>
                <label class="quiz-opt"><input type="radio" name="revisao" value="naosei"><span>Não sei</span></label>
              </div>
            </div>
            <div class="quiz-q">
              <div class="qt">7. A decisão pode ser explicada a quem for afetado?</div>
              <div class="quiz-opts" role="radiogroup">
                <label class="quiz-opt"><input type="radio" name="explicavel" value="sim"><span>Sim</span></label>
                <label class="quiz-opt"><input type="radio" name="explicavel" value="nao"><span>Não</span></label>
                <label class="quiz-opt"><input type="radio" name="explicavel" value="naosei"><span>Não sei</span></label>
              </div>
            </div>
            <div class="quiz-q">
              <div class="qt">8. A saída será publicada ou terá efeito externo?</div>
              <div class="quiz-opts" role="radiogroup">
                <label class="quiz-opt"><input type="radio" name="publicada" value="sim"><span>Sim</span></label>
                <label class="quiz-opt"><input type="radio" name="publicada" value="nao"><span>Não</span></label>
                <label class="quiz-opt"><input type="radio" name="publicada" value="naosei"><span>Não sei</span></label>
              </div>
            </div>
          </div>
        </div>

        <div class="wiz-step" data-step="4">
          <p class="wsub">Duas últimas perguntas sobre ferramenta e alternativas.</p>
          <div class="quiz">
            <div class="quiz-q">
              <div class="qt">9. O fornecedor pode usar seus dados para treinar o modelo?</div>
              <div class="quiz-opts" role="radiogroup">
                <label class="quiz-opt"><input type="radio" name="treinamento" value="sim"><span>Sim</span></label>
                <label class="quiz-opt"><input type="radio" name="treinamento" value="nao"><span>Não</span></label>
                <label class="quiz-opt"><input type="radio" name="treinamento" value="naosei"><span>Não sei</span></label>
              </div>
            </div>
            <div class="quiz-q">
              <div class="qt">10. Existe alternativa sem IA que resolve igual?</div>
              <div class="quiz-opts" role="radiogroup">
                <label class="quiz-opt"><input type="radio" name="alternativa" value="sim"><span>Sim</span></label>
                <label class="quiz-opt"><input type="radio" name="alternativa" value="nao"><span>Não</span></label>
                <label class="quiz-opt"><input type="radio" name="alternativa" value="naosei"><span>Não sei</span></label>
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
          <button id="wgo" class="btn btn-primary" type="button" style="display:none">Ver resultado <svg width="16" height="16"><use href="#i-arrow"></use></svg></button>
          <button id="wreset" class="btn btn-line" type="button">Recomeçar</button>
        </div>
        <div class="step-msg" id="stepmsg">Responda a todas as perguntas desta etapa para continuar.</div>
      </div>
    </div>

    <div id="result" class="result" role="region" aria-live="polite" tabindex="-1"></div>
  </section>
</div>

{% raw %}
<script>
(function(){
  var form = document.getElementById('quiz');
  if(!form) return;
  var wiz = document.getElementById('quiz-wiz');
  var steps = wiz.querySelectorAll('.wiz-step');
  var titles = ['Autorização','Confidencialidade e dados','Impacto sobre pessoas','Supervisão e efeito','Ferramenta e alternativa'];
  var groups = [['autorizado'],['sigiloso','pessoais','sensiveis'],['decisao'],['revisao','explicavel','publicada'],['treinamento','alternativa']];
  var wpos = document.getElementById('wpos'), wtitle = document.getElementById('wtitle');
  var wfill = document.getElementById('wfill'), wdots = document.getElementById('wdots');
  var wprev = document.getElementById('wprev'), wnext = document.getElementById('wnext'), wgo = document.getElementById('wgo');
  var wreset = document.getElementById('wreset'), stepmsg = document.getElementById('stepmsg');
  var result = document.getElementById('result');
  var cur = 0;

  function val(n){ var el = form.querySelector('input[name="'+n+'"]:checked'); return el ? el.value : null; }
  function risk(n, riskAns){ var v = val(n); return v === riskAns || v === 'naosei'; }
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
    naoAutorizado: { sev:'alr', icon:'i-shield', label:'Antes de tudo, autorização',
      title:'Confirme a autorização antes de prosseguir',
      desc:'O uso ainda não está autorizado (ou você não tem certeza). Sem isso, nenhum uso deve começar.',
      controls:['Consulte a política de IA do órgão e o gestor responsável.','Registre a finalidade e o caso de uso pretendido.','Obtenha autorização formal antes de qualquer teste com dados reais.'] },
    naoRecomendado: { sev:'alr', icon:'i-shield', label:'Uso não recomendado',
      title:'Redesenhe antes de usar',
      desc:'A IA influenciaria uma decisão sobre pessoas sem revisão humana e sem poder ser explicada. Essa combinação não é recomendada.',
      controls:['Inclua uma pessoa responsável pela decisão final.','Garanta explicabilidade e trilha de auditoria.','Reduza o escopo para apoio à decisão, não decisão automática.'] },
    juridico: { sev:'ris', icon:'i-scale', label:'Avaliação jurídica',
      title:'Precisa de avaliação jurídica e de proteção de dados',
      desc:'Há dados sigilosos ou sensíveis envolvidos. Antes de usar, é preciso avaliação jurídica e de proteção de dados.',
      controls:['Acione o jurídico e o encarregado de dados (DPO).','Verifique a base legal e a finalidade (LGPD).','Não use ferramentas abertas com esse conteúdo.'] },
    impacto: { sev:'ris', icon:'i-gauge', label:'Avaliação de impacto',
      title:'Precisa de avaliação de impacto',
      desc:'A IA influencia uma decisão sobre pessoas (alto impacto). Faça uma avaliação de impacto antes de operar.',
      controls:['Documente propósito, dados e efeitos sobre direitos.','Defina supervisão humana e canal de contestação.','Estabeleça monitoramento contínuo do desempenho.'] },
    institucional: { sev:'via', icon:'i-inst', label:'Somente em ambiente institucional',
      title:'Permitido apenas em ambiente institucional',
      desc:'Há dados pessoais ou risco de uso dos dados para treinamento. Use apenas em ambiente aprovado, não em ferramentas públicas.',
      controls:['Use soluções contratadas ou homologadas pelo órgão.','Desative o uso dos dados para treinamento.','Minimize e anonimize os dados sempre que possível.'] },
    cuidados: { sev:'val', icon:'i-info', label:'Permitido com cuidados básicos',
      title:'Permitido com cuidados básicos',
      desc:'O uso parece de baixo risco. Ainda assim, mantenha os cuidados básicos de uso responsável.',
      controls:['Revise a saída antes de usar.','Não insira dados que não deveriam ser compartilhados.','Registre que houve apoio de IA quando fizer sentido.'] }
  };

  function decide(){
    var autorizadoOK = val('autorizado') === 'sim';
    var sigiloso = risk('sigiloso','sim');
    var sensiveis = risk('sensiveis','sim');
    var pessoais = risk('pessoais','sim');
    var decisao = risk('decisao','sim');
    var semRevisao = risk('revisao','nao');
    var naoExplicavel = risk('explicavel','nao');
    var treinamento = risk('treinamento','sim');
    if(!autorizadoOK) return 'naoAutorizado';
    if(decisao && semRevisao && naoExplicavel) return 'naoRecomendado';
    if(sigiloso || sensiveis) return 'juridico';
    if(decisao) return 'impacto';
    if(pessoais || treinamento) return 'institucional';
    return 'cuidados';
  }

  function cautions(){
    var out = [];
    if(risk('revisao','nao')) out.push('Estabeleça revisão humana antes de o resultado valer.');
    if(risk('explicavel','nao')) out.push('Garanta que a decisão possa ser explicada a quem for afetado.');
    if(risk('publicada','sim')) out.push('Revise a saída antes de publicar — verifique fontes, dados e vieses.');
    if(risk('treinamento','sim')) out.push('Confirme se o fornecedor não usa seus dados para treinar o modelo.');
    if(val('alternativa') === 'sim') out.push('Existe alternativa sem IA — avalie se ela não é mais simples ou segura.');
    return out;
  }

  function esc(s){ return s.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;'); }
  function li(arr){ return arr.map(function(x){ return '<li>'+esc(x)+'</li>'; }).join(''); }

  wgo.addEventListener('click', function(){
    if(!stepDone(cur)){ stepmsg.classList.add('show'); return; }
    stepmsg.classList.remove('show');
    var o = outcomes[decide()];
    var extra = cautions();
    var html =
      '<div class="rhead">'+
        '<div class="ric"><svg><use href="#'+o.icon+'"></use></svg></div>'+
        '<div>'+
          '<span class="badge '+o.sev+'"><i></i>'+esc(o.label)+'</span>'+
          '<h3>'+esc(o.title)+'</h3>'+
          '<p class="rdesc">'+esc(o.desc)+'</p>'+
        '</div>'+
      '</div>'+
      '<div class="rk">Controles recomendados</div><ul class="klist">'+li(o.controls)+'</ul>'+
      (extra.length ? '<div class="rk">Cuidados adicionais</div><ul class="klist">'+li(extra)+'</ul>' : '')+
      '<div class="actions no-print" style="margin-top:22px"><button class="btn btn-line" type="button" onclick="window.print()">Imprimir / salvar PDF</button></div>'+
      '<div class="note" style="margin-top:16px">Resultado orientativo — não substitui análise jurídica, técnica ou institucional.</div>';
    result.className = 'result show sev-'+o.sev;
    result.innerHTML = html;
    result.scrollIntoView({behavior:'smooth', block:'start'});
    result.focus({preventScroll:true});
  });

  wreset.addEventListener('click', function(){
    form.reset();
    result.className = 'result'; result.innerHTML = '';
    cur = 0; paint();
    wiz.scrollIntoView({behavior:'smooth', block:'start'});
  });

  form.addEventListener('change', function(){ renderDots(); stepmsg.classList.remove('show'); });

  paint();
})();
</script>
{% endraw %}
