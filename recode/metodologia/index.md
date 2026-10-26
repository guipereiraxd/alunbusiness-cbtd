---
title: "Metodologia"
description: "Como a Alun Business transforma o potencial da IA em performance organizacional: a tese, os oito componentes, os seis movimentos RECODE, a missão de negócio, os artefatos da consultoria e as quatro camadas de prova."
---

<style>
  /* ── a tese, em estados de organização ───────────────────────
     O slide de divulgação já narra a tese como passagem: uma coluna
     do que trava hoje, outra do que passa a ser possível. Melhor que
     prosa, porque o executivo reconhece a própria empresa numa das
     listas antes de ler qualquer conceito. */
  .od{display:grid;grid-template-columns:1fr 70px 1fr;align-items:stretch;margin-top:36px}
  @media(max-width:860px){ .od{grid-template-columns:1fr} }
  .od-c{position:relative;border-radius:18px;padding:28px 26px;overflow:hidden}
  .od-c .rot{display:flex;align-items:center;gap:9px;font-family:var(--mono);font-size:10.5px;
    letter-spacing:.12em;text-transform:uppercase;color:var(--tx-3);line-height:1.4}
  .od-c .rot::before{content:"";width:16px;height:2px;border-radius:2px;
    background:var(--linha-2);flex:none}
  .od-c ul{margin:16px 0 0;padding-left:19px;font-size:15px;color:var(--tx);line-height:1.85}
  .od-h{background:var(--papel);border:1px solid var(--linha)}
  .od-f{background:var(--exec);isolation:isolate;box-shadow:0 22px 56px rgba(10,31,68,.26)}
  .od-f::before{content:"";position:absolute;inset:0;z-index:-1;
    background:radial-gradient(420px 260px at 108% -24%, rgba(209,164,118,.2), transparent 62%),
               linear-gradient(170deg,var(--exec),var(--exec-2))}
  .od-f .rot::before{background:var(--grad-ouro-r)}
  .od-s{display:grid;place-items:center;gap:8px;color:var(--ouro);text-align:center}
  .od-s svg{width:26px;height:26px}
  .od-s span{font-family:var(--mono);font-size:9.5px;letter-spacing:.1em;text-transform:uppercase;
    color:var(--tx-3);writing-mode:vertical-rl}
  @media(max-width:860px){ .od-s{padding:14px 0;grid-auto-flow:column}
    .od-s svg{transform:rotate(90deg)} .od-s span{writing-mode:horizontal-tb} }

  /* ── os oito componentes, em registro de leitura ─────────────── */
  .comp8{display:grid;grid-template-columns:repeat(4,1fr);gap:12px;margin-top:32px}
  @media(max-width:980px){ .comp8{grid-template-columns:repeat(2,1fr)} }
  @media(max-width:560px){ .comp8{grid-template-columns:1fr} }
  .comp8 > div{background:var(--papel);border:1px solid var(--linha);border-radius:14px;
    padding:18px;border-top:3px solid var(--c)}
  .comp8 .cod{font-family:var(--mono);font-size:12px;color:var(--ctxt);letter-spacing:.07em}
  .comp8 b{display:block;font-family:var(--disp);font-weight:600;font-size:15px;color:var(--tinta);
    margin-top:8px;line-height:1.3}
  .comp8 span{display:block;font-size:13px;color:var(--tx-2);margin-top:7px;line-height:1.5}

  /* ── seis movimentos, com o que sai de cada um ───────────────── */
  .movs{display:grid;grid-template-columns:repeat(3,1fr);gap:14px;margin-top:36px}
  @media(max-width:980px){ .movs{grid-template-columns:repeat(2,1fr)} }
  @media(max-width:620px){ .movs{grid-template-columns:1fr} }
  .movs > div{position:relative;background:var(--papel);border:1px solid var(--linha);
    border-radius:16px;padding:24px 22px;overflow:hidden;
    transition:transform .22s var(--ease),box-shadow .22s var(--ease)}
  .movs > div:hover{transform:translateY(-3px);box-shadow:var(--elev-2)}
  .movs > div::before{content:"";position:absolute;top:0;left:0;right:0;height:3px;
    background:var(--c)}
  .movs .l{font-family:var(--disp);font-weight:800;font-size:38px;line-height:.9;
    color:var(--ctxt);letter-spacing:-.04em}
  .movs h3{font-size:18px;font-weight:600;margin-top:12px;letter-spacing:-.014em}
  .movs .sub{font-family:var(--mono);font-size:10px;letter-spacing:.11em;text-transform:uppercase;
    color:var(--tx-3);margin-top:5px}
  .movs p{font-size:14px;color:var(--tx-2);margin-top:12px;line-height:1.6}
  .movs ul{margin:14px 0 0;padding:13px 0 0 18px;font-size:13.5px;color:var(--tx-2);
    line-height:1.75;border-top:1px solid var(--linha)}

  /* ── critérios de prontidão da missão ────────────────────────── */
  .crit{display:grid;grid-template-columns:repeat(2,1fr);gap:12px;margin-top:32px}
  @media(max-width:760px){ .crit{grid-template-columns:1fr} }
  .crit > div{display:grid;grid-template-columns:22px 1fr;gap:13px;align-items:start;
    background:var(--canvas);border:1px solid var(--linha);border-radius:12px;padding:17px 19px}
  .crit .m{color:var(--ouro);font-size:15px;line-height:1.3}
  .crit b{display:block;font-size:15px;color:var(--tinta);font-weight:600;line-height:1.35}
  .crit span{display:block;font-size:13.5px;color:var(--tx-2);margin-top:5px;line-height:1.55}

  .estados{display:flex;flex-wrap:wrap;gap:7px;margin-top:26px}
  .estados code{font-family:var(--mono);font-size:11.5px;color:var(--tx-2);background:var(--painel);
    border:1px solid var(--linha-2);border-radius:999px;padding:6px 13px}

  /* ── artefatos ───────────────────────────────────────────────── */
  .artef{display:grid;gap:12px;margin-top:34px}
  .artef > div{display:grid;grid-template-columns:1fr 1.25fr;gap:26px;align-items:start;
    background:var(--papel);border:1px solid var(--linha);border-radius:16px;padding:23px 26px;
    transition:transform .2s var(--ease),box-shadow .2s var(--ease)}
  .artef > div:hover{transform:translateX(3px);box-shadow:var(--elev-2)}
  @media(max-width:820px){ .artef > div{grid-template-columns:1fr;gap:12px} }
  .artef .nm{font-family:var(--disp);font-weight:700;font-size:18px;color:var(--tinta);
    letter-spacing:-.018em;line-height:1.3}
  .artef .nm span{display:block;font-size:13.5px;color:var(--tx-2);font-weight:400;
    font-family:var(--sans);margin-top:7px;line-height:1.55;letter-spacing:0}
  .artef .dec{font-size:14.5px;color:var(--tx);line-height:1.62;padding-left:15px;
    border-left:2px solid var(--ouro-borda)}
  .artef .dec b{display:block;font-family:var(--mono);font-size:10px;letter-spacing:.11em;
    text-transform:uppercase;color:var(--tx-3);font-weight:400;margin-bottom:6px}

  /* ── a cadeia de prova ───────────────────────────────────────── */
  .cadeia{display:grid;grid-template-columns:1fr 34px 1fr 34px 1fr;align-items:center;
    margin-top:32px}
  @media(max-width:820px){ .cadeia{grid-template-columns:1fr} }
  .cadeia > div:not(.el){background:var(--painel);border:1px solid var(--linha-2);
    border-radius:14px;padding:20px 22px;text-align:center}
  .cadeia b{display:block;font-family:var(--mono);font-size:11.5px;letter-spacing:.1em;
    text-transform:uppercase;color:var(--ouro)}
  .cadeia span{display:block;font-size:14px;color:var(--tx-2);margin-top:9px;line-height:1.55}
  .cadeia .el{display:grid;place-items:center;color:var(--ouro);font-size:17px}
  @media(max-width:820px){ .cadeia .el{padding:9px 0;transform:rotate(90deg)} }

  .trilhas{display:grid;grid-template-columns:repeat(4,1fr);gap:14px;margin-top:34px}
  @media(max-width:900px){ .trilhas{grid-template-columns:repeat(2,1fr)} }
  @media(max-width:540px){ .trilhas{grid-template-columns:1fr} }
  .trilhas > div{border-radius:14px;padding:22px;border:1px solid var(--linha);background:var(--papel)}
  .trilhas .n{font-family:var(--mono);font-size:10.5px;letter-spacing:.11em;text-transform:uppercase;color:var(--ouro)}
  .trilhas h3{font-size:17px;margin:10px 0 8px;font-weight:600}
  .trilhas p{font-size:13.5px;color:var(--tx-2);line-height:1.6}
  .trilhas .fonte{font-size:12.5px;color:var(--tx-3);margin-top:11px;padding-top:10px;border-top:1px dashed var(--linha-2)}

  /* ── exemplo de leitura, sem número de resultado ─────────────── */
  .leitura{background:var(--canvas);border:1px solid var(--linha);border-radius:18px;
    padding:30px 32px;margin-top:32px}
  @media(max-width:560px){ .leitura{padding:24px 20px} }
  .leitura .r{font-family:var(--mono);font-size:10.5px;letter-spacing:.11em;text-transform:uppercase;
    color:var(--tx-3)}
  .leitura .sit{font-family:var(--disp);font-weight:700;font-size:clamp(19px,2.5vw,24px);
    color:var(--tinta);margin-top:12px;line-height:1.35;letter-spacing:-.02em;max-width:34ch}
  .leitura > p{font-size:15px;color:var(--tx-2);margin-top:13px;line-height:1.65;max-width:68ch}
  .campos{display:grid;grid-template-columns:repeat(2,1fr);gap:11px;margin-top:24px;
    padding-top:22px;border-top:1px solid var(--linha)}
  @media(max-width:700px){ .campos{grid-template-columns:1fr} }
  .campos > div{background:var(--papel);border:1px solid var(--linha);border-radius:11px;
    padding:15px 17px}
  .campos b{display:block;font-family:var(--mono);font-size:10px;letter-spacing:.11em;
    text-transform:uppercase;color:var(--tx-3);font-weight:400}
  .campos span{display:block;font-size:14px;color:var(--tx);margin-top:6px;line-height:1.55}
  .leitura .pe{font-size:13.5px;color:var(--tx-2);margin-top:20px;line-height:1.58;
    padding-left:13px;border-left:2px solid var(--linha-2)}
