---
layout: default
title: "Acesso ao Conteúdo"
---

<style>
.reg-wrap {
  max-width: 440px;
  padding-top: 8px;
}
.reg-eyebrow {
  font-size: 9px;
  font-weight: 700;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--gold);
  opacity: 0.7;
  margin-bottom: 10px;
}
.reg-title {
  font-size: 1.25rem;
  font-weight: 800;
  color: var(--text-1);
  line-height: 1.3;
  margin-bottom: 8px;
}
.reg-desc {
  font-size: 0.875rem;
  color: var(--text-4);
  line-height: 1.65;
  margin-bottom: 28px;
}
.reg-card {
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: 14px;
  padding: 28px;
}
.reg-field {
  margin-bottom: 16px;
}
.reg-label {
  display: block;
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--text-4);
  margin-bottom: 6px;
}
.reg-input {
  width: 100%;
  background: var(--bg);
  border: 1px solid var(--border);
  border-radius: 8px;
  padding: 10px 14px;
  font-size: 0.9375rem;
  color: var(--text-1);
  font-family: inherit;
  transition: border-color 0.15s;
  outline: none;
  -webkit-appearance: none;
}
.reg-input:focus { border-color: var(--gold); }
.reg-input::placeholder { color: var(--text-5); }
.reg-submit {
  width: 100%;
  background: var(--gold);
  color: #000;
  border: none;
  border-radius: 10px;
  padding: 13px;
  font-size: 0.9375rem;
  font-weight: 700;
  cursor: pointer;
  font-family: inherit;
  transition: opacity 0.15s;
  margin-top: 6px;
}
.reg-submit:hover:not(:disabled) { opacity: 0.88; }
.reg-submit:disabled { opacity: 0.35; cursor: not-allowed; }
.reg-note {
  font-size: 0.75rem;
  color: var(--text-5);
  text-align: center;
  margin-top: 12px;
  line-height: 1.5;
}
.reg-divider {
  border: none;
  border-top: 1px solid var(--border-sub);
  margin: 20px 0;
}
.reg-recovery-toggle {
  text-align: center;
  font-size: 0.8125rem;
  color: var(--text-4);
}
.reg-recovery-toggle button {
  background: none;
  border: none;
  color: var(--gold);
  cursor: pointer;
  font-size: 0.8125rem;
  font-family: inherit;
  padding: 0;
  border-bottom: 1px solid var(--gold-border);
  transition: color 0.15s;
}
.reg-recovery-toggle button:hover { color: #e8c090; }
.reg-status {
  padding: 10px 14px;
  border-radius: 8px;
  font-size: 0.875rem;
  margin-bottom: 16px;
  display: none;
  line-height: 1.5;
}
.reg-status.error {
  background: rgba(255,100,100,0.08);
  border: 1px solid rgba(255,100,100,0.2);
  color: #ff7070;
  display: block;
}
.reg-status.success {
  background: var(--gold-dim);
  border: 1px solid var(--gold-border);
  color: var(--gold);
  display: block;
}
</style>

<!-- Redirect already-registered users immediately -->
<script>
(function () {
  if (localStorage.getItem('aibc_registered') === 'true') {
    window.location.replace('{{ "/" | relative_url }}');
    return;
  }
  var c = document.cookie.split(';');
  for (var i = 0; i < c.length; i++) {
    if (c[i].trim().indexOf('aibc_session=1') === 0) {
      localStorage.setItem('aibc_registered', 'true');
      var m = document.cookie.match(/aibc_name=([^;]+)/);
      if (m) localStorage.setItem('user_name', decodeURIComponent(m[1]));
      window.location.replace('{{ "/" | relative_url }}');
      return;
    }
  }
  // Not registered — let the div render, then show it (script below the div handles this)
})();
</script>

<div id="reg-page" style="opacity:0;transition:opacity 0.2s;">

  <div class="reg-wrap">

    <div class="reg-eyebrow">Alun Business · CBTD 2026</div>
    <div class="reg-title">Indo Além da Hype da IA</div>
    <div class="reg-desc">Para acessar o conteúdo completo da palestra, deixe seus dados abaixo. O acesso é gratuito e permanente.</div>

    <div class="reg-card">

      <div id="formStatus" class="reg-status"></div>

      <!-- Registration form -->
      <div id="regSection">
        <form id="regForm" autocomplete="on">
          <div class="reg-field">
            <label class="reg-label" for="regName">Nome completo</label>
            <input class="reg-input" id="regName" name="name" type="text" placeholder="Seu nome" autocomplete="name" required>
          </div>
          <div class="reg-field">
            <label class="reg-label" for="regEmail">E-mail profissional</label>
            <input class="reg-input" id="regEmail" name="email" type="email" placeholder="seu@empresa.com" autocomplete="email" required>
          </div>
          <div class="reg-field" style="margin-bottom:22px;">
            <label class="reg-label" for="regCompany">Empresa <span style="font-weight:400;text-transform:none;letter-spacing:0;opacity:0.55;">(opcional)</span></label>
            <input class="reg-input" id="regCompany" name="organization" type="text" placeholder="Nome da empresa" autocomplete="organization">
          </div>
          <button class="reg-submit" id="regSubmit" type="submit">Acessar o conteúdo →</button>
        </form>
        <p class="reg-note">Ao acessar, você concorda com a <a href="{{ '/privacy/' | relative_url }}" target="_blank" style="color:var(--text-5);border-bottom:1px solid var(--border-sub);">política de privacidade</a>.</p>
      </div>

      <!-- Recovery form (hidden by default) -->
      <div id="recSection" style="display:none;">
        <p style="font-size:0.875rem;color:var(--text-3);margin-bottom:16px;line-height:1.6;">Informe o e-mail com que se cadastrou antes e o acesso será restaurado.</p>
        <form id="recForm" autocomplete="on">
          <div class="reg-field" style="margin-bottom:22px;">
            <label class="reg-label" for="recEmail">Seu e-mail</label>
            <input class="reg-input" id="recEmail" name="email" type="email" placeholder="seu@empresa.com" autocomplete="email" required>
          </div>
          <button class="reg-submit" id="recSubmit" type="submit">Recuperar acesso →</button>
        </form>
      </div>

      <hr class="reg-divider">
      <div class="reg-recovery-toggle">
        <span id="recToggleLabel">Já se cadastrou antes? </span>
        <button id="recToggle">Recuperar acesso →</button>
      </div>

    </div>
  </div>

</div>

<!-- Show form now that the div exists in the DOM -->
<script>document.getElementById('reg-page').style.opacity = '1';</script>

<!-- Firebase config injected at build time via GitHub Actions (never in source) -->
<script src="{{ '/assets/firebase-config.js' | relative_url }}"></script>
<!-- Firebase SDK (only loaded on this page) -->
<script src="https://www.gstatic.com/firebasejs/10.13.2/firebase-app-compat.js"></script>
<script src="https://www.gstatic.com/firebasejs/10.13.2/firebase-firestore-compat.js"></script>

<script>
(function () {

  if (!window.FIREBASE_CONFIG) {
    console.warn('[CBTD] Firebase config not found — registration disabled.');
    document.getElementById('regSubmit').textContent = 'Configuração indisponível';
    return;
  }

  var app = firebase.apps.length ? firebase.app() : firebase.initializeApp(window.FIREBASE_CONFIG);
  var db = firebase.firestore(app);

  var HOME = '{{ "/" | relative_url }}';
  var COOKIE_MAX_AGE = 60 * 60 * 24 * 365;

  function setSession(name) {
    localStorage.setItem('aibc_registered', 'true');
    localStorage.setItem('user_name', name);
    document.cookie = 'aibc_session=1; max-age=' + COOKIE_MAX_AGE + '; path=/; SameSite=Strict';
    document.cookie = 'aibc_name=' + encodeURIComponent(name) + '; max-age=' + COOKIE_MAX_AGE + '; path=/; SameSite=Strict';
  }

  function showStatus(type, msg) {
    var el = document.getElementById('formStatus');
    el.className = 'reg-status ' + type;
    el.textContent = msg;
  }

  // ── Registration ──────────────────────────────────────
  document.getElementById('regForm').addEventListener('submit', function (e) {
    e.preventDefault();
    var name    = document.getElementById('regName').value.trim();
    var email   = document.getElementById('regEmail').value.trim().toLowerCase();
    var company = document.getElementById('regCompany').value.trim();

    if (!name || !email) { showStatus('error', 'Preencha nome e e-mail para continuar.'); return; }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) { showStatus('error', 'Informe um e-mail válido.'); return; }

    var btn = document.getElementById('regSubmit');
    btn.disabled = true;
    btn.textContent = 'Registrando...';

    db.collection('registrations').add({
      name: name,
      email: email,
      company: company || '',
      source: 'cbtd_2026',
      registeredAt: new Date().toISOString()
    }).catch(function (err) { console.warn('[Firebase] Registration write failed:', err); });

    setSession(name);
    showStatus('success', 'Acesso liberado! Redirecionando…');
    setTimeout(function () { window.location.replace(HOME); }, 900);
  });

  // ── Recovery ──────────────────────────────────────────
  var inRecovery = false;

  document.getElementById('recToggle').addEventListener('click', function () {
    inRecovery = !inRecovery;
    document.getElementById('regSection').style.display  = inRecovery ? 'none' : '';
    document.getElementById('recSection').style.display  = inRecovery ? '' : 'none';
    document.getElementById('recToggleLabel').textContent = inRecovery ? '' : 'Já se cadastrou antes? ';
    this.textContent = inRecovery ? '← Voltar ao cadastro' : 'Recuperar acesso →';
    document.getElementById('formStatus').className = 'reg-status';
  });

  document.getElementById('recForm').addEventListener('submit', function (e) {
    e.preventDefault();
    var email = document.getElementById('recEmail').value.trim().toLowerCase();
    if (!email) return;

    var btn = document.getElementById('recSubmit');
    btn.disabled = true;
    btn.textContent = 'Buscando…';

    db.collection('registrations').where('email', '==', email).get()
      .then(function (snap) {
        if (!snap.empty) {
          var data = snap.docs[0].data();
          setSession(data.name || '');
          showStatus('success', 'Acesso recuperado! Redirecionando…');
          setTimeout(function () { window.location.replace(HOME); }, 900);
        } else {
          showStatus('error', 'E-mail não encontrado. Faça o cadastro acima.');
          btn.disabled = false;
          btn.textContent = 'Recuperar acesso →';
        }
      })
      .catch(function (err) {
        console.error(err);
        showStatus('error', 'Erro ao buscar. Tente novamente.');
        btn.disabled = false;
        btn.textContent = 'Recuperar acesso →';
      });
  });

})();
</script>
