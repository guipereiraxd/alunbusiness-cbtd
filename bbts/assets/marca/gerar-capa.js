/* Capa 16:9 do bloco BBTS — os agentes e o orquestrador.
   Rodar da raiz:  node bbts/assets/marca/gerar-capa.js
   Sai em bbts/bbts-repositorio/capa-sistema.png (1920x1080).

   Canvas autorado quadrado pelo mesmo motivo do og.png: o qlmanage escala
   para preencher, e só com quadrado a renderização sai 1:1. */
const fs=require('fs'), cp=require('child_process'), path=require('path');

const RAIZ  = path.resolve(__dirname, '../../..');
const MARCA = path.join(RAIZ, 'bbts/assets/marca/bbts-horizontal-amarelo.svg');
const SAIDA = path.join(RAIZ, 'bbts/bbts-repositorio/capa-sistema.png');
fs.mkdirSync(path.dirname(SAIDA), {recursive:true});
const dLogo = (fs.readFileSync(MARCA,'utf8').match(/<path[^>]*d="([^"]+)"/)||[])[1];

const L=1920, A=1080, OFF=(L-A)/2, MG=104, W=L-2*MG;
const AZUL='#465EFF', AMARELO='#FCFC30', NAVY='#0F1433', LILAS='#9EABFF',
      CARD='#171C42', BORDA='#2A3166';

const esc = s => String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;');
const txt = (x,y,s,{p=500,t=21,f=LILAS,a='start',ls=0}={}) =>
  `<text x="${x}" y="${y}" text-anchor="${a}" font-family="Avenir Next" font-weight="${p}"
         font-size="${t}" letter-spacing="${ls}" fill="${f}">${esc(s)}</text>`;

/* ── orquestrador ───────────────────────────────────────── */
const OW=860, OX=(L-OW)/2, OY=330, OH=126;
const orq = `
  <rect x="${OX}" y="${OY}" width="${OW}" height="${OH}" rx="20" fill="${CARD}"
        stroke="${AZUL}" stroke-width="2"/>
  <circle cx="${OX+34}" cy="${OY+40}" r="6" fill="${AMARELO}"/>
  ${txt(OX+52, OY+46, 'ORQUESTRADOR', {p:700, t:17, f:AZUL, ls:2.6})}
  ${txt(OX+34, OY+88, 'Controla a sequência, decide se o diagnóstico precisa ser refeito', {t:21, f:'#FFFFFF'})}
  ${txt(OX+34, OY+114, 'e concede uma única rodada de correção. Não produz conteúdo.', {t:21})}`;

/* ── três especialistas ─────────────────────────────────── */
const agentes = [
  { papel:'LEITURA', nome:'Diagnóstico',
    desc:['Lê as respostas e descreve o estado','por dimensão, apontando a evidência','de cada afirmação.'],
    saida:'Estado atual e pendências' },
  { papel:'SELEÇÃO', nome:'Curadoria',
    desc:['Converte cada lacuna nos temas que a','desenvolvem e busca no catálogo','autorizado, 717 cursos reais.'],
    saida:'Cursos e prática, em 4 ciclos' },
  { papel:'VERIFICAÇÃO', nome:'Governança',
    desc:['Confere o plano contra as regras antes','de qualquer pessoa ver: carga, teto','e ligação com a lacuna.'],
    saida:'Aval técnico ou devolução' }
];
const GAP=38, CW=(W-GAP*2)/3, CY=554, CH=292;

