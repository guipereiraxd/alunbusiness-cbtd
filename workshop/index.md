---
layout: default
title: Workshop de Estratégia de Educação Corporativa
description: Um workshop estruturado para construir, do zero, uma estratégia de educação corporativa alinhada à visão de negócios da sua empresa.
---

<style>
/* ── Hero ────────────────────────────────────────────────── */
.ws-hero {
  padding: 2.5rem 0 2rem;
  border-bottom: 1px solid var(--border-sub);
  margin-bottom: 2.5rem;
}
.ws-eyebrow {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 3px;
  text-transform: uppercase;
  color: var(--gold);
  background: var(--gold-dim);
  border: 1px solid var(--gold-border);
  border-radius: 4px;
  padding: 4px 10px;
  margin-bottom: 1.25rem;
}
.ws-title {
  font-size: clamp(1.6rem, 4vw, 2.4rem);
  font-weight: 800;
  color: var(--text-1);
  line-height: 1.15;
  margin-bottom: 1rem;
  max-width: 720px;
}
.ws-subtitle {
  font-size: 1.05rem;
  color: var(--text-2);
  line-height: 1.7;
  max-width: 660px;
  margin-bottom: 1.75rem;
}
.ws-meta {
  display: flex;
  flex-wrap: wrap;
  gap: 1.25rem;
}
.ws-meta-item {
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 0.82rem;
  color: var(--text-3);
}
.ws-meta-item strong { color: var(--text-2); font-weight: 600; }
.ws-meta-dot {
  width: 5px; height: 5px;
  border-radius: 50%;
  background: var(--gold);
  flex-shrink: 0;
}

/* ── Section label ───────────────────────────────────────── */
.ws-section {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 3px;
  text-transform: uppercase;
  color: var(--text-4);
  margin: 2.5rem 0 1.25rem;
}
.ws-section::after {
  content: "";
  flex: 1;
  height: 1px;
  background: var(--border-sub);
}

/* ── Steps ───────────────────────────────────────────────── */
.ws-steps {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
}
@media (max-width: 720px) { .ws-steps { grid-template-columns: 1fr; } }

.ws-step {
  background: var(--surface);
  border: 1px solid var(--border-sub);
  border-radius: 10px;
  padding: 1.25rem;
  display: flex;
  gap: 1rem;
  position: relative;
  overflow: hidden;
  transition: border-color 0.15s, background 0.15s;
}
.ws-step:hover {
  background: var(--surface-2);
  border-color: var(--gold-border);
}
.ws-step-num {
  font-size: 2.5rem;
  font-weight: 900;
  color: var(--border);
  line-height: 1;
  flex-shrink: 0;
  width: 2rem;
  text-align: center;
  font-variant-numeric: tabular-nums;
  transition: color 0.15s;
}
.ws-step:hover .ws-step-num { color: var(--gold-border); }
.ws-step-body {}
.ws-step-tag {
  font-size: 9px;
  font-weight: 700;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: var(--gold);
  margin-bottom: 5px;
}
.ws-step-title {
  font-size: 0.95rem;
  font-weight: 700;
  color: var(--text-1);
  line-height: 1.3;
  margin-bottom: 6px;
}
.ws-step-desc {
  font-size: 0.82rem;
  color: var(--text-3);
  line-height: 1.6;
}
.ws-step-deliverable {
  display: inline-flex;
  align-items: center;
  gap: 5px;
  font-size: 0.75rem;
  font-weight: 600;
  color: var(--text-3);
  background: var(--surface-2);
  border: 1px solid var(--border-sub);
  border-radius: 4px;
  padding: 3px 8px;
  margin-top: 10px;
}

/* ── Arquétipos ──────────────────────────────────────────── */
.ws-archetypes {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  margin-bottom: 0.5rem;
}
@media (max-width: 640px) { .ws-archetypes { grid-template-columns: 1fr; } }

.ws-archetype {
  background: var(--surface);
  border: 1px solid var(--border-sub);
  border-top: 3px solid var(--gold);
  border-radius: 8px;
  padding: 1.25rem;
}
.ws-archetype.blue { border-top-color: var(--blue); }
.ws-archetype.muted { border-top-color: var(--text-4); }
.ws-archetype-icon { font-size: 1.5rem; margin-bottom: 10px; }
.ws-archetype-title {
  font-size: 0.9rem;
  font-weight: 700;
  color: var(--text-1);
  margin-bottom: 6px;
  line-height: 1.3;
}
.ws-archetype-focus {
  font-size: 9px;
  font-weight: 700;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: var(--gold);
  margin-bottom: 8px;
}
.ws-archetype.blue .ws-archetype-focus { color: var(--blue); }
.ws-archetype.muted .ws-archetype-focus { color: var(--text-4); }
.ws-archetype-desc {
  font-size: 0.8rem;
  color: var(--text-3);
  line-height: 1.6;
}