</style>

<section class="cap">
  <div class="wrap">
    <div class="olho">Metodologia</div>
    <h1>Como transformamos o potencial da IA em performance organizacional</h1>
    <p class="sub">Uma metodologia de consultoria para redesenhar o trabalho, a organização e o
       modelo de negócio — conectando estratégia, pessoas, processos, tecnologia e governança.
       O que vem abaixo é o percurso: a tese, o que medimos, como intervimos, o que entregamos
       e como a mudança é demonstrada.</p>
  </div>
</section>

<section class="sec">
  <div class="wrap">
    <div class="olho">01 · A tese</div>
    <h2 class="tit larga">Ferramentas aceleram tarefas. Redesenho transforma o sistema.</h2>
    <p class="lead">O ganho de uma ferramenta é real, mas local: fica contido pela etapa seguinte,
       que não mudou. A passagem de um patamar para o outro não acontece por adoção — acontece
       por desenho.</p>

    <div class="od rv">
      <div class="od-c od-h">
        <div class="rot">A organização hoje</div>
        <ul>
          <li>Processos lentos</li>
          <li>Gargalos e retrabalho</li>
          <li>Uso pontual de IA</li>
          <li>Estruturas rígidas</li>
          <li>Dados fragmentados</li>
          <li>Valor não capturado</li>
        </ul>
      </div>
      <div class="od-s" aria-hidden="true">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
             stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
        <span>seis movimentos</span>
      </div>
      <div class="od-c od-f ctx-escuro">
        <div class="rot">A organização AI-enabled</div>
        <ul>
          <li>Processos mais ágeis</li>
          <li>Pessoas e agentes colaborando</li>
          <li>Decisões mais rápidas</li>
          <li>Governança integrada</li>
          <li>Capacidade contínua de reinvenção</li>
          <li>Valor capturado e sustentável</li>
        </ul>
      </div>
    </div>
  </div>
