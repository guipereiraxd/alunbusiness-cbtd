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

    <!--
      HubSpot: cole o Portal ID e o Form ID (e a região, se não for na1) nas constantes
      HS_PORTAL / HS_FORM / HS_REGION no script no fim desta página. Enquanto forem
      placeholders, mostramos o formulário de exemplo abaixo como fallback.
    -->
    <div id="hs-form" aria-live="polite"></div>
    <form id="fallback-form" class="form rv" onsubmit="return false" aria-label="Formulário de contato">
      <label><b>Nome</b><input name="nome" type="text" placeholder="Seu nome"></label>
      <label><b>Organização</b><input name="organizacao" type="text" placeholder="Órgão ou empresa pública"></label>
      <label><b>E-mail institucional</b><input name="email" type="email" placeholder="nome@orgao.gov.br"></label>
      <label><b>Como podemos ajudar?</b><textarea name="mensagem" placeholder="Descreva seu desafio ou interesse"></textarea></label>
      <button class="btn btn-primary" type="submit">Enviar <svg width="16" height="16"><use href="#i-arrow"></use></svg></button>
    </form>
    <div id="form-note" class="note"><b>Formulário do HubSpot ainda não configurado.</b> Assim que você informar o Portal ID e o Form ID, o lead passa a cair direto no CRM. Ao usar o formulário do HubSpot, ele pode registrar um cookie próprio — coberto na <a href="{{ '/setorpublico/privacidade/' | relative_url }}">política de privacidade</a>.</div>
  </section>
</div>

{% raw %}
<script>
(function(){
  var HS_REGION = 'na1';         // região do HubSpot (na1, eu1…)
  var HS_PORTAL = 'PORTAL_ID';   // ← cole aqui o Portal ID do HubSpot
  var HS_FORM   = 'FORM_ID';     // ← cole aqui o Form ID do HubSpot
  if(HS_PORTAL === 'PORTAL_ID' || HS_FORM === 'FORM_ID') return; // ainda não configurado → mantém o fallback
  var s = document.createElement('script');
  s.src = 'https://js.hsforms.net/forms/embed/v2.js'; s.async = true;
  s.onload = function(){
    if(!window.hbspt) return;
    window.hbspt.forms.create({ region:HS_REGION, portalId:HS_PORTAL, formId:HS_FORM, target:'#hs-form' });
    var fb=document.getElementById('fallback-form'); if(fb) fb.style.display='none';
    var nt=document.getElementById('form-note'); if(nt) nt.style.display='none';
  };
  document.body.appendChild(s);
})();
</script>
{% endraw %}