/* ── For whom ────────────────────────────────────────────── */
.ws-for-whom {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.625rem;
  margin-bottom: 0.5rem;
}
@media (max-width: 640px) { .ws-for-whom { grid-template-columns: 1fr; } }

.ws-for-item {
  display: flex;
  align-items: flex-start;
  gap: 10px;
  background: var(--surface);
  border: 1px solid var(--border-sub);
  border-radius: 6px;
  padding: 0.875rem 1rem;
  font-size: 0.85rem;
  color: var(--text-2);
  line-height: 1.5;
}
.ws-for-dot {
  width: 6px; height: 6px;
  border-radius: 50%;
  background: var(--gold);
  flex-shrink: 0;
  margin-top: 5px;
}

/* ── Outcomes ────────────────────────────────────────────── */
.ws-outcomes {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0.75rem;
  margin-bottom: 0.5rem;
}
@media (max-width: 640px) { .ws-outcomes { grid-template-columns: 1fr; } }

.ws-outcome {
  background: var(--surface);
  border: 1px solid var(--border-sub);
  border-radius: 8px;
  padding: 1rem;
}
.ws-outcome-icon { font-size: 1.25rem; margin-bottom: 8px; }
.ws-outcome-text {
  font-size: 0.82rem;
  color: var(--text-2);
  line-height: 1.55;
  font-weight: 500;
}

