---
title: "Palestras"
description: "Materiais das palestras da Alun Business sobre IA no setor público — apresentações completas, disponíveis para download e uso em discussões internas."
---

<style>
  .talk{background:var(--paper);border:1px solid var(--line);border-radius:16px;overflow:hidden;
    display:grid;grid-template-columns:1.35fr 1fr;gap:0;margin-top:26px}
  @media(max-width:860px){ .talk{grid-template-columns:1fr} }
  .talk-main{padding:32px 34px 34px;display:flex;flex-direction:column;gap:14px;min-width:0}
  .talk-ev{font-family:var(--mono);font-size:10.5px;letter-spacing:.16em;text-transform:uppercase;color:var(--brand-p);
    display:inline-flex;align-items:center;gap:9px}
  .talk-ev::before{content:"";width:20px;height:1px;background:var(--brand-p)}
  .talk h2{font-family:var(--disp);font-weight:600;font-size:30px;line-height:1.12;letter-spacing:-.015em;
    color:var(--ink);margin:0}
  .talk .sub{color:var(--tx2);font-size:16px;line-height:1.5;margin:0}
  .talk .desc{color:var(--tx2);font-size:14.5px;line-height:1.65;margin:0}
  .talk-meta{display:flex;flex-wrap:wrap;gap:8px;margin-top:2px}
  .talk-meta span{font-family:var(--mono);font-size:10.5px;letter-spacing:.06em;color:var(--tx2);
    border:1px solid var(--line2);background:var(--panel);border-radius:999px;padding:5px 11px}
  .talk-actions{display:flex;flex-wrap:wrap;gap:10px;margin-top:8px}

  .talk-side{background:linear-gradient(150deg,var(--panel) 0%,var(--tint-p) 100%);
    border-left:1px solid var(--line);padding:32px 30px;display:flex;flex-direction:column;justify-content:center;gap:18px}
  @media(max-width:860px){ .talk-side{border-left:0;border-top:1px solid var(--line)} }
  .talk-side .k{font-family:var(--mono);font-size:10px;letter-spacing:.16em;text-transform:uppercase;color:var(--tx3)}
  .talk-stats{display:grid;grid-template-columns:1fr 1fr;gap:14px}
  .talk-stat .n{font-family:var(--disp);font-weight:600;font-size:30px;line-height:1;color:var(--ink);
    letter-spacing:-.02em;font-variant-numeric:tabular-nums}
  .talk-stat .l{font-family:var(--mono);font-size:10px;letter-spacing:.1em;text-transform:uppercase;
    color:var(--tx3);margin-top:5px;line-height:1.4}
  .talk-speaker{display:flex;align-items:center;gap:12px;padding-top:16px;border-top:1px solid var(--line)}
  .talk-speaker .av{width:38px;height:38px;border-radius:10px;background:var(--grad);color:#fff;
    display:grid;place-items:center;font-family:var(--disp);font-weight:700;font-size:15px;flex-shrink:0}
  .talk-speaker .nm{font-family:var(--disp);font-weight:600;font-size:14.5px;color:var(--ink);line-height:1.2}
  .talk-speaker .rl{font-size:12px;color:var(--tx3);margin-top:2px;line-height:1.35}
</style>

