---
title: "Casos de uso"
---

<div class="wrap">
  <div class="page-head">
    <div class="crumb"><a href="{{ '/setorpublico/' | relative_url }}">Início</a> / Casos de uso</div>
    <h1>Biblioteca de casos</h1>
    <p class="lede">[Aplicações concretas, resultados, riscos e aprendizados de iniciativas de IA no setor público.]</p>
  </div>

  <div class="filterbar" role="search" aria-label="Filtrar casos">
    <input type="search" placeholder="Buscar por palavra-chave…" disabled>
    <span class="fchip">Área ▾</span>
    <span class="fchip">Esfera ▾</span>
    <span class="fchip">Grau de risco ▾</span>
    <span class="fchip">Estágio ▾</span>
    <span class="filternote">Filtros interativos entram na Fase B — por ora, listagem completa abaixo.</span>
  </div>

  <div class="cards c3 rv" style="margin-top:18px">
    {% for c in site.casos %}
    <a class="card" href="{{ c.url | relative_url }}">
      <div class="card-k">{{ c.organizacao | default: "[Órgão]" }} · {{ c.area | default: "[Área]" }}</div>
      <h3>{{ c.title | default: "[Nome do caso]" }}</h3>
      <p>{{ c.resumo | default: "[Resumo do caso.]" }}</p>
      <span class="badge ris" style="margin-top:14px"><i></i>Risco: {{ c.grau_risco | default: "[grau]" }}</span>
    </a>
    {% endfor %}
  </div>

  <div class="note" style="margin-bottom:60px"><b>Modelo de conteúdo:</b> cada caso segue a estrutura Identificação · Problema · Solução · Impacto · Governança · Aprendizados · Status de qualidade. Os cartões acima vêm da coleção <span class="mono">_casos</span> — duplique um arquivo dessa pasta para adicionar um caso.</div>
</div>
