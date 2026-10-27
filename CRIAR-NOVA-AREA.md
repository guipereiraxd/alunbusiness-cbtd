# Como criar uma área nova no alunbusiness.md

Documento de instrução para abrir uma conversa nova e criar uma subárea do site —
por exemplo `/bbdw/`. Escrito a partir do que as quatro áreas existentes
(`/recode/`, `/bbts/`, `/setorpublico/`, `/china/`) já fazem, e das armadilhas
que cada uma cobrou.

> **Para usar:** numa conversa nova, no diretório
> `/Users/guilhermepereira/Projetos/CBTD2026`, mande:
> *"Leia CRIAR-NOVA-AREA.md e vamos criar a área /bbdw/."* — depois preencha
> o briefing da seção 1.

---

## 1. O briefing que só você tem

Nada abaixo substitui estas respostas. Sem elas, a área sai genérica.

| Pergunta | Por que importa |
|---|---|
| **Qual o nome e a rota?** (`/bbdw/`) | Vira pasta, layout e prefixo de todas as URLs. Trocar depois quebra links. |
| **Para quem é?** Público, e o que ele decide depois de ler | Define a hierarquia da página inteira |
| **É pública ou interna?** | Interna leva `noindex` no layout, como o `/bbts/` |
| **Marca Alun Business, marca de cliente, ou co-branding?** | Define paleta, logotipos e o que o manual permite afirmar |
| **Quantas páginas, e quais?** | A estrutura de pastas sai daqui |
| **Tem backend?** (formulário, login, dados gravados) | Se sim, leia a seção 7 antes de começar |
| **Existe material-fonte?** (PRD, pesquisa, slides) | Diga **onde está**. O conteúdo deve sair dele, não de invenção |

Se houver material-fonte, aponte a pasta e peça que ela seja lida **antes** de
qualquer linha de código.

---

## 2. As três mexidas que criam uma área

Uma área só existe quando **três lugares concordam**. Esquecer qualquer um
falha em silêncio — a página renderiza, só que errada.

```
1.  bbdw/                    ← pasta na raiz do repositório
2.  _layouts/bbdw.html       ← o layout da área
3.  _config.yml  →  defaults:  ← o bloco que amarra os dois
```

No `_config.yml`, dentro de `defaults:`:

```yaml
  - scope:
      path: "bbdw"
      type: "pages"
    values:
      layout: "bbdw"
```

Sem esse bloco as páginas caem no `layout: default` e a área aparece com a
cara do site antigo. É o erro mais comum, e o mais difícil de diagnosticar
porque **nada quebra** — só fica feio.

**Não é preciso adicionar a área na lista `include:`.** Ela existe no arquivo,
mas é vestigial: `/recode/` não está nela e funciona normalmente. O `include:`
do Jekyll serve para forçar arquivos que seriam excluídos por padrão (nomes
com `_` ou `.` na frente), e uma pasta comum já entra sozinha.

### ⚠️ O `_config.yml` não recarrega sozinho

Jekyll **não relê o `_config.yml`** com `--watch`. Depois de mexer nele,
**reinicie o servidor** — senão você vai editar o layout por meia hora achando
que ele não está sendo aplicado. Isso já aconteceu na criação do `/recode/`.

---

## 3. Anatomia da pasta

```
bbdw/
├── index.md                    ← home da área
├── <subpagina>/index.md        ← uma pasta por página
└── assets/
    ├── marca/                  ← PNGs: logotipos, favicon, og.png
    └── *.js                    ← comportamento, se houver
```

**Página = pasta + `index.md`.** Nunca `bbdw/metodologia.md`, porque a URL
sairia `/bbdw/metodologia.html`. Com a pasta, sai `/bbdw/metodologia/` sem
precisar declarar `permalink` em lugar nenhum.

Não existe arquivo `.css` em área nenhuma. O CSS vive em dois lugares, e a
divisão é deliberada:

- **No layout:** tokens, reset, tipografia, cabeçalho, rodapé e os utilitários
  compartilhados. No `/recode/` são 397 das 585 linhas.
- **Em `<style>` dentro de cada página:** só os componentes daquela página.

O `<style>` da página vem **depois** do `<style>` do layout na ordem do
documento, então uma classe de mesmo nome sobrescreve a do layout **em
silêncio**. O `/bbts/` usa isso de propósito; saiba que é uma faca de dois
gumes ao nomear classes.

---

## 4. O que o layout precisa ter

Use `_layouts/recode.html` como molde — é o mais recente e o mais bem
resolvido. Ele traz, em 585 linhas:

**No `<head>`:** variáveis Liquid no topo (`rc_url`, `rc_img`, `rc_tit`…),
`<title>` condicional, `description` com fallback por
`strip_html | truncatewords: 30` (não `truncate: 200`, que corta no meio da
palavra), `canonical`, `theme-color`, `robots` condicional por `page.noindex`,
Open Graph completo + Twitter card, favicon e apple-touch-icon, preconnect e
fontes do Google, e JSON-LD com `Organization` + `Service` + `WebPage`.

**Tokens em `:root`,** redefinidos com os **mesmos nomes** num contexto escuro.
Essa é a decisão central de design do `/recode/`: um componente funciona em
fundo claro e escuro sem CSS duplicado, porque só as variáveis mudam.

Três nomes parecidos, três coisas diferentes — não confunda:

| | O que faz |
|---|---|
| `.sec.escura` | **modificador de seção** — pinta o fundo e as auréolas |
| `.ctx-escuro` | **contexto de tokens** — não pinta nada, troca as variáveis |
| `.sec.escura.marca` | exceção que devolve o preto à seção de marca |

**Utilitários que as páginas esperam do layout:** `.wrap` (largura máxima e
respiro lateral), `.sec` / `.sec.canvas` / `.sec.escura`, `.olho` (rótulo
pequeno acima do título), `.tit` / `.tit.larga`, `.lead`, `.bt` / `.bt-1` /
`.bt-2`, `.grade` / `.cartao`, `.nota` / `.nota.aviso`, `.rv` (revelação no
scroll), `.cap` (capa das páginas internas).

**O `.wrap` não é opcional.** O padrão é sempre:

```html
<section class="sec">
  <div class="wrap"> … </div>
</section>
```

Conteúdo solto dentro de `.sec` vai de borda a borda da janela.

**Navegação e rodapé são hardcoded no layout.** O estado ativo usa
`{% if page.url contains 'slug' %}` — comparação por **substring**. Criar
`/bbdw/metodologia-v2/` acenderia o item `metodologia`. Escolha slugs que não
sejam prefixo um do outro.

---

## 5. Convenções que valem no repositório inteiro

Estas cobraram caro em alguma área. Siga sem discutir.

1. **Nunca escreva cor em hex no corpo de uma página.** Tudo sai dos tokens.
   Hex literal quebra o tema escuro, e o erro só aparece no contexto que você
   não testou.
2. **Todo link interno passa por `relative_url`:**
   `{{ '/bbdw/metodologia/' | relative_url }}`. Como `baseurl` é `""`, esquecer
   o filtro **parece funcionar** em local e em produção — e quebra no dia em
   que o site mudar de base.
3. **Todo `<script>` de página vai dentro de `{% raw %}…{% endraw %}`.** Sem
   isso, `{{` e `{%` do JavaScript são interpretados como Liquid.
4. **Nunca indente bloco HTML com 4 espaços dentro de um `.md`** — o kramdown
   transforma em `<pre>` e o código aparece como texto na tela.
5. **Atributos `class` montados em JS precisam de atenção.** Já aconteceu de
   `class="garg" rv">` escapar e aparecer como texto visível na página.
6. **Contraste é requisito declarado, não gosto.** O alvo é WCAG 2.2 AA:
   4,5:1 para texto normal, 3:1 para texto grande (≥24px, ou ≥18,66px em
   negrito) e 3:1 para limites de componente.
7. **Arquivos de marca não se recolorem por CSS.** Use a variante certa do
   master. Cortar margem transparente é permitido e às vezes necessário — veja
   a seção 8.

---

## 6. Como verificar antes de publicar

O servidor local sobe pelo `.claude/launch.json` (entrada `jekyll`). **Não use
Bash para rodar servidor.**

Duas coisas que economizam muito tempo:

**Meça, não confie no screenshot.** Quando o painel do navegador está oculto,
a página roda como background page: o screenshot pode vir em branco ou
desatualizado mesmo com o DOM correto. Prefira ler medidas via JavaScript
(`getBoundingClientRect`, `getComputedStyle`) e use screenshot só para julgar
estética, com uma espera antes.

**Rode a varredura de contraste.** Ela percorre todo texto da página,
compondo os véus translúcidos até achar um fundo opaco, e lista o que reprova.
Três armadilhas que já geraram resultado falso e estão resolvidas na versão
boa: ignorar textos curtos (escondia rótulos de 2 letras), ler o último número
de `rgb(15, 15, 15)` como alfa, e compor cada camada translúcida contra o
fundo da página em vez de acumular.

Peça: *"rode a varredura de contraste nesta página"* — o procedimento está
documentado pelo uso nas áreas existentes.

---

## 7. Se a área tiver backend

O site usa **um único projeto Firebase** para tudo. Não crie infraestrutura
nova.

**Como o config chega ao navegador:** `assets/firebase-config.js` é gerado
**no build** pelo `.github/workflows/deploy.yml`, a partir dos GitHub Secrets.
O arquivo está no `.gitignore` e **nunca** é commitado. Em ambiente local ele
não existe — a área precisa degradar com elegância e **dizer** que está sem
backend, em vez de travar.