/* ── CTA ─────────────────────────────────────────────────── */
.ws-cta {
  margin-top: 3rem;
  background: linear-gradient(135deg, #1a1811 0%, #111009 100%);
  border: 1px solid var(--gold-border);
  border-radius: 12px;
  padding: 2.5rem 2rem;
  text-align: center;
  position: relative;
  overflow: hidden;
}
.ws-cta::before {
  content: "";
  position: absolute;
  top: 0; left: 0; right: 0;
  height: 3px;
  background: linear-gradient(90deg, var(--gold), rgba(209,164,118,0.3));
}
.ws-cta-title {
  font-size: 1.5rem;
  font-weight: 800;
  color: #ffffff;
  margin-bottom: 0.75rem;
  line-height: 1.25;
}
.ws-cta-sub {
  font-size: 0.95rem;
  color: rgba(255,255,255,0.62);
  max-width: 480px;
  margin: 0 auto 1.75rem;
  line-height: 1.6;
}
.ws-cta-btn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: #ffffff;
  color: #0f0f0f;
  font-size: 0.95rem;
  font-weight: 800;
  text-decoration: none;
  border-radius: 6px;
  padding: 14px 28px;
  letter-spacing: 0.3px;
  transition: background 0.15s, transform 0.1s;
}
.ws-cta-btn:hover { background: #f0ede8; transform: translateY(-1px); color: #0f0f0f; }
.ws-cta-btn svg { width: 16px; height: 16px; fill: currentColor; flex-shrink: 0; }
.ws-cta-note {
  margin-top: 1rem;
  font-size: 0.75rem;
  color: var(--text-4);
}
</style>

<div class="ws-hero">
  <div class="ws-eyebrow">Alura Para Empresas · Workshop</div>
  <h1 class="ws-title">Workshop de Estratégia de Educação Corporativa</h1>
  <p class="ws-subtitle">
    Um workshop prático e facilitado para construir, do zero, uma estratégia de educação corporativa real — alinhada à visão de negócios da sua empresa, com entregáveis concretos ao final de cada etapa.
  </p>
  <div class="ws-meta">
    <div class="ws-meta-item"><div class="ws-meta-dot"></div><strong>6 módulos</strong> práticos e sequenciais</div>
    <div class="ws-meta-item"><div class="ws-meta-dot"></div>Facilitado com <strong>agentes de IA</strong> especializados</div>
    <div class="ws-meta-item"><div class="ws-meta-dot"></div>Entregável ao final: <strong>estratégia + roadmap</strong></div>
    <div class="ws-meta-item"><div class="ws-meta-dot"></div>Para times de <strong>RH, T&D e liderança</strong></div>
  </div>
</div>

<div class="ws-section">Os 6 módulos do workshop</div>

<div class="ws-steps">

<div class="ws-step">
  <div class="ws-step-num">1</div>
  <div class="ws-step-body">
    <div class="ws-step-tag">Estratégia & Tecnologia</div>
    <div class="ws-step-title">Horizontes de Impacto Tecnológico</div>
    <div class="ws-step-desc">Mapeamos as inflexões e tendências tecnológicas que devem impactar o negócio nos próximos 1, 5 e 10 anos — identificando o que precisa ser aprendido agora para não chegar tarde demais.</div>
    <div class="ws-step-deliverable">↳ Mapa de tendências por horizonte de tempo</div>
  </div>
</div>

<div class="ws-step">
  <div class="ws-step-num">2</div>
  <div class="ws-step-body">
    <div class="ws-step-tag">Posicionamento Estratégico</div>
    <div class="ws-step-title">Táticas de Transformação</div>
    <div class="ws-step-desc">Definimos os territórios de atuação da empresa — o que é necessário para operar e vencer em cada área — e identificamos as principais alavancas de inovação disponíveis.</div>
    <div class="ws-step-deliverable">↳ Táticas de Transformação da Empresa</div>
  </div>
</div>

<div class="ws-step">
  <div class="ws-step-num">3</div>
  <div class="ws-step-body">
    <div class="ws-step-tag">Educação Corporativa</div>
    <div class="ws-step-title">Estratégia de Educação Alinhada ao Negócio</div>
    <div class="ws-step-desc">Traduzimos a visão estratégica em uma agenda de competências — mapeando quais habilidades tecnológicas precisam ser desenvolvidas e em qual nível de maturidade cada uma se encontra hoje.</div>
    <div class="ws-step-deliverable">↳ Mapa de competências prioritárias</div>
  </div>
</div>

<div class="ws-step">
  <div class="ws-step-num">4</div>
  <div class="ws-step-body">
    <div class="ws-step-tag">Design de Aprendizagem</div>
    <div class="ws-step-title">Práticas de Aprendizagem e Planos de Capacitação</div>
    <div class="ws-step-desc">Criamos os programas de desenvolvimento para as áreas prioritárias — definindo formatos, públicos, ritmo de capacitação e indicadores de sucesso para cada trilha.</div>
    <div class="ws-step-deliverable">↳ Canvas de capacitação por área</div>
  </div>
</div>

<div class="ws-step">
  <div class="ws-step-num">5</div>
  <div class="ws-step-body">
    <div class="ws-step-tag">Inovação</div>
    <div class="ws-step-title">Projeto de Inovação Transformador</div>
    <div class="ws-step-desc">Estruturamos um projeto concreto de inovação orientado à visão estratégica — com problema, solução, proposta de valor, métricas de sucesso e plano de engajamento dos usuários internos.</div>
    <div class="ws-step-deliverable">↳ Canvas de projeto de inovação</div>
  </div>
</div>

<div class="ws-step">
  <div class="ws-step-num">6</div>
  <div class="ws-step-body">
    <div class="ws-step-tag">Execução</div>
    <div class="ws-step-title">Roadmap de Ações Estruturais</div>
    <div class="ws-step-desc">Organizamos todos os projetos e iniciativas em uma linha do tempo realista, segmentada por perfil de público — lideranças, áreas específicas e iniciativas gerais — com priorização clara.</div>
    <div class="ws-step-deliverable">↳ Roadmap de ativações pronto para execução</div>
  </div>
</div>

</div>

<div class="ws-section">Como organizamos as iniciativas de aprendizagem</div>

<p style="font-size:0.9rem;color:var(--text-3);line-height:1.65;margin-bottom:1.25rem;max-width:680px;">
Cada iniciativa de aprendizagem que construímos no workshop é classificada por seu arquétipo de impacto — garantindo que o portfólio de T&D cubra os três horizontes estratégicos da organização ao mesmo tempo.
</p>

<div class="ws-archetypes">

<div class="ws-archetype">
  <div class="ws-archetype-icon">⚡</div>
  <div class="ws-archetype-focus">Foco em Performance</div>
  <div class="ws-archetype-title">Sustentar a Operação Atual</div>
  <div class="ws-archetype-desc">Capacitações que maximizam a performance individual e coletiva no modelo de operação existente — mantendo o negócio funcionando com excelência enquanto a transformação avança.</div>
</div>

<div class="ws-archetype blue">
  <div class="ws-archetype-icon">🔄</div>
  <div class="ws-archetype-focus">Foco em Transformação</div>
  <div class="ws-archetype-title">Preparar a Próxima Etapa</div>
  <div class="ws-archetype-desc">Capacitações ligadas à transformação institucional e ao preparo de novas estratégias — desenvolvendo as competências que o negócio precisará nos próximos 2 a 5 anos.</div>
</div>

<div class="ws-archetype muted">
  <div class="ws-archetype-icon">🚀</div>
  <div class="ws-archetype-focus">Foco em Inovação</div>
  <div class="ws-archetype-title">Habilitar Novos Territórios</div>
  <div class="ws-archetype-desc">Capacitações que habilitam a exploração de novos territórios e inovação disruptiva — preparando a organização para competir em espaços que ainda não existem hoje.</div>
</div>

</div>

<div class="ws-section">Para quem é este workshop</div>

<div class="ws-for-whom">
  <div class="ws-for-item"><div class="ws-for-dot"></div>Diretores e gerentes de RH e T&D que precisam conectar a agenda de aprendizagem à estratégia do negócio</div>
  <div class="ws-for-item"><div class="ws-for-dot"></div>CHROs e líderes de Pessoas que estão construindo ou revisando a estratégia de educação corporativa</div>
  <div class="ws-for-item"><div class="ws-for-dot"></div>Times de T&D que já têm iniciativas em andamento mas precisam de um framework estratégico para organizá-las</div>
  <div class="ws-for-item"><div class="ws-for-dot"></div>Empresas em processo de transformação digital que precisam alinhar desenvolvimento de pessoas à nova visão tecnológica</div>
  <div class="ws-for-item"><div class="ws-for-dot"></div>Lideranças que querem sair do workshop com um roadmap de ações estruturais pronto para apresentar ao board</div>
  <div class="ws-for-item"><div class="ws-for-dot"></div>Organizações de qualquer porte e setor — o framework é adaptado ao contexto e maturidade de cada empresa</div>
</div>

<div class="ws-section">O que sua empresa leva ao final</div>

<div class="ws-outcomes">
  <div class="ws-outcome">
    <div class="ws-outcome-icon">🗺️</div>
    <div class="ws-outcome-text">Mapa de tendências tecnológicas com impacto direto no seu negócio nos próximos 10 anos</div>
  </div>
  <div class="ws-outcome">
    <div class="ws-outcome-icon">🎯</div>
    <div class="ws-outcome-text">Estratégia educacional alinhada às licenças estratégicas e competências prioritárias da empresa</div>
  </div>
  <div class="ws-outcome">
    <div class="ws-outcome-icon">📋</div>
    <div class="ws-outcome-text">Canvas de capacitação por área com formatos, públicos e indicadores de sucesso definidos</div>
  </div>
  <div class="ws-outcome">
    <div class="ws-outcome-icon">💡</div>
    <div class="ws-outcome-text">Projeto de inovação estruturado, com proposta de valor e métricas de sucesso</div>
  </div>
  <div class="ws-outcome">
    <div class="ws-outcome-icon">📅</div>
    <div class="ws-outcome-text">Roadmap de ativações priorizado, segmentado por público e pronto para execução</div>
  </div>
  <div class="ws-outcome">
    <div class="ws-outcome-icon">🤖</div>
    <div class="ws-outcome-text">Acesso aos agentes de IA especializados usados durante o workshop para acelerar cada etapa</div>
  </div>
</div>

<div class="ws-cta">
  <div class="ws-cta-title">Leve este workshop para a sua empresa</div>
  <p class="ws-cta-sub">Facilitamos o processo com o seu time — do diagnóstico estratégico ao roadmap de execução. Entre em contato e vamos conversar sobre como adaptar o workshop ao contexto da sua organização.</p>
  <a class="ws-cta-btn" href="https://empresas.alura.com.br/edu-corp-workshop" target="_blank" rel="noopener">
    <svg viewBox="0 0 24 24"><path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>
    Quero um workshop deste na minha empresa
  </a>
  <div class="ws-cta-note">Alura Para Empresas · aluraparaempresas.com.br</div>
</div>
