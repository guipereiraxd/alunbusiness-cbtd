/* Diagrama de funcionamento do fluxo multiagente, 16:9 para slide.
   Rodar da raiz:  node bbts/assets/marca/gerar-fluxo.js
   Sai em bbts/bbts-repositorio/fluxo-agentes.png (1920x1080).

   O fluxo original é vertical e tem doze nós; em 16:9 ele vai em três
   faixas que se leem sempre da esquerda para a direita, com os retornos
   desenhados nos corredores entre as faixas. */
const fs=require('fs'), cp=require('child_process'), path=require('path');

const RAIZ  = path.resolve(__dirname, '../../..');
const MARCA = path.join(RAIZ, 'bbts/assets/marca/bbts-horizontal-amarelo.svg');
const SAIDA = path.join(RAIZ, 'bbts/bbts-repositorio/fluxo-agentes.png');
fs.mkdirSync(path.dirname(SAIDA), {recursive:true});
const dLogo = (fs.readFileSync(MARCA,'utf8').match(/<path[^>]*d="([^"]+)"/)||[])[1];

const L=1920, A=1080, OFF=(L-A)/2;
const AZUL='#465EFF', AMARELO='#FCFC30', NAVY='#0F1433', LILAS='#9EABFF',
      CARD='#171C42', BORDA='#2A3166', LINHA='#3A4280';

const MG=104, GAP=68, CW=(L-2*MG-GAP*3)/4, BH=92;
const B=[318, 548, 790];                       /* topo de cada faixa */
const col = i => MG + i*(CW+GAP);
const cxc = i => col(i)+CW/2;

const esc = s => String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;');
const txt=(x,y,s,{p=600,t=21,f='#FFFFFF',a='middle',ls=0}={})=>
  `<text x="${x}" y="${y}" text-anchor="${a}" font-family="Avenir Next" font-weight="${p}"
         font-size="${t}" letter-spacing="${ls}" fill="${f}">${esc(s)}</text>`;

/* ── nós ─────────────────────────────────────────────────── */
function no(c, b, linhas, tipo){
  const x=col(c), y=B[b], cx=cxc(c);
  const est = {
    processo: {fill:CARD, stroke:BORDA, sw:1.5, dash:'', cor:'#FFFFFF'},
    agente:   {fill:'rgba(70,94,255,.16)', stroke:AZUL, sw:2, dash:'', cor:'#FFFFFF'},
    decisao:  {fill:'rgba(23,28,66,.6)', stroke:AZUL, sw:1.8, dash:'7 5', cor:'#FFFFFF'},
    humano:   {fill:AMARELO, stroke:AMARELO, sw:2, dash:'', cor:NAVY}
  }[tipo];
  const n=linhas.length, y0 = y + BH/2 - (n-1)*14 + 7;
  const tag = tipo==='agente'
    ? `<rect x="${x+16}" y="${y-13}" width="66" height="26" rx="13" fill="${AZUL}"/>
       ${txt(x+49, y+5, 'AGENTE', {p:700,t:12,f:'#FFFFFF',ls:1.4})}` : '';
  const selo = tipo==='humano'
    ? `<rect x="${x+16}" y="${y-13}" width="80" height="26" rx="13" fill="${NAVY}"/>
       ${txt(x+56, y+5, 'HUMANO', {p:700,t:12,f:AMARELO,ls:1.4})}` : '';
  return `<rect x="${x}" y="${y}" width="${CW}" height="${BH}" rx="${tipo==='decisao'?26:16}"
            fill="${est.fill}" stroke="${est.stroke}" stroke-width="${est.sw}"
            ${est.dash?`stroke-dasharray="${est.dash}"`:''}/>
    ${tag}${selo}
    ${linhas.map((l,i)=>txt(cx, y0+i*28, l, {p: tipo==='humano'?700:600, t:21, f:est.cor})).join('')}`;
}

/* ── ligações ────────────────────────────────────────────── */
const seta = d => `<path d="${d}" stroke="${LINHA}" stroke-width="2.2" fill="none"
                     stroke-linecap="round" stroke-linejoin="round" marker-end="url(#pt)"/>`;
