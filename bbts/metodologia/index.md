---
title: "Metodologia"
description: "Como a prontidão é medida, como o objetivo vira capacidades-alvo e como o fluxo de agentes monta o PDI, com os limites declarados de cada etapa."
---

<style>
  .mt-top{background:var(--paper);border-bottom:1px solid var(--line);padding:38px 0 0}
  .mt-top h1{font-size:clamp(28px,4vw,40px);letter-spacing:-.025em;margin-top:12px;max-width:21ch}
  .mt-top .lede{margin-top:18px;max-width:68ch;padding-bottom:38px}

  .sec{padding:46px 0}
  .sec+.sec{border-top:1px solid var(--line)}
  .sec>.wrap>.sk{font-family:var(--mono);font-size:10.5px;letter-spacing:.14em;text-transform:uppercase;color:var(--blue)}
  .sec h2{font-family:var(--disp);font-weight:700;font-size:clamp(21px,2.7vw,27px);color:var(--ink);
    letter-spacing:-.02em;margin-top:12px}
  .sec>.wrap>p.d{color:var(--tx);font-size:15.5px;line-height:1.65;margin-top:12px;max-width:74ch}

  /* dimensões do instrumento — as quatro que somam o índice vêm num
     painel próprio; a de percepção fica visivelmente apartada */
  .grupo{margin-top:30px;background:var(--panel);border:1px solid var(--line-2);
    border-radius:18px;padding:20px}
  .grupo-h{display:flex;align-items:baseline;justify-content:space-between;gap:14px;
    flex-wrap:wrap;padding:2px 4px 16px}
  .grupo-h .gl{font-family:var(--disp);font-weight:600;font-size:15px;color:var(--ink)}
  .grupo-h .gp{font-family:var(--mono);font-size:11px;letter-spacing:.08em;color:var(--blue-700);
    background:var(--blue-100);border-radius:999px;padding:5px 12px}
  .dims{display:grid;grid-template-columns:repeat(4,1fr);gap:12px}
  @media(max-width:1000px){ .dims{grid-template-columns:repeat(2,1fr)} }
  @media(max-width:560px){ .dims{grid-template-columns:1fr} }

  .apart{margin-top:14px;display:grid;grid-template-columns:auto 1fr;gap:20px;align-items:start;
    background:var(--paper);border:1px dashed var(--line-2);border-radius:14px;padding:20px 22px}
  @media(max-width:620px){ .apart{grid-template-columns:1fr;gap:12px} }
  .apart .lado{display:flex;align-items:center;gap:10px}
  .apart .L{width:28px;height:28px;border-radius:8px;background:var(--panel-2);color:var(--tx-2);
    display:grid;place-items:center;font-family:var(--disp);font-weight:700;font-size:13px}
  .apart h3{font-family:var(--disp);font-weight:600;font-size:16px;color:var(--ink-2);white-space:nowrap}
  .apart .corpo p{font-size:13.5px;color:var(--tx-2);line-height:1.55}
  .apart .fora-tag{display:inline-block;font-family:var(--mono);font-size:9.5px;letter-spacing:.12em;
    text-transform:uppercase;color:var(--warn);background:var(--warn-s);border-radius:999px;
    padding:4px 10px;margin-bottom:9px}
  .apart .q{font-family:var(--mono);font-size:11.5px;color:var(--tx-3);margin-top:11px;
    padding-top:10px;border-top:1px solid var(--line)}
  .apart .q b{color:var(--blue);font-weight:600}
  .dim{background:var(--paper);border:1px solid var(--line);border-radius:14px;padding:20px;position:relative;overflow:hidden}
  .dim::before{content:"";position:absolute;left:0;top:0;bottom:0;width:3px;background:var(--blue)}
  .dim .l{display:flex;align-items:center;gap:10px}
  .dim .L{width:28px;height:28px;border-radius:8px;background:var(--blue-100);color:var(--blue-700);
    display:grid;place-items:center;font-family:var(--disp);font-weight:700;font-size:13px}
  .dim h3{font-family:var(--disp);font-weight:600;font-size:16px;color:var(--ink)}
  .dim .pts{font-family:var(--mono);font-size:10.5px;letter-spacing:.07em;color:var(--tx-3);margin-top:9px}
  .dim p{font-size:13.5px;color:var(--tx-2);line-height:1.5;margin-top:10px}
  .dim ul{list-style:none;margin-top:13px;padding-top:12px;border-top:1px solid var(--line);display:grid;gap:5px}
  .dim li{font-size:12.5px;color:var(--tx);display:grid;grid-template-columns:30px 1fr;gap:7px}
  .dim li b{font-family:var(--mono);font-size:10.5px;color:var(--blue);font-weight:600}

  /* fórmula */
  .form{background:var(--blue-900);border-radius:16px;padding:26px 28px;margin-top:28px;color:var(--blue-100)}
  .form .t{font-family:var(--mono);font-size:10px;letter-spacing:.14em;text-transform:uppercase;color:var(--blue-300)}
  .form .eq{font-family:var(--mono);font-size:clamp(13px,1.9vw,16.5px);color:#fff;margin-top:14px;line-height:1.9}
  .form .eq em{font-style:normal;color:var(--yellow)}
  .form .n{font-size:13px;line-height:1.6;color:var(--blue-300);margin-top:16px;padding-top:15px;
    border-top:1px solid rgba(91,138,230,.25);max-width:72ch}
  .form .n b{color:#fff;font-weight:600}

  /* perfis */
  .perf{display:grid;gap:9px;margin-top:28px}
  .perf .p{display:grid;grid-template-columns:70px 180px 1fr;gap:18px;align-items:center;
    background:var(--paper);border:1px solid var(--line);border-radius:12px;padding:15px 18px}
  .perf .fx{font-family:var(--mono);font-size:12px;color:var(--blue);font-weight:600}
  .perf .nm{font-family:var(--disp);font-weight:600;font-size:15.5px;color:var(--ink)}
  .perf .ds{font-size:13.5px;color:var(--tx-2);line-height:1.5}
  @media(max-width:720px){.perf .p{grid-template-columns:62px 1fr;gap:10px}.perf .ds{grid-column:1/-1}}

  /* diagrama */
  .dgm{margin-top:30px;background:var(--paper);border:1px solid var(--line);border-radius:16px;padding:10px}
  .dgm-s{overflow-x:auto;-webkit-overflow-scrolling:touch}
  .dgm svg{display:block;width:100%;min-width:720px;height:auto}
  .dgm-h{display:none;font-family:var(--mono);font-size:10.5px;letter-spacing:.07em;color:var(--tx-3);
    padding:8px 12px 2px;text-align:center}
  @media(max-width:760px){.dgm-h{display:block}}

  /* agentes */
  .ags{display:grid;grid-template-columns:repeat(auto-fit,minmax(248px,1fr));gap:14px;margin-top:28px}
  .ag{background:var(--paper);border:1px solid var(--line);border-radius:14px;padding:21px}
  .ag .role{font-family:var(--mono);font-size:9.5px;letter-spacing:.13em;text-transform:uppercase;
    color:var(--blue);background:var(--blue-100);display:inline-block;padding:4px 9px;border-radius:999px}
  .ag h3{font-family:var(--disp);font-weight:600;font-size:16.5px;color:var(--ink);margin-top:13px}
  .ag p{font-size:13.5px;color:var(--tx-2);line-height:1.55;margin-top:9px}
  .ag .io{margin-top:14px;padding-top:12px;border-top:1px solid var(--line);display:grid;gap:7px}
  .ag .io div{display:grid;grid-template-columns:52px 1fr;gap:9px;font-size:12.5px;color:var(--tx)}
  .ag .io span{font-family:var(--mono);font-size:9.5px;letter-spacing:.09em;text-transform:uppercase;
    color:var(--tx-3);padding-top:2px}

  /* limites */
  .lims{display:grid;grid-template-columns:1fr 1fr;gap:26px;margin-top:28px}
  @media(max-width:820px){.lims{grid-template-columns:1fr}}
  .lim-c h3{font-family:var(--disp);font-weight:600;font-size:16px;color:var(--ink);margin-bottom:14px;
    display:flex;align-items:center;gap:9px}
  .lim-c h3 i{width:21px;height:21px;border-radius:50%;display:grid;place-items:center;font-style:normal;
    font-size:12px;font-weight:700}
  .lim-c.faz h3 i{background:var(--ok);color:#fff}
  .lim-c.nao h3 i{background:var(--panel-2);color:var(--tx-2)}
  .lim-c ul{list-style:none;display:grid;gap:8px}
  .lim-c li{background:var(--paper);border:1px solid var(--line);border-radius:10px;padding:13px 15px;
    font-size:13.5px;color:var(--tx);line-height:1.5}
  .lim-c.faz li{border-left:3px solid var(--ok)}
  .lim-c.nao li{border-left:3px solid var(--line-2)}

  .nota{font-family:var(--mono);font-size:11.5px;line-height:1.75;color:var(--tx-2);
    background:var(--canvas);border:1px solid var(--line);border-left:3px solid var(--yellow-600);
    border-radius:0 11px 11px 0;padding:17px 19px;margin-top:26px}
  .nota b{color:var(--ink)}
  .nota+.nota{margin-top:11px}

  .cta-m{background:var(--blue-900);border-radius:18px;padding:36px;margin-top:46px;text-align:center}
  .cta-m h2{color:#fff;font-family:var(--disp);font-weight:700;font-size:23px;letter-spacing:-.02em}
  .cta-m p{color:var(--blue-300);font-size:14.5px;margin:11px auto 24px;max-width:52ch;line-height:1.6}
  .cta-m a{display:inline-block;background:var(--yellow);color:var(--blue-900);font-weight:700;
    text-decoration:none;padding:14px 28px;border-radius:999px;font-size:15px}
  .cta-m a:hover{background:#fff}
</style>

<div class="mt-top">
  <div class="wrap">
    <span class="sk">Metodologia</span>
    <h1>O que é medido, como o plano é montado e onde a decisão é humana</h1>
    <p class="lede">Esta página descreve o instrumento, o fluxo de agentes por trás da avaliação e os
      limites declarados de cada etapa. A intenção é que qualquer coisa apresentada no diagnóstico
      possa ser rastreada até a resposta que a originou.</p>
  </div>
</div>

<section class="sec">
  <div class="wrap">
    <span class="sk">01 · O instrumento</span>
    <h2>Quatro dimensões de prontidão, mais uma de percepção</h2>
    <p class="d">Cada pergunta tem quatro alternativas, que valem de 1 a 4 pontos. Não existe alternativa
      neutra: a escada é de progressão, e escolher a primeira é uma resposta legítima, não um erro.
      Quem não sabe responder marca <b>“não sei”</b> ou <b>“não se aplica”</b> — e essas respostas
      <b>não viram zero</b>. Ficam registradas como pendência, para serem conversadas com o gestor.</p>

    <div class="grupo">
      <div class="grupo-h">
        <span class="gl">As quatro dimensões somam o índice de prontidão</span>
        <span class="gp">12 a 48 pontos</span>
      </div>
      <div class="dims">
      <div class="dim">
        <div class="l"><span class="L">A</span><h3>Uso atual</h3></div>
        <div class="pts">3 perguntas · 3 a 12 pontos</div>
        <p>O hábito. O que a pessoa já faz com IA hoje.</p>
        <ul>
          <li><b>P1</b>Frequência de uso</li>
          <li><b>P2</b>Para que usa</li>
          <li><b>P3</b>Autonomia</li>
        </ul>
      </div>
      <div class="dim">
        <div class="l"><span class="L">B</span><h3>Base técnica</h3></div>
        <div class="pts">4 perguntas · 4 a 16 pontos</div>
        <p>O ponto de partida que uma formação aplicada exige.</p>
        <ul>
          <li><b>P4</b>Automação</li>
          <li><b>P5</b>Dados</li>
          <li><b>P6</b>Ferramentas sem programação</li>
          <li><b>P7</b>Conceitos técnicos</li>
        </ul>
      </div>
      <div class="dim">
        <div class="l"><span class="L">C</span><h3>Influência</h3></div>
        <div class="pts">2 perguntas · 2 a 8 pontos</div>
        <p>Capacidade de levar o aprendizado para a área.</p>
        <ul>
          <li><b>P8</b>Procurado por outros</li>
          <li><b>P9</b>Compartilha e ensina</li>
        </ul>
      </div>
      <div class="dim">
        <div class="l"><span class="L">D</span><h3>Contexto de trabalho</h3></div>
        <div class="pts">3 perguntas · 3 a 12 pontos</div>
        <p>O que o ambiente permite: recurso, permissão e tempo.</p>
        <ul>
          <li><b>P10</b>Ferramenta disponível</li>
          <li><b>P11</b>Ambiente da área</li>
          <li><b>P12</b>Espaço na rotina</li>
        </ul>
      </div>
      </div>
    </div>

    <div class="grupo" style="margin-top:22px">
      <div class="grupo-h">
        <span class="gl">Bloco técnico — um segundo eixo, não parte do índice</span>
        <span class="gp">0 a 20 pontos</span>
      </div>
      <p class="d" style="margin:0 0 16px">Sete perguntas sobre o que a pessoa já faz na prática,
        de 0 a 4 pontos cada, lidas em <b>seis dimensões</b>. A escala é própria e <b>não soma no
        índice de prontidão</b>: o v6 é calibrado em 12–48 com perguntas de 1 a 4, e misturar
        escalas quebraria a comparação. O zero existe porque “ainda não sei fazer” é resposta
        legítima, diferente de fazer de forma rudimentar.</p>
      <p class="d" style="margin:0 0 16px">Cada dimensão é a <b>média ponderada</b> das perguntas
        que a alimentam, então nenhuma depende de uma pergunta só. Programação e MLOps não são
        dimensão: a pergunta de construção técnica funciona como multiplicador, porque quem
        constrói aprofunda dados, ancoragem e automação. E o alvo de cada dimensão vem do
        objetivo declarado — quem é de negócio não carrega dívida por não programar.</p>
      <div class="dims" style="grid-template-columns:repeat(4,1fr)">
        <div class="dim"><div class="l"><span class="L">T1</span><h3 style="font-size:14.5px">Solicitações</h3></div>
          <p>Do pedido genérico à instrução reutilizável e testada.</p></div>
        <div class="dim"><div class="l"><span class="L">T2</span><h3 style="font-size:14.5px">Verificação</h3></div>
          <p>De “parece certo” a testar onde a IA tende a falhar.</p></div>
        <div class="dim"><div class="l"><span class="L">T3</span><h3 style="font-size:14.5px">Dados</h3></div>
          <p>De enviar como está a um processo de preparo reutilizável.</p></div>
        <div class="dim"><div class="l"><span class="L">T4</span><h3 style="font-size:14.5px">Documentos</h3></div>
          <p>De colar trecho a base de conhecimento com permissão.</p></div>
        <div class="dim"><div class="l"><span class="L">T5</span><h3 style="font-size:14.5px">Automação</h3></div>
          <p>Do passo manual ao fluxo com agentes e aprovação.</p></div>
        <div class="dim"><div class="l"><span class="L">T6</span><h3 style="font-size:14.5px">Construção</h3></div>
          <p>De não programar a entregar componente mantido por outros.</p></div>
        <div class="dim"><div class="l"><span class="L">T7</span><h3 style="font-size:14.5px">Segurança</h3></div>
          <p>De não saber o que pode a definir critério para a área.</p></div>
      </div>
      <div class="nota" style="margin-top:16px"><b>É este eixo que mais orienta a escolha de curso.</b>
        As perguntas de prontidão descrevem percepção e hábito; estas descrevem execução verificável,
        e por isso apontam para temas mais estreitos do catálogo. A orientação de resposta é
        deliberada: <b>o nível mais alto que se realiza de forma consistente</b>, não o que já se
        tentou uma vez.</div>
    </div>

    <div class="apart">
      <div class="lado"><span class="L">E</span><h3>Retorno percebido</h3></div>
      <div class="corpo">
        <span class="fora-tag">não entra no índice</span>
        <p>Uma pergunta sobre quanto tempo a pessoa acha que economiza usando IA. É a única
           estimativa de ganho que sai do próprio respondente — e por ser percepção, não medição,
           fica deliberadamente fora da pontuação. Serve para conversa, não para cálculo.</p>
        <div class="q"><b>P13</b> · Tempo economizado</div>
      </div>
    </div>

  </div>
</section>

<section class="sec">
  <div class="wrap">
    <span class="sk">02 · Perfil</span>
    <h2>O perfil vem de duas perguntas, não do índice</h2>
    <p class="d">O perfil descreve <b>como</b> a pessoa usa IA, e isso não é a mesma coisa que o quanto
      ela pontua no total. Alguém pode ter base técnica alta e ainda usar IA de forma dependente.
      Ele sai de P2 (para que usa) e P3 (autonomia), e a regra é o <b>menor dos dois</b>,
      não a soma. Somar achatava informação: quem criou algo que o time usa mas ainda depende de
      exemplo recebia o mesmo rótulo de quem é consistente nas duas pontas. O elo mais fraco define
      o degrau, e quando a outra ponta está acima a tela avisa que a pessoa está a caminho do
      degrau seguinte.
      A frequência de uso, P1, fica deliberadamente de fora: usar todo dia não diz nada sobre o que
      se faz nem sobre conseguir avaliar a resposta.</p>

    <h3 style="font-family:var(--disp);font-weight:600;font-size:16px;color:var(--ink);margin:26px 0 8px">
      O degrau 3 precisa de lastro na prática</h3>
    <p class="d">P2 e P3 são percepção. O degrau 3 afirma duas coisas verificáveis — <i>uso IA para
      fazer meu trabalho</i> e <i>percebo quando a resposta não está boa</i> — e o bloco técnico
      pergunta exatamente isso pela prática. Quando as duas leituras discordam, a prática decide:
      <b>autonomia exige T1 ≥ 2 e T2 ≥ 2</b>, e quem não tem esse lastro fica no degrau 2.</p>
    <div class="form">
      <div class="t">Por que esses dois níveis</div>
      <div class="eq">
        T1 nível 1 &nbsp;=&nbsp; <em>“pedidos simples e genéricos”</em><br>
        T2 nível 1 &nbsp;=&nbsp; <em>“avalio se a resposta parece fazer sentido”</em>
      </div>
      <div class="n">Pedido genérico não é fazer o próprio trabalho com IA, e achar que a resposta
        <b>parece</b> fazer sentido é o oposto de reconhecer que ela não serve — é a ilusão de
        verificação. A porta não inventa um critério novo: cobra o comportamento que o próprio
        degrau 3 descreve. Quem não respondeu o bloco técnico mantém o degrau declarado, porque sem
        dado não há o que confirmar, e rebaixar por ausência seria pior que aceitar.</div>
    </div>

    <div class="perf">
      <div class="p"><span class="fx">degrau 1</span><span class="nm">Iniciante</span>
        <span class="ds">Não usa IA no trabalho, ou usa sem conseguir avaliar o resultado.</span></div>
      <div class="p"><span class="fx">degrau 2</span><span class="nm">Praticante</span>
        <span class="ds">Usa no próprio trabalho, mas depende de exemplo pronto ou de alguém para destravar.</span></div>
      <div class="p"><span class="fx">degrau 3</span><span class="nm">Autônomo</span>
        <span class="ds">Resolve sozinho e reconhece quando a resposta não serve.</span></div>
      <div class="p"><span class="fx">degrau 4</span><span class="nm">Construtor</span>
        <span class="ds">O que faz com IA serve a outras pessoas: criou algo que o time usa, ou ensina.</span></div>
    </div>
  </div>
</section>

<section class="sec">
  <div class="wrap">
    <span class="sk">03 · Do objetivo às capacidades-alvo</span>
    <h2>O texto que você escreve vira nível-alvo por competência</h2>
    <p class="d">O objetivo de 12 meses é escrito em texto livre, e é a etapa mais humana do assessment.
      A partir dele e do grau de autonomia declarado, o sistema deriva um <b>nível-alvo para cada uma
      das 12 competências</b> — e a diferença entre o nível atual e o alvo é a lacuna que o plano
      precisa fechar. Três sinais no texto ajustam esses alvos para cima: menção a
      <b>agente e automação</b> eleva P4, P6 e P7; menção a <b>dado e análise</b> eleva P5; menção a
      <b>ensinar e multiplicar</b> mantém a dimensão de influência em vez de rebaixá-la.</p>
    <p class="d">O alvo de contexto é limitado a 3 de 4 por regra: o quarto nível depende de decisão
      institucional, não do esforço de quem responde. E nada disso é aplicado silenciosamente — a
      interpretação aparece na tela de resultado para você <b>confirmar ou corrigir</b> antes de
      virar plano.</p>
  </div>
</section>

<section class="sec">
  <div class="wrap">
    <span class="sk">04 · O fluxo</span>
    <h2>Como os agentes trabalham por trás da avaliação</h2>
    <p class="d">Nenhum agente decide sozinho e nenhum deles tem a última palavra. O fluxo é
      determinístico onde precisa ser auditável, e assistido por IA onde há julgamento. O desenho
      abaixo mostra o caminho completo, incluindo o que acontece quando a verificação encontra erro.</p>

    <div class="dgm">
      <div class="dgm-h">arraste para o lado para ver o fluxo completo →</div>
      <div class="dgm-s">
        <svg viewBox="0 0 820 1210" role="img" aria-labelledby="dgm-t dgm-d" xmlns="http://www.w3.org/2000/svg">
          <title id="dgm-t">Fluxo de orquestração dos agentes</title>
          <desc id="dgm-d">O pedido do usuário é normalizado e passa por uma política. Se não houver
            diagnóstico válido, o Agente de Diagnóstico é acionado. Em seguida o Agente de Curadoria
            propõe ações, que passam por verificação de limites e pelo Agente de Governança. Se a
            governança encontra erros corrigíveis na primeira vez, a curadoria é revisada com feedback
            e volta à verificação. Caso contrário, os PDIs são separados entre aptos e pendentes, os
            aptos vão para aprovação humana, e só os aprovados são registrados.</desc>

          <defs>
            <marker id="ar" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
              <path d="M0,0 L10,5 L0,10 z" fill="var(--line-2)"/>
            </marker>
            <style>
              .bx{fill:var(--panel);stroke:var(--line-2);stroke-width:1.5}
              .bx-ag{fill:var(--blue-100);stroke:var(--blue-300);stroke-width:1.5}
              .bx-hu{fill:var(--yellow-soft);stroke:var(--yellow-600);stroke-width:1.5}
              .bx-dc{fill:var(--paper);stroke:var(--blue-300);stroke-width:1.5;stroke-dasharray:5 4}
              .tx{font-family:var(--sans);font-size:13.5px;font-weight:600;fill:var(--ink);text-anchor:middle}
              .tx-ag{fill:var(--blue-700)}
              .cap{font-family:var(--mono);font-size:9.5px;letter-spacing:.1em;fill:var(--tx-3);text-anchor:middle}
              .ln{stroke:var(--line-2);stroke-width:1.5;fill:none}
              .lb{font-family:var(--mono);font-size:10px;fill:var(--tx-2);text-anchor:middle}
              .lbb{fill:var(--paper);stroke:var(--line-2);stroke-width:1}
            </style>
          </defs>

          <!-- entrada -->
          <rect class="bx" x="270" y="20" width="220" height="56" rx="12"/>
          <text class="tx" x="380" y="53">Pedido do colaborador</text>
          <path class="ln" d="M380,76 L380,118" marker-end="url(#ar)"/>

          <!-- normalizar -->
          <rect class="bx" x="270" y="120" width="220" height="56" rx="12"/>
          <text class="tx" x="380" y="143">Normalizar contexto</text>
          <text class="tx" x="380" y="162">e aplicar política</text>
          <path class="ln" d="M380,176 L380,224" marker-end="url(#ar)"/>

          <!-- decisão 1 -->
          <rect class="bx-dc" x="270" y="226" width="220" height="56" rx="12"/>
          <text class="tx" x="380" y="249">Diagnóstico válido</text>
          <text class="tx" x="380" y="268">já disponível?</text>

          <!-- não → diagnóstico -->
          <path class="ln" d="M270,254 L130,254 L130,340" marker-end="url(#ar)"/>
          <rect class="lbb" x="168" y="243" width="40" height="21" rx="10"/>
          <text class="lb" x="188" y="257">não</text>

          <rect class="bx-ag" x="20" y="342" width="220" height="56" rx="12"/>
          <text class="tx tx-ag" x="130" y="375">Agente de Diagnóstico</text>
          <path class="ln" d="M130,398 L130,428 L380,428 L380,448" marker-end="url(#ar)"/>

          <!-- sim → direto pra curadoria -->
          <path class="ln" d="M490,254 L560,254 L560,428 L392,428" marker-end="url(#ar)"/>
          <rect class="lbb" x="534" y="243" width="38" height="21" rx="10"/>
          <text class="lb" x="553" y="257">sim</text>

          <!-- curadoria -->
          <rect class="bx-ag" x="270" y="450" width="220" height="56" rx="12"/>
          <text class="tx tx-ag" x="380" y="483">Agente de Curadoria</text>
          <path class="ln" d="M380,506 L380,548" marker-end="url(#ar)"/>

          <!-- verificação de limites -->
          <rect class="bx" x="270" y="550" width="220" height="56" rx="12"/>
          <text class="tx" x="380" y="583">Verificação de limites</text>
          <path class="ln" d="M380,606 L380,648" marker-end="url(#ar)"/>

          <!-- revisão com feedback (volta pra verificação) -->
          <rect class="bx" x="570" y="550" width="220" height="56" rx="12"/>
          <text class="tx" x="680" y="573">Revisar curadoria</text>
          <text class="tx" x="680" y="592">com feedback</text>
          <path class="ln" d="M570,578 L502,578" marker-end="url(#ar)"/>

          <!-- governança -->
          <rect class="bx-ag" x="270" y="650" width="220" height="56" rx="12"/>
          <text class="tx tx-ag" x="380" y="683">Agente de Governança</text>
          <path class="ln" d="M380,706 L380,748" marker-end="url(#ar)"/>

          <!-- decisão 2 -->
          <rect class="bx-dc" x="270" y="750" width="220" height="56" rx="12"/>
          <text class="tx" x="380" y="783">Erros corrigíveis?</text>

          <!-- sim, primeira vez → revisar -->
          <path class="ln" d="M490,778 L680,778 L680,618" marker-end="url(#ar)"/>
          <rect class="lbb" x="520" y="767" width="112" height="21" rx="10"/>
          <text class="lb" x="576" y="781">sim, primeira vez</text>

          <!-- não / já tentada → separar -->
          <path class="ln" d="M380,806 L380,868" marker-end="url(#ar)"/>
          <rect class="lbb" x="268" y="826" width="224" height="21" rx="10"/>
          <text class="lb" x="380" y="840">não — ou correção já tentada</text>

          <rect class="bx" x="270" y="870" width="220" height="56" rx="12"/>
          <text class="tx" x="380" y="893">Separar PDIs</text>
          <text class="tx" x="380" y="912">aptos e pendentes</text>
          <path class="ln" d="M380,926 L380,968" marker-end="url(#ar)"/>

          <!-- aprovação humana -->
          <rect class="bx-hu" x="270" y="970" width="220" height="62" rx="12"/>
          <text class="cap" x="380" y="993">ETAPA HUMANA</text>
          <text class="tx" x="380" y="1016">Aprovação dos PDIs aptos</text>
          <path class="ln" d="M380,1032 L380,1074" marker-end="url(#ar)"/>

          <!-- registro -->
          <rect class="bx" x="270" y="1076" width="220" height="56" rx="12"/>
          <text class="tx" x="380" y="1109">Registrar só os aprovados</text>
        </svg>
      </div>
    </div>

    <div class="ags">
      <div class="ag">
        <span class="role">Leitura</span>
        <h3>Agente de Diagnóstico</h3>
        <p>Lê as respostas fechadas e os textos abertos e descreve o estado atual por dimensão, sempre
           apontando qual resposta sustenta cada afirmação. Não inventa nível para o que ficou marcado
           como “não sei”.</p>
        <div class="io">
          <div><span>entra</span>Respostas P1–P16 e o objetivo de 12 meses</div>
          <div><span>sai</span>Estado por dimensão, com as evidências e as pendências</div>
        </div>
      </div>
      <div class="ag">
        <span class="role">Seleção</span>
        <h3>Agente de Curadoria</h3>
        <p>Converte cada lacuna nos macro-temas que a desenvolvem, busca no catálogo autorizado e
           ordena por aderência ao nível atual e ao perfil-alvo. Propõe também a aplicação prática —
           porque curso concluído não é competência demonstrada.</p>
        <div class="io">
          <div><span>entra</span>Lacunas por competência e dedicação semanal declarada</div>
          <div><span>sai</span>Cursos reais e atividade prática, distribuídos em quatro ciclos</div>
        </div>
      </div>
      <div class="ag">
        <span class="role">Verificação</span>
        <h3>Agente de Governança</h3>
        <p>Confere o plano contra as regras antes de ele chegar a qualquer pessoa: se os cursos existem
           no catálogo, se a carga cabe na dedicação declarada, se o teto institucional foi respeitado
           e se cada ação se liga a uma lacuna identificada.</p>
        <div class="io">
          <div><span>entra</span>Plano proposto e as regras do ciclo</div>
          <div><span>sai</span>Aprovação técnica, ou devolução com o erro nomeado</div>
        </div>
      </div>
      <div class="ag">
        <span class="role">Orquestração</span>
        <h3>Orquestrador</h3>
        <p>Controla a sequência, decide se o diagnóstico precisa ser refeito, concede exatamente uma
           rodada de correção à curadoria e separa o que está apto do que ficou pendente. Não produz
           conteúdo: só coordena e registra.</p>
        <div class="io">
          <div><span>entra</span>Estado do fluxo e resultado de cada etapa</div>
          <div><span>sai</span>Fila para revisão humana, com o histórico de cada decisão</div>
        </div>
      </div>
    </div>

    <div class="nota"><b>Por que apenas uma rodada de correção.</b> Deixar o ciclo de revisão aberto faz
      o sistema insistir até passar, o que troca qualidade por teimosia e torna o custo imprevisível.
      Com uma tentativa só, o que não fecha vira pendência explícita para uma pessoa olhar — que é o
      comportamento desejado quando a máquina não consegue resolver.</div>
  </div>
</section>

<section class="sec">
  <div class="wrap">
    <span class="sk">05 · O plano de 12 meses</span>
    <h2>O plano tem o tamanho da lacuna, não o da agenda</h2>
    <p class="d">O horizonte é de 12 meses, dividido em quatro ciclos de 90 dias. O plano é montado por
      <b>cobertura</b>: cada lacuna apontada no diagnóstico precisa de um curso que a desenvolva, e o
      plano termina quando a última é coberta. A dedicação declarada limita o <b>ritmo</b> de cada
      ciclo — não define o tamanho do plano.</p>

    <div class="form">
      <div class="t">Ritmo máximo por ciclo</div>
      <div class="eq">
        capacidade &nbsp;=&nbsp; horas por semana &nbsp;×&nbsp; 12 semanas &nbsp;×&nbsp; <em>0,75</em><br>
        teto institucional &nbsp;=&nbsp; <em>32 horas</em> e <em>3 cursos</em> por ciclo
      </div>
      <div class="n">O fator de <b>0,75</b> é folga deliberada: férias, picos de demanda e o tempo da
        atividade prática, que não é tempo de curso. Sem ele, o plano fica lotado no papel e
        impossível na rotina. O <b>teto</b> existe para que dedicação alta não vire plano irreal —
        quem declara 10 horas por semana recebe o mesmo volume de quem declara 5. É normal um ciclo
        usar bem menos que o disponível: o espaço que sobra é onde a prática acontece.</div>
    </div>

    <p class="d" style="margin-top:26px">A seleção percorre os cursos aderentes em ordem de peso da
      lacuna e <b>só aceita um curso que ainda traga competência descoberta</b>. Um mesmo curso costuma
      cobrir mais de uma, então o plano fecha com menos cursos do que lacunas. Peças de menos de 6
      horas — flash skills, checkpoints, cursos-texto — são tratadas como complemento e só entram
      quando não há nada mais substancial para aquela competência. Os cursos escolhidos se distribuem
      em ritmo parelho entre os quatro ciclos, e cada ciclo fecha com uma evidência esperada e uma data
      de revisão — nenhuma delas é “certificado emitido”.</p>

    <div class="nota"><b>Quem responde sempre recebe um plano.</b> Duas regras garantem isso.
      Se o objetivo declarado já estiver coberto pelo nível atual, o alvo sobe um degrau nas
      competências onde ainda há espaço, e a pessoa é avisada de que descreveu um objetivo aquém
      do que já faz. E o primeiro curso de cada ciclo entra mesmo que estoure a capacidade declarada,
      marcado como ritmo apertado — a capacidade é estimativa de ritmo, não limite rígido. Plano vazio não ajuda ninguém e devolve para a
      pessoa um problema que é do sistema.</div>
  </div>
</section>

<section class="sec">
  <div class="wrap">
    <span class="sk">06 · Limites</span>
    <h2>O que o sistema faz, e o que ele não faz</h2>
    <p class="d">Declarar o limite é parte da metodologia. Um sistema de desenvolvimento que não diz
      onde para acaba sendo usado para decisões que ele não sustenta.</p>

    <div class="lims">
      <div class="lim-c faz">
        <h3><i>✓</i>Faz</h3>
        <ul>
          <li>Estima prontidão a partir de autoavaliação estruturada, mostrando a resposta por trás de cada número.</li>
          <li>Recomenda apenas cursos existentes no catálogo autorizado, com título, carga e link.</li>
          <li>Dimensiona o plano pela dedicação que a pessoa declarou ter.</li>
          <li>Separa o que depende de formação do que depende do ambiente de trabalho.</li>
          <li>Registra pendências em vez de preencher lacuna com suposição.</li>
        </ul>
      </div>
      <div class="lim-c nao">
        <h3><i>✕</i>Não faz</h3>
        <ul>
          <li>Não avalia desempenho, não pontua pessoas entre si e não alimenta decisão de carreira.</li>
          <li>Não valida competência: autoavaliação é ponto de partida, não evidência.</li>
          <li>Não aprova PDI. Toda proposta depende de decisão humana explícita.</li>
          <li>Não resolve contexto. Ferramenta, permissão e agenda são acordo com o gestor.</li>
          <li>Não considera curso concluído como nível alcançado.</li>
        </ul>
      </div>
    </div>

    <div class="nota"><b>Carga horária real.</b> As horas de cada curso vêm da própria página dele no
      catálogo da Alura — 711 dos 717. Seis cursos têm a página restrita a quem já tem matrícula e
      usam a mediana do catálogo (8h). A carga vai de 1h a 20h e define quantos cursos cabem por
      ciclo, não quais são recomendados.</div>

    <div class="nota"><b>Tudo é autodeclarado.</b> O índice mede o que a pessoa diz sobre si, não o que
      ela demonstrou. Serve para orientar conversa e desenho de plano — não para comparar pessoas nem
      para compor avaliação funcional. O painel agregado existe para ler o grupo, e por isso mostra
      distribuição e média, nunca ranking.</div>

    <div class="cta-m">
      <h2>Responder leva cerca de 10 minutos</h2>
      <p>Vinte perguntas fechadas, três abertas e o seu objetivo de 12 meses. No fim, o diagnóstico e
         a proposta de PDI aparecem na hora.</p>
      <a href="{{ '/bbts/assessment/' | relative_url }}">Iniciar assessment →</a>
    </div>
  </div>
</section>
