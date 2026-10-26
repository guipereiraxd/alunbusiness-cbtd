---
title: "Falar com a Alun Business"
description: "Comece pela jornada que mais trava o valor do seu negócio. A conversa de descoberta é gratuita e, se o diagnóstico não fizer sentido para o seu caso, a gente diz isso."
---

<style>
  .ct{display:grid;grid-template-columns:1fr 1.15fr;gap:54px;align-items:start}
  @media(max-width:980px){ .ct{grid-template-columns:1fr;gap:38px} }

  .ct-lado h2{font-size:21px;margin-bottom:10px}
  .ct-lado p{font-size:15.5px;color:var(--tx-2);line-height:1.65}
  .passos{display:grid;gap:16px;margin-top:26px}
  .passos > div{display:grid;grid-template-columns:30px 1fr;gap:15px;align-items:start}
  .passos .n{font-family:var(--mono);font-size:12px;color:var(--ouro);padding-top:3px}
  .passos b{display:block;font-family:var(--disp);font-weight:600;font-size:16px;color:var(--tinta)}
  .passos span{display:block;font-size:14.5px;color:var(--tx-2);margin-top:5px;line-height:1.6}

  .ct-form{background:var(--canvas);border:1px solid var(--linha);border-radius:20px;padding:32px}
  @media(max-width:560px){ .ct-form{padding:24px 20px} }
  .ct-form h2{font-size:22px}
  .ct-form > p{font-size:14.5px;color:var(--tx-2);margin-top:9px;line-height:1.6}
  .campos{display:grid;grid-template-columns:1fr 1fr;gap:15px;margin-top:24px}
  @media(max-width:620px){ .campos{grid-template-columns:1fr} }
  .campo.todo{grid-column:1/-1}
  .campo label{display:block;font-family:var(--mono);font-size:10.5px;letter-spacing:.1em;
    text-transform:uppercase;color:var(--tx-3);margin-bottom:7px}
  .campo label .op{text-transform:none;letter-spacing:0;color:var(--tx-3);font-family:var(--sans)}
  .campo input,.campo textarea{width:100%;font-family:var(--sans);font-size:15.5px;
    color:var(--tinta);background:var(--papel);border:1px solid var(--borda-campo);
    border-radius:11px;padding:13px 15px}
  .campo textarea{min-height:108px;resize:vertical;line-height:1.55}
  .campo input:focus-visible,.campo textarea:focus-visible{outline:3px solid var(--ouro);
    outline-offset:2px;border-color:var(--ouro)}
  .campo input::placeholder,.campo textarea::placeholder{color:var(--tx-3)}

  .optin{display:flex;gap:11px;align-items:flex-start;margin-top:20px;font-size:14px;
    color:var(--tx-2);line-height:1.55;cursor:pointer}
  .optin input{width:17px;height:17px;margin:2px 0 0;accent-color:var(--ouro);flex:none}
  .lgpd{font-size:13px;color:var(--tx-2);margin-top:16px;line-height:1.55}
  .erro{color:var(--alerta);font-size:14.5px;margin-top:14px;display:none}
  .ok.falhou{background:var(--atencao-s)}
  .ok.falhou b{color:var(--atencao)}
  .ok{display:none;background:var(--ok-s);border-radius:14px;padding:24px;
    font-size:15.5px;color:var(--tinta-2);line-height:1.6}
  .ok b{color:var(--ok)}
</style>

<section class="cap">
  <div class="wrap">
    <div class="olho">Conversa de descoberta</div>
    <h1>Comece pela jornada que mais trava o valor do seu negócio</h1>
    <p class="sub">Não começamos pelo método. Começamos pelo processo que está travando valor
       na sua empresa — e, se o diagnóstico não fizer sentido para ele, a gente diz isso.</p>
  </div>
</section>