</section>

<section class="sec canvas">
  <div class="wrap">
    <div class="olho">02 · O harness organizacional</div>
    <h2 class="tit larga">Oito componentes sustentam a execução e a captura de valor</h2>
    <p class="lead">O harness organizacional é o sistema que conecta trabalho, dados, agentes,
       decisões e controles. Ele é lido como sistema porque falha como sistema: um componente
       frágil retém o ganho dos outros sete.</p>

    <div class="comp8 rv">
      <div style="--c:#2D87FF;--ctxt:#1B5FC4"><div class="cod">H1</div><b>Modelo de negócio e economia do valor</b><span>Direção e clareza: ambição, prioridades e modelo de valor.</span></div>
      <div style="--c:#3F82FD;--ctxt:#2456C6"><div class="cod">H2</div><b>Arquitetura do trabalho e fluxo</b><span>Processos, tarefas e decisões que precisam mudar.</span></div>
      <div style="--c:#5180FB;--ctxt:#2D4EC8"><div class="cod">H3</div><b>Modelo operacional humano–agente</b><span>Quem faz, decide, verifica, aprova e responde.</span></div>
      <div style="--c:#6379F9;--ctxt:#3645CA"><div class="cod">H4</div><b>Contexto, conhecimento e dados</b><span>Informação de qualidade, com acesso autorizado e no momento certo.</span></div>
      <div style="--c:#7373F7;--ctxt:#3F3DCC"><div class="cod">H5</div><b>Execução e orquestração</b><span>Sistemas, integrações e recuperação para execução confiável.</span></div>
      <div style="--c:#8068F7;--ctxt:#4834CE"><div class="cod">H6</div><b>Avaliação, observabilidade e confiabilidade</b><span>Saber se está funcionando, com critério definido antes.</span></div>
      <div style="--c:#8761F6;--ctxt:#512CD0"><div class="cod">H7</div><b>Governança e direitos de decisão</b><span>Autonomia proporcional ao risco, com responsável pelo efeito.</span></div>
      <div style="--c:#885CF6;--ctxt:#5A23D2"><div class="cod">H8</div><b>Liderança, competências e mudança</b><span>Pessoas e capacidades para operar o novo modelo.</span></div>
    </div>

    <div class="nota">
      <b>Por que oito, e por que eles não se compensam.</b> Não é uma escada de maturidade em que
      a média salva o conjunto. Um controle crítico ausente em H6 ou H7 vale como alerta próprio,
      mesmo com nota alta nos demais — e enquanto ele existir, nenhuma recomendação de escalar
      é emitida. A lista completa, com a pergunta diagnóstica de cada componente, está em
      <a href="{{ '/recode/harness-organizacional/' | relative_url }}">O harness organizacional</a>.
    </div>
  </div>
