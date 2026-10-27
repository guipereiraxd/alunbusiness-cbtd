# /bbdw/ — Hybrid Skills na BB Digital Week 2026

Área pública da palestra de Guilherme Pereira (28/10/2026). Quatro páginas:
hero (`/bbdw/`), diagnóstico (`/bbdw/diagnostico/`), palestra slide a slide
(`/bbdw/palestra/`) e regras e privacidade (`/bbdw/como-funciona/`).

Fonte: `PRD_Hybrid_Skills_v1.docx` (27/10/2026) e o deck em PDF. O que o PRD
pede e como está resolvido aqui:

| PRD | Onde |
|---|---|
| Instrumento (pares, itens, escala) | `assets/instrumento.js` |
| Regras de seleção e classificação (§6) | `assets/regras.js` |
| Textos, 30 práticas, plano de 7 dias (§7) | `assets/conteudo.js` |
| Catálogo curado com 30 rotas (§8) | `assets/catalogo.js` |
| Estado local, 30 dias, apagar (RF03/RF09) | `assets/estado.js` |
| Eventos agregados (§11) | `assets/metricas.js` + coleção `bbdw_eventos` |
| Jornada inteira num documento, impressão (RF08) | `diagnostico/index.md` |

Tudo é estático e roda no cliente. Depois da primeira carga, o diagnóstico
conclui sem rede: os seis scripts e as fontes já estão no navegador. Os links
de curso exigem conexão.

## Métricas: o que ligar antes do evento

1. Cole o `firestore.rules` **inteiro** no console (Firestore → Regras). O
   bloco `bbdw_eventos` aceita só criação anônima com forma fixa: evento,
   fonte, ids aleatórios, versões, etapa, duração ativa e timestamp do
   servidor. Nunca respostas, dupla ou orientação.
2. Em local não há `assets/firebase-config.js`, então nada é enviado e a
   página não avisa nada: é o comportamento esperado.
3. Para ler os números: console → Firestore → `bbdw_eventos`, ou uma consulta
   autenticada. Os indicadores do PRD §11 saem daí:
   conclusão = `assessment_complete` ÷ `assessment_start`;
   abandono = última `step_completed` das sessões sem `assessment_complete`;
   tempo = `duracaoAtiva` no `assessment_complete`.

Se a regra não for colada, o envio falha em silêncio e a jornada continua.

## Catálogo: o que ainda precisa de conferência

Os 30 cursos saíram da planilha geral da Alura (3.753 títulos com URL). A
planilha não traz **duração, pré-requisito nem status ativo**: os campos
estão como `duracao:null`, `prereq:""`, `responsavel:"curadoria pendente"`.
Para publicar uma versão conferida: abra cada URL, preencha `duracao`
(ex.: `"8h"`), ajuste `ativo:false` no que saiu do ar, troque
`verificadoEm` e `responsavel`, e suba a `versao` do catálogo. A regra de
seleção exclui itens com `prereq` preenchido e sem `prereqVerificado:true`.

Lista dos slugs em `assets/catalogo.js`; base `https://cursos.alura.com.br/course/`.

## Versões

`instrumento`, `regras`, `conteudo` e `catalogo` têm `versao` própria, exibida
no fim do resultado. Mudar perguntas ou regras exige subir a versão do
instrumento: o estado salvo com versão diferente pede recomeço, explicando.

## Testes de aceite já cobertos

`node` com os casos do PRD §11 (todas ausentes; H3 S0 I2; H0 S3 I1; H3 S3 I0;
H1 S1 I0; H2 S2 I2; item ausente; objetivo P2 com menor triagem em P4; empate;
um item só) passou com o motor atual. Para repetir, carregue os quatro
primeiros scripts com `window={}` e chame `BBDW_REGRAS.resultado`.

Fora do que dá para fazer daqui: ensaio de pico com 3 mil sessões e piloto de
compreensão com 12 a 15 pessoas. O site é estático em CDN; o que foi medido é
peso da página e tempo de cálculo local.
