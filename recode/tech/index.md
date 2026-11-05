---
title: "ReCode Tech"
description: "O time escreve mais código e a empresa não entrega mais software. O ReCode Tech diagnostica onde o ganho fica retido entre o commit e a produção — usando o baseline que já existe nas suas ferramentas."
---

<style>
  /* ── as estações entre o commit e a produção ─────────────────
     O argumento da página inteira em uma figura: uma estação ficou
     mais rápida e as outras cinco não mudaram de tamanho. O gargalo
     não sumiu — andou para a frente. */
  .est{display:grid;grid-template-columns:repeat(6,1fr);gap:10px;margin-top:36px}
  @media(max-width:1040px){ .est{grid-template-columns:repeat(3,1fr)} }
  @media(max-width:620px){ .est{grid-template-columns:repeat(2,1fr)} }
  .est > div{position:relative;background:var(--papel);border:1px solid var(--linha);
    border-radius:14px;padding:19px 17px;border-top:3px solid var(--linha-2)}
  .est .n{font-family:var(--mono);font-size:10px;letter-spacing:.11em;text-transform:uppercase;
    color:var(--tx-3)}
  .est b{display:block;font-family:var(--disp);font-weight:600;font-size:15.5px;
    color:var(--tinta);margin-top:9px;line-height:1.3}
  .est p{font-size:13px;color:var(--tx-2);margin-top:8px;line-height:1.55}
  /* a única que acelerou */
  .est .rapida{border-top-color:var(--ouro);background:var(--ouro-fundo)}
  .est .rapida .n{color:var(--ouro)}
  .est .rapida .marca{display:inline-flex;align-items:center;gap:6px;font-family:var(--mono);
    font-size:9.5px;letter-spacing:.1em;text-transform:uppercase;color:var(--ouro);margin-top:10px}
  .est .rapida .marca::before{content:"";width:12px;height:2px;border-radius:2px;background:var(--ouro)}

  /* ── a tradução de H1–H8 para engenharia ─────────────────────
     A mesma taxonomia do diagnóstico corporativo, instanciada. Não é
     uma régua nova: os IDs continuam os mesmos, e é isso que permite
     ler uma campanha de engenharia junto com o resto da empresa. */
  .trad{display:grid;gap:10px;margin-top:34px}
  .trad > div{display:grid;grid-template-columns:44px 1fr 1.25fr;gap:22px;align-items:start;
    background:var(--papel);border:1px solid var(--linha);border-radius:14px;padding:20px 24px;
    transition:transform .2s var(--ease),box-shadow .2s var(--ease)}
  .trad > div:hover{transform:translateX(3px);box-shadow:var(--elev-2)}
  @media(max-width:860px){ .trad > div{grid-template-columns:44px 1fr;gap:10px 18px}
    .trad .eng{grid-column:2} }
  .trad .cod{font-family:var(--mono);font-size:13px;color:var(--ctxt);letter-spacing:.06em;
    padding-top:2px}
  .trad .org{font-size:14.5px;color:var(--tx-2);line-height:1.5}
  .trad .eng{font-size:15px;color:var(--tinta);line-height:1.55;padding-left:17px;
    border-left:2px solid var(--c)}
  @media(max-width:860px){ .trad .eng{padding-left:15px} }

  /* ── o baseline que já existe ────────────────────────────────── */
  .base{display:grid;grid-template-columns:repeat(3,1fr);gap:12px;margin-top:32px}
  @media(max-width:880px){ .base{grid-template-columns:repeat(2,1fr)} }
  @media(max-width:540px){ .base{grid-template-columns:1fr} }
  .base > div{background:var(--canvas);border:1px solid var(--linha);border-radius:13px;
    padding:19px 21px}
  .base b{display:block;font-family:var(--disp);font-weight:600;font-size:15.5px;
    color:var(--tinta);line-height:1.3}
  .base span{display:block;font-size:13.5px;color:var(--tx-2);margin-top:7px;line-height:1.55}
  .base .onde{display:block;font-family:var(--mono);font-size:10px;letter-spacing:.1em;
    text-transform:uppercase;color:var(--tx-3);margin-top:11px;padding-top:9px;
    border-top:1px dashed var(--linha-2)}

  /* ── a tensão entre relato e medição ─────────────────────────── */
  .tensao{display:grid;grid-template-columns:1fr 1fr;gap:18px;margin-top:34px}
  @media(max-width:820px){ .tensao{grid-template-columns:1fr} }
  .tensao > div{border-radius:16px;padding:26px 28px}
  .tensao .relato{background:var(--painel);border:1px solid var(--linha-2)}
  .tensao .medido{background:var(--papel);border:1px solid var(--linha)}
  /* --tx-3 sobre --painel no contexto escuro dava 4,04:1; o degrau de
     hierarquia aqui vem do tamanho e do caixa alta, nao do tom */
  .tensao .r{display:inline-flex;align-items:center;gap:9px;font-family:var(--mono);font-size:10.5px;
    letter-spacing:.11em;text-transform:uppercase;color:var(--tx-2);margin-bottom:13px}
  .tensao .r::before{content:"";width:16px;height:2px;border-radius:2px;background:currentColor}
  .tensao p{font-size:15px;color:var(--tx);line-height:1.65}
  .tensao p b{color:var(--tinta)}
  .tensao .fonte{font-size:12.5px;color:var(--tx-2);margin-top:13px;padding-top:11px;
    border-top:1px solid var(--linha)}
  .tensao .fonte a{color:var(--tinta)}

  /* ── limites ─────────────────────────────────────────────────── */
  .lim{display:grid;grid-template-columns:1fr 1fr;gap:16px;margin-top:32px}
  @media(max-width:760px){ .lim{grid-template-columns:1fr} }
  .lim > div{border:1px solid var(--linha);border-radius:14px;padding:24px;background:var(--papel)}
  .lim h3{font-size:17.5px;font-weight:600;margin-bottom:11px}
  .lim ul{margin:0;padding-left:19px;font-size:14.5px;color:var(--tx-2);line-height:1.75}
