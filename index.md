---
layout: default
title: "Início"
---

<style>
  .hp-divider {
    border: none;
    border-top: 1px solid var(--border-sub);
    margin: 48px 0 40px;
  }

  /* Pull quote */
  .hp-pullquote {
    margin: 0 0 40px;
    padding: 28px 32px;
    background: var(--gold-dim);
    border: 1px solid var(--gold-border);
    border-radius: 14px;
    position: relative;
  }
  .hp-pullquote::before {
    content: '"';
    position: absolute;
    top: 12px;
    left: 20px;
    font-size: 56px;
    line-height: 1;
    color: var(--gold);
    opacity: 0.3;
    font-family: Georgia, serif;
  }
  .hp-pullquote p {
    font-size: 1.0625rem;
    font-weight: 600;
    color: var(--text-1);
    line-height: 1.65;
    margin: 0;
    padding-left: 8px;
  }

  /* Insight blocks */
  .hp-insights {
    display: flex;
    flex-direction: column;
    gap: 2px;
    margin: 0 0 40px;
  }
  .hp-insight {
    display: grid;
    grid-template-columns: 3px 1fr;
    gap: 20px;
    padding: 20px 0;
    border-bottom: 1px solid var(--border-sub);
    align-items: start;
  }
  .hp-insight:last-child { border-bottom: none; }
  .hp-insight-bar {
    width: 3px;
    height: 100%;
    min-height: 32px;
    background: var(--gold);
    border-radius: 2px;
    opacity: 0.5;
    margin-top: 4px;
  }
  .hp-insight-body {}
  .hp-insight-label {
    font-size: 9px;
    font-weight: 700;
    letter-spacing: 0.14em;
    text-transform: uppercase;
    color: var(--text-5);
    margin-bottom: 6px;
  }
  .hp-insight-text {
    font-size: 0.9375rem;
    color: var(--text-2);
    line-height: 1.7;
  }
  .hp-insight-text strong { color: var(--text-1); }

  /* Section label */
  .hp-section-label {
    font-size: 10px;
    font-weight: 700;
    letter-spacing: 0.14em;
    text-transform: uppercase;
    color: var(--text-5);
    margin-bottom: 20px;
  }

  @media (max-width: 640px) {
    .hp-pullquote { padding: 22px 20px; }
    .hp-pullquote::before { font-size: 40px; }
  }
</style>

<hr class="hp-divider">

<p class="hp-section-label">Por que isso importa agora</p>

<div class="hp-pullquote">
  <p>As organizações do século XX não foram projetadas para humanos — foram projetadas em torno das limitações da tecnologia de coordenação disponível na época. A IA agêntica não está apenas automatizando tarefas. Está questionando por que as empresas existem do jeito que existem.</p>
</div>

<div class="hp-insights">

  <div class="hp-insight">
    <div class="hp-insight-bar"></div>
    <div class="hp-insight-body">
      <div class="hp-insight-label">A virada estrutural</div>
      <div class="hp-insight-text">
        Hierarquias, camadas de gestão e estruturas departamentais surgiram como soluções para um problema específico: coordenar pessoas e informações num mundo onde isso era caro, lento e impreciso. <strong>Quando agentes de IA passam a fazer coordenação, medição e execução com velocidade e escala incomparáveis, essas estruturas não desaparecem — elas precisam ser repensadas.</strong>
      </div>
    </div>
  </div>

  <div class="hp-insight">
    <div class="hp-insight-bar"></div>
    <div class="hp-insight-body">
      <div class="hp-insight-label">O que muda para T&D</div>
      <div class="hp-insight-text">
        Por décadas, boa parte do desenvolvimento corporativo serviu à lógica das hierarquias: formar gestores para coordenar, medir, reportar e tomar decisões dentro de estruturas definidas. <strong>Se essas camadas se comprimem, o esforço de aprendizagem precisa se mover para onde o humano é insubstituível</strong> — julgamento em contexto, criação de sentido, relações de confiança, capacidade de agir diante da ambiguidade.
      </div>
    </div>
  </div>

  <div class="hp-insight">
    <div class="hp-insight-bar"></div>
    <div class="hp-insight-body">
      <div class="hp-insight-label">A pergunta que importa</div>
      <div class="hp-insight-text">
        Não é "qual ferramenta de IA reduz custos no treinamento?". É: <strong>quais capacidades humanas se tornam essenciais quando agentes não-humanos assumem coordenação, mensuração e execução?</strong> Responder isso é o trabalho estratégico de T&D para os próximos anos.
      </div>
    </div>
  </div>

</div>
