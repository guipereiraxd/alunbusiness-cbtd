---
title: "Fundamentos"
description: "A documentação técnica do Organizational Harness Assessment: instrumento, escalas, motor de cálculo, regras de agregação e supressão, classificação de evidências, privacidade, versionamento e estado de validação."
---

<style>
  .escala{display:grid;grid-template-columns:repeat(7,1fr);gap:8px;margin-top:30px}
  @media(max-width:980px){ .escala{grid-template-columns:repeat(4,1fr)} }
  @media(max-width:600px){ .escala{grid-template-columns:repeat(2,1fr)} }
  .escala > div{border:1px solid var(--linha);border-radius:12px;padding:16px 14px;
    background:var(--papel);text-align:center}
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

  .priv{display:grid;grid-template-columns:repeat(3,1fr);gap:16px;margin-top:32px}
  @media(max-width:880px){ .priv{grid-template-columns:1fr} }
  .priv > div{background:var(--painel);border:1px solid var(--linha-2);border-radius:14px;padding:22px}
  .priv h3{color:#fff;font-size:16.5px;font-weight:600}
  .priv p{font-size:13.5px;color:var(--tx-2);margin-top:9px;line-height:1.6}

  .ident{display:grid;grid-template-columns:repeat(4,1fr);gap:14px;margin-top:30px}
  @media(max-width:860px){ .ident{grid-template-columns:repeat(2,1fr)} }
  @media(max-width:480px){ .ident{grid-template-columns:1fr} }
  .ident > div{border:1px solid var(--linha);border-radius:12px;padding:18px;background:var(--papel)}
  .ident b{display:block;font-family:var(--disp);font-weight:800;font-size:24px;color:var(--tinta);
    line-height:1;letter-spacing:-.02em}
  .ident code{font-family:var(--mono);font-size:13px;color:var(--ouro);background:none;padding:0}
  .ident span{display:block;font-family:var(--mono);font-size:10.5px;letter-spacing:.1em;
    text-transform:uppercase;color:var(--tx-3);margin-top:8px}

  .estado{display:grid;grid-template-columns:1fr 1fr;gap:18px;margin-top:32px}
  @media(max-width:860px){ .estado{grid-template-columns:1fr} }
  .estado > div{border-radius:16px;padding:28px}
  .estado .feito{background:var(--papel);border:1px solid var(--linha)}
  .estado .falta{background:var(--canvas);border:1px dashed var(--linha-2)}
  .estado .r{display:inline-flex;align-items:center;gap:9px;font-family:var(--mono);font-size:10.5px;
    letter-spacing:.11em;text-transform:uppercase;margin-bottom:14px}
  .estado .feito .r{color:var(--ouro)}
  .estado .falta .r{color:var(--tx-3)}
  .estado .r::before{content:"";width:18px;height:2px;border-radius:2px;background:currentColor}
  .estado h3{font-size:19px;font-weight:600;margin-bottom:14px;letter-spacing:-.016em}
  .estado ul{margin:0;padding-left:19px;font-size:14.5px;color:var(--tx-2);line-height:1.7}
  .estado ul b{color:var(--tinta);font-weight:600}
  .estado > div > p{font-size:14px;color:var(--tx-2);line-height:1.62;margin-top:14px;
    padding-top:13px;border-top:1px solid var(--linha)}

  .refs{display:grid;gap:9px;margin-top:26px}
  .refs a{font-size:14.5px;color:var(--tx);text-decoration:none;line-height:1.55;
    border-left:2px solid var(--linha-2);padding-left:14px;transition:border-color .18s,color .18s}
  .refs a:hover{border-left-color:var(--ouro);color:var(--tinta)}
  .refs a span{display:block;font-size:12.5px;color:var(--tx-3);margin-top:2px}

  /* o scroll-margin do layout vale para h1/h2/h3; aqui as âncoras estão
     nas próprias seções, e sem isto o título encostava na barra fixa */
  section[id]{scroll-margin-top:24px}

  /* índice da própria página: é documentação, e documentação se consulta
     por trecho, não se lê do começo ao fim */
  .sumario{display:flex;flex-wrap:wrap;gap:9px;margin-top:30px}
  .sumario a{font-family:var(--mono);font-size:12px;letter-spacing:.04em;color:var(--tx-2);
    text-decoration:none;border:1px solid var(--linha-2);border-radius:999px;padding:8px 15px;
    transition:border-color .18s var(--ease),color .18s var(--ease)}
  .sumario a:hover{border-color:var(--ouro);color:var(--tinta)}
</style>

<section class="cap">
  <div class="wrap">
    <div class="olho">Fundamentos</div>
    <h1>O instrumento aberto, regra por regra</h1>
    <p class="sub">Esta é a documentação técnica do Organizational Harness Assessment, para quem
       precisa auditá-lo: o que o instrumento pergunta, como o cálculo funciona, o que ele suprime,
       o que ele nunca preenche e em que estágio de validação cada parte está. Nada aqui é
       resumo — é a regra como ela roda.</p>

    <div class="sumario">
      <a href="#instrumento">O instrumento</a>
      <a href="#calculo">Motor de cálculo</a>
      <a href="#evidencias">Evidências</a>
      <a href="#ausencias">Ausências e supressão</a>
      <a href="#privacidade">Privacidade</a>
      <a href="#versionamento">Versionamento</a>
      <a href="#estado">Estado de validação</a>
      <a href="#referencias">Referências</a>
    </div>
  </div>
</section>

<section class="sec" id="instrumento">
  <div class="wrap">
    <div class="olho">O instrumento</div>
    <h2 class="tit larga">32 questões, oito componentes, quatro por componente</h2>
    <p class="lead">Afirmações comportamentais com IDs estáveis de <code>H1-Q01</code> a
       <code>H8-Q04</code>. A pessoa marca o nível que descreve a organização, não a si mesma —
       a diferença não é retórica: ela é o que permite responder com honestidade.</p>

    <div class="ident">
      <div><b>32</b><span>questões</span></div>
      <div><b>8</b><span>componentes H1–H8</span></div>
      <div><b>4</b><span>questões por componente</span></div>
      <div><b>10–15<span style="display:inline;font-size:15px;letter-spacing:0;text-transform:none"> min</span></b><span>por respondente</span></div>
    </div>

    <h3 style="font-size:21px;margin-top:46px">A escala, com as âncoras de cada nível</h3>
    <p class="lead" style="margin-top:10px">Os rótulos são comportamentais de propósito: descrevem
       o que acontece na organização, não o quanto alguém aprova a prática.</p>

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
      <b>“Não sei” é resposta, não falha.</b> NS e NA não pontuam e não penalizam: viram cobertura.
      Um componente em que muita gente não sabe responder não é um componente fraco — é um
      componente invisível para quem opera dentro dele, e isso é um achado por si.
    </div>
  </div>
</section>

<section class="sec canvas" id="calculo">
  <div class="wrap">
    <div class="olho">Motor de cálculo</div>
    <h2 class="tit larga">As seis regras, por extenso</h2>
    <p class="lead">O cálculo é determinístico: as mesmas respostas produzem sempre o mesmo
       resultado, e nenhuma delas passa por modelo de linguagem.</p>

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
        <p><b>Índice geral, como medida secundária:</b> média simples dos oito componentes, e
           só quando todos os oito forem publicáveis. O rótulo é sempre <b>índice descritivo de
           prontidão percebida</b> — não é nota de maturidade e não autoriza decisão alguma por
           si. Ele resume a leitura para efeito de registro e comparação interna; a decisão
           executiva se apoia no perfil dos componentes, nas evidências revisadas e nas
           restrições críticas.</p></div>
      <div><div class="i">04</div>
        <p><b>Segmentações:</b> mínimo de 7 pessoas por célula e por interseção, com supressão
           complementar. Filtros sucessivos que permitiriam deduzir um indivíduo são bloqueados.</p></div>
      <div><div class="i">05</div>
        <p><b>Sem imputação:</b> ausência de resposta nunca vira zero, e valor suprimido nunca é
           preenchido nem reconstruível por diferença entre filtros ou exportações.</p></div>
      <div><div class="i">06</div>
        <p><b>Controles críticos não se compensam:</b> fragilidades em H6 e H7 aparecem como
           alerta próprio, mesmo quando a média geral está alta. Enquanto um controle crítico
           estiver ausente, nenhuma recomendação de escalar é emitida.</p></div>
    </div>

    <div class="nota aviso">
      <b>A hierarquia entre as leituras é fixa, e o índice vem por último.</b> Primeiro o perfil
      dos oito componentes e as restrições críticas; depois as evidências revisadas; o índice
      agregado entra só no fim, como resumo descritivo de percepção. Nenhum número único
      substitui essa leitura.
    </div>
  </div>
</section>

<section class="sec escura ctx-escuro" id="evidencias">
  <div class="wrap">
    <div class="olho">Evidências</div>
    <h2 class="tit larga">Cinco níveis, avaliados fora do questionário</h2>
    <p class="lead">A evidência é levantada por um consultor, não pelo respondente, e corre numa
       trilha própria. <b>A nota de percepção não muda em função da evidência.</b> As duas aparecem
       lado a lado no painel, e a divergência entre elas costuma ser o achado mais útil.</p>

    <div class="ev">
      <div><div class="c">E0</div><p>Sem evidência.</p></div>
      <div><div class="c">E1</div><p>Relato ou descrição, sem artefato.</p></div>
      <div><div class="c">E2</div><p>Documento ou plano plausível.</p></div>
      <div><div class="c">E3</div><p>Prática operacional demonstrada.</p></div>
      <div><div class="c">E4</div><p>Prática monitorada, com dados ou traces verificáveis.</p></div>
    </div>

    <div class="nota">
      <b>Por que a evidência não corrige a nota.</b> Se um documento bem escrito pudesse elevar a
      percepção declarada, o instrumento premiaria quem documenta melhor, não quem opera melhor —
      e viraria autoavaliação. Cada artefato é registrado com origem, data e grau de confiança,
      e entra na leitura como uma segunda medida, nunca como correção da primeira.
    </div>

    <div class="nota">
      <b>E0–E4 são rótulos internos de evidência.</b> Não são certificação, selo, auditoria legal
      nem avaliação independente. Servem para qualificar o grau de confiança de cada recomendação
      — e para deixar explícito quando a confiança é baixa.
    </div>
  </div>
</section>

<section class="sec" id="ausencias">
  <div class="wrap">
    <div class="olho">Ausências e supressão</div>
    <h2 class="tit larga">O que falta aparece como falta</h2>
    <p class="lead">A tentação de todo painel é preencher buraco com estimativa. Este não preenche,
       e o vocabulário existe para isso: cada tipo de ausência tem um nome próprio na tela.</p>

    <div class="grade g2" style="margin-top:30px">
      <div class="cartao">
        <h3>Sem cobertura</h3>
        <p>O respondente marcou NS ou NA em itens demais de um componente — menos de três
           numéricos dos quatro. O componente dele não entra no cálculo daquela dimensão.
           <b>Não é zero</b>, e não puxa média para baixo.</p>
      </div>
      <div class="cartao">
        <h3>Evidência insuficiente para agregar</h3>
        <p>O componente até foi respondido, mas o grupo não alcançou as 7 respostas válidas ou os
           50% de cobertura. Ele aparece nomeado, com o motivo, e <b>fica fora do índice
           descritivo</b> em vez de entrar com um número frágil.</p>
      </div>
    </div>

    <div class="nota">
      <b>Valor suprimido nunca é reconstruível.</b> Quando um recorte é suprimido por ser pequeno
      demais, a célula complementar também é — senão bastaria subtrair para revelar o grupo
      oculto. Isso vale na tela, na API, no PDF e no CSV.
    </div>
  </div>
</section>

<section class="sec escura ctx-escuro" id="privacidade">
  <div class="wrap">
    <div class="olho">Privacidade do respondente</div>
    <h2 class="tit larga">Quem responde está protegido por desenho, não por política</h2>
    <p class="lead">Um instrumento que pode ser usado contra quem respondeu deixa de receber
       respostas honestas, e aí não mede nada. As proteções abaixo não são opcionais.</p>

    <div class="priv">
      <div>
        <h3>Nenhum resultado individual</h3>
        <p>A empresa recebe apenas agregados. Dados brutos do questionário não são disponibilizados
           ao gestor, e não existe página de resultado pessoal acessível por link.</p>
      </div>
      <div>
        <h3>Grupos pequenos são suprimidos</h3>
        <p>Nenhum recorte com menos de 7 respostas válidas é publicado — na tela, na API, no PDF
           e no CSV. Células complementares também são suprimidas quando a diferença revelaria
           o grupo oculto.</p>
      </div>
      <div>
        <h3>Participação separada de resposta</h3>
        <p>O administrador pode acompanhar quem respondeu, se isso tiver sido comunicado. Mas
           cruzar status individual com conteúdo de resposta é impedido por desenho, não por
           política.</p>
      </div>
    </div>

    <div class="nota">
      <b>Não prometemos anonimato absoluto.</b> O convite é identificado para poder ser enviado,
      então a palavra certa é pseudonimização. Dizer o contrário seria mais confortável e menos
      verdadeiro.
    </div>
  </div>
</section>

<section class="sec" id="versionamento">
  <div class="wrap">
    <div class="olho">Versionamento</div>
    <h2 class="tit larga">Campanha antiga não é recalculada em silêncio</h2>
    <p class="lead">O instrumento é imutável por versão. Quando uma questão muda de redação, de
       âncora ou de componente, nasce uma versão nova — e as campanhas já aplicadas continuam
       valendo sob a versão em que foram respondidas.</p>

    <div class="grade g2" style="margin-top:30px">
      <div class="cartao">
        <h3>O que fica registrado</h3>
        <p>Cada devolutiva carrega a versão do instrumento, a janela da campanha, a amostra e o
           grau de confiança por afirmação. Sem esses quatro campos, um número não significa
           nada seis meses depois.</p>
      </div>
      <div class="cartao">
        <h3>O que isso custa</h3>
        <p>Campanhas de versões diferentes <b>não são diretamente comparáveis</b>. É o preço de
           não reescrever o passado — e preferimos pagá-lo a oferecer uma série temporal que
           mudou de régua no meio.</p>
      </div>
    </div>

    <div class="nota">
      <b>IA generativa pode rascunhar texto; não decide nada.</b> Não determina pontuação, não
      publica relatório e não substitui revisão humana — todo insight tem autor e revisor
      registrados.
    </div>
  </div>
</section>

<section class="sec canvas" id="estado">
  <div class="wrap">
    <div class="olho">Estado de desenvolvimento e validação</div>
    <h2 class="tit larga">O que já está construído, e o que depende de evidência</h2>
    <p class="lead">O instrumento é piloto, e essa distinção é parte do método. Ela separa o que a
       Alun Business desenvolveu e sustenta do que ainda não tem base empírica para afirmar.</p>

    <div class="estado">
      <div class="feito">
        <div class="r">Construído e sustentado</div>
        <h3>Ativos de método e desenho</h3>
        <ul>
          <li>A <b>taxonomia H1–H8</b> do harness organizacional, com as 32 afirmações
              comportamentais e seus IDs estáveis</li>
          <li>Os <b>seis movimentos RECODE</b>, com trabalho e artefatos definidos por movimento</li>
          <li>O <b>mecanismo de análise de restrições por missão de negócio</b> — a unidade de
              intervenção que amarra indicador, patrocinador e limite de risco</li>
          <li>A <b>separação entre percepção, evidência, performance e valor capturado</b>, com
              fonte declarada em cada trilha</li>
          <li>As <b>regras de cálculo, cobertura, supressão e não compensação</b> descritas nesta
              página</li>
          <li>As <b>regras de privacidade e governança</b> do diagnóstico, incluindo o
              versionamento imutável</li>
          <li>Os <b>instrumentos de redesenho do modelo operacional</b> aplicados no Redesign</li>
        </ul>
        <p>São ativos de método e desenho: existem, estão especificados e são auditáveis. Afirmá-los
           não depende de validação científica — depende de que estejam escritos, e estão.</p>
      </div>

      <div class="falta">
        <div class="r">Depende de evidência futura</div>
        <h3>O que ainda não podemos afirmar</h3>
        <ul>
          <li><b>Validação psicométrica formal</b> do instrumento</li>
          <li><b>Estabilidade comprovada</b> em reaplicações na mesma organização</li>
          <li><b>Base de comparação entre empresas</b> — e portanto nenhum benchmark de mercado</li>
          <li><b>Teste cognitivo das 32 questões</b> e validade aparente com especialistas</li>
          <li><b>Acompanhamento de não-resposta</b> e do seu efeito sobre a leitura</li>
        </ul>
        <p>Os três últimos estão programados para a fase de discovery, antes do primeiro piloto:
           são parte do plano, não resultado já obtido. Enquanto não existirem, não há certificação,
           não há selo e não há comparação com o mercado.</p>
      </div>
    </div>
  </div>
</section>

<section class="sec" id="referencias">
  <div class="wrap">
    <div class="olho">Referências</div>
    <h2 class="tit larga">Em que a tese se apoia</h2>
    <p class="lead">A tese é uma síntese própria da Alun Business sobre este corpo de trabalho.
       Nenhuma destas organizações endossa ou valida a metodologia.</p>

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
      <a href="https://metr.org/blog/2025-07-10-early-2025-ai-experienced-os-dev-study/" target="_blank" rel="noopener">
        METR · Measuring the Impact of Early-2025 AI on Experienced Open-Source Developer Productivity
        <span>metr.org · 2025 — mediu 19% a mais de tempo onde os próprios desenvolvedores
          perceberam cerca de 20% de ganho</span></a>
      <a href="https://metr.org/blog/2026-02-24-uplift-update/" target="_blank" rel="noopener">
        METR · We are Changing our Developer Productivity Experiment Design
        <span>metr.org · 2026 — a própria equipe revisando o desenho do estudo acima; com agentes
          mais novos, o ganho medido é pequeno</span></a>
      <a href="https://airc.nist.gov/airmf-resources/airmf/5-sec-core/" target="_blank" rel="noopener">
        NIST · AI Risk Management Framework
        <span>nist.gov</span></a>
    </div>

    <div class="botoes">
      <a class="bt bt-1" href="{{ '/recode/diagnostico/' | relative_url }}">Voltar ao diagnóstico</a>
      <a class="bt bt-2" href="{{ '/recode/metodologia/' | relative_url }}">Ver a metodologia</a>
    </div>
  </div>
</section>
