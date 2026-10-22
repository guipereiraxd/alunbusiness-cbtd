---
title: "Painel da GEPES"
description: "Visão agregada da prontidão em IA do grupo: participação, distribuição, necessidades de desenvolvimento e fila de PDIs aguardando revisão humana."
---

<style>
  .pn-top{background:var(--paper);border-bottom:1px solid var(--line);padding:30px 0 0}
  .pn-h{display:flex;justify-content:space-between;align-items:flex-end;gap:22px;flex-wrap:wrap}
  .pn-h h1{font-size:clamp(25px,3.4vw,34px);letter-spacing:-.02em}
  .pn-h .sk{font-family:var(--mono);font-size:10.5px;letter-spacing:.14em;text-transform:uppercase;color:var(--tx-3)}
  .pn-ctl{display:flex;gap:9px;align-items:center;flex-wrap:wrap}
  .tgl{display:inline-flex;align-items:center;gap:7px;font-family:var(--mono);font-size:10.5px;letter-spacing:.06em;
    color:var(--tx-2);background:var(--canvas);border:1px solid var(--line);border-radius:999px;padding:7px 13px;cursor:pointer}
  .tgl:hover{border-color:var(--blue-300)}
  .tgl input{accent-color:var(--blue);width:13px;height:13px;margin:0}
  .tgl.on{background:var(--blue-100);border-color:var(--blue-300);color:var(--blue-700)}
  .btn-s{font-family:var(--mono);font-size:10.5px;letter-spacing:.08em;text-transform:uppercase;
    background:var(--ink);color:#fff;border:0;border-radius:999px;padding:9px 16px;cursor:pointer}
  .btn-s:hover{background:var(--blue)}
  .modo{display:flex;gap:9px;align-items:flex-start;margin:20px 0 0;padding:12px 15px;border-radius:11px;
    background:var(--yellow-soft);border:1px solid var(--yellow-600);font-size:13px;color:var(--ink-2);line-height:1.5}
  .modo.ok{background:var(--panel);border-color:var(--line-2);color:var(--tx)}
  .modo b{color:var(--ink)}

  /* faixa de ação — o único número que pede decisão */
  .acao{display:flex;align-items:center;gap:20px;flex-wrap:wrap;margin:20px 0 0;padding:18px 22px;
    border-radius:14px;background:var(--blue-900);color:#fff}
  .acao .n{font-family:var(--disp);font-weight:700;font-size:34px;line-height:1;color:var(--yellow)}
  .acao .t{flex:1;min-width:220px}
  .acao .t b{display:block;font-family:var(--disp);font-weight:600;font-size:16px;color:#fff}
  .acao.vazia .t b{color:var(--ink)}
  .acao .t span{font-size:13.5px;color:var(--blue-300);line-height:1.5;display:block;margin-top:3px}
  .acao a{background:var(--yellow);color:var(--blue-900);text-decoration:none;font-weight:700;
    font-size:13.5px;padding:11px 20px;border-radius:999px;white-space:nowrap}
  .acao a:hover{background:#fff}
  .acao.vazia{background:var(--panel);color:var(--ink)}
  .acao.vazia .n{color:var(--ok)}
  .acao.vazia .t span{color:var(--tx-2)}

  .kp{display:grid;grid-template-columns:repeat(3,1fr);gap:1px;background:var(--line);
    border:1px solid var(--line);border-radius:14px;overflow:hidden;margin:20px 0 30px}
  @media(min-width:900px){ .kp{grid-template-columns:repeat(6,1fr)} }
  @media(max-width:620px){ .kp{grid-template-columns:repeat(2,1fr)} }
  .kp>div{background:var(--paper);padding:17px 18px}
  .kp .n{font-family:var(--disp);font-weight:700;font-size:27px;color:var(--ink);letter-spacing:-.025em;line-height:1}
  .kp .n small{font-size:14px;color:var(--tx-3);font-weight:600}
  .kp .l{font-family:var(--mono);font-size:10px;letter-spacing:.1em;text-transform:uppercase;color:var(--tx-3);margin-top:9px}
  .kp .s{font-size:12px;color:var(--tx-2);margin-top:5px;line-height:1.4}

  .sec{padding:30px 0}
  .sec+.sec{border-top:1px solid var(--line)}
  .sec>h2{font-family:var(--disp);font-weight:700;font-size:21px;color:var(--ink);letter-spacing:-.018em}
  .sec>p.d{color:var(--tx-2);font-size:14.5px;margin:7px 0 22px;max-width:74ch}

  .cols{display:grid;grid-template-columns:1fr 1fr;gap:26px}
  @media(max-width:880px){.cols{grid-template-columns:1fr}}
  .card{background:var(--paper);border:1px solid var(--line);border-radius:14px;padding:21px}
  .card h3{font-family:var(--disp);font-weight:600;font-size:15.5px;color:var(--ink);margin-bottom:4px}
  .card .cd{font-family:var(--mono);font-size:10px;letter-spacing:.09em;text-transform:uppercase;color:var(--tx-3);margin-bottom:18px}

  /* barra empilhada de perfis */
  .stk{display:flex;height:34px;border-radius:8px;overflow:hidden;border:1px solid var(--line)}
  .stk span{display:grid;place-items:center;font-family:var(--mono);font-size:10.5px;font-weight:600;color:#fff;min-width:0}
  .stk span.lt{color:var(--ink)}
  .lg{display:grid;gap:8px;margin-top:16px}
  .lg div{display:grid;grid-template-columns:11px 1fr auto;gap:10px;align-items:center;font-size:13px;color:var(--tx)}
  .lg i{width:11px;height:11px;border-radius:3px;display:block}
  .lg b{font-family:var(--mono);font-size:12px;color:var(--ink);font-weight:600}

  /* histograma */
  .hist{display:grid;grid-template-columns:repeat(4,1fr);gap:10px;align-items:end;height:150px}
  .hist>div{display:flex;flex-direction:column;justify-content:flex-end;height:100%;gap:7px;text-align:center}
  .hist .bb{background:var(--blue);border-radius:6px 6px 0 0;min-height:3px;position:relative}
  .hist .bb.me{background:var(--yellow);border:1px solid var(--yellow-600)}
  .hist .hv{font-family:var(--mono);font-size:12px;font-weight:600;color:var(--ink)}
  .hist .hl{font-family:var(--mono);font-size:9.5px;letter-spacing:.06em;color:var(--tx-3);line-height:1.4}

  /* dimensões */
  .dim{display:grid;gap:17px}
  .dim .r{display:grid;gap:7px}
  .dim .rh{display:flex;justify-content:space-between;align-items:baseline;gap:12px}
  .dim .rn{font-size:14px;color:var(--ink);font-weight:500}
  .dim .rv{font-family:var(--mono);font-size:12px;color:var(--tx-2)}
  .dim .rv b{color:var(--blue);font-weight:600;font-size:13.5px}
  /* Leitura: a faixa clara é onde o grupo inteiro cai; o traço azul é a
     média; o amarelo é você. A trilha vai de zero ao máximo da dimensão. */
  .trk{height:14px;background:var(--panel-2);border-radius:7px;position:relative;margin-top:4px}
  .trk .rg{position:absolute;top:0;height:14px;background:var(--blue-300);border-radius:7px;opacity:.5}
  .trk .md{position:absolute;top:-4px;width:4px;height:22px;background:var(--blue);
    border-radius:2px;transform:translateX(-2px)}
  .trk .mk{position:absolute;top:-7px;width:4px;height:28px;background:var(--yellow-600);
    border-radius:2px;transform:translateX(-2px);box-shadow:0 0 0 2px var(--canvas)}
  .dim .esc{display:flex;justify-content:space-between;margin-top:7px;
    font-family:var(--mono);font-size:10px;letter-spacing:.06em;color:var(--tx-3)}
  .dim-leg{display:flex;gap:20px;flex-wrap:wrap;margin-top:18px;
    font-family:var(--mono);font-size:10.5px;letter-spacing:.05em;color:var(--tx-2)}
  .dim-leg span{display:inline-flex;align-items:center;gap:7px}
  .dim-leg i{display:block;width:4px;height:15px;border-radius:2px}
  .dim-leg i.faixa{width:22px;height:11px;border-radius:6px;background:var(--blue-300);opacity:.5}

  /* tempo economizado */
  .tg{display:grid;grid-template-columns:330px 1fr;gap:26px;margin-top:30px}
  @media(max-width:880px){.tg{grid-template-columns:1fr}}
  .tg-big{background:var(--blue-900);border-radius:16px;padding:26px;color:#fff;
    display:flex;flex-direction:column;justify-content:center}
  .tg-big .n{font-family:var(--disp);font-weight:800;font-size:58px;line-height:1;
    color:var(--yellow);letter-spacing:-.03em}
  .tg-big .n small{font-size:22px;color:var(--blue-300);font-weight:600;letter-spacing:0}
  .tg-big .l{font-family:var(--mono);font-size:10.5px;letter-spacing:.1em;text-transform:uppercase;
    color:var(--blue-300);margin-top:14px}
  .tg-big .s{font-size:13.5px;line-height:1.55;color:var(--blue-100);margin-top:12px;
    padding-top:13px;border-top:1px solid rgba(158,171,255,.25)}
  .tg-big .s b{color:#fff}
  .tg-d{display:grid;gap:11px;align-content:center}
  .tg-d .i{display:grid;grid-template-columns:116px 1fr 92px;gap:14px;align-items:center}
  .tg-d .fx{font-size:13.5px;color:var(--ink);font-weight:500}
  .tg-d .bw{height:26px;background:var(--panel-2);border-radius:7px;overflow:hidden}
  .tg-d .bw i{display:block;height:100%;border-radius:7px;background:var(--blue)}
  .tg-d .i.zero .bw i{background:var(--tx-3)}
  .tg-d .vv{font-family:var(--mono);font-size:12px;color:var(--tx-2);text-align:right}
  .tg-d .vv b{color:var(--ink);font-weight:600;font-size:14px}
  @media(max-width:560px){.tg-d .i{grid-template-columns:92px 1fr 70px;gap:9px}}

  /* competências técnicas */
  .tec{display:grid;grid-template-columns:300px 1fr;gap:26px;margin-top:30px}
  @media(max-width:880px){.tec{grid-template-columns:1fr}}
  .tec-big{background:var(--panel);border:1px solid var(--line-2);border-radius:16px;padding:24px;
    display:flex;flex-direction:column;justify-content:center}
  .tec-big .n{font-family:var(--disp);font-weight:800;font-size:54px;line-height:1;color:var(--ink);
    letter-spacing:-.03em}
  .tec-big .n small{font-size:21px;color:var(--tx-3);font-weight:600}
  .tec-big .l{font-family:var(--mono);font-size:10.5px;letter-spacing:.1em;text-transform:uppercase;
    color:var(--tx-3);margin-top:13px}
  .tec-big .niveis{display:grid;gap:6px;margin-top:16px;padding-top:14px;border-top:1px solid var(--line-2)}
  .tec-big .niveis div{display:grid;grid-template-columns:1fr auto;gap:10px;font-size:12.5px;color:var(--tx-2)}
  .tec-big .niveis b{color:var(--ink);font-family:var(--mono);font-size:12px}
  .tec-d{display:grid;gap:10px;align-content:center}
  .tec-d .i{display:grid;grid-template-columns:260px 1fr 56px;gap:14px;align-items:center}
  .tec-d .nm{font-size:13.5px;color:var(--ink)}
  .tec-d .nm small{display:block;font-family:var(--mono);font-size:9.5px;letter-spacing:.08em;
    color:var(--tx-3);margin-top:2px}
  .tec-d .bw{height:22px;background:var(--panel-2);border-radius:6px;overflow:hidden}
  .tec-d .bw i{display:block;height:100%;border-radius:6px;background:var(--blue)}
  .tec-d .i.baixa .bw i{background:var(--warn)}
  .tec-d .vv{font-family:var(--mono);font-size:13px;color:var(--ink);font-weight:600;text-align:right}
  @media(max-width:620px){.tec-d .i{grid-template-columns:1fr 56px}.tec-d .bw{display:none}}

  /* necessidades */
  .nd{display:grid;gap:3px}
  .nd .i{display:grid;grid-template-columns:38px 1fr 120px 62px;gap:13px;align-items:center;
    padding:11px 13px;border-radius:9px;background:var(--paper);border:1px solid transparent}
  .nd .i:nth-child(odd){background:var(--canvas)}
  .nd .i.ctx{border-color:var(--yellow-600);background:var(--yellow-soft)}
  .nd .id{font-family:var(--mono);font-size:11px;font-weight:600;color:var(--blue)}
  .nd .tt{font-size:13.5px;color:var(--ink);line-height:1.35}
  .nd .tt em{font-style:normal;font-family:var(--mono);font-size:10px;letter-spacing:.08em;
    text-transform:uppercase;color:var(--warn);display:block;margin-top:3px}
  .nd .bw{height:7px;background:var(--panel-2);border-radius:4px;overflow:hidden}
  .nd .bw i{display:block;height:100%;background:var(--blue-500);border-radius:4px}
  .nd .i.ctx .bw i{background:var(--warn)}
  .nd .vv{font-family:var(--mono);font-size:12px;color:var(--ink);font-weight:600;text-align:right}
  @media(max-width:700px){.nd .i{grid-template-columns:34px 1fr 56px}.nd .bw{display:none}}

  /* macro-temas */
  .mt{display:grid;gap:3px}
  .mt .i{display:grid;grid-template-columns:1fr 150px 92px;gap:14px;align-items:center;padding:11px 13px;border-radius:9px}
  .mt .i:nth-child(odd){background:var(--canvas)}
  .mt .nm{font-size:13.5px;color:var(--ink)}
  .mt .bw{height:7px;background:var(--panel-2);border-radius:4px;overflow:hidden}
  .mt .bw i{display:block;height:100%;background:var(--blue);border-radius:4px}
  .mt .vv{font-family:var(--mono);font-size:11.5px;color:var(--tx-2);text-align:right}
  .mt .vv b{color:var(--ink);font-weight:600}
  @media(max-width:700px){.mt .i{grid-template-columns:1fr 86px}.mt .bw{display:none}}

  /* fila de PDIs */
  .fl{display:grid;grid-template-columns:repeat(auto-fit,minmax(168px,1fr));gap:13px}
  .fl>div{background:var(--paper);border:1px solid var(--line);border-radius:12px;padding:16px 17px}
  .fl .n{font-family:var(--disp);font-weight:700;font-size:25px;color:var(--ink);line-height:1}
  .fl .l{font-size:12.5px;color:var(--tx-2);margin-top:8px;line-height:1.4}
  .fl>div.hot{border-color:var(--yellow-600);background:var(--yellow-soft)}
  .fl>div.hot .n{color:var(--warn)}

  /* tabela */
  .tw{overflow-x:auto;border:1px solid var(--line);border-radius:13px;background:var(--paper)}
  table.pp{width:100%;border-collapse:collapse;font-size:13.5px;min-width:760px}
  table.pp th{font-family:var(--mono);font-size:9.5px;letter-spacing:.1em;text-transform:uppercase;color:var(--tx-3);
    text-align:left;padding:13px 15px;border-bottom:1px solid var(--line);white-space:nowrap;font-weight:600}
  table.pp th.r,table.pp td.r{text-align:right}
  table.pp td{padding:12px 15px;border-bottom:1px solid var(--line);color:var(--tx);vertical-align:middle}
  table.pp tr:last-child td{border-bottom:0}
  table.pp tr.eu{background:var(--yellow-soft)}
  table.pp tr:hover td{background:var(--canvas)}
  table.pp tr.eu:hover td{background:var(--yellow-soft)}
  .who{font-weight:600;color:var(--ink)}
  .who small{display:block;font-family:var(--mono);font-size:10px;letter-spacing:.05em;color:var(--tx-3);font-weight:400;margin-top:2px}
  .pg{display:inline-block;font-family:var(--mono);font-size:10px;letter-spacing:.07em;padding:3px 8px;border-radius:999px;
    background:var(--panel);color:var(--tx);border:1px solid var(--line-2);white-space:nowrap}
  .pg.c{background:var(--blue);color:#fff;border-color:var(--blue)}
  .pg.a{background:var(--blue-100);color:var(--blue-700);border-color:var(--blue-300)}
  .pg.t{background:var(--panel-2);color:var(--ink-2)}
  .pg.i{background:var(--paper);color:var(--tx-2)}
  .num{font-family:var(--mono);font-size:13px;color:var(--ink);font-weight:600}
  /* barra do índice, para dar escaneabilidade à coluna */
  .idx{display:grid;grid-template-columns:1fr 54px;gap:10px;align-items:center}
  .idx .bar{height:6px;background:var(--panel-2);border-radius:3px;overflow:hidden;min-width:46px}
  .idx .bar i{display:block;height:100%;background:var(--blue);border-radius:3px}
  tr.eu .idx .bar i{background:var(--yellow-600)}
  /* cabeçalho ordenável */
  table.pp th.ord{cursor:pointer;user-select:none;white-space:nowrap}
  table.pp th.ord:hover{color:var(--blue)}
  table.pp th.ord .s{opacity:.35;margin-left:4px;font-size:9px}
  table.pp th.ord.on{color:var(--blue)}
  table.pp th.ord.on .s{opacity:1}
  /* filtros */
  .filtros{display:flex;gap:7px;flex-wrap:wrap;margin:0 0 16px}
  .filtros button{font-family:var(--mono);font-size:10.5px;letter-spacing:.06em;color:var(--tx-2);
    background:var(--paper);border:1px solid var(--line);border-radius:999px;padding:7px 14px;cursor:pointer}
  .filtros button:hover{border-color:var(--blue-300)}
  .filtros button.on{background:var(--blue);border-color:var(--blue);color:#fff}
  .filtros button b{font-weight:600}
  .vazio-t{padding:34px 18px;text-align:center;color:var(--tx-2);font-size:14px}
  /* ações por linha */
  .acoes{display:flex;gap:12px;align-items:center;justify-content:flex-end;white-space:nowrap}
  .acoes button{background:none;border:0;cursor:pointer;padding:0;
    font-family:var(--mono);font-size:10.5px;letter-spacing:.06em}
  .acoes .env{color:var(--ok)}
  .acoes .del{color:var(--tx-3)}
  .acoes .env:hover{text-decoration:underline}
  .acoes .del:hover{color:var(--alert);text-decoration:underline}
  /* diálogo */
  .dlg-bg{position:fixed;inset:0;background:rgba(15,20,51,.62);z-index:90;
    display:none;align-items:center;justify-content:center;padding:24px}
  .dlg-bg.on{display:flex}
  .dlg{background:var(--paper);border-radius:18px;max-width:680px;width:100%;
    max-height:86vh;display:flex;flex-direction:column;overflow:hidden}
  .dlg h3{font-family:var(--disp);font-weight:700;font-size:20px;color:var(--ink);
    padding:24px 26px 0}
  .dlg .sub{color:var(--tx-2);font-size:14px;line-height:1.55;padding:9px 26px 0}
  .dlg .sub b{color:var(--ink)}
  .dlg .corpo{overflow:auto;margin:18px 26px 0;border:1px solid var(--line);border-radius:12px;
    background:var(--canvas)}
  .dlg .corpo iframe{width:100%;height:340px;border:0;display:block;background:#fff}
  .dlg .pe{display:flex;gap:10px;justify-content:flex-end;padding:20px 26px;flex-wrap:wrap}
  .dlg .pe button{font-family:var(--sans);font-size:14px;font-weight:600;
    border-radius:999px;padding:11px 22px;cursor:pointer;border:1px solid var(--line-2);
    background:var(--paper);color:var(--tx)}
  .dlg .pe button.pri{background:var(--blue);border-color:var(--blue);color:#fff}
  .dlg .pe button.per{background:var(--alert);border-color:var(--alert);color:#fff}
  .dlg .pe button:disabled{opacity:.55;cursor:default}
  .dlg .av{margin:16px 26px 0;padding:12px 15px;border-radius:10px;font-size:13.5px;line-height:1.5;
    background:var(--warn-s);border:1px solid var(--warn);color:var(--ink-2)}
  .num small{color:var(--tx-3);font-weight:400}
  .lnk{font-family:var(--mono);font-size:10.5px;letter-spacing:.06em;color:var(--blue);text-decoration:none;white-space:nowrap}
  .lnk:hover{text-decoration:underline}
  select.st{font-family:var(--mono);font-size:10.5px;color:var(--tx);background:var(--paper);
    border:1px solid var(--line-2);border-radius:7px;padding:5px 7px;max-width:170px}

  .vazio{text-align:center;padding:64px 22px}
  .vazio h2{font-family:var(--disp);font-weight:700;font-size:24px;color:var(--ink);margin-bottom:11px}
  .vazio p{color:var(--tx-2);font-size:15px;max-width:56ch;margin:0 auto 24px;line-height:1.6}
  .vazio .cta{display:inline-block;background:var(--blue);color:#fff;text-decoration:none;font-weight:600;
    padding:13px 25px;border-radius:999px;font-size:14.5px}
  .vazio .cta:hover{background:var(--blue-700)}
  .nota{font-family:var(--mono);font-size:11px;line-height:1.7;color:var(--tx-2);
    background:var(--canvas);border:1px solid var(--line);border-left:3px solid var(--blue-300);
    border-radius:0 10px 10px 0;padding:15px 17px;margin-top:24px}
  .nota b{color:var(--ink)}
  .nota.alerta{border-left-color:var(--warn);background:var(--warn-s)}

  .gate{max-width:420px;margin:64px auto;padding:30px 28px;background:var(--paper);
    border:1px solid var(--line);border-radius:16px}
  .gate h2{font-family:var(--disp);font-weight:700;font-size:21px;color:var(--ink);letter-spacing:-.018em}
  .gate p{color:var(--tx-2);font-size:14px;line-height:1.6;margin:9px 0 22px}
  .gate label{display:block;font-family:var(--mono);font-size:10px;letter-spacing:.1em;
    text-transform:uppercase;color:var(--tx-3);margin-bottom:6px}
  .gate input{width:100%;padding:12px 14px;border:1px solid var(--line-2);border-radius:9px;
    font-family:var(--sans);font-size:14.5px;color:var(--ink);background:var(--paper);margin-bottom:16px}
  .gate input:focus{outline:none;border-color:var(--blue);box-shadow:0 0 0 3px var(--blue-100)}
  /* o gerenciador de senhas preenche e pinta o fundo; mantém o desenho */
  .gate input:-webkit-autofill,
  .gate input:-webkit-autofill:hover,
  .gate input:-webkit-autofill:focus{
    -webkit-text-fill-color:var(--ink);
    box-shadow:0 0 0 1000px var(--paper) inset;
    transition:background-color 9999s ease-in-out 0s}
  .gate input:-webkit-autofill:focus{box-shadow:0 0 0 1000px var(--paper) inset,0 0 0 3px var(--blue-100)}
  .gate button{width:100%;background:var(--blue);color:#fff;border:0;border-radius:999px;
    padding:13px;font-family:var(--sans);font-weight:600;font-size:14.5px;cursor:pointer}
  .gate button:hover{background:var(--blue-700)}
  .gate button:disabled{background:var(--tx-3);cursor:default}
  .gate .err{background:var(--yellow-soft);border:1px solid var(--yellow-600);border-radius:9px;
    padding:11px 13px;font-size:13px;color:var(--ink-2);margin-bottom:16px;display:none;line-height:1.5}
  .gate .err.on{display:block}
  .gate .ft{font-family:var(--mono);font-size:10.5px;color:var(--tx-3);line-height:1.6;margin-top:18px;text-align:center}
  .sess{display:inline-flex;align-items:center;gap:9px;font-family:var(--mono);font-size:10.5px;color:var(--tx-2)}
  .sess button{background:none;border:0;color:var(--blue);font-family:var(--mono);font-size:10.5px;
    cursor:pointer;text-decoration:underline;padding:0}
  .live{display:inline-flex;align-items:center;gap:6px;font-family:var(--mono);font-size:10px;
    letter-spacing:.08em;text-transform:uppercase;color:var(--ok)}
  .live i{width:7px;height:7px;border-radius:50%;background:var(--ok);display:block;
    animation:pulse 2s ease-in-out infinite}
  @keyframes pulse{0%,100%{opacity:1}50%{opacity:.25}}
</style>

<div class="pn-top">
  <div class="wrap">
    <div class="pn-h">
      <div>
        <span class="sk">Visão da GEPES</span>
        <h1>Prontidão do grupo e fila de revisão</h1>
      </div>
      <div class="pn-ctl">
        <label class="tgl" id="tg-anon"><input type="checkbox" id="anon" checked> Ocultar identificação</label>
        <label class="tgl" id="tg-seed"><input type="checkbox" id="seed"> Coorte de referência</label>
        <button class="btn-s" id="rec">Atualizar</button>
      </div>
    </div>
    <div class="modo" id="modo"></div>
    <div class="acao" id="acao"></div>
    <div class="kp" id="kp"></div>
    <div class="nota alerta" id="amostra" style="display:none;margin-top:0"></div>
  </div>
</div>

<div class="dlg-bg" id="dlg-bg">
  <div class="dlg" role="dialog" aria-modal="true" aria-labelledby="dlg-t">
    <h3 id="dlg-t"></h3>
    <div class="sub" id="dlg-sub"></div>
    <div class="av" id="dlg-av" style="display:none"></div>
    <div class="corpo" id="dlg-corpo" style="display:none"><iframe id="dlg-prev" title="Prévia do e-mail"></iframe></div>
    <div class="pe">
      <button id="dlg-nao">Cancelar</button>
      <button id="dlg-sim" class="pri">Confirmar</button>
    </div>
  </div>
</div>

<div id="gate" class="gate" style="display:none">
  <h2>Painel restrito</h2>
  <p>Os registros trazem nome, e-mail e respostas de cada pessoa. A leitura exige
     autenticação — quem responde o assessment não precisa de conta, só a GEPES.</p>
  <div class="err" id="gate-err"></div>
  <label for="g-email">E-mail</label>
  <input type="email" id="g-email" autocomplete="username" placeholder="gepes@bbts.com.br">
  <label for="g-senha">Senha</label>
  <input type="password" id="g-senha" autocomplete="current-password" placeholder="••••••••">
  <button id="g-ok">Entrar</button>
  <div class="ft">Conta criada no console do Firebase.<br>Nenhuma senha passa por este repositório.</div>
</div>

<div id="vazio" class="vazio wrap" style="display:none">
  <h2>Nenhum registro ainda</h2>
  <p>O painel se monta a partir dos assessments respondidos. Assim que a primeira pessoa concluir,
     os indicadores agregados aparecem aqui.</p>
  <a class="cta" href="{{ '/bbts/assessment/' | relative_url }}">Responder o assessment →</a>
</div>

<div id="corpo" style="display:none">
  <div class="wrap">

    <section class="sec">
      <h2>Como o grupo se distribui</h2>
      <p class="d">O perfil vem de duas perguntas — autonomia de uso e capacidade de avaliar a resposta.
         O índice soma as quatro dimensões, de 12 a 48 pontos.</p>
      <div class="cols">
        <div class="card">
          <h3>Perfil declarado</h3>
          <div class="cd">P2 + P3 · quatro faixas</div>
          <div class="stk" id="stk"></div>
          <div class="lg" id="lg"></div>
        </div>
        <div class="card">
          <h3>Índice de prontidão</h3>
          <div class="cd">Distribuição em quatro faixas · 12 a 48 pontos</div>
          <div class="hist" id="hist"></div>
          <div class="nota" style="margin-top:17px" id="hist-n"></div>
        </div>
      </div>
    </section>

    <section class="sec">
      <h2>Médias por dimensão</h2>
      <p class="d">Cada trilha vai de zero ao máximo da dimensão. A faixa clara mostra onde o grupo
         inteiro cai: quanto mais larga, mais desigual. O traço azul é a média e o amarelo é você.</p>
      <div class="dim" id="dim"></div>
      <div class="dim-leg">
        <span><i class="faixa"></i>onde o grupo inteiro cai</span>
        <span><i style="background:var(--blue)"></i>média do grupo</span>
        <span><i style="background:var(--yellow-600)"></i>você</span>
      </div>
      <div class="nota" id="dim-n"></div>
    </section>

    <section class="sec">
      <h2>Tempo economizado, na percepção de quem responde</h2>
      <p class="d">A última pergunta do assessment pede uma estimativa de quanto tempo a IA já
         economiza por semana. É a única leitura de retorno que sai do próprio respondente — e por
         ser percepção, fica fora do índice de prontidão.</p>
      <div class="tg">
        <div class="tg-big" id="tg-big"></div>
        <div class="tg-d" id="tg-d"></div>
      </div>
      <div class="nota" id="tg-n"></div>
    </section>

    <section class="sec" id="sec-tec">
      <h2>Domínios de conhecimento técnico</h2>
      <p class="d">O que o grupo já faz na prática, agrupado em seis domínios de competência.
         Tem escala própria e <b>não entra no índice de prontidão</b>, que é calibrado de outro
         jeito. É esta leitura que mais orienta a escolha de curso, porque descreve execução e
         não percepção.</p>
      <div class="tec">
        <div class="tec-big" id="tec-big"></div>
        <div class="tec-d" id="tec-d"></div>
      </div>
      <div class="nota" id="tec-n"></div>
    </section>

    <section class="sec">
      <h2>Necessidades de desenvolvimento agregadas</h2>
      <p class="d">Média do grupo em cada competência, da mais baixa para a mais alta. As três de contexto
         de trabalho aparecem destacadas: dependem de ferramenta, permissão e agenda, não de formação.</p>
      <div class="nd" id="nd"></div>
    </section>

    <section class="sec">
      <h2>Demanda por macro-tema do catálogo</h2>
      <p class="d">Soma das lacunas de cada pessoa, convertida nos temas que as desenvolvem.
         É a leitura que orienta compra de trilha e formação de turma.</p>
      <div class="mt" id="mt"></div>
      <div class="nota" id="mt-n"></div>
    </section>

    <section class="sec" id="fila">
      <h2>Fila de revisão humana</h2>
      <p class="d">Nenhum PDI entra em vigor sem aprovação. O painel mostra onde cada proposta está
         e permite mover o status.</p>
      <div class="fl" id="fl"></div>
    </section>

    <section class="sec">
      <h2>Colaboradores</h2>
      <p class="d">Cada linha abre o resultado individual com o PDI completo. Com a identificação oculta,
         só o seu próprio registro aparece nomeado.</p>
      <div class="filtros" id="filtros"></div>
      <div class="tw"><table class="pp">
        <thead><tr>
          <th class="ord" data-k="nome">Colaborador<span class="s">↕</span></th>
          <th class="ord" data-k="indice">Índice<span class="s">↕</span></th>
          <th>Perfil</th>
          <th class="r ord" data-k="contexto">Contexto<span class="s">↕</span></th>
          <th class="r ord" data-k="ded">Dedicação<span class="s">↕</span></th>
          <th>Status</th><th></th>
        </tr></thead>
        <tbody id="tb"></tbody>
      </table></div>
      <div class="nota" id="tb-n"></div>
    </section>

  </div>
</div>

<script src="{{ '/assets/firebase-config.js' | relative_url }}"></script>
<script src="https://www.gstatic.com/firebasejs/10.13.2/firebase-app-compat.js"></script>
<script src="https://www.gstatic.com/firebasejs/10.13.2/firebase-firestore-compat.js"></script>
<script src="https://www.gstatic.com/firebasejs/10.13.2/firebase-auth-compat.js"></script>
<script src="{{ '/bbts/assets/store.js' | relative_url }}"></script>
<script src="{{ '/bbts/assets/base-demo.js' | relative_url }}"></script>
<script src="{{ '/bbts/assets/assessment-data.js' | relative_url }}"></script>
<script src="{{ '/bbts/assets/catalogo-alura.js' | relative_url }}"></script>
<script src="{{ '/bbts/assets/pdi-engine.js' | relative_url }}"></script>
<script>
(function(){
  var B = window.BBTS, E = window.BBTS_PDI, S = window.BBTS_STORE;
  var URL_RES = "{{ '/bbts/resultado/' | relative_url }}";
  var URL_ABS = location.origin + "{{ '/bbts/' | relative_url }}";
  var URL_ASS = "{{ '/bbts/assessment/' | relative_url }}";

  var CORES = { iniciante:"#8D91B0", tarefa:"#9EABFF", aplicador:"#465EFF", construtor:"#1E2D8A" };
  var CLARO  = { iniciante:true, tarefa:true };
  var FAIXAS = [ {de:12,ate:20,r:"12–20"}, {de:21,ate:29,r:"21–29"},
                 {de:30,ate:38,r:"30–38"}, {de:39,ate:48,r:"39–48"} ];
  var ST = { rascunho:"Rascunho", submetido:"Aguardando revisão",
             em_revisao:"Em revisão", aprovado:"Aprovado" };

  var anon = document.getElementById("anon");
  var seed = document.getElementById("seed");
  seed.checked = S.seedOn();
  sincTgl();

  function sincTgl(){
    document.getElementById("tg-anon").classList.toggle("on", anon.checked);
    document.getElementById("tg-seed").classList.toggle("on", seed.checked);
  }
  function esc(s){ return String(s==null?"":s)
    .replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;"); }
  function med(a){ return a.length ? a.reduce(function(x,y){return x+y;},0)/a.length : 0; }
  function n1(v){ return (Math.round(v*10)/10).toLocaleString("pt-BR",{minimumFractionDigits:1}); }
  function pct(v){ return Math.round(v*100); }

  var eu = S.eu();
  var dados = [];
  var desassinar = null;

  /* ---------- portão de autenticação ---------- */
  var gate = document.getElementById("gate");
  var topo = document.querySelector(".pn-top");

  function mostraGate(sim){
    gate.style.display = sim ? "block" : "none";
    document.getElementById("corpo").style.display = "none";
    document.getElementById("vazio").style.display = "none";
    document.getElementById("kp").style.display = sim ? "none" : "grid";
    document.querySelector(".pn-ctl").style.display = sim ? "none" : "flex";
    document.getElementById("modo").style.display = sim ? "none" : "flex";
  }

  function erroLogin(e){
    var m = String(e && e.code || e || "");
    return /wrong-password|invalid-credential|invalid-login/.test(m) ? "E-mail ou senha incorretos."
         : /user-not-found/.test(m) ? "Não há conta com esse e-mail."
         : /too-many-requests/.test(m) ? "Tentativas demais. Aguarde alguns minutos."
         : /network/.test(m) ? "Sem conexão com o servidor de autenticação."
         : /api-key|configuration-not-found|operation-not-allowed/.test(m)
           ? "O Firebase não está configurado para login neste ambiente. Isso é problema de "
             + "configuração, não da sua senha. (" + m + ")"
         : "Não foi possível entrar. " + m;
  }

  function ligarLogin(){
    var btn = document.getElementById("g-ok"), err = document.getElementById("gate-err");
    function tenta(){
      var em = document.getElementById("g-email").value.trim();
      var sn = document.getElementById("g-senha").value;
      if (!em || !sn){ err.textContent = "Preencha e-mail e senha."; err.classList.add("on"); return; }
      btn.disabled = true; btn.textContent = "Entrando…"; err.classList.remove("on");
      S.entrar(em, sn).catch(function(e){
        err.textContent = erroLogin(e); err.classList.add("on");
        btn.disabled = false; btn.textContent = "Entrar";
      });
    }
    btn.addEventListener("click", tenta);
    ["g-email","g-senha"].forEach(function(id){
      document.getElementById(id).addEventListener("keydown", function(ev){
        if (ev.key === "Enter") tenta();
      });
    });
  }

  function sessaoNoTopo(u){
    var alvo = document.querySelector(".pn-ctl");
    var velho = document.getElementById("sess"); if (velho) velho.remove();
    if (!u) return;
    var s = document.createElement("span");
    s.id = "sess"; s.className = "sess";
    s.innerHTML = '<span class="live"><i></i>ao vivo</span> · ' + esc(u.email)
      + ' · <button id="s-out">sair</button>';
    alvo.appendChild(s);
    document.getElementById("s-out").addEventListener("click", function(){
      if (desassinar){ desassinar(); desassinar = null; }
      S.sairPainel();
    });
  }

  function carregar(){
    document.getElementById("rec").textContent = "Carregando…";
    S.listar().then(desenhar);
  }

  /* Recebe tanto de listar() quanto da assinatura em tempo real. */
  function desenhar(res){
    document.getElementById("rec").textContent = "Atualizar";
    if (res.precisaLogin){ mostraGate(true); return; }
    mostraGate(false);

    var regs = (res.registros||[]).concat(seed.checked ? S.seedRegistros() : []);
    regs = regs.filter(function(r){ return r && r.R && Object.keys(r.R).length; });
    dados = regs.map(function(r){
      var calc = B.calcular(r.R);
      var piso = E.alvoComPiso(r.R, r.SK||{}, E.alvoDe(r.T||{}, calc));
      var alvo = piso.alvo;
      var lac  = E.lacunas(r.R, r.SK||{}, alvo);
      var tec  = B.calcularTecnico(r.R);
      if (tec) lac = lac.concat(E.lacunasTecnicas(r.R, alvo));
      return { reg:r, calc:calc, alvo:alvo, lac:lac, piso:piso, tec:tec,
               eu: !!(eu && eu.id === r.id),
               ded: Number((r.T||{}).ded) || 0,
               status: r.status || "submetido" };
    });
    modo(res);

    var vazio = !dados.length;
    document.getElementById("vazio").style.display = vazio ? "block" : "none";
    document.getElementById("corpo").style.display = vazio ? "none" : "block";
    document.getElementById("kp").style.display    = vazio ? "none" : "grid";
    if (vazio) return;
    kpis(); acao(); amostra(); perfis(); hist(); dims(); tempo(); tecnicas(); needs(); macros(); fila(); tabela();
  }

  function modo(res){
    var el = document.getElementById("modo"), reais = (res.registros||[]).length;
    if (S.ligado && !res.erro){
      el.className = "modo ok";
      el.innerHTML = "<div><b>Base compartilhada ativa.</b> "
        + reais+" registro"+(reais===1?"":"s")+" na coleção <code>"+S.colecao+"</code>"
        + ". O painel recebe cada novo assessment em tempo real.</div>";
    } else if (S.ligado){
      el.className = "modo";
      el.innerHTML = "<div><b>A base compartilhada não respondeu.</b> O painel está mostrando apenas "
        + (reais===1 ? "o registro" : "os "+reais+" registros") + " deste navegador.</div>";
    } else {
      el.className = "modo";
      el.innerHTML = "<div><b>Base ainda não compartilhada.</b> "
        + (reais===0 ? "Nenhum registro foi feito neste navegador."
           : reais===1 ? "Há 1 registro, feito neste navegador."
           : "Há "+reais+" registros, todos feitos neste navegador.")
        + " A base ao vivo depende do <code>assets/firebase-config.js</code>, que é gerado no "
        + "build a partir dos GitHub Secrets — localmente ele não existe, então cada navegador "
        + "mantém a própria base. No site publicado, os registros vão para o Firestore.</div>";
    }
  }

  /* ---------- KPIs ---------- */
  function kpis(){
    var idx = dados.map(function(d){return d.calc.indice;});
    var ctx = dados.map(function(d){return d.calc.contexto;});
    var deds = dados.filter(function(d){return d.ded;}).map(function(d){return d.ded;});
    var cont = {}; dados.forEach(function(d){ cont[d.calc.perfil.nome] = (cont[d.calc.perfil.nome]||0)+1; });
    var top = Object.keys(cont).sort(function(a,b){return cont[b]-cont[a];})[0];
    var porPessoa = dados.map(function(d){
      var pf = E.perfilCatalogo(d.reg.T||{}, d.alvo);
      var pl = E.planejar(E.candidatos(d.lac, d.reg.R, pf), d.ded);
      d.plano = pl; return pl.totalH;
    });
    var mediaH = med(porPessoa);

    document.getElementById("kp").innerHTML = [
      ["n", dados.length, "", "Assessments concluídos", ""],
      ["n", n1(med(idx)), "<small>/48</small>", "Índice médio de prontidão",
       "menor "+Math.min.apply(null,idx)+" · maior "+Math.max.apply(null,idx)],
      ["t", top || "—", "", "Perfil predominante",
       top ? cont[top]+" de "+dados.length+(dados.length===1?" pessoa":" pessoas")+" ("+pct(cont[top]/dados.length)+"%)" : ""],
      ["n", n1(med(ctx)), "<small>/12</small>", "Contexto de trabalho médio",
       "ferramenta, permissão e agenda"],
      ["n", deds.length ? n1(med(deds)) : "—", deds.length?"<small>h/sem</small>":"",
       "Dedicação média de estudo disponível",
       deds.length+" de "+dados.length+(deds.length===1?" informou":" informaram")],
      ["n", Math.round(mediaH), "<small>h</small>", "Formação por pessoa em 12 meses",
       "média dos planos · menor "+Math.min.apply(null,porPessoa)
         +"h · maior "+Math.max.apply(null,porPessoa)+"h"]
    ].map(function(k){
      var v = k[0]==="t"
        ? '<div class="n" style="font-size:19px;line-height:1.2">'+esc(k[1])+'</div>'
        : '<div class="n">'+esc(k[1])+k[2]+'</div>';
      return '<div>'+v+'<div class="l">'+esc(k[3])+'</div>'
        + (k[4]?'<div class="s">'+esc(k[4])+'</div>':'')+'</div>';
    }).join("");
  }

  /* ---------- faixa de ação ---------- */
  function acao(){
    var n = dados.filter(function(d){return d.status==="submetido";}).length;
    var el = document.getElementById("acao");
    el.className = "acao" + (n ? "" : " vazia");
    el.innerHTML = '<span class="n">'+n+'</span>'
      + '<span class="t"><b>'+(n
          ? (n===1 ? "1 PDI aguarda sua revisão" : n+" PDIs aguardam sua revisão")
          : "Nenhum PDI aguardando revisão")+'</b>'
      + '<span>'+(n
          ? "Propostas geradas pelo fluxo de agentes. Nenhuma entra em vigor sem decisão humana."
          : "Tudo que foi gerado já passou por leitura humana.")+'</span></span>'
      + (n ? '<a href="#fila">Ver a fila →</a>' : '');
  }

  /* Com poucos respondentes, média e distribuição não dizem nada.
     Melhor avisar do que deixar o painel sugerir solidez que não existe. */
  function amostra(){
    var reais = dados.filter(function(d){return !d.reg.seed;}).length;
    var el = document.getElementById("amostra");
    if (dados.length >= 8){ el.style.display = "none"; return; }
    el.style.display = "block";
    el.innerHTML = "<b>Amostra pequena: "+dados.length+" registro"+(dados.length===1?"":"s")+".</b> "
      + "Média, distribuição e demanda agregada só começam a dizer algo com algumas dezenas de "
      + "respostas. Até lá, leia os registros individualmente"
      + (reais < dados.length ? " — e lembre que parte deles é da coorte fictícia." : ".");
  }

  /* ---------- perfis ---------- */
  function perfis(){
    var ordem = ["iniciante","tarefa","aplicador","construtor"];
    var cont = {}; dados.forEach(function(d){ cont[d.calc.perfil.id] = (cont[d.calc.perfil.id]||0)+1; });
    var tot = dados.length;
    document.getElementById("stk").innerHTML = ordem.map(function(id){
      var n = cont[id]||0; if (!n) return "";
      var p = n/tot*100;
      return '<span class="'+(CLARO[id]?"lt":"")+'" style="flex:'+p+';background:'+CORES[id]+'" '
        + 'title="'+esc(nomeP(id))+': '+n+'">'+(p>=9?Math.round(p)+"%":"")+'</span>';
    }).join("");
    document.getElementById("lg").innerHTML = ordem.map(function(id){
      var n = cont[id]||0;
      return '<div><i style="background:'+CORES[id]+'"></i>'
        + '<span>'+esc(nomeP(id))+' — '+esc(descP(id))+'</span>'
        + '<b>'+n+' · '+pct(n/tot)+'%</b></div>';
    }).join("");
  }
  function perfObj(id){ return (window.BBTS.PERFIS||[]).filter(function(p){return p.id===id;})[0]; }
  function nomeP(id){ var o=perfObj(id); return o?o.nome:id; }
  function descP(id){ var o=perfObj(id); return o?o.desc:""; }

  /* ---------- histograma ---------- */
  function hist(){
    var bal = FAIXAS.map(function(f){
      var g = dados.filter(function(d){ return d.calc.indice>=f.de && d.calc.indice<=f.ate; });
      return { f:f, n:g.length, eu: g.some(function(d){return d.eu;}) };
    });
    var max = Math.max.apply(null, bal.map(function(b){return b.n;})) || 1;
    document.getElementById("hist").innerHTML = bal.map(function(b){
      var h = b.n ? Math.max(4, b.n/max*100) : 0;
      return '<div><div class="hv">'+b.n+'</div>'
        + '<div class="bb'+(b.eu?" me":"")+'" style="height:'+h+'%"></div>'
        + '<div class="hl">'+b.f.r+'</div></div>';
    }).join("");
    var minha = dados.filter(function(d){return d.eu;})[0];
    document.getElementById("hist-n").innerHTML = minha
      ? "<b>Seu índice: "+minha.calc.indice+" de 48.</b> A faixa em amarelo é a sua. "
        + "Metade do grupo está abaixo de "+mediana()+" pontos."
      : "Metade do grupo está abaixo de <b>"+mediana()+" pontos</b>. "
        + "Nenhum dos registros é o seu — responda o assessment para se localizar na distribuição.";
  }
  function mediana(){
    var a = dados.map(function(d){return d.calc.indice;}).sort(function(x,y){return x-y;});
    var m = Math.floor(a.length/2);
    return a.length%2 ? a[m] : Math.round((a[m-1]+a[m])/2);
  }

  /* ---------- dimensões ---------- */
  function dims(){
    var defs = [ ["uso","Uso atual",12], ["base","Base técnica",16],
                 ["infl","Influência",8], ["ctx","Contexto de trabalho",12] ];
    document.getElementById("dim").innerHTML = defs.map(function(d){
      var vs = dados.map(function(x){ return x.calc.sub[d[0]]; });
      var m = med(vs), lo = Math.min.apply(null,vs), hi = Math.max.apply(null,vs), max = d[2];
      var minha = dados.filter(function(x){return x.eu;})[0];
      var mk = minha ? '<span class="mk" style="left:'+(minha.calc.sub[d[0]]/max*100)+'%" '
        + 'title="Você: '+minha.calc.sub[d[0]]+' de '+max+'"></span>' : "";
      var larg = Math.max(1.2, (hi-lo)/max*100);   /* visível mesmo com grupo homogêneo */
      return '<div class="r"><div class="rh"><span class="rn">'+esc(d[1])+'</span>'
        + '<span class="rv">média <b>'+n1(m)+'</b> de '+max+'</span></div>'
        + '<div class="trk">'
        + '<span class="rg" style="left:'+(lo/max*100)+'%;width:'+larg+'%" '
        +   'title="O grupo vai de '+lo+' a '+hi+'"></span>'
        + '<span class="md" style="left:'+(m/max*100)+'%" title="Média: '+n1(m)+'"></span>'
        + mk + '</div>'
        + '<div class="esc"><span>0</span><span>mais baixo '+lo+' · mais alto '+hi+'</span>'
        +   '<span>'+max+'</span></div></div>';
    }).join("");
    var props = defs.map(function(d){
      return { nome:d[1], p: med(dados.map(function(x){return x.calc.sub[d[0]];}))/d[2] };
    }).sort(function(a,b){ return a.p-b.p; });
    document.getElementById("dim-n").innerHTML =
      "A dimensão mais frágil do grupo é <b>"+esc(props[0].nome)+"</b> ("+pct(props[0].p)+"% do máximo) "
      + "e a mais forte é <b>"+esc(props[3].nome)+"</b> ("+pct(props[3].p)+"%). "
      + (props[0].nome === "Contexto de trabalho"
          ? "Sendo contexto, o gargalo é de ambiente: ferramenta, permissão e agenda. Formação não resolve."
          : "Sendo uma dimensão de capacidade, responde a formação e prática dirigida.");
  }

  /* ---------- tempo economizado (P13) ---------- */
  function tempo(){
    var FAIXAS = [
      {n:1, r:"Sem ganho",   h:0},
      {n:2, r:"Até 1h",      h:0.5},
      {n:3, r:"De 1 a 3h",   h:2},
      {n:4, r:"Mais de 3h",  h:4}
    ];
    var cont = {}, total = 0, comResposta = 0;
    dados.forEach(function(d){
      var v = Number(d.reg.R.P13) || 0;
      if (!v) return;
      comResposta++;
      cont[v] = (cont[v]||0) + 1;
      total += (B.HORAS[v] || 0);
    });
    var max = Math.max.apply(null, FAIXAS.map(function(f){ return cont[f.n]||0; })) || 1;
    var media = comResposta ? total/comResposta : 0;

    document.getElementById("tg-big").innerHTML =
      '<div class="n">'+n1(total)+'<small> h/semana</small></div>'
      + '<div class="l">somadas no grupo</div>'
      + '<div class="s">Dá <b>'+n1(media)+' h por pessoa</b>, ou cerca de <b>'
      +   Math.round(total*4)+' h por mês</b> no grupo inteiro. '
      +   'São horas <b>percebidas</b>, não medidas.</div>';

    document.getElementById("tg-d").innerHTML = FAIXAS.map(function(f){
      var q = cont[f.n]||0;
      return '<div class="i'+(f.h===0?" zero":"")+'">'
        + '<span class="fx">'+esc(f.r)+'</span>'
        + '<div class="bw"><i style="width:'+(q/max*100)+'%"></i></div>'
        + '<div class="vv"><b>'+q+'</b> '+(q===1?"pessoa":"pessoas")+'</div></div>';
    }).join("");

    var semGanho = cont[1]||0;
    document.getElementById("tg-n").innerHTML =
      (comResposta < dados.length
        ? "<b>"+(dados.length-comResposta)+" de "+dados.length+" não responderam esta pergunta</b> e ficam fora da conta. "
        : "")
      + (semGanho
          ? "<b>"+semGanho+" "+(semGanho===1?"pessoa não percebe":"pessoas não percebem")+" ganho algum</b> — "
            + "vale olhar se é falta de uso ou falta de ferramenta, porque a saída é diferente em cada caso. "
          : "")
      + "A pergunta mede percepção, não relógio. Serve para dimensionar conversa e expectativa, "
      + "nunca para justificar meta de produtividade.";
  }

  /* ---------- competências técnicas ---------- */
  function tecnicas(){
    var sec = document.getElementById("sec-tec");
    var com = dados.filter(function(d){ return d.tec; });
    if (!com.length){ sec.style.display = "none"; return; }
    sec.style.display = "";

    var pts = com.map(function(d){ return d.tec.pontos; });
    var distr = {};
    com.forEach(function(d){ distr[d.tec.nivel.nome] = (distr[d.tec.nivel.nome]||0)+1; });

    document.getElementById("tec-big").innerHTML =
      '<div class="n">'+n1(med(pts))+'<small> / '+(com[0].tec.max || 28)+'</small></div>'
      + '<div class="l">pontuação média do grupo</div>'
      + '<div class="niveis">'
      +   B.NIVEIS_TEC.map(function(nv){
            var q = distr[nv.nome]||0;
            return '<div><span>'+esc(nv.nome)+'</span><b>'+q+'</b></div>';
          }).join("")
      + '</div>';

    /* leitura por dimensão: sete perguntas, seis dimensões */
    var porDim = B.DIMENSOES.map(function(d){
      var vs = com.map(function(x){ return x.tec.dims && x.tec.dims[d.id]; })
                  .filter(Boolean).map(function(v){ return v.valor; });
      return { d:d, m: med(vs), n: vs.length };
    });

    document.getElementById("tec-d").innerHTML = porDim.map(function(x){
      return '<div class="i'+(x.m < 1.6 ? " baixa" : "")+'">'
        + '<span class="nm">'+esc(x.d.nome)+'<small>'+esc(Object.keys(x.d.pesos).join(" "))+'</small></span>'
        + '<div class="bw"><i style="width:'+(x.m/4*100)+'%"></i></div>'
        + '<div class="vv">'+n1(x.m)+'<small style="color:var(--tx-3);font-weight:400">/4</small></div></div>';
    }).join("");

    var pior = porDim.slice().sort(function(x,y){ return x.m-y.m; })[0];
    pior = { t:{ titulo: pior.d.nome }, m: pior.m };
    var semZero = com.filter(function(d){ return d.tec.pontos === 0; }).length;

    document.getElementById("tec-n").innerHTML =
      (com.length < dados.length
        ? "<b>"+com.length+" de "+dados.length+" responderam o bloco técnico</b>, que entrou no "
          + "instrumento depois. Os demais ficam fora desta leitura. "
        : "")
      + "A competência mais frágil do grupo é <b>" + esc(pior.t.titulo) + "</b> ("
      + n1(pior.m) + " de 4). "
      + (semZero ? "<b>"+semZero+" "+(semZero===1?"pessoa":"pessoas")+" marcou 0 em tudo</b> — "
                 + "ponto de partida, não problema. " : "")
      + "Cada dimensão é a média ponderada das perguntas que a alimentam — nenhuma depende de uma "
      + "pergunta só. Diferente das de prontidão, aqui cada nível descreve prática verificável, "
      + "o que torna este eixo o melhor candidato a virar avaliação de competência de verdade.";
  }

  /* ---------- necessidades por competência ---------- */
  function needs(){
    var linhas = B.perguntas.filter(function(p){ return !p.foraDoIndice; }).map(function(p){
      var vs = dados.map(function(d){ return Number(d.reg.R[p.id])||0; }).filter(function(v){return v>0;});
      var pend = dados.filter(function(d){ return (d.reg.SK||{})[p.id]; }).length;
      var gaps = dados.filter(function(d){
        var l = d.lac.filter(function(x){return x.id===p.id;})[0];
        return l && l.estado==="lacuna";
      }).length;
      return { p:p, m: med(vs), n:vs.length, pend:pend, gaps:gaps,
               ctx: E.SEM_CURSO.indexOf(p.id) >= 0 };
    }).sort(function(a,b){ return a.m-b.m; });

    document.getElementById("nd").innerHTML = linhas.map(function(l){
      return '<div class="i'+(l.ctx?" ctx":"")+'">'
        + '<span class="id">'+l.p.id+'</span>'
        + '<div class="tt">'+esc(l.p.titulo)
        + (l.ctx?'<em>não se resolve com curso</em>':'')
        + '</div>'
        + '<div class="bw"><i style="width:'+(l.m/4*100)+'%"></i></div>'
        + '<div class="vv">'+n1(l.m)+'<small style="color:var(--tx-3);font-weight:400">/4</small></div>'
        + '</div>';
    }).join("");
  }

  /* ---------- macro-temas demandados ---------- */
  function macros(){
    var acc = {};
    dados.forEach(function(d){
      var vistos = {};
      d.lac.forEach(function(l){
        if (l.estado !== "lacuna") return;
        (E.MAPA[l.id]||[]).forEach(function(m){
          acc[m] = acc[m] || { peso:0, pessoas:0 };
          acc[m].peso += l.delta;
          if (!vistos[m]) { acc[m].pessoas++; vistos[m] = 1; }
        });
      });
    });
    var lista = Object.keys(acc).map(function(m){
      return { m:m, peso:acc[m].peso, pessoas:acc[m].pessoas };
    }).sort(function(a,b){ return b.pessoas-a.pessoas || b.peso-a.peso; }).slice(0,10);

    if (!lista.length){
      document.getElementById("mt").innerHTML =
        '<div class="i"><span class="nm">Nenhuma lacuna de capacidade no grupo.</span></div>';
      document.getElementById("mt-n").innerHTML = "Todas as metas declaradas já estão atendidas pelo nível atual.";
      return;
    }
    var max = lista[0].pessoas;
    document.getElementById("mt").innerHTML = lista.map(function(x){
      return '<div class="i"><span class="nm">'+esc(x.m)+'</span>'
        + '<div class="bw"><i style="width:'+(x.pessoas/max*100)+'%"></i></div>'
        + '<div class="vv"><b>'+x.pessoas+'</b> pessoa'+(x.pessoas===1?"":"s")+'</div></div>';
    }).join("");
    document.getElementById("mt-n").innerHTML =
      "<b>"+lista[0].pessoas+" de "+dados.length+" pessoas</b> têm lacuna em “"+esc(lista[0].m)+"”. "
      + "Com esse volume, vale turma fechada em vez de matrícula individual. "
      + "Os temas vêm do catálogo real de IA e Dados da Alura ("
      + window.BBTS_CATALOGO.cursos.length + " cursos).";
  }

  /* ---------- fila de revisão ---------- */
  function fila(){
    var ordem = ["rascunho","submetido","em_revisao","aprovado"];
    var cont = {}; dados.forEach(function(d){ cont[d.status] = (cont[d.status]||0)+1; });
    document.getElementById("fl").innerHTML = ordem.map(function(k){
      var n = cont[k]||0;
      var txt = { rascunho:"Assessment iniciado, sem PDI gerado.",
                  submetido:"PDI gerado pelo fluxo de agentes. Precisa de leitura humana.",
                  em_revisao:"Em análise com o gestor e a GEPES.",
                  aprovado:"Aprovado e em vigor no ciclo." }[k];
      return '<div'+(k==="submetido"&&n?' class="hot"':'')+'>'
        + '<div class="n">'+n+'</div>'
        + '<div class="l"><b>'+ST[k]+'</b><br>'+txt+'</div></div>';
    }).join("");
  }

  /* ---------- diálogo de confirmação ----------
     Excluir e enviar e-mail são ações que não dão para desfazer.
     Nenhuma das duas acontece sem passar por aqui. */
  function dialogo(o){
    var bg=document.getElementById("dlg-bg"), sim=document.getElementById("dlg-sim"),
        nao=document.getElementById("dlg-nao"), av=document.getElementById("dlg-av"),
        corpo=document.getElementById("dlg-corpo"), prev=document.getElementById("dlg-prev");
    document.getElementById("dlg-t").textContent = o.titulo;
    document.getElementById("dlg-sub").innerHTML = o.sub;
    av.style.display = o.aviso ? "block" : "none";
    if (o.aviso) av.innerHTML = o.aviso;
    corpo.style.display = o.previa ? "block" : "none";
    if (o.previa) prev.srcdoc = o.previa;
    sim.textContent = o.confirmar || "Confirmar";
    sim.className = o.perigo ? "per" : "pri";
    sim.disabled = false;
    bg.classList.add("on");

    function fecha(){ bg.classList.remove("on"); prev.srcdoc=""; limpa(); }
    function limpa(){
      sim.replaceWith(sim.cloneNode(true)); nao.replaceWith(nao.cloneNode(true));
      document.removeEventListener("keydown", esc);
    }
    function esc(e){ if (e.key === "Escape") fecha(); }
    document.addEventListener("keydown", esc);

    document.getElementById("dlg-nao").onclick = fecha;
    document.getElementById("dlg-sim").onclick = function(){
      var b = document.getElementById("dlg-sim");
      b.disabled = true; b.textContent = o.fazendo || "Aguarde…";
      Promise.resolve(o.aoConfirmar()).then(function(){ fecha(); })
        .catch(function(e){
          b.disabled = false; b.textContent = o.confirmar || "Confirmar";
          av.style.display="block";
          av.innerHTML = "<b>Não deu certo.</b> " + esc(String(e && e.message || e));
        });
    };
    bg.onclick = function(e){ if (e.target === bg) fecha(); };
  }

  /* ---------- ações ---------- */
  function excluirRegistro(d){
    dialogo({
      titulo: "Excluir este registro?",
      sub: "Vai sair da base o assessment e o PDI de <b>" + esc(d.reg.nome || "registro sem nome")
         + "</b>" + (d.reg.email ? " (" + esc(d.reg.email) + ")" : "") + ".",
      aviso: "Não dá para desfazer. Se a pessoa responder de novo com o mesmo e-mail, "
           + "um registro novo é criado.",
      confirmar: "Excluir", fazendo: "Excluindo…", perigo: true,
      aoConfirmar: function(){
        return S.excluir(d.reg.id).then(function(r){
          if (!r.ok) throw new Error(r.erro || "falha ao excluir");
          return carregar();
        });
      }
    });
  }

  function enviarPDI(d){
    if (!d.reg.email){
      dialogo({ titulo:"Sem e-mail no registro",
        sub:"Este registro não tem e-mail, então não há para onde enviar.",
        confirmar:"Entendi", aoConfirmar:function(){} });
      return;
    }
    var m = emailDoPDI(d);
    dialogo({
      titulo: "Enviar o PDI por e-mail?",
      sub: "Vai para <b>" + esc(d.reg.email) + "</b>, com o assunto “" + esc(m.assunto) + "”. "
         + "Abaixo, exatamente o que a pessoa vai receber.",
      previa: m.html,
      confirmar: "Enviar agora", fazendo: "Enfileirando…",
      aoConfirmar: function(){
        return S.enviarEmail(d.reg.email, m.assunto, m.html).then(function(){
          var el = document.getElementById("modo");
          el.className = "modo ok";
          el.innerHTML = "<div><b>E-mail enfileirado para " + esc(d.reg.email) + ".</b> "
            + "A entrega é feita pela extensão do Firebase; se não chegar em alguns minutos, "
            + "confira se a extensão Trigger Email está instalada e configurada.</div>";
        });
      }
    });
  }

  /* ---------- e-mail do PDI aprovado ----------
     HTML de e-mail: tabelas e estilo embutido, porque cliente de e-mail
     ignora folha de estilo e boa parte de flex/grid. */
  function emailDoPDI(d){
    var nome  = (d.reg.nome||"").split(" ")[0] || "Olá";
    var calc  = d.calc, T = d.reg.T||{};
    var pf    = E.perfilCatalogo(T, d.alvo);
    var plano = d.plano || E.planejar(E.candidatos(d.lac, d.reg.R, pf), d.ded);
    var hoje  = new Date();

    var ciclos = plano.ciclos.map(function(c, i){
      var ini = new Date(hoje.getTime()); ini.setMonth(ini.getMonth() + i*3);
      var mes = ini.toLocaleDateString("pt-BR", {month:"long", year:"numeric"});
      var itens = c.cursos.length
        ? c.cursos.map(function(cu){
            return '<tr><td style="padding:7px 0;border-bottom:1px solid #E1E4F4">'
              + '<a href="'+cu.url+'" style="color:#1630DA;text-decoration:none;font-weight:600">'+esc(cu.t)+'</a>'
              + '<div style="color:#5E648D;font-size:13px;margin-top:2px">'+esc(cu.prof)+' · '+cu.h+'h</div>'
              + '</td></tr>';
          }).join("")
        : '<tr><td style="padding:7px 0;color:#5E648D">Sem curso neste ciclo — use o tempo na atividade prática.</td></tr>';
      return '<div style="margin:0 0 22px">'
        + '<div style="font:600 12px/1 ui-monospace,monospace;letter-spacing:.12em;'
        +   'text-transform:uppercase;color:#465EFF">Ciclo '+c.n+' · '+esc(mes)+'</div>'
        + '<div style="font:700 17px/1.3 Helvetica,Arial,sans-serif;color:#12152B;margin:6px 0 8px">'
        +   c.cursos.length+' curso'+(c.cursos.length===1?"":"s")+' · '+c.horas+'h de '+c.capacidade+'h</div>'
        + '<table width="100%" cellspacing="0" cellpadding="0" style="font:400 15px/1.45 Helvetica,Arial,sans-serif">'
        +   itens + '</table></div>';
    }).join("");

    var linha = function(r, v){
      return '<td style="padding:12px 16px;background:#ECEEF8;border-radius:10px">'
        + '<div style="font:600 11px/1 ui-monospace,monospace;letter-spacing:.1em;'
        +   'text-transform:uppercase;color:#5E648D">'+esc(r)+'</div>'
        + '<div style="font:700 20px/1.2 Helvetica,Arial,sans-serif;color:#12152B;margin-top:5px">'+esc(v)+'</div></td>';
    };

    var html =
      '<div style="margin:0;padding:26px 14px;background:#F4F5FB">'
    + '<table align="center" width="600" cellspacing="0" cellpadding="0" style="max-width:600px;'
    +   'background:#FFFFFF;border-radius:18px;overflow:hidden"><tr><td>'

    + '<div style="background:#0F1433;padding:26px 30px">'
    +   '<div style="font:700 13px/1 ui-monospace,monospace;letter-spacing:.16em;color:#FCFC30">BBTS</div>'
    +   '<div style="font:700 24px/1.25 Helvetica,Arial,sans-serif;color:#FFFFFF;margin-top:10px">'
    +     'Seu PDI foi aprovado</div>'
    +   '<div style="font:400 15px/1.5 Helvetica,Arial,sans-serif;color:#9EABFF;margin-top:7px">'
    +     'Avaliação de Prontidão em IA · plano para os próximos 12 meses</div>'
    + '</div>'

    + '<div style="padding:30px">'
    + '<p style="font:400 16px/1.6 Helvetica,Arial,sans-serif;color:#3B4163;margin:0 0 20px">'
    +   esc(nome)+', a GEPES revisou e aprovou o plano gerado a partir do seu assessment. '
    +   'Ele vale para os próximos quatro ciclos de 90 dias.</p>'

    + '<table width="100%" cellspacing="8" cellpadding="0"><tr>'
    +   linha("Índice de prontidão", calc.indice+" de 48")
    +   linha("Perfil", calc.perfil.nome)
    + '</tr><tr>'
    +   linha("Dedicação declarada", (d.ded||0)+" h/semana")
    +   linha("No plano", plano.totalC+" cursos · "+plano.totalH+"h")
    + '</tr></table>'

    + '<h2 style="font:700 19px/1.3 Helvetica,Arial,sans-serif;color:#12152B;margin:30px 0 16px">'
    +   'O plano, ciclo a ciclo</h2>'
    + ciclos

    + '<div style="background:#FFFFDB;border:1px solid #C9C90E;border-radius:12px;padding:16px 18px;margin:8px 0 24px">'
    +   '<div style="font:700 14px/1.4 Helvetica,Arial,sans-serif;color:#12152B">Duas coisas importantes</div>'
    +   '<div style="font:400 14px/1.55 Helvetica,Arial,sans-serif;color:#3B4163;margin-top:7px">'
    +     'Concluir curso não eleva nível por si só — a evolução precisa de evidência prática. '
    +     'E as cargas horárias são estimadas pela profundidade do curso, não medidas.</div>'
    + '</div>'

    + '<a href="'+URL_ABS+'resultado/?id='+encodeURIComponent(d.reg.id)+'" '
    +   'style="display:inline-block;background:#465EFF;color:#FFFFFF;text-decoration:none;'
    +   'font:700 15px/1 Helvetica,Arial,sans-serif;padding:15px 26px;border-radius:999px">'
    +   'Ver o plano completo</a>'

    + '<p style="font:400 13px/1.55 Helvetica,Arial,sans-serif;color:#8D91B0;margin:26px 0 0">'
    +   'Demonstração · Alun Business para a BBTS. Dados fictícios, não representa avaliação real.</p>'
    + '</div></td></tr></table></div>';

    return { assunto: "Seu PDI em IA e Dados foi aprovado", html: html };
  }

  /* ---------- tabela ---------- */
  var ordK = "indice", ordDir = -1, filtro = "";

  function valorDe(d, k){
    return k === "nome"     ? (d.reg.nome||"").toLowerCase()
         : k === "indice"   ? d.calc.indice
         : k === "contexto" ? d.calc.contexto
         : k === "ded"      ? d.ded : 0;
  }

  function filtrosUI(){
    var cont = {}; dados.forEach(function(d){ cont[d.status] = (cont[d.status]||0)+1; });
    var opts = [["","Todos",dados.length]].concat(
      ["submetido","em_revisao","aprovado","rascunho"].map(function(k){ return [k, ST[k], cont[k]||0]; })
    ).filter(function(o){ return o[2] > 0 || o[0] === ""; });
    var host = document.getElementById("filtros");
    host.innerHTML = opts.map(function(o){
      return '<button data-f="'+o[0]+'"'+(filtro===o[0]?' class="on"':'')+'>'
        + esc(o[1])+' <b>'+o[2]+'</b></button>';
    }).join("");
    host.querySelectorAll("button").forEach(function(b){
      b.addEventListener("click", function(){ filtro = b.dataset.f; tabela(); });
    });
  }

  function cabecalhos(){
    document.querySelectorAll("table.pp th.ord").forEach(function(th){
      th.classList.toggle("on", th.dataset.k === ordK);
      th.querySelector(".s").textContent = th.dataset.k === ordK ? (ordDir < 0 ? "↓" : "↑") : "↕";
      if (!th.dataset.bound){
        th.dataset.bound = "1";
        th.addEventListener("click", function(){
          if (ordK === th.dataset.k) ordDir = -ordDir;
          else { ordK = th.dataset.k; ordDir = th.dataset.k === "nome" ? 1 : -1; }
          tabela();
        });
      }
    });
  }

  function tabela(){
    filtrosUI(); cabecalhos();
    var lista = dados.filter(function(d){ return !filtro || d.status === filtro; })
      .sort(function(x,y){
        if (x.eu !== y.eu) return x.eu ? -1 : 1;   /* o próprio registro sempre no topo */
        var p = valorDe(x, ordK), q = valorDe(y, ordK);
        return p < q ? -ordDir : p > q ? ordDir : 0;
      });
    var i = 0;
    document.getElementById("tb").innerHTML = lista.map(function(d){
      i++;
      var mostra = d.eu || !anon.checked;
      var nome = mostra ? esc(d.reg.nome || "Colaborador "+i) : "Colaborador "+i;
      var sub  = d.eu ? "você" : (mostra && d.reg.email ? esc(d.reg.email) : "");
      var cls  = { iniciante:"i", tarefa:"t", aplicador:"a", construtor:"c" }[d.calc.perfil.id];
      var op   = ["rascunho","submetido","em_revisao","aprovado"].map(function(k){
        return '<option value="'+k+'"'+(d.status===k?" selected":"")+'>'+ST[k]+'</option>';
      }).join("");
      return '<tr'+(d.eu?' class="eu"':'')+'>'
        + '<td><span class="who">'+nome+(sub?'<small>'+sub+'</small>':'')+'</span></td>'
        + '<td><div class="idx"><span class="bar"><i style="width:'
            + Math.round((d.calc.indice-12)/36*100) + '%"></i></span>'
            + '<span class="num">'+d.calc.indice+'<small>/48</small></span></div></td>'
        + '<td><span class="pg '+cls+'">'+esc(d.calc.perfil.nome)+'</span></td>'
        + '<td class="r"><span class="num">'+d.calc.contexto+'<small>/12</small></span></td>'
        + '<td class="r"><span class="num">'+(d.ded?d.ded+'<small>h/sem</small>':'—')+'</span></td>'
        + '<td>'+(d.reg.seed
            ? '<span class="pg">'+ST[d.status]+'</span>'
            : '<select class="st" data-id="'+esc(d.reg.id)+'">'+op+'</select>')+'</td>'
        + '<td class="r"><div class="acoes">'
        +   '<a class="lnk" href="'+URL_RES+'?id='+encodeURIComponent(d.reg.id)+'">ver PDI →</a>'
        +   (d.reg.seed ? '' :
                (d.status==="aprovado" && d.reg.email ? '<button class="env" data-env="'+esc(d.reg.id)+'">enviar</button>' : '')
              + '<button class="del" data-del="'+esc(d.reg.id)+'">excluir</button>')
        + '</div></td>'
        + '</tr>';
    }).join("");

    if (!lista.length){
      document.getElementById("tb").innerHTML =
        '<tr><td colspan="7"><div class="vazio-t">Nenhum colaborador com esse status.</div></td></tr>';
    }

    document.getElementById("tb").querySelectorAll("button[data-del]").forEach(function(b){
      b.addEventListener("click", function(){
        var d = dados.filter(function(x){ return x.reg.id === b.dataset.del; })[0];
        if (d) excluirRegistro(d);
      });
    });
    document.getElementById("tb").querySelectorAll("button[data-env]").forEach(function(b){
      b.addEventListener("click", function(){
        var d = dados.filter(function(x){ return x.reg.id === b.dataset.env; })[0];
        if (d) enviarPDI(d);
      });
    });

    document.getElementById("tb").querySelectorAll("select.st").forEach(function(sel){
      sel.addEventListener("change", function(){
        var id = sel.dataset.id, novo = sel.value;
        S.status(id, novo).then(carregar).then(function(){
          if (novo !== "aprovado") return;
          var d = dados.filter(function(x){ return x.reg.id === id; })[0];
          if (d && d.reg.email) enviarPDI(d);   /* aprovou: oferece mandar */
        });
      });
    });

    var qs = dados.filter(function(d){return d.reg.seed;}).length;
    document.getElementById("tb-n").innerHTML =
      (qs ? "<b>"+qs+" registros</b> vêm da coorte de referência, que é fictícia e serve para mostrar o painel cheio. "
            + "Desligue o seletor no topo para ver só os registros reais. "
          : "")
      + "O status é editável apenas nos registros reais — é o ponto onde a decisão humana entra no fluxo.";
  }

  anon.addEventListener("change", function(){ sincTgl(); if (dados.length) tabela(); });
  seed.addEventListener("change", function(){ sincTgl(); S.setSeed(seed.checked); carregar(); });
  /* mantém o modo() coerente quando a leitura veio da assinatura */
  document.getElementById("rec").addEventListener("click", carregar);

  /* Com Firestore, o painel entra pelo login e passa a receber em tempo real.
     Sem Firestore (ambiente local), roda direto sobre o espelho local. */
  if (S.ligado && !S.temAuth){
    /* Firestore presente mas SDK de autenticação ausente: oferecer um
       formulário de login aqui seria enganoso — ele não teria como funcionar. */
    mostraGate(true);
    gate.innerHTML = '<h2>Login indisponível</h2>'
      + '<p>O componente de autenticação do Firebase não carregou nesta página, '
      + 'então não há como verificar quem você é. Em geral é página em cache: o '
      + 'GitHub Pages guarda o HTML por 10 minutos.</p>'
      + '<div class="err on">Recarregue forçando a atualização — <b>Cmd+Shift+R</b> no Mac, '
      + '<b>Ctrl+F5</b> no Windows. Se persistir, algo está bloqueando '
      + '<code>gstatic.com</code>.</div>'
      + '<button id="g-recarrega">Recarregar ignorando o cache</button>';
    document.getElementById("g-recarrega").addEventListener("click", function(){
      location.replace(location.pathname + "?r=" + Date.now());
    });
  } else if (S.ligado && S.temAuth){
    ligarLogin();
    mostraGate(true);
    S.aoMudarLogin(function(u){
      sessaoNoTopo(u);
      if (!u){ mostraGate(true); return; }
      mostraGate(false);
      carregar();
      if (desassinar) desassinar();
      desassinar = S.assinar(function(res){ desenhar(res); });
    });
  } else {
    carregar();
  }
})();
</script>
