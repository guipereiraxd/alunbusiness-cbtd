/* Camada de enquetes ao vivo (Firestore). Usada pelo deck (leitura em
   tempo real) e pela página de voto (escrita). Degrada com elegância:
   se não houver config/SDK, available() retorna false e o deck cai no
   modo demonstrativo. Nenhum dado pessoal é coletado. */
window.PollsLive = (function () {
  var db = null, ready = false;

  function init() {
    if (ready) return;
    if (window.FIREBASE_CONFIG && window.firebase) {
      try {
        var app = firebase.apps.length ? firebase.app() : firebase.initializeApp(window.FIREBASE_CONFIG);
        db = firebase.firestore(app);
        ready = true;
      } catch (e) { console.warn('[PollsLive] init falhou:', e); }
    }
  }

  function available() { return ready && !!db; }

  // Registra um voto anônimo
  function vote(pollId, optionIndex) {
    if (!available()) return Promise.reject(new Error('offline'));
    return db.collection('dc_votes').add({
      pollId: pollId,
      option: optionIndex,
      source: 'depois-do-codigo',
      ts: firebase.firestore.FieldValue.serverTimestamp()
    });
  }

  // Assina os votos de uma enquete; agrega por opção em tempo real
  function subscribe(pollId, nOptions, cb) {
    if (!available()) return function () {};
    return db.collection('dc_votes').where('pollId', '==', pollId).onSnapshot(function (snap) {
      var counts = []; for (var k = 0; k < nOptions; k++) counts.push(0);
      var total = 0;
      snap.forEach(function (d) {
        var o = d.data().option;
        if (o >= 0 && o < nOptions) { counts[o]++; total++; }
      });
      cb(counts, total);
    }, function (err) { console.warn('[PollsLive] snapshot:', err); });
  }

  init();
  return { init: init, available: available, vote: vote, subscribe: subscribe };
})();
