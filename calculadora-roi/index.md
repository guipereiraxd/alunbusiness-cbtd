---
layout: default
title: Calculadora de ROI de T&D
description: Entenda como medir o retorno real dos investimentos em educação corporativa — e use a calculadora para fazer as contas da sua empresa.
---

<style>
/* ── Hero ────────────────────────────────────────────────── */
.roi-hero {
  padding: 2.5rem 0 2rem;
  border-bottom: 1px solid var(--border-sub);
  margin-bottom: 2.5rem;
}
.roi-eyebrow {
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
.roi-title {
  font-size: clamp(1.6rem, 4vw, 2.4rem);
  font-weight: 800;
  color: var(--text-1);
  line-height: 1.15;
  margin-bottom: 1rem;
  max-width: 700px;
}
.roi-subtitle {
  font-size: 1.05rem;
  color: var(--text-2);
  line-height: 1.7;
  max-width: 640px;
  margin-bottom: 1.75rem;
}
.roi-cta-top {
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
.roi-cta-top:hover { opacity: 0.88; transform: translateY(-1px); color: #ffffff; }
.roi-cta-top svg { width: 14px; height: 14px; fill: currentColor; }

/* ── Section label ───────────────────────────────────────── */
.roi-section {
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
.roi-section::after {
  content: "";
  flex: 1;
  height: 1px;
  background: var(--border-sub);
}

/* ── Stat row ────────────────────────────────────────────── */
.roi-stats {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  margin-bottom: 0.5rem;
}
@media (max-width: 640px) { .roi-stats { grid-template-columns: 1fr; } }

.roi-stat {
  background: var(--surface);
  border: 1px solid var(--border-sub);
  border-top: 3px solid var(--blue);
  border-radius: 8px;
  padding: 1.25rem;
  text-align: center;
}
.roi-stat-number {
  font-size: 2rem;
  font-weight: 900;
  color: var(--blue);
  line-height: 1;
  margin-bottom: 6px;
}
.roi-stat-label {
  font-size: 0.8rem;
  color: var(--text-3);
  line-height: 1.5;
}

/* ── Formula ─────────────────────────────────────────────── */
.roi-formula {
  background: var(--surface);
  border: 1px solid var(--border-sub);
  border-left: 4px solid var(--blue);
  border-radius: 8px;
  padding: 1.5rem 1.75rem;
  margin: 1.25rem 0;
  display: flex;
  align-items: center;
  gap: 2rem;
  flex-wrap: wrap;
}
.roi-formula-eq {
  font-size: 1.15rem;
  font-weight: 700;
  color: var(--text-1);
  font-variant-numeric: tabular-nums;
  white-space: nowrap;
}
.roi-formula-eq span { color: var(--blue); }
.roi-formula-note {
  font-size: 0.82rem;
  color: var(--text-3);
  line-height: 1.6;
  flex: 1;
  min-width: 200px;
}

/* ── Pillars ─────────────────────────────────────────────── */
.roi-pillars {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
}
@media (max-width: 640px) { .roi-pillars { grid-template-columns: 1fr; } }

.roi-pillar {
  background: var(--surface);
  border: 1px solid var(--border-sub);
  border-radius: 8px;
  padding: 1.25rem;
  transition: border-color 0.15s;
}
.roi-pillar:hover { border-color: var(--blue-border); }
.roi-pillar-icon { font-size: 1.4rem; margin-bottom: 10px; }
.roi-pillar-title {
  font-size: 0.95rem;
  font-weight: 700;
  color: var(--text-1);
  margin-bottom: 6px;
}
.roi-pillar-tag {
  font-size: 9px;
  font-weight: 700;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: var(--blue);
  margin-bottom: 8px;
}
.roi-pillar-desc {
  font-size: 0.82rem;
  color: var(--text-3);
  line-height: 1.6;
}
.roi-pillar-examples {
  margin-top: 10px;
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
}
.roi-tag {
  font-size: 0.7rem;
  font-weight: 600;
  color: var(--text-3);
  background: var(--surface-2);
  border: 1px solid var(--border-sub);
  border-radius: 3px;
  padding: 2px 7px;
}

/* ── Levels ──────────────────────────────────────────────── */
.roi-levels {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}
.roi-level {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  padding: 1rem 1.25rem;
  background: var(--surface);
  border: 1px solid var(--border-sub);
  border-radius: 8px;
  transition: border-color 0.15s;
}
.roi-level:hover { border-color: var(--blue-border); }
.roi-level-num {
  font-size: 0.7rem;
  font-weight: 800;
  color: var(--blue);
  background: var(--blue-dim);
  border: 1px solid var(--blue-border);
  border-radius: 4px;
  padding: 3px 8px;
  flex-shrink: 0;
  letter-spacing: 1px;
  margin-top: 2px;
}
.roi-level-body {}
.roi-level-title {
  font-size: 0.9rem;
  font-weight: 700;
  color: var(--text-1);
  margin-bottom: 3px;
}
.roi-level-desc {
  font-size: 0.8rem;
  color: var(--text-3);
  line-height: 1.55;
}
.roi-level-example {
  font-size: 0.75rem;
  color: var(--text-4);
  font-style: italic;
  margin-top: 3px;
}

/* ── Barriers ────────────────────────────────────────────── */
.roi-barriers {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0.75rem;
}
@media (max-width: 640px) { .roi-barriers { grid-template-columns: 1fr; } }

.roi-barrier {
  background: var(--surface);
  border: 1px solid var(--border-sub);
  border-radius: 8px;
  padding: 1rem;
}
.roi-barrier-icon { font-size: 1.1rem; margin-bottom: 8px; }
.roi-barrier-title {
  font-size: 0.85rem;
  font-weight: 700;
  color: var(--text-2);
  margin-bottom: 5px;
}
.roi-barrier-desc {
  font-size: 0.78rem;
  color: var(--text-4);
  line-height: 1.55;
}

/* ── CTA ─────────────────────────────────────────────────── */
.roi-cta {
  margin-top: 3rem;
  background: linear-gradient(135deg, #0d1020 0%, #0a0c18 100%);
  border: 1px solid var(--blue-border);
  border-radius: 12px;
  padding: 2.5rem 2rem;
  text-align: center;
  position: relative;
  overflow: hidden;
}
.roi-cta::before {
  content: "";
  position: absolute;
  top: 0; left: 0; right: 0;
  height: 3px;
  background: linear-gradient(90deg, var(--blue), rgba(75,106,252,0.2));
}
.roi-cta-title {
  font-size: 1.5rem;
  font-weight: 800;
  color: var(--text-1);
  margin-bottom: 0.75rem;
}
.roi-cta-sub {
  font-size: 0.95rem;
  color: var(--text-3);
  max-width: 520px;
  margin: 0 auto 1.75rem;
  line-height: 1.6;
}
.roi-cta-btn {
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
.roi-cta-btn:hover { background: #e8eeff; transform: translateY(-1px); color: #0f0f0f; }
.roi-cta-btn svg { width: 15px; height: 15px; fill: currentColor; flex-shrink: 0; }
.roi-cta-note {
  margin-top: 1rem;
  font-size: 0.75rem;
  color: var(--text-5);
}
</style>

<div class="roi-hero">
  <div class="roi-eyebrow">Alura Para Empresas · Ferramenta</div>
  <h1 class="roi-title">Calculadora de ROI de T&D</h1>
  <p class="roi-subtitle">
    Medir o retorno dos investimentos em educação corporativa deixou de ser opcional. Esta calculadora traduz o impacto das suas iniciativas de T&D em números que o negócio entende — produtividade, retenção, tempo de ramp-up e receita.
  </p>
  <a class="roi-cta-top" href="https://calculadoraroi.alura.com.br/" target="_blank" rel="noopener">
    <svg viewBox="0 0 24 24"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 14l-5-5 1.41-1.41L12 14.17l7.59-7.59L21 8l-9 9z"/></svg>
    Acessar a Calculadora →
  </a>
</div>

<div class="roi-section">O problema que ninguém quer admitir</div>

<p style="font-size:0.95rem;color:var(--text-2);line-height:1.7;max-width:700px;margin-bottom:1.5rem;">
A maioria das empresas investe em T&D sem conseguir responder a uma pergunta simples: <strong style="color:var(--text-1)">isso está gerando resultado?</strong> Não por falta de vontade — mas porque medir o impacto real da aprendizagem exige conectar dados de treinamento com dados de negócio, algo que poucos processos de T&D fazem de forma sistemática.
</p>

<div class="roi-stats">
  <div class="roi-stat">
    <div class="roi-stat-number">72%</div>
    <div class="roi-stat-label">das empresas não conseguem demonstrar o ROI dos seus programas de T&D ao board</div>
  </div>
  <div class="roi-stat">
    <div class="roi-stat-number">40%</div>
    <div class="roi-stat-label">de redução no tempo de ramp-up de novos colaboradores com programas estruturados de onboarding</div>
  </div>
  <div class="roi-stat">
    <div class="roi-stat-number">24%</div>
    <div class="roi-stat-label">de aumento na retenção em empresas que investem em desenvolvimento contínuo de carreira</div>
  </div>
</div>

<div class="roi-section">A fórmula básica</div>

<div class="roi-formula">
  <div class="roi-formula-eq">
    ROI (%) = <span>( Benefícios − Custos ) ÷ Custos</span> × 100
  </div>
  <div class="roi-formula-note">
    O desafio não está na fórmula — está em quantificar os benefícios. Redução de turnover, aumento de produtividade, diminuição de erros operacionais e aceleração do time-to-performance são métricas reais, mas precisam ser capturadas com método.
  </div>
</div>

<div class="roi-section">Os dois tipos de retorno</div>

<div class="roi-pillars">

<div class="roi-pillar">
  <div class="roi-pillar-icon">📈</div>
  <div class="roi-pillar-tag">ROI Quantitativo</div>
  <div class="roi-pillar-title">Retorno Mensurável em Números</div>
  <div class="roi-pillar-desc">Impactos que podem ser convertidos diretamente em valor financeiro — comparando o custo do programa com o ganho gerado no negócio.</div>
  <div class="roi-pillar-examples">
    <span class="roi-tag">Redução de turnover</span>
    <span class="roi-tag">Aumento de produtividade</span>
    <span class="roi-tag">Redução de erros</span>
    <span class="roi-tag">Tempo de ramp-up</span>
    <span class="roi-tag">Receita por colaborador</span>
  </div>
</div>

<div class="roi-pillar">
  <div class="roi-pillar-icon">🧠</div>
  <div class="roi-pillar-tag">ROI Qualitativo</div>
  <div class="roi-pillar-title">Retorno em Capital Intangível</div>
  <div class="roi-pillar-desc">Impactos que influenciam o negócio de forma indireta mas igualmente real — difíceis de monetizar, mas essenciais para a saúde organizacional de longo prazo.</div>
  <div class="roi-pillar-examples">
    <span class="roi-tag">Engajamento</span>
    <span class="roi-tag">Cultura de aprendizagem</span>
    <span class="roi-tag">Employer branding</span>
    <span class="roi-tag">Segurança psicológica</span>
    <span class="roi-tag">Capacidade de inovação</span>
  </div>
</div>

</div>

<div class="roi-section">Os 5 níveis de avaliação (Modelo Phillips)</div>

<p style="font-size:0.85rem;color:var(--text-3);line-height:1.6;margin-bottom:1rem;max-width:680px;">
O modelo de Donald Kirkpatrick (expandido por Jack Phillips) organiza a avaliação de aprendizagem em cinco níveis progressivos. A maioria das empresas para no nível 1 ou 2 — e por isso não consegue demonstrar ROI.
</p>

<div class="roi-levels">

  <div class="roi-level">
    <div class="roi-level-num">N1</div>
    <div class="roi-level-body">
      <div class="roi-level-title">Reação</div>
      <div class="roi-level-desc">Como os participantes avaliaram a experiência de aprendizagem — satisfação, relevância percebida e intenção de aplicar.</div>
      <div class="roi-level-example">Ex: NPS do treinamento, pesquisa de satisfação pós-curso</div>
    </div>
  </div>

  <div class="roi-level">
    <div class="roi-level-num">N2</div>
    <div class="roi-level-body">
      <div class="roi-level-title">Aprendizagem</div>
      <div class="roi-level-desc">O quanto os participantes de fato aprenderam — conhecimento adquirido, habilidades desenvolvidas e mudanças de atitude verificáveis.</div>
      <div class="roi-level-example">Ex: avaliação pré/pós, simulações, projetos práticos</div>
    </div>
  </div>

  <div class="roi-level">
    <div class="roi-level-num">N3</div>
    <div class="roi-level-body">
      <div class="roi-level-title">Comportamento</div>
      <div class="roi-level-desc">Se o aprendizado foi aplicado no trabalho real — mudanças observáveis no comportamento cotidiano após o programa.</div>
      <div class="roi-level-example">Ex: avaliação 360°, observação de gestores, indicadores de aplicação</div>
    </div>
  </div>

  <div class="roi-level">
    <div class="roi-level-num">N4</div>
    <div class="roi-level-body">
      <div class="roi-level-title">Resultado</div>
      <div class="roi-level-desc">O impacto tangível no negócio gerado pelas mudanças de comportamento — os KPIs de negócio que o programa deveria mover.</div>
      <div class="roi-level-example">Ex: redução de retrabalho, aumento de vendas, queda no tempo de atendimento</div>
    </div>
  </div>

  <div class="roi-level" style="border-color:var(--blue-border);">
    <div class="roi-level-num">N5</div>
    <div class="roi-level-body">
      <div class="roi-level-title">ROI</div>
      <div class="roi-level-desc">A conversão dos resultados do nível 4 em valor financeiro, comparado ao investimento total no programa — o número que o CFO quer ver.</div>
      <div class="roi-level-example">Ex: ROI de 340% — para cada R$ 1 investido, R$ 3,40 de retorno mensurável</div>
    </div>
  </div>

</div>

<div class="roi-section">Por que tão poucas empresas chegam ao N5</div>

<div class="roi-barriers">

  <div class="roi-barrier">
    <div class="roi-barrier-icon">🔗</div>
    <div class="roi-barrier-title">Dados desconectados</div>
    <div class="roi-barrier-desc">Os dados de aprendizagem ficam no LMS e os dados de performance ficam no RH ou no ERP — sem integração, é impossível correlacionar os dois.</div>
  </div>

  <div class="roi-barrier">
    <div class="roi-barrier-icon">⏱️</div>
    <div class="roi-barrier-title">Horizonte de tempo</div>
    <div class="roi-barrier-desc">O impacto real de um programa de desenvolvimento pode levar 6 a 18 meses para aparecer nos indicadores — a maioria das avaliações acontece semanas depois.</div>
  </div>

  <div class="roi-barrier">
    <div class="roi-barrier-icon">🎯</div>
    <div class="roi-barrier-title">Objetivos mal definidos</div>
    <div class="roi-barrier-desc">Sem um KPI de negócio claro definido antes do programa começar, não há como medir o antes e o depois com rigor.</div>
  </div>

  <div class="roi-barrier">
    <div class="roi-barrier-icon">📊</div>
    <div class="roi-barrier-title">Maturidade analítica</div>
    <div class="roi-barrier-desc">Poucas equipes de T&D têm capacidade ou ferramentas para fazer análise de dados com a profundidade necessária para isolar o impacto do treinamento.</div>
  </div>

  <div class="roi-barrier">
    <div class="roi-barrier-icon">🏛️</div>
    <div class="roi-barrier-title">Cultura organizacional</div>
    <div class="roi-barrier-desc">Em muitas empresas, T&D ainda é visto como custo — e não há pressão interna para demonstrar retorno com rigor.</div>
  </div>

  <div class="roi-barrier">
    <div class="roi-barrier-icon">💡</div>
    <div class="roi-barrier-title">Falta de método</div>
    <div class="roi-barrier-desc">Não é por falta de dados — é por falta de um framework simples que traduza o que já existe em números que o negócio consiga interpretar.</div>
  </div>

</div>

<div class="roi-cta">
  <div class="roi-cta-title">Calcule o ROI das suas iniciativas de T&D</div>
  <p class="roi-cta-sub">A calculadora da Alura Para Empresas traduz os principais indicadores do seu programa de desenvolvimento em retorno financeiro mensurável — em minutos.</p>
  <a class="roi-cta-btn" href="https://calculadoraroi.alura.com.br/" target="_blank" rel="noopener">
    <svg viewBox="0 0 24 24"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/></svg>
    Acessar a Calculadora de ROI →
  </a>
  <div class="roi-cta-note">Alura Para Empresas · calculadoraroi.alura.com.br</div>
</div>
