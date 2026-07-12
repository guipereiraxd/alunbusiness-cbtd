/* Renderização de views a partir do JSON de conteúdo.
   Cada função devolve uma string de HTML. Elementos com [data-reveal="N"]
   surgem quando a microetapa atual >= N; [data-active-at="N"] ganham .active. */
window.Render = (function () {

  var chevrons = '<span class="chevrons" aria-hidden="true"><i></i><i></i><i></i></span>';

  function esc(s) {
    return String(s).replace(/[&<>"]/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c];
    });
  }

  // Envolve um trecho do insight em destaque amarelo
  function highlight(text, term) {
    if (!term) return esc(text);
    var i = text.indexOf(term);
    if (i < 0) return esc(text);
    return esc(text.slice(0, i)) + '<span class="y">' + esc(term) + '</span>' + esc(text.slice(i + term.length));
  }

  function landing(meta) {
    var sub = meta.subtitle
      .replace('engenharia de software agêntica', '<b>engenharia de software agêntica</b>')
      .replace('desafios', '<b>desafios</b>');
    return '' +
      '<section class="landing">' +
        '<div class="brace">' + chevrons + '{ Depois do Código }</div>' +
        '<h1>Depois<br>do <span class="y">Código</span></h1>' +
        '<p class="sub">' + sub + '</p>' +
        '<div class="actions">' +
          '<a class="btn btn-primary" href="#/tela/1/0" data-action="start">Iniciar apresentação →</a>' +
          '<a class="btn btn-ghost" href="#/mapa" data-action="explore">Explorar mapa</a>' +
        '</div>' +
      '</section>';
  }

  function screenHead(s) {
    return '<div class="kicker">' + chevrons + esc(s.kicker) + '</div>' +
           '<h1 class="insight">' + highlight(s.insight, s.highlight) + '</h1>';
  }

  var byType = {
    question: function (s) {
      var alts = s.explore.items.map(function (a) { return '<span class="alt">' + esc(a) + '</span>'; }).join('');
      // marca o "dez vezes mais rápido" já vem do highlight; ativa pulse via data-active-at
      var head = screenHead(s).replace(
        '<span class="y">' + esc(s.highlight) + '</span>',
        '<span class="y q-10x" data-active-at="1">' + esc(s.highlight) + '</span>'
      );
      return head +
        '<div class="poll-cta" data-reveal="2">' +
          '<div class="qr" aria-hidden="true"></div>' +
          '<div><b>' + esc(s.poll.prompt) + '</b><span>Responda pelo QR ou link curto</span></div>' +
        '</div>' +
        '<div class="alts" data-reveal="3">' + alts + '</div>';
    },
    equation: function (s) {
      var qs = s.queues.map(function (q) { return '<span class="queue">' + esc(q) + '</span>'; }).join('');
      return screenHead(s) +
        '<div class="eq" data-reveal="1">' +
          '<div class="eq-term eq-up"><div class="lbl">gerar código</div><div class="val">' + esc(s.equation.up) + '</div></div>' +
          '<div class="eq-neq">≠</div>' +
          '<div class="eq-term eq-flat"><div class="lbl">valor entregue</div><div class="val">' + esc(s.equation.flat) + '</div></div>' +
        '</div>' +
        '<div class="queues" data-reveal="2">' + qs + '</div>';
    },
    twocol: function (s) {
      function list(items) { return items.map(function (i) { return '<li>' + esc(i) + '</li>'; }).join(''); }
      return screenHead(s) +
        '<div class="cols">' +
          '<div class="col cheap" data-reveal="1"><h3>' + esc(s.cheaper.label) + '</h3><ul>' + list(s.cheaper.items) + '</ul></div>' +
          '<div class="col exp" data-reveal="2"><h3>' + esc(s.expensive.label) + '</h3><ul>' + list(s.expensive.items) + '</ul></div>' +
        '</div>';
    }
  };

  function screen(s) {
    var body = (byType[s.type] || function () { return screenHead(s); })(s);
    return '<section class="stage"><div class="screen" data-screen="' + esc(s.id) + '">' + body + '</div></section>';
  }

  function stub(title, msg) {
    return '<section class="landing">' +
      '<div class="brace">' + chevrons + '{ ' + esc(title) + ' }</div>' +
      '<h1>Em<br><span class="y">construção</span></h1>' +
      '<p class="sub">' + esc(msg) + '</p>' +
      '<div class="actions"><a class="btn btn-ghost" href="#/">← Voltar ao início</a></div>' +
      '</section>';
  }

  return { landing: landing, screen: screen, stub: stub };
})();
