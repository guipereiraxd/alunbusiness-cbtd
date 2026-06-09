---
layout: default
title: "Promptoteca de Educação Corporativa"
---

<style>
  .pt-intro { margin-bottom: 32px; }
  .pt-intro p { color: var(--text-3); font-size: 0.9375rem; margin-bottom: 8px; }
  .pt-how-to {
    display: flex; align-items: flex-start; gap: 12px;
    background: var(--blue-dim); border: 1px solid var(--blue-border);
    border-radius: 10px; padding: 14px 18px; margin-top: 16px;
  }
  .pt-how-to .icon { font-size: 18px; flex-shrink: 0; margin-top: 1px; }
  .pt-how-to p { color: var(--text-2); font-size: 0.875rem; margin: 0; }
  .pt-how-to strong { color: var(--text-1); }

  /* Category nav */
  .pt-nav {
    display: flex; flex-wrap: wrap; gap: 8px;
    padding: 16px 0 24px; border-bottom: 1px solid var(--border-sub);
    margin-bottom: 40px;
  }
  .pt-nav a {
    display: inline-flex; align-items: center; gap: 6px;
    padding: 6px 12px; border-radius: 20px;
    font-size: 12px; font-weight: 600;
    background: var(--surface-2); border: 1px solid var(--border);
    color: var(--text-3); text-decoration: none;
    transition: background 0.15s, color 0.15s, border-color 0.15s;
  }
  .pt-nav a:hover { background: var(--gold-dim); border-color: var(--gold-border); color: var(--gold); text-decoration: none; }
  .pt-nav a .num { color: var(--text-5); font-size: 10px; font-weight: 700; }

  /* Category section */
  .pt-section { margin-bottom: 56px; }
  .pt-section-header {
    display: flex; align-items: center; gap: 14px;
    margin-bottom: 24px; padding-bottom: 16px;
    border-bottom: 1px solid var(--border-sub);
  }
  .pt-section-num {
    display: inline-flex; align-items: center; justify-content: center;
    width: 36px; height: 36px; border-radius: 10px;
    background: var(--gold-dim); border: 1px solid var(--gold-border);
    font-size: 12px; font-weight: 800; color: var(--gold); flex-shrink: 0;
  }
  .pt-section-info .label {
    font-size: 10px; font-weight: 700; letter-spacing: 0.12em;
    text-transform: uppercase; color: var(--text-5); margin-bottom: 3px;
  }
  .pt-section-info .name {
    font-size: 1rem; font-weight: 700; color: var(--text-1);
  }
  .pt-section-info .desc {
    font-size: 0.8125rem; color: var(--text-4); margin-top: 2px;
  }

  /* Prompt card */
  .pt-card {
    background: var(--surface); border: 1px solid var(--border-sub);
    border-radius: 12px; margin-bottom: 16px; overflow: hidden;
  }
  .pt-card-header {
    display: flex; align-items: flex-start; gap: 14px;
    padding: 16px 20px 14px; border-bottom: 1px solid var(--border-sub);
    background: var(--tint-3);
  }
  .pt-card-num {
    font-size: 11px; font-weight: 800; color: var(--text-5);
    letter-spacing: 0.08em; padding-top: 2px; flex-shrink: 0;
    font-variant-numeric: tabular-nums;
  }
  .pt-card-meta { flex: 1; }
  .pt-card-title {
    font-size: 0.9375rem; font-weight: 700; color: var(--text-1);
    margin-bottom: 4px;
  }
  .pt-card-purpose {
    font-size: 0.8125rem; color: var(--text-4); font-style: italic;
  }
  .pt-card-body { padding: 20px; }
  .pt-prompt {
    background: #111114; border: 1px solid var(--border-sub);
    border-radius: 8px; padding: 16px 18px;
    font-size: 0.8375rem; line-height: 1.75;
    color: var(--text-2); white-space: pre-wrap;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Inter', sans-serif;
  }
  .pt-prompt strong { color: var(--text-1); }
  .pt-context {
    margin-top: 12px; display: flex; flex-wrap: wrap; gap: 8px;
  }
  .pt-context-tag {
    display: inline-flex; align-items: center; gap: 6px;
    background: var(--gold-dim); border: 1px solid var(--gold-border);
    border-radius: 6px; padding: 6px 10px;
    font-size: 0.8125rem; color: var(--gold); font-style: italic;
  }
  .pt-context-tag .pin { font-style: normal; }
</style>

<div class="pt-intro">
  <h1>Promptoteca de Educação Corporativa</h1>
  <p>25 prompts profissionais para estratégia, design, facilitação e mensuração de aprendizagem.</p>
  <div class="pt-how-to">
    <div class="icon">💡</div>
    <p><strong>Como usar:</strong> Cada prompt está pronto para copiar e usar. Substitua os campos <strong>📌 em destaque</strong> pelo contexto da sua realidade. Quanto mais contexto você fornecer, mais preciso e útil será o resultado.</p>
  </div>
