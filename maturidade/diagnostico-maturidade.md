---
layout: default
title: "Modelo de Maturidade de Educação Corporativa"
---

<style>

/* ─── Page intro ─────────────────────────────────────── */
.mjb-page-title {
  font-size: 1.5rem;
  font-weight: 800;
  color: var(--text-1);
  line-height: 1.3;
  margin-bottom: 12px;
}
.mjb-intro {
  font-size: 0.9375rem;
  color: var(--text-3);
  line-height: 1.75;
  max-width: 600px;
  margin-bottom: 40px;
}
.mjb-intro em { font-style: italic; color: var(--text-4); }

/* ─── Assessment shell ──────────────────────────────── */
.ass-wrap {
  margin-bottom: 56px;
  border: 1px solid var(--border);
  border-radius: 16px;
  background: var(--surface);
  overflow: hidden;
}
.ass-head {
  padding: 28px 28px 24px;
  border-bottom: 1px solid var(--border-sub);
}
.ass-eyebrow {
  font-size: 9px;
  font-weight: 700;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--gold);
  opacity: 0.75;
  margin-bottom: 8px;
}
.ass-title {
  font-size: 1.125rem;
  font-weight: 800;
  color: var(--text-1);
  margin-bottom: 8px;
}
.ass-desc {
  font-size: 0.875rem;
  color: var(--text-4);
  line-height: 1.6;
}
.ass-prog-wrap {
  height: 2px;
  background: var(--border-sub);
}
.ass-prog {
  height: 2px;
  background: var(--gold);
  width: 0%;
  transition: width 0.4s ease;
}
.ass-body {
  padding: 28px;
}
.ass-q-count {
  font-size: 9px;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--text-5);
  margin-bottom: 12px;
}
.ass-q-text {
  font-size: 1rem;
  font-weight: 700;
  color: var(--text-1);
  line-height: 1.55;
  margin-bottom: 20px;
}
.ass-options {
  display: flex;
  flex-direction: column;
  gap: 8px;
}
.ass-opt {
  display: flex;
  align-items: flex-start;
  gap: 14px;
  padding: 12px 16px;
  border: 1px solid var(--border-sub);
  border-radius: 10px;
  cursor: pointer;
  background: transparent;
  text-align: left;
  width: 100%;
  font-family: inherit;
  transition: border-color 0.15s, background 0.15s;
}
.ass-opt:hover { border-color: var(--border); background: var(--tint-3); }
.ass-opt.sel { border-color: var(--gold); background: var(--gold-dim); }
.ass-opt-badge {
  width: 22px;
  height: 22px;
  border-radius: 50%;
  border: 1.5px solid var(--border);
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 1px;
  font-size: 10px;
  font-weight: 700;
  color: var(--text-5);
  transition: all 0.15s;
}
.ass-opt.sel .ass-opt-badge { background: var(--gold); border-color: var(--gold); color: #000; }
.ass-opt-label {
  font-size: 0.875rem;
  color: var(--text-3);
  line-height: 1.55;
}
.ass-opt.sel .ass-opt-label { color: var(--text-1); }
.ass-nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 28px;
  border-top: 1px solid var(--border-sub);
}
.ass-btn {
  padding: 9px 20px;
  border-radius: 8px;
  font-size: 0.875rem;
  font-weight: 700;
  cursor: pointer;
  font-family: inherit;
  transition: all 0.15s;
  border: 1.5px solid transparent;
}
.ass-btn-sec {
  background: transparent;
  color: var(--text-4);
  border-color: var(--border);
}
.ass-btn-sec:hover:not(:disabled) { color: var(--text-2); background: var(--tint-5); }
.ass-btn-sec:disabled { opacity: 0.25; cursor: not-allowed; }
.ass-btn-pri {
  background: var(--gold);
  color: var(--on-gold);
  border-color: var(--gold);
}
.ass-btn-pri:hover:not(:disabled) { opacity: 0.88; }
.ass-btn-pri:disabled { opacity: 0.3; cursor: not-allowed; }

