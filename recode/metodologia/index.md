---
title: "Metodologia"
description: "32 questões em 8 componentes, escala de 0 a 4 com NS e NA, cálculo determinístico com cobertura mínima e supressão — e os limites declarados do instrumento."
---

<style>
  .trilhas{display:grid;grid-template-columns:repeat(4,1fr);gap:14px;margin-top:34px}
  @media(max-width:900px){ .trilhas{grid-template-columns:repeat(2,1fr)} }
  @media(max-width:540px){ .trilhas{grid-template-columns:1fr} }
  .trilhas > div{border-radius:14px;padding:22px;border:1px solid var(--linha);background:var(--papel)}
  .trilhas .n{font-family:var(--mono);font-size:10.5px;letter-spacing:.11em;text-transform:uppercase;color:var(--ouro)}
  .trilhas h3{font-size:17px;margin:10px 0 8px;font-weight:600}
  .trilhas p{font-size:13.5px;color:var(--tx-2);line-height:1.6}
  .trilhas .fonte{font-size:12.5px;color:var(--tx-3);margin-top:11px;padding-top:10px;border-top:1px dashed var(--linha-2)}

  .mov{display:grid;gap:12px;margin-top:32px}
  .mov > div{display:grid;grid-template-columns:54px 1fr 1.1fr;gap:22px;align-items:center;
    background:var(--papel);border:1px solid var(--linha);border-radius:14px;padding:20px 24px}
  @media(max-width:820px){ .mov > div{grid-template-columns:44px 1fr;gap:12px} .mov .inst{grid-column:2} }
  .mov .l{font-family:var(--disp);font-weight:800;font-size:28px;color:var(--ouro);line-height:1}
  .mov h3{font-size:17px;font-weight:600}
  .mov h3 small{display:block;font-family:var(--mono);font-size:10.5px;letter-spacing:.1em;
    text-transform:uppercase;color:var(--tx-3);font-weight:400;margin-top:4px}
  .mov .inst{font-size:13.5px;color:var(--tx-2);line-height:1.6}

  .escala{display:grid;grid-template-columns:repeat(7,1fr);gap:8px;margin-top:30px}
  @media(max-width:980px){ .escala{grid-template-columns:repeat(4,1fr)} }
  @media(max-width:600px){ .escala{grid-template-columns:repeat(2,1fr)} }
  .escala > div{border:1px solid var(--linha);border-radius:12px;padding:16px 14px;background:var(--papel);text-align:center}
  .escala .v{font-family:var(--disp);font-weight:800;font-size:26px;color:var(--tinta);line-height:1}
  .escala .r{font-size:13px;color:var(--tx-2);margin-top:9px;line-height:1.4}
  .escala .ns{background:var(--canvas);border-style:dashed}
  .escala .ns .v{font-size:19px;color:var(--tx-2);padding-top:5px}

  .regra{display:grid;gap:11px;margin-top:28px}
  .regra > div{display:grid;grid-template-columns:30px 1fr;gap:15px;align-items:start;
    background:var(--canvas);border:1px solid var(--linha);border-radius:12px;padding:17px 19px}
  .regra .i{font-family:var(--mono);font-size:12px;color:var(--ouro);padding-top:2px}
  .regra p{font-size:14.5px;color:var(--tx);line-height:1.6}
  .regra p b{color:var(--tinta)}

  .ev{display:grid;grid-template-columns:repeat(5,1fr);gap:10px;margin-top:30px}
  @media(max-width:860px){ .ev{grid-template-columns:repeat(2,1fr)} }
  @media(max-width:480px){ .ev{grid-template-columns:1fr} }
  .ev > div{background:var(--painel);border:1px solid var(--linha-2);border-radius:12px;padding:18px}
  .ev .c{font-family:var(--mono);font-size:15px;color:var(--tx-2);font-weight:500}
  .ev p{font-size:13.5px;color:var(--tx);margin-top:8px;line-height:1.55}

  .saida{background:var(--canvas);border:1px solid var(--linha);border-radius:16px;
    padding:26px 28px;margin-top:30px}
  .saida .r{font-family:var(--mono);font-size:10.5px;letter-spacing:.11em;text-transform:uppercase;
    color:var(--tx-3);margin-bottom:13px}
  .saida p{font-size:15.5px;line-height:1.7;color:var(--tx)}
  .saida p b{color:var(--tinta)}
  .saida .alerta{margin-top:13px;font-size:14px;color:var(--atencao);font-weight:500}

  .refs{display:grid;gap:9px;margin-top:26px}
  .refs a{font-size:14.5px;color:var(--tx);text-decoration:none;line-height:1.55;
    border-left:2px solid var(--linha-2);padding-left:14px;transition:border-color .18s,color .18s}
  .refs a:hover{border-left-color:var(--ouro);color:var(--tinta)}
  .refs a span{display:block;font-size:12.5px;color:var(--tx-3);margin-top:2px}
