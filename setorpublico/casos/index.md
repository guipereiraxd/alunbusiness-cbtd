---
title: "Casos de uso"
description: "Biblioteca de casos reais de IA no setor público brasileiro e internacional — com problema, solução, impacto, governança e aprendizados."
---

<div class="wrap">
  <div class="page-head">
    <div class="crumb"><a href="{{ '/setorpublico/' | relative_url }}">Início</a> / Casos de uso</div>
    <h1>Biblioteca de casos</h1>
    <p class="lede">Um catálogo de evidências: aplicações concretas, resultados, riscos e aprendizados de iniciativas de IA no setor público. Filtre por área, esfera, risco ou estágio — ou salve seus favoritos para consultar depois.</p>
  </div>

  <div class="lib-toolbar" role="search" aria-label="Buscar casos">
    <div class="lib-search">
      <svg class="ic" aria-hidden="true"><use href="#i-search"></use></svg>
      <input id="c-search" type="search" placeholder="Buscar por caso, órgão, tecnologia…" aria-label="Buscar casos">
    </div>
    <div class="lib-tools">
      <span class="lib-chip"><select id="c-area" aria-label="Filtrar por área"><option value="">Todas as áreas</option><option>Atendimento ao cidadão</option><option>Processos administrativos</option><option>Compras e contratos</option><option>Controle e auditoria</option><option>Formulação de políticas</option><option>Gestão de pessoas</option></select></span>
      <span class="lib-chip"><select id="c-esfera" aria-label="Filtrar por esfera"><option value="">Esfera</option><option>Federal</option><option>Estadual</option><option>Municipal</option><option>Nacional</option></select></span>
      <span class="lib-chip"><select id="c-status" aria-label="Filtrar por estágio"><option value="">Estágio</option><option>Em produção</option><option>Em experimentação</option><option>Em desenvolvimento</option></select></span>
      <span class="lib-chip"><select id="c-sort" aria-label="Ordenar"><option value="alpha">A → Z</option><option value="alpha-z">Z → A</option><option value="area">Por área</option></select></span>
      <button id="c-fav" class="lib-chip" type="button" aria-pressed="false">★ Favoritos</button>
      <span class="lib-view" role="group" aria-label="Modo de visualização">
        <button id="c-vg" class="on" type="button" aria-label="Grade" title="Grade">▦</button>
        <button id="c-vl" type="button" aria-label="Lista" title="Lista">☰</button>
      </span>
    </div>
  </div>

  <div id="c-active" class="lib-active" aria-live="polite"></div>
  <div id="c-count" class="lib-counter"></div>

  <div id="c-list" class="lib-grid">
    {% for c in site.casos %}{% capture txt %}{{ c.title }} {{ c.resumo }} {{ c.tags | join: ' ' }} {{ c.organizacao }} {{ c.tecnologia }}{% endcapture %}
    <a class="lcard caso-card" href="{{ c.url | relative_url }}"
       data-area="{{ c.area | escape }}" data-esfera="{{ c.esfera | escape }}"
       data-status="{{ c.status | escape }}"
       data-url="{{ c.url | relative_url }}"
       data-title="{{ c.title | escape }}"
       data-text="{{ txt | strip_newlines | downcase | escape }}">
      <div class="top">
        <div class="badges">
          {% if c.status %}<span class="badge apr"><i></i>{{ c.status }}</span>{% endif %}
        </div>
        <button class="fav-star no-print" type="button" data-url="{{ c.url | relative_url }}" aria-label="Salvar {{ c.title | escape }} nos favoritos" title="Favoritar">★</button>
      </div>
      <div class="mid">
        <div class="org">{{ c.organizacao }}</div>
        <h3>{{ c.title }}</h3>
        <div class="area">{{ c.area }}</div>
        {% if c.principal_resultado %}
        <div class="result">
          <div class="k">Principal resultado</div>
          <div class="v">{{ c.principal_resultado }}</div>
        </div>
        {% endif %}
        <p class="desc">{{ c.resumo }}</p>
        <div class="cta">Ler o caso <span class="arw">→</span></div>
      </div>
    </a>
    {% endfor %}
  </div>
  <div id="c-empty" class="empty-state" style="margin-top:22px">Nenhum caso encontrado. <a href="#" id="c-clear">Limpar filtros</a>.</div>

  <div class="note" style="margin:38px 0 60px"><b>Modelo de conteúdo:</b> cada caso segue Identificação · Problema · Solução · Impacto · Governança · Aprendizados. Um novo caso é só duplicar um arquivo em <span class="mono">_casos</span>.</div>
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
  var fStatus = document.getElementById('c-status');
  var fSort = document.getElementById('c-sort');
  var favBtn = document.getElementById('c-fav');
  var vG = document.getElementById('c-vg');
  var vL = document.getElementById('c-vl');
  var active = document.getElementById('c-active');
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

  function renderActive(){
    var chips = [];
    if(fArea.value) chips.push({k:'area', l:'Área: '+fArea.value});
    if(fEsfera.value) chips.push({k:'esfera', l:'Esfera: '+fEsfera.value});
    if(fStatus.value) chips.push({k:'status', l:'Estágio: '+fStatus.value});
    if(search.value.trim()) chips.push({k:'search', l:'“'+search.value.trim()+'”'});
    if(favOnly) chips.push({k:'fav', l:'Favoritos'});
    active.innerHTML = '';
    if(!chips.length) return;
    var lbl=document.createElement('span'); lbl.className='actv'; lbl.textContent='Filtros ativos ·'; active.appendChild(lbl);
    chips.forEach(function(c){
      var b=document.createElement('button'); b.className='actg'; b.type='button';
      b.innerHTML=c.l+'<span class="x">×</span>'; b.setAttribute('data-k',c.k);
      b.addEventListener('click', function(){ clearOne(c.k); apply(); });
      active.appendChild(b);
    });
    var cl=document.createElement('button'); cl.className='clear'; cl.type='button'; cl.textContent='Limpar tudo';
    cl.addEventListener('click', function(){ clearAll(); apply(); }); active.appendChild(cl);
  }
  function clearOne(k){
    if(k==='area') fArea.value='';
    if(k==='esfera') fEsfera.value='';
    if(k==='status') fStatus.value='';
    if(k==='search') search.value='';
    if(k==='fav'){ favOnly=false; favBtn.classList.remove('on'); favBtn.setAttribute('aria-pressed','false'); }
  }
  function clearAll(){
    search.value=''; fArea.value=''; fEsfera.value=''; fStatus.value='';
    favOnly=false; favBtn.classList.remove('on'); favBtn.setAttribute('aria-pressed','false');
  }
  function sortCards(){
    var mode = fSort.value;
    var arr = cards.slice();
    if(mode==='alpha') arr.sort(function(a,b){return a.getAttribute('data-title').localeCompare(b.getAttribute('data-title'));});
    else if(mode==='alpha-z') arr.sort(function(a,b){return b.getAttribute('data-title').localeCompare(a.getAttribute('data-title'));});
    else if(mode==='area') arr.sort(function(a,b){return (a.getAttribute('data-area')||'').localeCompare(b.getAttribute('data-area')||'');});
    arr.forEach(function(el){ list.appendChild(el); });
  }
  function apply(){
    var q = norm(search.value).trim();
    var a = norm(fArea.value), e = norm(fEsfera.value), s = norm(fStatus.value);
    var shown = 0, total = cards.length;
    cards.forEach(function(card){
      var star = card.querySelector('.fav-star');
      var favok = !favOnly || (star && isFav(star.getAttribute('data-url')));
      var ok = favok &&
               has(norm(card.getAttribute('data-area')), a) &&
               has(norm(card.getAttribute('data-esfera')), e) &&
               has(norm(card.getAttribute('data-status')), s) &&
               (!q || norm(card.getAttribute('data-text')).indexOf(q) !== -1);
      card.style.display = ok ? '' : 'none';
      if(ok) shown++;
    });
    count.innerHTML = '<b>'+shown+'</b> de '+total+(shown===1?' caso':' casos');
    empty.style.display = shown ? 'none' : 'block';
    renderActive();
    sortCards();
  }

  [search, fArea, fEsfera, fStatus, fSort].forEach(function(el){
    el.addEventListener('input', apply); el.addEventListener('change', apply);
  });
  if(favBtn) favBtn.addEventListener('click', function(){
    favOnly = !favOnly; favBtn.classList.toggle('on', favOnly); favBtn.setAttribute('aria-pressed', favOnly); apply();
  });
  vG.addEventListener('click', function(){ list.classList.remove('list'); vG.classList.add('on'); vL.classList.remove('on'); });
  vL.addEventListener('click', function(){ list.classList.add('list'); vL.classList.add('on'); vG.classList.remove('on'); });

  var params = new URLSearchParams(location.search);
  var pa = params.get('area');
  if(pa){ for(var i=0;i<fArea.options.length;i++){ if(fArea.options[i].value === pa){ fArea.selectedIndex = i; break; } } }

  var clear = document.getElementById('c-clear');
  if(clear) clear.addEventListener('click', function(ev){ ev.preventDefault(); clearAll(); apply(); });

  apply();
})();
</script>
{% endraw %}
