---
title: "Início"
description: "Plataforma de avaliação de prontidão em IA da BBTS: assessment, objetivo de 12 meses e geração assistida de Plano de Desenvolvimento Individual em IA e Dados, com aprovação humana."
---

<style>
  .hero{background:var(--paper);border-bottom:1px solid var(--line);position:relative;overflow:hidden}
  .hero::after{content:"";position:absolute;inset:0;pointer-events:none;
    background:radial-gradient(58% 70% at 88% 8%, rgba(0,51,160,.07) 0%, transparent 62%),
               radial-gradient(42% 52% at 4% 96%, rgba(255,204,0,.14) 0%, transparent 60%)}
  .hero-in{position:relative;z-index:2;display:grid;grid-template-columns:minmax(0,760px);gap:52px;
    align-items:center;padding-block:64px 60px}
  @media(max-width:980px){ .hero-in{gap:38px;padding-block:48px 44px} }
  .hero h1{margin-top:16px}
  .lead em{font-style:normal;font-weight:600;color:var(--ink)}
  .hero h1 em{font-style:normal;background:linear-gradient(100deg,var(--blue) 0%,var(--blue-500) 100%);
    -webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent;color:transparent}
  .hero .lede{margin-top:18px}
  .hero-cta{display:flex;gap:12px;flex-wrap:wrap;margin-top:28px}
    letter-spacing:-.02em;font-variant-numeric:tabular-nums}


  /* 3 perguntas */
  .q{display:grid;grid-template-columns:auto 1fr;gap:16px;align-items:start}
  .q .num{font-family:var(--disp);font-weight:800;font-size:34px;line-height:.9;letter-spacing:-.04em;
    color:var(--blue-100);-webkit-text-stroke:1px var(--blue-300)}
  .q p{margin-top:7px;font-size:14.5px;color:var(--tx-2);line-height:1.55}

  /* fluxo */
  .flow{display:grid;grid-template-columns:repeat(7,1fr);gap:0;margin-top:28px;
    border:1px solid var(--line);border-radius:12px;overflow:hidden;background:var(--paper)}
  @media(max-width:980px){ .flow{grid-template-columns:repeat(2,1fr)} }
  @media(max-width:520px){ .flow{grid-template-columns:1fr} }
  .fs{padding:17px 15px;border-right:1px solid var(--line);position:relative}
  .fs:last-child{border-right:0}
  @media(max-width:980px){ .fs{border-bottom:1px solid var(--line)} }
  .fs .i{font-family:var(--mono);font-size:9.5px;letter-spacing:.14em;color:var(--tx-3)}
  .fs h4{margin-top:7px;font-size:14px}
  .fs p{margin-top:5px;font-size:12.5px;line-height:1.45;color:var(--tx-2)}
  .fs.human{background:var(--yellow-soft)}
  .fs.human .i{color:var(--warn)}

  /* dimensões */
  .dim{display:grid;grid-template-columns:auto 1fr;gap:14px;align-items:start;padding:17px 0;
    border-bottom:1px solid var(--line)}
  .dim:last-child{border-bottom:0}
  .dim .ic{width:38px;height:38px;border-radius:10px;background:var(--blue-100);color:var(--blue-700);
    display:grid;place-items:center;font-family:var(--mono);font-size:12px;font-weight:600;flex-shrink:0}
  .dim p{margin-top:4px;font-size:13.5px;color:var(--tx-2);line-height:1.5}

  /* agentes */
  .ag{background:var(--paper);border:1px solid var(--line);border-radius:13px;padding:21px;position:relative;overflow:hidden}
  .ag::before{content:"";position:absolute;left:0;top:0;bottom:0;width:3px}
  .ag:nth-child(1)::before{background:var(--blue)}
  .ag:nth-child(2)::before{background:var(--blue-500)}
  .ag:nth-child(3)::before{background:var(--yellow)}
  .ag:nth-child(4)::before{background:var(--ok)}
  .ag .role{font-family:var(--mono);font-size:9.5px;letter-spacing:.14em;text-transform:uppercase;color:var(--tx-3)}
  .ag h3{margin-top:6px;font-size:16px}
  .ag p{margin-top:8px;font-size:13.5px;line-height:1.55;color:var(--tx-2)}

  /* limites */
  .lim{display:grid;grid-template-columns:auto 1fr;gap:12px;align-items:start;padding:13px 0}
  .lim .x{width:21px;height:21px;border-radius:50%;background:var(--alert-s);color:var(--alert);
    display:grid;place-items:center;font-size:12px;font-weight:700;flex-shrink:0;margin-top:1px}
  .lim.ok .x{background:var(--ok-s);color:var(--ok)}
  .lim p{margin:0;font-size:14px;line-height:1.5;color:var(--tx)}

  .cta-end{background:var(--grad);border-radius:18px;padding:44px 40px;color:#fff;position:relative;overflow:hidden}
  .cta-end::after{content:"";position:absolute;right:-60px;bottom:-60px;width:220px;height:220px;
    border-radius:50%;background:rgba(255,204,0,.16)}
  .cta-end h2{color:#fff;position:relative;z-index:2}
  .cta-end p{color:var(--blue-300);max-width:56ch;position:relative;z-index:2;font-size:15.5px}
  .cta-end .row{display:flex;gap:12px;flex-wrap:wrap;margin-top:26px;position:relative;z-index:2}
</style>

<section class="hero">
  <div class="wrap hero-in">
    <div>
      <span class="sk">Agente de IA para desenvolvimento de pessoas</span>
      <h1>Do diagnóstico ao <em>PDI em IA e Dados</em>, com decisão humana no fim.</h1>
      <p class="lede">Você responde a um assessment de prontidão em IA e descreve onde precisa chegar em 12 meses. Um fluxo multiagente analisa as lacunas, seleciona ações de aprendizagem e verifica a consistência do plano — e entrega uma proposta de Plano de Desenvolvimento Individual para você e seu gestor revisarem.</p>
      <div class="hero-cta">
        <a class="btn btn-primary" href="{{ '/bbts/assessment/' | relative_url }}">Iniciar assessment →</a>
        <a class="btn btn-line" href="{{ '/bbts/metodologia/' | relative_url }}">Como funciona</a>
      </div>
    </div>

  </div>
</section>

<section class="sec">
  <div class="wrap">
    <span class="sk">O problema</span>
    <h2 style="margin-top:14px">Conteúdo não falta. Falta o caminho até ele.</h2>
    <p class="lead">O catálogo de IA e Dados da Alura tem profundidade de sobra para levar alguém do primeiro prompt à construção de agentes. O que costuma faltar é o anterior: saber de onde <em>esta</em> pessoa parte, onde precisa chegar e por qual sequência. Sem isso, a escolha vira palpite — e plano escolhido no palpite não se sustenta até o fim do ciclo. A plataforma responde a três perguntas, e o PDI precisa mostrar a ligação entre elas.</p>
    <div class="grid g3" style="margin-top:30px">
      <div class="q"><div class="num">01</div><div><h3>Onde você está hoje</h3><p>Prontidão atual em IA por dimensão de competência, com as respostas que sustentam cada estimativa.</p></div></div>
      <div class="q"><div class="num">02</div><div><h3>Onde precisa chegar</h3><p>O objetivo de 12 meses, traduzido em capacidades e resultados observáveis — confirmados por você.</p></div></div>
      <div class="q"><div class="num">03</div><div><h3>O que fazer agora</h3><p>As ações de desenvolvimento do próximo ciclo de 90 dias, com evidência esperada e prazo de revisão.</p></div></div>
    </div>
  </div>
</section>

<section class="sec plain">
  <div class="wrap">
    <span class="sk">Como funciona</span>
    <h2 style="margin-top:14px">Sete etapas, duas delas humanas</h2>
    <p class="lead">O fluxo é determinístico onde precisa ser e assistido por IA onde agrega. As etapas em amarelo dependem de uma pessoa.</p>
    <div class="flow">
      <div class="fs"><div class="i">01</div><h4>Assessment</h4><p>Perguntas estruturadas sobre uso de IA no trabalho.</p></div>
      <div class="fs human"><div class="i">02 · humano</div><h4>Objetivo</h4><p>Você descreve e confirma onde precisa chegar.</p></div>
      <div class="fs"><div class="i">03</div><h4>Lacunas</h4><p>Comparação entre estado atual e desejado.</p></div>
      <div class="fs"><div class="i">04</div><h4>Proposta</h4><p>Cursos do catálogo e aplicação prática.</p></div>
      <div class="fs"><div class="i">05</div><h4>Validação</h4><p>Fontes, limites e completude conferidos.</p></div>
      <div class="fs human"><div class="i">06 · humano</div><h4>Aprovação</h4><p>Gestor aprova, ajusta ou devolve.</p></div>
      <div class="fs"><div class="i">07</div><h4>Acompanhamento</h4><p>Evidências e reavaliação por ciclo.</p></div>
    </div>
  </div>
</section>

<section class="sec">
  <div class="wrap">
    <div class="grid g2" style="gap:48px;align-items:start">
      <div>
        <span class="sk">O que é avaliado</span>
        <h2 style="margin-top:14px">Quatro sub-índices, 48 pontos</h2>
        <p class="lead" style="margin-bottom:10px">Treze perguntas somam o <b>Índice de Prontidão</b>, de 12 a 48 pontos. Cada pergunta usa a mesma escada de quatro degraus, e cada estimativa aparece com a resposta que a sustenta.</p>
        <div style="margin-top:18px">
          <div class="dim"><span class="ic">A</span><div><h4>Uso atual <span style="font-family:var(--mono);font-size:11px;color:var(--tx-3);font-weight:400">· 3 a 12 pts</span></h4><p>O hábito. Frequência, para que usa e se vira sozinho.</p></div></div>
          <div class="dim"><span class="ic">B</span><div><h4>Base técnica <span style="font-family:var(--mono);font-size:11px;color:var(--tx-3);font-weight:400">· 4 a 16 pts</span></h4><p>Automação, dados, ferramentas sem programação e conceitos técnicos.</p></div></div>
          <div class="dim"><span class="ic">C</span><div><h4>Influência <span style="font-family:var(--mono);font-size:11px;color:var(--tx-3);font-weight:400">· 2 a 8 pts</span></h4><p>Se é procurado por outros e se já ensinou o que aprendeu.</p></div></div>
          <div class="dim"><span class="ic">D</span><div><h4>Contexto de trabalho <span style="font-family:var(--mono);font-size:11px;color:var(--tx-3);font-weight:400">· 3 a 12 pts</span></h4><p>Ferramenta, ambiente da área e espaço na rotina — o que o ambiente permite.</p></div></div>
        </div>
        <div class="note" style="margin-top:20px"><b>Os três primeiros medem o que a pessoa sabe fazer. O quarto mede o que o ambiente deixa fazer.</b> Separar os dois evita cobrar de alguém uma competência que a agenda ou a falta de ferramenta impede de exercer.</div>
      </div>
      <div>
        <span class="sk">Quem executa</span>
        <h2 style="margin-top:14px">Quatro agentes, papéis separados</h2>
        <p class="lead">Separar os papéis é o que permite auditar o resultado: cada etapa registra suas entradas, versões e saídas.</p>
        <div class="grid" style="margin-top:20px;gap:12px">
          <div class="ag"><div class="role">Orquestração</div><h3>Orquestrador GEPES</h3><p>Organiza o contexto, controla a sequência e apresenta o resultado. Falha de uma pessoa não bloqueia as demais.</p></div>
          <div class="ag"><div class="role">Análise</div><h3>Diagnóstico de Competências</h3><p>Interpreta assessment, evidências e objetivo confirmado. Identifica lacunas e pré-requisitos.</p></div>
          <div class="ag"><div class="role">Seleção</div><h3>Curadoria de Aprendizagem</h3><p>Escolhe ações do catálogo autorizado e propõe a aplicação prática no contexto de trabalho.</p></div>
          <div class="ag"><div class="role">Controle</div><h3>Validação e Governança</h3><p>Confere fontes, aderência, limites e completude. Permite uma única revisão automática.</p></div>
        </div>
      </div>
    </div>
  </div>
</section>

<section class="sec plain">
  <div class="wrap">
    <span class="sk">Como a pessoa é classificada</span>
    <h2 style="margin-top:14px">Quatro perfis, duas perguntas</h2>
    <p class="lead">O perfil sai de duas perguntas apenas: <b>para que usa</b> e <b>se vira sozinho</b>. Frequência fica de fora de propósito — usar todos os dias sem autonomia não faz de ninguém um construtor.</p>
    <div class="grid g4" style="margin-top:28px">
      <div class="card hov"><div class="tag n" style="margin-bottom:10px">degrau 1</div><h3>Iniciante</h3><p style="font-size:13.5px;color:var(--tx-2);margin-top:8px">Não usa IA no trabalho, ou usa sem conseguir avaliar o resultado.</p></div>
      <div class="card hov"><div class="tag b" style="margin-bottom:10px">degrau 2</div><h3>Praticante</h3><p style="font-size:13.5px;color:var(--tx-2);margin-top:8px">Usa no próprio trabalho, mas depende de exemplo pronto ou de alguém para destravar.</p></div>
      <div class="card hov"><div class="tag b" style="margin-bottom:10px">degrau 3</div><h3>Autônomo</h3><p style="font-size:13.5px;color:var(--tx-2);margin-top:8px">Resolve sozinho e reconhece quando a resposta não serve.</p></div>
      <div class="card hov"><div class="tag y" style="margin-bottom:10px">degrau 4</div><h3>Construtor</h3><p style="font-size:13.5px;color:var(--tx-2);margin-top:8px">O que faz com IA serve a outras pessoas: criou algo que o time usa, ou ensina.</p></div>
    </div>
  </div>
</section>

<section class="sec plain">
  <div class="wrap">
    <span class="sk">Limites declarados</span>
    <h2 style="margin-top:14px">O que a plataforma faz — e o que não faz</h2>
    <div class="grid g2" style="margin-top:26px;gap:40px">
      <div>
        <h3 style="margin-bottom:8px">Faz</h3>
        <div class="lim ok"><span class="x">✓</span><p>Estima prontidão por dimensão, sempre mostrando as respostas que sustentam a estimativa.</p></div>
        <div class="lim ok"><span class="x">✓</span><p>Separa <b>autoavaliação</b> de <b>evidência validada</b> — os dois estados aparecem distintos no painel.</p></div>
        <div class="lim ok"><span class="x">✓</span><p>Recomenda apenas cursos existentes no catálogo autorizado, com título, duração e link.</p></div>
        <div class="lim ok"><span class="x">✓</span><p>Marca como <b>pendente de validação</b> o que não tiver base suficiente, com a próxima ação necessária.</p></div>
      </div>
      <div>
        <h3 style="margin-bottom:8px">Não faz</h3>
        <div class="lim"><span class="x">×</span><p>Não toma decisão de desempenho, promoção ou movimentação de pessoas.</p></div>
        <div class="lim"><span class="x">×</span><p>Não matricula ninguém em curso nem dispara comunicação externa sem autorização.</p></div>
        <div class="lim"><span class="x">×</span><p>Não certifica domínio com base apenas em respostas ao questionário.</p></div>
        <div class="lim"><span class="x">×</span><p>Não registra nem compartilha PDI sem aprovação explícita de um responsável.</p></div>
      </div>
    </div>
    <div class="note y" style="margin-top:30px"><b>Conclusão de curso não eleva nível automaticamente.</b> A evolução de competência precisa de evidência prática avaliada por um responsável humano — é isso que separa um plano de uma lista de desejos.</div>
  </div>
</section>

<section class="sec" style="border-bottom:0">
  <div class="wrap">
    <div class="cta-end">
      <h2>Comece pelo diagnóstico</h2>
      <p>São cerca de 10 minutos. Você pode salvar e retomar depois — nenhuma resposta se perde. Ao final, descreva onde precisa chegar em 12 meses e receba a proposta de PDI para revisar.</p>
      <div class="row">
        <a class="btn btn-yellow" href="{{ '/bbts/assessment/' | relative_url }}">Iniciar assessment →</a>
        <a class="btn btn-line" href="{{ '/bbts/painel/' | relative_url }}" style="background:transparent;color:#fff;border-color:rgba(255,255,255,.35)">Ver painel da GEPES</a>
      </div>
    </div>
  </div>
</section>
