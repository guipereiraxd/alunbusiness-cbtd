---
title: "Início"
description: "A IA acelera tarefas; o ganho some nos processos e nos alinhamentos entre áreas. Diagnosticamos e redesenhamos o harness organizacional da sua empresa."
---

<style>
  /* ── hero ───────────────────────────────────────────────────── */
  .hero{position:relative;background:#0F0F0F;
    padding:96px 0 104px;overflow:hidden;isolation:isolate;
    min-height:calc(100svh - 86px);display:flex;align-items:center}
  .hero::before{content:"";position:absolute;inset:0;z-index:-2;
    background:
      radial-gradient(900px 560px at 84% -16%, rgba(209,164,118,.17), transparent 62%),
      radial-gradient(720px 500px at -8% 114%, rgba(209,164,118,.09), transparent 64%),
      linear-gradient(180deg,#0F0F0F 0%,#19191C 100%)}
  .hero::after{content:"";position:absolute;inset:0;z-index:-1;pointer-events:none;
    background-image:linear-gradient(rgba(209,164,118,.06) 1px,transparent 1px),
                     linear-gradient(90deg,rgba(209,164,118,.06) 1px,transparent 1px);
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
    background:linear-gradient(112deg,#D1A476 0%,#E8CCA6 54%,#C68F58 100%);
    -webkit-background-clip:text;background-clip:text}
  .hero .sub{font-size:clamp(17px,1.9vw,20px);color:var(--tx-2);margin-top:28px;
    max-width:50ch;line-height:1.55}
  .hero .botoes{margin-top:38px}
  .hero .bt-1{font-size:17px;padding:18px 32px}

  .hero .assin{display:inline-flex;align-items:center;gap:11px;font-family:var(--mono);
    font-size:11.5px;letter-spacing:.15em;text-transform:uppercase;color:var(--tx-3);margin-top:30px}
  .hero .assin::before{content:"";width:22px;height:1px;background:var(--ouro-borda)}

  /* ── o harness, como estrutura que sustenta ──────────────────
     Oito camadas empilhadas, cada uma com um filete que caminha do
     azul ao violeta — a mesma fita do símbolo, agora como escala.
     Elas convergem para a placa de resultado: é o argumento do
     produto dito em forma, não em texto. */
  .hns{position:relative;overflow:hidden;background:rgba(255,255,255,.05);
    border:1px solid var(--ouro-borda);border-radius:26px;padding:26px;
    backdrop-filter:blur(10px);-webkit-backdrop-filter:blur(10px);
    box-shadow:0 34px 90px rgba(0,0,0,.6)}
  .hns .simb{position:absolute;top:-54px;right:-58px;width:208px;opacity:.17;
    pointer-events:none;z-index:0}
  /* Os dois :not() existem porque esta regra devolvia ao fluxo o que
     precisa ficar fora dele: a alternativa textual do diagrama (que
     ocupava 140px entre o fio e a placa) e o próprio símbolo, que
     empatava em especificidade com .hns .simb e vencia por vir depois. */
  .hns > *:not(.pular):not(.simb){position:relative;z-index:1}
  .hns .cab{display:flex;align-items:baseline;justify-content:space-between;gap:16px;
    font-family:var(--mono);font-size:10px;letter-spacing:.12em;text-transform:uppercase;
    color:var(--tx-2);margin-bottom:16px;line-height:1.5}
  .hns .cab span:last-child{color:var(--tx-3);white-space:nowrap;flex:none}

  .cam{display:grid;gap:5px}
  .cam div{display:grid;grid-template-columns:26px 1fr;align-items:center;gap:12px;
    background:rgba(255,255,255,.055);border-radius:10px;padding:10px 13px 10px 12px;
    font-size:13.5px;color:#E6E7EA;line-height:1.3;position:relative;
    border-left:3px solid var(--c);
    transition:background .2s var(--ease),transform .2s var(--ease)}
  .cam div:hover{background:rgba(255,255,255,.1);transform:translateX(3px)}
  /* o filete fica com a cor saturada; o código usa a versão clara dela,
     porque #885CF6 sobre o vidro dá 3,04:1 e aqui é texto */
  .cam div b{font-family:var(--mono);font-size:10.5px;font-weight:500;color:var(--ct)}

  .hns .flui{display:grid;place-items:center;height:26px;margin-top:4px}
  .hns .flui i{width:2px;height:26px;border-radius:2px;
    background:linear-gradient(180deg,rgba(209,164,118,.2),var(--ouro))}
  /* placa dourada pede texto preto, como no site da Alun: branco sobre
     dourado dá 2,26:1 e o preto dá 8,47:1 */
  .hns .alvo{position:relative;background:var(--ouro);border-radius:14px;
    padding:16px 18px;text-align:center;box-shadow:0 14px 38px rgba(209,164,118,.26);
    overflow:hidden}
  .hns .alvo::after{content:"";position:absolute;inset:0;
    background:linear-gradient(180deg,rgba(255,255,255,.22),transparent 58%);pointer-events:none}
  .hns .alvo b{position:relative;display:block;font-family:var(--disp);font-weight:700;
    font-size:17.5px;color:var(--sobre-ouro);letter-spacing:-.018em}
  .hns .alvo span{position:relative;font-size:12.5px;color:#2A2118}

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
  .pat .dois{color:var(--tx);background:#0F0F0F;isolation:isolate;
    box-shadow:0 26px 64px rgba(10,31,68,.3)}
  .pat .dois::before{content:"";position:absolute;inset:0;z-index:-1;
    background:radial-gradient(520px 320px at 110% -20%, rgba(209,164,118,.22), transparent 62%),
               radial-gradient(420px 300px at -10% 120%, rgba(209,164,118,.12), transparent 64%),
               linear-gradient(180deg,#0F0F0F,#1A1A1D)}
  .pat .rot{display:inline-flex;align-items:center;gap:9px;font-family:var(--mono);font-size:11px;
    letter-spacing:.13em;text-transform:uppercase;color:var(--tx-3)}
  .pat .rot::before{content:"";width:18px;height:2px;border-radius:2px;background:var(--linha-2)}
  .pat .dois .rot{color:var(--tx-2)}
  .pat .dois .rot::before{background:var(--grad-ouro-r)}
  .pat h3{font-size:23px;margin:14px 0 12px;letter-spacing:-.022em}
  .pat .dois h3{color:#fff}
  .pat p{font-size:15.5px;line-height:1.65;color:var(--tx-2)}
  .pat .dois p{color:var(--tx-2)}

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
  /* o filete do topo fica com a cor viva da fita; o código é texto de
     13px sobre cartão branco e precisa da versão escura — a viva dá
     entre 3,49:1 e 4,28:1, abaixo de AA em todos os oito */
  .hs .cod{font-family:var(--mono);font-size:13px;font-weight:500;color:var(--ctxt);
    letter-spacing:.08em}
  .hs h3{font-size:17px;font-weight:600;margin-top:12px;letter-spacing:-.014em;line-height:1.28}
  .hs p{font-size:14.5px;color:var(--tx-2);margin-top:10px;line-height:1.58}

  /* ── movimentos RECODE ───────────────────────────────────────
     As seis iniciais são o nome do produto, então a seção vira o
     momento de marca da página: preta, com o símbolo 3D ao fundo e
     o lockup assinando embaixo das letras. */
  .recode{position:relative}
  .recode .simb{position:absolute;top:-120px;right:-90px;width:380px;opacity:.1;
    pointer-events:none;z-index:0}
  .recode > *{position:relative;z-index:1}

  .mov{display:grid;grid-template-columns:repeat(6,1fr);gap:12px;margin-top:44px}
  @media(max-width:1040px){ .mov{grid-template-columns:repeat(3,1fr)} }
  @media(max-width:620px){ .mov{grid-template-columns:repeat(2,1fr)} }
  .mov > div{position:relative;background:rgba(255,255,255,.04);
    border:1px solid var(--linha-2);border-radius:16px;padding:24px 19px 22px;overflow:hidden;
    transition:transform .24s var(--ease),background .24s var(--ease),border-color .24s var(--ease)}
  .mov > div::before{content:"";position:absolute;top:0;left:0;right:0;height:2px;
    background:var(--grad-ouro-r);opacity:0;transition:opacity .24s var(--ease)}
  .mov > div:hover{transform:translateY(-4px);background:rgba(255,255,255,.07);
    border-color:var(--ouro-borda)}
  .mov > div:hover::before{opacity:1}
  /* a letra ocupa o cartão: lidas em sequência, as seis soletram RECODE */
  .mov .l{font-family:var(--disp);font-weight:800;font-size:clamp(44px,5vw,58px);line-height:.9;
    letter-spacing:-.05em;background:var(--grad-ouro);-webkit-background-clip:text;
    background-clip:text;color:transparent;-webkit-text-fill-color:transparent}
  .mov .n{font-family:var(--disp);font-weight:600;font-size:16px;color:#fff;margin-top:14px;
    letter-spacing:-.01em}
  .mov p{font-size:13.5px;color:var(--tx-2);margin-top:8px;line-height:1.52}

  /* Assinatura: o lockup fecha a seção. Empilhado e centrado, com ar em
     volta — ao lado do texto ele competia por espaço e saía pequeno. */
  .assina{display:flex;flex-direction:column;align-items:center;text-align:center;
    gap:20px;margin-top:54px;padding-top:44px;border-top:1px solid var(--linha-2)}
  .assina img{height:104px;width:auto;max-width:100%;
    filter:drop-shadow(0 18px 42px rgba(0,0,0,.55))}
  .assina span{font-size:15.5px;color:var(--tx-2);max-width:46ch;line-height:1.6}
  @media(max-width:860px){ .assina img{height:84px} }
  @media(max-width:620px){ .assina{margin-top:40px;padding-top:34px;gap:16px}
    .assina img{height:62px}
    .assina span{font-size:14.5px}
    .recode .simb{width:230px;top:-70px;right:-60px} }

  /* ── ofertas ────────────────────────────────────────────────── */
  .of{display:grid;gap:16px;margin-top:40px}
  .of > div{display:grid;grid-template-columns:200px 1fr auto;gap:28px;align-items:center;
    position:relative;background:var(--papel);border:1px solid var(--linha);border-radius:18px;
    padding:26px 28px;overflow:hidden;
    transition:transform .22s var(--ease),box-shadow .22s var(--ease)}
  .of > div::before{content:"";position:absolute;left:0;top:0;bottom:0;width:3px;
    background:var(--grad-ouro);opacity:.55;transition:opacity .22s var(--ease)}
  .of > div:hover{transform:translateX(3px);box-shadow:var(--elev-2)}
  .of > div:hover::before{opacity:1}
  @media(max-width:860px){ .of > div{grid-template-columns:1fr;gap:12px} }
  .of .nm{font-family:var(--disp);font-weight:700;font-size:22px;color:var(--tinta);
    letter-spacing:-.024em}
  .of .nm span{display:block;font-family:var(--mono);font-size:10.5px;letter-spacing:.11em;
    text-transform:uppercase;color:var(--ouro);font-weight:400;margin-top:6px}
  .of p{font-size:15px;color:var(--tx-2);line-height:1.62}
  .of .ent{font-family:var(--mono);font-size:12px;color:var(--tx-3);text-align:right;
    line-height:1.7;white-space:nowrap}
  @media(max-width:860px){ .of .ent{text-align:left;white-space:normal} }

  /* ── exemplos de missão ─────────────────────────────────────── */
  .mis{display:grid;grid-template-columns:repeat(3,1fr);gap:18px;margin-top:36px}
  @media(max-width:940px){ .mis{grid-template-columns:1fr} }
  .mis > div{position:relative;background:var(--papel);border:1px solid var(--linha);
    border-radius:18px;padding:26px;overflow:hidden;
    transition:transform .22s var(--ease),box-shadow .22s var(--ease)}
  .mis > div:hover{transform:translateY(-3px);box-shadow:var(--elev-2)}
  .mis .setor{font-family:var(--mono);font-size:10.5px;letter-spacing:.11em;
    text-transform:uppercase;color:var(--ouro)}
  .mis .obj{font-family:var(--disp);font-weight:700;font-size:19px;color:var(--tinta);
    margin:12px 0 0;line-height:1.32;letter-spacing:-.018em}
  .mis .campos{display:grid;gap:10px;margin-top:18px;padding-top:16px;
    border-top:1px solid var(--linha)}
  .mis .campos div{display:grid;grid-template-columns:82px 1fr;gap:12px;font-size:13.5px;
    color:var(--tx-2);line-height:1.5}
  .mis .campos b{font-family:var(--mono);font-size:10.5px;letter-spacing:.09em;
    text-transform:uppercase;color:var(--tx-3);font-weight:400;padding-top:2px}

  /* ── conversão ──────────────────────────────────────────────── */
  .conv{position:relative;border-radius:28px;padding:62px 48px;text-align:center;
    overflow:hidden;isolation:isolate;background:#0F0F0F;
    box-shadow:0 30px 80px rgba(10,31,68,.3)}
  .conv::before{content:"";position:absolute;inset:0;z-index:-2;
    background:radial-gradient(640px 400px at 18% -24%, rgba(209,164,118,.2), transparent 62%),
               radial-gradient(600px 380px at 86% 122%, rgba(209,164,118,.11), transparent 64%),
               linear-gradient(160deg,#0F0F0F,#1A1A1D)}
  .conv .simb{position:absolute;bottom:-78px;right:-58px;width:242px;opacity:.14;z-index:-1;
    pointer-events:none}
  @media(max-width:620px){ .conv{padding:42px 24px;border-radius:20px}
    .conv .simb{width:160px;bottom:-50px;right:-40px} }
  .conv h2{color:#fff;font-size:clamp(25px,3.6vw,38px);max-width:21ch;margin:0 auto;
    letter-spacing:-.03em}
  .conv p{color:var(--tx-2);font-size:17px;margin:18px auto 0;max-width:56ch;line-height:1.6}
  .conv .botoes{justify-content:center;margin-top:36px}
</style>

<section class="hero escuro ctx-escuro">
  <div class="wrap hero-in">
    <div>
      <div class="olho">Consultoria em harness organizacional</div>
      <h1>A IA acelerou.<span class="realce">Sua operação não.</span></h1>
      <p class="sub">O ganho da IA some nos processos, nas ineficiências e nos alinhamentos
         entre áreas. Diagnosticamos e redesenhamos o <b style="color:#CFE0FF;font-weight:600">harness
         organizacional</b> — o sistema que conecta trabalho, dados, agentes, decisões e
         controles — para que potencial vire resultado.</p>
      <div class="botoes">
        <a class="bt bt-1" href="{{ '/recode/diagnostico/' | relative_url }}">Diagnosticar meu harness →</a>
        <a class="bt bt-2" href="{{ '/recode/harness-organizacional/' | relative_url }}">Entender o harness</a>
      </div>

      <div class="assin">Reprograme o trabalho. Reinvente o negócio.</div>
    </div>

    <div class="hns ctx-escuro" role="img"
         aria-label="Diagrama dos oito componentes do harness organizacional — H1 modelo de negócio e economia do valor, H2 arquitetura do trabalho e fluxo, H3 modelo operacional humano–agente, H4 contexto, conhecimento e dados, H5 execução e orquestração, H6 avaliação, observabilidade e confiabilidade, H7 governança e direitos de decisão, H8 liderança, competências e mudança — empilhados e convergindo para o desempenho de negócio: custo, qualidade, velocidade, receita e risco.">
      <img class="simb" src="{{ '/recode/assets/marca/recode-simbolo-3d.png' | relative_url }}" alt="" aria-hidden="true">
      <div class="cab" aria-hidden="true">
        <span>Os oito componentes do harness organizacional</span>
        <span>H1 → H8</span>
      </div>
      <div class="cam" aria-hidden="true">
        <div style="--c:#2D87FF;--ct:#9DC2FF"><b>H1</b><span>Modelo de negócio e economia do valor</span></div>
        <div style="--c:#3F82FD;--ct:#A3C0FF"><b>H2</b><span>Arquitetura do trabalho e fluxo</span></div>
        <div style="--c:#5180FB;--ct:#AABEFE"><b>H3</b><span>Modelo operacional humano–agente</span></div>
        <div style="--c:#6379F9;--ct:#B2BCFE"><b>H4</b><span>Contexto, conhecimento e dados</span></div>
        <div style="--c:#7373F7;--ct:#B9B8FD"><b>H5</b><span>Execução e orquestração</span></div>
        <div style="--c:#8068F7;--ct:#BFB3FD"><b>H6</b><span>Avaliação, observabilidade e confiabilidade</span></div>
        <div style="--c:#8761F6;--ct:#C5B0FC"><b>H7</b><span>Governança e direitos de decisão</span></div>
        <div style="--c:#885CF6;--ct:#CBB4FC"><b>H8</b><span>Liderança, competências e mudança</span></div>
      </div>
      <div class="flui" aria-hidden="true"><i></i></div>
      <p class="pular">Os oito componentes do harness organizacional sustentam o desempenho de
         negócio: custo, qualidade, velocidade, receita e risco. A lista completa, com a pergunta
         diagnóstica de cada componente, está em
         <a href="{{ '/recode/harness-organizacional/' | relative_url }}">O harness organizacional</a>.</p>
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
      <div class="dois ctx-escuro">
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
      <div style="--c:#2D87FF;--ctxt:#1B5FC4"><div class="cod">H1</div><h3>Modelo de negócio e economia do valor</h3><p>Mudamos proposta de valor, custo de servir, preço ou margem — ou apenas adotamos IA?</p></div>
      <div style="--c:#3F82FD;--ctxt:#2456C6"><div class="cod">H2</div><h3>Arquitetura do trabalho e fluxo</h3><p>O trabalho foi decomposto, simplificado e redesenhado de ponta a ponta?</p></div>
      <div style="--c:#5180FB;--ctxt:#2D4EC8"><div class="cod">H3</div><h3>Modelo operacional humano–agente</h3><p>Quem faz, decide, verifica, aprova e responde pelo resultado?</p></div>
      <div style="--c:#6379F9;--ctxt:#3645CA"><div class="cod">H4</div><h3>Contexto, conhecimento e dados</h3><p>Pessoas e agentes acessam o contexto correto, autorizado e confiável no momento certo?</p></div>
      <div style="--c:#7373F7;--ctxt:#3F3DCC"><div class="cod">H5</div><h3>Execução e orquestração</h3><p>A empresa sustenta execução de agente com estado, ferramentas, permissões e recuperação?</p></div>
      <div style="--c:#8068F7;--ctxt:#4834CE"><div class="cod">H6</div><h3>Avaliação, observabilidade e confiabilidade</h3><p>Consegue verificar qualidade, custo e efeito de cada execução?</p></div>
      <div style="--c:#8761F6;--ctxt:#512CD0"><div class="cod">H7</div><h3>Governança e direitos de decisão</h3><p>A autonomia é proporcional ao risco e existe responsável pelo efeito?</p></div>
      <div style="--c:#885CF6;--ctxt:#5A23D2"><div class="cod">H8</div><h3>Liderança, competências e mudança</h3><p>Líderes e equipes operam o novo modelo e mudam hábitos, incentivos e decisões?</p></div>
    </div>

    <div class="botoes">
      <a class="bt bt-1" href="{{ '/recode/metodologia/' | relative_url }}">Ver a metodologia</a>
      <a class="bt bt-2" href="{{ '/recode/harness-organizacional/' | relative_url }}">Entender o harness</a>
    </div>
  </div>
</section>

<section class="sec escura ctx-escuro">
  <div class="wrap recode">
    <img class="simb" src="{{ '/recode/assets/marca/recode-simbolo-3d.png' | relative_url }}"
         alt="" aria-hidden="true">
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

    <div class="assina rv">
      <img src="{{ '/recode/assets/marca/recode-horizontal-3d.png' | relative_url }}"
           alt="AI Business ReCode · Alun Business">
      <span>Os seis movimentos dão nome ao produto — e são o que a consultoria
        efetivamente executa.</span>
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

    <h3 style="font-size:21px;margin-top:52px">Sobre o que o trabalho morde</h3>
    <p class="lead" style="margin-top:10px">A unidade de intervenção não é um chatbot nem uma
       trilha de treinamento: é uma <b>missão de negócio</b> — uma jornada delimitada, com
       resultado mensurável e alguém que responde por ela.</p>

    <div class="mis rv">
      <div>
        <div class="setor">Comercial</div>
        <div class="obj">Reduzir o tempo de cotação mantendo a taxa de erro e a conformidade</div>
        <div class="campos">
          <div><b>Indicador</b><span>tempo de ciclo por faixa de valor, com taxa de retrabalho</span></div>
          <div><b>Owner</b><span>diretoria comercial, com poder de mudar a alçada de aprovação</span></div>
          <div><b>Risco</b><span>proposta errada chega ao cliente — exige gate humano</span></div>
        </div>
      </div>
      <div>
        <div class="setor">Operações</div>
        <div class="obj">Encurtar o atendimento de segunda linha sem perder a qualidade da resolução</div>
        <div class="campos">
          <div><b>Indicador</b><span>tempo até resolução e reabertura em 30 dias</span></div>
          <div><b>Owner</b><span>gerência de operações, com acesso ao histórico de chamados</span></div>
          <div><b>Risco</b><span>resposta plausível e errada ao cliente final</span></div>
        </div>
      </div>
      <div>
        <div class="setor">Suporte ao negócio</div>
        <div class="obj">Fechar o ciclo de relatórios gerenciais na primeira semana do mês</div>
        <div class="campos">
          <div><b>Indicador</b><span>dia útil de fechamento e número de correções após publicar</span></div>
          <div><b>Owner</b><span>controladoria, com autoridade sobre a fonte dos dados</span></div>
          <div><b>Risco</b><span>número publicado que orienta decisão e depois muda</span></div>
        </div>
      </div>
    </div>

    <div class="nota">
      <b>São exemplos de formato, não casos de cliente.</b> O que torna uma missão pronta para
      redesenho é sempre o mesmo: patrocinador com poder de decidir, indicador com baseline e
      limites de risco declarados.
    </div>

    </div>
</section>

<section class="sec ap">
  <div class="wrap">
    <div class="conv escuro ctx-escuro">
      <img class="simb" src="{{ '/recode/assets/marca/recode-simbolo-3d.png' | relative_url }}" alt="" aria-hidden="true">
      <h2>Onde a sua organização está perdendo o ganho da IA?</h2>
      <p>Comece pela demo de oito perguntas — leva de três a cinco minutos, não pede cadastro e
         devolve uma leitura exploratória do seu ponto de vista. Para a empresa, o diagnóstico
         corporativo é outro instrumento.</p>
      <div class="botoes">
        <a class="bt bt-1" href="{{ '/recode/contato/' | relative_url }}">Falar com a Alun Business</a>
        <a class="bt bt-2" href="{{ '/recode/diagnostico/' | relative_url }}">Conhecer o diagnóstico</a>
      </div>
    </div>
  </div>
</section>