**SDK:** compat 10.13.2, carregado por `<script>` do gstatic. Sem bundler e
sem módulos: tudo se comunica por globais (`window.RECODE_LEADS`,
`window.BBTS_STORE`…), cada uma um IIFE. **A ordem dos `<script>` importa.**

**Coleções que já existem:** `registrations`, `mail`, `recode_leads`,
`dc_votes`, `dc_comentarios`, `bbts_assessments`. Uma coleção nova precisa de
um bloco novo em `firestore.rules`.

### ⚠️ As regras não sobem no deploy

`firestore.rules` é só a versão revisável. **A aplicação é manual:** copie o
arquivo **inteiro** e cole no console do Firebase, em Firestore → Regras.

Cole o arquivo **todo**. Blocos soltos fora de
`match /databases/{database}/documents` não compilam.

Criar uma coleção no JavaScript sem adicionar a regra correspondente produz
uma falha silenciosa de permissão em produção, que não aparece em local porque
em local não há backend.

**Valide o payload na regra.** O nome da coleção está em texto aberto no JS
público e o config é publicado no build. Uma regra `create` aberta aceita
documento de qualquer forma e tamanho, de qualquer origem. Veja o bloco
`recode_leads` como modelo: `hasOnly` + `hasAll` + tipo e tamanho de cada
campo. E `is string` antes de `size()` — sem isso, `size()` aceita List e Map.

**Documente num README da área.** `bbts/README.md` é o modelo: o que precisa
ser habilitado no console, quais coleções, quais limites, e o que fazer quando
algo falha.

---

## 8. Armadilhas que custaram tempo

Lista curta do que já quebrou, para não quebrar de novo.

**Margem transparente em PNG de logotipo.** O master horizontal do ReCode tem
32% da altura em vazio, e assimétrico — 56px em cima contra 19px embaixo, de
237. A 42px de CSS isso rendia 28,7px de marca visível, pousada 10px abaixo do
centro óptico. Parecia "logotipo apagado" e era geometria. **Meça o bounding
box do alfa antes de escolher o tamanho.**

**`background-clip:text` corta descendente.** Com `line-height:1`, a caixa de
fundo tem 1em; como a métrica da fonte soma mais que isso, a linha de base
sobe e o pé do `ç` fica fora da caixa — e o que fica fora não é pintado. A
correção é `padding-bottom:.16em` + `margin-bottom:-.16em`.

**Matiz vizinho em área pequena não se distingue.** Duas barras de 8px em
tons de marrom próximos liam como a mesma coisa; quatro pontos de 5px numa
rampa azul→violeta colapsavam numa cor só. Se dois sinais significam coisas
diferentes, separe por **padrão** (hachura, marcador), não só por cor.

**Cinza-neutro sobre fundo colorido vira remendo.** Ao trocar o fundo escuro
de preto para azul, os tokens de superfície tiveram que ir junto. Trocar só o
fundo deixa cartões acinzentados boiando.

**Especificidade de `:not()`.** `.hns > *` (0,1,1) venceu `.pular` (0,1,0) e
devolveu ao fluxo um texto que devia ficar fora dele. A correção com um
`:not()` empatou com outra regra e venceu por ordem de origem, quebrando outra
coisa. Precisou de dois.

---

## 9. Como commitar

Mensagens em português, no imperativo, explicando **por que** e não o quê — o
diff já diz o quê. Uma linha de assunto curta, corpo explicando a causa e, onde
houver, o número medido.

Exemplos do histórico:

```
Devolve o pé do ç cortado na manchete da hero
Dá um trabalho a cada escuro: azul argumenta, preto assina
Cria a página de Fundamentos, que recebe a carga técnica
```

Deploy é automático no push para `main`, via GitHub Actions. O GitHub Pages
serve com `cache-control: max-age=600` — conte 10 minutos, ou `Cmd+Shift+R`.

---

## 10. Ordem sugerida de trabalho

1. Ler o material-fonte, se houver. Perguntar o que faltar **antes** de escrever.
2. Criar a pasta, o layout (a partir do `recode.html`) e o bloco no
   `_config.yml`. **Reiniciar o servidor.**
3. Subir uma página só, com `.cap` e uma `.sec`, e conferir que o layout pegou.
4. Fechar os tokens e os utilitários do layout antes de escrever páginas — é
   muito mais barato que corrigir seis páginas depois.
5. Escrever as páginas, uma por vez, verificando cada uma.
6. Backend por último, se houver: regras no console antes do primeiro teste real.
7. Varredura de contraste em todas as páginas, em desktop e mobile.
8. Commit, push, e conferir em produção.
