---
title: "Observatório"
---

<div class="wrap">
  <div class="page-head">
    <div class="crumb"><a href="{{ '/setorpublico/' | relative_url }}">Início</a> / Observatório</div>
    <h1>Observatório</h1>
    <p class="lede">[Casos, estudos, notícias, regulamentações, projetos de lei, guias, políticas, eventos e pesquisas — atualizados continuamente.]</p>
  </div>

  <div class="filterbar" role="search" aria-label="Filtrar conteúdo">
    <input type="search" placeholder="Buscar no observatório…" disabled>
    <span class="fchip">Tipo ▾</span>
    <span class="fchip">Tema ▾</span>
    <span class="fchip">Área ▾</span>
    <span class="filternote">Feed e filtros entram na Fase B — abaixo, a classificação prevista.</span>
  </div>

  <section class="blk" style="border-bottom:0;padding-top:34px">
    <div class="sk">Publicações · {{ site.observatorio | size }}</div>
    <h2>O que está no radar</h2>
    <div class="cards c2 rv">
      {% assign itens = site.observatorio | sort: "data" | reverse %}
      {% for item in itens %}
      <a class="card" href="{{ item.url | relative_url }}">
        <div class="card-k">{{ item.tipo }}{% if item.escopo %} · {{ item.escopo }}{% endif %}</div>
        <h3>{{ item.title }}</h3>
        <p>{{ item.resumo | strip_html | truncate: 150 }}</p>
        <span class="go">Ler <svg width="14" height="14"><use href="#i-arrow"></use></svg></span>
      </a>
      {% endfor %}
    </div>
  </section>

  <section class="blk" style="border-bottom:0;padding-top:34px">
    <div class="sk">Classificação obrigatória</div>
    <h2>Como cada item é etiquetado</h2>
    <div class="cards auto rv">
      <div class="card"><span class="badge gov"><i></i>Norma vigente</span></div>
      <div class="card"><span class="badge ris"><i></i>Projeto de norma</span></div>
      <div class="card"><span class="badge via"><i></i>Orientação</span></div>
      <div class="card"><span class="badge val"><i></i>Boa prática</span></div>
      <div class="card"><span class="badge apr"><i></i>Caso</span></div>
      <div class="card"><span class="badge apr"><i></i>Pesquisa</span></div>
      <div class="card"><span class="badge via"><i></i>Opinião</span></div>
      <div class="card"><span class="badge val"><i></i>Evento</span></div>
      <div class="card"><span class="badge apr"><i></i>Conteúdo educacional</span></div>
    </div>
    <div class="note"><b>Metadados de cada item:</b> título · resumo · fonte · data de publicação · atualização · localidade · tema · área · público · grau de relevância · link externo.</div>
  </section>
</div>