</style>

<section class="cap">
  <div class="wrap">
    <div class="olho">ReCode Tech</div>
    <h1>O time escreve mais código. A empresa não entrega mais software.</h1>
    <p class="sub">A geração de código acelerou de verdade. O caminho entre o commit e a produção
       não mudou de tamanho — e é nele que o ganho fica retido. O ReCode Tech diagnostica esse
       caminho usando o baseline que já existe nas suas ferramentas.</p>
  </div>
</section>

<section class="sec">
  <div class="wrap">
    <div class="olho">Onde o ganho fica retido</div>
    <h2 class="tit larga">Uma estação acelerou. As outras continuam do mesmo tamanho.</h2>
    <p class="lead">O gargalo não desaparece quando a escrita fica mais rápida: ele anda para a
       frente. Normalmente para a revisão — que agora recebe mais código, com a mesma capacidade
       de revisar.</p>

    <div class="est rv">
      <div class="rapida">
        <div class="n">01</div>
        <b>Escrita</b>
        <p>Assistentes e agentes aceleram a produção de código.</p>
        <div class="marca">acelerou</div>
      </div>
      <div><div class="n">02</div><b>Revisão</b>
        <p>Mais código chega, e a capacidade de revisar com atenção não cresceu junto.</p></div>
      <div><div class="n">03</div><b>Testes</b>
        <p>Suíte mais longa, testes instáveis e fila de execução.</p></div>
      <div><div class="n">04</div><b>Integração</b>
        <p>Branches que vivem mais, conflitos maiores, merge adiado.</p></div>
      <div><div class="n">05</div><b>Implantação</b>
        <p>Janela agendada, aprovação de mudança, dependência de terceiros.</p></div>
      <div><div class="n">06</div><b>Depois da entrega</b>
        <p>Incidente, rollback e retrabalho — que voltam para a fila da estação 01.</p></div>
    </div>

    <p class="medir" style="font-size:14.5px;color:var(--tx-2);margin-top:26px;line-height:1.6;
       padding-left:15px;border-left:3px solid var(--linha-2);max-width:74ch">
       <b style="color:var(--tinta)">O diagnóstico começa pelo fluxo inteiro, não pela
       ferramenta.</b> Trocar o assistente de código muda a estação 01. Se o valor está preso na
       03 ou na 05, a troca não aparece no resultado — e o investimento fica sem explicação.</p>
  </div>
</section>

