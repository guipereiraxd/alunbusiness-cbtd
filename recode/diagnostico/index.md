---
title: "O diagnóstico"
description: "O Organizational Harness Diagnostic: o que mede, como se aplica na empresa, como a privacidade dos respondentes é protegida, o que é entregue e em quanto tempo."
---

<style>
  .cap .fatos{display:flex;gap:34px;flex-wrap:wrap;margin-top:34px;padding-top:26px;
    border-top:1px solid var(--linha-2)}
  .cap .fatos div{min-width:112px}
  .cap .fatos b{display:block;font-family:var(--disp);font-weight:700;font-size:26px;color:#fff;line-height:1}
  .cap .fatos span{font-family:var(--mono);font-size:10.5px;letter-spacing:.1em;
    text-transform:uppercase;color:var(--tx-2);display:block;margin-top:8px}

  .passos{display:grid;gap:13px;margin-top:34px}
  .passos > div{display:grid;grid-template-columns:46px 1fr;gap:20px;
    background:var(--papel);border:1px solid var(--linha);border-radius:14px;padding:22px 24px}
  .passos .n{font-family:var(--mono);font-size:13px;color:var(--eletrico);padding-top:3px}
  .passos h3{font-size:17.5px;font-weight:600}
  .passos p{font-size:14.5px;color:var(--tx-2);margin-top:8px;line-height:1.6}

  .priv{display:grid;grid-template-columns:repeat(3,1fr);gap:16px;margin-top:32px}
  @media(max-width:880px){ .priv{grid-template-columns:1fr} }
  .priv > div{background:var(--painel);border:1px solid var(--linha-2);border-radius:14px;padding:22px}
  .priv h3{color:#fff;font-size:16.5px;font-weight:600}
  .priv p{font-size:13.5px;color:var(--tx-2);margin-top:9px;line-height:1.6}

  .ent{display:grid;gap:12px;margin-top:32px}
  .ent > div{display:grid;grid-template-columns:1fr 1.4fr;gap:24px;align-items:center;
    background:var(--papel);border:1px solid var(--linha);border-radius:14px;padding:21px 24px}
  @media(max-width:760px){ .ent > div{grid-template-columns:1fr;gap:9px} }
  .ent .nm{font-family:var(--disp);font-weight:600;font-size:17px;color:var(--tinta)}
  .ent p{font-size:14px;color:var(--tx-2);line-height:1.6}

  .comp{display:grid;grid-template-columns:1fr 1fr;gap:1px;background:var(--linha);
    border:1px solid var(--linha);border-radius:16px;overflow:hidden;margin-top:32px}
  @media(max-width:720px){ .comp{grid-template-columns:1fr} }
  .comp > div{background:var(--papel);padding:26px}
  .comp .r{font-family:var(--mono);font-size:11px;letter-spacing:.11em;text-transform:uppercase;color:var(--tx-3)}
  .comp h3{font-size:18.5px;margin:10px 0 12px}
  .comp ul{margin:0;padding-left:19px;font-size:14.5px;color:var(--tx-2);line-height:1.75}
  .comp .dest{background:var(--canvas)}

  /* linha do tempo */
  .tl{display:grid;grid-template-columns:repeat(4,1fr);gap:1px;background:var(--linha);
    border:1px solid var(--linha);border-radius:16px;overflow:hidden;margin-top:34px}
  @media(max-width:880px){ .tl{grid-template-columns:repeat(2,1fr)} }
  @media(max-width:520px){ .tl{grid-template-columns:1fr} }
  .tl > div{background:var(--papel);padding:24px 22px;position:relative}
  .tl .s{font-family:var(--mono);font-size:11px;letter-spacing:.11em;text-transform:uppercase;
    color:var(--ouro)}
  .tl h3{font-size:17px;font-weight:600;margin:11px 0 9px;letter-spacing:-.012em}
  .tl p{font-size:14.5px;color:var(--tx-2);line-height:1.6}
  .tl .quem{font-family:var(--mono);font-size:11px;color:var(--tx-3);margin-top:13px;
    padding-top:11px;border-top:1px dashed var(--linha-2)}

  /* excerto da devolutiva */
  .dev{background:var(--canvas);border:1px solid var(--linha);border-radius:18px;
    padding:0;overflow:hidden;margin-top:34px}
  /* #6E4800 era cor de aviso para fundo claro; no escuro dá 2,36:1 */
  .dev .faixa{background:var(--atencao-s);padding:12px 26px;font-size:13.5px;
    color:var(--atencao);font-weight:600;border-bottom:1px solid var(--atencao)}
  .dev .corpo{padding:30px 32px}
  @media(max-width:560px){ .dev .corpo{padding:24px 20px} }
  .dev .cab{font-family:var(--mono);font-size:10.5px;letter-spacing:.11em;text-transform:uppercase;
    color:var(--tx-3);padding-bottom:16px;border-bottom:1px solid var(--linha);
    display:flex;justify-content:space-between;gap:14px;flex-wrap:wrap}
  .dev .item{padding:20px 0;border-bottom:1px solid var(--linha)}
  .dev .item:last-child{border-bottom:0;padding-bottom:0}
  .dev .rot{font-family:var(--mono);font-size:10.5px;letter-spacing:.11em;text-transform:uppercase;
    color:var(--ouro)}
  .dev .val{font-family:var(--disp);font-weight:600;font-size:18px;color:var(--tinta);margin-top:8px;
    line-height:1.4}
  .dev p{font-size:15px;color:var(--tx-2);line-height:1.65;margin-top:9px}
  .dev p b{color:var(--tinta-2)}
  .dev .met{display:flex;gap:22px;flex-wrap:wrap;margin-top:12px;font-family:var(--mono);
    font-size:11.5px;color:var(--tx-3)}
  .dev .met span b{color:var(--tx);font-weight:500}
  .comp .dest .r{color:var(--eletrico)}
</style>

<section class="cap">
  <div class="wrap">
    <div class="olho">Organizational Harness Diagnostic</div>
    <h1>Onde a sua organização está perdendo o ganho da&nbsp;IA</h1>
    <p class="sub">Um diagnóstico corporativo que mapeia percepção, levanta evidências e devolve
       o principal limitador da captura de valor — com a decisão que ele exige, não com um escore.</p>
    <div class="fatos">
      <div><b>32</b><span>questões</span></div>
      <div><b>8</b><span>componentes</span></div>
      <div><b>10–15<small style="font-size:15px"> min</small></b><span>por respondente</span></div>
      <div><b>0–4</b><span>escala, com NS e NA</span></div>
    </div>
  </div>
</section>

<section class="sec">
  <div class="wrap">
    <div class="olho">Como funciona</div>
    <h2 class="tit larga">Quatro etapas, e um limite declarado em cada uma</h2>

    <div class="passos">
      <div><div class="n">01</div>
        <div><h3>Enquadramento e missão</h3>
          <p>Antes de qualquer questionário, definimos a missão de negócio que vai servir de foco:
             um processo delimitado, com resultado mensurável, patrocinador, baseline e limites de
             risco. Sem isso, o diagnóstico vira retrato genérico — e retrato genérico não muda
             decisão.</p></div></div>
      <div><div class="n">02</div>
        <div><h3>Campanha de percepção</h3>
          <p>As 32 questões vão para os grupos definidos, com convite nominal e respostas
             pseudonimizadas. O respondente marca o nível que descreve a organização, não a si
             mesmo, e pode usar “não sei” sem prejuízo. Leva de 10 a 15 minutos.</p></div></div>
      <div><div class="n">03</div>
        <div><h3>Levantamento de evidências</h3>
          <p>Em paralelo, um consultor conduz entrevistas e registra artefatos por componente,
             classificando cada um de E0 a E4 com origem, data e confiança. A evidência não altera
             a nota percebida: as duas são lidas juntas, e a divergência entre elas costuma ser o
             achado principal.</p></div></div>
      <div><div class="n">04</div>
        <div><h3>Leitura e decisão</h3>
          <p>O relatório começa pelo gargalo que retém valor, não pelo score. Cada recomendação
             carrega base, lacuna, risco, ação, responsável, prazo e indicador. Nada é publicado
             sem revisão humana.</p></div></div>
    </div>
  </div>
</section>

<section class="sec escura">
  <div class="wrap">
    <div class="olho">Privacidade</div>
    <h2 class="tit larga">O questionário não avalia pessoas — e o desenho garante isso</h2>
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
      <b>Não prometemos anonimato absoluto.</b> Convites são identificados para poder ser enviados,
      então a palavra correta é pseudonimização, não anonimato. Dizer o contrário seria mais
      confortável e menos verdadeiro. PII de convite e respostas vivem em domínios separados,
      com retenção contratada.
    </div>
  </div>
</section>

<section class="sec">
  <div class="wrap">
    <div class="olho">O que você recebe</div>
    <h2 class="tit larga">Entregáveis do Discover</h2>

    <div class="ent">
      <div>
        <div class="nm">Organizational Harness Assessment</div>
        <p>Leitura percebida dos oito componentes, com cobertura, divergências entre áreas e
           níveis, NS/NA visíveis e limitações declaradas.</p>
      </div>
      <div>
        <div class="nm">Harness Constraint Map</div>
        <p>As fricções que retêm valor, com criticidade e evidência por missão — fila, handoff,
           verificação, dado, direito de decisão ou capacidade.</p>
      </div>
      <div>
        <div class="nm">Painel executivo</div>
        <p>Ordenado por decisão: missão prioritária, gargalo provável, risco crítico e próxima
           decisão. O perfil dos oito componentes vem depois, não antes.</p>
      </div>
      <div>
        <div class="nm">Devolutiva com ressalvas metodológicas</div>
        <p>Documento exportável com fonte, amostra, janela, versão do instrumento e grau de
           confiança de cada afirmação.</p>
      </div>
    </div>
  </div>
</section>

<section class="sec canvas">
  <div class="wrap">
    <div class="olho">Quanto tempo leva</div>
    <h2 class="tit larga">Quatro semanas até a devolutiva</h2>
    <p class="lead">O prazo depende do tamanho do grupo a ouvir e da disponibilidade de quem
       guarda as evidências. Esta é a janela típica de um Discover sobre uma missão.</p>

    <div class="tl rv">
      <div><div class="s">Semana 1</div>
        <h3>Enquadramento</h3>
        <p>Definição da missão, do patrocinador e do indicador com baseline. Sem isso o resto
           não tem foco.</p>
        <div class="quem">com o patrocinador</div></div>
      <div><div class="s">Semana 2</div>
        <h3>Campanha aberta</h3>
        <p>As 32 questões vão para os grupos definidos, com dois lembretes. Em paralelo começam
           as entrevistas.</p>
        <div class="quem">com o grupo e a liderança</div></div>
      <div><div class="s">Semana 3</div>
        <h3>Evidências</h3>
        <p>Levantamento e classificação de artefatos por componente, de E0 a E4, e fechamento
           do cálculo com cobertura.</p>
        <div class="quem">com quem opera o processo</div></div>
      <div><div class="s">Semana 4</div>
        <h3>Leitura e decisão</h3>
        <p>Devolutiva ao patrocinador: restrição provável, controle crítico, próxima decisão
           e o que ficou sem evidência.</p>
        <div class="quem">com o patrocinador e a liderança</div></div>
    </div>

    <div class="nota">
      <b>O que pode esticar o prazo.</b> Grupo acima de algumas centenas de pessoas, necessidade
      de aprovação interna para o convite, ou evidências que dependem de sistemas cujo acesso
      precisa ser liberado. Nada disso é raro, e preferimos dizer antes.
    </div>
  </div>
</section>

<section class="sec">
  <div class="wrap">
    <div class="olho">Como é a conclusão</div>
    <h2 class="tit larga">Um trecho de devolutiva, com dados fictícios</h2>
    <p class="lead">A devolutiva não começa por escore. Começa pela restrição que retém valor e
       pela decisão que ela exige — e declara o que ainda não tem evidência.</p>

    <div class="dev rv">
      <div class="faixa">⚠ Exemplo ilustrativo. Dados fictícios, empresa inexistente — não é
        resultado de nenhum cliente.</div>
      <div class="corpo">
        <div class="cab">
          <span>Missão: reduzir o tempo de cotação mantendo taxa de erro</span>
          <span>instrumento v2.0 · 58 submissões</span>
        </div>

        <div class="item">
          <div class="rot">Restrição provável</div>
          <div class="val">H2 — o trabalho não foi redesenhado, só acelerado</div>
          <p>Média percebida <b>2,1 de 4</b> em 46 respostas válidas de 58 submissões.
             Evidência revisada: <b>E1</b> — há relato de redesenho, não há blueprint operacional.
             A automação da redação de propostas convive com as mesmas três aprovações em série.</p>
          <div class="met">
            <span>cobertura <b>79%</b></span>
            <span>confiança <b>média</b></span>
            <span>divergência comercial × operações <b>0,8</b></span>
          </div>
        </div>

        <div class="item">
          <div class="rot">Controle crítico</div>
          <div class="val">H7 — autonomia sem gate definido em ação irreversível</div>
          <p>Três fluxos enviam ao cliente sem aprovação humana, e não há responsável nomeado
             para interromper. <b>Isto não é compensado pela média geral</b>: enquanto existir,
             nenhuma recomendação de escalar é emitida.</p>
          <div class="met"><span>origem <b>entrevista + runbook</b></span><span>evidência <b>E2</b></span></div>
        </div>

        <div class="item">
          <div class="rot">Próxima decisão</div>
          <div class="val">Mapear o fluxo de propostas e levantar baseline de tempo de ciclo</div>
          <p>Owner: diretoria comercial. Prazo: 30 dias. Indicador: tempo de ciclo por faixa de
             valor, segmentado. <b>É uma hipótese a testar, não uma conclusão causal</b> — o
             diagnóstico aponta onde olhar, a medição é que confirma.</p>
        </div>

        <div class="item">
          <div class="rot">O que ficou sem evidência</div>
          <div class="val">H5 e H6 — não publicados</div>
          <p>Cobertura abaixo do mínimo: 5 e 6 respostas válidas, contra as 7 exigidas. Aparecem
             como <b>evidência insuficiente para agregar</b>, nunca como zero, e não entram no
             índice descritivo.</p>
        </div>
      </div>
    </div>
  </div>
</section>

<section class="sec canvas">
  <div class="wrap">
    <div class="olho">Antes de contratar</div>
    <h2 class="tit larga">O que o diagnóstico faz, e o que não faz</h2>

    <div class="comp">
      <div class="dest">
        <div class="r">Faz</div>
        <h3>Entrega</h3>
        <ul>
          <li>Identifica o limitador mais provável da captura de valor</li>
          <li>Separa o que é percepção do que tem evidência</li>
          <li>Mostra divergência entre áreas e níveis hierárquicos</li>
          <li>Sinaliza controles críticos ausentes, mesmo com média alta</li>
          <li>Produz hipóteses rastreáveis, com responsável e indicador</li>
          <li>Prepara a decisão de qual missão redesenhar primeiro</li>
        </ul>
      </div>
      <div>
        <div class="r">Não faz</div>
        <h3>Fora do escopo</h3>
        <ul>
          <li>Certificar a empresa como “AI-enabled” ou emitir selo</li>
          <li>Rankear ou avaliar funcionários individualmente</li>
          <li>Prometer ROI, multiplicador de produtividade ou previsão de headcount</li>
          <li>Comparar sua empresa com benchmark de mercado</li>
          <li>Gerar plano de reestruturação ou de demissão</li>
          <li>Provar causalidade entre uma intervenção e um resultado</li>
        </ul>
      </div>
    </div>

    <div class="nota aviso">
      <b>Um diagnóstico não é uma transformação.</b> Ele detecta a restrição. Mudar o sistema é
      trabalho de redesenho, e está nas ofertas seguintes. Vender uma coisa como a outra seria
      a promessa vazia mais comum deste mercado.
    </div>

    <div class="botoes">
      <a class="bt bt-1" href="{{ '/recode/contato/' | relative_url }}">Aplicar na minha empresa</a>
      <a class="bt bt-2" href="{{ '/recode/consultoria/' | relative_url }}">Ver as quatro ofertas</a>
    </div>
  </div>
</section>
