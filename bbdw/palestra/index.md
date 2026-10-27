---
title: "A palestra"
description: "Hybrid Skills, slide a slide: a promessa da produtividade, a tese, o que o mercado valoriza, os cinco movimentos, as seis perguntas para destravar um problema e as referências."
---

<style>
  .sum{display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:10px;margin-top:30px}
  .sum a{display:flex;gap:12px;align-items:baseline;padding:12px 14px;border-radius:12px;background:var(--painel);border:1px solid var(--linha);
    color:var(--tinta);text-decoration:none;font-size:15px;font-weight:500;min-height:44px;transition:border-color .18s}
  .sum a:hover{border-color:var(--ouro)}
  .sum a b{font-family:var(--mono);font-size:11.5px;color:var(--ouro);font-weight:500}
  .parte{padding:64px 0 10px}
  .parte .olho{margin-bottom:12px}
  .parte h2{font-size:clamp(24px,3.2vw,34px);max-width:24ch}
  .parte .lead{margin-top:12px}
  .slides{display:grid;gap:26px;margin-top:30px}
  .slide{display:grid;grid-template-columns:1.25fr .75fr;gap:22px;align-items:start}
  @media(max-width:860px){ .slide{grid-template-columns:1fr} }
  .slide img{width:100%;border-radius:14px;border:1px solid var(--linha);box-shadow:var(--elev-1);background:#000}
  .slide .leg h3{font-size:18px;letter-spacing:-.015em}
  .slide .leg p{font-size:15px;color:var(--tx-2);margin-top:8px;line-height:1.58}
  .slide .leg .fonte{font-family:var(--mono);font-size:11.5px;letter-spacing:.04em;color:var(--tx-3);margin-top:10px;line-height:1.6}
  .slide .leg .n{font-family:var(--mono);font-size:11.5px;letter-spacing:.12em;color:var(--ouro);margin-bottom:8px}
  .seis .cartao{padding:22px}
  .seis .cartao .cod{margin-bottom:8px}
  .seis .cartao h3{font-size:17.5px;line-height:1.4}
  .refs{margin-top:28px;border-top:1px solid var(--linha)}
  .refs div{display:grid;grid-template-columns:1fr auto;gap:14px;padding:16px 0;border-bottom:1px solid var(--linha);align-items:baseline}
  @media(max-width:600px){ .refs div{grid-template-columns:1fr} }
  .refs b{color:var(--tinta);font-weight:600}
  .refs p{font-size:15px;color:var(--tx-2);margin-top:4px}
  .refs a{font-size:14.5px;white-space:nowrap}
</style>

<section class="cap">
  <div class="wrap">
    <div class="olho">Hybrid Skills · BB Digital Week 2026</div>
    <h1>As competências que diferenciam profissionais na era da IA</h1>
    <p class="sub">A apresentação de Guilherme Pereira, slide a slide, com as fontes de cada dado. Para rever, aprofundar e usar com o seu time.</p>
    <div class="botoes">
      <a class="bt bt-1" href="{{ '/bbdw/assets/hybrid-skills-bbdw-2026.pdf' | relative_url }}">Baixar o PDF (6 MB)</a>
      <a class="bt bt-2" href="{{ '/bbdw/diagnostico/' | relative_url }}">Fazer o diagnóstico</a>
    </div>
  </div>
</section>

<section class="sec ap">
  <div class="wrap">
    <div class="olho">Roteiro</div>
    <div class="sum">
      <a href="#promessa"><b>01</b> A promessa da produtividade</a>
      <a href="#tese"><b>02</b> A tese</a>
      <a href="#mercado"><b>03</b> O que está sendo valorizado</a>
      <a href="#hibrido"><b>04</b> O que torna a atuação híbrida</a>
      <a href="#movimentos"><b>05</b> Cinco movimentos</a>
      <a href="#ia"><b>06</b> A tecnologia como repertório</a>
      <a href="#sozinha"><b>07</b> Sozinha, cada competência falha</a>
      <a href="#portas"><b>08</b> Abrir portas, progredir, se renovar</a>
      <a href="#superpower"><b>09</b> Superpower Worker</a>
      <a href="#seis"><b>10</b> Seis perguntas para destravar um problema</a>
      <a href="#humanas"><b>11</b> Quatro capacidades humanas</a>
      <a href="#referencias"><b>12</b> Referências</a>
    </div>
  </div>
</section>

<div class="wrap">

  <section class="parte" id="promessa">
    <div class="olho">01</div>
    <h2>A promessa da produtividade</h2>
    <p class="lead">Automatizamos com IA para ganhar velocidade, reduzir esforço e aumentar a produtividade. A pergunta é se essa eficiência chega ao cliente.</p>
    <div class="slides">
      <figure class="slide rv">
        <img src="{{ '/bbdw/assets/slides/slide-03.jpg' | relative_url }}" alt="Slide 3: Tudo parece estar indo melhor" loading="lazy" width="1200" height="675">
        <figcaption class="leg"><div class="n">Slide 03</div><h3>Tudo parece estar indo melhor.</h3>
          <p>Respostas mais rápidas, menos tarefas manuais, mais entregas. No atendimento, a IA responde, encaminha e encerra chamados.</p>
          <div class="fonte">Cenário ilustrativo. Os ganhos dependem de como o trabalho é redesenhado.</div></figcaption>
      </figure>
      <figure class="slide rv">
        <img src="{{ '/bbdw/assets/slides/slide-04.jpg' | relative_url }}" alt="Slide 4: O indicador melhorou, o problema piorou" loading="lazy" width="1200" height="675">
        <figcaption class="leg"><div class="n">Slide 04</div><h3>O indicador melhorou. O problema piorou.</h3>
          <p>O tempo de atendimento cai e os clientes voltam pelo mesmo motivo. Faltaram julgamento, visão sistêmica e colaboração. Estamos encerrando chamados ou resolvendo problemas?</p>
          <div class="fonte">Caso ilustrativo, sem dados reais. A automação pode ampliar uma meta mal definida.</div></figcaption>
      </figure>
    </div>
  </section>

  <section class="parte" id="tese">
    <div class="olho">02</div>
    <h2>A tese</h2>
    <div class="slides">
      <figure class="slide rv">
        <img src="{{ '/bbdw/assets/slides/slide-05.jpg' | relative_url }}" alt="Slide 5: Problemas não chegam separados por competência" loading="lazy" width="1200" height="675">
        <figcaption class="leg"><div class="n">Slide 05</div><h3>Problemas não chegam separados por competência.</h3>
          <p>Seu superpoder está na combinação de competências que você consegue colocar em ação diante de um problema real.</p></figcaption>
      </figure>
    </div>
  </section>

  <section class="parte" id="mercado">
    <div class="olho">03</div>
    <h2>O que está sendo valorizado</h2>
    <p class="lead">Para o RH, resolver problemas vem primeiro. E, com a IA, cresce também a demanda por aprender.</p>
    <div class="slides">
      <figure class="slide rv">
        <img src="{{ '/bbdw/assets/slides/slide-06.jpg' | relative_url }}" alt="Slide 6: Para o RH, resolver problemas vem primeiro" loading="lazy" width="1200" height="675">
        <figcaption class="leg"><div class="n">Slide 06</div><h3>Para o RH, resolver problemas vem primeiro.</h3>
          <p>Resolução de problemas lidera com 44% e sobe 9 pontos. Criatividade, 34%. Letramento digital é o que mais cresce: 15 pontos.</p>
          <div class="fonte">Adaptado de McKinsey &amp; Company, HR Monitor 2026, Exhibit 1. Percentual que citou a competência entre as 5 principais; 1.303 profissionais de RH em 10 países, sem o Brasil. Comparação anual apenas direcional.</div></figcaption>
      </figure>
      <figure class="slide rv">
        <img src="{{ '/bbdw/assets/slides/slide-07.jpg' | relative_url }}" alt="Slide 7: Com a IA, cresce também a demanda por aprender" loading="lazy" width="1200" height="675">
        <figcaption class="leg"><div class="n">Slide 07</div><h3>Com a IA, cresce também a demanda por aprender.</h3>
          <p>Fluência em IA, 11 vezes. Disposição para aprender, resiliência e curiosidade, 3 vezes. Adaptabilidade, 5 vezes. Número de ocupações nos EUA que exigem cada competência, 2022 a 2026.</p>
          <div class="fonte">Adaptado de McKinsey Global Institute, Workforce in motion (set/2026), Exhibit 21. Curvas redesenhadas por digitalização do original, aproximadas. Fontes do original: BLS, Lightcast, análise MGI.</div></figcaption>
      </figure>
    </div>
  </section>

  <section class="parte" id="hibrido">
    <div class="olho">04</div>
    <h2>O que torna a atuação híbrida</h2>
    <div class="slides">
      <figure class="slide rv">
        <img src="{{ '/bbdw/assets/slides/slide-08.jpg' | relative_url }}" alt="Slide 8: o híbrido é como você combina competências" loading="lazy" width="1200" height="675">
        <figcaption class="leg"><div class="n">Slide 08</div><h3>O híbrido é como você combina competências.</h3>
          <p>Uma competência, um repertório, uma combinação em ação. No caso do atendimento: dados + pensamento crítico; visão sistêmica + colaboração; criatividade + aprendizagem.</p>
          <div class="fonte">Definição de trabalho desta palestra. Exemplo ilustrativo; não é uma taxonomia científica.</div></figcaption>
      </figure>
      <figure class="slide rv">
        <img src="{{ '/bbdw/assets/slides/slide-09.jpg' | relative_url }}" alt="Slide 9: A especialização se apoia numa base comum" loading="lazy" width="1200" height="675">
        <figcaption class="leg"><div class="n">Slide 09</div><h3>A especialização se apoia numa base comum.</h3>
          <p>Oito competências fundamentais para todos; transformadoras, comunitárias e digitais no meio; tecnológicas para especialistas no topo.</p>
          <div class="fonte">Adaptado de Stifterverband, Future Skills 2030 (dez/2025, edição em inglês fev/2026), gráficos 01 e 02, CC BY-SA 4.0. Tradução livre e redesenho. A pirâmide não é ranking de pessoas nem ordem de aprendizagem.</div></figcaption>
      </figure>
    </div>
  </section>

  <section class="parte" id="movimentos">
    <div class="olho">05</div>
    <h2>Cinco movimentos diante de um problema real</h2>
    <div class="slides">
      <figure class="slide rv">
        <img src="{{ '/bbdw/assets/slides/slide-10.jpg' | relative_url }}" alt="Slide 10: Cinco movimentos diante de um problema real" loading="lazy" width="1200" height="675">
        <figcaption class="leg"><div class="n">Slide 10</div><h3>Ler, Conectar, Criar, Mobilizar, Aprender.</h3>
          <p>Pensamento crítico e julgamento; visão sistêmica e de negócio; criatividade aplicada; comunicação e colaboração; adaptabilidade e aprendizagem. Sobre um repertório digital e de dados, e com profundidade no seu domínio.</p>
          <div class="fonte">Modelo autoral e síntese editorial. O ciclo recomeça: aprender devolve você ao começo, mais preparado. É esse modelo que organiza o <a href="{{ '/bbdw/diagnostico/' | relative_url }}">diagnóstico</a>.</div></figcaption>
      </figure>
    </div>
  </section>

  <section class="parte" id="ia">
    <div class="olho">06</div>
    <h2>A tecnologia como repertório</h2>
    <div class="slides">
      <figure class="slide rv">
        <img src="{{ '/bbdw/assets/slides/slide-11.jpg' | relative_url }}" alt="Slide 11: Cada capacidade humana usa a IA de três jeitos" loading="lazy" width="1200" height="675">
        <figcaption class="leg"><div class="n">Slide 11</div><h3>Cada capacidade humana usa a IA de três jeitos.</h3>
          <p>IA conduz, IA colabora, humano conduz. Julgamento cognitivo, inteligência social, síntese criativa e autoliderança, cada uma ligada a um movimento.</p>
          <div class="fonte">Adaptado de LinkedIn Learning, Human Skills in the Age of AI (abr/2026; página atualizada em set/2026). Tradução livre e resumida. Correspondência com os movimentos: interpretação autoral.</div></figcaption>
      </figure>
    </div>
  </section>

  <section class="parte" id="sozinha">
    <div class="olho">07</div>
    <h2>Sozinha, cada competência falha</h2>
    <div class="slides">
      <figure class="slide rv">
        <img src="{{ '/bbdw/assets/slides/slide-12.jpg' | relative_url }}" alt="Slide 12: Sozinha, cada competência falha" loading="lazy" width="1200" height="675">
        <figcaption class="leg"><div class="n">Slide 12</div><h3>Por que a combinação importa.</h3>
          <p>Ler sem Mobilizar: diagnóstico certo que ninguém executa. Mobilizar sem Ler: todos alinhados na direção errada. Criar sem Conectar: boa solução que quebra outra área. Conectar sem Criar: mapa perfeito, nenhuma saída. Dados sem julgamento: automatizar o erro, só que mais rápido. Profundidade sem Aprender: especialista num problema que já mudou.</p>
          <div class="fonte">Interpretação autoral.</div></figcaption>
      </figure>
    </div>
  </section>

  <section class="parte" id="portas">
    <div class="olho">08</div>
    <h2>Abrir portas, progredir, se renovar</h2>
    <div class="slides">
      <figure class="slide rv">
        <img src="{{ '/bbdw/assets/slides/slide-13.jpg' | relative_url }}" alt="Slide 13: Abrir portas, progredir, se renovar" loading="lazy" width="1200" height="675">
        <figcaption class="leg"><div class="n">Slide 13</div><h3>Essenciais, habilitadoras e de adaptação.</h3>
          <p>Mais de 75% das ocupações nos EUA exigem as essenciais. As habilitadoras aparecem em ocupações com salário médio anual acima de US$ 83 mil. As de adaptação cresceram de 3 a 11 vezes desde 2022.</p>
          <div class="fonte">Adaptado de McKinsey Global Institute, Workforce in motion (set/2026), Exhibit 19. Dados dos EUA. Associação, não promessa: o estudo não mede quanto alguém ganha ao aprender uma competência.</div></figcaption>
      </figure>
      <figure class="slide rv">
        <img src="{{ '/bbdw/assets/slides/slide-14.jpg' | relative_url }}" alt="Slide 14: Onde as competências aparecem no mercado" loading="lazy" width="1200" height="675">
        <figcaption class="leg"><div class="n">Slide 14</div><h3>Onde as competências aparecem no mercado.</h3>
          <p>Mostra onde as competências aparecem, não quanto cada uma vale. Essenciais em quase tudo; habilitadoras em 15% a 60% das ocupações, quase todas no 80º percentil salarial ou acima; nicho em poucas ocupações.</p>
          <div class="fonte">Adaptado de McKinsey Global Institute, Workforce in motion (set/2026), Exhibit 20. Pontos digitalizados do original, aproximados; eixo vertical recortado. Não estima prêmio salarial.</div></figcaption>
      </figure>
    </div>
  </section>

  <section class="parte" id="superpower">
    <div class="olho">09</div>
    <h2>Superpower Worker</h2>
    <div class="slides">
      <figure class="slide rv">
        <img src="{{ '/bbdw/assets/slides/slide-15.jpg' | relative_url }}" alt="Slide 15: Superpower Worker" loading="lazy" width="1200" height="675">
        <figcaption class="leg"><div class="n">Slide 15</div><h3>Quem consegue montar, diante de um problema real, a combinação de competências que ele exige.</h3>
          <p>Inclusive as que estão em outras pessoas e em ferramentas. Não exige saber tudo, trabalhar sem limite ou dominar todas as ferramentas. Profundidade, julgamento, colaboração, aprendizagem.</p>
          <div class="fonte">Definição autoral.</div></figcaption>
      </figure>
    </div>
  </section>

</div>

<section class="sec escura seis ctx-escuro" id="seis" style="margin-top:50px">
  <div class="wrap">
    <div class="olho">10 · Hybrid Skills na prática</div>
    <h2 class="tit larga rv">Seis perguntas para destravar um problema</h2>
    <p class="lead rv">Antes de acelerar a execução, amplie o seu olhar. Competência aparece nas perguntas que você faz e nas decisões que toma.</p>
    <div class="grade g3 rv" style="margin-top:36px">
      <div class="cartao"><div class="cod">01 · Ler</div><h3>Se eu entregar exatamente o que foi pedido, o problema estará resolvido?</h3></div>
      <div class="cartao"><div class="cod">02 · Conectar</div><h3>Ao melhorar o resultado da minha área, que problema posso criar para outra?</h3></div>
      <div class="cartao"><div class="cod">03 · Criar</div><h3>Que teste pequeno pode revelar uma solução que ainda não consideramos?</h3></div>
      <div class="cartao"><div class="cod">04 · Mobilizar</div><h3>Quem precisa construir esta solução comigo para que ela saia do papel?</h3></div>
      <div class="cartao"><div class="cod">05 · Aprender</div><h3>O que aconteceu que contraria minha hipótese, e o que vou mudar por isso?</h3></div>
      <div class="cartao"><div class="cod">06 · Dados e IA</div><h3>Que evidência me faria mudar de ideia, e como vou validar o que a IA trouxe?</h3></div>
    </div>
    <div class="botoes rv">
      <a class="bt bt-1" href="{{ '/bbdw/diagnostico/' | relative_url }}">Descobrir qual pergunta é a minha agora</a>
    </div>
  </div>
</section>

<div class="wrap">
  <section class="parte" id="humanas">
    <div class="olho">11</div>
    <h2>Quatro capacidades humanas para ampliar possibilidades</h2>
    <div class="slides">
      <figure class="slide rv">
        <img src="{{ '/bbdw/assets/slides/slide-17.jpg' | relative_url }}" alt="Slide 17: Quatro capacidades humanas" loading="lazy" width="1200" height="675">
        <figcaption class="leg"><div class="n">Slide 17</div><h3>Intuição, insight, imaginação e invenção.</h3>
          <p>Perceber sinais sutis e formular hipóteses; conectar informações ao contexto; imaginar futuros possíveis; transformar uma possibilidade em algo concreto. A IA amplia o repertório. Você dá direção, contexto e responsabilidade.</p></figcaption>
      </figure>
    </div>
  </section>

  <section class="parte" id="referencias" style="padding-bottom:80px">
    <div class="olho">12 · Apêndice</div>
    <h2>Quatro referências, competências que convergem</h2>
    <div class="slides">
      <figure class="slide rv">
        <img src="{{ '/bbdw/assets/slides/slide-18.jpg' | relative_url }}" alt="Slide 18: Quatro referências, competências que convergem" loading="lazy" width="1200" height="675">
        <figcaption class="leg"><div class="n">Slide 18</div><h3>Correspondências interpretadas à luz dos movimentos desta palestra.</h3>
          <p>Termos traduzidos livremente. “Não explícito” significa que o movimento não aparece com esse nome no recorte consultado.</p></figcaption>
      </figure>
    </div>
    <div class="refs rv">
      <div><div><b>Stifterverband · Future Skills 2030</b><p>Dezembro de 2025; edição em inglês em fevereiro de 2026. Licença CC BY-SA 4.0.</p></div><a href="https://www.stifterverband.org" target="_blank" rel="noopener">stifterverband.org ↗</a></div>
      <div><div><b>LinkedIn Learning · Human Skills in the Age of AI</b><p>Divulgado em abril de 2026; página atualizada em setembro de 2026.</p></div><a href="https://learning.linkedin.com" target="_blank" rel="noopener">learning.linkedin.com ↗</a></div>
      <div><div><b>McKinsey Global Institute · Workforce in motion</b><p>29 de setembro de 2026. Exhibits 19, 20 e 21.</p></div><a href="https://www.mckinsey.com/mgi" target="_blank" rel="noopener">mckinsey.com/mgi ↗</a></div>
      <div><div><b>McKinsey &amp; Company · HR Monitor 2026</b><p>Junho de 2026. Exhibit 1.</p></div><a href="https://www.mckinsey.com" target="_blank" rel="noopener">mckinsey.com ↗</a></div>
    </div>
    <div class="nota">Os links levam às páginas dos editores, não a cópias dos relatórios. Nenhuma das organizações citadas endossa esta palestra ou o diagnóstico.</div>
  </section>
</div>
