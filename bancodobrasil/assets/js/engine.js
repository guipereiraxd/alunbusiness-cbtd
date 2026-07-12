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
  fetch('content/screens.json')
    .then(function (r) { return r.json(); })
    .then(function (json) { DATA = json; route(); })
    .catch(function (e) {
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
    var t = parseHash();
    state.view = t.view;

    if (t.view === 'stage') {
      state.idx = clampIdx(t.idx);
      var max = DATA.screens[state.idx].steps || 0;
      state.step = Math.max(0, Math.min(t.step, max));
      renderStage();
    } else if (t.view === 'map') {
      renderStatic(Render.stub('Mapa explorável', 'O mapa de conceitos chega na Fase 2. Por enquanto, siga pela apresentação.'));
    } else if (t.view === 'concept') {
      renderStatic(Render.stub('Conceito', 'As páginas de conceito chegam na Fase 2.'));
    } else {
      renderStatic(Render.landing(DATA.meta));
    }
    updateChrome();
  }

  window.addEventListener('hashchange', route);

  /* ── Render ───────────────────────────────────────────────── */
  function renderStatic(html) {
    document.body.dataset.view = state.view;
    app.innerHTML = html;
    renderedKey = null;
  }

  function renderStage() {
    document.body.dataset.view = 'stage';
    var s = DATA.screens[state.idx];
    var key = 'stage:' + state.idx;
    if (renderedKey !== key) {
      app.innerHTML = Render.screen(s);
      renderedKey = key;
    }
    applyReveals();
  }

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
    else { go('map'); } // fim → mapa
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
    chrome.hidden = !isStage;
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
    switch (e.key) {
      case 'ArrowRight': case 'PageDown': case ' ': case 'Spacebar':
        e.preventDefault(); next(); break;
      case 'ArrowLeft': case 'PageUp': case 'Backspace':
        e.preventDefault(); prev(); break;
      case 'f': case 'F': toggleFs(); break;
      case 'm': case 'M': go('map'); break;
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