</style>

<section class="cap">
  <div class="wrap">
    <div class="olho">Metodologia</div>
    <h1>Como medimos — e o que a medida não autoriza concluir</h1>
    <p class="sub">O instrumento é explícito nos seus limites. Um questionário mede percepção.
       Transformar isso em decisão exige evidência, baseline e julgamento humano — e o método
       mantém as três coisas separadas de propósito.</p>
  </div>
</section>

<section class="sec">
  <div class="wrap">
    <div class="olho">O princípio central</div>
    <h2 class="tit larga">Percepção ≠ evidência ≠ performance ≠ valor capturado</h2>
    <p class="lead">Confundir essas quatro coisas é a forma mais comum de um diagnóstico de IA
       produzir uma recomendação errada com aparência de dado.</p>

    <div class="trilhas">
      <div>
        <div class="n">Trilha 1</div>
        <h3>Percepção</h3>
        <p>O que as pessoas declaram sobre as práticas da organização, numa escala de 0 a 4.</p>
        <div class="fonte">Fonte: questionário. Nunca equivale a comprovação.</div>
      </div>
      <div>
        <div class="n">Trilha 2</div>
        <h3>Evidência</h3>
        <p>Artefato verificado por um revisor, classificado de E0 a E4, com origem, data e
           nível de confiança.</p>
        <div class="fonte">Fonte: consultor. Avaliada à parte do survey.</div>
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

    <div class="nota aviso">
      <b>Tempo liberado não é economia realizada.</b> Só atribuímos redução de custo quando há
      alteração efetiva e documentada em estrutura, contratação, realocação ou mix de entregas.
      Capacidade que cresce pode ser reinvestida em qualidade, receita ou oferta nova — e forçar
      a tradução para headcount é um erro de leitura, não uma conta conservadora.
    </div>
  </div>
</section>

<section class="sec canvas">
  <div class="wrap">
    <div class="olho">O instrumento</div>
    <h2 class="tit larga">32 questões, oito componentes, quatro por componente</h2>
    <p class="lead">Afirmações comportamentais com IDs estáveis de <code>H1-Q01</code> a
       <code>H8-Q04</code>. A pessoa marca o nível que descreve a organização, não a si mesma.</p>

    <div class="escala">
      <div><div class="v">0</div><div class="r">Ausente</div></div>
      <div><div class="v">1</div><div class="r">Pontual</div></div>
      <div><div class="v">2</div><div class="r">Parcial</div></div>
      <div><div class="v">3</div><div class="r">Consistente</div></div>
      <div><div class="v">4</div><div class="r">Monitorada</div></div>
      <div class="ns"><div class="v">NS</div><div class="r">Não sei</div></div>
      <div class="ns"><div class="v">NA</div><div class="r">Não se aplica</div></div>
    </div>

    <div class="nota">
      <b>NS e NA não pontuam e não são penalizados.</b> Eles viram cobertura: a frequência com que
      aparecem é lida como incerteza do grupo, que é informação — e não ruído a ser preenchido
      com zero.
    </div>

    <h3 style="font-size:21px;margin-top:46px">As regras de cálculo, por extenso</h3>
    <div class="regra">
      <div><div class="i">01</div>
        <p><b>Por pessoa, em cada componente:</b> média simples dos quatro itens, desde que ao
           menos três sejam numéricos. Com menos que isso, o componente fica <b>sem cobertura</b> —
           e sem cobertura não é zero.</p></div>
      <div><div class="i">02</div>
        <p><b>Por empresa, em cada componente:</b> média das notas individuais válidas, somente se
           houver <b>pelo menos 7 respostas válidas</b> e cobertura de <b>50% ou mais</b> das
           submissões. Abaixo disso, o painel mostra “evidência insuficiente para agregar”.</p></div>
      <div><div class="i">03</div>
        <p><b>Índice geral:</b> média simples dos oito componentes, e só quando todos os oito forem
           publicáveis. O rótulo é sempre <b>índice descritivo de prontidão percebida</b> — não
           é nota de maturidade.</p></div>
      <div><div class="i">04</div>
        <p><b>Segmentações:</b> mínimo de 7 pessoas por célula e por interseção, com supressão
           complementar. Filtros sucessivos que permitiriam deduzir um indivíduo são bloqueados.</p></div>
      <div><div class="i">05</div>
        <p><b>Sem imputação:</b> ausência de resposta nunca vira zero, e valor suprimido nunca é
           preenchido nem reconstruível por diferença entre filtros ou exportações.</p></div>
      <div><div class="i">06</div>
        <p><b>Controles críticos não se compensam:</b> fragilidades em H6 e H7 aparecem como
           alerta próprio, mesmo quando a média geral está alta. Média não autoriza escalar.</p></div>
    </div>

    <div class="nota">
      <b>O limiar de 7 é um padrão inicial de privacidade</b>, adotado para os pilotos e sujeito a
      confirmação por avaliação de risco e pelo desenho da população de cada cliente.
    </div>
  </div>