const rotulo = (x,y,s)=>{
  const w = s.length*7.6 + 26;
  return `<rect x="${x-w/2}" y="${y-15}" width="${w}" height="30" rx="15"
            fill="${NAVY}" stroke="${LINHA}" stroke-width="1"/>
          ${txt(x, y+6, s, {p:600, t:15, f:LILAS})}`;
};

/* corredores entre as faixas */
const C1a=452, C1b=496;              /* faixa 1 → 2 */
const C2 =768;                        /* faixa 2 → 3 */
const RX=980, RW=340, RY=672, RH=64;  /* caixa do laço, no corredor */
const RCY = RY + RH/2;

const laco = `
  <rect x="${RX}" y="${RY}" width="${RW}" height="${RH}" rx="14"
        fill="${CARD}" stroke="${AZUL}" stroke-width="1.6" stroke-dasharray="6 5"/>
  ${txt(RX+RW/2, RY+26, 'Revisar curadoria com feedback', {p:600,t:19,f:'#FFFFFF'})}
  ${txt(RX+RW/2, RY+50, 'uma única rodada', {p:600,t:15,f:AMARELO})}`;

const ligacoes = `
  ${seta(`M${cxc(0)+CW/2},${B[0]+BH/2} H${col(1)-6}`)}
  ${seta(`M${cxc(1)+CW/2},${B[0]+BH/2} H${col(2)-6}`)}
  ${seta(`M${cxc(2)+CW/2},${B[0]+BH/2} H${col(3)-6}`)}
  ${rotulo(col(3)-GAP/2, B[0]+BH/2, 'não')}

  ${seta(`M${cxc(3)},${B[0]+BH} V${C1a} H${cxc(0)} V${B[1]-6}`)}
  ${seta(`M${cxc(2)},${B[0]+BH} V${C1b} H${cxc(0)+68} V${B[1]-6}`)}
  ${rotulo(cxc(2)-30, C1b, 'sim, já diagnosticado')}

  ${seta(`M${cxc(0)+CW/2},${B[1]+BH/2} H${col(1)-6}`)}
  ${seta(`M${cxc(1)+CW/2},${B[1]+BH/2} H${col(2)-6}`)}
  ${seta(`M${cxc(2)+CW/2},${B[1]+BH/2} H${col(3)-6}`)}

  ${seta(`M${cxc(3)},${B[1]+BH} V${RCY} H${RX+RW+6}`)}
  ${rotulo(cxc(3)-150, RCY, 'sim, primeira vez')}

  ${seta(`M${RX},${RCY} H${cxc(1)} V${B[1]+BH+6}`)}

  ${seta(`M${cxc(3)-140},${B[1]+BH} V${C2} H${cxc(0)} V${B[2]-6}`)}
  ${rotulo(cxc(2)-40, C2, 'não — ou correção já tentada')}

  ${seta(`M${cxc(0)+CW/2},${B[2]+BH/2} H${col(1)-6}`)}
  ${seta(`M${cxc(1)+CW/2},${B[2]+BH/2} H${col(2)-6}`)}`;

/* legenda — explica os três tipos de caixa e ocupa a base */
const itens = [
  ['agente',   'Agente de IA',             'faz uma parte do trabalho'],
  ['decisao',  'Decisão do orquestrador',  'define o caminho'],
  ['humano',   'Etapa humana',             'sem ela, nada vale'],
  ['processo', 'Etapa automática',         'regra fixa, sem julgamento']
];
const LY = 958, LW = (L-2*MG)/itens.length;
const legenda = itens.map(([tipo,nome,desc],i)=>{
  const x = MG + i*LW;
  const est = {
    agente:  {fill:'rgba(70,94,255,.16)', stroke:AZUL, dash:''},
    decisao: {fill:'rgba(23,28,66,.6)',   stroke:AZUL, dash:'5 4'},
    humano:  {fill:AMARELO,                stroke:AMARELO, dash:''},
    processo:{fill:CARD,                   stroke:BORDA, dash:''}
  }[tipo];
  return `<rect x="${x}" y="${LY-15}" width="38" height="26" rx="8" fill="${est.fill}"
            stroke="${est.stroke}" stroke-width="1.6" ${est.dash?`stroke-dasharray="${est.dash}"`:''}/>
    ${txt(x+52, LY-1, nome, {p:700,t:17,f:'#FFFFFF',a:'start'})}
    ${txt(x+52, LY+22, desc, {p:500,t:15,f:LILAS,a:'start'})}`;
}).join('');

