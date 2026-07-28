---
title: "Observatório"
---

<div class="wrap">
  <div class="page-head">
    <div class="crumb"><a href="{{ '/setorpublico/' | relative_url }}">Início</a> / Observatório</div>
    <h1>Observatório</h1>
    <p class="lede">Casos, estudos, notícias, regulamentações, projetos de lei, guias, políticas, eventos e pesquisas — atualizados continuamente.</p>
  </div>

  <div class="filterbar" role="search" aria-label="Filtrar o observatório">
    <input id="o-search" type="search" placeholder="Buscar no observatório…" aria-label="Buscar publicações">
    <select id="o-tipo" aria-label="Filtrar por tipo">
      <option value="">Todos os tipos</option>
      <option>Regulamentação</option>
      <option>Norma vigente</option>
      <option>Projeto de norma</option>
      <option>Orientação</option>
      <option>Boa prática</option>
      <option>Caso</option>
      <option>Pesquisa</option>
      <option>Opinião</option>
      <option>Evento</option>
      <option>Conteúdo educacional</option>
    </select>
    <span id="o-count" class="filternote"></span>
  </div>

  <section class="blk" style="border-bottom:0;padding-top:30px">
    <div class="sk">Publicações · {{ site.observatorio | size }}</div>
    <h2>O que está no radar</h2>
    <div id="o-list" class="cards c2 rv">
      {% assign itens = site.observatorio | sort: "data" | reverse %}
      {% for item in itens %}{% capture otxt %}{{ item.title }} {{ item.resumo }} {{ item.tema }} {{ item.area }} {{ item.fonte }}{% endcapture %}
      <a class="card obs-card" href="{{ item.url | relative_url }}"
         data-tipo="{{ item.tipo | escape }}" data-text="{{ otxt | strip_newlines | downcase | escape }}">
        <div class="card-k">{{ item.tipo }}{% if item.escopo %} · {{ item.escopo }}{% endif %}</div>
        <h3>{{ item.title }}</h3>
        <p>{{ item.resumo | strip_html | truncate: 150 }}</p>
        {% if item.tema or item.area or item.publico %}
        <div class="o-chips">
          {% if item.tema %}<span class="o-chip o-tema">{{ item.tema }}</span>{% endif %}
          {% if item.area %}<span class="o-chip o-area">{{ item.area }}</span>{% endif %}
          {% if item.publico %}<span class="o-chip o-publico">{{ item.publico | truncate: 40 }}</span>{% endif %}
        </div>
        {% endif %}
        <span class="go">Ler <svg width="14" height="14"><use href="#i-arrow"></use></svg></span>
      </a>
      {% endfor %}
    </div>
    <div id="o-empty" class="empty-state" role="status">
      <div class="es-ic"><svg><use href="#i-search"></use></svg></div>
      <p class="es-t">Nenhuma publicação encontrada</p>
      <p class="es-d">Ajuste os filtros ou tente uma busca mais ampla. O acervo é atualizado continuamente — novas publicações entram semanalmente.</p>
      <div class="es-actions">
        <a href="#" id="o-clear">Limpar filtros</a>
      </div>
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

{% raw %}
<script>
(function(){
  var list = document.getElementById('o-list');
  if(!list) return;
  var cards = [].slice.call(list.querySelectorAll('.obs-card'));
  var search = document.getElementById('o-search');
  var fTipo = document.getElementById('o-tipo');
  var count = document.getElementById('o-count');
  var empty = document.getElementById('o-empty');
  function norm(s){ return (s||'').toLowerCase(); }
  function apply(){
    var q = norm(search.value).trim(), t = norm(fTipo.value), shown = 0;
    cards.forEach(function(card){
      var ok = (!t || norm(card.getAttribute('data-tipo')).indexOf(t) !== -1) &&
               (!q || norm(card.getAttribute('data-text')).indexOf(q) !== -1);
      card.style.display = ok ? '' : 'none'; if(ok) shown++;
    });
    count.textContent = shown + (shown === 1 ? ' publicação' : ' publicações');
    empty.style.display = shown ? 'none' : 'block';
  }
  [search, fTipo].forEach(function(el){ el.addEventListener('input', apply); el.addEventListener('change', apply); });
  var clear = document.getElementById('o-clear');
  if(clear) clear.addEventListener('click', function(ev){ ev.preventDefault(); search.value=''; fTipo.value=''; apply(); });
  apply();
})();
</script>
{% endraw %}
