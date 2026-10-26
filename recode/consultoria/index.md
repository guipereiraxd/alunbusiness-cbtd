---
title: "Consultoria"
description: "Discover, Redesign, Activate e Impact: quatro ofertas modulares de uma mesma jornada de redesenho do harness organizacional, com entregáveis, unidade de intervenção e limites de escopo declarados."
---

<style>
  .ofs{display:grid;gap:18px;margin-top:34px}
  .ofs > div{background:var(--papel);border:1px solid var(--linha);border-radius:18px;padding:30px}
  .ofs .top{display:flex;align-items:baseline;gap:16px;flex-wrap:wrap}
  .ofs .nm{font-family:var(--disp);font-weight:700;font-size:26px;color:var(--tinta);letter-spacing:-.02em}
  .ofs .en{font-family:var(--mono);font-size:11.5px;letter-spacing:.1em;text-transform:uppercase;color:var(--ouro)}
  /* os nomes dos artefatos continuam em inglês — são os entregáveis —
     mas quem chega precisa entender o benefício antes do método */
  .ofs .benef{font-family:var(--disp);font-weight:600;font-size:clamp(17px,2vw,19.5px);
    color:var(--tinta);line-height:1.42;margin-top:14px;max-width:54ch;letter-spacing:-.014em}
  .ofs .desc{font-size:15px;color:var(--tx-2);margin-top:11px;line-height:1.65;max-width:70ch}
  .ofs .corpo{display:grid;grid-template-columns:1fr 1fr;gap:26px;margin-top:22px;
    padding-top:22px;border-top:1px solid var(--linha)}
  @media(max-width:760px){ .ofs .corpo{grid-template-columns:1fr;gap:18px} }
  /* eram h4 soltos sob um h1: salto de nível, e as ofertas nem eram headings */
  .ofs h3{font-family:var(--mono);font-size:10.5px;letter-spacing:.11em;text-transform:uppercase;
    color:var(--tx-3);margin:0 0 11px;font-weight:400;letter-spacing:.11em}
  .ofs .entreg h3{color:var(--tinta);font-family:var(--sans);font-size:14.5px;
    text-transform:none;letter-spacing:0;font-weight:600;margin-bottom:4px}
  .ofs ul{margin:0;padding-left:18px;font-size:14.5px;color:var(--tx-2);line-height:1.75}
  .ofs .entreg{background:var(--canvas);border-radius:12px;padding:17px 19px}
  .ofs .entreg b{display:block;font-size:14.5px;color:var(--tinta);margin-bottom:4px}
  .ofs .entreg span{font-size:13.5px;color:var(--tx-2);line-height:1.6}

  .missao{background:var(--painel);border:1px solid var(--linha-2);
    border-radius:18px;padding:30px;margin-top:32px}
  .missao .ex{font-family:var(--disp);font-weight:600;font-size:clamp(18px,2.4vw,23px);
    color:#fff;line-height:1.4;max-width:34ch}
  .missao .pr{display:grid;grid-template-columns:repeat(5,1fr);gap:14px;margin-top:26px;
    padding-top:22px;border-top:1px solid var(--linha-2)}
  @media(max-width:900px){ .missao .pr{grid-template-columns:repeat(2,1fr)} }
  @media(max-width:520px){ .missao .pr{grid-template-columns:1fr} }
  .missao .pr div b{display:block;font-family:var(--mono);font-size:10.5px;letter-spacing:.1em;
    text-transform:uppercase;color:var(--tx-2);font-weight:400}
  .missao .pr div span{display:block;font-size:13.5px;color:#DCE7FB;margin-top:6px;line-height:1.5}

  .noventa{display:grid;grid-template-columns:repeat(4,1fr);gap:1px;background:var(--linha);
    border:1px solid var(--linha);border-radius:16px;overflow:hidden;margin-top:32px}
  @media(max-width:860px){ .noventa{grid-template-columns:repeat(2,1fr)} }
  @media(max-width:520px){ .noventa{grid-template-columns:1fr} }
  .noventa > div{background:var(--papel);padding:22px}
  .noventa .d{font-family:var(--mono);font-size:11px;letter-spacing:.1em;text-transform:uppercase;color:var(--ouro)}
  .noventa p{font-size:14px;color:var(--tx-2);margin-top:10px;line-height:1.6}

  .lim{display:grid;grid-template-columns:1fr 1fr;gap:16px;margin-top:32px}
  @media(max-width:760px){ .lim{grid-template-columns:1fr} }
  .lim > div{border:1px solid var(--linha);border-radius:14px;padding:24px;background:var(--papel)}
  .lim h3{font-size:17.5px;font-weight:600;margin-bottom:11px}
  .lim p{font-size:14.5px;color:var(--tx-2);line-height:1.65}

  .conv{background:linear-gradient(160deg,var(--exec),var(--exec-2));
    border-radius:22px;padding:50px 44px;text-align:center}
  @media(max-width:620px){ .conv{padding:36px 24px;border-radius:18px} }
  .conv h2{color:#fff;font-size:clamp(23px,3.2vw,32px);max-width:24ch;margin:0 auto}
  .conv p{color:var(--tx-2);font-size:16.5px;margin:15px auto 0;max-width:56ch;line-height:1.6}
  .conv .botoes{justify-content:center}
</style>

<section class="cap">
  <div class="wrap">
    <div class="olho">Consultoria</div>
    <h1>Detectar a restrição e transformar a organização são coisas diferentes</h1>
    <p class="sub">Quatro ofertas modulares de uma mesma jornada. Dá para contratar só a primeira
       — e o artefato deixa claro onde o diagnóstico termina e onde o redesenho começa.</p>
  </div>
</section>

<section class="sec">
  <div class="wrap">
    <div class="ofs">

      <div>
        <div class="top"><h2 class="nm">Discover</h2><div class="en">Diagnose your harness</div></div>
        <p class="benef">Descubra por que os investimentos em IA ainda não geram o resultado esperado.</p>
        <p class="desc">Diagnóstico multiárea com entrevistas, levantamento de evidências, análise
           de performance de jornadas e identificação do principal limitador da captura de valor.</p>
        <div class="corpo">
          <div><h3>O trabalho</h3>
            <ul>
              <li>Campanha de percepção nos oito componentes</li>
              <li>Entrevistas e observação de rotina</li>
              <li>Classificação de evidências E0–E4</li>
              <li>Leitura de divergência entre áreas e níveis</li>
            </ul></div>
          <div class="entreg">
            <h3 style="display:block">Entrega</h3>
            <span>Organizational Harness Diagnostic e mapa de restrições, com cobertura,
              limitações e grau de confiança por afirmação.</span></div>
        </div>
      </div>

      <div>
        <div class="top"><h2 class="nm">Redesign</h2><div class="en">Recode how work creates value</div></div>
        <p class="benef">Receba o desenho de como a sua operação deveria funcionar com IA.</p>
        <p class="desc">Workshops de redesenho, análise do modelo econômico, decomposição do
           trabalho, desenho da coordenação humano–agente, direitos de decisão e mecanismos de
           verificação.</p>
        <div class="corpo">
          <div><h3>O trabalho</h3>
            <ul>
              <li>Hipótese econômica e destino da capacidade liberada</li>
              <li>Fluxo atual e futuro, com filas e exceções</li>
              <li>Matriz de autonomia proporcional ao risco</li>
              <li>Gates humanos e critérios de qualidade</li>
            </ul></div>
          <div class="entreg">
            <h3 style="display:block">Entrega</h3>
            <span>Target Operating Model, Business Model Recode e Harness Blueprint —
              contexto, ferramentas, estados, verificações e handoffs.</span></div>
        </div>
      </div>

      <div>
        <div class="top"><h2 class="nm">Activate</h2><div class="en">Make the new model real</div></div>
        <p class="benef">Coloque o novo modelo para funcionar, preparando pessoas, processos e controles.</p>
        <p class="desc">Pilotos conduzidos sobre missões reais, preparação de equipes e lideranças,
           coordenação da implantação com a TI do cliente, instrumentação de avaliações e revisão
           de rituais e incentivos.</p>
        <div class="corpo">
          <div><h3>O trabalho</h3>
            <ul>
              <li>Piloto supervisionado com prontidão de rollback</li>
              <li>Trilhas aplicadas por papel, com prova de aplicação</li>
              <li>Instrumentação de evals e traces</li>
              <li>Revisão de rotinas, reconhecimento e incentivos</li>
            </ul></div>
          <div class="entreg">
            <h3 style="display:block">Entrega</h3>
            <span>Mission Playbook, Capability Plan e Go-live Controls, com responsáveis
              e critérios de parada definidos.</span></div>
        </div>
      </div>

      <div>
        <div class="top"><h2 class="nm">Impact</h2><div class="en">Prove and compound value</div></div>
        <p class="benef">Comprove o que mudou e decida onde expandir.</p>
        <p class="desc">Baseline, acompanhamento de processo e de resultado econômico, assurance,
           governança do ciclo de revisão e decisão de expansão.</p>
        <div class="corpo">
          <div><h3>O trabalho</h3>
            <ul>
              <li>Baseline e medição com janela e comparadores</li>
              <li>Avaliação explícita de fatores externos</li>
              <li>Separação entre realizado, projetado e hipótese</li>
              <li>Decisão formal de escalar, corrigir ou interromper</li>
            </ul></div>
          <div class="entreg">
            <h3 style="display:block">Entrega</h3>
            <span>Value Realization Ledger, Scale Decision e Reuse Kit, com origem,
              confiança e destino registrado de cada ganho.</span></div>
        </div>
      </div>

    </div>
  </div>
</section>

<section class="sec canvas">
  <div class="wrap">
    <div class="olho">Unidade de intervenção</div>
    <h2 class="tit larga">O objeto do trabalho é uma missão de negócio</h2>
    <p class="lead">Não é um chatbot, uma ferramenta nem uma trilha de treinamento. É uma jornada
       delimitada, com resultado mensurável e alguém que responde por ela.</p>

    <div class="missao ctx-escuro">
      <div class="ex">“Reduzir o tempo de cotação mantendo a taxa de erro e a conformidade.”</div>
      <div class="pr">
        <div><b>Outcome</b><span>o resultado de negócio, com indicador</span></div>
        <div><b>Baseline</b><span>onde está hoje, com janela e segmento</span></div>
        <div><b>Owner</b><span>quem pode mudar processo e investimento</span></div>
        <div><b>Risco</b><span>limites legais e operacionais declarados</span></div>
        <div><b>Captura</b><span>destino da capacidade liberada</span></div>
      </div>
    </div>

    </div>
</section>

<section class="sec">
  <div class="wrap">
    <div class="olho">Formato de piloto</div>
    <h2 class="tit larga">Noventa dias, como hipótese de trabalho</h2>

    <div class="noventa">
      <div><div class="d">Dias 1–15</div>
        <p>Missão, baseline, instrumentos, entrevistas, assessment e levantamento de evidências.</p></div>
      <div><div class="d">Dias 16–30</div>
        <p>Restrições, cenário futuro, business case, blueprint do harness organizacional e patrocínio formal.</p></div>
      <div><div class="d">Dias 31–60</div>
        <p>Piloto supervisionado, testes e avaliações, desenvolvimento por papéis, prontidão de incidente e rollback.</p></div>
      <div><div class="d">Dias 61–90</div>
        <p>Medição, comparação, revisão, decisão de escala e pacote de reuso.</p></div>
    </div>

    <div class="nota aviso">
      <b>Noventa dias é um formato de piloto, não uma garantia.</b> Não é promessa de ROI nem de
      transformação completa, e o próprio desenho prevê a decisão de interromper como resultado
      legítimo.
    </div>
  </div>
</section>

<section class="sec canvas">
  <div class="wrap">
    <div class="olho">Escopo</div>
    <h2 class="tit larga">Onde a Alun Business entra, e onde não</h2>

    <div class="lim">
      <div>
        <h3>Desenho e coordenação</h3>
        <p>O movimento <i>Orchestrate</i> significa desenhar a arquitetura do harness organizacional e coordenar
           a execução junto a parceiros ou à TI do cliente. Não assumimos automaticamente a
           implementação técnica das integrações: ela é contratada à parte, quando houver escopo
           e capacidade específicos.</p>
      </div>
      <div>
        <h3>Autonomia de agentes</h3>
        <p>Quando a consultoria envolve agentes executando ações, valem allowlists, menor
           privilégio, limites de gasto e de tempo, checkpoints e rollback. Execução com efeito
           em sistemas do cliente só é habilitada mediante aprovação contratual específica —
           nunca como padrão.</p>
      </div>
    </div>

    </div>
</section>

<section class="sec ap">
  <div class="wrap">
    <div class="conv escuro ctx-escuro">
      <h2>Vamos começar pela sua restrição, não pelo nosso método</h2>
      <p>A conversa de descoberta parte da jornada que mais trava o valor do seu negócio. Se o
         diagnóstico não fizer sentido para ela, a gente diz isso.</p>
      <div class="botoes">
        <a class="bt bt-1" href="{{ '/recode/contato/' | relative_url }}">Conversar sobre uma transformação</a>
        <a class="bt bt-2" href="{{ '/recode/diagnostico/' | relative_url }}">Conhecer o diagnóstico</a>
      </div>
    </div>
  </div>
</section>
