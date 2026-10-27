---
title: "Início"
description: "Descubra quais habilidades você pode combinar para resolver melhor seus desafios. A palestra Hybrid Skills, de Guilherme Pereira na BB Digital Week 2026, continua aqui: um diagnóstico curto, uma prática para a semana e um conteúdo da Alura."
---

<style>
  .hero{position:relative;background:var(--exec);padding:72px 0 84px;overflow:hidden;isolation:isolate;
    min-height:calc(100svh - 86px);display:flex;align-items:center}
  .hero::before{content:"";position:absolute;inset:0;z-index:-2;
    background:
      radial-gradient(900px 560px at 84% -16%, rgba(209,164,118,.16), transparent 62%),
      radial-gradient(720px 500px at -8% 114%, rgba(51,86,255,.28), transparent 64%),
      linear-gradient(180deg,var(--exec) 0%,var(--exec-2) 100%)}
  .hero::after{content:"";position:absolute;inset:0;z-index:-1;pointer-events:none;
    background-image:linear-gradient(rgba(209,164,118,.06) 1px,transparent 1px),
                     linear-gradient(90deg,rgba(209,164,118,.06) 1px,transparent 1px);
    background-size:68px 68px;
    mask-image:radial-gradient(820px 560px at 22% 32%,#000,transparent 72%);
    -webkit-mask-image:radial-gradient(820px 560px at 22% 32%,#000,transparent 72%)}
  .hero-in{width:100%;display:grid;grid-template-columns:1.1fr .9fr;gap:52px;align-items:center;position:relative;z-index:1}
  @media(max-width:1040px){ .hero-in{grid-template-columns:1fr;gap:40px} .hero{padding:52px 0 64px;min-height:0;display:block} }
  .hero .evento{display:flex;align-items:center;gap:16px;flex-wrap:wrap}
  .hero .evento img{width:64px;height:auto;border-radius:10px}
  .hero .evento .olho{color:var(--ouro)}
  .hero h1{font-size:clamp(34px,4.6vw,62px);color:#fff;letter-spacing:-.04em;line-height:1.02;margin-top:24px;font-weight:800;max-width:16ch}
  .hero .realce{display:block}
  .hero .sub{font-size:clamp(17px,1.9vw,20px);color:var(--tx-2);margin-top:26px;max-width:46ch;line-height:1.55}
  .hero .botoes{margin-top:34px}
  .hero .bt-1{font-size:17px;padding:18px 32px}
  .hero .meta{margin-top:26px;font-family:var(--mono);font-size:12.5px;letter-spacing:.06em;color:var(--tx-3);line-height:1.8}
  .hero .meta b{color:var(--tx-2);font-weight:500}
  .hero .fig{position:relative}
  .hero .fig img{width:100%;max-width:520px;margin:0 auto;border-radius:24px;
    box-shadow:0 30px 80px rgba(0,0,0,.5);mask-image:radial-gradient(closest-side,#000 70%,transparent 100%);
    -webkit-mask-image:radial-gradient(closest-side,#000 70%,transparent 100%)}
  @media(max-width:1040px){ .hero .fig img{max-width:380px} }

  .tese .cartao h3{font-size:19px}
  .tese .num{font-family:var(--mono);font-size:12px;letter-spacing:.14em;color:var(--ouro);margin-bottom:10px}

  .mov .cartao{padding:22px}
  .mov .cartao .n{font-family:var(--mono);font-size:12px;letter-spacing:.14em;color:var(--ouro)}
  .mov .cartao h3{font-size:21px;margin-top:8px}
  .mov .cartao .dupla{font-size:14px;color:var(--ouro-claro);font-weight:600;margin-top:10px}
  .mov .cartao p{font-size:14.5px}

  .leva .cartao{display:grid;gap:8px}
  .leva .cartao .ico{width:40px;height:40px;border-radius:12px;background:var(--ouro-fundo);border:1px solid var(--ouro-borda);
    display:grid;place-items:center;font-family:var(--mono);font-size:14px;color:var(--ouro-hover);font-weight:600}

  .quem{display:grid;grid-template-columns:1fr 1fr;gap:40px;align-items:center}
  @media(max-width:860px){ .quem{grid-template-columns:1fr} }
  .quem .bio p{margin-top:14px;font-size:16px;color:var(--tx-2);line-height:1.65;max-width:56ch}
  .quem .slide{border-radius:16px;overflow:hidden;border:1px solid var(--linha);box-shadow:var(--elev-2)}
  .fim-cta{text-align:center}
  .fim-cta .tit{margin-inline:auto}
  .fim-cta .lead{margin-inline:auto}
  .fim-cta .botoes{justify-content:center}
</style>

<section class="hero ctx-escuro">
  <div class="wrap hero-in">
    <div>
      <div class="evento">
        <img src="{{ '/bbdw/assets/marca/bbdw-2026.png' | relative_url }}" alt="BB Digital Week 2026">
        <div class="olho">Hybrid Skills · 28 de outubro de 2026</div>
      </div>
      <h1>Descubra quais habilidades você pode <span class="realce">combinar</span> para resolver melhor seus desafios.</h1>
      <p class="sub">Responda algumas perguntas e receba um próximo passo para praticar no dia a dia.</p>
      <div class="botoes">
        <a class="bt bt-1" href="{{ '/bbdw/diagnostico/' | relative_url }}">Descobrir meu próximo passo</a>
        <a class="bt bt-2" href="{{ '/bbdw/palestra/' | relative_url }}">Ver a palestra</a>
      </div>
      <div class="meta">
        <b>Não é uma prova.</b> Pense no que você costuma fazer.<br>
        10 perguntas, mais 3 sobre a sua dupla · Sem cadastro · As respostas ficam no seu aparelho
      </div>
    </div>
    <div class="fig rv">
      <img src="{{ '/bbdw/assets/marca/no-hero.jpg' | relative_url }}" alt="Nó entrelaçado em azul e dourado, símbolo da palestra Hybrid Skills" width="1140" height="1125" fetchpriority="high">
    </div>
  </div>
</section>

<section class="sec tese">
  <div class="wrap">
    <div class="olho">A tese</div>
    <h2 class="tit larga rv">Problemas não chegam separados por competência.</h2>
    <p class="lead rv">Seu superpoder está na combinação de competências que você consegue colocar em ação
      diante de um problema real. O híbrido não é ter muitas habilidades: é como você as combina.</p>
    <div class="grade g3 rv" style="margin-top:38px">
      <div class="cartao"><div class="num">01</div><h3>Uma competência</h3><p>Comunicar bem é uma capacidade.</p></div>
      <div class="cartao"><div class="num">02</div><h3>Um repertório</h3><p>Saber comunicar, analisar dados e negociar amplia suas possibilidades.</p></div>
      <div class="cartao"><div class="num">03</div><h3>Uma combinação em ação</h3><p>Usar essas capacidades juntas para mudar um resultado é a proposta desta abordagem.</p></div>
    </div>
  </div>
</section>

<section class="sec escura mov ctx-escuro">
  <div class="wrap">
    <div class="olho">O modelo autoral</div>
    <h2 class="tit larga rv">Cinco movimentos diante de um problema real</h2>
    <p class="lead rv">Cada movimento junta uma capacidade técnica a uma capacidade humana ou de negócio.
      O diagnóstico ajuda a escolher qual dupla merece a sua atenção agora.</p>
    <div class="grade g5 rv" style="margin-top:38px">
      <div class="cartao"><div class="n">01</div><h3>Ler</h3><div class="dupla">Dados + pensamento crítico</div><p>Entender antes de agir: interpretar informações e questionar evidências antes de concluir.</p></div>
      <div class="cartao"><div class="n">02</div><h3>Conectar</h3><div class="dupla">Dados + visão estratégica</div><p>Escolher o que importa: usar informações para definir prioridades ligadas a um objetivo.</p></div>
      <div class="cartao"><div class="n">03</div><h3>Criar</h3><div class="dupla">IA + criatividade</div><p>Encontrar outras soluções: usar IA para explorar alternativas e adaptar uma ao contexto.</p></div>
      <div class="cartao"><div class="n">04</div><h3>Mobilizar</h3><div class="dupla">Ferramentas digitais + colaboração</div><p>Fazer junto: organizar tarefas e combinar responsabilidades com outras pessoas.</p></div>
      <div class="cartao"><div class="n">05</div><h3>Aprender</h3><div class="dupla">Experimentação + adaptabilidade</div><p>Testar e ajustar: planejar um teste simples, observar o resultado e mudar a abordagem.</p></div>
    </div>
    <div class="nota rv">Modelo autoral e síntese editorial de Guilherme Pereira. Aprender devolve você ao começo, mais preparado. <b>Não é taxonomia científica.</b></div>
  </div>
</section>

<section class="sec leva">
  <div class="wrap">
    <div class="olho">O que você leva</div>
    <h2 class="tit larga rv">Um próximo passo, não uma nota</h2>
    <p class="lead rv">Ao terminar, você recebe quatro coisas. Nenhuma delas é uma pontuação, um ranking ou uma comparação com outras pessoas.</p>
    <div class="grade g4 rv" style="margin-top:38px">
      <div class="cartao"><div class="ico">1</div><h3>Um comportamento que você já pratica</h3><p>Pelas suas respostas, o que você relata fazer com frequência.</p></div>
      <div class="cartao"><div class="ico">2</div><h3>Sua próxima combinação</h3><p>A dupla técnica + humana que vale praticar, e por quê.</p></div>
      <div class="cartao"><div class="ico">3</div><h3>Uma ação para a semana</h3><p>Pequena, concreta, com um plano de sete dias para imprimir ou salvar.</p></div>
      <div class="cartao"><div class="ico">4</div><h3>Um conteúdo da Alura</h3><p>Um curso que apoia a ação, com a condição de acesso explícita.</p></div>
    </div>
    <div class="nota rv">O diagnóstico é uma reflexão guiada por autorrelato. <b>Não certifica competências, não compara pessoas e não serve para seleção ou avaliação de desempenho.</b> Suas respostas ficam só no seu navegador; nada é enviado com seu nome.</div>
  </div>
</section>

<section class="sec canvas">
  <div class="wrap quem">
    <div class="bio rv">
      <div class="olho">A palestra</div>
      <h2 class="tit">Hybrid Skills: as competências que diferenciam profissionais na era da IA</h2>
      <p>Os vinte slides da apresentação, com as fontes de cada dado: o que o RH valoriza, como cresce a demanda por aprender,
        por que cada competência falha sozinha e as seis perguntas para destravar um problema.</p>
      <p><b style="color:var(--tinta)">Guilherme Luiz Pereira</b> é Diretor de Inovação da Alun Business, o ecossistema de educação corporativa
        da Alura, FIAP, PM3 e StartSe. Palestrante no SXSW em 2018 e 2023, físico médico e economista pela Unicamp, com formação
        em Stanford, Singularity, Babson e Harvard.</p>
      <div class="botoes">
        <a class="bt bt-1" href="{{ '/bbdw/palestra/' | relative_url }}">Ver a palestra slide a slide</a>
        <a class="bt bt-2" href="{{ '/bbdw/assets/hybrid-skills-bbdw-2026.pdf' | relative_url }}">Baixar o PDF (6 MB)</a>
      </div>
    </div>
    <a class="slide rv" href="{{ '/bbdw/palestra/' | relative_url }}" aria-label="Abrir a palestra slide a slide">
      <img src="{{ '/bbdw/assets/slides/slide-16.jpg' | relative_url }}" alt="Slide: seis perguntas para destravar um problema" width="1200" height="675" loading="lazy">
    </a>
  </div>
</section>

<section class="sec escura marca ctx-escuro fim-cta">
  <div class="wrap">
    <div class="olho" style="justify-content:center">Sua resposta também não</div>
    <h2 class="tit larga rv">Problemas não chegam separados por competência.</h2>
    <p class="lead rv">Descubra qual combinação vale praticar nesta semana.</p>
    <div class="botoes rv">
      <a class="bt bt-1" href="{{ '/bbdw/diagnostico/' | relative_url }}">Descobrir meu próximo passo</a>
    </div>
  </div>
</section>

<script src="{{ '/bbdw/assets/metricas.js' | relative_url }}"></script>
<script src="https://www.gstatic.com/firebasejs/10.13.2/firebase-app-compat.js" defer></script>
<script src="https://www.gstatic.com/firebasejs/10.13.2/firebase-firestore-compat.js" defer></script>
<script src="{{ '/assets/firebase-config.js' | relative_url }}" defer></script>
{% raw %}
<script>window.BBDW_VERSOES = { pagina:"bbdw-inicio" }; window.BBDW_METRICAS.registrar("landing_view","inicio");</script>
{% endraw %}
