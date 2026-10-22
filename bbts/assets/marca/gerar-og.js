/* Gera bbts/assets/og.png — o cartão de pré-visualização do link.
   Rodar da raiz do repositório:  node bbts/assets/marca/gerar-og.js

   Por que SVG e não uma página renderizada: a captura do navegador sai
   limitada pela largura do painel, e as fontes do site não estão instaladas
   no sistema. O caminho vetorial dá 1200x630 nítido, usando a logomarca
   oficial e Avenir Next, que existe em qualquer macOS.

   O canvas é quadrado de propósito: o qlmanage escala para preencher, então
   só com um quadrado a renderização sai 1:1 e o recorte central acerta. */
const fs = require('fs'), cp = require('child_process'), path = require('path');

const RAIZ  = path.resolve(__dirname, '../../..');
const MARCA = path.join(RAIZ, 'bbts/assets/marca/bbts-horizontal-amarelo.svg');
const SAIDA = path.join(RAIZ, 'bbts/assets/og.png');
const TMP   = fs.mkdtempSync('/tmp/og-');

const d = (fs.readFileSync(MARCA, 'utf8').match(/<path[^>]*d="([^"]+)"/) || [])[1];
if (!d) { console.error('Não achei o path da logomarca em', MARCA); process.exit(1); }

const ESC = (58 / 36.36).toFixed(4);   /* logomarca a 58px de altura */
const OFF = 285;                        /* (1200-630)/2 */

const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="1200" viewBox="0 0 1200 1200">
  <defs>
    <radialGradient id="brilho" cx="50%" cy="50%" r="50%">
      <stop offset="0%"   stop-color="#465EFF" stop-opacity="0.42"/>
      <stop offset="55%"  stop-color="#465EFF" stop-opacity="0.16"/>
      <stop offset="100%" stop-color="#465EFF" stop-opacity="0"/>
    </radialGradient>
    <clipPath id="faixa"><rect width="1200" height="630"/></clipPath>
  </defs>
  <rect width="1200" height="1200" fill="#0F1433"/>
  <g transform="translate(0,${OFF})" clip-path="url(#faixa)">
    <rect width="1200" height="630" fill="#0F1433"/>
    <circle cx="1090" cy="560" r="430" fill="url(#brilho)"/>
    <rect width="1200" height="46" fill="#FCFC30"/>
    <text x="600" y="30" text-anchor="middle" font-family="Avenir Next" font-weight="600"
          font-size="15" letter-spacing="3.2" fill="#0F1433">DEMONSTRAÇÃO · DADOS FICTÍCIOS · NÃO REPRESENTA AVALIAÇÃO REAL</text>
    <g transform="translate(84,112) scale(${ESC})"><path d="${d}" fill="#FCFC30" fill-rule="evenodd"/></g>
    <text x="84" y="300" font-family="Avenir Next" font-weight="800" font-size="76"
          letter-spacing="-2" fill="#FFFFFF">Avaliação de</text>
    <text x="84" y="384" font-family="Avenir Next" font-weight="800" font-size="76"
          letter-spacing="-2" fill="#FCFC30">Prontidão em IA</text>
    <text x="84" y="452" font-family="Avenir Next" font-weight="500" font-size="25" fill="#9EABFF">Do diagnóstico ao PDI em IA e Dados,</text>
    <text x="84" y="488" font-family="Avenir Next" font-weight="500" font-size="25" fill="#9EABFF">com decisão humana no fim.</text>
    <line x1="84" y1="548" x2="1116" y2="548" stroke="#9EABFF" stroke-opacity="0.3" stroke-width="1"/>
    <text x="84" y="580" font-family="Avenir Next" font-weight="500" font-size="15"
          letter-spacing="2.1" fill="#FFFFFF">BB TECNOLOGIA E SERVIÇOS</text>
    <text x="1116" y="580" text-anchor="end" font-family="Avenir Next" font-weight="500" font-size="15"
          letter-spacing="2.1" fill="#9EABFF">ALUN BUSINESS</text>
  </g>
</svg>`;

const svgPath = path.join(TMP, 'og.svg');
fs.writeFileSync(svgPath, svg);
cp.execSync(`qlmanage -t -s 1200 -o ${TMP} ${svgPath}`, { stdio: 'ignore' });
cp.execSync(`sips -c 630 1200 ${path.join(TMP, 'og.svg.png')} --out ${SAIDA}`, { stdio: 'ignore' });

const dim = cp.execSync(`sips -g pixelWidth -g pixelHeight ${SAIDA}`).toString()
  .match(/pixel(Width|Height): (\d+)/g).map(s => s.split(': ')[1]).join('x');
console.log('gerado:', SAIDA, '·', dim, '·', Math.round(fs.statSync(SAIDA).size/1024) + ' KB');
fs.rmSync(TMP, { recursive: true, force: true });