</section>

<section class="sec escura ctx-escuro">
  <div class="wrap">
    <div class="olho">Evidências</div>
    <h2 class="tit larga">Cinco níveis, avaliados fora do questionário</h2>
    <p class="lead">A nota de percepção <b>não muda</b> em função da evidência. As duas aparecem
       lado a lado no painel, e a divergência entre elas costuma ser o achado mais útil.</p>

    <div class="ev">
      <div><div class="c">E0</div><p>Sem evidência.</p></div>
      <div><div class="c">E1</div><p>Relato ou descrição, sem artefato.</p></div>
      <div><div class="c">E2</div><p>Documento ou plano plausível.</p></div>
      <div><div class="c">E3</div><p>Prática operacional demonstrada.</p></div>
      <div><div class="c">E4</div><p>Prática monitorada, com dados ou traces verificáveis.</p></div>
    </div>

    <div class="nota">
      <b>E0–E4 são rótulos internos de evidência.</b> Não são certificação, selo, auditoria legal
      nem avaliação independente. Servem para qualificar o grau de confiança de cada recomendação
      — e para deixar explícito quando a confiança é baixa.
    </div>
  </div>
</section>

<section class="sec">
  <div class="wrap">
    <div class="olho">A intervenção</div>
    <h2 class="tit larga">RECODE: seis movimentos, que não são as oito dimensões</h2>
    <p class="lead">Confundir os dois é comum e atrapalha: os oito componentes descrevem o que se
       mede; os seis movimentos descrevem o que se faz. Um movimento pode atuar sobre vários
       componentes, e um componente pode exigir vários movimentos.</p>

    <div class="mov">
      <div><div class="l">R</div>
        <h3>Reframe<small>Ambição e mecanismo de valor</small></h3>
        <div class="inst">Business outcome canvas, hipótese de valor e decisões de reinvestimento.</div></div>
      <div><div class="l">E</div>
        <h3>Explore<small>Missões e restrições</small></h3>
        <div class="inst">Matriz oportunidade × restrição do harness organizacional e mapa de fricções.</div></div>
      <div><div class="l">C</div>
        <h3>Co-design<small>Novo trabalho e modelo operacional</small></h3>
        <div class="inst">Blueprint humano–agente, antes e depois, sistema de filas e exceções.</div></div>
      <div><div class="l">O</div>
        <h3>Orchestrate<small>Contexto, ferramentas e verificações</small></h3>
        <div class="inst">Harness blueprint, contratos, logs e traces, controles e runbooks.</div></div>
      <div><div class="l">D</div>
        <h3>Develop<small>Liderança, papéis e capacidades</small></h3>
        <div class="inst">Matriz de competências por missão, laboratórios aplicados, redesenho de papéis.</div></div>
      <div><div class="l">E</div>
        <h3>Evaluate<small>Performance, economia e iteração</small></h3>
        <div class="inst">Baseline, value ledger, evals, painel de evidências e reinvestimento.</div></div>
    </div>

    <p class="lead" style="margin-top:26px">Governança é transversal: atravessa os seis, em vez de
       ocupar uma etapa própria no fim.</p>
  </div>
</section>