/* Result */
.ass-result { padding: 32px 28px; }
.ass-res-label {
  font-size: 9px;
  font-weight: 700;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--text-5);
  margin-bottom: 6px;
}
.ass-res-level {
  font-size: 1.375rem;
  font-weight: 800;
  line-height: 1.25;
  margin-bottom: 8px;
}
.ass-res-tagline {
  font-size: 0.9375rem;
  font-style: italic;
  color: var(--text-4);
  line-height: 1.65;
  margin-bottom: 24px;
}
.ass-res-bar-wrap {
  height: 5px;
  background: var(--border-sub);
  border-radius: 3px;
  margin-bottom: 28px;
  overflow: hidden;
}
.ass-res-bar {
  height: 5px;
  border-radius: 3px;
  width: 0%;
  transition: width 0.9s ease;
}
.ass-res-chars-title {
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--text-5);
  margin-bottom: 12px;
}
.ass-res-char {
  display: flex;
  gap: 12px;
  padding: 9px 0;
  border-bottom: 1px solid var(--border-sub);
  align-items: flex-start;
}
.ass-res-char:last-child { border-bottom: none; }
.ass-res-char-dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  margin-top: 7px;
  flex-shrink: 0;
}
.ass-res-char-text {
  font-size: 0.875rem;
  color: var(--text-3);
  line-height: 1.55;
}
.ass-res-block {
  padding: 14px 16px;
  border: 1px solid var(--border);
  border-radius: 10px;
  background: var(--tint-3);
  margin: 20px 0 20px;
}
.ass-res-block-lbl {
  font-size: 9px;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--text-5);
  margin-bottom: 6px;
}
.ass-res-block-txt {
  font-size: 0.875rem;
  color: var(--text-3);
  line-height: 1.65;
}
.ass-res-block-txt strong { color: var(--text-2); }
.ass-restart {
  background: transparent;
  border: 1px solid var(--border);
  color: var(--text-4);
  padding: 8px 16px;
  border-radius: 8px;
  font-size: 0.8125rem;
  cursor: pointer;
  font-family: inherit;
  transition: all 0.15s;
}
.ass-restart:hover { color: var(--text-2); }

