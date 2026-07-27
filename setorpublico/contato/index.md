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

    <div id="hs-form" aria-live="polite" aria-busy="true" style="margin-top:26px">
      <div id="hs-skel" class="skel" aria-hidden="true">
        <div class="skel-line sm"></div><div class="skel-box"></div>
        <div class="skel-line sm"></div><div class="skel-box"></div>
        <div class="skel-line sm"></div><div class="skel-box"></div>
        <div class="skel-line sm"></div><div class="skel-box" style="height:110px"></div>
        <div class="skel-box" style="width:180px;height:44px;margin-top:8px"></div>
      </div>
    </div>
    <div id="hs-fallback" class="empty-state" role="status" style="margin-top:20px">
      <div class="es-ic"><svg><use href="#i-mail"></use></svg></div>
      <p class="es-t">Formulário indisponível no momento</p>
      <p class="es-d">Escreva para <b>corporativo@alura.com.br</b> com sua organização, cargo e uma breve descrição do desafio — respondemos rapidamente.</p>
      <div class="es-actions">
        <a href="mailto:corporativo@alura.com.br?subject=Contato%20%E2%80%94%20IA%20no%20Setor%20P%C3%BAblico">Abrir e-mail</a>
      </div>
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
  var host = document.getElementById('hs-form');
  var skel = document.getElementById('hs-skel');
  var fbNote = document.getElementById('hs-fallback');

  function showFallback(){
    if(fbNote) fbNote.classList.add('show');
    if(skel && skel.parentNode) skel.parentNode.removeChild(skel);
    if(host) host.setAttribute('aria-busy','false');
  }
  function hideSkel(){
    if(skel && skel.parentNode) skel.parentNode.removeChild(skel);
    if(host) host.setAttribute('aria-busy','false');
  }

  var s = document.createElement('script');
  s.src = 'https://js.hsforms.net/forms/embed/v2.js'; s.async = true;
  s.onload = function(){
    if(!window.hbspt){ showFallback(); return; }
    try{
      window.hbspt.forms.create({
        region:HS_REGION, portalId:HS_PORTAL, formId:HS_FORM, target:'#hs-form',
        onFormReady: hideSkel
      });
      // fallback caso onFormReady não dispare
      setTimeout(function(){
        var hasForm = host && (host.querySelector('form, iframe, .hs-form-frame, .hbspt-form'));
        if(hasForm) hideSkel();
      }, 3500);
    }catch(e){ showFallback(); }
  };
  s.onerror = showFallback;
  document.body.appendChild(s);
  setTimeout(function(){
    var hasForm = host && (host.querySelector('form, iframe, .hs-form-frame, .hbspt-form'));
    if(!hasForm) showFallback();
  }, 6000);
})();
</script>
{% endraw %}
