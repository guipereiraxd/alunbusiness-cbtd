/* Página de voto da plateia. Lê ?p=<pollId>, mostra as opções e grava
   um voto anônimo no Firestore. Um voto por enquete por dispositivo. */
(function () {
  'use strict';
  var body = document.getElementById('voteBody');

  function esc(s) {
    return String(s == null ? '' : s).replace(/[&<>"]/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c];
    });
  }
  function param(k) {
    var m = new RegExp('[?&]' + k + '=([^&]+)').exec(location.search);
    return m ? decodeURIComponent(m[1]) : null;
  }
  var votedKey = function (id) { return 'dc_voted_' + id; };

  fetch('../content/screens.json')
    .then(function (r) { return r.json(); })
    .then(function (data) {
      var polls = data.screens.filter(function (s) { return s.poll; }).map(function (s) { return s.poll; });
      var id = param('p');
      var poll = id ? polls.filter(function (p) { return p.id === id; })[0] : null;
      if (!poll) return renderChooser(polls);
      renderPoll(poll);
    })
    .catch(function (e) {
      body.innerHTML = '<p class="vote-err">Não foi possível carregar a enquete.</p>';
      console.warn('[votar]', e);
    });

  function renderChooser(polls) {
    body.innerHTML = '<h1 class="vote-title">Escolha a enquete</h1>' +
      '<div class="vote-opts">' + polls.map(function (p) {
        return '<a class="vote-opt" href="?p=' + esc(p.id) + '">' + esc(p.prompt) + '</a>';
      }).join('') + '</div>';
  }

  function renderPoll(poll) {
    if (localStorage.getItem(votedKey(poll.id))) return renderThanks(poll, true);
    var opts = poll.options.map(function (o, i) {
      return '<button class="vote-opt" data-i="' + i + '">' + esc(o) + '</button>';
    }).join('');
    var offline = !(window.PollsLive && PollsLive.available());
    body.innerHTML = '<h1 class="vote-title">' + esc(poll.prompt) + '</h1>' +
      (offline ? '<p class="vote-warn">Votação indisponível no momento.</p>' : '') +
      '<div class="vote-opts">' + opts + '</div>';

    body.querySelectorAll('.vote-opt').forEach(function (btn) {
      btn.addEventListener('click', function () {
        if (offline) return;
        var i = +btn.getAttribute('data-i');
        body.querySelectorAll('.vote-opt').forEach(function (b) { b.disabled = true; });
        btn.classList.add('chosen');
        PollsLive.vote(poll.id, i).then(function () {
          localStorage.setItem(votedKey(poll.id), '1');
          renderThanks(poll, false);
        }).catch(function (e) {
          console.warn('[votar] falha ao votar', e);
          body.querySelectorAll('.vote-opt').forEach(function (b) { b.disabled = false; });
          btn.classList.remove('chosen');
          var w = document.createElement('p'); w.className = 'vote-warn';
          w.textContent = 'Não foi possível registrar. Tente de novo.';
          body.appendChild(w);
        });
      });
    });
  }

  function renderThanks(poll, already) {
    body.innerHTML = '<div class="vote-thanks">' +
      '<div class="vote-check">✓</div>' +
      '<h1 class="vote-title">' + (already ? 'Você já votou' : 'Voto registrado') + '</h1>' +
      '<p class="vote-sub">Obrigado! Acompanhe o resultado na tela.</p>' +
      '</div>';
  }
})();