const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${L}" height="${L}" viewBox="0 0 ${L} ${L}">
  <defs>
    <marker id="pt" viewBox="0 0 10 10" refX="8.5" refY="5" markerWidth="6.5" markerHeight="6.5"
            orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" fill="${LINHA}"/></marker>
    <radialGradient id="glow" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="${AZUL}" stop-opacity=".30"/>
      <stop offset="60%" stop-color="${AZUL}" stop-opacity=".09"/>
      <stop offset="100%" stop-color="${AZUL}" stop-opacity="0"/>
    </radialGradient>
    <clipPath id="faixa"><rect width="${L}" height="${A}"/></clipPath>
  </defs>
  <rect width="${L}" height="${L}" fill="${NAVY}"/>
  <g transform="translate(0,${OFF})" clip-path="url(#faixa)">
    <rect width="${L}" height="${A}" fill="${NAVY}"/>
    <circle cx="960" cy="520" r="760" fill="url(#glow)"/>

    <g transform="translate(${MG},62) scale(${(46/36.36).toFixed(4)})">
      <path d="${dLogo}" fill="${AMARELO}" fill-rule="evenodd"/></g>
    ${txt(L-MG, 96, 'DEMONSTRAÇÃO · ALUN BUSINESS', {p:600,t:16,f:LILAS,ls:2.4,a:'end'})}
    ${txt(MG, 176, 'COMO O PDI É MONTADO', {p:600,t:18,f:AZUL,ls:3.2,a:'start'})}
    ${txt(MG, 240, 'O fluxo, da resposta ao plano aprovado', {p:800,t:50,f:'#FFFFFF',ls:-1.6,a:'start'})}

    ${ligacoes}
    ${laco}

    ${no(0,0,['Respostas do','colaborador'],'processo')}
    ${no(1,0,['Normalizar contexto','e aplicar política'],'processo')}
    ${no(2,0,['Diagnóstico válido','já disponível?'],'decisao')}
    ${no(3,0,['Diagnóstico'],'agente')}

    ${no(0,1,['Curadoria'],'agente')}
    ${no(1,1,['Verificação','de limites'],'processo')}
    ${no(2,1,['Governança'],'agente')}
    ${no(3,1,['Erros corrigíveis?'],'decisao')}

    ${no(0,2,['Separar aptos','e pendentes'],'processo')}
    ${no(1,2,['Aprovação dos','PDIs aptos'],'humano')}
    ${no(2,2,['Registrar apenas','os aprovados'],'processo')}

    <line x1="${MG}" y1="${LY-58}" x2="${L-MG}" y2="${LY-58}"
          stroke="${LILAS}" stroke-opacity=".2" stroke-width="1"/>
    ${legenda}
  </g>
</svg>`;

const TMP=fs.mkdtempSync('/tmp/fluxo-'), p=path.join(TMP,'f.svg');
fs.writeFileSync(p, svg);
cp.execSync(`qlmanage -t -s ${L} -o ${TMP} ${p}`, {stdio:'ignore'});
cp.execSync(`sips -c ${A} ${L} ${path.join(TMP,'f.svg.png')} --out ${SAIDA}`, {stdio:'ignore'});
const dim=cp.execSync(`sips -g pixelWidth -g pixelHeight ${SAIDA}`).toString()
  .match(/pixel(Width|Height): (\d+)/g).map(s=>s.split(': ')[1]).join('x');
console.log('gerado:', path.relative(RAIZ,SAIDA), '·', dim, '·', Math.round(fs.statSync(SAIDA).size/1024)+' KB');
fs.rmSync(TMP,{recursive:true,force:true});
