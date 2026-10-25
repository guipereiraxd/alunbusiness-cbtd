/* AI Business ReCode — comportamento do formulário de contato.

   A demo e a página de contato pedem a mesma coisa e precisam dizer a
   mesma coisa nos quatro estados de envio. Quando a validação e as
   mensagens viviam dentro da demo, a segunda cópia nasceria livre para
   divergir — e divergência aqui significa prometer ao visitante algo
   diferente do que o código faz, que é exatamente o defeito que a
   auditoria encontrou. Um módulo só, dois lugares de uso. */
window.RECODE_FORM = (function(){

  var L = window.RECODE_LEADS;

  /* O "o que você quer resolver" é opcional e só existe na página de
     contato; a demo não tem campo de texto livre. */
  function ligar(cfg){
    var botao = document.getElementById(cfg.botao);
    var erro  = document.getElementById(cfg.erro);
    var forma = document.getElementById(cfg.forma);
    var ok    = document.getElementById(cfg.ok);
    if (!botao || !forma || !ok || !erro) return;

    function val(id){ var e = document.getElementById(id); return e ? e.value : ""; }
    function marcado(id){ var e = document.getElementById(id); return !!(e && e.checked); }

    function falha(msg, foco){
      erro.textContent = msg; erro.style.display = "block";
      var e = document.getElementById(foco); if (e) e.focus();
    }

    /* Reposiciona o botão e limpa o erro — usado quando a página devolve
       o formulário depois de um envio (o "responder de novo" da demo
       deixava o botão travado em "Enviando…" para sempre). */
    function reiniciar(){
      botao.disabled = false; botao.textContent = cfg.rotulo || "Enviar";
      erro.style.display = "none"; erro.textContent = "";
      forma.style.display = "block";
      ok.style.display = "none"; ok.innerHTML = ""; ok.className = "ok";
    }

    botao.addEventListener("click", function(){
      var d = {
        nome:    val(cfg.nome),
        email:   val(cfg.email),
        empresa: val(cfg.empresa),
        cargo:   val(cfg.cargo),
        assunto: cfg.assunto ? val(cfg.assunto) : "",
        optin:   marcado(cfg.optin)
      };
      erro.style.display = "none";
      if (!d.nome.trim())      return falha("Informe o seu nome.", cfg.nome);
      if (!L.valido(d.email))  return falha("Informe um e-mail válido.", cfg.email);

      botao.disabled = true; botao.textContent = "Enviando…";
      L.registrar(d).then(function(res){
        forma.style.display = "none";
        ok.style.display = "block";
        ok.focus();   /* sem isto o foco fica num botão que acabou de sumir */
        ok.innerHTML = mensagem(res.modo, cfg.sucessoExtra);
        ok.className = (res.modo === "remoto") ? "ok" : "ok falhou";

        /* Quem não conseguiu enviar ficava sem saída: a mensagem dizia que
           houve falha e a tela não oferecia como repetir. O botão devolve o
           formulário preenchido, porque os campos não foram limpos. */
        if (res.modo !== "remoto"){
          var retry = document.createElement("button");
          retry.type = "button";
          retry.className = "bt bt-2";
          retry.style.marginTop = "18px";
          retry.textContent = "Tentar enviar de novo";
          retry.addEventListener("click", function(){ reiniciar(); botao.focus(); });
          ok.appendChild(retry);
        }
      });
    });

    return { reiniciar: reiniciar };
  }

  /* Os quatro estados são distintos de propósito: "demorou" não é
     "falhou", e dizer que não chegou enquanto a gravação segue a caminho
     manda a pessoa procurar outro canal sem necessidade. */
  function mensagem(modo, extra){
    var base =
      modo === "remoto"
      ? '<b>Recebemos o seu contato.</b><br>A gente retorna para entender qual jornada está '
        + 'incomodando a sua operação.'
      : modo === "indefinido"
      ? '<b>O envio demorou mais do que o esperado.</b><br>Ele pode ter chegado — não dá para '
        + 'confirmar daqui. Se não tivermos retornado em alguns dias, envie de novo.'
      : modo === "sem-backend"
      ? '<b>Este ambiente não tem onde gravar o contato.</b><br>É a versão local do site; '
        + 'em produção o envio funciona normalmente.'
      : '<b>Não conseguimos registrar o seu contato.</b><br>Houve uma falha de conexão com o '
        + 'servidor. Tente de novo em instantes.';
    return base + (modo === "remoto" && extra ? "<br>" + extra : "");
  }

  return { ligar: ligar };
})();