</section>

<section class="sec">
  <div class="wrap">
    <div class="olho">03 · Os seis movimentos RECODE</div>
    <h2 class="tit larga">Seis movimentos que mudam o sistema</h2>
    <p class="lead">Os oito componentes descrevem o que se mede. Os seis movimentos descrevem o que
       se faz. Um movimento atua sobre vários componentes, e um componente costuma exigir vários
       movimentos. Governança atravessa os seis, em vez de ocupar uma etapa no fim.</p>

    <div class="movs rv">
      <div style="--c:#2D87FF;--ctxt:#1B5FC4">
        <div class="l">R</div>
        <h3>Reframe</h3>
        <div class="sub">Direção &amp; clareza</div>
        <p>Fixa resultados econômicos e de negócio no lugar de métricas de uso de ferramenta — e
           decide, antes de começar, para onde vai a capacidade que for liberada.</p>
        <ul><li>Ambição e escopo</li><li>Hipóteses de valor</li><li>Métricas de sucesso</li></ul>
      </div>
      <div style="--c:#4A7EFC;--ctxt:#2951C7">
        <div class="l">E</div>
        <h3>Explore</h3>
        <div class="sub">Diagnóstico</div>
        <p>Levanta baseline auditável e mede o que retém valor — filas, repasses, retrabalho e
           tempo total de ciclo — até nomear o principal limitador.</p>
        <ul><li>Diagnóstico estruturado</li><li>Evidências por componente</li><li>Mapa de restrições</li></ul>
      </div>
      <div style="--c:#6379F9;--ctxt:#3645CA">
        <div class="l">C</div>
        <h3>Co-design</h3>
        <div class="sub">Processos &amp; automações</div>
        <p>Redesenha o fluxo e decompõe o trabalho <b>antes</b> de automatizar, definindo o que
           cabe a pessoas, a agentes e aos sistemas que já existem.</p>
        <ul><li>Jornadas prioritárias</li><li>Novos papéis e decisões</li><li>Desenho humano–agente</li></ul>
      </div>
      <div style="--c:#7A6CF8;--ctxt:#4536CD">
        <div class="l">O</div>
        <h3>Orchestrate</h3>
        <div class="sub">Orquestração &amp; governança</div>
        <p>Instala contexto autorizado, privilégio mínimo, arquitetura de execução, recuperação
           e gates proporcionais ao risco.</p>
        <ul><li>Arquitetura de agentes</li><li>Segurança e compliance</li><li>Gestão de performance</li></ul>
      </div>
      <div style="--c:#8363F7;--ctxt:#4F2DD0">
        <div class="l">D</div>
        <h3>Develop</h3>
        <div class="sub">Capacidades</div>
        <p>Prepara a liderança e define competências por papel, com prática supervisionada em
           processo real — não em curso avulso.</p>
        <ul><li>Desenvolvimento por papel</li><li>Gestão da mudança</li><li>Rotinas e playbooks</li></ul>
      </div>
      <div style="--c:#885CF6;--ctxt:#5A23D2">
        <div class="l">E</div>
        <h3>Evaluate</h3>
        <div class="sub">Inteligência &amp; valor</div>
        <p>Compara baseline e observado com janela, segmento e avaliação explícita de fatores
           externos — e condiciona a decisão de escalar a evidência de risco, qualidade e
           resultado, não a uma demonstração que funcionou.</p>
        <ul><li>Indicadores de negócio</li><li>Aprendizado contínuo</li><li>Escala e expansão</li></ul>
      </div>
    </div>

    <div class="nota">
      <b>Onde <i>Orchestrate</i> termina.</b> Ele significa desenhar a arquitetura do harness
      organizacional e coordenar a execução junto a parceiros ou à TI do cliente. A implementação
      técnica das integrações é contratada à parte, quando houver escopo e capacidade específicos.
    </div>
  </div>