<section class="sec">
  <div class="wrap ct">

    <div class="ct-lado">
      <h2>Como funciona a primeira conversa</h2>
      <p>Uma reunião de 45 minutos, sem compromisso e sem apresentação de slides. O objetivo é
         entender se existe uma missão de negócio com dono, baseline e espaço de decisão — que
         é o que torna um diagnóstico útil.</p>

      <div class="passos">
        <div><div class="n">01</div>
          <div><b>Você conta a jornada</b>
            <span>Qual processo não melhorou mesmo depois que a IA entrou, e onde você acha
              que o ganho está se perdendo.</span></div></div>
        <div><div class="n">02</div>
          <div><b>A gente devolve uma leitura inicial</b>
            <span>Quais dos oito componentes provavelmente explicam a retenção, e que evidência
              seria preciso levantar para confirmar.</span></div></div>
        <div><div class="n">03</div>
          <div><b>Decidimos juntos se faz sentido</b>
            <span>Se a missão não tem patrocinador capaz de mudar processo e investimento, o
              diagnóstico não resolve — e dizer isso é mais barato para os dois.</span></div></div>
      </div>

      <div class="nota">
        <b>O que não acontece nessa conversa.</b> Não há proposta comercial fechada, nem promessa
        de resultado, nem número de ROI. Escopo e preço dependem da missão escolhida e do
        tamanho do grupo a ouvir.
      </div>

      </div>

    <div class="ct-form">
      <form id="ct-form" novalidate>
        <h2>Deixe o seu contato</h2>
        <p>Retornamos em até dois dias úteis. Os campos de empresa e cargo ajudam a preparar a
           conversa, mas são opcionais.</p>

        <div class="campos">
          <div class="campo"><label for="c-nome">Nome</label>
            <input id="c-nome" type="text" autocomplete="name" placeholder="Seu nome"></div>
          <div class="campo"><label for="c-email">E-mail corporativo</label>
            <input id="c-email" type="email" autocomplete="email" placeholder="voce@empresa.com"></div>
          <div class="campo"><label for="c-empresa">Empresa <span class="op">(opcional)</span></label>
            <input id="c-empresa" type="text" autocomplete="organization" placeholder="Nome da empresa"></div>
          <div class="campo"><label for="c-cargo">Cargo <span class="op">(opcional)</span></label>
            <input id="c-cargo" type="text" autocomplete="organization-title" placeholder="Seu cargo"></div>
          <div class="campo todo"><label for="c-assunto">Qual jornada está travando? <span class="op">(opcional)</span></label>
            <textarea id="c-assunto" placeholder="Ex.: o ciclo de propostas comerciais continua levando duas semanas, mesmo com a equipe usando IA para redigir."></textarea></div>
        </div>

        <label class="optin">
          <input type="checkbox" id="c-optin">
          <span>Também quero receber conteúdos da Alun Business sobre redesenho organizacional
            com IA. Este consentimento é separado do contato sobre o diagnóstico.</span>
        </label>

        <p class="lgpd">Usamos estes dados para retornar o seu contato. O consentimento de
          marketing é separado e pode ser retirado a qualquer momento — basta responder qualquer
          mensagem nossa pedindo a exclusão. Leia a
          <a href="{{ '/privacy/' | relative_url }}" target="_blank" rel="noopener">política de
          privacidade</a>.</p>

        <div class="erro" id="ct-erro" role="alert"></div>

        <div class="botoes" style="margin-top:22px">
          <button type="submit" class="bt bt-1" id="ct-enviar">Quero conversar</button>
        </div>
      </form>
      <div class="ok" id="ct-ok" role="status" tabindex="-1"></div>
    </div>

  </div>
</section>

<script src="{{ '/assets/firebase-config.js' | relative_url }}"></script>
<script src="https://www.gstatic.com/firebasejs/10.13.2/firebase-app-compat.js"></script>
<script src="https://www.gstatic.com/firebasejs/10.13.2/firebase-firestore-compat.js"></script>
<script src="{{ '/recode/assets/leads.js' | relative_url }}"></script>
<script src="{{ '/recode/assets/form.js' | relative_url }}"></script>
<script>
  window.RECODE_FORM.ligar({
    forma:"ct-form", botao:"ct-enviar", erro:"ct-erro", ok:"ct-ok",
    nome:"c-nome", email:"c-email", empresa:"c-empresa", cargo:"c-cargo",
    assunto:"c-assunto", optin:"c-optin",
    origem:"pagina_contato",
    rotulo:"Quero conversar",
    sucessoExtra:"Se tiver um indicador dessa jornada em mãos — tempo de ciclo, retrabalho ou "
      + "reabertura — leve para a conversa: é por ele que o diagnóstico começa."
  });
</script>