</div>

<nav class="pt-nav">
  <a href="#estrategia"><span class="num">01</span> Estratégia</a>
  <a href="#diagnostico"><span class="num">02</span> Diagnóstico</a>
  <a href="#competencias"><span class="num">03</span> Competências</a>
  <a href="#trilhas"><span class="num">04</span> Trilhas</a>
  <a href="#programas"><span class="num">05</span> Programas</a>
  <a href="#design"><span class="num">06</span> Design Instrucional</a>
  <a href="#avaliacao"><span class="num">07</span> Avaliação de Impacto</a>
  <a href="#ia"><span class="num">08</span> IA Aplicada</a>
</nav>

---

<div class="pt-section" id="estrategia">
  <div class="pt-section-header">
    <div class="pt-section-num">01</div>
    <div class="pt-section-info">
      <div class="label">Categoria 01</div>
      <div class="name">Estratégia de Educação Corporativa</div>
      <div class="desc">Para definir direcionamento, prioridades e conexão com o negócio.</div>
    </div>
  </div>

  <div class="pt-card">
    <div class="pt-card-header">
      <div class="pt-card-num">Prompt 01</div>
      <div class="pt-card-meta">
        <div class="pt-card-title">Traduzir Estratégia em Agenda Educacional</div>
        <div class="pt-card-purpose">Conecta objetivos de negócio às prioridades de desenvolvimento de pessoas.</div>
      </div>
    </div>
    <div class="pt-card-body">
      <div class="pt-prompt">Atue como estrategista sênior de educação corporativa.

A partir do contexto organizacional abaixo, realize uma análise estratégica e entregue:

1. Capacidades críticas que precisam ser desenvolvidas (com justificativa)
2. Públicos prioritários para cada capacidade
3. Riscos e custos de não desenvolver essas capacidades
4. Formatos educacionais mais adequados por público e urgência
5. Uma agenda de desenvolvimento estruturada em curto, médio e longo prazo

Seja específico, orientado a impacto e considere restrições de tempo, orçamento e cultura organizacional.</div>
      <div class="pt-context">
        <div class="pt-context-tag"><span class="pin">📌</span> Contexto da empresa / área / desafio: ___</div>
      </div>
    </div>
  </div>

  <div class="pt-card">
    <div class="pt-card-header">
      <div class="pt-card-num">Prompt 02</div>
      <div class="pt-card-meta">
        <div class="pt-card-title">Construir Frentes Estratégicas de Atuação</div>
        <div class="pt-card-purpose">Define as grandes frentes de trabalho da área de educação com clareza de propósito e impacto.</div>
      </div>
    </div>
    <div class="pt-card-body">
      <div class="pt-prompt">Atue como consultor de educação corporativa.

Com base no cenário organizacional descrito, proponha 5 frentes estratégicas de atuação para a área de educação. Para cada frente, detalhe:

- Objetivo e propósito da frente
- Impacto esperado no negócio e nas pessoas
- Público-alvo prioritário
- Formatos e abordagens educacionais recomendadas
- Indicadores de sucesso (quantitativos e qualitativos)
- Nível de prioridade e horizonte de implementação

Conclua com uma visão integrada de como as frentes se complementam.</div>
      <div class="pt-context">
        <div class="pt-context-tag"><span class="pin">📌</span> Contexto organizacional: ___</div>
      </div>
    </div>
  </div>

  <div class="pt-card">
    <div class="pt-card-header">
      <div class="pt-card-num">Prompt 03</div>
      <div class="pt-card-meta">
        <div class="pt-card-title">Priorizar Demandas Educacionais</div>
        <div class="pt-card-purpose">Organiza e hierarquiza um conjunto de demandas com critérios objetivos de negócio.</div>
      </div>
    </div>
    <div class="pt-card-body">
      <div class="pt-prompt">Atue como gestor de portfólio de educação corporativa.

Analise a lista de demandas abaixo e construa uma matriz de priorização considerando os seguintes critérios:

- Impacto no negócio (alto / médio / baixo)
- Urgência estratégica
- Escala de público atingido
- Complexidade e tempo de implementação
- Dependência de stakeholders ou recursos externos

Organize as demandas em três horizontes (curto, médio e longo prazo) e justifique as escolhas. Sinalize eventuais conflitos de prioridade e proponha critérios de desempate.</div>
      <div class="pt-context">
        <div class="pt-context-tag"><span class="pin">📌</span> Lista de demandas educacionais: ___</div>
      </div>
    </div>
  </div>
</div>

---

