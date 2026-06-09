---
layout: default
title: "Framework de Estratégia Educacional"
---

<style>
  /* ── Shared components ───────────────────────────────────── */
  .fw-section {
    margin: 32px 0 40px;
  }

  /* ── Playbook cascade ────────────────────────────────────── */
  .pb-cascade {
    display: flex;
    flex-direction: column;
    gap: 0;
    margin: 24px 0;
  }
  .pb-row {
    display: grid;
    gap: 8px;
    margin-bottom: 8px;
  }
  .pb-row-1 { grid-template-columns: 1fr; }
  .pb-row-2 { grid-template-columns: 1fr 1fr; }
  .pb-arrow {
    text-align: center;
    color: var(--text-5);
    font-size: 18px;
    line-height: 1;
    margin: 4px 0;
  }
  .pb-card {
    padding: 16px 18px;
    border-radius: 10px;
    border: 1px solid var(--border);
    background: var(--surface);
    position: relative;
  }
  .pb-card.gold {
    background: var(--gold-dim);
    border-color: var(--gold-border);
  }
  .pb-card.blue {
    background: var(--blue-dim);
    border-color: var(--blue-border);
  }
  .pb-card .tag {
    font-size: 9px;
    font-weight: 700;
    letter-spacing: 0.14em;
    text-transform: uppercase;
    color: var(--text-5);
    margin-bottom: 4px;
  }
  .pb-card.gold .tag { color: rgba(209,164,118,0.5); }
  .pb-card.blue .tag { color: rgba(75,106,252,0.5); }
  .pb-card .title {
    font-size: 0.875rem;
    font-weight: 700;
    color: var(--text-1);
    margin-bottom: 4px;
  }
  .pb-card.gold .title { color: var(--gold); }
  .pb-card.blue .title { color: var(--blue); }
  .pb-card .sub {
    font-size: 0.8rem;
    color: var(--text-4);
    line-height: 1.5;
  }
  .pb-connector {
    display: flex;
    justify-content: center;
    gap: 120px;
    color: var(--text-5);
    font-size: 16px;
    margin: 2px 0;
  }
  .pb-label {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 12px;
    padding: 10px 0;
  }
  .pb-label-item {
    display: flex;
    align-items: center;
    gap: 6px;
    font-size: 10px;
    font-weight: 700;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: var(--text-5);
    padding: 4px 12px;
    border-radius: 20px;
    border: 1px solid var(--border-sub);
    background: var(--tint-3);
  }

  /* ── Territory matrix ────────────────────────────────────── */
  .wtp-pills {
    display: flex;
    gap: 10px;
    margin: 24px 0 16px;
    flex-wrap: wrap;
  }
  .wtp-pill {
    padding: 10px 16px;
    border-radius: 8px;
    display: flex;
    align-items: center;
    gap: 10px;
    flex: 1;
    min-width: 200px;
  }
  .wtp-pill.gold { background: var(--gold-dim); border: 1px solid var(--gold-border); }
  .wtp-pill.blue { background: var(--blue-dim);  border: 1px solid var(--blue-border); }
  .wtp-pill .label { font-size: 11px; font-weight: 700; }
  .wtp-pill .arrow { font-size: 14px; color: var(--text-5); }
  .wtp-pill .value { font-size: 12px; font-weight: 700; color: var(--text-1); }
  .wtp-pill.gold .label { color: var(--gold); }
  .wtp-pill.blue .label { color: var(--blue); }

  .territory-matrix {
    border: 1px solid var(--border);
    border-radius: 10px;
    overflow: hidden;
    font-size: 11px;
    margin-bottom: 8px;
    width: 100%;
  }
  .tm-header {
    display: grid;
    grid-template-columns: 130px repeat(3, 1fr);
    background: var(--tint-3);
    border-bottom: 1px solid var(--border-sub);
  }
  .tm-cell {
    padding: 10px 8px;
    text-align: center;
    color: var(--text-4);
    font-size: 10px;
    font-weight: 700;
    letter-spacing: 0.06em;
    text-transform: uppercase;
    border-right: 1px solid var(--border-sub);
    line-height: 1.4;
  }
  .tm-cell:last-child { border-right: none; }
  .tm-row {
    display: grid;
    grid-template-columns: 130px repeat(3, 1fr);
    border-top: 1px solid var(--border-sub);
  }
  .tm-row-label {
    padding: 14px 10px;
    font-size: 10px;
    font-weight: 700;
    letter-spacing: 0.06em;
    text-transform: uppercase;
    color: var(--text-4);
    border-right: 1px solid var(--border-sub);
    display: flex;
    align-items: center;
    line-height: 1.4;
  }
  .tm-dot-cell {
    padding: 14px 8px;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    gap: 6px;
    border-right: 1px solid var(--border-sub);
    min-height: 64px;
  }
  .tm-dot-cell:last-child { border-right: none; }
  .tm-dot {
    width: 28px;
    height: 28px;
    border-radius: 50%;
    background: var(--blue);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 9px;
    font-weight: 700;
    color: white;
    opacity: 0.85;
  }
  .tm-quadrant {
    width: 100%;
    text-align: center;
    font-size: 9px;
    font-weight: 700;
    letter-spacing: 0.07em;
    text-transform: uppercase;
    color: var(--text-5);
    margin-top: 6px;
    line-height: 1.3;
  }
  .tm-dot-cell.empty .tm-quadrant {
    color: var(--text-5);
    margin-top: 0;
  }
  .tm-footer {
    background: var(--gold-dim);
    border-top: 1px solid var(--gold-border);
    padding: 8px 10px;
    text-align: center;
    font-size: 9px;
    font-weight: 700;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: var(--gold);
  }

  /* ── Tactics cards ───────────────────────────────────────── */
  .tactics-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 12px;
    margin: 24px 0;
  }
  .tactic-card {
    background: var(--surface);
    border: 1px solid var(--border-sub);
    border-radius: 12px;
    padding: 18px 16px;
  }
  .tactic-card .tc-label {
    font-size: 9px;
    font-weight: 700;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: var(--text-5);
    margin-bottom: 6px;
  }
  .tactic-card .tc-name {
    font-size: 0.9rem;
    font-weight: 800;
    color: var(--text-1);
    margin-bottom: 10px;
    line-height: 1.2;
  }
  .tactic-card .tc-desc {
    font-size: 0.8rem;
    color: var(--text-4);
    line-height: 1.55;
  }
  .tactic-card.t-incremental { border-color: rgba(75,106,252,0.3); }
  .tactic-card.t-balanceada  { border-color: rgba(209,164,118,0.3); }
  .tactic-card.t-disruptiva  { border-color: rgba(220,80,120,0.3); }
  .tactic-card.t-incremental .tc-name { color: var(--blue); }
  .tactic-card.t-balanceada  .tc-name { color: var(--gold); }
  .tactic-card.t-disruptiva  .tc-name { color: #e05080; }
  .tactic-mini {
    display: grid;
    grid-template-columns: repeat(3,1fr);
    gap: 2px;
    margin-bottom: 12px;
  }
  .tactic-mini .m { width: 100%; aspect-ratio: 1; border-radius: 2px; background: var(--surface-2); }
  .tactic-mini .m.on { background: var(--blue); opacity: 0.7; }
  .tactic-card.t-balanceada  .tactic-mini .m.on { background: var(--gold); }
  .tactic-card.t-disruptiva  .tactic-mini .m.on { background: #e05080; }

  /* ── Full framework ──────────────────────────────────────── */
  .fw-layers {
    display: flex;
    flex-direction: column;
    gap: 3px;
    margin: 24px 0;
  }
  .fw-layer {
    border-radius: 10px;
    border: 1px solid var(--border-sub);
    overflow: hidden;
  }
  .fw-layer-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px 16px;
    background: var(--tint-3);
    border-bottom: 1px solid var(--border-sub);
  }
  .fw-layer-title {
    font-size: 10px;
    font-weight: 700;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: var(--text-3);
  }
  .fw-layer-tag {
    font-size: 9px;
    font-weight: 700;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: var(--text-5);
  }
  .fw-layer-body {
    display: flex;
    flex-wrap: wrap;
    gap: 6px;
    padding: 12px 14px;
  }
  .fw-tag {
    font-size: 11px;
    font-weight: 600;
    padding: 4px 10px;
    border-radius: 6px;
    background: var(--surface-2);
    border: 1px solid var(--border-sub);
    color: var(--text-3);
  }
  .fw-layer.estrategia .fw-tag { background: var(--blue-dim); border-color: var(--blue-border); color: #7b96ff; }
  .fw-layer.processos  .fw-tag { background: rgba(75,106,252,0.05); border-color: rgba(75,106,252,0.15); color: var(--text-3); }
  .fw-layer.tecnologia .fw-tag { background: rgba(75,106,252,0.05); border-color: rgba(75,106,252,0.15); color: var(--text-3); }
  .fw-layer.pessoas    { border-color: rgba(209,164,118,0.3); }
  .fw-layer.pessoas .fw-layer-header { background: var(--gold-dim); border-color: rgba(209,164,118,0.2); }
  .fw-layer.pessoas .fw-layer-title  { color: var(--gold); }
  .fw-layer.pessoas .fw-tag { background: rgba(209,164,118,0.1); border-color: var(--gold-border); color: var(--gold); }
  .fw-arrow-down {
    text-align: center;
    color: var(--text-5);
    font-size: 14px;
    line-height: 1;
    padding: 2px 0;
  }

  /* ── Territory explainer box ────────────────────────────── */
  .territory-box {
    margin: 20px 0 28px;
    border: 1px solid var(--border);
    border-radius: 12px;
    overflow: hidden;
  }
  .territory-box-header {
    padding: 12px 18px;
    background: var(--tint-3);
    border-bottom: 1px solid var(--border-sub);
    display: flex;
    align-items: center;
    gap: 10px;
  }
  .territory-box-header .icon {
    font-size: 14px;
    opacity: 0.6;
  }
  .territory-box-header .title {
    font-size: 11px;
    font-weight: 700;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: var(--text-3);
  }
  .territory-box-body {
    padding: 18px;
    display: flex;
    flex-direction: column;
    gap: 12px;
  }
  .territory-group {
    display: grid;
    grid-template-columns: auto 1fr;
    gap: 14px;
    align-items: start;
  }
  .territory-badges {
    display: flex;
    flex-wrap: wrap;
    gap: 4px;
    padding-top: 1px;
  }
  .tb {
    width: 26px;
    height: 26px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 8px;
    font-weight: 700;
    color: white;
    background: var(--blue);
    opacity: 0.85;
    flex-shrink: 0;
  }
  .territory-group-text .group-name {
    font-size: 0.8125rem;
    font-weight: 700;
    color: var(--text-1);
    margin-bottom: 3px;
  }
  .territory-group-text .group-desc {
    font-size: 0.8rem;
    color: var(--text-4);
    line-height: 1.55;
  }
  .territory-group-text .group-td {
    display: inline-block;
    margin-top: 5px;
    font-size: 10px;
    font-weight: 700;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: var(--gold);
    background: var(--gold-dim);
    border: 1px solid var(--gold-border);
    padding: 2px 8px;
    border-radius: 4px;
  }
  .territory-divider {
    border: none;
    border-top: 1px solid var(--border-sub);
    margin: 0;
  }
  .territory-box-intro {
    font-size: 0.875rem;
    color: var(--text-3);
    line-height: 1.65;
    padding: 0 18px 4px;
  }

  @media (max-width: 640px) {
    .territory-wrap { grid-template-columns: 1fr; }
    .tactics-grid   { grid-template-columns: 1fr; }
    .pb-row-2       { grid-template-columns: 1fr; }
    .pb-connector   { gap: 40px; }
  }
</style>

# Framework de Estratégia Educacional

---

## O framework

*"Where to Play & How to Win"* é uma abordagem estratégica desenvolvida por A.G. Lafley (ex-CEO da P&G) e Roger Martin. Ajuda organizações a fazer escolhas coerentes sobre onde competir e como alcançar vantagem competitiva sustentável.

Aplicado a T&D, ele responde a uma pergunta central que poucos times de educação corporativa conseguem articular com clareza:

> **"Qual é a nossa estratégia — não nosso catálogo de cursos?"**

---

## Os 5 elementos do seu Playbook de Estratégia

<div class="fw-section">
  <div class="pb-cascade">
    <div class="pb-row pb-row-1">
      <div class="pb-card gold">
        <div class="tag">Aspiração Vencedora</div>
        <div class="title">O objetivo que alinha esforços e motiva</div>
        <div class="sub">Concreto, motivacional e estável ao longo do tempo. Não é missão genérica — é onde você quer chegar.</div>
      </div>
    </div>
    <div class="pb-connector">↓ &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ↓</div>
    <div class="pb-row pb-row-2">
      <div class="pb-card blue">
        <div class="tag">Where to Play</div>
        <div class="title">Territórios da Estratégia</div>
        <div class="sub">Onde você vai jogar — públicos, competências, formatos e parcerias prioritárias.</div>
      </div>
      <div class="pb-card blue">
        <div class="tag">How to Win</div>
        <div class="title">Tática para Vencer</div>
        <div class="sub">Forças, modelo e proposta de valor que geram vantagem competitiva nos territórios escolhidos.</div>
      </div>
    </div>
    <div class="pb-connector">↓ &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ↓</div>
    <div class="pb-row pb-row-2">
      <div class="pb-card">
        <div class="tag">Capacitação</div>
        <div class="title">Competências & Habilidades</div>
        <div class="sub">O que o time e os colaboradores precisam dominar para executar a estratégia.</div>
      </div>
      <div class="pb-card">
        <div class="tag">Estrutura</div>
        <div class="title">Sistemas de Gestão</div>
        <div class="sub">Indicadores, processos e estruturas que suportam as decisões estratégicas.</div>
      </div>
    </div>
  </div>
  <div class="pb-label">
    <div class="pb-label-item">Gestão Estratégica = Caminho lógico + Retroalimentação</div>
  </div>
</div>

### 1. Aspiração Vencedora
Um objetivo concreto, motivacional e estável que alinha os esforços do time de T&D. Não é uma missão genérica — é uma declaração de onde você quer chegar.

**Exemplo fraco:** "Desenvolver as pessoas da empresa."
**Exemplo forte:** "Ser o ativo que torna nossa empresa capaz de executar sua estratégia de expansão digital nos próximos 3 anos."

### 2. Territórios da Estratégia (Where to Play)
Onde você vai focar. Em T&D, isso significa escolher:
- Quais públicos priorizar (liderança, tecnologia, toda a empresa?)
- Quais competências desenvolver (técnicas, comportamentais, estratégicas?)
- Quais formatos adotar (presencial, digital, no fluxo do trabalho?)
- Quais parcerias construir (internas, externas, plataformas?)

**A armadilha:** tentar jogar em todos os territórios ao mesmo tempo. Estratégia é escolha — e escolha exige dizer "não".

### 3. Tática para Vencer (How to Win)
As forças, o modelo e a proposta de valor que vão te dar vantagem competitiva nos territórios escolhidos. Em T&D:
- O que você faz melhor do que qualquer outra área ou parceiro externo?
- Qual é a proposta de valor única que você oferece para os colaboradores e para o negócio?
- Como você cria experiências de aprendizagem que as pessoas querem ter — não apenas que precisam ter?

### 4. Competências & Habilidades
O conjunto de competências, habilidades e ferramentas que precisam ser reforçadas ou desenvolvidas para executar a estratégia. Inclui as competências **do time de T&D** — não apenas dos colaboradores que você desenvolve.

### 5. Sistemas de Gestão
Os sistemas, estruturas e indicadores que são necessários para dar suporte às decisões. Em T&D:
- Como você mede o impacto (além de NPS e horas de treinamento)?
- Como você decide o que entra e o que sai do portfólio de programas?
- Como você garante que a estratégia de T&D é revisada com a mesma frequência que a estratégia de negócio?

---

## Regenerando os Negócios: Estratégia de T&D integrada

A estratégia de T&D precisa estar conectada à estratégia corporativa. O framework conecta dois movimentos:

<div class="fw-section">
  <div class="wtp-pills">
    <div class="wtp-pill gold">
      <span class="label">Where to Play</span>
      <span class="arrow">›</span>
      <span class="value">Territórios Estratégicos</span>
    </div>
    <div class="wtp-pill blue">
      <span class="label">How to Win</span>
      <span class="arrow">›</span>
      <span class="value">Competências Tech & Digitais</span>
    </div>
  </div>
  <div class="territory-matrix">
    <div class="tm-header">
      <div class="tm-cell"></div>
      <div class="tm-cell">Escalar<br>Competências</div>
      <div class="tm-cell">Dominar<br>Competências</div>
      <div class="tm-cell">Experimentar<br>Competências</div>
    </div>
    <div class="tm-row">
      <div class="tm-row-label">Novos Mercados</div>
      <div class="tm-dot-cell empty"><div class="tm-quadrant">Transposição</div></div>
      <div class="tm-dot-cell empty"><div class="tm-quadrant">Vanguarda</div></div>
      <div class="tm-dot-cell"><div class="tm-dot">T9</div><div class="tm-quadrant">Disrupção</div></div>
    </div>
    <div class="tm-row">
      <div class="tm-row-label">Mercados Não Endereçados</div>
      <div class="tm-dot-cell"><div class="tm-dot">T5</div><div class="tm-quadrant">Expansão</div></div>
      <div class="tm-dot-cell"><div class="tm-dot">T6</div><div class="tm-quadrant">Adjacência</div></div>
      <div class="tm-dot-cell"><div class="tm-dot">T8</div><div class="tm-quadrant">Exploração</div></div>
    </div>
    <div class="tm-row">
      <div class="tm-row-label">Mercados Estabelecidos</div>
      <div class="tm-dot-cell"><div class="tm-dot">T1</div><div class="tm-dot">T2</div><div class="tm-dot">T3</div><div class="tm-quadrant">Excelência</div></div>
      <div class="tm-dot-cell"><div class="tm-dot">T4</div><div class="tm-quadrant">Ativação</div></div>
      <div class="tm-dot-cell"><div class="tm-dot">T7</div><div class="tm-quadrant">Transformação</div></div>
    </div>
    <div class="tm-footer">Criação de Valor — Esforço de Aprendizagem Organizacional</div>
  </div>
</div>

<div class="territory-box">
  <div class="territory-box-header">
    <span class="icon">▦</span>
    <span class="title">O que são os Territórios?</span>
  </div>
  <div class="territory-box-body">

    <div class="territory-group">
      <div class="territory-group-text">
        <div class="group-desc">Cada território é a interseção entre <strong style="color:var(--text-1)">onde a empresa compete</strong> (mercado) e <strong style="color:var(--text-1)">o que ela precisa saber fazer</strong> (competências). Esses territórios mapeiam as apostas de desenvolvimento — e revelam onde T&D deve concentrar seu esforço de aprendizagem.</div>
      </div>
    </div>

    <hr class="territory-divider">

    <div class="territory-group">
      <div class="territory-group-text">
        <div class="group-name">O mapa é ilustrativo</div>
        <div class="group-desc">Os territórios T1 a T9 mostrados na matriz são um <strong style="color:var(--text-1)">exemplo</strong>. Cada empresa terá um número diferente de territórios, definido pela sua própria estratégia — quantos mercados ela atende e quais combinações de competências precisa desenvolver para competir em cada um deles.</div>
      </div>
    </div>

    <hr class="territory-divider">

    <div class="territory-group">
      <div class="territory-group-text">
        <div class="group-name">Como usar na prática</div>
        <div class="group-desc">Mapeie os territórios da <em>sua</em> empresa: identifique os mercados que ela ocupa hoje e os que quer conquistar, depois cruze com as competências que já domina, as que existem mas estão subutilizadas, e as que ainda precisam ser criadas. Os territórios que emergirem desse cruzamento são os pontos onde T&D tem maior potencial de impacto.</div>
        <span class="group-td">Resultado → Portfólio de desenvolvimento com prioridade estratégica</span>
      </div>
    </div>

  </div>
</div>

---

## As três táticas possíveis

<div class="tactics-grid">
  <div class="tactic-card t-incremental">
    <div class="tactic-mini">
      <div class="m on"></div><div class="m on"></div><div class="m"></div>
      <div class="m on"></div><div class="m"></div><div class="m"></div>
      <div class="m on"></div><div class="m"></div><div class="m"></div>
    </div>
    <div class="tc-label">Tática 01</div>
    <div class="tc-name">Incremental</div>
    <div class="tc-desc">Esforço de transformação concentrado no core business e competências adjacentes. Menor risco, resultados mais rápidos.</div>
  </div>
  <div class="tactic-card t-balanceada">
    <div class="tactic-mini">
      <div class="m on"></div><div class="m on"></div><div class="m"></div>
      <div class="m on"></div><div class="m on"></div><div class="m"></div>
      <div class="m on"></div><div class="m"></div><div class="m"></div>
    </div>
    <div class="tc-label">Tática 02</div>
    <div class="tc-name">Balanceada</div>
    <div class="tc-desc">Contempla exploração de novos modelos e competências, com apostas em territórios definidos. Ambidestria real.</div>
  </div>
  <div class="tactic-card t-disruptiva">
    <div class="tactic-mini">
      <div class="m on"></div><div class="m on"></div><div class="m on"></div>
      <div class="m on"></div><div class="m on"></div><div class="m on"></div>
      <div class="m on"></div><div class="m on"></div><div class="m on"></div>
    </div>
    <div class="tc-label">Tática 03</div>
    <div class="tc-name">Disruptiva</div>
    <div class="tc-desc">Desenvolvimento e exploração de novas competências para novos mercados. Alto investimento, alto potencial de transformação.</div>
  </div>
</div>

---

## O framework completo: das escolhas estratégicas à aprendizagem

<div class="fw-layers">
  <div class="fw-layer estrategia">
    <div class="fw-layer-header">
      <span class="fw-layer-title">Gestão da Estratégia</span>
      <span class="fw-layer-tag">Alavancar + Habilitar</span>
    </div>
    <div class="fw-layer-body">
      <span class="fw-tag">Eixo Interno · Operações</span>
      <span class="fw-tag">Eixo Interno · Processos</span>
      <span class="fw-tag">Eixo Externo · Canais</span>
      <span class="fw-tag">Eixo Externo · Experiências</span>
      <span class="fw-tag">Novas Ofertas · Produtos & Serviços</span>
      <span class="fw-tag">Modelos de Negócio · Disrupção & Novos Mercados</span>
    </div>
  </div>
  <div class="fw-arrow-down">↓</div>
  <div class="fw-layer processos">
    <div class="fw-layer-header">
      <span class="fw-layer-title">Gestão de Processos</span>
    </div>
    <div class="fw-layer-body">
      <span class="fw-tag">Governança & Regulação</span>
      <span class="fw-tag">Agilidade & Sincronismo</span>
      <span class="fw-tag">Portfólio & Pipeline</span>
      <span class="fw-tag">Pesquisa & Desenvolvimento</span>
      <span class="fw-tag">Inovação Aberta</span>
      <span class="fw-tag">Parcerias & Ecossistema</span>
    </div>
  </div>
  <div class="fw-arrow-down">↓</div>
  <div class="fw-layer tecnologia">
    <div class="fw-layer-header">
      <span class="fw-layer-title">Gestão de Tecnologia</span>
      <span class="fw-layer-tag">Governança & Infraestrutura</span>
    </div>
    <div class="fw-layer-body">
      <span class="fw-tag">Serviços</span>
      <span class="fw-tag">Aplicações</span>
      <span class="fw-tag">Projetos</span>
      <span class="fw-tag">Contratações</span>
      <span class="fw-tag">Segurança</span>
      <span class="fw-tag">Planejamento</span>
      <span class="fw-tag">Qualidade</span>
    </div>
  </div>
  <div class="fw-arrow-down">↓</div>
  <div class="fw-layer pessoas">
    <div class="fw-layer-header">
      <span class="fw-layer-title">Gestão de Pessoas & Competências</span>
      <span class="fw-layer-tag">T&D atua aqui</span>
    </div>
    <div class="fw-layer-body">
      <span class="fw-tag">Competências Atuais</span>
      <span class="fw-tag">Competências em Experimentação</span>
      <span class="fw-tag">Competências em Desenvolvimento</span>
      <span class="fw-tag">Competências Futuras</span>
    </div>
  </div>
</div>

É papel do time de T&D entender, conectar e nutrir essa discussão estratégica. O desenvolvimento de competências é essencial para a capacidade de execução — ou seja, para a estratégia funcionar de verdade.

---

## Exercício: Construindo seu Playbook de T&D

Use as perguntas abaixo para rascunhar os 5 elementos da sua estratégia:

**Aspiração Vencedora**
- Qual seria o titular de uma matéria sobre o impacto do seu time de T&D daqui a 3 anos?
- Se T&D fosse extinto amanhã, o que a empresa perderia de concreto?

**Where to Play**
- Quais são os 2 ou 3 públicos onde um investimento em desenvolvimento teria o maior retorno para o negócio?
- Existem territórios onde você está presente por tradição, mas não por estratégia?

**How to Win**
- Por que um gestor de área preferiria trabalhar com T&D em vez de contratar um treinamento externo?
- O que diferencia o que vocês fazem do que qualquer empresa de treinamento poderia entregar?

**Competências do time de T&D**
- Quais habilidades o time de T&D precisa desenvolver para executar a estratégia dos próximos 3 anos?
- O time de T&D tem competências de análise de dados, tecnologia e estratégia — ou apenas de design instrucional?

**Sistemas de Gestão**
- Qual métrica de negócio está conectada diretamente ao que T&D entrega?
- Com que frequência a estratégia de T&D é revisada em função das mudanças na estratégia do negócio?

---

## Para aprofundar

- *"Playing to Win: How Strategy Really Works"* — A.G. Lafley e Roger Martin (2013)
- *"Good Strategy / Bad Strategy"* — Richard Rumelt
- HBR: *"Connecting L&D to Business Strategy"* — 2024
- [Consultora de Estratégia de Aprendizagem](../agentes/consultora-estrategia-aprendizagem/) — use o agente para desdobrar sua estratégia em um plano de ação
