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

## 2. Conta do DHO

No console do Firebase:

1. **Authentication → Sign-in method** → habilitar **E-mail/senha**.
2. **Authentication → Users → Add user** → criar a conta do DHO.

Só isso. Nenhuma senha passa por este repositório, e quem responde o
assessment continua sem precisar de conta.

## 3. Limite conhecido

Quem responde não é autenticado. Então, como em qualquer formulário aberto,
é possível digitar o e-mail de outra pessoa e enviar um assessment no nome
dela — e, por consequência, sobrescrever um registro existente daquele
e-mail. As regras acima não evitam isso; evitam apenas que alguém **leia** a
base ou **aprove** o próprio PDI.

Fechar essa brecha exige autenticar também quem responde, o que troca a
fricção de lugar: some o risco, aparece a tela de login antes do assessment.
Para a demonstração, a escolha foi manter a entrada livre.

## 4. Teste local do painel com login

O portão de login só aparece quando há `FIREBASE_CONFIG`. Para exercitá-lo na
sua máquina, copie o config real do projeto para `assets/firebase-config.js`
— o caminho está no `.gitignore`, não vai para o repositório.