</section>

<section class="sec canvas">
  <div class="wrap">
    <div class="olho">04 · A missão de negócio</div>
    <h2 class="tit larga">Começamos por uma jornada com dono, resultado e restrições</h2>
    <p class="lead">A unidade de intervenção não é um chatbot, uma ferramenta nem uma trilha de
       treinamento: é uma <b>missão de negócio</b>. Uma jornada administrativa ou comercial de
       ponta a ponta, mensurável e de risco controlável — e governada como objeto, não como slide.</p>

    <h3 style="font-size:21px;margin-top:46px">O que torna uma missão pronta para redesenho</h3>
    <div class="crit">
      <div><div class="m">—</div><div><b>Patrocinador com poder real</b>
        <span>Alguém capaz de alterar processo, decisão ou investimento. Sem isso o diagnóstico
          não vira mudança.</span></div></div>
      <div><div class="m">—</div><div><b>Dois indicadores, cada um com baseline</b>
        <span>Um de processo e um de resultado. Sem linha de base não há como distinguir melhora
          de variação normal.</span></div></div>
      <div><div class="m">—</div><div><b>Fluxo e gargalos mapeados</b>
        <span>O caminho que o trabalho percorre hoje, com as esperas e os repasses visíveis.</span></div></div>
      <div><div class="m">—</div><div><b>Dados e tecnologia acessíveis</b>
        <span>O que a missão precisa consultar e acionar precisa estar ao alcance, e autorizado.</span></div></div>
      <div><div class="m">—</div><div><b>Limites legais e operacionais declarados</b>
        <span>O que não pode acontecer, dito antes — e um supervisor responsável definido.</span></div></div>
      <div><div class="m">—</div><div><b>Hipótese de captura de valor</b>
        <span>Incluindo o destino da capacidade liberada: mais volume, mais qualidade, oferta
          nova ou redução de custo.</span></div></div>
    </div>

    <h3 style="font-size:21px;margin-top:46px">A missão tem estados, e eles são registrados</h3>
    <p class="lead" style="margin-top:10px">Uma missão não é um tema de workshop: é um objeto com
       ciclo de vida, e cada passagem de estado tem responsável e data.</p>
    <div class="estados">
      <code>proposed</code><code>diagnosed</code><code>redesigning</code><code>pilot</code>
      <code>measuring</code><code>scale_approved</code><code>paused</code><code>closed</code>
    </div>
  </div>
