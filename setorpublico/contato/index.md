---
title: "Contato"
description: "Fale com a Alun Business — estruture a jornada de IA da sua organização, do diagnóstico ao plano de ação, com estratégia, capacitação e governança."
---

<div class="wrap">
  <div class="page-head">
    <div class="crumb"><a href="{{ '/setorpublico/' | relative_url }}">Início</a> / Contato</div>
    <h1>Fale com a Alun Business</h1>
    <p class="lede">Explorar este portal é o começo. Transformar os desafios da sua instituição em uma agenda concreta de IA — com estratégia, capacitação, experimentação e governança — é o passo seguinte, e é onde a Alun Business pode caminhar junto.</p>
  </div>

  <section class="blk" style="border-bottom:0;padding-top:40px">
    <div class="sk">Como podemos ajudar</div>
    <h2>Próximos passos possíveis</h2>
    <div class="cards c4 rv">
      <div class="card"><h3>Solicitar conversa</h3><p>Uma conversa inicial para entender o momento da sua organização e as oportunidades mais próximas.</p></div>
      <div class="card"><h3>Receber diagnóstico</h3><p>Um diagnóstico de maturidade aprofundado, além da autoavaliação do portal, com recomendações priorizadas.</p></div>
      <div class="card"><h3>Workshop executivo</h3><p>Uma imersão com a liderança para alinhar visão, riscos e prioridades de IA.</p></div>
      <div class="card"><h3>Jornada de capacitação</h3><p>Trilhas de formação por perfil, do letramento à governança, desenhadas para a sua equipe.</p></div>
    </div>

    <div id="hs-form" aria-live="polite" style="margin-top:26px"></div>
    <div id="hs-fallback" class="note" style="display:none;margin-top:20px">
      <b>Não conseguiu enviar pelo formulário?</b> Escreva para <a href="mailto:corporativo@alura.com.br">corporativo@alura.com.br</a> com sua organização, cargo e uma breve descrição do desafio.
    </div>
    <div class="note" style="margin-top:20px;border-left-color:var(--tx3)">
      Ao enviar o formulário, você consente com o tratamento dos dados fornecidos pela Alun Business para retorno do contato. O formulário é hospedado pelo HubSpot, que pode registrar um cookie próprio — condições cobertas na <a href="{{ '/setorpublico/privacidade/' | relative_url }}">política de privacidade</a>.
    </div>
  </section>
</div>

{% raw %}
<script>
(function(){
  var HS_REGION = 'na1';
  var HS_PORTAL = '21748317';
  var HS_FORM   = '7e0b3525-e014-4fb7-9137-0822e2e47dbe';
  var fbNote = document.getElementById('hs-fallback');
  var loaded = false;
  var s = document.createElement('script');
  s.src = 'https://js.hsforms.net/forms/embed/v2.js'; s.async = true;
  s.onload = function(){
    if(!window.hbspt) return;
    try{
      window.hbspt.forms.create({ region:HS_REGION, portalId:HS_PORTAL, formId:HS_FORM, target:'#hs-form' });
      loaded = true;
    }catch(e){ if(fbNote) fbNote.style.display='block'; }
  };
  s.onerror = function(){ if(fbNote) fbNote.style.display='block'; };
  document.body.appendChild(s);
  // se em 6s não carregou nada dentro do #hs-form, mostra o fallback
  setTimeout(function(){
    var host = document.getElementById('hs-form');
    if(host && host.children.length === 0 && fbNote) fbNote.style.display='block';
  }, 6000);
})();
</script>
{% endraw %}
