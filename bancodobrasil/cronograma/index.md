---
title: "Cronograma"
---

<div class="bb-eyebrow"><span class="chevrons" aria-hidden="true"><i></i><i></i><i></i></span>13 de julho</div>

<h1 class="bb-h1">Cronograma do <span class="y">encontro</span></h1>

<p class="bb-lede">Encontro executivo "Depois do Código" — a nova engenharia de software na era dos agentes de IA.</p>

<div class="bb-schedule">

  <div class="bb-slot break">
    <div class="bb-slot-time">10h00–10h20</div>
    <div class="bb-slot-session">Café de boas-vindas</div>
  </div>

  <div class="bb-slot">
    <div class="bb-slot-time">10h20–10h35</div>
    <div class="bb-slot-session">Abertura: Depois do Código</div>
    <div class="bb-slot-speaker">Hosts do Evento</div>
  </div>

  <div class="bb-slot">
    <div class="bb-slot-time">10h35–11h10</div>
    <div class="bb-slot-session">Quando escrever código deixa de ser o principal gargalo</div>
    <div class="bb-slot-speaker">Paulo Silveira</div>
    <div class="bb-slot-pdf"><a href="{{ '/bancodobrasil/assets/palestras/PauloSilveira.pdf' | relative_url }}" target="_blank" rel="noopener">Slides (PDF) ↗</a></div>
  </div>

  <div class="bb-slot">
    <div class="bb-slot-time">11h10–12h10</div>
    <div class="bb-slot-session">Dev em T + Filtrando o Hype</div>
    <div class="bb-slot-speaker">Sérgio Lopes</div>
    <div class="bb-slot-pdf"><a href="{{ '/bancodobrasil/assets/palestras/SergioLopes.pdf' | relative_url }}" target="_blank" rel="noopener">Slides (PDF) ↗</a></div>
  </div>

  <div class="bb-slot break">
    <div class="bb-slot-time">12h10–13h40</div>
    <div class="bb-slot-session">Almoço</div>
  </div>

  <div class="bb-slot">
    <div class="bb-slot-time">13h40–14h10</div>
    <div class="bb-slot-session">Qualidade de software no mundo da IA</div>
    <div class="bb-slot-speaker">Mauricio Aniche</div>
    <div class="bb-slot-pdf"><a href="{{ '/bancodobrasil/assets/palestras/MauricioAniche.pdf' | relative_url }}" target="_blank" rel="noopener">Slides (PDF) ↗</a></div>
  </div>

  <div class="bb-slot">
    <div class="bb-slot-time">14h10–14h50</div>
    <div class="bb-slot-session">Como seria um ciclo de desenvolvimento com agentes de IA?</div>
    <div class="bb-slot-speaker">Tiago Santos</div>
    <div class="bb-slot-pdf"><a href="{{ '/bancodobrasil/assets/palestras/TiagoSantos.pdf' | relative_url }}" target="_blank" rel="noopener">Slides (PDF) ↗</a></div>
  </div>

  <div class="bb-slot break">
    <div class="bb-slot-time">14h50–15h10</div>
    <div class="bb-slot-session">Pausa para café</div>
  </div>

  <div class="bb-slot">
    <div class="bb-slot-time">15h10–16h00</div>
    <div class="bb-slot-session"><a href="{{ '/bancodobrasil/aquario-tecnico/' | relative_url }}">Aquário técnico ↗</a>: o que muda para desenvolvimento, qualidade, arquitetura, segurança e liderança técnica?</div>
    <div class="bb-slot-speaker">Guilherme Pereira</div>
  </div>

  <div class="bb-slot">
    <div class="bb-slot-time">16h00–16h05</div>
    <div class="bb-slot-session">Encerramento</div>
    <div class="bb-slot-speaker">Hosts do Evento</div>
  </div>

</div>

<div class="bb-comment">
  <h2>Deixe um comentário sobre o conteúdo</h2>
  <form class="bb-comment-form" id="bbCommentForm">
    <div class="bb-comment-row">
      <div class="bb-comment-field">
        <label for="bbCName">Nome</label>
        <input type="text" id="bbCName" name="name" required autocomplete="name">
      </div>
      <div class="bb-comment-field">
        <label for="bbCEmail">E-mail</label>
        <input type="email" id="bbCEmail" name="email" required autocomplete="email">
      </div>
    </div>
    <div class="bb-comment-field">
      <label for="bbCComment">Comentário</label>
      <textarea id="bbCComment" name="comment" required></textarea>
    </div>
    <button type="submit" class="bb-comment-submit" id="bbCSubmit">Enviar comentário</button>
    <p class="bb-comment-status" id="bbCStatus"></p>
    <p class="bb-comment-hint">Seu comentário é enviado apenas à organização do evento, para acompanhamento e melhoria de conteúdo.</p>
  </form>
</div>

<script src="{{ '/assets/firebase-config.js' | relative_url }}"></script>
<script src="https://www.gstatic.com/firebasejs/10.13.2/firebase-app-compat.js"></script>
<script src="https://www.gstatic.com/firebasejs/10.13.2/firebase-firestore-compat.js"></script>
<script>
(function () {
  var db = null;
  if (window.FIREBASE_CONFIG && window.firebase) {
    try {
      var app = firebase.apps.length ? firebase.app() : firebase.initializeApp(window.FIREBASE_CONFIG);
      db = firebase.firestore(app);
    } catch (e) { console.warn('[bb-comment] Firebase init failed:', e); }
  }

  var form = document.getElementById('bbCommentForm');
  var status = document.getElementById('bbCStatus');
  var submitBtn = document.getElementById('bbCSubmit');

  function setStatus(msg, cls) {
    status.textContent = msg;
    status.className = 'bb-comment-status' + (cls ? ' ' + cls : '');
  }

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    var name = document.getElementById('bbCName').value.trim();
    var email = document.getElementById('bbCEmail').value.trim();
    var comment = document.getElementById('bbCComment').value.trim();

    if (!name || !email || !comment) {
      setStatus('Preencha todos os campos.', 'err');
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setStatus('Informe um e-mail válido.', 'err');
      return;
    }
    if (!db) {
      setStatus('Não foi possível enviar agora. Tente novamente mais tarde.', 'err');
      return;
    }

    submitBtn.disabled = true;
    setStatus('Enviando…');
    db.collection('dc_comentarios').add({
      name: name, email: email, comment: comment,
      page: window.location.pathname,
      source: 'depois-do-codigo',
      ts: firebase.firestore.FieldValue.serverTimestamp()
    }).then(function () {
      setStatus('Comentário enviado — obrigado!', 'ok');
      form.reset();
      submitBtn.disabled = false;
    }).catch(function (err) {
      console.warn('[bb-comment] write failed:', err);
      setStatus('Não foi possível enviar. Tente novamente.', 'err');
      submitBtn.disabled = false;
    });
  });
})();
</script>