<div class="pt-section" id="diagnostico">
  <div class="pt-section-header">
    <div class="pt-section-num">02</div>
    <div class="pt-section-info">
      <div class="label">Categoria 02</div>
      <div class="name">Diagnóstico de Necessidades de Aprendizagem</div>
      <div class="desc">Para entender gaps, maturidade e necessidades reais antes de agir.</div>
    </div>
  </div>

  <div class="pt-card">
    <div class="pt-card-header">
      <div class="pt-card-num">Prompt 04</div>
      <div class="pt-card-meta">
        <div class="pt-card-title">Mapear Necessidades de Aprendizagem</div>
        <div class="pt-card-purpose">Cria um diagnóstico preliminar robusto a partir de um contexto organizacional.</div>
      </div>
    </div>
    <div class="pt-card-body">
      <div class="pt-prompt">Atue como consultor especializado em diagnóstico de necessidades de aprendizagem.

A partir do contexto fornecido, elabore um diagnóstico preliminar estruturado em:

1. <strong>Conhecimentos:</strong> o que as pessoas precisam saber
2. <strong>Habilidades:</strong> o que precisam saber fazer
3. <strong>Atitudes e comportamentos:</strong> como precisam se posicionar
4. <strong>Práticas de gestão:</strong> o que líderes precisam fazer diferente
5. <strong>Capacidades organizacionais:</strong> o que a empresa precisa desenvolver como sistema

Para cada dimensão, indique o grau estimado de gap, urgência e interdependência com as demais.</div>
      <div class="pt-context">
        <div class="pt-context-tag"><span class="pin">📌</span> Contexto organizacional: ___</div>
      </div>
    </div>
  </div>

  <div class="pt-card">
    <div class="pt-card-header">
      <div class="pt-card-num">Prompt 05</div>
      <div class="pt-card-meta">
        <div class="pt-card-title">Identificar Gaps por Público</div>
        <div class="pt-card-purpose">Mapeia necessidades distintas por nível hierárquico ou grupo funcional.</div>
      </div>
    </div>
    <div class="pt-card-body">
      <div class="pt-prompt">Atue como especialista em gestão de talentos e aprendizagem organizacional.

A partir do desafio descrito, identifique os principais gaps de aprendizagem para cada um dos seguintes públicos:

- Alta liderança e executivos
- Média gestão e líderes de equipe
- Especialistas e profissionais técnicos
- Times operacionais e de linha de frente

Para cada público, detalhe: qual é o gap central, qual o impacto de não endereçá-lo, e qual abordagem educacional seria mais eficaz.</div>
      <div class="pt-context">
        <div class="pt-context-tag"><span class="pin">📌</span> Desafio ou contexto organizacional: ___</div>
      </div>
    </div>
  </div>

  <div class="pt-card">
    <div class="pt-card-header">
      <div class="pt-card-num">Prompt 06</div>
      <div class="pt-card-meta">
        <div class="pt-card-title">Criar Roteiro de Entrevista com Stakeholders</div>
        <div class="pt-card-purpose">Prepara um levantamento qualitativo robusto para embasar decisões educacionais.</div>
      </div>
    </div>
    <div class="pt-card-body">
      <div class="pt-prompt">Atue como consultor de educação corporativa preparando um processo de escuta qualificada.

Elabore um roteiro de entrevista semiestruturada para conduzir com stakeholders-chave. O roteiro deve cobrir:

- Estratégia e prioridades do negócio
- Desafios de performance e resultados esperados
- Gaps de competências percebidos
- Aspectos culturais e comportamentais críticos
- Processos de transformação em curso
- Indicadores de sucesso que a educação deveria impactar

Inclua de 3 a 5 perguntas por bloco, com variações para perfis de liderança e especialistas. Finalize com orientações para condução da entrevista.</div>
      <div class="pt-context">
        <div class="pt-context-tag"><span class="pin">📌</span> Contexto ou tema do levantamento: ___</div>
      </div>
    </div>
  </div>
</div>

---

<div class="pt-section" id="competencias">
  <div class="pt-section-header">
    <div class="pt-section-num">03</div>
    <div class="pt-section-info">
      <div class="label">Categoria 03</div>
      <div class="name">Mapeamento de Competências</div>
      <div class="desc">Para estruturar capacidades, perfis de desenvolvimento e evolução profissional.</div>
    </div>
  </div>

  <div class="pt-card">
    <div class="pt-card-header">
      <div class="pt-card-num">Prompt 07</div>
      <div class="pt-card-meta">
        <div class="pt-card-title">Construir Mapa de Competências</div>
        <div class="pt-card-purpose">Estrutura um framework de competências completo e contextualizado para um público específico.</div>
      </div>
    </div>
    <div class="pt-card-body">
      <div class="pt-prompt">Atue como especialista em gestão por competências.

