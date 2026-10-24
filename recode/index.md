---
title: "Início"
description: "A IA já acelera tarefas. O AI Business ReCode, da Alun Business, diagnostica e redesenha o harness organizacional — trabalho, dados, agentes, decisões, competências e controles — para transformar capacidade de IA em performance de negócio."
---

<style>
  /* ── hero ───────────────────────────────────────────────────── */
  .hero{position:relative;background:var(--deep);color:var(--azul-100);
    padding:96px 0 104px;overflow:hidden;isolation:isolate;
    min-height:calc(100svh - 86px);display:flex;align-items:center}
  .hero::before{content:"";position:absolute;inset:0;z-index:-2;
    background:
      radial-gradient(900px 560px at 84% -16%, rgba(45,135,255,.36), transparent 62%),
      radial-gradient(720px 500px at -8% 114%, rgba(136,92,246,.3), transparent 64%),
      linear-gradient(180deg,#0A1F44 0%,#05112A 100%)}
  .hero::after{content:"";position:absolute;inset:0;z-index:-1;pointer-events:none;
    background-image:linear-gradient(rgba(143,186,255,.055) 1px,transparent 1px),
                     linear-gradient(90deg,rgba(143,186,255,.055) 1px,transparent 1px);
    background-size:68px 68px;
    mask-image:radial-gradient(820px 560px at 22% 32%,#000,transparent 72%);
    -webkit-mask-image:radial-gradient(820px 560px at 22% 32%,#000,transparent 72%)}
  .hero-in{width:100%;display:grid;grid-template-columns:1.16fr .84fr;gap:58px;
    align-items:center;position:relative;z-index:1}
  @media(max-width:1040px){ .hero-in{grid-template-columns:1fr;gap:46px}
    .hero{padding:58px 0 70px;min-height:0;display:block} }

  /* A pancada é tipográfica: corpo grande, entrelinha curta, peso alto.
     Não há número de impacto porque o manual proíbe prometer resultado —
     o que sobra é dizer a verdade incômoda em tamanho grande. */
  /* O corpo é calibrado para a frase caber em duas linhas inteiras na
     largura da coluna: acima de 70px "Sua operação não." quebra e deixa
     "não." órfão. Quem limita não é o max-width, é a coluna. */
  .hero h1{font-size:clamp(38px,4.9vw,70px);color:#fff;letter-spacing:-.042em;
    line-height:1;margin-top:24px;font-weight:800}
  .hero .realce{display:block;
    background:linear-gradient(112deg,#9CC4FF 0%,#B8ADFD 54%,#CBB4FC 100%);
    -webkit-background-clip:text;background-clip:text}
  .hero .sub{font-size:clamp(17px,1.9vw,20px);color:var(--azul-300);margin-top:28px;
    max-width:50ch;line-height:1.55}
  .hero .botoes{margin-top:38px}
  .hero .bt-1{font-size:17px;padding:18px 32px}

  /* Faixa de prova: fatos verificáveis do instrumento, não promessa.
     É o que dá concretude sem inventar benchmark. */
  .prova{display:flex;flex-wrap:wrap;align-items:center;gap:10px 20px;margin-top:40px;
    padding-top:26px;border-top:1px solid rgba(143,186,255,.2)}
  .prova span{display:inline-flex;align-items:baseline;gap:8px;font-family:var(--mono);
    font-size:11.5px;letter-spacing:.1em;text-transform:uppercase;color:#8FA6CF}
  .prova span b{font-family:var(--disp);font-weight:700;font-size:19px;color:#fff;
    letter-spacing:-.02em}
  .prova i{width:4px;height:4px;border-radius:50%;background:var(--violeta-300);
    opacity:.6;flex:none}
  @media(max-width:560px){ .prova i{display:none} .prova{gap:14px 18px} }

  .hero .assin{display:inline-flex;align-items:center;gap:11px;font-family:var(--mono);
    font-size:11.5px;letter-spacing:.15em;text-transform:uppercase;color:#7389B4;margin-top:30px}
  .hero .assin::before{content:"";width:22px;height:1px;background:#45598C}

  /* ── o harness, como estrutura que sustenta ──────────────────
     Oito camadas empilhadas, cada uma com um filete que caminha do
     azul ao violeta — a mesma fita do símbolo, agora como escala.
     Elas convergem para a placa de resultado: é o argumento do
     produto dito em forma, não em texto. */
  .hns{position:relative;overflow:hidden;background:rgba(255,255,255,.05);
    border:1px solid rgba(143,186,255,.2);border-radius:26px;padding:26px;
    backdrop-filter:blur(10px);-webkit-backdrop-filter:blur(10px);
    box-shadow:0 34px 90px rgba(3,10,26,.5)}
  .hns .simb{position:absolute;top:-54px;right:-58px;width:208px;opacity:.17;
    pointer-events:none;z-index:0}
  .hns > *{position:relative;z-index:1}
  .hns .cab{display:flex;align-items:baseline;justify-content:space-between;gap:16px;
    font-family:var(--mono);font-size:10px;letter-spacing:.12em;text-transform:uppercase;
    color:var(--azul-300);margin-bottom:16px;line-height:1.5}
  .hns .cab span:last-child{color:#6F86B6;white-space:nowrap;flex:none}

  .cam{display:grid;gap:5px}
  .cam div{display:grid;grid-template-columns:26px 1fr;align-items:center;gap:12px;
    background:rgba(255,255,255,.055);border-radius:10px;padding:10px 13px 10px 12px;
    font-size:13.5px;color:#DEE8FB;line-height:1.3;position:relative;
    border-left:3px solid var(--c);
    transition:background .2s var(--ease),transform .2s var(--ease)}
  .cam div:hover{background:rgba(255,255,255,.1);transform:translateX(3px)}
  .cam div b{font-family:var(--mono);font-size:10.5px;font-weight:500;color:var(--c)}

  .hns .flui{display:grid;place-items:center;height:26px;margin-top:4px}
  .hns .flui i{width:2px;height:26px;border-radius:2px;
    background:linear-gradient(180deg,rgba(136,92,246,.25),#885CF6)}
  .hns .alvo{position:relative;background:var(--grad);border-radius:14px;
    padding:16px 18px;text-align:center;box-shadow:0 14px 38px rgba(45,135,255,.36);
    overflow:hidden}
  .hns .alvo::after{content:"";position:absolute;inset:0;
    background:linear-gradient(180deg,rgba(255,255,255,.18),transparent 58%);pointer-events:none}
  .hns .alvo b{position:relative;display:block;font-family:var(--disp);font-weight:700;
    font-size:17.5px;color:#fff;letter-spacing:-.018em}
  .hns .alvo span{position:relative;font-size:12.5px;color:rgba(255,255,255,.84)}

  @media(max-width:1040px){ .hns .simb{width:150px;top:-44px;right:-24px} }
  @media(max-width:460px){ .cam div{font-size:13px;padding:9px 12px} .hns{padding:20px} }

  /* ── gargalos ───────────────────────────────────────────────── */
  .garg{display:grid;grid-template-columns:repeat(3,1fr);gap:20px;margin-top:40px}
  @media(max-width:880px){ .garg{grid-template-columns:1fr} }
  .garg > div{position:relative;background:var(--papel);border:1px solid var(--linha);
    border-radius:18px;padding:30px 26px 26px;overflow:hidden;
    transition:transform .22s var(--ease),box-shadow .22s var(--ease)}
  .garg > div:hover{transform:translateY(-3px);box-shadow:var(--elev-2)}
  /* numeral fantasma: dá ordem de leitura sem gritar */
  .garg > div::before{content:attr(data-n);position:absolute;top:-16px;right:6px;
    font-family:var(--disp);font-weight:800;font-size:92px;line-height:1;
    color:var(--painel);z-index:0;letter-spacing:-.05em}
  .garg > div > *{position:relative;z-index:1}
  .garg h3{font-size:18.5px;font-weight:600}
  .garg p{font-size:15px;color:var(--tx-2);margin-top:11px;line-height:1.62}

  /* ── dois patamares ─────────────────────────────────────────── */
  .pat{display:grid;grid-template-columns:1fr 1fr;gap:20px;margin-top:40px;align-items:stretch}
  @media(max-width:800px){ .pat{grid-template-columns:1fr} }
  .pat > div{position:relative;border-radius:20px;padding:32px;overflow:hidden}
  .pat .um{background:var(--papel);border:1px solid var(--linha)}
  .pat .dois{color:var(--azul-100);background:var(--deep);isolation:isolate;
    box-shadow:0 26px 64px rgba(10,31,68,.3)}
  .pat .dois::before{content:"";position:absolute;inset:0;z-index:-1;
    background:radial-gradient(520px 320px at 110% -20%, rgba(45,135,255,.42), transparent 62%),
               radial-gradient(420px 300px at -10% 120%, rgba(136,92,246,.38), transparent 64%),
               linear-gradient(180deg,#0A1F44,#071A3A)}
  .pat .rot{display:inline-flex;align-items:center;gap:9px;font-family:var(--mono);font-size:11px;
    letter-spacing:.13em;text-transform:uppercase;color:var(--tx-3)}
  .pat .rot::before{content:"";width:18px;height:2px;border-radius:2px;background:var(--linha-2)}
  .pat .dois .rot{color:var(--azul-300)}
  .pat .dois .rot::before{background:var(--grad-r)}
  .pat h3{font-size:23px;margin:14px 0 12px;letter-spacing:-.022em}
  .pat .dois h3{color:#fff}
  .pat p{font-size:15.5px;line-height:1.65;color:var(--tx-2)}
  .pat .dois p{color:var(--azul-300)}

  /* ── componentes H1–H8 ──────────────────────────────────────── */
  .hs{display:grid;grid-template-columns:repeat(4,1fr);gap:16px;margin-top:40px}
  @media(max-width:1040px){ .hs{grid-template-columns:repeat(2,1fr)} }
  @media(max-width:620px){ .hs{grid-template-columns:1fr} }
  .hs > div{position:relative;background:var(--papel);border:1px solid var(--linha);
    border-radius:18px;padding:24px;overflow:hidden;
    transition:transform .22s var(--ease),box-shadow .22s var(--ease),border-color .22s var(--ease)}
  .hs > div::before{content:"";position:absolute;top:0;left:0;right:0;height:3px;
    background:var(--c);opacity:0;transition:opacity .22s var(--ease)}
  .hs > div:hover{transform:translateY(-3px);box-shadow:var(--elev-2);border-color:var(--painel-2)}
  .hs > div:hover::before{opacity:1}
  .hs .cod{font-family:var(--mono);font-size:13px;font-weight:500;color:var(--c);
    letter-spacing:.08em}
  .hs h3{font-size:17px;font-weight:600;margin-top:12px;letter-spacing:-.014em;line-height:1.28}
  .hs p{font-size:14.5px;color:var(--tx-2);margin-top:10px;line-height:1.58}

  /* ── movimentos RECODE ──────────────────────────────────────── */
  .mov{display:grid;grid-template-columns:repeat(6,1fr);gap:14px;margin-top:40px}
  @media(max-width:1040px){ .mov{grid-template-columns:repeat(3,1fr)} }
  @media(max-width:620px){ .mov{grid-template-columns:repeat(2,1fr)} }
  .mov > div{background:var(--papel);border:1px solid var(--linha);border-radius:16px;
    padding:22px 19px;transition:transform .22s var(--ease),box-shadow .22s var(--ease)}
  .mov > div:hover{transform:translateY(-3px);box-shadow:var(--elev-2)}
  .mov .l{font-family:var(--disp);font-weight:800;font-size:40px;line-height:1;
    letter-spacing:-.04em;background:var(--grad);-webkit-background-clip:text;
    background-clip:text;color:transparent;-webkit-text-fill-color:transparent}
  .mov .n{font-family:var(--disp);font-weight:600;font-size:16px;color:var(--tinta);margin-top:11px}
  .mov p{font-size:13.5px;color:var(--tx-2);margin-top:7px;line-height:1.52}

  /* ── ofertas ────────────────────────────────────────────────── */
  .of{display:grid;gap:16px;margin-top:40px}
  .of > div{display:grid;grid-template-columns:200px 1fr auto;gap:28px;align-items:center;
    position:relative;background:var(--papel);border:1px solid var(--linha);border-radius:18px;
    padding:26px 28px;overflow:hidden;
    transition:transform .22s var(--ease),box-shadow .22s var(--ease)}
  .of > div::before{content:"";position:absolute;left:0;top:0;bottom:0;width:3px;
    background:var(--grad);opacity:.55;transition:opacity .22s var(--ease)}
  .of > div:hover{transform:translateX(3px);box-shadow:var(--elev-2)}
  .of > div:hover::before{opacity:1}
  @media(max-width:860px){ .of > div{grid-template-columns:1fr;gap:12px} }
  .of .nm{font-family:var(--disp);font-weight:700;font-size:22px;color:var(--tinta);
    letter-spacing:-.024em}
  .of .nm span{display:block;font-family:var(--mono);font-size:10.5px;letter-spacing:.11em;
    text-transform:uppercase;color:var(--eletrico);font-weight:400;margin-top:6px}
  .of p{font-size:15px;color:var(--tx-2);line-height:1.62}
  .of .ent{font-family:var(--mono);font-size:12px;color:var(--tx-3);text-align:right;
    line-height:1.7;white-space:nowrap}
  @media(max-width:860px){ .of .ent{text-align:left;white-space:normal} }

  /* ── conversão ──────────────────────────────────────────────── */
  .conv{position:relative;border-radius:28px;padding:62px 48px;text-align:center;
    overflow:hidden;isolation:isolate;background:var(--deep);
    box-shadow:0 30px 80px rgba(10,31,68,.3)}
  .conv::before{content:"";position:absolute;inset:0;z-index:-2;
    background:radial-gradient(640px 400px at 18% -24%, rgba(45,135,255,.42), transparent 62%),
               radial-gradient(600px 380px at 86% 122%, rgba(136,92,246,.4), transparent 64%),
               linear-gradient(160deg,#0A1F44,#071531)}
  .conv .simb{position:absolute;bottom:-78px;right:-58px;width:242px;opacity:.14;z-index:-1;
    pointer-events:none}
  @media(max-width:620px){ .conv{padding:42px 24px;border-radius:20px}
    .conv .simb{width:160px;bottom:-50px;right:-40px} }
  .conv h2{color:#fff;font-size:clamp(25px,3.6vw,38px);max-width:21ch;margin:0 auto;
    letter-spacing:-.03em}
  .conv p{color:var(--azul-300);font-size:17px;margin:18px auto 0;max-width:56ch;line-height:1.6}
  .conv .botoes{justify-content:center;margin-top:36px}
</style>

<section class="hero escuro">
  <div class="wrap hero-in">
    <div>
      <div class="olho">Consultoria em harness organizacional</div>
      <h1>A IA acelerou.<span class="realce">Sua operação não.</span></h1>
      <p class="sub">O ganho da IA some nas filas, nas aprovações e nos repasses entre áreas.
         Diagnosticamos e redesenhamos o <b style="color:#CFE0FF;font-weight:600">harness
         organizacional</b> — o sistema que conecta trabalho, dados, agentes, decisões e
         controles — para que capacidade vire resultado.</p>
      <div class="botoes">
        <a class="bt bt-1" href="{{ '/recode/diagnostico/' | relative_url }}">Diagnosticar meu harness →</a>
        <a class="bt bt-2" href="{{ '/recode/demo/' | relative_url }}">Experimentar a demo</a>
      </div>

      <div class="prova">
        <span><b>8</b> componentes</span><i></i>
        <span><b>32</b> questões</span><i></i>
        <span><b>10–15</b> min por pessoa</span><i></i>
        <span><b>0</b> avaliação individual</span>
      </div>

      <div class="assin">Reprograme o trabalho. Reinvente o negócio.</div>
    </div>

    <div class="hns" role="img"
         aria-label="Diagrama dos oito componentes do harness organizacional — H1 modelo de negócio e economia do valor, H2 arquitetura do trabalho e fluxo, H3 modelo operacional humano–agente, H4 contexto, conhecimento e dados, H5 execução e orquestração, H6 avaliação, observabilidade e confiabilidade, H7 governança e direitos de decisão, H8 liderança, competências e mudança — empilhados e convergindo para o desempenho de negócio: custo, qualidade, velocidade, receita e risco.">
      <img class="simb" src="{{ '/recode/assets/marca/recode-simbolo-3d.png' | relative_url }}" alt="" aria-hidden="true">
      <div class="cab" aria-hidden="true">
        <span>Os oito componentes do harness organizacional</span>
        <span>H1 → H8</span>
      </div>
      <div class="cam" aria-hidden="true">
        <div style="--c:#2D87FF"><b>H1</b><span>Modelo de negócio e economia do valor</span></div>
        <div style="--c:#3F82FD"><b>H2</b><span>Arquitetura do trabalho e fluxo</span></div>
        <div style="--c:#5180FB"><b>H3</b><span>Modelo operacional humano–agente</span></div>
        <div style="--c:#6379F9"><b>H4</b><span>Contexto, conhecimento e dados</span></div>
        <div style="--c:#7373F7"><b>H5</b><span>Execução e orquestração</span></div>
        <div style="--c:#8068F7"><b>H6</b><span>Avaliação, observabilidade e confiabilidade</span></div>
        <div style="--c:#8761F6"><b>H7</b><span>Governança e direitos de decisão</span></div>
        <div style="--c:#885CF6"><b>H8</b><span>Liderança, competências e mudança</span></div>
      </div>
      <div class="flui" aria-hidden="true"><i></i></div>
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

    <div class="garg rv">
      <div data-n="01">
        <h3>Onde o ganho evapora</h3>
        <p>Filas, aprovações em série, handoffs entre áreas, regras desatualizadas e retrabalho.
           A tarefa ficou mais rápida; o ciclo continua igual.</p>
      </div>
      <div data-n="02">
        <h3>Por que o diagnóstico falha</h3>
        <p>Contar ferramentas adotadas não diz o que a empresa consegue entregar. A pergunta útil
           é outra: que trabalho ela realiza de forma confiável, econômica e melhor com IA — e o que a impede.</p>
      </div>
      <div data-n="03">
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

    <div class="pat rv">
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

    <div class="hs rv">
      <div style="--c:#2D87FF"><div class="cod">H1</div><h3>Modelo de negócio e economia do valor</h3><p>Mudamos proposta de valor, custo de servir, preço ou margem — ou apenas adotamos IA?</p></div>
      <div style="--c:#3F82FD"><div class="cod">H2</div><h3>Arquitetura do trabalho e fluxo</h3><p>O trabalho foi decomposto, simplificado e redesenhado de ponta a ponta?</p></div>
      <div style="--c:#5180FB"><div class="cod">H3</div><h3>Modelo operacional humano–agente</h3><p>Quem faz, decide, verifica, aprova e responde pelo resultado?</p></div>
      <div style="--c:#6379F9"><div class="cod">H4</div><h3>Contexto, conhecimento e dados</h3><p>Pessoas e agentes acessam o contexto correto, autorizado e confiável no momento certo?</p></div>
      <div style="--c:#7373F7"><div class="cod">H5</div><h3>Execução e orquestração</h3><p>A empresa sustenta execução de agente com estado, ferramentas, permissões e recuperação?</p></div>
      <div style="--c:#8068F7"><div class="cod">H6</div><h3>Avaliação, observabilidade e confiabilidade</h3><p>Consegue verificar qualidade, custo e efeito de cada execução?</p></div>
      <div style="--c:#8761F6"><div class="cod">H7</div><h3>Governança e direitos de decisão</h3><p>A autonomia é proporcional ao risco e existe responsável pelo efeito?</p></div>
      <div style="--c:#885CF6"><div class="cod">H8</div><h3>Liderança, competências e mudança</h3><p>Líderes e equipes operam o novo modelo e mudam hábitos, incentivos e decisões?</p></div>
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

    <div class="mov rv">
      <div><div class="l">R</div><div class="n">Reframe</div><p>Redefinir a ambição de negócio e o mecanismo de captura.</p></div>
      <div><div class="l">E</div><div class="n">Explore</div><p>Escolher as jornadas pelas quais vale redesenhar.</p></div>
      <div><div class="l">C</div><div class="n">Co-design</div><p>Reprojetar jornada, trabalho, equipes e decisões.</p></div>
      <div><div class="l">O</div><div class="n">Orchestrate</div><p>Instalar contexto, agentes, verificações e gates.</p></div>
      <div><div class="l">D</div><div class="n">Develop</div><p>Preparar liderança e times para novos papéis.</p></div>
      <div><div class="l">E</div><div class="n">Evaluate</div><p>Medir processo e resultado, e ajustar o harness organizacional.</p></div>
    </div>
  </div>
</section>

<section class="sec">
  <div class="wrap">
    <div class="olho">A consultoria</div>
    <h2 class="tit larga">Quatro ofertas de uma mesma jornada</h2>
    <p class="lead">São modulares: dá para contratar só o diagnóstico. Mas detectar a restrição
       e transformar a organização são coisas diferentes, e o artefato deixa isso claro.</p>

    <div class="of rv">
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
      <img class="simb" src="{{ '/recode/assets/marca/recode-simbolo-3d.png' | relative_url }}" alt="" aria-hidden="true">
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
