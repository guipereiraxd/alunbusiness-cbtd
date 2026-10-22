/* Gera a capa 16:9 do bloco BBTS para o deck.
   Rodar da raiz:  node bbts/assets/marca/gerar-capa.js
   Sai em bbts/bbts-repositorio/capa-sistema.png (1920x1080).

   Canvas autorado quadrado pelo mesmo motivo do og.png: o qlmanage escala
   para preencher, e só com quadrado a renderização sai 1:1. Avenir Next
   porque Archivo não está instalada no sistema. */
const fs=require('fs'), cp=require('child_process'), path=require('path');

const RAIZ  = path.resolve(__dirname, '../../..');
const MARCA = path.join(RAIZ, 'bbts/assets/marca/bbts-horizontal-amarelo.svg');
const SAIDA = path.join(RAIZ, 'bbts/bbts-repositorio/capa-sistema.png');
fs.mkdirSync(path.dirname(SAIDA), {recursive:true});

const dLogo = (fs.readFileSync(MARCA,'utf8').match(/<path[^>]*d="([^"]+)"/)||[])[1];
const L = 1920, A = 1080, OFF = (L - A) / 2;
const MG = 104;                                  /* margem lateral */

const AZUL='#465EFF', AMARELO='#FCFC30', NAVY='#0F1433', LILAS='#9EABFF';

/* ---- fluxo: cinco paradas, a última é a humana ---- */
const passos = [
  { n:'01', t:['Assessment'],            d:['13 perguntas em','quatro dimensões'] },
  { n:'02', t:['Objetivo'],              d:['Onde você precisa','chegar em 12 meses'] },
  { n:'03', t:['Agentes'],               d:['Diagnóstico, curadoria','e governança'] },
  { n:'04', t:['PDI proposto'],          d:['Cursos reais em','4 ciclos de 90 dias'] },
  { n:'05', t:['Aprovação'],             d:['Decisão humana,','sempre'], humano:true }
];
const GAP = 30;
const CW  = (L - 2*MG - GAP*(passos.length-1)) / passos.length;
const CY  = 452, CH = 236;

const cartoes = passos.map((p,i)=>{
  const x = MG + i*(CW+GAP);
  const fundo = p.humano ? AMARELO : '#171C42';
  const borda = p.humano ? AMARELO : '#2A3166';
  const corN  = p.humano ? 'rgba(15,20,51,.55)' : AZUL;
  const corT  = p.humano ? NAVY : '#FFFFFF';
  const corD  = p.humano ? 'rgba(15,20,51,.78)' : LILAS;
  const cx = x + CW + GAP/2, cy = CY + CH/2;
  const seta = i < passos.length-1
    ? `<circle cx="${cx}" cy="${cy}" r="14" fill="${NAVY}" stroke="${AZUL}" stroke-width="1.6"/>
       <path d="M${cx-5},${cy} l9,0 M${cx},${cy-4.5} l4.5,4.5 -4.5,4.5"
             stroke="${AZUL}" stroke-width="2.2" fill="none" stroke-linecap="round" stroke-linejoin="round"/>`
    : '';
  return `
    <rect x="${x}" y="${CY}" width="${CW}" height="${CH}" rx="20" fill="${fundo}" stroke="${borda}" stroke-width="1.5"/>
    <text x="${x+30}" y="${CY+50}" font-family="Avenir Next" font-weight="700" font-size="17"
          letter-spacing="2" fill="${corN}">${p.n}</text>
    <text x="${x+30}" y="${CY+110}" font-family="Avenir Next" font-weight="800" font-size="33"
          letter-spacing="-.6" fill="${corT}">${p.t[0]}</text>
    ${p.d.map((l,k)=>`<text x="${x+30}" y="${CY+158+k*30}" font-family="Avenir Next" font-weight="500"
          font-size="21" fill="${corD}">${l}</text>`).join('')}
    ${seta}`;
}).join('');

