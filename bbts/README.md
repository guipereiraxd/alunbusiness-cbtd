# /bbts/ — configuração da base ao vivo

A plataforma grava os assessments no mesmo projeto Firebase que já serve
`/cadastro/` e as enquetes do `/bancodobrasil/`. Nada de infraestrutura nova:
`assets/firebase-config.js` é gerado no build pelo `.github/workflows/deploy.yml`
a partir dos GitHub Secrets.


então a mesma pessoa reentrando atualiza o próprio registro em vez de duplicar.

Sem o config — ambiente local — tudo degrada para `localStorage` e o painel
avisa isso em destaque. O fluxo de resposta nunca trava por falha de rede:
há uma guarda de 5 segundos na gravação.

## 1. Regras do Firestore

As regras estão versionadas em [`firestore.rules`](../firestore.rules) na raiz
do repositório, mas **a aplicação é manual**: copie o arquivo inteiro e cole em
Firestore → Regras, no console do Firebase.

Cole o arquivo **todo**. Blocos soltos depois do fechamento de
`match /databases/{database}/documents` não compilam — o console acusa
`Unexpected 'match'` na linha do bloco órfão.

## 2. Conta da GEPES

No console do Firebase:

1. **Authentication → Sign-in method** → habilitar **E-mail/senha**.
2. **Authentication → Users → Add user** → criar a conta da GEPES.

Só isso. Nenhuma senha passa por este repositório, e quem responde o
assessment continua sem precisar de conta.

## 3. Envio do PDI por e-mail

Ao aprovar um PDI, o painel oferece enviar o plano para quem respondeu. O
site **não envia nada**: ele escreve um pedido na coleção `mail`, no formato
`{to, message:{subject, html}}`. Quem entrega é a extensão **Trigger Email
from Firestore**, do próprio Firebase.

Essa coleção e a regra dela já existiam no projeto antes do /bbts/, o que
indica que a extensão foi instalada em algum momento. **Confirme** no console:
Extensions → procure *Trigger Email*. Se não estiver lá, o pedido é gravado e
nunca sai; instale a extensão e aponte-a para a coleção `mail`.

O envio nunca é automático: a GEPES vê uma prévia do e-mail exato e clica
para enviar. Para reenviar, o botão continua na linha enquanto o status for
aprovado.

### Por que e-mail em HTML, e não PDF

PDF exigiria gerar o arquivo em algum lugar — na prática, uma Cloud Function
com um navegador headless, que é infraestrutura nova para manter. O e-mail em
HTML abre em qualquer cliente, mantém os links dos cursos clicáveis e leva um
botão para o plano completo no site. Se o PDF for requisito, o caminho é essa
função; o conteúdo já está pronto para ser impresso a partir dela.

## 4. Excluir registros

Linhas reais têm o botão **excluir**, para limpar testes antes de uma rodada
de verdade. Pede confirmação e não dá para desfazer. A regra do Firestore
permite exclusão apenas para quem está autenticado — quem responde não apaga
nada, nem o próprio registro.

## 5. Exportar para Excel

O botão **Exportar**, no topo do painel, gera um `.xlsx` com quatro abas:

| Aba | Uma linha por | Serve para |
|---|---|---|
| Colaboradores | pessoa | visão geral, com índice, perfil, dimensões e plano |
| Respostas | pessoa | auditar pergunta a pergunta, inclusive "não sei" |
| Plano | curso recomendado | montar turma, estimar matrícula, conferir trilha |
| Resumo | indicador | números do grupo, prontos para colar num relatório |

A biblioteca de planilha são cerca de 900 KB e só é baixada quando você
clica — quem abre o painel para olhar não paga esse custo.

**O arquivo sai com nome e e-mail**, mesmo com a identificação oculta na
tela: aquele seletor é para projeção, não para exportação. Registros da
coorte fictícia vão junto, marcados na coluna *Registro fictício*. É dado
pessoal; trate o arquivo como tal.

## 6. Limite conhecido

Quem responde não é autenticado. Então, como em qualquer formulário aberto,
é possível digitar o e-mail de outra pessoa e enviar um assessment no nome
dela — e, por consequência, sobrescrever um registro existente daquele
e-mail. As regras acima não evitam isso; evitam apenas que alguém **leia** a
base ou **aprove** o próprio PDI.

Fechar essa brecha exige autenticar também quem responde, o que troca a
fricção de lugar: some o risco, aparece a tela de login antes do assessment.
Para a demonstração, a escolha foi manter a entrada livre.

## 7. Teste local do painel com login

O portão de login só aparece quando há `FIREBASE_CONFIG`. Para exercitá-lo na
sua máquina, copie o config real do projeto para `assets/firebase-config.js`
— o caminho está no `.gitignore`, não vai para o repositório.