<section class="sec canvas">
  <div class="wrap">
    <div class="olho">O instrumento, em engenharia</div>
    <h2 class="tit larga">Os mesmos oito componentes, lidos no seu fluxo</h2>
    <p class="lead">O ReCode Tech não traz régua nova. É o <b>Organizational Harness
       Assessment</b> instanciado em engenharia: os IDs continuam H1 a H8, e é isso que permite
       ler a campanha da engenharia junto com a do resto da empresa, em vez de num relatório
       paralelo.</p>

    <div class="trad rv">
      <div style="--c:#2D87FF;--ctxt:#1B5FC4">
        <div class="cod">H1</div>
        <div class="org">Modelo de negócio e economia do valor</div>
        <div class="eng">O que a engenharia entrega em valor de negócio — e não em volume de
          código, pontos ou tickets fechados.</div>
      </div>
      <div style="--c:#3F82FD;--ctxt:#2456C6">
        <div class="cod">H2</div>
        <div class="org">Arquitetura do trabalho e fluxo</div>
        <div class="eng">O caminho do commit até produção, com as esperas separadas do trabalho:
          quanto do ciclo é fila e quanto é alguém trabalhando.</div>
      </div>
      <div style="--c:#5180FB;--ctxt:#2D4EC8">
        <div class="cod">H3</div>
        <div class="org">Modelo operacional humano–agente</div>
        <div class="eng">Quem revisa o que o agente escreveu, quem assina, e quem responde quando
          o código gerado causa um incidente.</div>
      </div>
      <div style="--c:#6379F9;--ctxt:#3645CA">
        <div class="cod">H4</div>
        <div class="org">Contexto, conhecimento e dados</div>
        <div class="eng">O que o agente enxerga: só o arquivo aberto, ou o repositório, as
          decisões de arquitetura, os runbooks e o histórico de incidentes.</div>
      </div>
      <div style="--c:#7373F7;--ctxt:#3F3DCC">
        <div class="cod">H5</div>
        <div class="org">Execução e orquestração</div>
        <div class="eng">Integração contínua, ambientes, permissões e recuperação: o que acontece
          quando uma execução falha no meio do caminho.</div>
      </div>
      <div style="--c:#8068F7;--ctxt:#4834CE">
        <div class="cod">H6</div>
        <div class="org">Avaliação, observabilidade e confiabilidade</div>
        <div class="eng">Como se sabe que o que foi gerado funciona: critério definido antes,
          cobertura de teste, rastro de execução e taxa de incidente depois da entrega.</div>
      </div>
      <div style="--c:#8761F6;--ctxt:#512CD0">
        <div class="cod">H7</div>
        <div class="org">Governança e direitos de decisão</div>
        <div class="eng">O que um agente pode fazer sem aprovação humana: abrir PR, dar merge,
          mexer em infraestrutura, acessar produção. E quem decidiu que podia.</div>
      </div>
      <div style="--c:#885CF6;--ctxt:#5A23D2">
        <div class="cod">H8</div>
        <div class="org">Liderança, competências e mudança</div>
        <div class="eng">O que muda no papel do desenvolvedor sênior quando escrever deixa de ser
          o gargalo e revisar passa a ser.</div>
      </div>
    </div>
  </div>
</section>

<section class="sec">
  <div class="wrap">
    <div class="olho">O que medimos</div>
    <h2 class="tit larga">O baseline já está nas suas ferramentas</h2>
    <p class="lead">Esta é a diferença prática de diagnosticar engenharia: em quase toda outra
       área, levantar a linha de base é metade do projeto. Aqui ela já existe — só não está sendo
       lida como sistema.</p>

    <div class="base rv">
      <div><b>Tempo de ciclo, separado em trabalho e espera</b>
        <span>Do primeiro commit ao que está em produção, com cada fila visível.</span>
        <span class="onde">repositório e gestão de trabalho</span></div>
      <div><b>Tempo e tamanho de revisão</b>
        <span>Quanto um PR espera, quantas idas e vindas leva e quanto cresceu desde a adoção.</span>
        <span class="onde">repositório</span></div>
      <div><b>Frequência de entrega</b>
        <span>Com que regularidade a mudança chega ao usuário, não ao branch.</span>
        <span class="onde">pipeline de integração</span></div>
      <div><b>Taxa de falha da mudança</b>
        <span>Quanto do que entra em produção precisa de correção ou reversão.</span>
        <span class="onde">pipeline e incidentes</span></div>
      <div><b>Retrabalho</b>
        <span>Código reescrito pouco depois de entregue — o sinal mais honesto de qualidade.</span>
        <span class="onde">repositório</span></div>
      <div><b>Destino da capacidade liberada</b>
        <span>O que a equipe passou a fazer com o tempo que sobrou. Sem isso, o ganho não tem
          onde aparecer.</span>
        <span class="onde">decisão de negócio</span></div>
    </div>

    <div class="nota">
      <b>Medimos os seus números, não um benchmark.</b> Não existe base de comparação entre
      empresas no instrumento, e comparar o seu tempo de ciclo com o de outra organização
      compararia produtos, bases de código e apetites de risco diferentes. A referência é a sua
      própria linha de base, antes e depois.
    </div>
  </div>
