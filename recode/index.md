---
title: "Início"
description: "A IA já acelera tarefas. O AI Business ReCode, da Alun Business, diagnostica e redesenha o harness organizacional — trabalho, dados, agentes, decisões, competências e controles — para transformar capacidade de IA em performance de negócio."
---

<style>
  /* ── hero ───────────────────────────────────────────────────── */
  .hero{background:var(--deep);color:var(--azul-100);padding:84px 0 92px;position:relative;overflow:hidden}
  .hero::after{content:"";position:absolute;top:-180px;right:-160px;width:560px;height:560px;
    background:radial-gradient(circle,rgba(45,135,255,.22),transparent 65%);pointer-events:none}
  .hero-in{display:grid;grid-template-columns:1.08fr .92fr;gap:54px;align-items:center;position:relative;z-index:1}
  @media(max-width:980px){ .hero-in{grid-template-columns:1fr;gap:44px} .hero{padding:60px 0 66px} }
  .hero h1{font-size:clamp(31px,4.6vw,50px);color:#fff;letter-spacing:-.028em;line-height:1.1}
  .hero h1 em{font-style:normal;color:var(--azul-300)}
  .hero .sub{font-size:clamp(16.5px,1.9vw,19.5px);color:var(--azul-300);margin-top:22px;
    max-width:54ch;line-height:1.6}
  .hero .assin{font-family:var(--mono);font-size:12px;letter-spacing:.13em;text-transform:uppercase;
    color:#7E93BD;margin-top:34px}

  /* ── diagrama das oito camadas ──────────────────────────────── */
  .camadas{background:var(--deep-2);border:1px solid rgba(143,186,255,.22);
    border-radius:20px;padding:24px}
  .camadas .cab{font-family:var(--mono);font-size:10.5px;letter-spacing:.12em;
    text-transform:uppercase;color:var(--azul-300);margin-bottom:16px}
  .cam{display:grid;gap:5px}
  .cam div{display:grid;grid-template-columns:34px 1fr;align-items:center;gap:12px;
    background:rgba(143,186,255,.09);border-radius:8px;padding:9px 12px;
    font-size:13.5px;color:#DCE7FB;line-height:1.35}
  .cam div b{font-family:var(--mono);font-size:11px;font-weight:500;color:var(--azul-300)}
  .camadas .seta{display:grid;grid-template-columns:1fr auto 1fr;align-items:center;
    gap:12px;margin-top:16px}
  .camadas .seta i{height:1px;background:rgba(143,186,255,.35);display:block}
  .camadas .seta span{font-family:var(--mono);font-size:10.5px;letter-spacing:.11em;
    text-transform:uppercase;color:var(--azul-300)}
  .camadas .alvo{margin-top:14px;background:var(--eletrico);border-radius:11px;
    padding:14px 16px;text-align:center}
  .camadas .alvo b{display:block;font-family:var(--disp);font-weight:700;font-size:17px;color:#fff}
  .camadas .alvo span{font-size:12.5px;color:#DCE9FF}

  /* ── gargalos ───────────────────────────────────────────────── */
  .garg{display:grid;grid-template-columns:repeat(3,1fr);gap:1px;background:var(--linha);
    border:1px solid var(--linha);border-radius:16px;overflow:hidden;margin-top:34px}
  @media(max-width:880px){ .garg{grid-template-columns:1fr} }
  .garg > div{background:var(--papel);padding:22px}
  .garg h3{font-size:16.5px;font-weight:600}
  .garg p{font-size:14px;color:var(--tx-2);margin-top:8px;line-height:1.6}

  /* ── dois patamares ─────────────────────────────────────────── */
  .pat{display:grid;grid-template-columns:1fr 1fr;gap:18px;margin-top:34px}
  @media(max-width:760px){ .pat{grid-template-columns:1fr} }
  .pat > div{border-radius:16px;padding:26px}
  .pat .um{background:var(--canvas);border:1px solid var(--linha)}
  .pat .dois{background:var(--deep);color:var(--azul-100)}
  .pat .rot{font-family:var(--mono);font-size:11px;letter-spacing:.12em;text-transform:uppercase;color:var(--tx-3)}
  .pat .dois .rot{color:var(--azul-300)}
  .pat h3{font-size:21px;margin:11px 0 10px}
  .pat .dois h3{color:#fff}
  .pat p{font-size:14.5px;line-height:1.6;color:var(--tx-2)}
  .pat .dois p{color:var(--azul-300)}

  /* ── movimentos RECODE ──────────────────────────────────────── */
  .mov{display:grid;grid-template-columns:repeat(6,1fr);gap:12px;margin-top:34px}
  @media(max-width:1000px){ .mov{grid-template-columns:repeat(3,1fr)} }
  @media(max-width:620px){ .mov{grid-template-columns:repeat(2,1fr)} }
  .mov > div{background:var(--papel);border:1px solid var(--linha);border-radius:14px;padding:19px 17px}
  .mov .l{font-family:var(--disp);font-weight:800;font-size:30px;color:var(--eletrico);line-height:1}
  .mov .n{font-family:var(--disp);font-weight:600;font-size:15px;color:var(--tinta);margin-top:9px}
  .mov p{font-size:13px;color:var(--tx-2);margin-top:6px;line-height:1.5}

  /* ── ofertas ────────────────────────────────────────────────── */
  .of{display:grid;gap:14px;margin-top:34px}
  .of > div{display:grid;grid-template-columns:168px 1fr auto;gap:24px;align-items:center;
    background:var(--papel);border:1px solid var(--linha);border-radius:14px;padding:22px 24px}
  @media(max-width:820px){ .of > div{grid-template-columns:1fr;gap:10px} }
  .of .nm{font-family:var(--disp);font-weight:700;font-size:19px;color:var(--tinta)}
  .of .nm span{display:block;font-family:var(--mono);font-size:10.5px;letter-spacing:.1em;
    text-transform:uppercase;color:var(--eletrico);font-weight:400;margin-top:4px}
  .of p{font-size:14.5px;color:var(--tx-2);line-height:1.6}
  .of .ent{font-family:var(--mono);font-size:11.5px;color:var(--tx-3);text-align:right;line-height:1.6}
  @media(max-width:820px){ .of .ent{text-align:left} }

  /* ── conversão ──────────────────────────────────────────────── */
  .conv{background:var(--deep);border-radius:22px;padding:52px 46px;text-align:center}
  @media(max-width:620px){ .conv{padding:38px 24px;border-radius:18px} }
  .conv h2{color:#fff;font-size:clamp(24px,3.4vw,34px);max-width:22ch;margin:0 auto}
  .conv p{color:var(--azul-300);font-size:16.5px;margin:16px auto 0;max-width:56ch;line-height:1.6}
  .conv .botoes{justify-content:center}
</style>

<section class="hero escuro">
  <div class="wrap hero-in">
    <div>
      <div class="olho">AI Business ReCode · Alun Business</div>
      <h1 style="margin-top:20px">A IA já acelera tarefas.<br><em>Sua organização está preparada para multiplicar resultados?</em></h1>
      <p class="sub">Diagnostique e redesenhe o harness organizacional — o sistema que conecta
         trabalho, dados, agentes, decisões, competências e controles para gerar performance real.</p>
      <div class="botoes">
        <a class="bt bt-1" href="{{ '/recode/diagnostico/' | relative_url }}">Diagnosticar meu harness</a>
        <a class="bt bt-2" href="{{ '/recode/demo/' | relative_url }}">Experimentar a demo</a>
      </div>
      <div class="assin">Reprograme o trabalho. Reinvente o negócio.</div>
    </div>

    <div class="camadas" role="img"
         aria-label="Os oito componentes do harness organizacional — H1 modelo de negócio e economia do valor, H2 arquitetura do trabalho e fluxo, H3 modelo operacional humano–agente, H4 contexto, conhecimento e dados, H5 execução e orquestração, H6 avaliação, observabilidade e confiabilidade, H7 governança e direitos de decisão, H8 liderança, competências e mudança — convergindo para desempenho de negócio.">
      <div class="cab">Os oito componentes do harness</div>
      <div class="cam" aria-hidden="true">
        <div><b>H1</b><span>Modelo de negócio e economia do valor</span></div>
        <div><b>H2</b><span>Arquitetura do trabalho e fluxo</span></div>
        <div><b>H3</b><span>Modelo operacional humano–agente</span></div>
        <div><b>H4</b><span>Contexto, conhecimento e dados</span></div>
        <div><b>H5</b><span>Execução e orquestração</span></div>
        <div><b>H6</b><span>Avaliação, observabilidade e confiabilidade</span></div>
        <div><b>H7</b><span>Governança e direitos de decisão</span></div>
        <div><b>H8</b><span>Liderança, competências e mudança</span></div>
      </div>
      <div class="seta" aria-hidden="true"><i></i><span>sustentam</span><i></i></div>
      <div class="alvo" aria-hidden="true">
        <b>Desempenho de negócio</b>
        <span>custo, qualidade, velocidade, receita e risco</span>
      </div>
    </div>
  </div>
</section>

<section class="sec">
  <div class="wrap">
    <div class="olho">O problema</div>
    <h2 class="tit larga">Produtividade numa tarefa não vira performance da empresa</h2>
    <p class="lead">A IA amplia a capacidade de produzir, analisar, decidir e executar. Mas o ganho
       costuma se perder nos pontos de passagem — e o resultado de ponta a ponta não se move.</p>

    <div class="garg">
      <div>
        <h3>Onde o ganho evapora</h3>
        <p>Filas, aprovações em série, handoffs entre áreas, regras desatualizadas e retrabalho.
           A tarefa ficou mais rápida; o ciclo continua igual.</p>
      </div>
      <div>
        <h3>Por que o diagnóstico falha</h3>
        <p>Contar ferramentas adotadas não diz o que a empresa consegue entregar. A pergunta útil
           é outra: que trabalho ela realiza de forma confiável, econômica e melhor com IA — e o que a impede.</p>
      </div>
      <div>
        <h3>O custo de automatizar antes</h3>
        <p>Aumentar autonomia sem verificação, estado e coordenação eleva custo e falhas.
           Automatizar um processo ruim entrega um processo ruim mais rápido.</p>
      </div>
    </div>

    <div class="nota">
      <b>Sobre números de mercado.</b> Multiplicadores divulgados em estudos e demonstrações vêm
      de recortes, datas e desenhos distintos. Não os usamos como promessa de resultado, benchmark
      de maturidade ou fator de cálculo — nem aqui, nem no diagnóstico.
    </div>
  </div>
</section>

<section class="sec canvas">
  <div class="wrap">
    <div class="olho">A tese</div>
    <h2 class="tit larga">Ferramenta acelera. Redesenho multiplica.</h2>
    <p class="lead">São dois patamares diferentes de ganho, e a passagem de um para o outro não
       acontece por adoção — acontece por desenho.</p>

    <div class="pat">
      <div class="um">
        <div class="rot">Patamar 1 · a IA como ferramenta</div>
        <h3>A pessoa acelera a própria tarefa</h3>
        <p>O profissional usa assistentes dentro do fluxo que já existe. O ganho é real, mas local:
           fica contido pela etapa seguinte, que não mudou. A vantagem é individual e não se acumula.</p>
      </div>
      <div class="dois">
        <div class="rot">Patamar 2 · o trabalho redesenhado</div>
        <h3>A organização amplia a capacidade do processo</h3>
        <p>O trabalho é decomposto, a verificação é proporcional ao risco, os agentes são sustentados
           com contexto e recuperação, e o julgamento sênior se desloca para os pontos críticos.
           A fronteira deixa de ser o indivíduo e passa a ser a organização.</p>
      </div>
    </div>
  </div>
</section>

<section class="sec">
  <div class="wrap">
    <div class="olho">O que o diagnóstico revela</div>
    <h2 class="tit larga">Oito componentes, lidos como sistema</h2>
    <p class="lead">O <b>Organizational Harness Assessment</b> mapeia os oito componentes que
       sustentam trabalho humano–IA em escala. Eles não se compensam: média alta não autoriza
       escalar quando um controle crítico está ausente.</p>

    <div class="grade g4" style="margin-top:34px">
      <div class="cartao"><div class="cod">H1</div><h3>Modelo de negócio e economia do valor</h3>
        <p>Mudamos proposta de valor, custo de servir, preço ou margem — ou apenas adotamos IA?</p></div>
      <div class="cartao"><div class="cod">H2</div><h3>Arquitetura do trabalho e fluxo</h3>
        <p>O trabalho foi decomposto, simplificado e redesenhado de ponta a ponta?</p></div>
      <div class="cartao"><div class="cod">H3</div><h3>Modelo operacional humano–agente</h3>
        <p>Quem faz, decide, verifica, aprova e responde pelo resultado?</p></div>
      <div class="cartao"><div class="cod">H4</div><h3>Contexto, conhecimento e dados</h3>
        <p>Pessoas e agentes acessam o contexto correto, autorizado e confiável no momento certo?</p></div>
      <div class="cartao"><div class="cod">H5</div><h3>Execução e orquestração</h3>
        <p>A empresa sustenta execução de agente com estado, ferramentas, permissões e recuperação?</p></div>
      <div class="cartao"><div class="cod">H6</div><h3>Avaliação, observabilidade e confiabilidade</h3>
        <p>Consegue verificar qualidade, custo e efeito de cada execução?</p></div>
      <div class="cartao"><div class="cod">H7</div><h3>Governança e direitos de decisão</h3>
        <p>A autonomia é proporcional ao risco e existe responsável pelo efeito?</p></div>
      <div class="cartao"><div class="cod">H8</div><h3>Liderança, competências e mudança</h3>
        <p>Líderes e equipes operam o novo modelo e mudam hábitos, incentivos e decisões?</p></div>
    </div>

    <div class="nota">
      <b>Percepção, evidência e performance são coisas distintas.</b> O questionário mede prontidão
      percebida. A evidência é classificada à parte por um consultor, com origem e nível de confiança.
      A performance observada exige baseline e janela. O relatório mantém as três trilhas separadas —
      e nunca converte uma na outra.
    </div>

    <div class="botoes">
      <a class="bt bt-1" href="{{ '/recode/metodologia/' | relative_url }}">Ver a metodologia</a>
      <a class="bt bt-2" href="{{ '/recode/harness-organizacional/' | relative_url }}">Entender o harness</a>
    </div>
  </div>
</section>

<section class="sec canvas">
  <div class="wrap">
    <div class="olho">A intervenção</div>
    <h2 class="tit larga">RECODE: seis movimentos de redesenho</h2>
    <p class="lead">Os oito componentes são o diagnóstico. Os seis movimentos são o trabalho de
       consultoria que muda o sistema. Governança atravessa todos.</p>

    <div class="mov">
      <div><div class="l">R</div><div class="n">Reframe</div><p>Redefinir a ambição de negócio e o mecanismo de captura.</p></div>
      <div><div class="l">E</div><div class="n">Explore</div><p>Escolher as jornadas pelas quais vale redesenhar.</p></div>
      <div><div class="l">C</div><div class="n">Co-design</div><p>Reprojetar jornada, trabalho, equipes e decisões.</p></div>
      <div><div class="l">O</div><div class="n">Orchestrate</div><p>Instalar contexto, agentes, verificações e gates.</p></div>
      <div><div class="l">D</div><div class="n">Develop</div><p>Preparar liderança e times para novos papéis.</p></div>
      <div><div class="l">E</div><div class="n">Evaluate</div><p>Medir processo e resultado, e ajustar o harness.</p></div>
    </div>
  </div>
</section>

<section class="sec">
  <div class="wrap">
    <div class="olho">A consultoria</div>
    <h2 class="tit larga">Quatro ofertas de uma mesma jornada</h2>
    <p class="lead">São modulares: dá para contratar só o diagnóstico. Mas detectar a restrição
       e transformar a organização são coisas diferentes, e o artefato deixa isso claro.</p>

    <div class="of">
      <div>
        <div class="nm">Discover<span>Diagnose your harness</span></div>
        <p>Diagnóstico multiárea, entrevistas, levantamento de evidências e identificação do
           principal limitador da captura de valor.</p>
        <div class="ent">Organizational Harness<br>Diagnostic + mapa de restrições</div>
      </div>
      <div>
        <div class="nm">Redesign<span>Recode how work creates value</span></div>
        <p>Modelo econômico, decomposição do trabalho, desenho humano–agente, direitos de decisão
           e mecanismos de verificação.</p>
        <div class="ent">Target Operating Model<br>Business Model Recode · Blueprint</div>
      </div>
      <div>
        <div class="nm">Activate<span>Make the new model real</span></div>
        <p>Pilotos em missões, preparação de equipes, coordenação de implantação com TI,
           instrumentação de avaliações e rotinas.</p>
        <div class="ent">Mission Playbook<br>Capability Plan · Go-live Controls</div>
      </div>
      <div>
        <div class="nm">Impact<span>Prove and compound value</span></div>
        <p>Baseline, acompanhamento de processo e de resultado econômico, governança e decisão
           de escala.</p>
        <div class="ent">Value Realization Ledger<br>Scale Decision · Reuse Kit</div>
      </div>
    </div>

    <div class="nota">
      <b>O que a Alun Business faz e o que não faz.</b> O movimento <i>Orchestrate</i> é desenho e
      coordenação junto a parceiros ou à TI do cliente. A implementação técnica é contratada à
      parte, quando houver escopo específico. O diagnóstico não é certificação, e nenhum relatório
      sai sem revisão humana.
    </div>
  </div>
</section>

<section class="sec ap">
  <div class="wrap">
    <div class="conv escuro">
      <h2>Onde a sua organização está perdendo o ganho da IA?</h2>
      <p>Comece pela demo de oito perguntas — leva de três a cinco minutos, não pede cadastro e
         devolve uma leitura exploratória do seu ponto de vista. Para a empresa, o diagnóstico
         corporativo é outro instrumento.</p>
      <div class="botoes">
        <a class="bt bt-1" href="{{ '/recode/demo/' | relative_url }}">Experimentar a demo</a>
        <a class="bt bt-2" href="{{ '/recode/diagnostico/' | relative_url }}">Aplicar na minha empresa</a>
      </div>
    </div>
  </div>
</section>