Construa um mapa de competências para o público descrito, organizado em quatro dimensões:

1. <strong>Competências técnicas</strong> — conhecimentos e habilidades específicas da função
2. <strong>Competências de negócio</strong> — capacidade de gerar resultado e visão estratégica
3. <strong>Competências humanas</strong> — relacionamento, comunicação, colaboração
4. <strong>Competências de liderança</strong> — quando aplicável ao perfil

Para cada competência, inclua: nome, definição objetiva e 2 a 3 comportamentos observáveis que evidenciam sua presença.</div>
      <div class="pt-context">
        <div class="pt-context-tag"><span class="pin">📌</span> Público-alvo: ___</div>
        <div class="pt-context-tag"><span class="pin">📌</span> Contexto organizacional: ___</div>
      </div>
    </div>
  </div>

  <div class="pt-card">
    <div class="pt-card-header">
      <div class="pt-card-num">Prompt 08</div>
      <div class="pt-card-meta">
        <div class="pt-card-title">Criar Níveis de Proficiência</div>
        <div class="pt-card-purpose">Define progressão clara de desenvolvimento para orientar trilhas e avaliações.</div>
      </div>
    </div>
    <div class="pt-card-body">
      <div class="pt-prompt">Atue como especialista em desenvolvimento de competências.

Defina 4 níveis de proficiência para cada competência listada. Para cada nível, descreva:

- Nome do nível (ex: Iniciante, Praticante, Avançado, Referência)
- Descrição objetiva do estágio
- Comportamentos observáveis e entregas esperadas
- Grau de autonomia e influência
- Sinal de prontidão para avançar ao próximo nível

Mantenha consistência entre as competências e linguagem acessível para uso em avaliações e PDIs.</div>
      <div class="pt-context">
        <div class="pt-context-tag"><span class="pin">📌</span> Lista de competências: ___</div>
      </div>
    </div>
  </div>

  <div class="pt-card">
    <div class="pt-card-header">
      <div class="pt-card-num">Prompt 09</div>
      <div class="pt-card-meta">
        <div class="pt-card-title">Conectar Competências à Estratégia</div>
        <div class="pt-card-purpose">Demonstra o valor estratégico do desenvolvimento de competências para lideranças e negócios.</div>
      </div>
    </div>
    <div class="pt-card-body">
      <div class="pt-prompt">Atue como consultor de estratégia e desenvolvimento organizacional.

Para cada competência listada, demonstre sua conexão direta com os objetivos estratégicos da organização. Organize a análise em cinco eixos:

- <strong>Execução:</strong> como a competência apoia entrega de resultados
- <strong>Inovação:</strong> como contribui para geração de novas soluções
- <strong>Eficiência:</strong> impacto em produtividade e qualidade
- <strong>Experiência do cliente:</strong> influência na jornada e satisfação
- <strong>Transformação:</strong> papel na mudança cultural e adaptação

Conclua com uma narrativa executiva que justifique o investimento no desenvolvimento dessas competências.</div>
      <div class="pt-context">
        <div class="pt-context-tag"><span class="pin">📌</span> Lista de competências: ___</div>
        <div class="pt-context-tag"><span class="pin">📌</span> Objetivos estratégicos da organização: ___</div>
      </div>
    </div>
  </div>
</div>

---

<div class="pt-section" id="trilhas">
  <div class="pt-section-header">
    <div class="pt-section-num">04</div>
    <div class="pt-section-info">
      <div class="label">Categoria 04</div>
      <div class="name">Trilhas de Aprendizagem</div>
      <div class="desc">Para desenhar jornadas, trilhas e progressões de desenvolvimento.</div>
    </div>
  </div>

  <div class="pt-card">
    <div class="pt-card-header">
      <div class="pt-card-num">Prompt 10</div>
      <div class="pt-card-meta">
        <div class="pt-card-title">Criar Trilha por Objetivo de Negócio</div>
        <div class="pt-card-purpose">Conecta diretamente o design da trilha a um resultado esperado pelo negócio.</div>
      </div>
    </div>
    <div class="pt-card-body">
      <div class="pt-prompt">Atue como designer instrucional sênior com visão estratégica.

Desenhe uma trilha de aprendizagem orientada ao objetivo estratégico descrito. Estruture a trilha em etapas sequenciais, incluindo para cada uma:

- Nome e objetivo de aprendizagem da etapa
- Temas e conteúdos centrais
- Formatos recomendados e justificativa pedagógica
- Carga horária estimada
- Entregável ou evidência de aprendizagem
- Critério de avanço para a próxima etapa