<div class="wrap">
  <div class="page-head">
    <div class="crumb"><a href="{{ '/setorpublico/' | relative_url }}">Início</a> / Palestras</div>
    <h1>Palestras e materiais</h1>
    <p class="lede">As apresentações que a Alun Business leva a eventos do setor público — completas, para download, e livres para circular na sua organização. Cada uma aponta para as seções do portal onde o tema é aprofundado.</p>
  </div>

  <section class="blk" style="border-bottom:0;padding-top:34px;padding-bottom:0">
    <div class="sk">Última apresentação</div>

    <article class="talk">
      <div class="talk-main">
        <div class="talk-ev">CONET Sul 2026</div>
        <h2>A nova era da transformação cognitiva</h2>
        <p class="sub">Impactos do uso de IA no setor público</p>
        <p class="desc">Por que os casos mais maduros de IA pública brasileira — PRODES/INPE desde 1988, SAEB/INEP, Alice/CGU desde 2014 — não nasceram da IA generativa, e o que isso ensina sobre o alicerce que qualquer órgão precisa antes de escalar: dados integrados, autonomia técnica e supervisão humana nas decisões que afetam pessoas.</p>
        <div class="talk-meta">
          <span>101 slides</span>
          <span>PDF · 7,2 MB</span>
          <span>Livre para uso interno</span>
        </div>
        <div class="talk-actions">
          <a class="btn btn-primary" href="{{ '/setorpublico/assets/Palestra-ConetSul2026.pdf' | relative_url }}" download>Baixar apresentação <svg width="16" height="16" aria-hidden="true"><use href="#i-arrow"></use></svg></a>
          <a class="btn btn-line" href="{{ '/setorpublico/casos/' | relative_url }}">Ver os casos citados</a>
        </div>
      </div>
      <div class="talk-side">
        <div class="k">O que sustenta a tese</div>
        <div class="talk-stats">
          <div class="talk-stat"><div class="n">{{ site.casos | size }}</div><div class="l">casos reais<br>catalogados</div></div>
          <div class="talk-stat"><div class="n">{{ site.observatorio | size }}</div><div class="l">pilares no<br>observatório</div></div>
        </div>
        <div class="talk-speaker">
          <span class="av">G</span>
          <div>
            <div class="nm">Guilherme Pereira</div>
            <div class="rl">Diretor de Inovação, Programas &amp; Experiências · Alun Business</div>
          </div>
        </div>
      </div>
    </article>
  </section>

  <section class="blk" style="border-bottom:0;padding-top:44px">
    <div class="sk">Do palco ao portal</div>
    <h2>Onde aprofundar cada tema</h2>
    <p class="lead">A apresentação abre as frentes; o portal é onde elas viram material de trabalho. Cada bloco da palestra tem uma continuação aqui.</p>
    <div class="cards c3 rv">
      <a class="card" href="{{ '/setorpublico/casos/' | relative_url }}">
        <div class="card-ic"><svg><use href="#i-cases"></use></svg></div>
        <div class="card-k">Evidência</div>
        <h3>Os casos por trás dos números</h3>
        <p>Alice, PRODES, SAEB, CIDACS e outros {{ site.casos | size }} casos — com problema, solução, impacto, governança e aprendizados.</p>
        <span class="go">Abrir biblioteca <svg width="14" height="14" aria-hidden="true"><use href="#i-arrow"></use></svg></span>
      </a>
      <a class="card" href="{{ '/setorpublico/diagnostico/' | relative_url }}">
        <div class="card-ic"><svg><use href="#i-gauge"></use></svg></div>
        <div class="card-k">Aplicação</div>
        <h3>Onde seu órgão está hoje</h3>
        <p>O diagnóstico de maturidade traduz a tese da palestra em nota, radar e recomendações — em 8 minutos, sem cadastro.</p>
        <span class="go">Fazer diagnóstico <svg width="14" height="14" aria-hidden="true"><use href="#i-arrow"></use></svg></span>
      </a>
      <a class="card" href="{{ '/setorpublico/governanca/' | relative_url }}">
        <div class="card-ic"><svg><use href="#i-shield"></use></svg></div>
        <div class="card-k">Alicerce</div>
        <h3>Supervisão humana na prática</h3>
        <p>O ciclo de vida da IA em cinco fases e quinze componentes — o que a palestra chama de alicerce, detalhado por etapa.</p>
        <span class="go">Ver governança <svg width="14" height="14" aria-hidden="true"><use href="#i-arrow"></use></svg></span>
      </a>
    </div>

    <div class="note" style="margin-top:26px"><b>Pode usar.</b> O material é livre para circular internamente na sua organização — em reuniões, comitês e formações. Se quiser a apresentação adaptada ao contexto do seu órgão, ou uma sessão ao vivo com a equipe, <a href="{{ '/setorpublico/contato/' | relative_url }}">fale com a Alun Business</a>.</div>
  </section>
</div>