/* ─── Level cards ───────────────────────────────────── */
.mjb-sec-label {
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--text-5);
  margin-bottom: 16px;
}
.mjb-levels {
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 48px;
}
.mjb-level {
  border: 1px solid var(--border);
  border-radius: 12px;
  background: var(--surface);
  overflow: hidden;
}
.mjb-l1 { border-color: rgba(255,100,100,0.18); }
.mjb-l2 { border-color: rgba(240,176,64,0.18); }
.mjb-l3 { border-color: rgba(75,106,252,0.18); }
.mjb-l4 { border-color: rgba(209,164,118,0.22); }
.mjb-lv-head {
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 18px 22px 16px;
}
.mjb-lv-num {
  width: 34px;
  height: 34px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 13px;
  font-weight: 800;
  flex-shrink: 0;
}
.mjb-l1 .mjb-lv-num { background: rgba(255,100,100,0.15); color: #ff6464; }
.mjb-l2 .mjb-lv-num { background: rgba(240,176,64,0.15); color: #f0b040; }
.mjb-l3 .mjb-lv-num { background: rgba(75,106,252,0.18); color: #4b6afc; }
.mjb-l4 .mjb-lv-num { background: rgba(209,164,118,0.18); color: var(--gold); }
.mjb-lv-name {
  font-size: 0.9375rem;
  font-weight: 700;
  color: var(--text-1);
}
.mjb-lv-pct {
  margin-left: auto;
  font-size: 10px;
  font-weight: 600;
  color: var(--text-5);
  white-space: nowrap;
}
.mjb-lv-quote {
  font-size: 0.8125rem;
  font-style: italic;
  color: var(--text-4);
  line-height: 1.6;
  padding: 0 22px 14px;
}
.mjb-lv-body {
  padding: 14px 22px 18px;
  border-top: 1px solid var(--border-sub);
}
.mjb-lv-chars {
  list-style: none;
  padding: 0;
  margin: 0 0 10px;
}
.mjb-lv-chars li {
  font-size: 0.875rem;
  color: var(--text-3);
  line-height: 1.6;
  padding: 3px 0 3px 18px;
  position: relative;
}
.mjb-lv-chars li::before {
  content: '→';
  position: absolute;
  left: 0;
  color: var(--text-5);
  font-size: 11px;
  top: 5px;
}
.mjb-lv-block {
  font-size: 0.8125rem;
  color: var(--text-4);
  line-height: 1.6;
  padding: 10px 14px;
  background: var(--tint-3);
  border: 1px solid var(--border-sub);
  border-radius: 8px;
}
.mjb-lv-block strong { color: var(--text-3); }

/* ─── Ecosystem ─────────────────────────────────────── */
.mjb-eco {
  margin-bottom: 48px;
}
.mjb-eco-items {
  display: flex;
  flex-direction: column;
}
.mjb-eco-item {
  display: grid;
  grid-template-columns: 28px 1fr;
  gap: 16px;
  padding: 16px 0;
  border-bottom: 1px solid var(--border-sub);
  align-items: start;
}
.mjb-eco-item:last-child { border-bottom: none; }
.mjb-eco-n {
  font-size: 10px;
  font-weight: 700;
  color: var(--gold);
  opacity: 0.55;
  margin-top: 4px;
}
.mjb-eco-txt {
  font-size: 0.875rem;
  color: var(--text-3);
  line-height: 1.65;
}
.mjb-eco-txt strong { color: var(--text-2); }

/* ─── Reflexão box ──────────────────────────────────── */
.mjb-reflex {
  margin-bottom: 48px;
  padding: 22px 22px 18px;
  border: 1px solid var(--border-sub);
  border-radius: 12px;
  background: var(--tint-3);
}
.mjb-reflex-eyebrow {
  font-size: 9px;
  font-weight: 700;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--text-5);
  margin-bottom: 6px;
}
.mjb-reflex-title {
  font-size: 0.9375rem;
  font-weight: 700;
  color: var(--text-2);
  margin-bottom: 4px;
}
.mjb-reflex-desc {
  font-size: 0.8125rem;
  color: var(--text-4);
  line-height: 1.6;
  margin-bottom: 22px;
}
.mjb-reflex-group { margin-bottom: 20px; }
.mjb-reflex-group:last-child { margin-bottom: 0; }
.mjb-reflex-gtitle {
  font-size: 9px;
  font-weight: 700;
  letter-spacing: 0.11em;
  text-transform: uppercase;
  color: var(--text-5);
  margin-bottom: 10px;
}
.mjb-reflex-item {
  font-size: 0.8125rem;
  color: var(--text-4);
  line-height: 1.6;
  padding: 4px 0 4px 18px;
  position: relative;
}
.mjb-reflex-item::before {
  content: '○';
  position: absolute;
  left: 0;
  color: var(--text-5);
  font-size: 9px;
  top: 6px;
}

/* ─── References ────────────────────────────────────── */
.mjb-refs-lbl {
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--text-5);
  margin-bottom: 10px;
}
.mjb-ref {
  font-size: 0.8125rem;
  color: var(--text-4);
  line-height: 1.8;
}

</style>

<h1 class="mjb-page-title">Modelo de Maturidade de Educação Corporativa</h1>

<p class="mjb-intro">Josh Bersin, um dos maiores pesquisadores de aprendizagem organizacional do mundo, desenvolveu um modelo que descreve como as organizações evoluem em sua capacidade de aprender e desenvolver pessoas. <em>Não existe nível "certo" — existe o nível em que sua empresa está e o próximo passo mais relevante.</em></p>

<!-- ── ASSESSMENT ────────────────────────────────────── -->
<div class="ass-wrap" id="assessment">
  <div class="ass-head">
    <div class="ass-eyebrow">Diagnóstico Interativo</div>
    <div class="ass-title">Em qual nível está sua empresa?</div>
    <div class="ass-desc">10 perguntas rápidas. Escolha a alternativa que melhor descreve a realidade da sua organização hoje — não como você gostaria que ela fosse.</div>
  </div>
  <div class="ass-prog-wrap"><div class="ass-prog" id="assProg"></div></div>
  <div class="ass-body" id="assBody"></div>
  <div class="ass-nav" id="assNav">
    <button class="ass-btn ass-btn-sec" id="assPrev" disabled onclick="assNav(-1)">← Anterior</button>
    <button class="ass-btn ass-btn-pri" id="assNext" disabled onclick="assNav(1)">Próxima →</button>
  </div>
</div>

<!-- ── OS 4 NÍVEIS ───────────────────────────────────── -->
<p class="mjb-sec-label">Os 4 Níveis de Maturidade</p>

<div class="mjb-levels">

  <div class="mjb-level mjb-l1">
    <div class="mjb-lv-head">
      <div class="mjb-lv-num">1</div>
      <div class="mjb-lv-name">Transacional &amp; Essencial</div>
      <div class="mjb-lv-pct">15% das empresas</div>
    </div>
    <div class="mjb-lv-quote">"T&amp;D é reativo e pode perder oportunidades de direcionar valor estratégico."</div>
    <div class="mjb-lv-body">
      <ul class="mjb-lv-chars">
        <li>Iniciativas de aprendizagem são tratadas como eventos isolados</li>
        <li>T&amp;D existe para cumprir obrigações — compliance, onboarding básico</li>
        <li>O aprendizado é visto como "meio para atingir um fim", não como estratégia</li>
        <li>Pouca ou nenhuma conexão com os objetivos do negócio</li>
      </ul>
      <div class="mjb-lv-block"><strong>O que impede a evolução:</strong> falta de patrocínio executivo e ausência de métricas que conectem aprendizagem a resultado de negócio.</div>
    </div>
  </div>

  <div class="mjb-level mjb-l2">
    <div class="mjb-lv-head">
      <div class="mjb-lv-num">2</div>
      <div class="mjb-lv-name">Estabelecida &amp; Florescendo</div>
      <div class="mjb-lv-pct">38% das empresas</div>
    </div>
    <div class="mjb-lv-quote">"T&amp;D começa a desenvolver competências estratégicas para a empresa."</div>
    <div class="mjb-lv-body">
      <ul class="mjb-lv-chars">
        <li>Atividades de aprendizagem ainda são separadas do "trabalho real"</li>
        <li>Começa a haver intencionalidade — desenvolvimento de competências identificadas como estratégicas</li>
        <li>Visão mais ampla sobre o papel do desenvolvimento</li>
        <li>Primeiros esforços de medir impacto além da satisfação dos participantes</li>
      </ul>
      <div class="mjb-lv-block"><strong>O que impede a evolução:</strong> silos entre T&amp;D e as áreas de negócio; falta de dados sobre competências existentes.</div>
    </div>
  </div>

  <div class="mjb-level mjb-l3">
    <div class="mjb-lv-head">
      <div class="mjb-lv-num">3</div>
      <div class="mjb-lv-name">Compreensiva &amp; Escalando</div>
      <div class="mjb-lv-pct">35% das empresas</div>
    </div>
    <div class="mjb-lv-quote">"T&amp;D está intrínseca com as operações cotidianas e consegue atuar em frentes de diferenciação do negócio."</div>
    <div class="mjb-lv-body">
      <ul class="mjb-lv-chars">
        <li>Cultura de educação contínua começa a se instalar</li>
        <li>Programas de aprendizagem têm escala — chegam a mais pessoas de forma mais eficiente</li>
        <li>T&amp;D atua como parceiro estratégico das áreas de negócio</li>
        <li>Aprendizagem é reconhecida como vantagem competitiva</li>
      </ul>
      <div class="mjb-lv-block"><strong>O que impede a evolução:</strong> liderança que ainda vê aprendizagem como custo, não como investimento; dificuldade de personalização em escala.</div>
    </div>
  </div>

  <div class="mjb-level mjb-l4">
    <div class="mjb-lv-head">
      <div class="mjb-lv-num">4</div>
      <div class="mjb-lv-name">Ágil &amp; Indispensável</div>
      <div class="mjb-lv-pct">12% das empresas</div>
    </div>
    <div class="mjb-lv-quote">"T&amp;D antecipa e atua diretamente com os desejos e necessidades do mercado e dos colaboradores, com visão de longo prazo estratégica."</div>
    <div class="mjb-lv-body">
      <ul class="mjb-lv-chars">
        <li>Aprendizagem contínua é atividade crítica para o curto e longo prazo</li>
        <li>T&amp;D antecipa demandas — não apenas responde a elas</li>
        <li>O aprendizado é "invisível" — integrado ao fluxo de trabalho</li>
        <li>Métricas de T&amp;D estão conectadas às métricas de negócio</li>
      </ul>
    </div>
  </div>

</div>

<!-- ── ECOSSISTEMAS MADUROS ──────────────────────────── -->
<div class="mjb-eco">
  <p class="mjb-sec-label" style="margin-bottom:16px;">Características de ecossistemas maduros (Níveis 3 e 4)</p>
  <div class="mjb-eco-items">
    <div class="mjb-eco-item">
      <div class="mjb-eco-n">01</div>
      <div class="mjb-eco-txt"><strong>Domínio elevado das competências do core-business</strong> — organizações que conseguem incorporar novas competências emergentes são aquelas que já atuam com excelência em suas atividades de T&amp;D ligadas ao negócio atual.</div>
    </div>
    <div class="mjb-eco-item">
      <div class="mjb-eco-n">02</div>
      <div class="mjb-eco-txt"><strong>Conexão com as áreas de negócio e a realidade das pessoas</strong> — as organizações com maior maturidade conseguem orientar suas atividades de T&amp;D com o cotidiano e as diversas realidades dos colaboradores.</div>
    </div>
    <div class="mjb-eco-item">
      <div class="mjb-eco-n">03</div>
      <div class="mjb-eco-txt"><strong>Aprendizado "invisível" com direcionamento</strong> — ecossistemas maduros fornecem recursos e orientações para que as pessoas tenham experiências de aprendizagem proativas, além dos momentos orquestrados.</div>
    </div>
    <div class="mjb-eco-item">
      <div class="mjb-eco-n">04</div>
      <div class="mjb-eco-txt"><strong>Mecanismos de incentivo e carreira alinhados ao aprendizado</strong> — as empresas mais bem-sucedidas têm metas e mecanismos claros de incentivo para que o aprendizado faça parte do conjunto de comportamentos esperados.</div>
    </div>
    <div class="mjb-eco-item">
      <div class="mjb-eco-n">05</div>
      <div class="mjb-eco-txt"><strong>Liderança comprometida com aprendizado</strong> — o papel dos líderes é essencial para criar o design do mindset dos colaboradores em relação aos esforços de aprendizagem.</div>
    </div>
  </div>
</div>

<!-- ── REFLEXÃO ──────────────────────────────────────── -->
<div class="mjb-reflex">
  <div class="mjb-reflex-eyebrow">Para aprofundar a reflexão</div>
  <div class="mjb-reflex-title">Perguntas de Autodiagnóstico</div>
  <div class="mjb-reflex-desc">Use estas perguntas para contrastar com seu resultado e identificar onde concentrar o esforço de evolução.</div>

  <div class="mjb-reflex-group">
    <div class="mjb-reflex-gtitle">Nível 1 — Transacional</div>
    <div class="mjb-reflex-item">Nossos programas de T&amp;D existem principalmente para compliance ou porque "sempre foram assim"</div>
    <div class="mjb-reflex-item">T&amp;D é acionado depois que um problema de competência já virou crise</div>
    <div class="mjb-reflex-item">Não temos métricas claras de impacto dos programas de aprendizagem</div>
  </div>

  <div class="mjb-reflex-group">
    <div class="mjb-reflex-gtitle">Nível 2 — Estabelecida</div>
    <div class="mjb-reflex-item">Temos programas de desenvolvimento para competências estratégicas, mas eles funcionam separados do trabalho do dia a dia</div>
    <div class="mjb-reflex-item">T&amp;D começa a ser convidado para conversas estratégicas, mas ainda não de forma sistemática</div>
    <div class="mjb-reflex-item">Medimos satisfação dos participantes, mas raramente o impacto no negócio</div>
  </div>

  <div class="mjb-reflex-group">
    <div class="mjb-reflex-gtitle">Nível 3 — Compreensiva</div>
    <div class="mjb-reflex-item">As áreas de negócio nos procuram proativamente para desenvolver soluções de aprendizagem</div>
    <div class="mjb-reflex-item">Temos programas que chegam a toda a empresa com consistência</div>
    <div class="mjb-reflex-item">Aprendizagem faz parte da rotina dos colaboradores, não apenas de eventos pontuais</div>
  </div>

  <div class="mjb-reflex-group">
    <div class="mjb-reflex-gtitle">Nível 4 — Ágil</div>
    <div class="mjb-reflex-item">Antecipamos necessidades de competência antes que as áreas de negócio as articulem</div>
    <div class="mjb-reflex-item">Nossas métricas de T&amp;D estão conectadas diretamente às métricas de resultado do negócio</div>
    <div class="mjb-reflex-item">A liderança inclui T&amp;D nas discussões estratégicas como parte natural do processo</div>
  </div>
</div>

<!-- ── REFERÊNCIAS ───────────────────────────────────── -->
<p class="mjb-refs-lbl">Referências</p>
<p class="mjb-ref">Josh Bersin Company: <em>The Definitive Guide to Learning Experience Platforms</em> — 2025</p>
<p class="mjb-ref">Josh Bersin: <em>Irresistible: The Seven Secrets of the World's Most Enduring, Employee-Focused Organizations</em></p>
<p class="mjb-ref">Deloitte: <em>Global Human Capital Trends 2025</em></p>

<!-- ── ASSESSMENT SCRIPT ─────────────────────────────── -->
<script>
(function () {

  var questions = [
    {
      text: "Como T&D é normalmente acionado na sua organização?",
      opts: [
        { label: "Quando surge uma crise de competência ou existe uma obrigação a cumprir", score: 1 },
        { label: "Quando uma área de negócio percebe e articula uma lacuna", score: 2 },
        { label: "De forma planejada, com base em diagnósticos periódicos junto às áreas", score: 3 },
        { label: "Antecipamos as necessidades antes mesmo que as áreas as articulem", score: 4 }
      ]
    },
    {
      text: "Como vocês medem o impacto dos programas de aprendizagem?",
      opts: [
        { label: "Não medimos — ou apenas coletamos satisfação dos participantes", score: 1 },
        { label: "Medimos satisfação e taxa de conclusão, com algumas métricas de aprendizado", score: 2 },
        { label: "Medimos mudança de comportamento e conectamos com algumas métricas de negócio", score: 3 },
        { label: "Nossas métricas de T&D estão integradas diretamente às métricas de resultado do negócio", score: 4 }
      ]
    },
    {
      text: "Qual é o papel de T&D nas decisões estratégicas da empresa?",
      opts: [
        { label: "Somos acionados após as decisões — executamos o que foi definido por outros", score: 1 },
        { label: "Somos consultados às vezes, mas de forma não sistemática", score: 2 },
        { label: "Participamos regularmente das conversas de planejamento com as áreas", score: 3 },
        { label: "T&D faz parte natural do processo de planejamento estratégico da empresa", score: 4 }
      ]
    },
    {
      text: "Como o aprendizado acontece na sua organização?",
      opts: [
        { label: "Em eventos e treinamentos pontuais, separados do trabalho cotidiano", score: 1 },
        { label: "Em eventos planejados mais algum conteúdo autodirigido disponível", score: 2 },
        { label: "Como parte da rotina, com programas estruturados e consistentes no dia a dia", score: 3 },
        { label: "Está integrado ao fluxo de trabalho — a maioria nem percebe que está aprendendo", score: 4 }
      ]
    },
    {
      text: "O que melhor descreve o portfólio principal de T&D hoje?",
      opts: [
        { label: "Compliance, onboarding e treinamentos obrigatórios", score: 1 },
        { label: "Programas de desenvolvimento das competências identificadas como estratégicas", score: 2 },
        { label: "Iniciativas escaláveis que chegam de forma consistente a toda a organização", score: 3 },
        { label: "Soluções personalizadas em escala mais aprendizado contínuo e antecipado", score: 4 }
      ]
    },
    {
      text: "Como a liderança da empresa enxerga T&D?",
      opts: [
        { label: "Como custo operacional necessário, mas não como prioridade", score: 1 },
        { label: "Como benefício relevante para atrair e reter talentos", score: 2 },
        { label: "Como parceiro estratégico para o desenvolvimento de competências", score: 3 },
        { label: "Como fator crítico de competitividade e resultado de negócio", score: 4 }
      ]
    },
    {
      text: "Qual é a visibilidade de T&D sobre as competências da organização?",
      opts: [
        { label: "Pouca ou nenhuma visibilidade sistêmica sobre competências existentes e gaps", score: 1 },
        { label: "Identificamos algumas lacunas críticas quando há uma demanda específica", score: 2 },
        { label: "Temos mapeamento de competências atualizado e revisado regularmente", score: 3 },
        { label: "Temos visão dinâmica das competências e conseguimos antecipar gaps futuros", score: 4 }
      ]
    },
    {
      text: "Como T&D chega às pessoas da organização?",
      opts: [
        { label: "De forma pontual — quem precisa ou é obrigado participa", score: 1 },
        { label: "Com programas direcionados a grupos específicos e lideranças", score: 2 },
        { label: "Com programas que chegam de forma consistente à maioria da organização", score: 3 },
        { label: "Com soluções personalizadas que chegam a todos no momento e contexto certos", score: 4 }
      ]
    },
    {
      text: "Como é a relação de T&D com as áreas de negócio no dia a dia?",
      opts: [
        { label: "Recebemos demandas e entregamos treinamentos — relação de fornecedor interno", score: 1 },
        { label: "Temos reuniões periódicas para alinhar prioridades e calendário", score: 2 },
        { label: "As áreas nos buscam proativamente para co-desenvolver soluções", score: 3 },
        { label: "Cocriamos continuamente — T&D é parte do negócio, não fornecedor dele", score: 4 }
      ]
    },
    {
      text: "Como você descreveria a cultura de aprendizado na sua organização?",
      opts: [
        { label: "Aprender é algo que acontece em eventos específicos, fora da rotina", score: 1 },
        { label: "Há reconhecimento da importância do aprendizado, mas não é prioridade real", score: 2 },
        { label: "O aprendizado faz parte dos valores e comportamentos esperados pela empresa", score: 3 },
        { label: "Aprendizado contínuo é parte da identidade da empresa — é vantagem competitiva", score: 4 }
      ]
    }
  ];

  var levels = [
    {
      num: 1,
      name: "Transacional &amp; Essencial",
      tagline: "T&D é reativo e perde oportunidades de direcionar valor estratégico.",
      color: "#ff6464", barPct: 25,
      chars: [
        "Iniciativas de aprendizagem são tratadas como eventos isolados",
        "T&D existe principalmente para cumprir obrigações e compliance",
        "Pouca ou nenhuma conexão com os objetivos estratégicos do negócio",
        "Sem métricas claras de impacto além de presença e conclusão"
      ],
      next: "O próximo passo é construir patrocínio executivo e criar as primeiras métricas que conectem aprendizagem a resultado de negócio.",
      pct: "15% das empresas norte-americanas estão neste nível."
    },
    {
      num: 2,
      name: "Estabelecida &amp; Florescendo",
      tagline: "T&D começa a desenvolver competências estratégicas para a empresa.",
      color: "#f0b040", barPct: 50,
      chars: [
        "Programas de aprendizagem existem, mas ainda separados do trabalho real",
        "Começa a haver intencionalidade no desenvolvimento de competências estratégicas",
        "Primeiros esforços de medir impacto além da satisfação dos participantes",
        "T&D começa a ser convidado para conversas estratégicas — ainda não sistematicamente"
      ],
      next: "O próximo passo é quebrar os silos com as áreas de negócio e construir dados robustos sobre competências existentes.",
      pct: "38% das empresas norte-americanas estão neste nível."
    },
    {
      num: 3,
      name: "Compreensiva &amp; Escalando",
      tagline: "T&D está intrínseca com as operações cotidianas e atua em frentes de diferenciação do negócio.",
      color: "#4b6afc", barPct: 75,
      chars: [
        "Cultura de educação contínua começa a se instalar na organização",
        "Programas têm escala — chegam a mais pessoas de forma mais eficiente",
        "T&D atua como parceiro estratégico das áreas de negócio",
        "Aprendizagem é reconhecida como vantagem competitiva pela liderança"
      ],
      next: "O próximo passo é vencer a lógica de custo vs. investimento na liderança e desenvolver capacidade de personalização em escala.",
      pct: "35% das empresas norte-americanas estão neste nível."
    },
    {
      num: 4,
      name: "Ágil &amp; Indispensável",
      tagline: "T&D antecipa e atua diretamente com os desejos e necessidades do mercado e dos colaboradores.",
      color: "#d1a476", barPct: 100,
      chars: [
        "Aprendizagem contínua é atividade crítica para o curto e longo prazo",
        "T&D antecipa demandas — não apenas responde a elas",
        "O aprendizado é invisível — integrado ao fluxo de trabalho",
        "Métricas de T&D estão conectadas diretamente às métricas de negócio"
      ],
      next: "A organização opera como um sistema de aprendizagem contínua — T&D é parte indissociável da estratégia.",
      pct: "Apenas 12% das empresas norte-americanas chegam a este nível."
    }
  ];

  var current = 0;
  var answers = [];
  for (var i = 0; i < questions.length; i++) answers.push(null);

  function render() {
    var q = questions[current];
    var prog = document.getElementById('assProg');
    var prev = document.getElementById('assPrev');
    var next = document.getElementById('assNext');
    var body = document.getElementById('assBody');
    var isLast = current === questions.length - 1;

    prog.style.width = Math.round((current + 1) / questions.length * 100) + '%';
    prev.disabled = current === 0;
    next.disabled = answers[current] === null;
    next.textContent = isLast ? 'Ver resultado →' : 'Próxima →';

    var optsHtml = '';
    for (var j = 0; j < q.opts.length; j++) {
      var sel = answers[current] === j ? ' sel' : '';
      optsHtml += '<button class="ass-opt' + sel + '" onclick="assSelect(' + j + ')">' +
        '<div class="ass-opt-badge">' + ['A','B','C','D'][j] + '</div>' +
        '<div class="ass-opt-label">' + q.opts[j].label + '</div>' +
        '</button>';
    }

    body.innerHTML =
      '<div class="ass-q-count">Pergunta ' + (current + 1) + ' de ' + questions.length + '</div>' +
      '<div class="ass-q-text">' + q.text + '</div>' +
      '<div class="ass-options">' + optsHtml + '</div>';
  }

  window.assSelect = function (idx) {
    answers[current] = idx;
    document.getElementById('assNext').disabled = false;
    var opts = document.querySelectorAll('.ass-opt');
    for (var i = 0; i < opts.length; i++) {
      opts[i].classList.toggle('sel', i === idx);
    }
  };

  window.assNav = function (dir) {
    if (dir === 1 && current === questions.length - 1) {
      showResult();
      return;
    }
    current = Math.max(0, Math.min(questions.length - 1, current + dir));
    render();
  };

  function showResult() {
    var total = 0;
    for (var i = 0; i < questions.length; i++) {
      if (answers[i] !== null) total += questions[i].opts[answers[i]].score;
    }
    var avg = total / questions.length;
    var li = avg < 1.75 ? 0 : avg < 2.5 ? 1 : avg < 3.25 ? 2 : 3;
    var lv = levels[li];

    document.getElementById('assProg').style.width = '100%';
    document.getElementById('assNav').style.display = 'none';

    var charsHtml = '';
    for (var c = 0; c < lv.chars.length; c++) {
      charsHtml += '<div class="ass-res-char">' +
        '<div class="ass-res-char-dot" style="background:' + lv.color + '"></div>' +
        '<div class="ass-res-char-text">' + lv.chars[c] + '</div>' +
        '</div>';
    }

    document.getElementById('assBody').innerHTML =
      '<div class="ass-result">' +
        '<div class="ass-res-label">Seu resultado</div>' +
        '<div class="ass-res-level" style="color:' + lv.color + '">Nível ' + lv.num + ' — ' + lv.name + '</div>' +
        '<div class="ass-res-tagline">' + lv.tagline + '</div>' +
        '<div class="ass-res-bar-wrap"><div class="ass-res-bar" id="resBar" style="background:' + lv.color + '"></div></div>' +
        '<div class="ass-res-chars-title">Características do seu nível</div>' +
        charsHtml +
        '<div class="ass-res-block">' +
          '<div class="ass-res-block-lbl">Contexto e próximo passo</div>' +
          '<div class="ass-res-block-txt">' + lv.next + ' <strong>' + lv.pct + '</strong></div>' +
        '</div>' +
        '<button class="ass-restart" onclick="assRestart()">↺ Refazer o diagnóstico</button>' +
      '</div>';

    setTimeout(function () {
      var bar = document.getElementById('resBar');
      if (bar) bar.style.width = lv.barPct + '%';
    }, 80);
  }

  window.assRestart = function () {
    for (var i = 0; i < answers.length; i++) answers[i] = null;
    current = 0;
    document.getElementById('assNav').style.display = '';
    document.getElementById('assProg').style.width = '0%';
    render();
  };

  render();

})();
</script>