<section class="sec canvas">
  <div class="wrap">
    <div class="olho">Como uma saída se parece</div>
    <h2 class="tit larga">Toda leitura carrega base, lacuna e próxima ação</h2>

    <div class="saida">
      <div class="r">Exemplo ilustrativo de leitura — dados fictícios</div>
      <p>Na dimensão <b>H2 — Work Architecture</b>, a média percebida foi <b>2,1 de 4</b> entre
         <b>46 respostas válidas</b> de 58 submissões. Evidência revisada: <b>E1</b> — declaração,
         sem blueprint operacional. Hipótese: a automação pontual está preservando filas e
         handoffs. Próxima ação: mapear a jornada de propostas e levantar baseline de tempo
         de ciclo.</p>
      <div class="alerta">Isto é uma hipótese a testar, não uma conclusão causal.</div>
    </div>

    <div class="nota">
      <b>IA generativa pode rascunhar texto; não pode decidir nada.</b> Ela não determina pontuação,
      não publica relatório e não substitui revisão humana. Todo insight percorre estados
      explícitos — hipótese, aguardando evidência, revisado, aprovado, publicado — com autor e
      revisor registrados.
    </div>
  </div>
</section>

<section class="sec">
  <div class="wrap">
    <div class="olho">Qualidade e limites</div>
    <h2 class="tit larga">O que ainda não está validado</h2>
    <p class="lead">O instrumento é piloto. Dizer isso é parte do método — e é o que separa um
       diagnóstico útil de um selo vendido como ciência.</p>

    <div class="grade g2" style="margin-top:30px">
      <div class="cartao">
        <h3>O que já está no método</h3>
        <p>Versionamento imutável do instrumento — campanhas antigas nunca são recalculadas em
           silêncio — e as regras de cobertura, supressão e separação entre percepção e evidência
           descritas acima. <b>Teste cognitivo das 32 questões, validade aparente com especialistas
           e acompanhamento de não-resposta estão previstos para a fase de discovery</b>, antes do
           primeiro piloto: são parte do plano, não resultado já obtido.</p>
      </div>
      <div class="cartao">
        <h3>O que ainda não existe</h3>
        <p>Validação psicométrica formal, estabilidade comprovada em reaplicações e base de
           comparação entre empresas. Sem isso, não há benchmark de mercado nem certificação —
           e campanhas de versões diferentes não são diretamente comparáveis.</p>
      </div>
    </div>

    <h3 style="font-size:21px;margin-top:46px">Referências</h3>
    <p class="lead" style="margin-top:10px">A tese é uma síntese própria da Alun Business sobre
       este corpo de trabalho. Nenhuma destas organizações endossa ou valida a metodologia.</p>
    <div class="refs">
      <a href="https://openai.com/index/harness-engineering/" target="_blank" rel="noopener">
        OpenAI · Harness engineering: leveraging Codex in an agent-first world
        <span>openai.com · 2026</span></a>
      <a href="https://www.anthropic.com/research/building-effective-agents" target="_blank" rel="noopener">
        Anthropic · Building effective agents
        <span>anthropic.com · 2024</span></a>
      <a href="https://www.anthropic.com/research/demystifying-evals-for-ai-agents" target="_blank" rel="noopener">
        Anthropic · Demystifying evals for AI agents
        <span>anthropic.com · 2026</span></a>
      <a href="https://www.bcg.com/publications/2026/reinventing-the-operating-system-of-work-with-ai" target="_blank" rel="noopener">
        BCG · AI-First Enterprise Operations: Reinventing the Operating System of Work
        <span>bcg.com · 2026</span></a>
      <a href="https://www.mckinsey.com/capabilities/people-and-organization/our-insights/ai-is-changing-work-now-it-has-to-change-the-organization" target="_blank" rel="noopener">
        McKinsey · AI is changing work. Now it has to change the organization
        <span>mckinsey.com · 2026</span></a>
      <a href="https://www.weforum.org/publications/organizational-transformation-in-the-age-of-ai-how-organizations-maximize-ais-potential" target="_blank" rel="noopener">
        World Economic Forum &amp; Accenture · Organizational Transformation in the Age of AI
        <span>weforum.org · 2026</span></a>
      <a href="https://metr.org/blog/2026-02-24-uplift-update/" target="_blank" rel="noopener">
        METR · Estudo de produtividade em desenvolvimento e atualização metodológica
        <span>metr.org · 2025–2026</span></a>
      <a href="https://airc.nist.gov/airmf-resources/airmf/5-sec-core/" target="_blank" rel="noopener">
        NIST · AI Risk Management Framework
        <span>nist.gov</span></a>
    </div>

    <div class="botoes">
      <a class="bt bt-1" href="{{ '/recode/diagnostico/' | relative_url }}">Aplicar o diagnóstico</a>
      <a class="bt bt-2" href="{{ '/recode/demo/' | relative_url }}">Experimentar a demo</a>
      <a class="bt bt-2" href="{{ '/recode/contato/' | relative_url }}">Falar com a Alun Business</a>
    </div>
  </div>
</section>
