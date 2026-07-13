/* ═══════════════════════════════════════════════════════════════
   Motor de navegação — máquina de estados (tela × microetapa),
   roteamento por hash, teclado/clique, tela cheia e progresso.
   Fase 1 (fatia vertical): telas 1–3. Mapa/conceito = stub (Fase 2).
   ═══════════════════════════════════════════════════════════════ */
(function () {
  'use strict';

  var app = document.getElementById('app');
  var chrome = document.querySelector('.chrome');
  var progress = document.getElementById('progress');
  var btnFs = document.getElementById('btnFs');

  var DATA = null;
  var state = { view: 'landing', idx: 0, step: 0 };
  var renderedKey = null; // evita re-render ao só avançar microetapa

  /* ── Boot ─────────────────────────────────────────────────── */
  Promise.all([
    fetch('content/screens.json').then(function (r) { return r.json(); }),
    fetch('content/concepts.json').then(function (r) { return r.json(); })
  ]).then(function (res) {
    DATA = res[0];
    DATA.concepts = (res[1] && res[1].concepts) || [];
    route();
  }).catch(function (e) {
    app.innerHTML = Render.stub('Erro', 'Não foi possível carregar o conteúdo.');
    console.error('[deck] carregamento falhou:', e);
  });

  /* ── Roteamento por hash ──────────────────────────────────── */
  function parseHash() {
    var h = location.hash.replace(/^#\/?/, '');
    if (!h) return { view: 'landing' };
    var p = h.split('/');
    if (p[0] === 'tela') return { view: 'stage', idx: clampIdx((parseInt(p[1], 10) || 1) - 1), step: parseInt(p[2], 10) || 0 };
    if (p[0] === 'mapa') return { view: 'map' };
    if (p[0] === 'conceito') return { view: 'concept', id: p[1] };
    return { view: 'landing' };
  }

  function clampIdx(i) { return Math.max(0, Math.min(i, DATA.screens.length - 1)); }

  function route() {
    if (!DATA) return;
    pollOverride = {}; // avançar (clique/tecla) resume o fluxo dirigido pela microetapa
    stopThinking();
    var t = parseHash();
    state.view = t.view;

    if (t.view === 'stage') {
      state.idx = clampIdx(t.idx);
      var max = DATA.screens[state.idx].steps || 0;
      state.step = Math.max(0, Math.min(t.step, max));
      renderStage();
    } else if (t.view === 'map') {
      renderStatic(Render.map(DATA.concepts || []));
      initMap();
    } else if (t.view === 'concept') {
      var c = (DATA.concepts || []).filter(function (x) { return x.id === t.id; })[0];
      renderStatic(c ? Render.concept(c) : Render.stub('Conceito', 'Conceito não encontrado.'));
    } else {
      renderStatic(Render.landing(DATA.meta));
      initLanding();
    }
    updateChrome();
    updatePresenter();
  }

  /* ── Capa: cicla frases de "pensando" no indicador tipo LLM ── */
  var thinkingId = null;
  var THINKING_PHRASES = [
    'Analisando o gargalo…', 'Mapeando o loop…', 'Carregando contexto…',
    'Selecionando ferramentas…', 'Avaliando evidências…', 'Verificando com o harness…',
    'Compilando a resposta…', 'Preparando a apresentação…'
  ];
  function stopThinking() { if (thinkingId) { clearInterval(thinkingId); thinkingId = null; } }
  function initLanding() {
    var el = document.getElementById('thinkingText');
    if (!el) return;
    var i = 0;
    thinkingId = setInterval(function () {
      el.classList.add('fade');
      setTimeout(function () {
        i = (i + 1) % THINKING_PHRASES.length;
        el.textContent = THINKING_PHRASES[i];
        el.classList.remove('fade');
      }, 350);
    }, 2600);
  }

  window.addEventListener('hashchange', route);

  /* ── Render ───────────────────────────────────────────────── */
  var firstRender = true;
  // Crossfade suave ao trocar de tela; instantâneo na primeira renderização
  // e não usado para avanços de microetapa dentro da mesma tela.
  function swap(fn) {
    if (firstRender) { firstRender = false; fn(); return; }
    app.classList.add('fading');
    setTimeout(function () {
      fn();
      void app.offsetWidth;
      app.classList.remove('fading');
    }, 220);
  }

  function renderStatic(html) {
    swap(function () {
      document.body.dataset.view = state.view;
      app.innerHTML = html;
      renderedKey = null;
    });
  }

  function renderStage() {
    var s = DATA.screens[state.idx];
    var key = 'stage:' + state.idx;
    if (renderedKey !== key) {
      swap(function () {
        document.body.dataset.view = 'stage';
        app.innerHTML = Render.screen(s);
        renderedKey = key;
        applyReveals();
        applyPollState();
        renderPollQRs();
      });
      return;
    }
    document.body.dataset.view = 'stage';
    applyReveals();
    applyPollState();
    renderPollQRs();
  }

  /* ── QR nativo dos links de voto ──────────────────────────── */
  function voteUrl(id) {
    var base = location.pathname.replace(/index\.html$/, '').replace(/\/$/, '');
    return location.origin + base + '/votar/?p=' + encodeURIComponent(id);
  }
  function renderPollQRs() {
    if (!window.qrcode) return;
    var poll = currentPoll();
    if (!poll) return;
    var url = voteUrl(poll.id);
    app.querySelectorAll('.poll .qr').forEach(function (q) {
      if (q.querySelector('svg')) return; // já gerado
      try {
        var qr = qrcode(0, 'M');
        qr.addData(url);
        qr.make();
        q.classList.add('qr-real');
        q.innerHTML = qr.createSvgTag({ scalable: true, margin: 2, cellSize: 4, alt: 'QR para votar' });
      } catch (e) { console.warn('[qr]', e); }
    });
  }

  /* ── Enquetes (Fase 3) — ao vivo (Firestore) ou demo ──────── */
  var pollStates = {}; // pollId -> 'closed' | 'open' | 'revealed'
  var pollCounts = {}; // pollId -> contador simulado (modo demo)
  var liveCounts = {}; // pollId -> [contagens por opção] (ao vivo)
  var liveTotal = {};  // pollId -> total (ao vivo)
  var simId = null, simPoll = null;
  var pollSub = null;  // { id, unsub }
  var forceDemo = false;
  var pollOverride = {}; // pollId -> estado forçado pelo apresentador (P/R); limpo ao avançar

  function liveOn() { return !forceDemo && window.PollsLive && PollsLive.available(); }
  // Estado da enquete dirigido pela microetapa (clique). P/R sobrepõem até o próximo avanço.
  function derivePollState(poll) {
    if (pollOverride[poll.id]) return pollOverride[poll.id];
    var s = state.step;
    if (poll.pollRevealStep != null && s >= poll.pollRevealStep) return 'revealed';
    if (poll.pollOpenStep != null && s >= poll.pollOpenStep) return 'open';
    return 'closed';
  }
  function setCounts(id, n) {
    app.querySelectorAll('.poll[data-poll-id="' + id + '"] .poll-count').forEach(function (c) { c.textContent = n; });
  }
  function currentPoll() {
    return (state.view === 'stage' && DATA.screens[state.idx]) ? DATA.screens[state.idx].poll : null;
  }
  function stopSim() { if (simId) { clearInterval(simId); simId = null; simPoll = null; } }
  function startSim(id) {
    if (simId && simPoll === id) return;
    stopSim(); simPoll = id;
    if (pollCounts[id] == null) pollCounts[id] = 0;
    simId = setInterval(function () {
      pollCounts[id] += Math.floor(Math.random() * 5) + 1;
      setCounts(id, pollCounts[id]);
      updatePresenter();
    }, 320);
  }
  function clearSub() { if (pollSub && pollSub.unsub) pollSub.unsub(); pollSub = null; }
  function ensureSub(poll) {
    if (!liveOn()) return;
    if (pollSub && pollSub.id === poll.id) return;
    clearSub();
    pollSub = { id: poll.id, unsub: PollsLive.subscribe(poll.id, poll.options.length, function (counts, total) {
      liveCounts[poll.id] = counts; liveTotal[poll.id] = total;
      setCounts(poll.id, total);
      var el = app.querySelector('.poll[data-poll-id="' + poll.id + '"]');
      if (el && (pollStates[poll.id] || 'closed') === 'revealed') fillBars(el, counts);
      updatePresenter();
    }) };
  }
  function fillBars(el, counts) {
    counts = counts || [];
    var sum = counts.reduce(function (a, b) { return a + b; }, 0);
    var max = counts.length ? Math.max.apply(null, counts) : 0;
    el.querySelectorAll('.bar').forEach(function (bar) {
      var i = +bar.getAttribute('data-i');
      var v = counts[i] || 0;
      var pct = sum ? Math.round(v / sum * 100) : 0;
      bar.classList.toggle('top', v === max && v > 0);
      var fill = bar.querySelector('.bar-fill');
      bar.querySelector('.bar-pct').textContent = pct + '%';
      requestAnimationFrame(function () { fill.style.width = pct + '%'; });
    });
  }
  function applyPollState() {
    var el = app.querySelector('.poll');
    if (!el) { stopSim(); clearSub(); return; }
    var id = el.getAttribute('data-poll-id');
    var poll = DATA.screens[state.idx].poll;
    var st = derivePollState(poll);
    pollStates[id] = st;
    var live = liveOn();
    el.setAttribute('data-state', st);
    setCounts(id, live ? (liveTotal[id] || 0) : (pollCounts[id] || 0));

    if (st === 'open') {
      if (live) { ensureSub(poll); stopSim(); }
      else { clearSub(); startSim(id); }
    } else if (st === 'revealed') {
      // mantém a assinatura ao vivo p/ quem chega atrasado atualizar as barras
      if (live) { ensureSub(poll); fillBars(el, liveCounts[id] || []); }
      else { clearSub(); stopSim(); fillBars(el, poll.demo); }
    } else { // closed
      stopSim(); clearSub();
    }
  }
  function togglePoll() {
    var p = currentPoll(); if (!p) return;
    pollOverride[p.id] = (pollStates[p.id] === 'open') ? 'closed' : 'open';
    applyPollState(); updatePresenter();
  }
  function revealPoll() {
    var p = currentPoll(); if (!p) return;
    pollOverride[p.id] = 'revealed';
    applyPollState(); updatePresenter();
  }
  function toggleDemo() { forceDemo = !forceDemo; applyPollState(); updatePresenter(); }
  function exportPoll() {
    var p = currentPoll(); if (!p) return;
    var live = liveOn();
    var counts = live ? (liveCounts[p.id] || []) : (p.demo || []);
    var data = {
      pollId: p.id, prompt: p.prompt, source: live ? 'firestore' : 'demo',
      exportedAt: new Date().toISOString(),
      results: p.options.map(function (o, i) { return { option: o, votes: counts[i] || 0 }; })
    };
    var blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    var a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = 'enquete-' + p.id + '.json';
    a.click();
  }

  /* ── Modo apresentador (overlay: N) ───────────────────────── */
  var presenterEl = null;
  var startTime = Date.now();
  function esc(s) {
    return String(s == null ? '' : s).replace(/[&<>]/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;' }[c];
    });
  }
  function fmt(ms) {
    var s = Math.floor(ms / 1000), m = Math.floor(s / 60);
    s = s % 60;
    return (m < 10 ? '0' : '') + m + ':' + (s < 10 ? '0' : '') + s;
  }
  function buildPresenter() {
    presenterEl = document.createElement('div');
    presenterEl.className = 'presenter';
    presenterEl.hidden = true;
    presenterEl.addEventListener('click', function (e) {
      if (e.target.closest('.pr-close')) togglePresenter();
      else if (e.target.closest('.pr-export')) exportPoll();
    });
    document.body.appendChild(presenterEl);
  }
  function togglePresenter() {
    if (!presenterEl) return;
    presenterEl.hidden = !presenterEl.hidden;
    updatePresenter();
  }
  function updatePresenter() {
    if (!presenterEl || presenterEl.hidden) return;
    var cur = DATA.screens[state.idx], nxt = DATA.screens[state.idx + 1];
    var p = currentPoll();
    var elapsed = Date.now() - startTime, mins = elapsed / 60000;
    var alert = mins >= 10 ? 'over' : mins >= 9 ? 'warn' : mins >= 8 ? 'soon' : mins >= 5 ? 'half' : '';
    var pos = state.view === 'stage'
      ? 'Tela ' + (state.idx + 1) + '/' + DATA.screens.length + ' · etapa ' + state.step
      : state.view;
    var live = liveOn();
    var pollCnt = p ? (live ? (liveTotal[p.id] || 0) : (pollCounts[p.id] || 0)) : 0;
    var pollBox = p
      ? '<div class="pr-poll"><span class="pr-lbl">Enquete · ' + (live ? 'AO VIVO' : 'demo') + '</span>' +
        'Estado: <b>' + (pollStates[p.id] || 'closed') + '</b> · ' + pollCnt + ' respostas' +
        '<span class="pr-hint">P abrir/fechar · R revelar · D alterna demo/ao vivo</span>' +
        '<button class="pr-export" data-block>Exportar JSON</button></div>'
      : '';
    presenterEl.innerHTML =
      '<div class="pr-top">' +
        '<span class="pr-timer ' + alert + '">' + fmt(elapsed) + '</span>' +
        '<span class="pr-nav">' + esc(pos) + '</span>' +
        '<button class="pr-close" data-block>N · fechar</button>' +
      '</div>' +
      '<div class="pr-body">' +
        '<div class="pr-col">' +
          '<span class="pr-lbl">Agora</span>' +
          '<div class="pr-now">' + (cur ? esc(cur.kicker) + '<p>' + esc(cur.insight) + '</p>' : '—') + '</div>' +
          '<span class="pr-lbl">Notas de fala</span>' +
          '<p class="pr-notes">' + (cur && cur.speakerNotes ? esc(cur.speakerNotes) : '—') + '</p>' +
        '</div>' +
        '<div class="pr-col">' +
          '<span class="pr-lbl">Próximo</span>' +
          '<div class="pr-next">' + (nxt ? esc(nxt.kicker) + '<p>' + esc(nxt.insight) + '</p>' : 'Fim → mapa explorável') + '</div>' +
          pollBox +
          '<p class="pr-shortcuts">→ espaço avança · ← volta · F tela cheia · M mapa</p>' +
        '</div>' +
      '</div>';
  }
  buildPresenter();
  setInterval(updatePresenter, 1000);

  // Mostra elementos cuja microetapa alvo já foi atingida
  function applyReveals() {
    app.querySelectorAll('[data-reveal]').forEach(function (el) {
      el.classList.toggle('shown', state.step >= parseInt(el.getAttribute('data-reveal'), 10));
    });
    app.querySelectorAll('[data-active-at]').forEach(function (el) {
      var on = state.step >= parseInt(el.getAttribute('data-active-at'), 10);
      el.classList.toggle('active', on);
      el.classList.toggle('pulse', on); // .q-10x ganha o brilho pulsante
    });
  }

  /* ── Mapa: seções por categoria + busca + filtro ──────────── */
  function initMap() {
    var wrap = document.getElementById('mapSections');
    var search = document.getElementById('mapSearch');
    var empty = document.getElementById('mapEmpty');
    var chips = app.querySelectorAll('.mapchip');
    if (!wrap) return;
    var theme = 'all';

    function apply() {
      var q = (search && search.value || '').toLowerCase().trim();
      var anyVisible = false;
      wrap.querySelectorAll('.mapv-section').forEach(function (section) {
        var themeOk = theme === 'all' || theme === section.getAttribute('data-cat');
        var cards = section.querySelectorAll('.mapcard');
        var shown = 0;
        cards.forEach(function (card) {
          var vis = !q || card.getAttribute('data-text').indexOf(q) >= 0;
          card.hidden = !vis;
          if (vis) shown++;
        });
        // Seções ainda sem conteúdo (placeholder "Em breve") somem durante
        // busca ativa — nada ali para encontrar — mas aparecem ao navegar.
        var sectionVisible = themeOk && (cards.length ? shown > 0 : !q);
        section.hidden = !sectionVisible;
        if (sectionVisible) anyVisible = true;
      });
      if (empty) empty.hidden = anyVisible;
    }

    if (search) search.addEventListener('input', apply);
    chips.forEach(function (ch) {
      ch.addEventListener('click', function () {
        chips.forEach(function (c) { c.classList.remove('on'); });
        ch.classList.add('on');
        theme = ch.getAttribute('data-theme');
        apply();
      });
    });
    apply();
  }

  /* ── Navegação ────────────────────────────────────────────── */
  function go(view, idx, step) {
    if (view === 'stage') location.hash = '#/tela/' + (idx + 1) + '/' + step;
    else if (view === 'map') location.hash = '#/mapa';
    else location.hash = '#/';
  }

  function next() {
    if (state.view === 'landing') { go('stage', 0, 0); return; }
    if (state.view !== 'stage') return;
    var s = DATA.screens[state.idx];
    if (state.step < (s.steps || 0)) { go('stage', state.idx, state.step + 1); }
    else if (state.idx < DATA.screens.length - 1) { go('stage', state.idx + 1, 0); }
    else { go('stage', 0, 0); } // fim → retoma o cronograma para as palestras
  }

  function prev() {
    if (state.view !== 'stage') return;
    if (state.step > 0) { go('stage', state.idx, state.step - 1); }
    else if (state.idx > 0) {
      var prevScreen = DATA.screens[state.idx - 1];
      go('stage', state.idx - 1, prevScreen.steps || 0);
    } else { go('landing'); }
  }

  /* ── Chrome: progresso + botão ────────────────────────────── */
  function updateChrome() {
    var isStage = state.view === 'stage';
    var isLanding = state.view === 'landing';
    // O botão de tela cheia aparece na capa e no palco; a barra de
    // progresso só faz sentido durante a apresentação em si.
    chrome.hidden = !(isStage || isLanding);
    if (progress) progress.style.display = isStage ? '' : 'none';
    if (isStage) {
      var totalSteps = DATA.screens.reduce(function (a, s) { return a + (s.steps || 0) + 1; }, 0);
      var done = 0;
      for (var i = 0; i < state.idx; i++) done += (DATA.screens[i].steps || 0) + 1;
      done += state.step + 1;
      progress.style.width = (done / totalSteps * 100).toFixed(1) + '%';
    }
  }

  /* ── Tela cheia ───────────────────────────────────────────── */
  function toggleFs() {
    if (!document.fullscreenElement) {
      (document.documentElement.requestFullscreen || function () {}).call(document.documentElement);
    } else {
      (document.exitFullscreen || function () {}).call(document);
    }
  }
  if (btnFs) btnFs.addEventListener('click', function (e) { e.stopPropagation(); toggleFs(); });

  /* ── Teclado ──────────────────────────────────────────────── */
  document.addEventListener('keydown', function (e) {
    if (e.target.matches('input, textarea, select')) return; // não navegar ao digitar
    switch (e.key) {
      case 'ArrowRight': case 'PageDown': case ' ': case 'Spacebar':
        e.preventDefault(); next(); break;
      case 'ArrowLeft': case 'PageUp': case 'Backspace':
        e.preventDefault(); prev(); break;
      case 'f': case 'F': toggleFs(); break;
      case 'm': case 'M': go('map'); break;
      case 'p': case 'P': togglePoll(); break;
      case 'r': case 'R': revealPoll(); break;
      case 'd': case 'D': toggleDemo(); break;
      case 'n': case 'N': togglePresenter(); break;
      case 'Home': go('landing'); break;
    }
  });

  /* ── Clique no fundo avança (elementos interativos bloqueiam) ── */
  app.addEventListener('click', function (e) {
    if (e.target.closest('a, button, .poll-cta, input, [data-block]')) return;
    if (state.view === 'stage' || state.view === 'landing') { next(); }
  });

  /* ── Esconder cursor por inatividade (só no palco) ────────── */
  var cursorTimer;
  function pokeCursor() {
    document.body.classList.remove('cursor-hidden');
    clearTimeout(cursorTimer);
    if (state.view === 'stage') {
      cursorTimer = setTimeout(function () { document.body.classList.add('cursor-hidden'); }, 2600);
    }
  }
  document.addEventListener('mousemove', pokeCursor);
  document.addEventListener('keydown', pokeCursor);
})();
