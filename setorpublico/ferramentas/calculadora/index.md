---
title: "Calculadora de valor público"
description: "Estime o potencial de ganho de eficiência de um caso de uso de IA — horas economizadas, capacidade liberada e custo — como estimativa para orientar a decisão."
---

<style>
  .calcgrid{display:grid;grid-template-columns:1fr 1fr;gap:16px;margin-top:24px;max-width:640px}
  @media(max-width:560px){ .calcgrid{grid-template-columns:1fr} }
  .calcgrid label{display:grid;gap:7px;font-size:13.5px;color:var(--tx2)}
  .calcgrid label b{color:var(--tx);font-weight:600;font-family:var(--disp);font-size:14px}
  .calcgrid label .hint{font-family:var(--mono);font-size:10.5px;color:var(--tx3)}
  .calcgrid input{background:var(--panel);border:1px solid var(--line2);border-radius:9px;color:var(--tx);
    font-family:var(--sans);font-size:15px;padding:11px 13px}
  .statgrid{display:grid;grid-template-columns:repeat(2,1fr);gap:1px;background:var(--line);border:1px solid var(--line);
    border-radius:12px;overflow:hidden;margin:6px 0 4px}
  @media(max-width:560px){ .statgrid{grid-template-columns:1fr} }
  .statbox{background:var(--bg2);padding:20px 22px}
  .statbox .v{font-family:var(--disp);font-weight:700;font-size:30px;letter-spacing:-.02em;line-height:1;
    background:linear-gradient(96deg,var(--accent),#5bc0d0);-webkit-background-clip:text;background-clip:text;
    -webkit-text-fill-color:transparent;font-variant-numeric:tabular-nums}
  .statbox .l{font-family:var(--mono);font-size:10.5px;color:var(--tx3);letter-spacing:.05em;margin-top:10px;text-transform:uppercase}
</style>

<div class="wrap">
  <div class="page-head">
    <div class="crumb"><a href="{{ '/setorpublico/' | relative_url }}">Início</a> / <a href="{{ '/setorpublico/ferramentas/' | relative_url }}">Ferramentas</a> / Calculadora de valor público</div>
    <h1>Calculadora de valor público</h1>
    <p class="lede">Uma estimativa do potencial de eficiência de um caso de uso: quantas horas ele pode liberar, o equivalente em capacidade e o custo associado. Serve para dimensionar a conversa — não para prometer resultado.</p>
  </div>

  <section class="blk" style="border-bottom:0;padding-top:32px;padding-bottom:60px">
    <div class="note no-print"><b>Estimativa, não garantia.</b> O ganho real depende do redesenho do processo, da qualidade dos dados e da adoção pelas pessoas. Use os números como ordem de grandeza.</div>

    <div class="calcgrid no-print">
      <label><b>Processos por mês</b><input id="c-proc" type="number" min="0" step="1" placeholder="ex.: 2000"><span class="hint">volume tratado no processo</span></label>
      <label><b>Tempo médio por processo, hoje</b><input id="c-tempo" type="number" min="0" step="1" placeholder="minutos"><span class="hint">em minutos</span></label>
      <label><b>Parte do tempo que a IA pode assumir</b><input id="c-pct" type="number" min="0" max="100" step="5" placeholder="% (ex.: 40)"><span class="hint">de 0 a 100%</span></label>
      <label><b>Servidores envolvidos</b><input id="c-serv" type="number" min="0" step="1" placeholder="opcional"><span class="hint">para contexto de equipe</span></label>
      <label><b>Custo-hora médio (R$)</b><input id="c-custo" type="number" min="0" step="1" placeholder="opcional"><span class="hint">para estimar economia</span></label>
    </div>

    <div class="actions no-print" style="margin-top:22px">
      <button id="c-go" class="btn btn-primary" type="button">Calcular <svg width="16" height="16"><use href="#i-arrow"></use></svg></button>
      <button id="c-reset" class="btn btn-line" type="button">Limpar</button>
    </div>
    <div id="c-msg" class="quiz-msg">Informe ao menos processos, tempo e percentual.</div>

    <div id="c-result" class="result" role="region" aria-live="polite" tabindex="-1"></div>
  </section>
</div>

{% raw %}
<script>
(function(){
  var go=document.getElementById('c-go'), reset=document.getElementById('c-reset');
  var msg=document.getElementById('c-msg'), result=document.getElementById('c-result');
  if(!go) return;
  function num(id){ var v=parseFloat(document.getElementById(id).value); return isNaN(v)?0:v; }
  function fmt(n){ return n.toLocaleString('pt-BR',{maximumFractionDigits:0}); }
  function fmt1(n){ return n.toLocaleString('pt-BR',{maximumFractionDigits:1}); }

  go.addEventListener('click', function(){
    var proc=num('c-proc'), tempo=num('c-tempo'), pct=num('c-pct'), serv=num('c-serv'), custo=num('c-custo');
    if(proc<=0 || tempo<=0 || pct<=0){ msg.classList.add('show'); return; }
    msg.classList.remove('show');
    if(pct>100) pct=100;
    var horasMes = proc * tempo / 60;              // horas totais/mês hoje
    var econMes = horasMes * (pct/100);            // horas economizadas/mês
    var econAno = econMes * 12;
    var fte = econAno / 1720;                       // ~horas úteis/ano por servidor
    var custoAno = custo>0 ? econAno * custo : 0;

    var stats =
      '<div class="statgrid">'+
        '<div class="statbox"><div class="v">'+fmt(econMes)+' h</div><div class="l">horas liberadas por mês</div></div>'+
        '<div class="statbox"><div class="v">'+fmt(econAno)+' h</div><div class="l">horas liberadas por ano</div></div>'+
        '<div class="statbox"><div class="v">'+fmt1(fte)+'</div><div class="l">equivalente em pessoas (tempo integral)</div></div>'+
        (custoAno>0 ? '<div class="statbox"><div class="v">R$ '+fmt(custoAno)+'</div><div class="l">custo do tempo liberado por ano</div></div>'
                    : '<div class="statbox"><div class="v">'+pct+'%</div><div class="l">redução potencial do tempo do processo</div></div>')+
      '</div>';

    var interp =
      '<div class="rk">Como interpretar</div>'+
      '<ul class="klist">'+
        '<li>O tempo liberado não some — é <b>recapacidade</b>: pode virar mais atendimento, mais análise ou fila menor.</li>'+
        '<li>Parte do ganho só se realiza com <b>redesenho do processo</b>; automatizar o passo errado economiza pouco.</li>'+
        '<li>Reserve capacidade para a <b>supervisão humana</b> — revisar a IA também custa tempo.</li>'+
      '</ul>'+
      '<div class="rk">Indicadores para acompanhar</div>'+
      '<ul class="klist">'+
        '<li><b>Linha de base</b> tempo médio e volume antes da IA.</li>'+
        '<li><b>Qualidade</b> taxa de erro e retrabalho após a IA.</li>'+
        '<li><b>Serviço</b> tempo de resposta e satisfação de quem é atendido.</li>'+
      '</ul>';

    result.className='result show sev-val';
    result.innerHTML =
      '<div class="rhead"><div class="ric"><svg><use href="#i-chart"></use></svg></div>'+
        '<div style="flex:1"><span class="badge val"><i></i>Estimativa de eficiência</span>'+
        '<h3 style="margin-top:10px">Potencial do caso</h3>'+
        '<p class="rdesc">Com base em '+fmt(proc)+' processos/mês, '+fmt(tempo)+' min cada e '+pct+'% automatizável'+(serv>0?' · '+fmt(serv)+' servidores envolvidos':'')+'.</p></div></div>'+
      stats + interp +
      '<div class="actions no-print" style="margin-top:22px"><button class="btn btn-line" type="button" onclick="window.print()">Imprimir / salvar PDF</button></div>'+
      '<div class="note" style="margin-top:16px">Resultado orientativo — estimativa, não garantia de impacto.</div>';
    result.scrollIntoView({behavior:'smooth',block:'start'}); result.focus({preventScroll:true});
  });

  reset.addEventListener('click', function(){
    ['c-proc','c-tempo','c-pct','c-serv','c-custo'].forEach(function(id){document.getElementById(id).value='';});
    result.className='result'; result.innerHTML=''; msg.classList.remove('show');
  });
})();
</script>
{% endraw %}
