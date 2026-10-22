/* Gera favicon.svg e apple-touch-icon.png a partir da logomarca oficial.
   Rodar da raiz:  node bbts/assets/marca/gerar-icones.js

   Em 16 ou 32px a wordmark "BBTS" vira borrão, então o ícone usa só o
   símbolo — exceção corrente para favicon e ícone de app. Ele vai sobre
   campo amarelo porque o manual define azul sobre amarelo, e assim o
   ícone se segura tanto em aba clara quanto escura. */
const fs=require('fs'), cp=require('child_process'), path=require('path');

const RAIZ   = path.resolve(__dirname, '../../..');
const CENTRAL= path.join(RAIZ, 'bbts/assets/marca/bbts-central-azul.svg');
const DIR    = path.join(RAIZ, 'bbts/assets');

const d = (fs.readFileSync(CENTRAL,'utf8').match(/<path[^>]*d="([^"]+)"/)||[])[1];
if (!d) { console.error('path não encontrado'); process.exit(1); }

/* viewBox da central é 0 0 68.14 93.72; o símbolo termina em ~62.3,
   onde começa a faixa vazia que separa símbolo e wordmark. */
const SW = 68.14, SH = 62.3;

function icone(lado, raio){
  const pad  = lado * 0.17;
  const disp = lado - pad*2;
  const esc  = Math.min(disp/SW, disp/SH);
  const x = (lado - SW*esc)/2, y = (lado - SH*esc)/2;
  /* o path traz símbolo e wordmark juntos; o clip corta na faixa vazia
     entre os dois, deixando só o símbolo */
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${lado}" height="${lado}" viewBox="0 0 ${lado} ${lado}">`
    + `<defs><clipPath id="so-simbolo"><rect x="0" y="0" width="${SW}" height="${SH}"/></clipPath></defs>`
    + `<rect width="${lado}" height="${lado}" rx="${raio}" fill="#FCFC30"/>`
    + `<g transform="translate(${x.toFixed(2)},${y.toFixed(2)}) scale(${esc.toFixed(4)})">`
    + `<g clip-path="url(#so-simbolo)"><path d="${d}" fill="#465EFF" fill-rule="evenodd"/></g>`
    + `</g></svg>`;
}

fs.writeFileSync(path.join(DIR,'favicon.svg'), icone(32, 7));
console.log('favicon.svg');

/* apple-touch-icon: 180x180, sem cantos (o iOS aplica a máscara própria).
   Autorado grande e reduzido depois: em canvas pequeno o qlmanage acolchoa
   em vez de renderizar 1:1. */
const TMP = fs.mkdtempSync('/tmp/ic-');
const p = path.join(TMP,'touch.svg');
fs.writeFileSync(p, icone(1200, 0));
cp.execSync(`qlmanage -t -s 1200 -o ${TMP} ${p}`, {stdio:'ignore'});
cp.execSync(`sips -z 180 180 ${path.join(TMP,'touch.svg.png')} --out ${path.join(DIR,'apple-touch-icon.png')}`, {stdio:'ignore'});
const dim = cp.execSync(`sips -g pixelWidth -g pixelHeight ${path.join(DIR,'apple-touch-icon.png')}`).toString()
  .match(/pixel(Width|Height): (\d+)/g).map(s=>s.split(': ')[1]).join('x');
console.log('apple-touch-icon.png ·', dim);
fs.rmSync(TMP,{recursive:true,force:true});