const cards = agentes.map((a,i)=>{
  const x = MG + i*(CW+GAP), cx = x + CW/2;
  return `
  <path d="M960,${OY+OH} L960,${CY-46} M${cx},${CY-46} L${cx},${CY}"
        stroke="${BORDA}" stroke-width="2" fill="none"/>
  <path d="M${Math.min(960,cx)},${CY-46} L${Math.max(960,cx)},${CY-46}"
        stroke="${BORDA}" stroke-width="2" fill="none"/>
  <circle cx="${cx}" cy="${CY}" r="5" fill="${AZUL}"/>
  <rect x="${x}" y="${CY}" width="${CW}" height="${CH}" rx="20" fill="${CARD}" stroke="${BORDA}" stroke-width="1.5"/>
  <rect x="${x+30}" y="${CY+30}" width="${a.papel.length*10.5+26}" height="30" rx="15" fill="rgba(70,94,255,.18)"/>
  ${txt(x+43, CY+50, a.papel, {p:700, t:14, f:AZUL, ls:2.2})}
  ${txt(x+30, CY+105, a.nome, {p:800, t:36, f:'#FFFFFF', ls:-0.8})}
  ${a.desc.map((l,k)=>txt(x+30, CY+146+k*27, l, {t:19.5})).join('')}
  <line x1="${x+30}" y1="${CY+CH-74}" x2="${x+CW-30}" y2="${CY+CH-74}" stroke="${BORDA}" stroke-width="1"/>
  ${txt(x+30, CY+CH-46, 'PRODUZ', {p:700, t:13, f:LILAS, ls:2})}
  ${txt(x+30, CY+CH-20, a.saida, {p:600, t:19, f:AMARELO})}`;
}).join('');

/* ── porta humana ───────────────────────────────────────── */
const HY=890, HH=104;
const humano = `
  <rect x="${MG}" y="${HY}" width="${W}" height="${HH}" rx="20" fill="${AMARELO}"/>
  ${txt(MG+38, HY+46, 'NENHUM DELES DECIDE', {p:700, t:16, f:'rgba(15,20,51,.6)', ls:2.6})}
  ${txt(MG+38, HY+80, 'Toda proposta chega à GEPES como pendência — e só vale depois que uma pessoa aprova.',
        {p:700, t:27, f:NAVY, ls:-0.4})}`;

const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${L}" height="${L}" viewBox="0 0 ${L} ${L}">
  <defs>
    <radialGradient id="glow" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="${AZUL}" stop-opacity=".38"/>
      <stop offset="55%" stop-color="${AZUL}" stop-opacity=".12"/>
      <stop offset="100%" stop-color="${AZUL}" stop-opacity="0"/>
    </radialGradient>
    <clipPath id="faixa"><rect width="${L}" height="${A}"/></clipPath>
  </defs>
  <rect width="${L}" height="${L}" fill="${NAVY}"/>
  <g transform="translate(0,${OFF})" clip-path="url(#faixa)">
    <rect width="${L}" height="${A}" fill="${NAVY}"/>
    <circle cx="960" cy="330" r="600" fill="url(#glow)"/>
    <g transform="translate(${MG},74) scale(${(52/36.36).toFixed(4)})">
      <path d="${dLogo}" fill="${AMARELO}" fill-rule="evenodd"/>
    </g>
    ${txt(L-MG, 112, 'DEMONSTRAÇÃO · ALUN BUSINESS', {p:600, t:17, f:LILAS, ls:2.6, a:'end'})}
    ${txt(MG, 206, 'O FLUXO MULTIAGENTE POR TRÁS DA AVALIAÇÃO', {p:600, t:19, f:AZUL, ls:3.4})}
    ${txt(MG, 284, 'Quatro agentes. Nenhum deles decide.', {p:800, t:68, f:'#FFFFFF', ls:-2.2})}
    ${orq}${cards}${humano}
  </g>
</svg>`;

const TMP=fs.mkdtempSync('/tmp/capa-'), p=path.join(TMP,'capa.svg');
fs.writeFileSync(p, svg);
cp.execSync(`qlmanage -t -s ${L} -o ${TMP} ${p}`, {stdio:'ignore'});
cp.execSync(`sips -c ${A} ${L} ${path.join(TMP,'capa.svg.png')} --out ${SAIDA}`, {stdio:'ignore'});
const dim=cp.execSync(`sips -g pixelWidth -g pixelHeight ${SAIDA}`).toString()
  .match(/pixel(Width|Height): (\d+)/g).map(s=>s.split(': ')[1]).join('x');
console.log('gerado:', path.relative(RAIZ,SAIDA), '·', dim, '·', Math.round(fs.statSync(SAIDA).size/1024)+' KB');
fs.rmSync(TMP,{recursive:true,force:true});