</section>

<section class="sec">
  <div class="wrap">
    <div class="olho">05 · Os artefatos da consultoria</div>
    <h2 class="tit larga">Os artefatos que mudam as decisões</h2>
    <p class="lead">O que separa um artefato de um slide é o que ele obriga a decidir. Toda
       recomendação que sai daqui carrega base, lacuna, risco, ação, responsável, prazo e
       indicador — e nada é publicado sem revisão humana.</p>

    <div class="artef rv">
      <div>
        <div class="nm">Organizational Harness Assessment
          <span>Leitura percebida dos oito componentes, com cobertura, divergências entre áreas e
            níveis, NS/NA visíveis e limitações declaradas.</span></div>
        <div class="dec"><b>Que decisão destrava</b>Qual componente investigar primeiro, e onde a
          leitura da liderança diverge da leitura de quem opera.</div>
      </div>
      <div>
        <div class="nm">Harness Constraint Map
          <span>As fricções que retêm valor — fila, handoff, verificação, dado, direito de decisão
            ou capacidade — com criticidade, evidência e confiança por item.</span></div>
        <div class="dec"><b>Que decisão destrava</b>Qual restrição atacar primeiro, e qual delas
          impede qualquer escalada enquanto não for resolvida.</div>
      </div>
      <div>
        <div class="nm">Business &amp; Operating Model Recode
          <span>Opções de criação e captura de valor, processo futuro, papéis e direitos de
            decisão.</span></div>
        <div class="dec"><b>Que decisão destrava</b>Como a operação deveria funcionar com IA — e
          o que precisa mudar em alçada, papel e incentivo para que funcione.</div>
      </div>
      <div>
        <div class="nm">Harness Blueprint
          <span>Diagrama de contexto, ferramentas, estados, verificações, limites e handoffs.</span></div>
        <div class="dec"><b>Que decisão destrava</b>O que construir, com que permissão e com que
          gate — e o que fica fora do escopo de autonomia.</div>
      </div>
      <div>
        <div class="nm">Capability Plan
          <span>Trilhas aplicadas por papel, com baseline de competência e prova de aplicação em
            processo real.</span></div>
        <div class="dec"><b>Que decisão destrava</b>Quem precisa ser preparado para quê, e como
          se verifica que a preparação pegou.</div>
      </div>
      <div>
        <div class="nm">Value Realization Ledger
          <span>Indicadores operacionais e econômicos, contrafactuais, confiança e decisões — com
            separação explícita entre hipótese, projeção e realizado.</span></div>
        <div class="dec"><b>Que decisão destrava</b>Escalar, corrigir ou interromper — e a decisão
          de interromper conta como resultado legítimo.</div>
      </div>
    </div>
  </div>
