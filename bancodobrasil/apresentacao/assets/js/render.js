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
      '<section class="landing landing-cover">' +
        landingNetwork() +
        '<div class="landing-center">' +
          '<div class="thinking" aria-hidden="true">' +
            '<span class="thinking-dots"><i></i><i></i><i></i></span>' +
            '<span class="thinking-text" id="thinkingText">Analisando o gargalo…</span>' +
          '</div>' +
          '<h1>Depois<br>do <span class="y">Código</span></h1>' +
          '<p class="sub">' + sub + '</p>' +
        '</div>' +
        '<div class="landing-orgs">' +
          '<span class="landing-orgs-label">Realização</span>' +
          '<img class="landing-org-logo alun" src="/assets/logo-alun-business.png" alt="Alun Business">' +
          '<img class="landing-org-logo unibb" src="/bancodobrasil/assets/unibb-transp.png" alt="UniBB">' +
        '</div>' +
        '<a class="landing-start" href="#/tela/1/0" data-action="start">Iniciar evento →</a>' +
      '</section>';
  }

  // Rede geométrica animada de fundo — nós conectados, no espírito de
  // "sistemas de agentes" que a apresentação introduz.
  function landingNetwork() {
    var nodes = [
      { x: 120, y: 140, fx: 10, fy: -12, fdur: 6.5, pdur: 3.2, delay: 0 },
      { x: 300, y: 90,  fx: -8, fy: 14,  fdur: 7,   pdur: 2.8, delay: 0.4 },
      { x: 520, y: 150, fx: 12, fy: 8,   fdur: 6,   pdur: 3.5, delay: 0.8 },
      { x: 980, y: 120, fx: -10, fy: -10, fdur: 7.5, pdur: 3,   delay: 0.2 },
      { x: 1100, y: 260, fx: 8, fy: 12,  fdur: 6.8, pdur: 2.6, delay: 0.6 },
      { x: 150, y: 620, fx: -12, fy: -8, fdur: 7.2, pdur: 3.3, delay: 1 },
      { x: 350, y: 700, fx: 10, fy: -10, fdur: 6.4, pdur: 2.9, delay: 0.3 },
      { x: 900, y: 650, fx: -8, fy: 10,  fdur: 7,   pdur: 3.1, delay: 0.7 },
      { x: 1080, y: 560, fx: 12, fy: -8, fdur: 6.6, pdur: 2.7, delay: 0.5 },
      { x: 700, y: 70,  fx: -10, fy: 12, fdur: 7.3, pdur: 3.4, delay: 0.9 }
    ];
    var edges = [[0,1],[1,2],[2,9],[9,3],[3,4],[0,5],[5,6],[7,8],[4,8],[2,3]];
    var pulseIdx = [2, 6];

    var lines = edges.map(function (e, i) {
      var a = nodes[e[0]], b = nodes[e[1]];
      var cls = pulseIdx.indexOf(i) >= 0 ? ' pulse-line' : '';
      return '<line class="edge' + cls + '" x1="' + a.x + '" y1="' + a.y + '" x2="' + b.x + '" y2="' + b.y + '"/>';
    }).join('');

    var circles = nodes.map(function (n, i) {
      var accent = (i % 3 === 0) ? ' accent' : '';
      return '<circle class="node' + accent + '" cx="' + n.x + '" cy="' + n.y + '" r="' + (accent ? 5 : 3.5) + '" ' +
        'style="--fx:' + n.fx + 'px;--fy:' + n.fy + 'px;--fdur:' + n.fdur + 's;--pdur:' + n.pdur + 's;--fdelay:' + n.delay + 's;"></circle>';
    }).join('');

    return '<svg class="landing-net" viewBox="0 0 1200 800" preserveAspectRatio="xMidYMid slice" aria-hidden="true">' +
      '<g class="edges">' + lines + '</g>' +
      '<g class="nodes">' + circles + '</g>' +
    '</svg>';
  }

  function screenHead(s) {
    return '<div class="kicker">' + chevrons + esc(s.kicker) + '</div>' +
           '<h1 class="insight">' + highlight(s.insight, s.highlight) + '</h1>';
  }

  // Widget de enquete com 3 estados (fechada / recebendo / revelada)
  function pollWidget(poll, revealStep) {
    var bars = poll.options.map(function (o, i) {
      return '<div class="bar" data-i="' + i + '">' +
        '<div class="bar-row"><span class="bar-label">' + esc(o) + '</span><span class="bar-pct">0%</span></div>' +
        '<div class="bar-track"><div class="bar-fill"></div></div></div>';
    }).join('');
    return '<div class="poll" data-poll-id="' + esc(poll.id) + '" data-state="closed"' + (revealStep != null ? ' data-reveal="' + revealStep + '"' : '') + '>' +
      '<div class="poll-live">' +
        '<div class="qr" aria-hidden="true"></div>' +
        '<div class="poll-live-info">' +
          '<b>' + esc(poll.prompt) + '</b>' +
          '<span class="poll-live-count">Recebendo respostas · <b class="poll-count">0</b></span>' +
          '<span class="poll-live-hint">Escaneie o QR para responder</span>' +
        '</div>' +
      '</div>' +
      '<div class="poll-result">' +
        '<div class="poll-bars">' + bars + '</div>' +
        '<div class="poll-result-qr">' +
          '<div class="qr" aria-hidden="true"></div>' +
          '<span class="poll-qr-hint">Continue votando</span>' +
          '<span class="poll-live-count"><b class="poll-count">0</b> respostas</span>' +
        '</div>' +
      '</div>' +
    '</div>';
  }

  var byType = {
    // Tela 1 — cronograma do dia, em duas colunas (manhã/tarde)
    cronograma: function (s) {
      function col(label, items) {
        var rows = items.map(function (it) {
          var cls = it.break ? ' break' : '';
          var speaker = (!it.break && it.speaker) ? '<div class="cronograma-speaker">' + esc(it.speaker) + '</div>' : '';
          return '<div class="cronograma-row' + cls + '">' +
            '<div class="cronograma-time">' + esc(it.time) + '</div>' +
            '<div class="cronograma-body"><div class="cronograma-session">' + esc(it.session) + '</div>' + speaker + '</div>' +
          '</div>';
        }).join('');
        return '<div class="cronograma-col"><span class="cronograma-col-label">' + esc(label) + '</span>' + rows + '</div>';
      }
      return screenHead(s) +
        '<div class="cronograma-grid" data-reveal="1">' +
          col('Manhã', s.schedule.manha) +
          col('Tarde', s.schedule.tarde) +
        '</div>';
    },
    // Telas 3–4 — antes/depois: mesma virada de paradigma, texto + imagem em colunas
    imageslide: function (s) {
      var img = '<div class="imgslide-wrap" data-reveal="1"><img class="imgslide-img" src="' + esc(s.image.src) + '" alt="' + esc(s.image.alt || '') + '"></div>';
      var quote = s.quote
        ? '<div class="imgslide-quote" data-reveal="2">' + highlight(s.quote.text, s.quote.highlight) + '</div>'
        : '';
      var left = screenHead(s) + quote;
      return '<div class="split"><div class="split-l">' + left + '</div><div class="split-r">' + img + '</div></div>';
    },
    question: function (s) {
      // marca o "dez vezes mais rápido" já vem do highlight; ativa pulse via data-active-at
      var head = screenHead(s).replace(
        '<span class="y">' + esc(s.highlight) + '</span>',
        '<span class="y q-10x" data-active-at="1">' + esc(s.highlight) + '</span>'
      );
      return head + pollWidget(s.poll, 2);
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
    },

    // Tela 4 — o gargalo: código passa rápido e acumula nas etapas
    flow: function (s) {
      var jam = s.stages.map(function (st) { return '<span class="jam-stage">' + esc(st) + '</span>'; }).join('');
      return screenHead(s) +
        '<div class="flow" data-reveal="1">' +
          '<div class="flow-fast"><span>' + esc(s.fast) + '</span>' + chevrons + '</div>' +
          '<div class="flow-jam">' + jam + '</div>' +
        '</div>' +
        pollWidget(s.poll, 2);
    },

    // Tela 5 — loop: nós dispostos em círculo + modos de participação humana
    loop: function (s) {
      var n = s.nodes.length;
      var nodes = s.nodes.map(function (nm, k) {
        return '<span class="loop-node" style="--a:' + (k * 360 / n) + 'deg">' + esc(nm) + '</span>';
      }).join('');
      var modes = s.modes.map(function (m, k) {
        return '<button class="mode' + (k === 0 ? ' on' : '') + '" data-block>' + esc(m) + '</button>';
      }).join('');
      var ring = '<div class="loop-ring" data-reveal="1"><span class="loop-core">' + chevrons + '</span>' + nodes + '</div>';
      var left = screenHead(s) + '<div class="modes" data-reveal="2">' + modes + '</div>';
      return '<div class="split"><div class="split-l">' + left + '</div><div class="split-r">' + ring + '</div></div>';
    },

    // Tela 6 — harness: camadas concêntricas ao redor do modelo + categorias
    layers: function (s) {
      var nest = '<span class="nest-core">' + esc(s.core) + '</span>';
      s.rings.forEach(function (r) {
        nest = '<div class="nest"><span class="nest-label">' + esc(r) + '</span>' + nest + '</div>';
      });
      var cats = s.cats.map(function (c) {
        return '<div class="cat"><b>' + esc(c.k) + '</b><span>' + esc(c.v) + '</span></div>';
      }).join('');
      var left = screenHead(s) + '<div class="cats" data-reveal="2">' + cats + '</div>';
      var right = '<div class="nest-wrap" data-reveal="1">' + nest + '</div>';
      return '<div class="split"><div class="split-l">' + left + '</div><div class="split-r">' + right + '</div></div>';
    },

    // Tela 7 — context: fontes convergindo para a janela de contexto + estados
    context: function (s) {
      var srcs = s.sources.map(function (x) { return '<span class="src">' + esc(x) + '</span>'; }).join('');
      var states = s.states.map(function (st, k) {
        return '<span class="state' + (k === 1 ? ' ok' : '') + '">' + esc(st) + '</span>';
      }).join('');
      var right = '<div class="ctx" data-reveal="1"><div class="ctx-srcs">' + srcs + '</div>' +
        '<div class="ctx-win">janela de contexto</div></div>';
      var left = screenHead(s) + '<div class="states" data-reveal="2">' + states + '</div>';
      return '<div class="split"><div class="split-l">' + left + '</div><div class="split-r">' + right + '</div></div>';
    },

    // Tela 8 — evaluation: o artefato atravessa gates + tipos de avaliação
    gates: function (s) {
      var gates = s.gates.map(function (g) { return '<span class="gate">' + esc(g) + '</span>'; }).join('<span class="gate-sep">›</span>');
      var evals = s.evals.map(function (e) { return '<span class="alt">' + esc(e) + '</span>'; }).join('');
      return screenHead(s) +
        '<div class="gates" data-reveal="1"><span class="artifact">' + esc(s.artifact) + '</span><span class="gate-sep">»</span>' + gates + '</div>' +
        '<div class="alts" data-reveal="2">' + evals + '</div>';
    },

    // Tela 9 — SDLC: a esteira linear se dobra em rede de loops
    sdlc: function (s) {
      var lin = s.linear.map(function (x) { return '<span class="lin-node">' + esc(x) + '</span>'; }).join('<span class="lin-sep">›</span>');
      var net = s.network.map(function (x) { return '<span class="net-node">' + esc(x) + '</span>'; }).join('');
      return screenHead(s) +
        '<div class="linrow" data-reveal="1"><span class="lin-tag">Tradicional</span>' + lin + '</div>' +
        '<div class="netwrap" data-reveal="2"><span class="lin-tag on">Agêntico</span><div class="net">' + net + '</div></div>';
    },

    // Tela 10 — papel: metamorfose antes → depois + competências emergentes
    role: function (s) {
      var skills = s.skills.map(function (x) { return '<button class="skill" data-block>' + esc(x) + '</button>'; }).join('');
      return screenHead(s) +
        '<div class="role" data-reveal="1">' +
          '<div class="role-card before"><b>' + esc(s.before.label) + '</b><span>' + esc(s.before.v) + '</span></div>' +
          '<div class="role-arrow">→</div>' +
          '<div class="role-card after"><b>' + esc(s.after.label) + '</b><span>' + esc(s.after.v) + '</span></div>' +
        '</div>' +
        '<div class="skills" data-reveal="2"><span class="skills-hint">Escolha as 3 que mais crescem</span>' + skills + '</div>';
    },

    // Tela 11 — mapa final: conceitos conectados + QR + trilhas
    mapfinal: function (s) {
      var nodes = s.concepts.map(function (c) { return '<a class="mapnode" href="#/conceito/' + esc(c.id) + '">' + esc(c.t) + '</a>'; }).join('');
      var trilhas = s.trilhas.map(function (t) { return '<span class="trilha">' + esc(t) + '</span>'; }).join('');
      var left = screenHead(s) +
        '<div class="mapfoot" data-reveal="2">' +
          '<div class="qr big" aria-hidden="true"></div>' +
          '<div class="trilhas"><span class="trilhas-lbl">Trilhas</span>' + trilhas + '</div>' +
        '</div>';
      var right = '<div class="mapnodes" data-reveal="1">' + nodes + '</div>';
      return '<div class="split"><div class="split-l">' + left + '</div><div class="split-r">' + right + '</div></div>';
    }
  };

  function screen(s) {
    var body = (byType[s.type] || function () { return screenHead(s); })(s);
    return '<section class="stage"><div class="screen" data-screen="' + esc(s.id) + '" data-type="' + esc(s.type) + '">' + body + '</div></section>';
  }

  function stub(title, msg) {
    return '<section class="landing">' +
      '<div class="brace">' + chevrons + '{ ' + esc(title) + ' }</div>' +
      '<h1>Em<br><span class="y">construção</span></h1>' +
      '<p class="sub">' + esc(msg) + '</p>' +
      '<div class="actions"><a class="btn btn-ghost" href="/bancodobrasil/">← Voltar ao início</a></div>' +
      '</section>';
  }

  // As 6 frentes da Engenharia Agêntica — ordem fixa do mapa
  var CATS = [
    { slug: 'engenharia-agentica',      label: 'Engenharia Agêntica' },
    { slug: 'sistemas-agenticos',       label: 'Sistemas Agênticos' },
    { slug: 'confianca-confiabilidade', label: 'Confiança e Confiabilidade' },
    { slug: 'organizacao-lideranca',    label: 'Organização e Liderança' },
    { slug: 'economia-ia',              label: 'Economia da IA' },
    { slug: 'entrega-valor',            label: 'Entrega de Valor' }
  ];
  var THEMES = CATS.reduce(function (acc, c) { acc[c.slug] = c.label; return acc; }, {});
  function themeLabel(t) { return THEMES[t] || t; }

  // Mapa de Conceitos: 6 seções (frentes) + busca + filtro por categoria
  function map(concepts) {
    var chips = ['all'].concat(CATS.map(function (c) { return c.slug; })).map(function (slug, i) {
      return '<button class="mapchip' + (i === 0 ? ' on' : '') + '" data-theme="' + slug + '">' +
        (slug === 'all' ? 'Todos' : themeLabel(slug)) + '</button>';
    }).join('');

    var sections = CATS.map(function (cat) {
      var items = concepts.filter(function (c) { return c.theme === cat.slug; });
      var body = items.length
        ? items.map(function (c) {
            var text = (c.title + ' ' + c.insight + ' ' + c.definicao).toLowerCase();
            return '<a class="mapcard" href="#/conceito/' + esc(c.id) + '" data-text="' + esc(text) + '">' +
              '<span class="mapcard-title">' + esc(c.title) + '</span>' +
              '<span class="mapcard-insight">' + esc(c.insight) + '</span>' +
            '</a>';
          }).join('')
        : '<div class="mapcard-empty">Em breve</div>';
      return '<div class="mapv-section" data-cat="' + cat.slug + '">' +
        '<div class="mapv-section-head"><span class="mapv-section-title">' + esc(cat.label) + '</span><span class="mapv-section-line"></span></div>' +
        '<div class="mapv-grid">' + body + '</div>' +
      '</div>';
    }).join('');

    return '<div class="mapv">' +
      '<div class="mapv-head"><div>' +
        '<div class="doc-kicker">' + chevrons + 'Mapa de Conceitos</div>' +
        '<h1 class="mapv-title">A nova Engenharia Agêntica, explicada:</h1>' +
      '</div><a class="btn btn-ghost" href="/bancodobrasil/">← Início</a></div>' +
      '<div class="mapv-tools">' +
        '<input id="mapSearch" class="mapv-search" type="search" placeholder="Buscar conceito ou termo…" aria-label="Buscar">' +
        '<div class="mapv-filters">' + chips + '</div>' +
      '</div>' +
      '<div id="mapSections">' + sections + '</div>' +
      '<p class="mapv-empty" id="mapEmpty" hidden>Nada encontrado com esse filtro.</p>' +
    '</div>';
  }

  // Página de conceito (estrutura editorial do brief)
  function concept(c) {
    function block(title, inner, span) {
      return '<section class="doc-block' + (span ? ' span2' : '') + '"><h3>' + esc(title) + '</h3>' + inner + '</section>';
    }
    function list(items, cls) {
      return '<ul class="' + (cls || '') + '">' + items.map(function (i) {
        return '<li>' + esc(i.t !== undefined ? i.t : i) + '</li>';
      }).join('') + '</ul>';
    }
    var stageLink = c.screen ? '<a class="btn btn-ghost" href="#/tela/' + c.screen + '/0">Ver na apresentação →</a>' : '';
    var fontesBlock = (c.fontes && c.fontes.length) ? block('Evidência', list(c.fontes, 'fontes'), true) : '';
    return '<div class="doc">' +
      '<a class="doc-back" href="#/mapa">' + chevrons + 'Mapa</a>' +
      '<div class="doc-kicker">' + esc(themeLabel(c.theme)) + ' · Conceito</div>' +
      '<h1 class="doc-title">' + esc(c.title) + '</h1>' +
      '<p class="doc-insight">' + esc(c.insight) + '</p>' +
      '<div class="doc-grid">' +
        block('Definição', '<p>' + esc(c.definicao) + '</p>', true) +
        block('Exemplo', '<p>' + esc(c.exemplo) + '</p>') +
        block('Antipadrão', '<p>' + esc(c.antipadrao) + '</p>') +
        block('Perguntas para a liderança', list(c.perguntas)) +
        block('Métrica', '<p>' + esc(c.metrica) + '</p>') +
        block('Próximo passo', '<p>' + esc(c.proximoPasso) + '</p>') +
        fontesBlock +
      '</div>' +
      '<div class="doc-foot">' + stageLink + '</div>' +
    '</div>';
  }

  return { landing: landing, screen: screen, stub: stub, map: map, concept: concept };
})();
