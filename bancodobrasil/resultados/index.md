---
title: "Resultados"
---

<div class="bb-eyebrow"><span class="chevrons" aria-hidden="true"><i></i><i></i><i></i></span>Ao vivo</div>

<h1 class="bb-h1">Resultados das <span class="y">enquetes</span></h1>

<p class="bb-lede">Acompanhe aqui, em tempo real, os resultados das enquetes respondidas durante a apresentação.</p>

<div id="pollsWrap">
  <p style="color:var(--ink-3);">Carregando enquetes…</p>
</div>

<script src="/assets/firebase-config.js" onerror="/* sem config → aviso na tela */"></script>
<script src="https://www.gstatic.com/firebasejs/10.13.2/firebase-app-compat.js"></script>
<script src="https://www.gstatic.com/firebasejs/10.13.2/firebase-firestore-compat.js"></script>
<script src="{{ '/bancodobrasil/assets/js/polls-live.js' | relative_url }}"></script>

<script>
(function () {
  var wrap = document.getElementById('pollsWrap');

  function esc(s) {
    return String(s == null ? '' : s).replace(/[&<>]/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;' }[c];
    });
  }

  function renderBlock(poll) {
    var bars = poll.options.map(function (o, i) {
      return '<div class="bb-bar" data-i="' + i + '">' +
        '<div class="bb-bar-row"><span class="bb-bar-label">' + esc(o) + '</span><span class="bb-bar-pct">0%</span></div>' +
        '<div class="bb-bar-track"><div class="bb-bar-fill"></div></div></div>';
    }).join('');
    var el = document.createElement('div');
    el.className = 'bb-poll';
    el.innerHTML =
      '<div class="bb-poll-prompt">' + esc(poll.prompt) + '</div>' +
      '<div class="bb-poll-meta"><b class="bb-poll-total">0</b> respostas</div>' +
      '<div class="bb-poll-bars">' + bars + '</div>';
    return el;
  }

  function fillBars(el, counts) {
    counts = counts || [];
    var sum = counts.reduce(function (a, b) { return a + b; }, 0);
    var max = counts.length ? Math.max.apply(null, counts) : 0;
    el.querySelectorAll('.bb-bar').forEach(function (bar) {
      var i = +bar.getAttribute('data-i');
      var v = counts[i] || 0;
      var pct = sum ? Math.round(v / sum * 100) : 0;
      bar.classList.toggle('top', v === max && v > 0);
      var fill = bar.querySelector('.bb-bar-fill');
      bar.querySelector('.bb-bar-pct').textContent = pct + '%';
      requestAnimationFrame(function () { fill.style.width = pct + '%'; });
    });
  }

  fetch('../apresentacao/content/screens.json')
    .then(function (r) { return r.json(); })
    .then(function (data) {
      var polls = data.screens.filter(function (s) { return s.poll; }).map(function (s) { return s.poll; });
      wrap.innerHTML = '';

      if (!polls.length) {
        wrap.innerHTML = '<p style="color:var(--ink-3);">Nenhuma enquete disponível.</p>';
        return;
      }

      var live = window.PollsLive && PollsLive.available();
      if (!live) {
        wrap.innerHTML = '<p class="bb-poll-offline">Resultados indisponíveis no momento. Tente novamente em instantes.</p>';
        return;
      }

      polls.forEach(function (poll) {
        var block = renderBlock(poll);
        wrap.appendChild(block);
        PollsLive.subscribe(poll.id, poll.options.length, function (counts, total) {
          block.querySelector('.bb-poll-total').textContent = total;
          fillBars(block, counts);
        });
      });
    })
    .catch(function (e) {
      wrap.innerHTML = '<p class="bb-poll-offline">Não foi possível carregar os resultados.</p>';
      console.warn('[resultados]', e);
    });
})();
</script>