Conclua com um mapa visual da trilha e sugestões de rituais de acompanhamento.</div>
      <div class="pt-context">
        <div class="pt-context-tag"><span class="pin">📌</span> Objetivo estratégico: ___</div>
        <div class="pt-context-tag"><span class="pin">📌</span> Público-alvo: ___</div>
      </div>
    </div>
  </div>

  <div class="pt-card">
    <div class="pt-card-header">
      <div class="pt-card-num">Prompt 11</div>
      <div class="pt-card-meta">
        <div class="pt-card-title">Criar Trilha por Nível de Senioridade</div>
        <div class="pt-card-purpose">Organiza o desenvolvimento progressivo respeitando repertório e complexidade por nível.</div>
      </div>
    </div>
    <div class="pt-card-body">
      <div class="pt-prompt">Atue como especialista em arquitetura de aprendizagem.

Monte uma trilha de desenvolvimento para o tema indicado, segmentada em três níveis de senioridade:

- <strong>Iniciante:</strong> fundamentos, conceitos essenciais, primeiras aplicações
- <strong>Intermediário:</strong> aprofundamento, prática contextualizada, resolução de problemas
- <strong>Avançado:</strong> domínio, inovação, liderança do tema, capacidade de multiplicar

Para cada nível, indique: o que precisa ser dominado, em que sequência, com qual profundidade e com quais formatos. Inclua critérios de transição entre níveis.</div>
      <div class="pt-context">
        <div class="pt-context-tag"><span class="pin">📌</span> Público-alvo: ___</div>
        <div class="pt-context-tag"><span class="pin">📌</span> Tema da trilha: ___</div>
      </div>
    </div>
  </div>

  <div class="pt-card">
    <div class="pt-card-header">
      <div class="pt-card-num">Prompt 12</div>
      <div class="pt-card-meta">
        <div class="pt-card-title">Recomendar Arquitetura de Trilha</div>
        <div class="pt-card-purpose">Define a combinação ideal de formatos e modalidades para maximizar aprendizagem e aplicação.</div>
      </div>
    </div>
    <div class="pt-card-body">
      <div class="pt-prompt">Atue como arquiteto de aprendizagem com foco em impacto e engajamento.

Recomende a melhor arquitetura para uma trilha de aprendizagem sobre o tema indicado, combinando de forma integrada:

- Conteúdos assíncronos (autoestudo digital, vídeos, leituras)
- Workshops e encontros síncronos (online ou presencial)
- Práticas aplicadas e desafios reais
- Mentoria, coaching ou aprendizagem entre pares
- Rituais de acompanhamento e consolidação

Justifique as escolhas pedagógicas, indique proporção entre modalidades e sinalize possíveis pontos de evasão e como mitigá-los.</div>
      <div class="pt-context">
        <div class="pt-context-tag"><span class="pin">📌</span> Tema da trilha: ___</div>
        <div class="pt-context-tag"><span class="pin">📌</span> Público e contexto: ___</div>
      </div>
    </div>
  </div>
</div>

---

<div class="pt-section" id="programas">
  <div class="pt-section-header">
    <div class="pt-section-num">05</div>
    <div class="pt-section-info">
      <div class="label">Categoria 05</div>
      <div class="name">Programas e Experiências de Aprendizagem</div>
      <div class="desc">Para desenhar programas educacionais corporativos com impacto real.</div>
    </div>
  </div>

  <div class="pt-card">
    <div class="pt-card-header">
      <div class="pt-card-num">Prompt 13</div>
      <div class="pt-card-meta">
        <div class="pt-card-title">Desenhar Programa Corporativo</div>
        <div class="pt-card-purpose">Cria a estrutura completa de um programa com propósito, arquitetura e indicadores.</div>
      </div>
    </div>
    <div class="pt-card-body">
      <div class="pt-prompt">Atue como designer de programas corporativos de desenvolvimento.

Estruture um programa corporativo completo sobre o tema indicado, incluindo:

- Nome e tagline do programa
- Narrativa de propósito (por que este programa existe agora)
- Objetivos de aprendizagem e transformação esperada
- Público-alvo e critérios de elegibilidade
- Duração total e carga horária
- Módulos com temas, formatos e duração
- Projeto de aplicação prática
- Rituais de acompanhamento e comunidade
- Indicadores de sucesso em engajamento, aprendizagem e impacto</div>
      <div class="pt-context">
        <div class="pt-context-tag"><span class="pin">📌</span> Tema do programa: ___</div>
      </div>
    </div>
  </div>

  <div class="pt-card">
    <div class="pt-card-header">
      <div class="pt-card-num">Prompt 14</div>
      <div class="pt-card-meta">
        <div class="pt-card-title">Criar Jornada Blended</div>
        <div class="pt-card-purpose">Integra formatos digitais, presenciais e práticos em uma experiência coesa.</div>
      </div>
    </div>
    <div class="pt-card-body">
      <div class="pt-prompt">Atue como designer instrucional especializado em aprendizagem híbrida.