/* ---- números-âncora ---- */
const fatos = [
  ['13',   'perguntas', '~10 minutos'],
  ['717',  'cursos reais', 'catálogo de IA e Dados'],
  ['12',   'meses', 'em quatro ciclos'],
  ['0',    'PDIs sem revisão', 'nenhuma exceção']
];
const FY = 868, FW = (L - 2*MG) / fatos.length;
const numeros = fatos.map((f,i)=>{
  const x = MG + i*FW;
  const risco = i ? `<line x1="${x-30}" y1="${FY-26}" x2="${x-30}" y2="${FY+54}"
                     stroke="${LILAS}" stroke-opacity=".22" stroke-width="1"/>` : '';
  return `${risco}
    <text x="${x}" y="${FY+14}" font-family="Avenir Next" font-weight="800" font-size="58"
          letter-spacing="-2" fill="${AMARELO}">${f[0]}</text>
    <text x="${x}" y="${FY+46}" font-family="Avenir Next" font-weight="600" font-size="20"
          fill="#FFFFFF">${f[1]}</text>
    <text x="${x}" y="${FY+72}" font-family="Avenir Next" font-weight="500" font-size="17"
          fill="${LILAS}">${f[2]}</text>`;
}).join('');

const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${L}" height="${L}" viewBox="0 0 ${L} ${L}">
  <defs>
    <radialGradient id="glow" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="${AZUL}" stop-opacity=".40"/>
      <stop offset="55%" stop-color="${AZUL}" stop-opacity=".13"/>
      <stop offset="100%" stop-color="${AZUL}" stop-opacity="0"/>
    </radialGradient>
    <clipPath id="faixa"><rect width="${L}" height="${A}"/></clipPath>
  </defs>
  <rect width="${L}" height="${L}" fill="${NAVY}"/>
  <g transform="translate(0,${OFF})" clip-path="url(#faixa)">
    <rect width="${L}" height="${A}" fill="${NAVY}"/>
    <circle cx="${L-120}" cy="140" r="520" fill="url(#glow)"/>
    <circle cx="150" cy="${A-60}" r="420" fill="url(#glow)"/>

    <g transform="translate(${MG},74) scale(${(52/36.36).toFixed(4)})">
      <path d="${dLogo}" fill="${AMARELO}" fill-rule="evenodd"/>
    </g>
    <text x="${L-MG}" y="112" text-anchor="end" font-family="Avenir Next" font-weight="600"
          font-size="17" letter-spacing="2.6" fill="${LILAS}">DEMONSTRAÇÃO · ALUN BUSINESS</text>

    <text x="${MG}" y="212" font-family="Avenir Next" font-weight="600" font-size="19"
          letter-spacing="3.4" fill="${AZUL}">PLATAFORMA DE AVALIAÇÃO DE PRONTIDÃO EM IA</text>
    <text x="${MG}" y="302" font-family="Avenir Next" font-weight="800" font-size="70"
          letter-spacing="-2.2" fill="#FFFFFF">Do diagnóstico ao PDI em IA e Dados,</text>
    <text x="${MG}" y="382" font-family="Avenir Next" font-weight="800" font-size="70"
          letter-spacing="-2.2" fill="${AMARELO}">com decisão humana no fim.</text>

    ${cartoes}

    <circle cx="${MG+9}" cy="${CY+CH+48}" r="4.5" fill="${AMARELO}"/>
    <text x="${MG+28}" y="${CY+CH+54}" font-family="Avenir Next" font-weight="500" font-size="22"
          fill="#FFFFFF">Em paralelo, a GEPES lê o grupo e trabalha a fila de revisão em painel próprio.</text>
    <line x1="${MG}" y1="800" x2="${L-MG}" y2="800" stroke="${LILAS}" stroke-opacity=".22" stroke-width="1"/>
    ${numeros}
  </g>
</svg>`;

const TMP = fs.mkdtempSync('/tmp/capa-');
const p = path.join(TMP,'capa.svg');
fs.writeFileSync(p, svg);
cp.execSync(`qlmanage -t -s ${L} -o ${TMP} ${p}`, {stdio:'ignore'});
cp.execSync(`sips -c ${A} ${L} ${path.join(TMP,'capa.svg.png')} --out ${SAIDA}`, {stdio:'ignore'});
const dim = cp.execSync(`sips -g pixelWidth -g pixelHeight ${SAIDA}`).toString()
  .match(/pixel(Width|Height): (\d+)/g).map(s=>s.split(': ')[1]).join('x');
console.log('gerado:', path.relative(RAIZ,SAIDA), '·', dim, '·', Math.round(fs.statSync(SAIDA).size/1024)+' KB');
fs.rmSync(TMP,{recursive:true,force:true});
