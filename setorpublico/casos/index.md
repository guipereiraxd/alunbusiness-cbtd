---
title: "Casos de uso"
---

<div class="wrap">
  <div class="page-head">
    <div class="crumb"><a href="{{ '/setorpublico/' | relative_url }}">Início</a> / Casos de uso</div>
    <h1>Biblioteca de casos</h1>
    <p class="lede">Aplicações concretas, resultados, riscos e aprendizados de iniciativas de IA no setor público.</p>
  </div>

  <div class="filterbar" role="search" aria-label="Filtrar casos">
    <input id="c-search" type="search" placeholder="Buscar por palavra-chave…" aria-label="Buscar casos">
    <select id="c-area" aria-label="Filtrar por área">
      <option value="">Todas as áreas</option>
      <option>Atendimento ao cidadão</option>
      <option>Processos administrativos</option>
      <option>Compras e contratos</option>
      <option>Controle e auditoria</option>
      <option>Formulação de políticas</option>
      <option>Gestão de pessoas</option>
    </select>
    <select id="c-esfera" aria-label="Filtrar por esfera">
      <option value="">Todas as esferas</option>
      <option>Federal</option>
      <option>Estadual</option>
      <option>Municipal</option>
      <option>Nacional</option>
    </select>
    <select id="c-risco" aria-label="Filtrar por grau de risco">
      <option value="">Qualquer risco</option>
      <option>baixo</option>
      <option>médio</option>
      <option>alto</option>
    </select>
    <select id="c-status" aria-label="Filtrar por estágio">
      <option value="">Qualquer estágio</option>
      <option>Em produção</option>
      <option>Em experimentação</option>
      <option>Em desenvolvimento</option>
    </select>
    <button id="c-fav" class="fav-btn" type="button" aria-pressed="false">★ Favoritos</button>
    <span id="c-count" class="filternote"></span>
  </div>

  <div id="c-list" class="cards c3" style="margin-top:18px">
    {% for c in site.casos %}{% capture txt %}{{ c.title }} {{ c.resumo }} {{ c.tags | join: ' ' }} {{ c.organizacao }}{% endcapture %}
    <a class="card caso-card" href="{{ c.url | relative_url }}"
       data-area="{{ c.area | escape }}" data-esfera="{{ c.esfera | escape }}"
       data-risco="{{ c.grau_risco | escape }}" data-status="{{ c.status | escape }}"
       data-text="{{ txt | strip_newlines | downcase | escape }}">
      <button class="fav-star no-print" type="button" data-url="{{ c.url | relative_url }}" aria-label="Salvar nos favoritos" title="Salvar nos favoritos">★</button>
      <div class="card-k">{{ c.organizacao | default: "[Órgão]" }} · {{ c.area | default: "[Área]" }}</div>
      <h3>{{ c.title | default: "[Nome do caso]" }}</h3>
      <p>{{ c.resumo | default: "[Resumo do caso.]" }}</p>
      <span class="badge ris" style="margin-top:14px"><i></i>Risco: {{ c.grau_risco | default: "[grau]" }}</span>
    </a>
    {% endfor %}
  </div>
  <div id="c-empty" class="empty-state">Nenhum caso encontrado com esses filtros. <a href="#" id="c-clear">Limpar filtros</a>.</div>

  <div class="note" style="margin:26px 0 60px"><b>Modelo de conteúdo:</b> cada caso segue a estrutura Identificação · Problema · Solução · Impacto · Governança · Aprendizados · Status de qualidade. Os cartões vêm da coleção <span class="mono">_casos</span> — duplique um arquivo dessa pasta para adicionar um caso.</div>
</div>

{% raw %}
<script>
(function(){
  var list = document.getElementById('c-list');
  if(!list) return;
  var cards = [].slice.call(list.querySelectorAll('.caso-card'));
  var search = document.getElementById('c-search');
  var fArea = document.getElementById('c-area');
  var fEsfera = document.getElementById('c-esfera');
  var fRisco = document.getElementById('c-risco');
  var fStatus = document.getElementById('c-status');
  var favBtn = document.getElementById('c-fav');
  var count = document.getElementById('c-count');
  var empty = document.getElementById('c-empty');
  var FAV = 'sp_fav_casos', favOnly = false;

  function norm(s){ return (s||'').toLowerCase(); }
  function has(attr, sel){ return !sel || attr.indexOf(sel) !== -1; }
  function favs(){ try{ return JSON.parse(localStorage.getItem(FAV) || '[]'); }catch(e){ return []; } }
  function isFav(url){ return favs().indexOf(url) !== -1; }
  function toggleFav(url){ var f=favs(), i=f.indexOf(url); if(i===-1) f.push(url); else f.splice(i,1); try{ localStorage.setItem(FAV, JSON.stringify(f)); }catch(e){} }

  cards.forEach(function(card){
    var star = card.querySelector('.fav-star'); if(!star) return;
    var url = star.getAttribute('data-url');
    if(isFav(url)){ star.classList.add('on'); star.setAttribute('aria-pressed','true'); }
    star.addEventListener('click', function(ev){
      ev.preventDefault(); ev.stopPropagation();
      toggleFav(url);
      var on = isFav(url); star.classList.toggle('on', on); star.setAttribute('aria-pressed', on);
      if(favOnly) apply();
    });
  });

  function apply(){
    var q = norm(search.value).trim();
    var a = norm(fArea.value), e = norm(fEsfera.value), r = norm(fRisco.value), s = norm(fStatus.value);
    var shown = 0;
    cards.forEach(function(card){
      var star = card.querySelector('.fav-star');
      var favok = !favOnly || (star && isFav(star.getAttribute('data-url')));
      var ok = favok &&
               has(norm(card.getAttribute('data-area')), a) &&
               has(norm(card.getAttribute('data-esfera')), e) &&
               has(norm(card.getAttribute('data-risco')), r) &&
               has(norm(card.getAttribute('data-status')), s) &&
               (!q || norm(card.getAttribute('data-text')).indexOf(q) !== -1);
      card.style.display = ok ? '' : 'none';
      if(ok) shown++;
    });
    count.textContent = shown + (shown === 1 ? ' caso' : ' casos');
    empty.style.display = shown ? 'none' : 'block';
  }

  [search, fArea, fEsfera, fRisco, fStatus].forEach(function(el){
    el.addEventListener('input', apply); el.addEventListener('change', apply);
  });
  if(favBtn) favBtn.addEventListener('click', function(){
    favOnly = !favOnly; favBtn.classList.toggle('on', favOnly); favBtn.setAttribute('aria-pressed', favOnly); apply();
  });

  // pré-seleção via ?area= (vindo do mapa de oportunidades)
  var params = new URLSearchParams(location.search);
  var pa = params.get('area');
  if(pa){
    for(var i=0;i<fArea.options.length;i++){ if(fArea.options[i].value === pa){ fArea.selectedIndex = i; break; } }
  }

  var clear = document.getElementById('c-clear');
  if(clear) clear.addEventListener('click', function(ev){
    ev.preventDefault();
    search.value=''; fArea.value=''; fEsfera.value=''; fRisco.value=''; fStatus.value='';
    favOnly=false; if(favBtn){ favBtn.classList.remove('on'); favBtn.setAttribute('aria-pressed','false'); } apply();
  });

  apply();
})();
</script>
{% endraw %}