Desenhe uma jornada blended completa que integre de forma coesa:

- Preparação digital (pré-trabalho assíncrono)
- Encontros síncronos (workshops, lives, grupos de discussão)
- Atividades práticas e aplicação no trabalho real
- Acompanhamento pós-formação e consolidação

Para cada momento da jornada, detalhe: objetivo, formato, duração, facilitação e conexão com o anterior e o próximo. Inclua orientações para gestores sobre como apoiar a jornada.</div>
      <div class="pt-context">
        <div class="pt-context-tag"><span class="pin">📌</span> Contexto e público da jornada: ___</div>
      </div>
    </div>
  </div>

  <div class="pt-card">
    <div class="pt-card-header">
      <div class="pt-card-num">Prompt 15</div>
      <div class="pt-card-meta">
        <div class="pt-card-title">Criar Programa com Foco em Transformação</div>
        <div class="pt-card-purpose">Vai além do conteúdo: transforma práticas, decisões e cultura organizacional.</div>
      </div>
    </div>
    <div class="pt-card-body">
      <div class="pt-prompt">Atue como consultor de transformação organizacional com expertise em educação.

Proponha um programa educacional que não apenas transmita conhecimento, mas que gere mudança real em práticas, comportamentos e resultados. O programa deve contemplar:

- Diagnóstico de práticas atuais e gap de transformação
- Momentos de insight e ruptura com o status quo
- Prática deliberada em situações reais
- Estrutura de accountability e acompanhamento
- Papel da liderança como co-responsável pela mudança
- Indicadores de mudança comportamental (não apenas de aprendizagem)

Detalhe a arquitetura completa e os principais riscos de implementação.</div>
      <div class="pt-context">
        <div class="pt-context-tag"><span class="pin">📌</span> Área ou público-alvo: ___</div>
        <div class="pt-context-tag"><span class="pin">📌</span> Desafio de transformação: ___</div>
      </div>
    </div>
  </div>
</div>

---

<div class="pt-section" id="design">
  <div class="pt-section-header">
    <div class="pt-section-num">06</div>
    <div class="pt-section-info">
      <div class="label">Categoria 06</div>
      <div class="name">Design Instrucional</div>
      <div class="desc">Para estruturar experiências de aprendizagem mais eficazes e orientadas à aplicação.</div>
    </div>
  </div>

  <div class="pt-card">
    <div class="pt-card-header">
      <div class="pt-card-num">Prompt 19</div>
      <div class="pt-card-meta">
        <div class="pt-card-title">Transformar Tema em Objetivos de Aprendizagem</div>
        <div class="pt-card-purpose">Traduz conteúdo em intenção pedagógica clara, mensurável e aplicável.</div>
      </div>
    </div>
    <div class="pt-card-body">
      <div class="pt-prompt">Atue como designer instrucional com domínio de taxonomia de Bloom e aprendizagem aplicada.

Converta o tema indicado em objetivos de aprendizagem bem formulados. Para cada objetivo:

- Use verbos de ação precisos (ex: analisar, aplicar, avaliar, criar)
- Especifique o contexto de aplicação esperado
- Indique o nível cognitivo (compreensão, aplicação, análise, síntese)
- Diferencie entre objetivos de conhecimento, habilidade e atitude

Ao final, organize os objetivos em sequência lógica de desenvolvimento e indique como podem ser avaliados.</div>
      <div class="pt-context">
        <div class="pt-context-tag"><span class="pin">📌</span> Tema do conteúdo: ___</div>
      </div>
    </div>
  </div>

  <div class="pt-card">
    <div class="pt-card-header">
      <div class="pt-card-num">Prompt 20</div>
      <div class="pt-card-meta">
        <div class="pt-card-title">Estruturar Aula ou Workshop</div>
        <div class="pt-card-purpose">Cria um plano instrucional completo com abertura, desenvolvimento e fechamento.</div>
      </div>
    </div>
    <div class="pt-card-body">
      <div class="pt-prompt">Atue como designer instrucional e facilitador experiente.

Elabore um plano instrucional detalhado para a sessão indicada, contemplando:

- <strong>Abertura:</strong> conexão com contexto e ativação do interesse
- Apresentação do problema ou desafio central
- Desenvolvimento do conteúdo principal (com momentos de verificação)
- Atividade prática ou desafio de aplicação
- Espaço de reflexão e compartilhamento
- <strong>Fechamento:</strong> síntese, comprometimento e próximos passos