</section>

<section class="sec escura ctx-escuro">
  <div class="wrap">
    <div class="olho">06 · Como demonstramos valor</div>
    <h2 class="tit larga">Quatro camadas de prova, da percepção à captura econômica</h2>
    <p class="lead">Confundir essas quatro coisas é a forma mais comum de um diagnóstico de IA
       produzir uma recomendação errada com aparência de dado. Elas são medidas em trilhas
       separadas, de propósito.</p>

    <div class="trilhas rv">
      <div>
        <div class="n">Trilha 1</div>
        <h3>Percepção</h3>
        <p>O que as pessoas declaram sobre as práticas da organização, numa escala comportamental.</p>
        <div class="fonte">Fonte: questionário. Nunca equivale a comprovação.</div>
      </div>
      <div>
        <div class="n">Trilha 2</div>
        <h3>Evidência</h3>
        <p>Artefato verificado por um revisor, com origem, data e nível de confiança.</p>
        <div class="fonte">Fonte: consultor. Avaliada à parte do questionário.</div>
      </div>
      <div>
        <div class="n">Trilha 3</div>
        <h3>Performance</h3>
        <p>Medida operacional observada: tempo, erro, qualidade, throughput, custo, receita.</p>
        <div class="fonte">Fonte: o sistema do cliente. Exige baseline e janela.</div>
      </div>
      <div>
        <div class="n">Trilha 4</div>
        <h3>Valor capturado</h3>
        <p>Melhoria econômica comprovada, com interpretação de causalidade e destino registrado
           da capacidade liberada.</p>
        <div class="fonte">Fonte: decisão de negócio. Não se deduz de tempo poupado.</div>
      </div>
    </div>

    <h3 style="font-size:21px;margin-top:52px">A direção da cadeia</h3>
    <p class="lead" style="margin-top:10px">As quatro trilhas não são quatro relatórios paralelos.
       Elas formam um mecanismo de prova com direção declarada — e cada seta é uma afirmação que
       precisa ser sustentada, não presumida.</p>

    <div class="cadeia rv">
      <div><b>Capability</b><span>o que a organização passa a conseguir fazer de forma confiável</span></div>
      <div class="el" aria-hidden="true">→</div>
      <div><b>Work</b><span>como o trabalho de ponta a ponta muda de fato</span></div>
      <div class="el" aria-hidden="true">→</div>
      <div><b>Business Value</b><span>o resultado econômico que a mudança sustenta</span></div>
    </div>

    <div class="nota">
      <b>A evidência não corrige a nota de percepção.</b> Se um documento bem escrito pudesse
      elevar a percepção declarada, o instrumento premiaria quem documenta melhor, não quem opera
      melhor. As duas medidas correm lado a lado, e a divergência entre elas costuma ser o achado
      mais útil do diagnóstico.
    </div>

    <h3 style="font-size:21px;margin-top:52px">Como uma leitura se parece</h3>
    <div class="leitura ctx-escuro">
      <div class="r">Exemplo de aplicação · jornada comercial</div>
      <div class="sit">A proposta ficou mais rápida. A aprovação continua lenta.</div>
      <p>Uma empresa usa IA para preparar propostas comerciais, mas mantém as mesmas aprovações
         sequenciais. O diagnóstico precisa determinar onde o tempo fica retido e quais regras
         podem ser redesenhadas.</p>

      <div class="campos">
        <div><b>Base</b><span>O que a organização declara sobre o redesenho do fluxo, e o que os
          artefatos operacionais confirmam.</span></div>
        <div><b>Lacuna</b><span>Existe relato de redesenho sem desenho operacional que o
          sustente.</span></div>
        <div><b>Hipótese</b><span>A automação pontual está preservando filas e handoffs: a etapa
          acelerou, o ciclo não.</span></div>
        <div><b>Próxima ação</b><span>Mapear a jornada de propostas de ponta a ponta e levantar
          baseline de tempo de ciclo.</span></div>
        <div><b>Responsável</b><span>Diretoria comercial, com poder de mudar a alçada de
          aprovação.</span></div>
        <div><b>Indicador</b><span>Tempo de ciclo por faixa de valor, com taxa de retrabalho.</span></div>
      </div>

      <p class="pe">Exemplo didático do método, sem dados ou resultados atribuídos a clientes.
         Não usamos números inventados para demonstrar eficácia: quando houver pilotos, os
         exemplos didáticos dão lugar a estudos de caso autorizados e documentados.</p>
    </div>

    <div class="nota aviso">
      <b>Tempo liberado não é economia realizada.</b> Só atribuímos redução de custo quando há
      mudança documentada em estrutura, contratação ou mix de entregas. Relato de horas poupadas
      sem decisão econômica registra <b>capacidade liberada</b> — não receita e não economia.
      Fatores externos são avaliados explicitamente em vez de inferidos, e indicador financeiro
      só é publicado com validação do cliente.
    </div>
  </div>