</section>

<section class="sec escura ctx-escuro">
  <div class="wrap">
    <div class="olho">Por que o diagnóstico existe</div>
    <h2 class="tit larga">O relato e a medição não estão dizendo a mesma coisa</h2>
    <p class="lead">Esta é a razão de não aceitar nenhum dos dois de graça — e é o que separa um
       diagnóstico de uma pesquisa de satisfação com a ferramenta.</p>

    <div class="tensao rv ctx-escuro">
      <div class="relato">
        <div class="r">O que se relata</div>
        <p>Empresas relatam multiplicadores expressivos na geração de código, e as equipes
           percebem o ganho enquanto trabalham. <b>A percepção é real</b> — escrever de fato
           ficou mais rápido.</p>
        <div class="fonte">Relatos de mercado, com recortes, datas e desenhos distintos.</div>
      </div>
      <div class="medido">
        <div class="r">O que se mediu</div>
        <p>Num ensaio controlado com desenvolvedores experientes em bases maduras, as tarefas
           feitas com IA levaram <b>19% mais tempo</b> — enquanto os próprios participantes
           estimavam ter ganhado cerca de <b>20% de velocidade</b>.</p>
        <div class="fonte">METR, 2025. A própria equipe revisou o desenho do experimento em 2026,
          e com agentes mais novos o ganho medido é pequeno.
          <a href="{{ '/recode/fundamentos/' | relative_url }}#referencias">Ver referências</a>.</div>
      </div>
    </div>

    <div class="nota">
      <b>A lição não é que IA atrasa.</b> É que percepção e performance se medem separadamente —
      exatamente a primeira regra do método. Onde o relato e a medição divergem, a divergência é
      o achado: ela aponta a estação em que o ganho está sendo absorvido.
    </div>
  </div>
</section>

<section class="sec canvas">
  <div class="wrap">
    <div class="olho">Escopo</div>
    <h2 class="tit larga">Onde o ReCode Tech entra, e onde não</h2>

    <div class="lim">
      <div>
        <h3>O que o diagnóstico entrega</h3>
        <ul>
          <li>O mapa do fluxo do commit à produção, com as esperas separadas do trabalho</li>
          <li>A estação que está retendo o ganho, com evidência e grau de confiança</li>
          <li>A leitura dos oito componentes no contexto de engenharia</li>
          <li>Os limites de autonomia hoje em vigor para agentes, e quem os definiu</li>
          <li>A próxima decisão, com responsável, prazo e indicador</li>
        </ul>
      </div>
      <div>
        <h3>O que fica fora</h3>
        <ul>
          <li>Avaliar desenvolvedores individualmente, ou gerar ranking de produtividade</li>
          <li>Recomendar ou vender ferramenta de assistente de código</li>
          <li>Comparar a sua engenharia com benchmark de mercado</li>
          <li>Implementar as integrações técnicas — isso é contratado à parte</li>
          <li>Prometer multiplicador de produtividade ou previsão de headcount</li>
        </ul>
      </div>
    </div>

    <div class="nota aviso">
      <b>O instrumento não mede pessoas.</b> Nenhum recorte com menos de sete respostas válidas é
      publicado, não há resultado individual, e cruzar quem respondeu com o que respondeu é
      impedido por desenho. Num diagnóstico de engenharia essa garantia não é formalidade: sem
      ela, ninguém responde com honestidade sobre o próprio fluxo.
    </div>

    <div class="botoes">
      <a class="bt bt-1" href="{{ '/recode/contato/' | relative_url }}">Falar sobre a sua engenharia</a>
      <a class="bt bt-2" href="{{ '/recode/diagnostico/' | relative_url }}">Conhecer o diagnóstico</a>
    </div>
  </div>
</section>
