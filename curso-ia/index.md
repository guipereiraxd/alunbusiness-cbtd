---
layout: default
title: Curso Prático de IA
description: Do zero a agentes de IA em produção — sem atalhos, sem superficialidade. O caminho mais direto para usar IA como ferramenta real de trabalho.
---

<style>
/* ── Hero ────────────────────────────────────────────────── */
.ci-hero {
  padding: 2.5rem 0 2rem;
  border-bottom: 1px solid var(--border-sub);
  margin-bottom: 2.5rem;
}
.ci-eyebrow {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 3px;
  text-transform: uppercase;
  color: var(--blue);
  background: var(--blue-dim);
  border: 1px solid var(--blue-border);
  border-radius: 4px;
  padding: 4px 10px;
  margin-bottom: 1.25rem;
}
.ci-title {
  font-size: clamp(1.6rem, 4vw, 2.4rem);
  font-weight: 800;
  color: var(--text-1);
  line-height: 1.15;
  margin-bottom: 1rem;
  max-width: 700px;
}
.ci-subtitle {
  font-size: 1.05rem;
  color: var(--text-2);
  line-height: 1.7;
  max-width: 640px;
  margin-bottom: 1.75rem;
}
.ci-cta-top {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: var(--blue);
  color: #ffffff;
  font-size: 0.9rem;
  font-weight: 700;
  text-decoration: none;
  border-radius: 6px;
  padding: 12px 22px;
  transition: opacity 0.15s, transform 0.1s;
}
.ci-cta-top:hover { opacity: 0.88; transform: translateY(-1px); color: #ffffff; }
.ci-cta-top svg { width: 14px; height: 14px; fill: currentColor; flex-shrink: 0; }

/* ── Section label ───────────────────────────────────────── */
.ci-section {
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
.ci-section::after {
  content: "";
  flex: 1;
  height: 1px;
  background: var(--border-sub);
}

/* ── Gap cards ───────────────────────────────────────────── */
.ci-gaps {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  margin-bottom: 0.5rem;
}
@media (max-width: 640px) { .ci-gaps { grid-template-columns: 1fr; } }

.ci-gap {
  background: var(--surface);
  border: 1px solid var(--border-sub);
  border-top: 3px solid var(--border);
  border-radius: 8px;
  padding: 1.25rem;
}
.ci-gap-icon { font-size: 1.3rem; margin-bottom: 10px; }
.ci-gap-title {
  font-size: 0.9rem;
  font-weight: 700;
  color: var(--text-2);
  margin-bottom: 6px;
}
.ci-gap-desc {
  font-size: 0.8rem;
  color: var(--text-4);
  line-height: 1.6;
}

/* ── Levels ──────────────────────────────────────────────── */
.ci-levels {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
}
@media (max-width: 720px) { .ci-levels { grid-template-columns: 1fr; } }

.ci-level {
  background: var(--surface);
  border: 1px solid var(--border-sub);
  border-radius: 10px;
  padding: 1.25rem;
  display: flex;
  gap: 1rem;
  transition: border-color 0.15s, background 0.15s;
}
.ci-level:hover {
  background: var(--surface-2);
  border-color: var(--blue-border);
}
.ci-level-num {
  font-size: 1.75rem;
  font-weight: 900;
  color: var(--border);
  line-height: 1;
  flex-shrink: 0;
  width: 1.75rem;
  text-align: center;
  transition: color 0.15s;
}
.ci-level:hover .ci-level-num { color: var(--blue-border); }
.ci-level-body {}
.ci-level-tag {
  font-size: 9px;
  font-weight: 700;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: var(--blue);
  margin-bottom: 5px;
}
.ci-level-title {
  font-size: 0.95rem;
  font-weight: 700;
  color: var(--text-1);
  line-height: 1.3;
  margin-bottom: 6px;
}
.ci-level-desc {
  font-size: 0.82rem;
  color: var(--text-3);
  line-height: 1.6;
}
.ci-level-outcome {
  display: inline-flex;
  align-items: center;
  gap: 5px;
  font-size: 0.75rem;
  font-weight: 600;
  color: var(--text-4);
  background: var(--surface-2);
  border: 1px solid var(--border-sub);
  border-radius: 4px;
  padding: 3px 8px;
  margin-top: 10px;
}

/* ── For whom ────────────────────────────────────────────── */
.ci-profiles {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.625rem;
}
@media (max-width: 640px) { .ci-profiles { grid-template-columns: 1fr; } }

.ci-profile {
  display: flex;
  align-items: flex-start;
  gap: 10px;
  background: var(--surface);
  border: 1px solid var(--border-sub);
  border-radius: 6px;
  padding: 0.875rem 1rem;
}
.ci-profile-dot {
  width: 6px; height: 6px;
  border-radius: 50%;
  background: var(--blue);
  flex-shrink: 0;
  margin-top: 5px;
}
.ci-profile-text {
  font-size: 0.85rem;
  color: var(--text-2);
  line-height: 1.5;
}

/* ── Differentials ───────────────────────────────────────── */
.ci-diffs {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0.75rem;
}
@media (max-width: 640px) { .ci-diffs { grid-template-columns: 1fr; } }

.ci-diff {
  background: var(--surface);
  border: 1px solid var(--border-sub);
  border-radius: 8px;
  padding: 1rem;
}
.ci-diff-icon { font-size: 1.2rem; margin-bottom: 8px; }
.ci-diff-title {
  font-size: 0.85rem;
  font-weight: 700;
  color: var(--text-1);
  margin-bottom: 5px;
}
.ci-diff-desc {
  font-size: 0.78rem;
  color: var(--text-3);
  line-height: 1.55;
}

/* ── CTA ─────────────────────────────────────────────────── */
.ci-cta {
  margin-top: 3rem;
  background: linear-gradient(135deg, #0d1020 0%, #0a0c18 100%);
  border: 1px solid var(--blue-border);
  border-radius: 12px;
  padding: 2.5rem 2rem;
  text-align: center;
  position: relative;
  overflow: hidden;
}
.ci-cta::before {
  content: "";
  position: absolute;
  top: 0; left: 0; right: 0;
  height: 3px;
  background: linear-gradient(90deg, var(--blue), rgba(75,106,252,0.2));
}
.ci-cta-title {
  font-size: 1.5rem;
  font-weight: 800;
  color: #ffffff;
  margin-bottom: 0.75rem;
}
.ci-cta-sub {
  font-size: 0.95rem;
  color: rgba(255,255,255,0.62);
  max-width: 520px;
  margin: 0 auto 1.75rem;
  line-height: 1.6;
}
.ci-cta-btn {
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
  transition: background 0.15s, transform 0.1s;
}
.ci-cta-btn:hover { background: #e8eeff; transform: translateY(-1px); color: #0f0f0f; }
.ci-cta-btn svg { width: 15px; height: 15px; fill: currentColor; flex-shrink: 0; }
.ci-cta-note {
  margin-top: 1rem;
  font-size: 0.75rem;
  color: var(--text-5);
}
</style>

<div class="ci-hero">
  <div class="ci-eyebrow">Alura Para Empresas · Curso</div>
  <h1 class="ci-title">Curso Prático de IA</h1>
  <p class="ci-subtitle">
    Do zero a agentes de IA em produção — sem atalhos, sem superficialidade. O caminho mais direto para transformar IA em ferramenta real de trabalho, com projetos aplicados ao contexto de cada profissional.
  </p>
  <a class="ci-cta-top" href="https://ai-builder-camp.alura.com.br/" target="_blank" rel="noopener">
    <svg viewBox="0 0 24 24"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/></svg>
    Acessar o Curso →
  </a>
</div>

<div class="ci-section">O problema com a maioria dos cursos de IA</div>

<p style="font-size:0.95rem;color:var(--text-2);line-height:1.7;max-width:700px;margin-bottom:1.5rem;">
A oferta de conteúdo sobre IA explodiu — mas a maioria ensina conceitos sem aplicação real, ou ferramentas sem contexto estratégico. O resultado: profissionais que sabem o que é um LLM mas não sabem como usá-lo para resolver um problema concreto do seu trabalho.
</p>

<div class="ci-gaps">
  <div class="ci-gap">
    <div class="ci-gap-icon">🎭</div>
    <div class="ci-gap-title">Teoria sem prática</div>
    <div class="ci-gap-desc">Conteúdos que explicam como a IA funciona mas não ensinam como usá-la para resolver problemas reais — o aluno termina o curso sem nada para mostrar.</div>
  </div>
  <div class="ci-gap">
    <div class="ci-gap-icon">🔧</div>
    <div class="ci-gap-title">Ferramentas sem contexto</div>
    <div class="ci-gap-desc">Tutoriais de ferramentas específicas que ficam desatualizados em meses, sem ensinar o raciocínio por trás — o profissional depende de sempre encontrar o tutorial certo.</div>
  </div>
  <div class="ci-gap">
    <div class="ci-gap-icon">🏝️</div>
    <div class="ci-gap-title">Hype sem aplicação</div>
    <div class="ci-gap-desc">Conteúdos inspiracionais sobre o futuro da IA que não entregam nenhum recurso concreto para o profissional começar a usar amanhã no seu trabalho.</div>
  </div>
</div>

<div class="ci-section">O que você vai construir no curso</div>

<p style="font-size:0.85rem;color:var(--text-3);line-height:1.6;margin-bottom:1rem;max-width:680px;">
O curso é organizado em etapas progressivas — cada uma com um entregável concreto ao final. Você não aprende sobre IA: você usa IA para resolver problemas reais desde o primeiro módulo.
</p>

<div class="ci-levels">

  <div class="ci-level">
    <div class="ci-level-num">1</div>
    <div class="ci-level-body">
      <div class="ci-level-tag">Fundamentos</div>
      <div class="ci-level-title">Pensar com IA, não sobre IA</div>
      <div class="ci-level-desc">Como estruturar problemas de forma que a IA consiga ajudar de verdade. Prompts, contexto, iteração — o raciocínio que não fica desatualizado quando os modelos mudam.</div>
      <div class="ci-level-outcome">↳ Primeiro workflow de IA aplicado ao seu trabalho</div>
    </div>
  </div>

  <div class="ci-level">
    <div class="ci-level-num">2</div>
    <div class="ci-level-body">
      <div class="ci-level-tag">Automação</div>
      <div class="ci-level-title">Automatizar tarefas repetitivas</div>
      <div class="ci-level-desc">Identificar quais partes do seu trabalho são automatizáveis, construir os fluxos certos e liberar tempo para o que realmente exige julgamento humano.</div>
      <div class="ci-level-outcome">↳ Automação funcionando em produção</div>
    </div>
  </div>

  <div class="ci-level">
    <div class="ci-level-num">3</div>
    <div class="ci-level-body">
      <div class="ci-level-tag">Agentes</div>
      <div class="ci-level-title">Construir agentes de IA especializados</div>
      <div class="ci-level-desc">O que são agentes de IA, como eles diferem de simples prompts, e como construir um agente que execute tarefas complexas de forma autônoma na sua área de atuação.</div>
      <div class="ci-level-outcome">↳ Agente de IA funcional para o seu contexto</div>
    </div>
  </div>

  <div class="ci-level">
    <div class="ci-level-num">4</div>
    <div class="ci-level-body">
      <div class="ci-level-tag">Escala</div>
      <div class="ci-level-title">Levar IA para o time</div>
      <div class="ci-level-desc">Como documentar, treinar e disseminar o uso de IA na equipe — transformando uma competência individual em capacidade organizacional sustentável.</div>
      <div class="ci-level-outcome">↳ Playbook de IA para o seu time</div>
    </div>
  </div>

</div>

<div class="ci-section">Para quem é este curso</div>

<div class="ci-profiles">
  <div class="ci-profile"><div class="ci-profile-dot"></div><div class="ci-profile-text">Profissionais de RH e T&D que querem incorporar IA no design, entrega e avaliação de programas de aprendizagem</div></div>
  <div class="ci-profile"><div class="ci-profile-dot"></div><div class="ci-profile-text">Líderes e gestores que precisam entender IA na prática para tomar decisões de adoção no seu time — sem depender só de TI</div></div>
  <div class="ci-profile"><div class="ci-profile-dot"></div><div class="ci-profile-text">Profissionais de qualquer área que querem ir além do ChatGPT e construir soluções de IA aplicadas ao seu trabalho real</div></div>
  <div class="ci-profile"><div class="ci-profile-dot"></div><div class="ci-profile-text">Times que já usam algumas ferramentas de IA pontualmente mas querem um método para sistematizar e escalar esse uso</div></div>
</div>

<div class="ci-section">Por que este curso é diferente</div>

<div class="ci-diffs">
  <div class="ci-diff">
    <div class="ci-diff-icon">🏗️</div>
    <div class="ci-diff-title">Project-based</div>
    <div class="ci-diff-desc">Cada módulo termina com um entregável concreto — não um exercício didático, mas algo que você vai usar de verdade no trabalho.</div>
  </div>
  <div class="ci-diff">
    <div class="ci-diff-icon">🧭</div>
    <div class="ci-diff-title">Raciocínio, não receita</div>
    <div class="ci-diff-desc">O foco é no método de pensar com IA — que permanece útil mesmo quando as ferramentas mudam, o que acontece constantemente.</div>
  </div>
  <div class="ci-diff">
    <div class="ci-diff-icon">⚡</div>
    <div class="ci-diff-title">Do zero ao avançado</div>
    <div class="ci-diff-desc">Não precisa de conhecimento técnico prévio. A progressão é desenhada para profissionais de negócio, não para engenheiros.</div>
  </div>
  <div class="ci-diff">
    <div class="ci-diff-icon">🎯</div>
    <div class="ci-diff-title">Contextualizado para T&D</div>
    <div class="ci-diff-desc">Os exemplos e projetos são construídos para o contexto de RH, T&D e gestão de pessoas — não para startups de tecnologia.</div>
  </div>
  <div class="ci-diff">
    <div class="ci-diff-icon">🤝</div>
    <div class="ci-diff-title">Mentoria e comunidade</div>
    <div class="ci-diff-desc">Acesso a mentores e à comunidade de praticantes de IA da Alura — para tirar dúvidas e aprender com quem já está aplicando.</div>
  </div>
  <div class="ci-diff">
    <div class="ci-diff-icon">🔄</div>
    <div class="ci-diff-title">Sempre atualizado</div>
    <div class="ci-diff-desc">O conteúdo é atualizado continuamente para acompanhar a evolução dos modelos e ferramentas — você não fica estudando tecnologia defasada.</div>
  </div>
</div>

<div class="ci-cta">
  <div class="ci-cta-title">Comece a usar IA de verdade no seu trabalho</div>
  <p class="ci-cta-sub">Do zero a agentes em produção — na prática, sem atalhos. O caminho mais direto para transformar IA em vantagem competitiva real.</p>
  <a class="ci-cta-btn" href="https://ai-builder-camp.alura.com.br/" target="_blank" rel="noopener">
    <svg viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z"/></svg>
    Acessar o Curso Prático de IA →
  </a>
  <div class="ci-cta-note">Alura Para Empresas · ai-builder-camp.alura.com.br</div>
</div>
