---
title: "Governança"
---

<div class="wrap">
  <div class="page-head">
    <div class="crumb"><a href="{{ '/setorpublico/' | relative_url }}">Início</a> / Governança</div>
    <h1>Governança e IA responsável</h1>
    <p class="lede">Governar IA no setor público é responder cinco perguntas ao longo do ciclo de vida do sistema: <b>enquadrar</b>, <b>avaliar</b>, <b>operar</b>, <b>monitorar</b> e, quando necessário, <b>encerrar</b>. Cada fase reúne os componentes que a sustentam.</p>
  </div>

  <section class="blk" style="border-bottom:0;padding-top:40px">
    <div class="toolbox rv">
      <div class="ic"><svg><use href="#i-shield"></use></svg></div>
      <div class="bd"><h3>Posso usar IA para isso?</h3><p>Responda a dez perguntas sobre dados, sigilo, impacto e supervisão, e receba uma orientação: uso permitido com cuidados, apenas em ambiente institucional, necessidade de avaliação jurídica ou de impacto, uso não recomendado ou dependente de autorização.</p></div>
      <a class="btn btn-primary" href="{{ '/setorpublico/governanca/posso-usar-ia/' | relative_url }}">Abrir ferramenta <svg width="16" height="16"><use href="#i-arrow"></use></svg></a>
    </div>

    <div class="sk" style="margin-top:44px">Modelo de governança</div>
    <h2>Ciclo de vida da IA</h2>
    <p class="lead">Quinze componentes organizados em cinco fases. Clique numa fase para ver o que cada componente cobre — o que produzir, quem responde e quando ele entra em cena.</p>

    <div class="gov-cycle no-print" id="gov-cycle">
      <div class="gov-track" role="tablist" aria-label="Fases do ciclo de governança">
        <button class="gov-phase on" data-phase="enquadrar" role="tab" aria-selected="true">
          <div class="gp-num">Fase 01</div><div class="gp-name">Enquadrar</div>
          <div class="gp-hint">Antes de começar: regras, papéis, risco.</div>
        </button>
        <button class="gov-phase" data-phase="avaliar" role="tab" aria-selected="false">
          <div class="gp-num">Fase 02</div><div class="gp-name">Avaliar</div>
          <div class="gp-hint">Antes de operar: impacto e proteção.</div>
        </button>
        <button class="gov-phase" data-phase="operar" role="tab" aria-selected="false">
          <div class="gp-num">Fase 03</div><div class="gp-name">Operar</div>
          <div class="gp-hint">Durante o uso: supervisão e transparência.</div>
        </button>
        <button class="gov-phase" data-phase="monitorar" role="tab" aria-selected="false">
          <div class="gp-num">Fase 04</div><div class="gp-name">Monitorar</div>
          <div class="gp-hint">Ao longo do tempo: desvios e resposta.</div>
        </button>
        <button class="gov-phase" data-phase="encerrar" role="tab" aria-selected="false">
          <div class="gp-num">Fase 05</div><div class="gp-name">Auditar & encerrar</div>
          <div class="gp-hint">Verificar, corrigir, desligar com segurança.</div>
        </button>
      </div>
      <div class="gov-detail" id="gov-detail" aria-live="polite"></div>
    </div>

    <details class="no-print" style="margin-top:22px">
      <summary style="cursor:pointer;font-family:var(--mono);font-size:11px;letter-spacing:.14em;text-transform:uppercase;color:var(--brand-p)">Ver lista completa dos 15 componentes</summary>
      <ol class="numlist" style="margin-top:14px">
        <li><b>Política institucional</b> — princípios, escopo e regras de uso de IA no órgão, aprovados pela liderança.</li>
        <li><b>Inventário de sistemas</b> — registro de toda IA em uso ou desenvolvimento, com finalidade e risco.</li>
        <li><b>Papéis e responsabilidades</b> — quem decide, opera, revisa e responde por cada sistema.</li>
        <li><b>Classificação de riscos</b> — enquadrar cada caso por nível de impacto, com práticas proporcionais.</li>
        <li><b>Avaliação de impacto</b> — analisar efeitos sobre direitos, privacidade e serviços antes de operar.</li>
        <li><b>Supervisão humana</b> — garantir que uma pessoa revise e possa reverter as decisões relevantes.</li>
        <li><b>Proteção de dados</b> — base legal, minimização e segurança dos dados, à luz da LGPD.</li>
        <li><b>Segurança</b> — controles técnicos contra acesso indevido, manipulação e vazamento.</li>
        <li><b>Documentação</b> — registrar dados, modelo, decisões e limitações de cada sistema.</li>
        <li><b>Transparência</b> — informar quando há IA e explicar como decide, em linguagem acessível.</li>
        <li><b>Contestação</b> — canal para a pessoa afetada questionar e pedir revisão.</li>
        <li><b>Monitoramento</b> — acompanhar desempenho, erros e desvios ao longo do tempo.</li>
        <li><b>Gestão de incidentes</b> — procedimento para detectar, responder e corrigir falhas.</li>
        <li><b>Auditoria</b> — verificação independente de conformidade e de resultados.</li>
        <li><b>Encerramento da solução</b> — plano para descontinuar com segurança quando necessário.</li>
      </ol>
    </details>

    <div class="sk" style="margin-top:44px">Referências internacionais</div>
    <h2>O que dizem as diretrizes recentes</h2>
    <p class="lead">A governança de IA no setor público converge em torno de poucos princípios. O Memorando M‑25‑21 da Casa Branca (abril de 2025), sobre o uso federal de IA nos EUA, organiza-os em três prioridades. <a href="{{ '/setorpublico/observatorio/m-25-21/' | relative_url }}">Leia a análise completa →</a></p>
    <div class="cards c3 rv">
      <div class="card"><div class="card-ic"><svg><use href="#i-gear"></use></svg></div><h3>Inovação</h3><p>Remover exigências burocráticas que inibem a adoção responsável e reaproveitar dados, modelos e código entre órgãos, evitando gasto duplicado.</p></div>
      <div class="card"><div class="card-ic"><svg><use href="#i-shield"></use></svg></div><h3>Governança</h3><p>Governança como facilitadora de inovação segura: cada agência nomeia um <b>Chief AI Officer</b>, e a aceitação de risco é delegada a responsáveis, com salvaguardas.</p></div>
      <div class="card"><div class="card-ic"><svg><use href="#i-hands"></use></svg></div><h3>Confiança pública</h3><p>A inovação não pode ocorrer às custas de direitos civis, liberdades ou privacidade. Foco no valor ao contribuinte.</p></div>
    </div>
    <div class="note" style="margin-top:18px"><b>IA de alto impacto:</b> práticas de gestão de risco proporcionais ao uso; se os riscos não puderem ser mitigados ou o sistema não performar adequadamente, o uso deve ser <b>interrompido</b>. No Brasil, a <a href="{{ '/setorpublico/casos/alice-cgu/' | relative_url }}">Comissão Alice</a> antecipou essa lógica de núcleo de governança.</div>

    <div class="note"><b>Nota:</b> a ferramenta “Posso usar IA para isso?” indicará sempre que o resultado é <b>orientativo</b> e não substitui análise jurídica, técnica ou institucional.</div>
  </section>
