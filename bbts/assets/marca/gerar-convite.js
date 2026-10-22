/* Slide de convite 16:9 — a plateia escaneia e responde.
   Rodar da raiz:  node bbts/assets/marca/gerar-convite.js
   Sai em bbts/bbts-repositorio/convite-assessment.png (1920x1080).

   O QR entra como vetor, extraído de qr/qr-assessment.svg, para não perder
   nitidez na projeção. Fica sobre cartão branco, com a zona de silêncio
   intacta — é o que o leitor precisa para enquadrar. */
const fs=require('fs'), cp=require('child_process'), path=require('path');

const RAIZ  = path.resolve(__dirname, '../../..');
const MARCA = path.join(RAIZ, 'bbts/assets/marca/bbts-horizontal-amarelo.svg');
const QR    = path.join(RAIZ, 'bbts/bbts-repositorio/qr/qr-assessment.svg');
const SAIDA = path.join(RAIZ, 'bbts/bbts-repositorio/convite-assessment.png');

const dLogo = (fs.readFileSync(MARCA,'utf8').match(/<path[^>]*?\sd="([^"]+)"/)||[])[1];
const dQR   = (fs.readFileSync(QR,'utf8').match(/<path[^>]*?\sd="([^"]+)"/)||[])[1];

const L=1920, A=1080, OFF=(L-A)/2, MG=112;
const AZUL='#465EFF', AMARELO='#FCFC30', NAVY='#0F1433', LILAS='#9EABFF';

const esc = s => String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;');
const txt=(x,y,s,{p=600,t=22,f='#FFFFFF',a='start',ls=0}={})=>
  `<text x="${x}" y="${y}" text-anchor="${a}" font-family="Avenir Next" font-weight="${p}"
         font-size="${t}" letter-spacing="${ls}" fill="${f}">${esc(s)}</text>`;

/* ── cartão do QR, à direita ─────────────────────────────── */
const CS=520, CX=L-MG-CS, CY=(A-CS)/2+28;     /* cartão branco */
const QS=CS-88, QX=CX+44, QY=CY+44;           /* QR dentro, com folga */
const qrEsc = (QS/45).toFixed(5);             /* viewBox do QR é 45x45 */

const cartao = `
  <rect x="${CX}" y="${CY}" width="${CS}" height="${CS}" rx="28" fill="#FFFFFF"/>
  <g transform="translate(${QX},${QY}) scale(${qrEsc})">
    <path d="${dQR}" fill="${NAVY}"/>
  </g>`;

/* ── coluna de texto, à esquerda ─────────────────────────── */
const TW = CX - MG - 72;
const passos = [
  ['1', 'Aponte a câmera do celular para o código'],
  ['2', 'Responda no seu ritmo, enquanto eu falo'],
  ['3', 'No fim, eu mostro o resultado de vocês']
];
const lista = passos.map(([n,s],i)=>{
  const y = 640 + i*62;
  return `<circle cx="${MG+19}" cy="${y-8}" r="19" fill="rgba(70,94,255,.22)" stroke="${AZUL}" stroke-width="1.5"/>
    ${txt(MG+19, y-1, n, {p:700,t:19,f:AZUL,a:'middle'})}
    ${txt(MG+56, y, s, {p:500,t:24,f:'#FFFFFF'})}`;
}).join('');

const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${L}" height="${L}" viewBox="0 0 ${L} ${L}">
  <defs>
    <radialGradient id="glow" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="${AZUL}" stop-opacity=".40"/>
      <stop offset="58%" stop-color="${AZUL}" stop-opacity=".12"/>
      <stop offset="100%" stop-color="${AZUL}" stop-opacity="0"/>
    </radialGradient>
    <clipPath id="faixa"><rect width="${L}" height="${A}"/></clipPath>
  </defs>
  <rect width="${L}" height="${L}" fill="${NAVY}"/>
  <g transform="translate(0,${OFF})" clip-path="url(#faixa)">
    <rect width="${L}" height="${A}" fill="${NAVY}"/>
    <circle cx="${CX+CS/2}" cy="${A/2}" r="620" fill="url(#glow)"/>

    <g transform="translate(${MG},70) scale(${(50/36.36).toFixed(4)})">
      <path d="${dLogo}" fill="${AMARELO}" fill-rule="evenodd"/></g>

    ${txt(MG, 268, 'PARTICIPE AGORA', {p:600,t:20,f:AZUL,ls:3.6})}
    ${txt(MG, 372, 'Pegue o celular.', {p:800,t:84,f:'#FFFFFF',ls:-2.8})}
    ${txt(MG, 468, 'Responda você mesmo.', {p:800,t:84,f:AMARELO,ls:-2.8})}
    ${txt(MG, 548, 'Um assessment de prontidão em IA — o mesmo que está por trás', {p:500,t:25,f:LILAS})}
    ${txt(MG, 582, 'de tudo que eu vou mostrar nos próximos minutos.', {p:500,t:25,f:LILAS})}

    ${lista}

    <rect x="${MG}" y="846" width="${TW}" height="86" rx="18"
          fill="rgba(255,255,255,.06)" stroke="${AZUL}" stroke-width="1.6"/>
    ${txt(MG+30, 880, 'OU DIGITE NO NAVEGADOR', {p:700,t:13,f:LILAS,ls:2.2})}
    ${txt(MG+30, 914, 'alunbusiness.md/bbts/assessment', {p:700,t:28,f:'#FFFFFF',ls:-.4})}

    ${cartao}
    ${txt(CX+CS/2, CY+CS+52, '13 perguntas  ·  cerca de 10 minutos', {p:600,t:23,f:LILAS,a:'middle'})}
  </g>
</svg>`;

const TMP=fs.mkdtempSync('/tmp/conv-'), p=path.join(TMP,'c.svg');
fs.writeFileSync(p, svg);
cp.execSync(`qlmanage -t -s ${L} -o ${TMP} ${p}`, {stdio:'ignore'});
cp.execSync(`sips -c ${A} ${L} ${path.join(TMP,'c.svg.png')} --out ${SAIDA}`, {stdio:'ignore'});
const dim=cp.execSync(`sips -g pixelWidth -g pixelHeight ${SAIDA}`).toString()
  .match(/pixel(Width|Height): (\d+)/g).map(s=>s.split(': ')[1]).join('x');
console.log('gerado:', path.relative(RAIZ,SAIDA), '·', dim, '·', Math.round(fs.statSync(SAIDA).size/1024)+' KB');
console.log('QR na tela:', QS, 'px ·', Math.round(QS/A*100)+'% da altura');
fs.rmSync(TMP,{recursive:true,force:true});
