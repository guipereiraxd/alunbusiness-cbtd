---
title: "ReCode Tech"
description: "A IA mudou a capacidade de desenvolver software. O ReCode Tech diagnostica e redesenha o sistema de engenharia — pessoas, agentes, fluxo e confiabilidade — em três movimentos com entregável declarado."
---

<style>
  /* ── manchete da capa ─────────────────────────────────────────
     Duas frases: a constatação e a tese. A segunda vai no dourado
     e em bloco próprio, que é o gesto da casa para marcar a virada.
     A medida sobe de 18ch para 26ch porque com 18 a manchete caía
     em seis linhas e o hero virava uma parede. */
  .cap h1{max-width:26ch;font-size:clamp(29px,4vw,42px)}
  .cap h1 .realce{display:block}
  .cap .sub.forte{max-width:58ch;margin-top:17px;color:#E8E9EC;font-weight:500;
    padding-left:17px;border-left:2px solid var(--ouro)}

  /* ── a cadeia, no pe do hero ──────────────────────────────────
     Os mesmos tres elos da metodologia — Capability, Work, Business
     Value — ditos em linguagem de quem lidera engenharia. Fica dentro
     da capa, no escuro, porque e a continuacao da tese e nao uma
     secao nova. O cartao do slide e um paralelogramo; aqui ele volta
     a ser retangulo arredondado, que e a forma do resto do site. */
  .cadeia{margin-top:42px;padding-top:34px;border-top:1px solid rgba(255,255,255,.13)}
  .cadeia .arco{margin:0 0 24px;max-width:48ch;font-family:var(--disp);font-weight:500;
    font-size:clamp(17px,2.1vw,21px);line-height:1.35;letter-spacing:-.014em;color:var(--tx-2)}
  .cadeia .arco b{color:var(--ouro);font-weight:600}
  .elos{display:grid;grid-template-columns:1fr auto 1fr auto 1fr;gap:0 14px;align-items:stretch}
  @media(max-width:880px){ .elos{grid-template-columns:1fr;gap:10px 0} }
  .elos .e{background:rgba(255,255,255,.055);border:1px solid rgba(255,255,255,.1);
    border-radius:16px;padding:23px 25px}
  @media(max-width:620px){ .elos .e{padding:20px 21px} }
  .elos .e > svg{display:block;color:#fff}
  .elos .reg{display:block;width:34px;height:2px;border-radius:2px;background:var(--ouro);
    margin:17px 0 15px}
  .elos b{display:block;font-family:var(--disp);font-weight:600;font-size:18.5px;color:#fff;
    line-height:1.26;letter-spacing:-.018em}
  .elos span{display:block;font-size:14.5px;color:var(--tx-2);margin-top:10px;line-height:1.55}
  .elos .seta{display:flex;align-items:center;justify-content:center;color:var(--ouro)}
  @media(max-width:880px){ .elos .seta{transform:rotate(90deg);padding:3px 0} }

  /* ── o modelo: Engineering Performance in the Agentic Era ──────
     Três faixas. No topo o resultado que importa; no meio as quatro
     dimensões que o sustentam; embaixo o instrumento que as lê. A
     seta é a afirmação: as quatro dimensões não viram diagnóstico
     sozinhas — elas são lidas pelos mesmos H1 a H8. */
  .mod{margin-top:38px}
  .mod .topo,.mod .base{border-radius:16px;padding:24px 26px;text-align:center}
  .mod .topo{background:var(--ouro-fundo);border:1px solid var(--ouro-borda)}
  .mod .base{background:var(--painel);border:1px solid var(--linha-2)}
  .mod .ic{display:inline-flex;color:var(--ouro);margin-bottom:9px}
  .mod .base .ic{color:var(--tx-2)}
  .mod .topo b,.mod .base b{display:block;font-family:var(--disp);font-weight:600;
    font-size:clamp(17.5px,2.2vw,21px);color:var(--tinta);letter-spacing:-.018em;line-height:1.3}
  .mod .topo span,.mod .base span{display:block;font-size:14.5px;color:var(--tx-2);margin-top:7px}

  .mod .quad{display:grid;grid-template-columns:1fr 1fr;gap:12px;margin:12px 0}
  @media(max-width:720px){ .mod .quad{grid-template-columns:1fr} }
  .mod .quad > div{background:var(--papel);border:1px solid var(--linha);border-radius:16px;
    padding:21px 23px;border-top:3px solid var(--c);
    transition:transform .2s var(--ease),box-shadow .2s var(--ease)}
  .mod .quad > div:hover{transform:translateY(-2px);box-shadow:var(--elev-2)}
  .mod .quad .cab{display:flex;align-items:center;justify-content:space-between;gap:12px}
  .mod .quad .n{font-family:var(--mono);font-size:11px;letter-spacing:.12em;color:var(--tx-3)}
  .mod .quad .cab svg{color:var(--ctxt);flex:none}
  .mod .quad b{display:block;font-family:var(--disp);font-weight:600;font-size:18.5px;
    color:var(--tinta);margin-top:13px;letter-spacing:-.018em;line-height:1.25}
  .mod .quad .sob{display:block;font-size:14px;color:var(--tx-2);margin-top:7px;line-height:1.5}
  .mod .quad p{font-size:14px;color:var(--tx-2);margin-top:13px;padding-top:12px;
    border-top:1px dashed var(--linha-2);line-height:1.6}
  .mod .seta{display:block;text-align:center;color:var(--tx-3);margin:13px 0 11px;line-height:1}

  /* ── os três movimentos ──────────────────────────────────────
     Mesmo desenho das quatro ofertas corporativas, com o número à
     frente: nome em inglês, descritor em inglês e o entregável num
     painel próprio, porque é por ele que a proposta é cobrada. */
  .mov{display:grid;gap:16px;margin-top:34px}
  .mov > div{background:var(--papel);border:1px solid var(--linha);border-radius:18px;
    padding:28px 30px}
  @media(max-width:620px){ .mov > div{padding:24px 22px} }
  .mov .top{display:flex;align-items:baseline;gap:14px;flex-wrap:wrap}
  .mov .n{font-family:var(--mono);font-size:12.5px;letter-spacing:.12em;color:var(--tx-3)}
  .mov .nm{margin:0;font-family:var(--disp);font-weight:700;font-size:clamp(22px,2.6vw,26px);
    color:var(--tinta);letter-spacing:-.024em}
  .mov .en{font-family:var(--mono);font-size:11.5px;letter-spacing:.1em;text-transform:uppercase;
    color:var(--ouro)}
  .mov .desc{font-size:15.5px;color:var(--tx-2);margin-top:14px;line-height:1.65;max-width:74ch}
  .mov .entreg{display:grid;grid-template-columns:auto 1fr;gap:3px 16px;align-items:baseline;
    background:var(--canvas);border:1px solid var(--linha);border-radius:12px;
    padding:16px 19px;margin-top:19px}
  @media(max-width:620px){ .mov .entreg{grid-template-columns:1fr;gap:7px} }
  .mov .entreg b{font-family:var(--mono);font-size:10.5px;letter-spacing:.11em;
    text-transform:uppercase;color:var(--tx-3);font-weight:400}
  .mov .entreg span{font-size:15px;color:var(--tinta);line-height:1.55}

  /* ── as estações entre o commit e a produção ─────────────────
     O fluxo em uma figura. A estação 01 é onde a IA entra primeiro;
     em qual estação o ganho fica retido depois disso é achado de
     diagnóstico, não regra — por isso nenhuma das outras cinco vem
     marcada de antemão. */
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
  /* o dourado padrao (#8C6033) passa com folga no branco, mas sobre o
     proprio fundo dourado cai para 4,37:1 — abaixo do minimo para texto
     normal. Nestes dois rotulos vale o tom escuro. */
  .est .rapida{border-top-color:var(--ouro);background:var(--ouro-fundo)}
  .est .rapida .n{color:var(--ouro-hover)}
  .est .rapida .marca{display:inline-flex;align-items:center;gap:6px;font-family:var(--mono);
    font-size:9.5px;letter-spacing:.1em;text-transform:uppercase;color:var(--ouro-hover);margin-top:10px}
  .est .rapida .marca::before{content:"";width:12px;height:2px;border-radius:2px;
    background:var(--ouro-hover)}

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
  .base-m{display:grid;grid-template-columns:repeat(3,1fr);gap:12px;margin-top:32px}
  @media(max-width:880px){ .base-m{grid-template-columns:repeat(2,1fr)} }
  @media(max-width:540px){ .base-m{grid-template-columns:1fr} }
  .base-m > div{background:var(--papel);border:1px solid var(--linha);border-radius:13px;
    padding:19px 21px}
  .base-m b{display:block;font-family:var(--disp);font-weight:600;font-size:15.5px;
    color:var(--tinta);line-height:1.3}
  .base-m span{display:block;font-size:13.5px;color:var(--tx-2);margin-top:7px;line-height:1.55}
  .base-m .onde{display:block;font-family:var(--mono);font-size:10px;letter-spacing:.1em;
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
    <h1>A IA mudou a capacidade de desenvolver software.<span class="realce">Agora é preciso transformar a engenharia.</span></h1>
    <p class="sub">A produtividade na era agêntica não depende apenas de escrever código mais
       rápido. Depende de como pessoas, agentes, arquitetura, processos e decisões trabalham
       juntos para entregar software com mais velocidade, qualidade e valor.</p>
    <p class="sub forte">O ReCode Tech diagnostica e redesenha esse sistema, transformando o
       potencial da IA em desempenho mensurável para a engenharia e para o negócio.</p>

    <div class="cadeia">
      <p class="arco">Da produtividade individual <b>à performance da engenharia</b>.</p>
      <div class="elos">
        <div class="e">
          <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M8.5 17 3.5 12l5-5"/><path d="m15.5 7 5 5-5 5"/><path d="M13.7 5.2 10.3 18.8"/></svg>
          <span class="reg"></span>
          <b>Pessoas com IA</b>
          <span>Mais capacidade de criar, testar e resolver.</span>
        </div>
        <div class="seta" aria-hidden="true"><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.1" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m9 5 7 7-7 7"/></svg></div>
        <div class="e">
          <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m12 3 8.5 4.3L12 11.6 3.5 7.3 12 3Z"/><path d="m3.5 12 8.5 4.3 8.5-4.3"/><path d="m3.5 16.7 8.5 4.3 8.5-4.3"/></svg>
          <span class="reg"></span>
          <b>Engenharia mais inteligente</b>
          <span>Processos, agentes, arquitetura e governança trabalhando juntos.</span>
        </div>
        <div class="seta" aria-hidden="true"><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.1" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m9 5 7 7-7 7"/></svg></div>
        <div class="e">
          <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3.2" y="14.4" width="4.4" height="6.4" rx="1.1"/><rect x="9.8" y="9.2" width="4.4" height="11.6" rx="1.1"/><rect x="16.4" y="4.2" width="4.4" height="16.6" rx="1.1"/></svg>
          <span class="reg"></span>
          <b>Mais valor para o negócio</b>
          <span>Entregas mais rápidas, qualidade, confiabilidade e impacto real.</span>
        </div>
      </div>
    </div>
  </div>
</section>

<section class="sec">
  <div class="wrap">
    <div class="olho">O modelo</div>
    <h2 class="tit larga">Engineering Performance in the Agentic Era</h2>
    <p class="lead">Quatro dimensões sustentam o desempenho de engenharia quando parte do trabalho
       passa a ser feita por agentes. Elas não se resolvem separadamente — e é por isso que trocar
       de ferramenta costuma mudar menos do que se espera.</p>

    <div class="mod rv">
      <div class="topo">
        <span class="ic"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" aria-hidden="true"><circle cx="12" cy="12" r="8.6"/><circle cx="12" cy="12" r="4.6"/><circle cx="12" cy="12" r="1.1" fill="currentColor" stroke="none"/></svg></span>
        <b>Valor de negócio</b>
        <span>Entrega, qualidade, confiabilidade e time-to-value</span>
      </div>

      <div class="quad">
        <div style="--c:#2D87FF;--ctxt:#1B5FC4">
          <div class="cab">
            <div class="n">01</div>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M8.5 17 3.5 12l5-5"/><path d="m15.5 7 5 5-5 5"/><path d="M13.7 5.2 10.3 18.8"/></svg>
          </div>
          <b>AI-Augmented Developer</b>
          <span class="sob">Competências e produtividade individual</span>
          <p>O que muda no ofício quando escrever deixa de ser o gargalo: julgar, especificar,
             revisar e decidir o que não deve ser gerado.</p>
        </div>
        <div style="--c:#5B6FFA;--ctxt:#3345C9">
          <div class="cab">
            <div class="n">02</div>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="4" y="8" width="16" height="12" rx="3.2"/><path d="M12 8V4.8"/><circle cx="12" cy="3.5" r="1.3"/><circle cx="9.2" cy="14" r="1.1" fill="currentColor" stroke="none"/><circle cx="14.8" cy="14" r="1.1" fill="currentColor" stroke="none"/></svg>
          </div>
          <b>Agentic Engineering</b>
          <span class="sob">Delegação, autonomia e colaboração humano–agente</span>
          <p>O que um agente pode fazer sem aprovação, o que ele enxerga do contexto e quem
             responde quando o que ele gerou causa um incidente.</p>
        </div>
        <div style="--c:#7A68F8;--ctxt:#4A34CD">
          <div class="cab">
            <div class="n">03</div>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="7" cy="5.6" r="2.3"/><circle cx="7" cy="18.4" r="2.3"/><circle cx="17" cy="9" r="2.3"/><path d="M7 7.9v8.2"/><path d="M17 11.3c0 3.3-2.9 4.5-7 4.5"/></svg>
          </div>
          <b>Engineering Flow</b>
          <span class="sob">Arquitetura do trabalho e fluxo de entrega</span>
          <p>O caminho do commit até a produção, com as esperas separadas do trabalho — e a
             estação em que o ganho está sendo absorvido.</p>
        </div>
        <div style="--c:#885CF6;--ctxt:#5A23D2">
          <div class="cab">
            <div class="n">04</div>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 3.2 19.4 6v5.4c0 4.4-3 7.8-7.4 9.4-4.4-1.6-7.4-5-7.4-9.4V6Z"/><path d="m8.9 12.1 2.1 2.1 4.2-4.2"/></svg>
          </div>
          <b>Trust &amp; Reliability</b>
          <span class="sob">Qualidade, segurança, testes e governança</span>
          <p>Como se sabe que o que foi gerado funciona: critério definido antes, rastro de
             execução e o que acontece depois que a mudança entra no ar.</p>
        </div>
      </div>

      <span class="seta" aria-hidden="true">
        <svg width="20" height="22" viewBox="0 0 24 26" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3v19"/><path d="m5.5 15.5 6.5 6.5 6.5-6.5"/></svg>
      </span>

      <div class="base">
        <b>Organizational Harness Assessment — H1 a H8</b>
        <span>Diagnóstico integrado, priorização e roadmap de transformação</span>
      </div>
    </div>

    <div class="nota">
      <b>O modelo organiza a conversa; o instrumento continua o mesmo.</b> As quatro dimensões são
      a linguagem de quem lidera engenharia. Elas são lidas pelos mesmos oito componentes usados no
      resto da empresa — e é isso que permite colocar a campanha da engenharia ao lado da campanha
      corporativa, em vez de num relatório paralelo.
    </div>
  </div>
</section>

<section class="sec canvas">
  <div class="wrap">
    <div class="olho">Como trabalhamos</div>
    <h2 class="tit larga">Três movimentos, com entregável declarado em cada um</h2>
    <p class="lead">Dá para contratar só o primeiro. O entregável diz onde cada movimento termina —
       e, por consequência, o que ainda não está respondido quando ele acaba.</p>

    <div class="mov rv">

      <div>
        <div class="top">
          <div class="n">01</div>
          <h3 class="nm">Diagnose</h3>
          <div class="en">Engineering AI Readiness</div>
        </div>
        <p class="desc">Diagnóstico do fluxo, competências, adoção de IA, arquitetura e capacidades
           organizacionais, combinando dados disponíveis com entrevistas e amostras de trabalho.</p>
        <div class="entreg">
          <b>Entregável</b>
          <span>Mapa de oportunidades, baseline validado, riscos e prioridades econômicas.</span>
        </div>
      </div>

      <div>
        <div class="top">
          <div class="n">02</div>
          <h3 class="nm">Reengineer</h3>
          <div class="en">AI-Augmented Software Delivery</div>
        </div>
        <p class="desc">Redesenho dos processos e práticas de engenharia, incluindo agentes, testes,
           revisão, arquitetura de contexto, CI/CD e formação de profissionais.</p>
        <div class="entreg">
          <b>Entregável</b>
          <span>Novo modelo operacional, arquitetura-alvo e plano de implementação.</span>
        </div>
      </div>

      <div>
        <div class="top">
          <div class="n">03</div>
          <h3 class="nm">Prove &amp; Scale</h3>
          <div class="en">Engineering Performance</div>
        </div>
        <p class="desc">Execução de pilotos com grupos ou fluxos comparáveis, acompanhamento de
           resultados e expansão das práticas comprovadas.</p>
        <div class="entreg">
          <b>Entregável</b>
          <span>Evidências de impacto, business case e roadmap de escala.</span>
        </div>
      </div>

    </div>

    <div class="nota">
      <b>É a mesma jornada da consultoria, condensada para engenharia.</b> Diagnose corresponde a
      Discover; Reengineer reúne Redesign e Activate; Prove &amp; Scale é Impact. Quem contrata as
      duas frentes não contrata dois métodos —
      <a href="{{ '/recode/consultoria/' | relative_url }}">ver as quatro ofertas corporativas</a>.
    </div>
  </div>
</section>

<section class="sec">
  <div class="wrap">
    <div class="olho">O instrumento, em engenharia</div>
    <h2 class="tit larga">Os mesmos oito componentes, lidos no seu fluxo</h2>
    <p class="lead">O ReCode Tech não traz régua nova. É o <b>Organizational Harness
       Assessment</b> instanciado em engenharia: os IDs continuam H1 a H8, e as quatro dimensões do
       modelo aparecem distribuídas entre eles.</p>

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

<section class="sec canvas">
  <div class="wrap">
    <div class="olho">Engineering Flow, de perto</div>
    <h2 class="tit larga">Entre o commit e a produção existem seis estações</h2>
    <p class="lead">A IA entra na primeira. Em qual das outras o ganho fica retido depois disso
       varia por organização, por base de código e por tipo de tarefa — e é justamente isso que o
       diagnóstico determina, em vez de supor.</p>

    <div class="est rv">
      <div class="rapida">
        <div class="n">01</div>
        <b>Escrita</b>
        <p>Assistentes e agentes aceleram a produção de código.</p>
        <div class="marca">onde a IA entra primeiro</div>
      </div>
      <div><div class="n">02</div><b>Revisão</b>
        <p>Mais código chega, e a capacidade de revisar com atenção pode não crescer junto.</p></div>
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

<section class="sec">
  <div class="wrap">
    <div class="olho">O que medimos</div>
    <h2 class="tit larga">O baseline já está nas suas ferramentas</h2>
    <p class="lead">Esta é a diferença prática de diagnosticar engenharia: em quase toda outra
       área, levantar a linha de base é metade do projeto. Aqui ela já existe — só não está sendo
       lida como sistema.</p>

    <div class="base-m rv">
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
    <p class="lead">O ganho medido varia muito entre organizações, bases de código e tipos de
       tarefa. É por isso que o ReCode Tech não parte de um multiplicador esperado — e é o que
       separa um diagnóstico de uma pesquisa de satisfação com a ferramenta.</p>

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
      o achado: ela aponta a dimensão em que o ganho está sendo absorvido.
    </div>
  </div>
</section>

<section class="sec canvas">
  <div class="wrap">
    <div class="olho">Escopo</div>
    <h2 class="tit larga">Onde o ReCode Tech entra, e onde não</h2>

    <div class="lim">
      <div>
        <h3>O que o ReCode Tech entrega</h3>
        <ul>
          <li>O mapa do fluxo do commit à produção, com as esperas separadas do trabalho</li>
          <li>A leitura das quatro dimensões nos oito componentes, com evidência e grau de confiança</li>
          <li>O novo modelo operacional de engenharia, com arquitetura-alvo e plano de implementação</li>
          <li>O desenho dos pilotos e o acompanhamento, com critério definido antes de começar</li>
          <li>O business case e o roadmap de escala, com responsável, prazo e indicador</li>
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