</section>

<section class="sec">
  <div class="wrap">
    <div class="olho">07 · Fundamentação e limites</div>
    <h2 class="tit larga">Em que a tese se apoia, e até onde ela vai</h2>
    <p class="lead">O <i>harness organizacional</i> e a taxonomia H1–H8 são uma extensão
       conceitual própria da Alun Business ao campo de harness engineering: uma síntese sobre um
       corpo de trabalho público, não um padrão de mercado e não um selo.</p>

    <div class="grade g2" style="margin-top:32px">
      <div class="cartao">
        <h3>O que já está construído</h3>
        <p>A taxonomia H1–H8 com as 32 afirmações comportamentais, os seis movimentos, a análise
           de restrições por missão de negócio, a separação entre as quatro trilhas e as regras de
           cálculo, supressão e governança. São ativos de método e desenho: estão especificados e
           são auditáveis.</p>
      </div>
      <div class="cartao">
        <h3>O que depende de evidência futura</h3>
        <p>Validação psicométrica formal, estabilidade comprovada em reaplicações e base de
           comparação entre empresas. Sem isso não há benchmark de mercado nem certificação, e
           campanhas de versões diferentes não são diretamente comparáveis.</p>
      </div>
    </div>

    <div class="nota">
      <b>A documentação técnica está aberta.</b> O instrumento, a escala com as âncoras de cada
      nível, as seis regras de cálculo por extenso, a régua de evidências, as regras de supressão,
      o versionamento, o estado de validação e as referências estão em
      <a href="{{ '/recode/fundamentos/' | relative_url }}">Fundamentos do instrumento</a> — onde
      cabem, sem atravessar quem está tentando entender o valor.
    </div>

    <div class="botoes">
      <a class="bt bt-1" href="{{ '/recode/diagnostico/' | relative_url }}">Conhecer o diagnóstico</a>
      <a class="bt bt-2" href="{{ '/recode/fundamentos/' | relative_url }}">Ver os fundamentos</a>
    </div>
  </div>
</section>
