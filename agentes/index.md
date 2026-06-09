---
layout: default
title: Agentes de IA para T&D
description: Dois GPTs especializados para mapear horizontes tecnológicos e criar estratégias de aprendizagem alinhadas ao negócio — sem conhecimento técnico.
---

<style>
/* ── Intro ───────────────────────────────────────────────── */
.ag-intro {
  font-size: 1rem;
  color: var(--text-2);
  line-height: 1.75;
  max-width: 660px;
  margin-bottom: 2.5rem;
  padding-bottom: 2rem;
  border-bottom: 1px solid var(--border-sub);
}

/* ── Section label ───────────────────────────────────────── */
.ag-section {
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
.ag-section::after {
  content: "";
  flex: 1;
  height: 1px;
  background: var(--border-sub);
}

/* ── Agent cards ─────────────────────────────────────────── */
.ag-cards {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.25rem;
  margin-bottom: 0.5rem;
}
@media (max-width: 720px) { .ag-cards { grid-template-columns: 1fr; } }

.ag-card {
  background: var(--surface);
  border: 1px solid var(--border-sub);
  border-radius: 12px;
  padding: 1.75rem;
  display: flex;
  flex-direction: column;
  gap: 0;
  position: relative;
  overflow: hidden;
  transition: border-color 0.2s, background 0.2s;
}
.ag-card::before {
  content: "";
  position: absolute;
  top: 0; left: 0; right: 0;
  height: 3px;
  background: var(--card-accent, var(--gold));
}
.ag-card:hover {
  background: var(--surface-2);
  border-color: var(--card-accent, var(--gold-border));
}

.ag-card-num {
  font-size: 9px;
  font-weight: 700;
  letter-spacing: 3px;
  text-transform: uppercase;
  color: var(--card-accent, var(--gold));
  margin-bottom: 1rem;
}
.ag-card-icon {
  font-size: 2rem;
  margin-bottom: 1rem;
  line-height: 1;
}
.ag-card-title {
  font-size: 1.2rem;
  font-weight: 800;
  color: var(--text-1);
  line-height: 1.25;
  margin-bottom: 0.625rem;
}
.ag-card-role {
  font-size: 0.78rem;
  font-weight: 600;
  color: var(--card-accent, var(--gold));
  background: var(--card-dim, var(--gold-dim));
  border: 1px solid var(--card-border, var(--gold-border));
  border-radius: 4px;
  padding: 3px 9px;
  display: inline-block;
  margin-bottom: 1rem;
}
.ag-card-desc {
  font-size: 0.875rem;
  color: var(--text-2);
  line-height: 1.65;
  margin-bottom: 1.25rem;
  flex: 1;
}
.ag-card-outputs {
  margin-bottom: 1.5rem;
}
.ag-card-outputs-label {
  font-size: 9px;
  font-weight: 700;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: var(--text-5);
  margin-bottom: 8px;
}
.ag-card-output-item {
  display: flex;
  align-items: flex-start;
  gap: 8px;
  font-size: 0.8rem;
  color: var(--text-3);
  line-height: 1.5;
  margin-bottom: 5px;
}
.ag-card-output-item::before {
  content: "↳";
  color: var(--card-accent, var(--gold));
  flex-shrink: 0;
  font-weight: 700;
}
.ag-card-btn {
  display: inline-flex;
  align-items: center;
  gap: 7px;
  font-size: 0.85rem;
  font-weight: 700;
  color: var(--text-1);
  background: var(--card-dim, var(--gold-dim));
  border: 1px solid var(--card-border, var(--gold-border));
  border-radius: 6px;
  padding: 10px 16px;
  text-decoration: none;
  transition: background 0.15s, border-color 0.15s;
  align-self: flex-start;
}
.ag-card-btn:hover {
  background: var(--card-accent-hover, rgba(209,164,118,0.2));
  color: var(--text-1);
}
.ag-card-btn svg { width: 13px; height: 13px; fill: currentColor; flex-shrink: 0; }

/* ── Flow ────────────────────────────────────────────────── */
.ag-flow {
  display: flex;
  align-items: stretch;
  gap: 0;
  margin: 1rem 0;
}
@media (max-width: 640px) {
  .ag-flow { flex-direction: column; }
  .ag-flow-arrow { transform: rotate(90deg); align-self: center; }
}

.ag-flow-step {
  flex: 1;
  background: var(--surface);
  border: 1px solid var(--border-sub);
  border-radius: 8px;
  padding: 1.25rem;
}
.ag-flow-step-num {
  font-size: 9px;
  font-weight: 700;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: var(--text-5);
  margin-bottom: 6px;
}
.ag-flow-step-title {
  font-size: 0.9rem;
  font-weight: 700;
  color: var(--text-1);
  margin-bottom: 4px;
}
.ag-flow-step-desc {
  font-size: 0.78rem;
  color: var(--text-3);
  line-height: 1.5;
}
.ag-flow-step-tag {
  display: inline-block;
  font-size: 9px;
  font-weight: 700;
  letter-spacing: 1px;
  text-transform: uppercase;
  padding: 2px 7px;
  border-radius: 3px;
  margin-bottom: 8px;
}
.ag-flow-arrow {
  display: flex;
  align-items: center;
  padding: 0 10px;
  color: var(--text-5);
  font-size: 1.1rem;
  flex-shrink: 0;
}

/* ── Requirements ────────────────────────────────────────── */
.ag-reqs {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0.625rem;
}
@media (max-width: 640px) { .ag-reqs { grid-template-columns: 1fr; } }

.ag-req {
  display: flex;
  align-items: flex-start;
  gap: 10px;
  background: var(--surface);
  border: 1px solid var(--border-sub);
  border-radius: 6px;
  padding: 0.875rem 1rem;
}
.ag-req-icon { font-size: 1rem; flex-shrink: 0; line-height: 1.4; }
.ag-req-text {
  font-size: 0.83rem;
  color: var(--text-2);
  line-height: 1.5;
}
</style>

# Agentes de IA para T&D

<p class="ag-intro">
Dois GPTs especializados, construídos com instruções aprofundadas para atuar como consultores nas suas respectivas áreas. Não são chatbots genéricos — foram projetados para conduzir análises estruturadas e entregar outputs acionáveis para profissionais de T&D e RH, sem precisar de nenhum conhecimento técnico de IA.
</p>

<div class="ag-section">Os Agentes</div>

<div class="ag-cards">

<div class="ag-card" style="--card-accent:#d1a476;--card-dim:rgba(209,164,118,0.08);--card-border:rgba(209,164,118,0.2);--card-accent-hover:rgba(209,164,118,0.18);">
  <div class="ag-card-num">Agente 01</div>
  <div class="ag-card-icon">🔭</div>
  <div class="ag-card-title">Consultor de Estratégia Tecnológica</div>
  <div class="ag-card-role">Diagnóstico de Horizontes</div>
  <p class="ag-card-desc">
    Mapeia as inflexões e tendências tecnológicas que vão impactar o seu negócio nos próximos 1, 3 e 10 anos — e traduz isso em recomendações estratégicas para T&D. O ponto de partida para qualquer estratégia educacional que queira estar à frente.
  </p>
  <div class="ag-card-outputs">
    <div class="ag-card-outputs-label">O que entrega</div>
    <div class="ag-card-output-item">Análise de horizontes de impacto (curto, médio e longo prazo)</div>
    <div class="ag-card-output-item">Tecnologias e temas emergentes relevantes para o seu setor</div>
    <div class="ag-card-output-item">Recomendações estratégicas por horizonte</div>
  </div>
  <a class="ag-card-btn" href="https://chatgpt.com/g/g-67efea2af4b881918adcccd42e821b84-consultor-de-estrategia-tecnologica" target="_blank" rel="noopener">
    <svg viewBox="0 0 24 24"><path d="M19 19H5V5h7V3H5a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z"/></svg>
    Abrir no ChatGPT
  </a>
</div>

<div class="ag-card" style="--card-accent:#4b6afc;--card-dim:rgba(75,106,252,0.08);--card-border:rgba(75,106,252,0.2);--card-accent-hover:rgba(75,106,252,0.18);">
  <div class="ag-card-num">Agente 02</div>
  <div class="ag-card-icon">🎓</div>
  <div class="ag-card-title">Consultora de Estratégia de Aprendizagem</div>
  <div class="ag-card-role">Design Estratégico de T&D</div>
  <p class="ag-card-desc">
    Transforma os horizontes tecnológicos mapeados em uma estratégia educacional concreta — com arquétipos de aprendizagem, priorização de iniciativas e roadmap de ativações. Do diagnóstico ao plano de ação.
  </p>
  <div class="ag-card-outputs">
    <div class="ag-card-outputs-label">O que entrega</div>
    <div class="ag-card-output-item">Estratégia de T&D alinhada aos horizontes de impacto</div>
    <div class="ag-card-output-item">Iniciativas organizadas por arquétipo (Performance, Transformação, Inovação)</div>
    <div class="ag-card-output-item">Roadmap de ações com priorização estratégica</div>
  </div>
  <a class="ag-card-btn" href="https://chatgpt.com/g/g-AHm45TmKA-consultora-de-estrategia-de-aprendizagem" target="_blank" rel="noopener">
    <svg viewBox="0 0 24 24"><path d="M19 19H5V5h7V3H5a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z"/></svg>
    Abrir no ChatGPT
  </a>
</div>

</div>

<div class="ag-section">Fluxo recomendado</div>

<p style="font-size:0.85rem;color:var(--text-3);line-height:1.6;margin-bottom:1rem;max-width:640px;">Os agentes foram desenhados para trabalhar em sequência. Você pode usar os dois em uma única sessão de 30–60 minutos e sair com um plano completo.</p>

<div class="ag-flow">
  <div class="ag-flow-step">
    <div class="ag-flow-step-tag" style="background:rgba(209,164,118,0.1);color:var(--gold);border:1px solid rgba(209,164,118,0.2);">Agente 01 · 🔭</div>
    <div class="ag-flow-step-title">Consultor de Estratégia Tecnológica</div>
    <div class="ag-flow-step-desc">Mapeia o que vai mudar no seu negócio nos próximos anos e por quê isso impacta T&D.</div>
  </div>
  <div class="ag-flow-arrow">→</div>
  <div class="ag-flow-step">
    <div class="ag-flow-step-tag" style="background:rgba(75,106,252,0.08);color:var(--blue);border:1px solid rgba(75,106,252,0.2);">Agente 02 · 🎓</div>
    <div class="ag-flow-step-title">Consultora de Estratégia de Aprendizagem</div>
    <div class="ag-flow-step-desc">Usa os horizontes mapeados para construir a estratégia educacional e o roadmap de ações.</div>
  </div>
  <div class="ag-flow-arrow">→</div>
  <div class="ag-flow-step" style="border-color:var(--border);background:var(--surface-2);">
    <div class="ag-flow-step-tag" style="background:rgba(255,255,255,0.04);color:var(--text-4);border:1px solid var(--border-sub);">Resultado</div>
    <div class="ag-flow-step-title">Roadmap de Ações Estruturais</div>
    <div class="ag-flow-step-desc">Calendário de ativações e iniciativas priorizadas prontas para apresentar ao board.</div>
  </div>
</div>

<div class="ag-section">O que você precisa para começar</div>

<div class="ag-reqs">
  <div class="ag-req">
    <div class="ag-req-icon">💬</div>
    <div class="ag-req-text"><strong style="color:var(--text-1)">Conta no ChatGPT</strong> — gratuita ou paga. Os agentes funcionam nos dois planos.</div>
  </div>
  <div class="ag-req">
    <div class="ag-req-icon">🏢</div>
    <div class="ag-req-text"><strong style="color:var(--text-1)">Nome da sua empresa</strong> e, opcionalmente, o site — para contextualizar a análise.</div>
  </div>
  <div class="ag-req">
    <div class="ag-req-icon">🎯</div>
    <div class="ag-req-text"><strong style="color:var(--text-1)">Foco definido</strong> — qual área ou time você quer trabalhar na sessão.</div>
  </div>
  <div class="ag-req">
    <div class="ag-req-icon">⏱️</div>
    <div class="ag-req-text"><strong style="color:var(--text-1)">30 a 60 minutos</strong> para uma sessão completa com os dois agentes em sequência.</div>
  </div>
</div>

---

**Guias detalhados de uso:**
[Consultor de Estratégia Tecnológica →](./consultor-estrategia-tecnologica/guia-de-uso.md) · [Consultora de Estratégia de Aprendizagem →](./consultora-estrategia-aprendizagem/guia-de-uso.md)