Indique tempo estimado para cada momento, recursos necessários e adaptações para formato online e presencial.</div>
      <div class="pt-context">
        <div class="pt-context-tag"><span class="pin">📌</span> Duração da sessão: ___</div>
        <div class="pt-context-tag"><span class="pin">📌</span> Tema e público: ___</div>
      </div>
    </div>
  </div>

  <div class="pt-card">
    <div class="pt-card-header">
      <div class="pt-card-num">Prompt 21</div>
      <div class="pt-card-meta">
        <div class="pt-card-title">Criar Atividades Práticas</div>
        <div class="pt-card-purpose">Gera atividades que conectam aprendizagem à resolução de problemas reais.</div>
      </div>
    </div>
    <div class="pt-card-body">
      <div class="pt-prompt">Atue como designer instrucional especializado em aprendizagem experiencial.

Crie 10 atividades práticas para ensinar o tema indicado em contexto corporativo. Para cada atividade, detalhe:

- Nome e objetivo pedagógico
- Descrição da atividade (passo a passo)
- Formato (individual, dupla, grupo)
- Tempo estimado
- Conexão com o trabalho real
- Debriefing sugerido

Priorize atividades que gerem aplicação imediata, colaboração e reflexão crítica.</div>
      <div class="pt-context">
        <div class="pt-context-tag"><span class="pin">📌</span> Tema e público-alvo: ___</div>
      </div>
    </div>
  </div>
</div>

---

<div class="pt-section" id="avaliacao">
  <div class="pt-section-header">
    <div class="pt-section-num">07</div>
    <div class="pt-section-info">
      <div class="label">Categoria 07</div>
      <div class="name">Avaliação de Impacto e Mensuração</div>
      <div class="desc">Para medir resultado além de presença e conclusão — avaliando impacto real.</div>
    </div>
  </div>

  <div class="pt-card">
    <div class="pt-card-header">
      <div class="pt-card-num">Prompt 37</div>
      <div class="pt-card-meta">
        <div class="pt-card-title">Criar Indicadores de Sucesso</div>
        <div class="pt-card-purpose">Define métricas em diferentes níveis para demonstrar valor e impacto do programa.</div>
      </div>
    </div>
    <div class="pt-card-body">
      <div class="pt-prompt">Atue como especialista em mensuração de aprendizagem e impacto organizacional.

Sugira indicadores de sucesso para o programa descrito, organizados em 5 níveis:

1. <strong>Engajamento:</strong> participação, conclusão, NPS da experiência
2. <strong>Aprendizagem:</strong> evidências de conhecimento e habilidade adquiridos
3. <strong>Aplicação:</strong> comportamentos observados no trabalho após o programa
4. <strong>Mudança de prática:</strong> rotinas, processos ou decisões que foram alterados
5. <strong>Impacto no negócio:</strong> resultados mensuráveis relacionados ao programa

Para cada indicador, indique: como medir, quando medir e quem é responsável.</div>
      <div class="pt-context">
        <div class="pt-context-tag"><span class="pin">📌</span> Nome e descrição do programa: ___</div>
      </div>
    </div>
  </div>

  <div class="pt-card">
    <div class="pt-card-header">
      <div class="pt-card-num">Prompt 38</div>
      <div class="pt-card-meta">
        <div class="pt-card-title">Criar Modelo de Avaliação</div>
        <div class="pt-card-purpose">Estrutura um processo de avaliação multi-dimensional para uma jornada de aprendizagem.</div>
      </div>
    </div>
    <div class="pt-card-body">
      <div class="pt-prompt">Atue como especialista em avaliação de programas educacionais.

Desenhe um modelo de avaliação completo para a jornada indicada, combinando:

- Avaliação de reação (percepção imediata)
- Evidências de aprendizagem (testes, projetos, desafios)
- Avaliação de transferência (aplicação no trabalho — 30, 60 e 90 dias)
- Sinais de impacto organizacional (indicadores de negócio)

Detalhe instrumentos de coleta, periodicidade, responsáveis e como os dados alimentam a melhoria contínua da jornada.</div>
      <div class="pt-context">
        <div class="pt-context-tag"><span class="pin">📌</span> Nome e estrutura da jornada: ___</div>
      </div>
    </div>
  </div>

  <div class="pt-card">
    <div class="pt-card-header">
      <div class="pt-card-num">Prompt 39</div>
      <div class="pt-card-meta">
        <div class="pt-card-title">Traduzir Educação em Valor para o Negócio</div>
        <div class="pt-card-purpose">Constrói narrativa executiva que conecta desenvolvimento humano a resultado organizacional.</div>
      </div>
    </div>
    <div class="pt-card-body">
      <div class="pt-prompt">Atue como consultor estratégico de educação corporativa.

Elabore uma narrativa executiva que demonstre como a iniciativa educacional descrita gera valor mensurável para o negócio. A narrativa deve cobrir:

- Conexão entre desenvolvimento e performance individual e coletiva
- Impacto em eficiência operacional e qualidade
- Contribuição para inovação e adaptabilidade
- Relação com retenção de talentos e cultura
- Papel na aceleração de transformações estratégicas

Conclua com um framework de valor que possa ser apresentado a lideranças executivas e ao board.</div>
      <div class="pt-context">
        <div class="pt-context-tag"><span class="pin">📌</span> Iniciativa educacional e contexto: ___</div>
      </div>
    </div>
  </div>
</div>

---

<div class="pt-section" id="ia">
  <div class="pt-section-header">
    <div class="pt-section-num">08</div>
    <div class="pt-section-info">
      <div class="label">Categoria 08</div>
      <div class="name">IA Aplicada à Educação Corporativa</div>
      <div class="desc">Para uso inteligente de IA no design, personalização e operação da área.</div>
    </div>
  </div>

  <div class="pt-card">
    <div class="pt-card-header">
      <div class="pt-card-num">Prompt 43</div>
      <div class="pt-card-meta">
        <div class="pt-card-title">Usar IA para Personalizar Jornadas</div>
        <div class="pt-card-purpose">Define estratégia concreta de personalização com IA sem perder coerência pedagógica.</div>
      </div>
    </div>
    <div class="pt-card-body">
      <div class="pt-prompt">Atue como especialista em tecnologia educacional e aprendizagem adaptativa.

Desenhe uma estratégia para uso de IA na personalização de jornadas de aprendizagem no contexto descrito. A estratégia deve contemplar:

- Dados e sinais que alimentam a personalização (perfil, comportamento, performance)
- Tipos de personalização viáveis (sequência, conteúdo, ritmo, formato)
- Pontos de intervenção humana necessários
- Guardrails pedagógicos e alinhamento estratégico
- Recomendações de ferramentas e modelos de implementação
- Riscos e critérios de sucesso

Equilibre sofisticação tecnológica com viabilidade de implementação.</div>
      <div class="pt-context">
        <div class="pt-context-tag"><span class="pin">📌</span> Contexto organizacional e maturidade digital: ___</div>
      </div>
    </div>
  </div>

  <div class="pt-card">
    <div class="pt-card-header">
      <div class="pt-card-num">Prompt 44</div>
      <div class="pt-card-meta">
        <div class="pt-card-title">Criar Tutor de Aprendizagem com IA</div>
        <div class="pt-card-purpose">Projeta o papel de um assistente de IA como acompanhante da jornada educacional.</div>
      </div>
    </div>
    <div class="pt-card-body">
      <div class="pt-prompt">Atue como designer de experiências de aprendizagem aumentadas por IA.

Desenhe o papel de um assistente de IA para apoiar uma jornada de aprendizagem, definindo:

- Papel e identidade do assistente (nome, tom, propósito)
- Funções <strong>antes</strong> da experiência: preparação, contextualização, diagnóstico
- Funções <strong>durante:</strong> suporte, aprofundamento, verificação, adaptação
- Funções <strong>depois:</strong> consolidação, aplicação, reflexão, acompanhamento
- Limites claros do que o assistente faz e não faz
- Integração com o papel do facilitador humano

Conclua com um protótipo de interação para cada fase.</div>
      <div class="pt-context">
        <div class="pt-context-tag"><span class="pin">📌</span> Tema e contexto da jornada: ___</div>
      </div>
    </div>
  </div>

  <div class="pt-card">
    <div class="pt-card-header">
      <div class="pt-card-num">Prompt 45</div>
      <div class="pt-card-meta">
        <div class="pt-card-title">Mapear Casos de Uso de IA na Área</div>
        <div class="pt-card-purpose">Identifica oportunidades concretas de uso de IA em toda a cadeia da educação corporativa.</div>
      </div>
    </div>
    <div class="pt-card-body">
      <div class="pt-prompt">Atue como especialista em inovação aplicada à educação corporativa.

Elenque casos de uso práticos e viáveis de IA para a área de educação, organizados em 6 dimensões:

1. <strong>Estratégia:</strong> análise de dados, priorização, cenários
2. <strong>Design:</strong> geração de conteúdo, estruturação de trilhas, protótipos
3. <strong>Curadoria:</strong> filtro e organização de conteúdos, atualização contínua
4. <strong>Facilitação:</strong> assistentes, simulações, role-plays, feedback automatizado
5. <strong>Mensuração:</strong> análise de dados de aprendizagem, predição de impacto
6. <strong>Operação:</strong> automações, gestão de demandas, relatórios

Para cada caso, indique: nível de maturidade necessário, ferramentas disponíveis e potencial de impacto.</div>
      <div class="pt-context">
        <div class="pt-context-tag"><span class="pin">📌</span> Maturidade digital da área (básica / intermediária / avançada): ___</div>
      </div>
    </div>
  </div>
</div>