</div>

{% raw %}
<script>
(function(){
  var root = document.getElementById('gov-cycle');
  if(!root) return;
  var detail = document.getElementById('gov-detail');
  var phases = {
    enquadrar: {
      title: 'Enquadrar — antes de começar',
      sk: 'Fase 01 · Enquadrar',
      purpose: 'Estabelece o que a organização permite, quem responde e como o risco será proporcional ao impacto. Sem esse alicerce, tudo o mais fica solto.',
      comps: [
        { n:'01', t:'Política institucional', d:'Princípios, escopo e regras de uso de IA no órgão, aprovados pela liderança.', quem:'Alta liderança + jurídico', quando:'Antes do primeiro uso' },
        { n:'03', t:'Papéis e responsabilidades', d:'Quem decide, opera, revisa e responde por cada sistema.', quem:'Chief AI Officer / gestor de área', quando:'Ao aprovar cada caso' },
        { n:'04', t:'Classificação de riscos', d:'Enquadrar cada caso por nível de impacto, com práticas proporcionais.', quem:'Comitê de IA', quando:'Antes da avaliação de impacto' }
      ]
    },
    avaliar: {
      title: 'Avaliar — antes de operar',
      sk: 'Fase 02 · Avaliar',
      purpose: 'Antes de acionar o sistema, entenda efeitos sobre pessoas e dados. Sistemas de alto impacto exigem avaliação reforçada.',
      comps: [
        { n:'05', t:'Avaliação de impacto', d:'Analisar efeitos sobre direitos, privacidade e serviços antes de operar.', quem:'Área de negócio + jurídico + DPO', quando:'Antes da entrada em produção' },
        { n:'07', t:'Proteção de dados', d:'Base legal, minimização e segurança dos dados, à luz da LGPD.', quem:'DPO / Encarregado', quando:'Ao definir os dados usados' },
        { n:'02', t:'Inventário de sistemas', d:'Registro de toda IA em uso ou desenvolvimento, com finalidade e risco.', quem:'Comitê de IA', quando:'Sempre que um sistema é aprovado' }
      ]
    },
    operar: {
      title: 'Operar — durante o uso',
      sk: 'Fase 03 · Operar',
      purpose: 'Com o sistema em produção, garanta que uma pessoa possa intervir, que os controles funcionem e que quem usa entenda o que está acontecendo.',
      comps: [
        { n:'06', t:'Supervisão humana', d:'Garantir que uma pessoa revise e possa reverter as decisões relevantes.', quem:'Operador da área', quando:'A cada decisão relevante' },
        { n:'08', t:'Segurança', d:'Controles técnicos contra acesso indevido, manipulação e vazamento.', quem:'Segurança da informação', quando:'Contínuo' },
        { n:'09', t:'Documentação', d:'Registrar dados, modelo, decisões e limitações de cada sistema.', quem:'Time técnico + gestor', quando:'A cada versão do sistema' },
        { n:'10', t:'Transparência', d:'Informar quando há IA e explicar como decide, em linguagem acessível.', quem:'Comunicação + área responsável', quando:'Sempre que houver efeito externo' }
      ]
    },
    monitorar: {
      title: 'Monitorar — ao longo do tempo',
      sk: 'Fase 04 · Monitorar',
      purpose: 'Sistemas de IA se degradam com o tempo. Acompanhe desempenho, viés e desvios, e responda rápido quando algo falha.',
      comps: [
        { n:'12', t:'Monitoramento', d:'Acompanhar desempenho, erros e desvios ao longo do tempo.', quem:'Time técnico + gestor de área', quando:'Contínuo, com revisões periódicas' },
        { n:'11', t:'Contestação', d:'Canal para a pessoa afetada questionar e pedir revisão.', quem:'Ouvidoria / área responsável', quando:'Ao publicar decisão com efeito' },
        { n:'13', t:'Gestão de incidentes', d:'Procedimento para detectar, responder e corrigir falhas.', quem:'Comitê de IA + segurança', quando:'Sempre que houver desvio' }
      ]
    },
    encerrar: {
      title: 'Auditar e encerrar — verificação e saída',
      sk: 'Fase 05 · Auditar & encerrar',
      purpose: 'Verificação independente confirma que o sistema faz o que promete. Quando o risco não é mitigável, o uso deve ser interrompido.',
      comps: [
        { n:'14', t:'Auditoria', d:'Verificação independente de conformidade e de resultados.', quem:'Auditoria interna ou externa', quando:'Periódico e após incidentes' },
        { n:'15', t:'Encerramento da solução', d:'Plano para descontinuar com segurança quando necessário.', quem:'Comitê de IA + gestor de área', quando:'Ao decidir desligar' }
      ]
    }
  };
  var order = ['enquadrar','avaliar','operar','monitorar','encerrar'];

  function esc(s){ return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;'); }

  function render(key){
    var p = phases[key] || phases.enquadrar;
    var html =
      '<div class="gd-head"><div>'+
        '<div class="gd-sk">'+esc(p.sk)+'</div>'+
        '<h3 class="gd-title">'+esc(p.title)+'</h3>'+
      '</div></div>'+
      '<p class="gd-purpose">'+esc(p.purpose)+'</p>'+
      '<div class="gd-comps">'+ p.comps.map(function(c){
        return '<div class="gd-comp">'+
          '<div class="cn">Componente '+esc(c.n)+'</div>'+
          '<div class="ct">'+esc(c.t)+'</div>'+
          '<div class="cd">'+esc(c.d)+'</div>'+
          '<div class="cm"><span><b>Quem responde</b>'+esc(c.quem)+'</span><span><b>Quando</b>'+esc(c.quando)+'</span></div>'+
        '</div>';
      }).join('') +'</div>';
    detail.innerHTML = html;

    root.querySelectorAll('.gov-phase').forEach(function(b){
      var on = b.dataset.phase === key;
      b.classList.toggle('on', on);
      b.setAttribute('aria-selected', on ? 'true' : 'false');
    });
  }

  function fromHash(){
    var h = (location.hash || '').replace('#','');
    return order.indexOf(h) >= 0 ? h : 'enquadrar';
  }

  root.querySelectorAll('.gov-phase').forEach(function(b){
    b.addEventListener('click', function(){
      var k = b.dataset.phase;
      history.replaceState(null, '', '#'+k);
      render(k);
    });
  });
  window.addEventListener('hashchange', function(){ render(fromHash()); });

  render(fromHash());
})();
</script>
{% endraw %}
