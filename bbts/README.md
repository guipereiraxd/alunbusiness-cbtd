# /bbts/ — configuração da base ao vivo

A plataforma grava os assessments no mesmo projeto Firebase que já serve
`/cadastro/` e as enquetes do `/bancodobrasil/`. Nada de infraestrutura nova:
`assets/firebase-config.js` é gerado no build pelo `.github/workflows/deploy.yml`
a partir dos GitHub Secrets.

Coleção: **`bbts_assessments`**. O documento é identificado pelo hash do e-mail,
então a mesma pessoa reentrando atualiza o próprio registro em vez de duplicar.

Sem o config — ambiente local — tudo degrada para `localStorage` e o painel
avisa isso em destaque. O fluxo de resposta nunca trava por falha de rede:
há uma guarda de 5 segundos na gravação.

## 1. Regras do Firestore

As regras moram no console do Firebase, não neste repositório. **Acrescente** o
bloco abaixo às regras existentes — não substitua o arquivo, ou você derruba
`registrations` e `dc_votes`.

```
match /bbts_assessments/{id} {

  // Quem responde não precisa de conta, mas só cria registro "submetido".
  allow create: if request.resource.data.status == 'submetido';

  // Reenvio só sobrescreve o registro do mesmo e-mail, e sempre volta para
  // "submetido" — respostas novas exigem revisão nova. O DHO autenticado
  // é quem pode mover o status.
  allow update: if request.auth != null
                || (request.resource.data.email == resource.data.email
                    && request.resource.data.status == 'submetido');

  // Leitura fechada: os registros trazem nome, e-mail e respostas.
  allow read: if request.auth != null;

  allow delete: if false;
}
```

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
