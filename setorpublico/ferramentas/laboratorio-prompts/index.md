---
title: "Laboratório de prompts"
description: "Nove atividades práticas para servidores usarem IA de forma crítica e segura — do prompt fraco ao prompt melhorado, com revisão, riscos e dados que não devem ser usados."
---

<style>
  /* nav de atividades */
  .lab-nav{display:flex;flex-wrap:wrap;gap:8px;margin-top:26px;padding:16px 18px;
    background:var(--paper);border:1px solid var(--line);border-radius:12px}
  .lab-nav .lab-navlbl{font-family:var(--mono);font-size:11px;color:var(--tx3);letter-spacing:.06em;text-transform:uppercase;padding:6px 0;margin-right:6px}
  .lab-nav a{font-family:var(--mono);font-size:11px;color:var(--tx2);text-decoration:none;
    border:1px solid var(--line2);border-radius:6px;padding:6px 11px;transition:border-color .15s,color .15s,background .15s;
    display:inline-flex;align-items:center;gap:6px}
  .lab-nav a:hover{border-color:var(--brand-p);color:var(--brand-p);background:var(--tint-p)}
  .lab-nav a b{color:var(--brand-p);font-weight:600}

  /* método pedagógico */
  .method{display:grid;grid-template-columns:repeat(4,1fr);gap:1px;background:var(--line);
    border:1px solid var(--line);border-radius:14px;overflow:hidden;margin-top:26px}
  .method .m{background:var(--paper);padding:20px 20px 18px}
  .method .m .n{font-family:var(--mono);font-size:11px;color:var(--brand-p);letter-spacing:.14em;font-weight:600}
  .method .m h4{font-family:var(--disp);font-weight:600;font-size:15px;margin:8px 0 4px;color:var(--ink)}
  .method .m p{font-size:12.5px;color:var(--tx2);line-height:1.5;margin:0}
  @media(max-width:720px){ .method{grid-template-columns:1fr 1fr} }
  @media(max-width:420px){ .method{grid-template-columns:1fr} }

  /* atividade */
  .act{background:var(--paper);border:1px solid var(--line);border-radius:16px;padding:34px 36px;margin-top:20px;
    position:relative;overflow:hidden}
  .act::before{content:"";position:absolute;left:0;top:0;bottom:0;width:3px;background:var(--grad);opacity:.6}
  @media(max-width:640px){ .act{padding:28px 22px} }
  .act-head{display:grid;grid-template-columns:auto 1fr;gap:20px;align-items:baseline;padding-bottom:20px;border-bottom:1px solid var(--line)}
  .act-num{font-family:var(--disp);font-weight:700;font-size:44px;letter-spacing:-.02em;line-height:1;color:var(--brand-p);
    background:var(--grad);-webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent;font-variant-numeric:tabular-nums}
  .act-head .cat{font-family:var(--mono);font-size:10.5px;color:var(--tx3);letter-spacing:.14em;text-transform:uppercase}
  .act-head h2{font-family:var(--disp);font-weight:600;font-size:26px;letter-spacing:-.01em;line-height:1.15;color:var(--ink);margin:6px 0 0;max-width:32ch}

  .act-block{margin-top:24px}
  .act-block-h{font-family:var(--mono);font-size:10.5px;color:var(--tx3);letter-spacing:.14em;text-transform:uppercase;
    display:flex;align-items:center;gap:9px;margin-bottom:10px}
  .act-block-h::before{content:"";width:12px;height:12px;border-radius:3px;background:var(--sub,var(--brand-p))}
  .act-block-h.ctx::before{background:#4A82C4}
  .act-block-h.weak::before{background:#B84330}
  .act-block-h.good{color:var(--brand-p)}
  .act-block-h.good::before{background:var(--grad)}
  .act-block-h.risk::before{background:#B07A16}
  .act-block-h.review::before{background:#2E7D46}

  .act-ctx{color:var(--tx);font-size:15.5px;line-height:1.65;max-width:66ch;margin:0}
  .act-ctx strong{color:var(--ink);font-weight:600}

  .prompt{font-family:var(--mono);font-size:13px;line-height:1.6;color:var(--ink);background:#FFFFFF;
    border:1px solid var(--line2);border-radius:10px;padding:16px 18px;white-space:pre-wrap;position:relative}
  .prompt.weak{background:#FDF5F3;border-color:#E8C8C0;color:#7A3125}
  .prompt.good{background:linear-gradient(120deg,#F1F0F8 0%,#F6EFF4 100%);border-color:rgba(90,46,138,.22);color:#1B1B33}
  .prompt-why{color:var(--tx2);font-size:13.5px;line-height:1.55;margin:10px 0 0;padding-left:14px;border-left:2px solid #E8C8C0;
    font-style:italic}

  .act-grid{display:grid;grid-template-columns:1fr 1fr;gap:20px;margin-top:26px;padding-top:22px;border-top:1px solid var(--line)}
  @media(max-width:720px){ .act-grid{grid-template-columns:1fr;gap:14px} }
  .act-grid .col ul{list-style:none;display:grid;gap:8px;margin-top:6px;padding:0}
  .act-grid .col li{font-size:13.5px;color:var(--tx);line-height:1.55;padding-left:18px;position:relative}
  .act-grid .col li::before{content:"→";position:absolute;left:0;color:var(--brand-p);font-weight:700}
  .act-grid .col.risk li::before{content:"!";color:#B07A16;font-weight:700}
</style>

<div class="wrap">
  <div class="page-head">
    <div class="crumb"><a href="{{ '/setorpublico/' | relative_url }}">Início</a> / <a href="{{ '/setorpublico/ferramentas/' | relative_url }}">Ferramentas</a> / Laboratório de prompts</div>
    <h1>Laboratório de prompts</h1>
    <p class="lede">Usar IA no serviço público é menos sobre <b>saber o comando mágico</b> e mais sobre pensar criticamente: dar contexto, delimitar a tarefa, revisar a saída e saber o que nunca colocar num modelo. Cada uma das <b>doze atividades</b> parte de um prompt fraco, mostra por que ele falha e evolui para um melhor — com como revisar e riscos.</p>
  </div>

  <section class="blk" style="border-bottom:0;padding-top:24px;padding-bottom:12px">
    <div class="sk">Como cada atividade é estruturada</div>
    <h2 style="font-size:22px;max-width:36ch">Quatro passos, sempre na mesma ordem</h2>
    <div class="method">
      <div class="m"><div class="n">01</div><h4>Contexto</h4><p>O que você tem, para quem, com que restrição — antes de escrever qualquer prompt.</p></div>
      <div class="m"><div class="n">02</div><h4>Prompt</h4><p>Do prompt fraco (o que a maioria escreve) ao prompt melhorado (por que funciona).</p></div>
      <div class="m"><div class="n">03</div><h4>Revisar</h4><p>O que checar antes de usar o resultado — sempre, mesmo quando parece perfeito.</p></div>
      <div class="m"><div class="n">04</div><h4>Riscos</h4><p>Dados que não devem ser colados e limites do uso — o que a IA não vai resolver por você.</p></div>
    </div>
  </section>

  <section class="blk" style="border-bottom:0;padding-top:10px;padding-bottom:0">
    <nav class="lab-nav" aria-label="Ir para uma atividade">
      <span class="lab-navlbl">12 atividades ·</span>
      <a href="#act-1"><b>01</b> Resumir uma nota técnica</a>
      <a href="#act-2"><b>02</b> Linguagem simples</a>
      <a href="#act-3"><b>03</b> Comparar normas</a>
      <a href="#act-4"><b>04</b> Minuta de ofício</a>
      <a href="#act-5"><b>05</b> Pauta de reunião</a>
      <a href="#act-6"><b>06</b> Manifestações do cidadão</a>
      <a href="#act-7"><b>07</b> Consulta pública</a>
      <a href="#act-8"><b>08</b> Analisar planilha</a>
      <a href="#act-9"><b>09</b> Roteiro de capacitação</a>
      <a href="#act-10"><b>10</b> Resposta à LAI</a>
      <a href="#act-11"><b>11</b> Cláusulas de risco</a>
      <a href="#act-12"><b>12</b> FAQ do cidadão</a>
    </nav>
  </section>

  <!-- ============= ATIVIDADES ============= -->

  <section class="blk" style="border-bottom:0;padding-top:20px;padding-bottom:0">

    <article class="act" id="act-1" style="scroll-margin-top:96px">
      <header class="act-head">
        <div class="act-num">01</div>
        <div><div class="cat">Resumo</div><h2>Resumir uma nota técnica</h2></div>
      </header>
      <div class="act-block"><div class="act-block-h ctx">Contexto</div>
        <p class="act-ctx">Você recebeu uma nota técnica de 15 páginas e precisa de um <strong>resumo executivo</strong> para a chefia decidir. O risco é o resumo perder ressalvas importantes ou “inventar” conclusões que não estão no texto.</p>
      </div>
      <div class="act-block"><div class="act-block-h weak">Prompt fraco</div>
        <div class="prompt weak">Resuma esta nota técnica.</div>
        <p class="prompt-why">Sem papel, sem público, sem formato e sem limites — o modelo escolhe o que achar relevante, no tamanho que quiser, e pode suavizar ressalvas.</p>
      </div>
      <div class="act-block"><div class="act-block-h good">Prompt melhorado</div>
        <div class="prompt good">Você é assessor técnico. Resuma a nota abaixo para um secretário decidir, em no máximo 10 linhas.
Estruture em: (1) do que se trata, (2) recomendação principal, (3) ressalvas e riscos, (4) o que falta decidir.
Use apenas o que está no texto; se algo não estiver claro, escreva “não consta”. Não acrescente informação externa.

[colar a nota]</div>
      </div>
      <div class="act-grid">
        <div class="col review"><div class="act-block-h review">Como revisar</div>
          <ul><li>Confira cada afirmação contra o texto original, sobretudo números e prazos.</li><li>Verifique se as ressalvas do documento sobreviveram ao resumo.</li><li>Desconfie de qualquer conclusão que você não encontra na nota.</li></ul>
        </div>
        <div class="col risk"><div class="act-block-h risk">Riscos e o que não usar</div>
          <ul><li>Alucinação: o modelo pode afirmar com segurança algo que não está no documento.</li><li>Não cole notas sigilosas ou com dados pessoais em ferramentas abertas — use ambiente institucional.</li></ul>
        </div>
      </div>
    </article>

    <article class="act" id="act-2" style="scroll-margin-top:96px">
      <header class="act-head">
        <div class="act-num">02</div>
        <div><div class="cat">Comunicação</div><h2>Adaptar um texto para linguagem simples</h2></div>
      </header>
      <div class="act-block"><div class="act-block-h ctx">Contexto</div>
        <p class="act-ctx">Uma orientação ao cidadão está escrita em juridiquês. Você quer torná-la clara <strong>sem mudar o que ela determina</strong> — simplificar a forma, não o direito.</p>
      </div>
      <div class="act-block"><div class="act-block-h weak">Prompt fraco</div>
        <div class="prompt weak">Deixe este texto mais simples.</div>
        <p class="prompt-why">“Mais simples” é vago — o modelo pode cortar exceções, trocar termos técnicos por aproximações erradas e alterar o sentido jurídico.</p>
      </div>
      <div class="act-block"><div class="act-block-h good">Prompt melhorado</div>
        <div class="prompt good">Reescreva o texto abaixo em linguagem simples, para um cidadão sem formação jurídica.
Regras: frases curtas; explique o termo técnico na primeira vez; mantenha exatamente as condições, prazos e exceções.
Não altere o sentido jurídico nem invente casos. Ao final, liste os termos técnicos que você precisou manter e por quê.

[colar o texto]</div>
      </div>
      <div class="act-grid">
        <div class="col review"><div class="act-block-h review">Como revisar</div>
          <ul><li>Leia lado a lado: nenhuma condição, prazo ou exceção pode ter mudado.</li><li>Peça a alguém da área finalística e ao jurídico para validar antes de publicar.</li></ul>
        </div>
        <div class="col risk"><div class="act-block-h risk">Riscos e o que não usar</div>
          <ul><li>Simplificação excessiva pode virar informação incorreta — e orientação errada ao cidadão tem efeito real.</li><li>Trate o resultado como rascunho: a responsabilidade pela comunicação continua sendo humana.</li></ul>
        </div>
      </div>
    </article>

    <article class="act" id="act-3" style="scroll-margin-top:96px">
      <header class="act-head">
        <div class="act-num">03</div>
        <div><div class="cat">Comparação</div><h2>Comparar duas versões de uma norma</h2></div>
      </header>
      <div class="act-block"><div class="act-block-h ctx">Contexto</div>
        <p class="act-ctx">Saiu uma nova redação de uma portaria e você precisa entender o que mudou em relação à anterior — <strong>sem ler as duas inteiras</strong> palavra por palavra.</p>
      </div>
      <div class="act-block"><div class="act-block-h weak">Prompt fraco</div>
        <div class="prompt weak">O que mudou entre estas duas normas?</div>
        <p class="prompt-why">O modelo pode resumir “no geral” e perder mudanças pontuais de redação que alteram obrigações — justamente o que importa.</p>
      </div>
      <div class="act-block"><div class="act-block-h good">Prompt melhorado</div>
        <div class="prompt good">Compare as duas versões abaixo (A = anterior, B = nova) e produza uma tabela com três colunas:
o que mudou · trecho da versão A · trecho da versão B.
Liste apenas diferenças de conteúdo (obrigações, prazos, competências), citando os trechos exatos.
Ignore mudanças puramente de formatação. Se um dispositivo foi incluído ou removido, marque como NOVO ou REVOGADO.

[versão A]
---
[versão B]</div>
      </div>
      <div class="act-grid">
        <div class="col review"><div class="act-block-h review">Como revisar</div>
          <ul><li>Confira cada trecho citado nas duas versões — o modelo pode parafrasear e mudar o sentido.</li><li>Verifique a vigência: a IA não sabe, por si, qual norma está em vigor.</li></ul>
        </div>
        <div class="col risk"><div class="act-block-h risk">Riscos e o que não usar</div>
          <ul><li>IA não é fonte jurídica: use-a para achar as diferenças, não para decidir o que elas significam.</li><li>Confirme a interpretação com o setor competente.</li></ul>
        </div>
      </div>
    </article>

    <article class="act" id="act-4" style="scroll-margin-top:96px">
      <header class="act-head">
        <div class="act-num">04</div>
        <div><div class="cat">Redação</div><h2>Produzir a minuta de um ofício</h2></div>
      </header>
      <div class="act-block"><div class="act-block-h ctx">Contexto</div>
        <p class="act-ctx">Você precisa preparar a <strong>minuta de um ofício</strong> respondendo uma demanda de outro órgão. A carta tem forma, encadeamento e uma resposta objetiva — e não pode assumir compromissos que a chefia não autorizou.</p>
      </div>
      <div class="act-block"><div class="act-block-h weak">Prompt fraco</div>
        <div class="prompt weak">Escreva um ofício respondendo isso aqui.</div>
        <p class="prompt-why">Sem remetente, destinatário, referências, tom nem limite de compromisso — o modelo inventa cargos, datas e promessas para "completar" o texto.</p>
      </div>
      <div class="act-block"><div class="act-block-h good">Prompt melhorado</div>
        <div class="prompt good">Você é assistente de gabinete. Redija a minuta de um ofício respondendo à demanda abaixo.
Contexto: remetente = [órgão/setor]; destinatário = [órgão/pessoa e cargo]; referências = [número do processo e do ofício recebido]; data = [data].
Tom: institucional, cordial e objetivo. Use no máximo 3 parágrafos curtos.
Estrutura: (1) reconhecer a demanda com a referência; (2) responder objetivamente com base APENAS nas informações que eu fornecer abaixo; (3) próximos passos, se houver.
Não assuma compromissos, prazos ou posições que não estejam nas informações fornecidas. Se faltar dado essencial, marque como [PENDENTE — confirmar].

Demanda recebida: [colar]
Informações autorizadas para resposta: [colar]</div>
      </div>
      <div class="act-grid">
        <div class="col review"><div class="act-block-h review">Como revisar</div>
          <ul><li>Confira remetente, destinatário, cargo e número do processo — o modelo troca esses dados com facilidade.</li><li>Marque qualquer promessa ou prazo que apareceu no texto sem estar nas suas informações e retire.</li><li>Passe pelo padrão de ofício do seu órgão (fecho, assinatura, timbre) antes de enviar.</li></ul>
        </div>
        <div class="col risk"><div class="act-block-h risk">Riscos e o que não usar</div>
          <ul><li>Não cole processos sigilosos, sob segredo de justiça, ou com dados pessoais em ferramentas abertas.</li><li>Não use a IA para <b>decidir</b> a resposta — só para redigir o que você já decidiu.</li></ul>
        </div>
      </div>
    </article>

    <article class="act" id="act-5" style="scroll-margin-top:96px">
      <header class="act-head">
        <div class="act-num">05</div>
        <div><div class="cat">Planejamento</div><h2>Preparar a pauta de uma reunião</h2></div>
      </header>
      <div class="act-block"><div class="act-block-h ctx">Contexto</div>
        <p class="act-ctx">Você precisa preparar a <strong>pauta de uma reunião</strong> a partir de anotações, e-mails e pendências espalhados. O risco é entrar sem prioridade clara e sair sem decisões.</p>
      </div>
      <div class="act-block"><div class="act-block-h weak">Prompt fraco</div>
        <div class="prompt weak">Faça uma pauta de reunião a partir disso.</div>
        <p class="prompt-why">O modelo lista todos os temas em ordem aleatória, sem separar decisão de informe, sem tempo e sem responsável — o que gera reunião longa e sem decisão.</p>
      </div>
      <div class="act-block"><div class="act-block-h good">Prompt melhorado</div>
        <div class="prompt good">Prepare a pauta de uma reunião de 60 minutos com [participantes] para tratar do tema [tema].
A partir das notas abaixo, extraia e organize:
1. Decisões pendentes (o que precisa ser resolvido) — máx. 4 itens, com opção principal e alternativa.
2. Informes rápidos (o que precisa ser comunicado, não decidido) — máx. 3 itens.
3. Encaminhamentos abertos da última reunião ainda não resolvidos.
Para cada item da lista 1, sugira tempo (em minutos), responsável pela apresentação e a decisão a tomar.
Não invente tópicos que não estejam nas notas. Marque como [FALTA CONFIRMAR] qualquer dado ausente.

Notas: [colar]</div>
      </div>
      <div class="act-grid">
        <div class="col review"><div class="act-block-h review">Como revisar</div>
          <ul><li>Confirme os responsáveis com cada um antes de enviar a pauta — evita mal-entendidos.</li><li>Corte itens que não são decisão nem informe — reunião não é lugar para brainstorming genérico.</li><li>Some os tempos: se passar de 60 min, priorize e mande o resto por escrito.</li></ul>
        </div>
        <div class="col risk"><div class="act-block-h risk">Riscos e o que não usar</div>
          <ul><li>E-mails com dados pessoais de servidores ou cidadãos não devem ser colados em ferramentas abertas.</li><li>Não confunda pauta com ata: a IA ajuda a preparar, mas o registro do que foi decidido é responsabilidade humana.</li></ul>
        </div>
      </div>
    </article>

    <article class="act" id="act-6" style="scroll-margin-top:96px">
      <header class="act-head">
        <div class="act-num">06</div>
        <div><div class="cat">Atendimento</div><h2>Organizar manifestações do cidadão por tema</h2></div>
      </header>
      <div class="act-block"><div class="act-block-h ctx">Contexto</div>
        <p class="act-ctx">Chegaram centenas de manifestações (ouvidoria, Fala.BR, consulta) e você precisa entender <strong>quais são os temas dominantes</strong> e o que exige resposta prioritária. O risco é o modelo agrupar por semelhança superficial e esconder problemas reais.</p>
      </div>
      <div class="act-block"><div class="act-block-h weak">Prompt fraco</div>
        <div class="prompt weak">Agrupe estas mensagens por tema.</div>
        <p class="prompt-why">Sem definir o que conta como “tema”, o modelo agrupa por palavra-chave; misturam-se reclamações sérias com dúvidas simples, e sumiu a urgência.</p>
      </div>
      <div class="act-block"><div class="act-block-h good">Prompt melhorado</div>
        <div class="prompt good">Analise as manifestações abaixo (uma por linha, formato: ID · texto) e produza uma tabela com:
tema · descrição em uma frase · nº de manifestações · exemplos (até 3 IDs) · sinal de urgência (rotina / atenção / crítico).
Regras:
- Um tema deve reunir manifestações com o mesmo problema, não só palavras iguais.
- Se uma manifestação não se encaixa, coloque em "Outros" e liste o ID.
- "Crítico" só para risco à saúde, segurança, direitos ou continuidade do serviço.
- Não invente temas nem inflacione contagens; se estiver em dúvida, use "Outros".
No fim, liste as 5 manifestações que mais parecem exigir resposta imediata, com o ID.

Manifestações: [colar]</div>
      </div>
      <div class="act-grid">
        <div class="col review"><div class="act-block-h review">Como revisar</div>
          <ul><li>Leia manualmente os IDs marcados como "crítico" — não delegue essa triagem.</li><li>Compare a contagem: se um tema ficou muito abaixo do esperado, o modelo pode ter dispersado por semelhança superficial.</li><li>Recontagem por amostragem: pegue 10 manifestações e confira se estão no tema certo.</li></ul>
        </div>
        <div class="col risk"><div class="act-block-h risk">Riscos e o que não usar</div>
          <ul><li>Dados pessoais dos cidadãos (nome, contato, CPF) não devem ser colados em ferramentas abertas — anonimize antes ou use ambiente institucional.</li><li>Cuidado com vieses: manifestações minoritárias podem representar problemas graves e não podem ser "diluídas" na maioria.</li></ul>
        </div>
      </div>
    </article>

    <article class="act" id="act-7" style="scroll-margin-top:96px">
      <header class="act-head">
        <div class="act-num">07</div>
        <div><div class="cat">Pesquisa</div><h2>Criar perguntas para uma consulta pública</h2></div>
      </header>
      <div class="act-block"><div class="act-block-h ctx">Contexto</div>
        <p class="act-ctx">Você precisa lançar uma <strong>consulta pública</strong> sobre uma minuta de norma e quer perguntas que produzam contribuições úteis — não só concordância genérica. Perguntas mal formuladas induzem a resposta.</p>
      </div>
      <div class="act-block"><div class="act-block-h weak">Prompt fraco</div>
        <div class="prompt weak">Escreva perguntas para uma consulta pública sobre esta minuta.</div>
        <p class="prompt-why">O modelo tende a criar perguntas fechadas do tipo “você concorda?” — que já vêm com viés e não geram material para melhorar a proposta.</p>
      </div>
      <div class="act-block"><div class="act-block-h good">Prompt melhorado</div>
        <div class="prompt good">Você é analista de participação social. Elabore perguntas para uma consulta pública sobre a minuta abaixo, com o objetivo de produzir contribuições úteis para melhorá-la — não apenas medir apoio.
Produza 8 perguntas em três blocos:
- 3 perguntas abertas por dispositivo/artigo mais sensível da minuta (dizer qual).
- 3 perguntas sobre impactos práticos esperados para diferentes públicos (dizer quais públicos).
- 2 perguntas sobre alternativas ou omissões: o que a minuta não trata que deveria tratar.
Regras: use linguagem simples; evite perguntas indutoras (não pergunte "você concorda que..."); prefira "como", "o que", "que efeito"; deixe espaço para discordância.
Para cada pergunta, indique o público mais indicado a responder.

Minuta: [colar]</div>
      </div>
      <div class="act-grid">
        <div class="col review"><div class="act-block-h review">Como revisar</div>
          <ul><li>Leia em voz alta: se soa como "você concorda com a nossa proposta?", a pergunta induz — reescreva.</li><li>Teste com 2–3 pessoas do público-alvo antes de publicar: se ficam confusas, a resposta virá confusa.</li><li>Cheque cobertura: todo dispositivo sensível da minuta tem pergunta?</li></ul>
        </div>
        <div class="col risk"><div class="act-block-h risk">Riscos e o que não usar</div>
          <ul><li>Não use IA para <b>tirar conclusão</b> da consulta — perguntar é uma etapa, ouvir e ponderar contribuições é outra.</li><li>Consulta pública tem valor jurídico: a fundamentação e a resposta às contribuições devem ser humanas.</li></ul>
        </div>
      </div>
    </article>

    <article class="act" id="act-8" style="scroll-margin-top:96px">
      <header class="act-head">
        <div class="act-num">08</div>
        <div><div class="cat">Análise de dados</div><h2>Analisar uma planilha (tendências e outliers)</h2></div>
      </header>
      <div class="act-block"><div class="act-block-h ctx">Contexto</div>
        <p class="act-ctx">Você tem uma planilha com dados operacionais (chamados, atendimentos, prazos, gastos) e quer <strong>identificar padrões e valores fora da curva</strong> para apoiar uma decisão. IA em planilha erra fácil quando não entende as colunas.</p>
      </div>
      <div class="act-block"><div class="act-block-h weak">Prompt fraco</div>
        <div class="prompt weak">Analise essa planilha e me diga o que chama atenção.</div>
        <p class="prompt-why">Sem dicionário de dados, sem período de referência e sem definição de "chama atenção", o modelo faz observações genéricas — e pode inventar números que não estão na planilha.</p>
      </div>
      <div class="act-block"><div class="act-block-h good">Prompt melhorado</div>
        <div class="prompt good">Você é analista de dados. Analise a planilha abaixo com base APENAS nas linhas fornecidas.
Dicionário: [coluna 1] = ...; [coluna 2] = ...; período = [data inicial a data final]; unidade = [ex.: reais, minutos, chamados].
Produza:
1. Estatísticas descritivas por coluna numérica (mín · máx · média · mediana) com o número exato de linhas usadas.
2. Tendência temporal (se houver coluna de data): variação percentual entre início e fim do período.
3. Outliers: linhas com valor acima de [regra, ex.: 2 desvios-padrão da média] — liste ID e valor.
4. Três perguntas que os dados não respondem e que você precisaria checar.
Não estime dados faltantes; se algo estiver ausente, escreva "dado não disponível". Não cite números que não estão na planilha.

Planilha: [colar em CSV ou tabela]</div>
      </div>
      <div class="act-grid">
        <div class="col review"><div class="act-block-h review">Como revisar</div>
          <ul><li>Confira os números-chave (mín, máx, total) contra a planilha original — modelos erram cálculos com frequência.</li><li>Cheque as datas: um outlier pode ser erro de digitação, não fenômeno real.</li><li>Trate o resultado como <b>ponto de partida</b> — a interpretação depende do contexto que só quem conhece a operação tem.</li></ul>
        </div>
        <div class="col risk"><div class="act-block-h risk">Riscos e o que não usar</div>
          <ul><li>Planilhas com dados pessoais (CPF, nome, contato) ou financeiros sensíveis não vão para ferramentas abertas — anonimize ou use ambiente institucional.</li><li>IA generalista não substitui análise estatística formal; para decisão de alto impacto, envolva a área de dados.</li></ul>
        </div>
      </div>
    </article>

    <article class="act" id="act-9" style="scroll-margin-top:96px">
      <header class="act-head">
        <div class="act-num">09</div>
        <div><div class="cat">Aprendizagem</div><h2>Criar o roteiro de uma capacitação</h2></div>
      </header>
      <div class="act-block"><div class="act-block-h ctx">Contexto</div>
        <p class="act-ctx">Você precisa preparar uma <strong>capacitação de 2 horas</strong> para servidores sobre um tema novo. O risco é acabar com uma aula expositiva longa, sem envolvimento e sem prática — que não muda o comportamento na segunda-feira.</p>
      </div>
      <div class="act-block"><div class="act-block-h weak">Prompt fraco</div>
        <div class="prompt weak">Monte um treinamento sobre [tema].</div>
        <p class="prompt-why">O modelo entrega um sumário genérico com tópicos gerais — sem público específico, sem objetivo mensurável e sem atividades práticas.</p>
      </div>
      <div class="act-block"><div class="act-block-h good">Prompt melhorado</div>
        <div class="prompt good">Você é designer instrucional. Desenhe uma capacitação de 2 horas sobre [tema] para [público específico e nível de conhecimento prévio], com o objetivo mensurável de que, ao final, o participante consiga [ação concreta].
Estrutura em quatro blocos de 25 min cada + 20 min para prática guiada:
- Bloco 1: por que isso importa (com um exemplo real da rotina do participante).
- Bloco 2: conceito essencial (o mínimo para entender — não tudo o que existe).
- Bloco 3: como fazer, passo a passo, com um caso.
- Bloco 4: erros comuns e como evitar.
- Prática guiada: um exercício em que o participante aplica em uma situação real dele.
Para cada bloco: entrega principal (o que fica), atividade curta (o que o participante FAZ, não só escuta) e material de apoio necessário.
Não use jargão sem definir. Não sugira slides — sugira a atividade e o momento.

Público: [colar]
Objetivo mensurável: [colar]
Restrições: [ex.: 20 participantes, remoto, sem material impresso]</div>
      </div>
      <div class="act-grid">
        <div class="col review"><div class="act-block-h review">Como revisar</div>
          <ul><li>Faça um "teste de conclusão": ao final, o participante sai capaz de fazer o que o objetivo prometeu?</li><li>Some os tempos e cronometre a prática — objetivo de 2 h tem que caber em 2 h.</li><li>Se todo bloco parece "expositivo", inclua pelo menos uma atividade prática por bloco — senão vira palestra.</li></ul>
        </div>
        <div class="col risk"><div class="act-block-h risk">Riscos e o que não usar</div>
          <ul><li>IA propõe estrutura; a validação do <b>conteúdo técnico</b> depende de quem domina o tema — não confie no que o modelo "sabe" sobre política pública, sem checar.</li><li>Materiais internos de treinamento com dados sensíveis: cuidado com o que compartilha em ferramentas abertas.</li></ul>
        </div>
      </div>
    </article>

    <article class="act" id="act-10" style="scroll-margin-top:96px">
      <header class="act-head">
        <div class="act-num">10</div>
        <div><div class="cat">Transparência</div><h2>Rascunhar uma resposta a pedido de LAI</h2></div>
      </header>
      <div class="act-block"><div class="act-block-h ctx">Contexto</div>
        <p class="act-ctx">Chegou um pedido pela Lei de Acesso à Informação (Lei 12.527/2011). Você tem prazo curto para responder com clareza, cobrindo o que o cidadão pediu e — quando for o caso — recusar com fundamento legal. O risco é responder de forma incompleta (gera recurso) ou expor dado que não deveria (sigilo, dado pessoal).</p>
      </div>
      <div class="act-block"><div class="act-block-h weak">Prompt fraco</div>
        <div class="prompt weak">Escreva uma resposta para este pedido de LAI.</div>
        <p class="prompt-why">Sem contexto de qual informação existe e qual não existe, sem o texto exato pedido pelo cidadão e sem quadro legal de recusa, o modelo produz resposta genérica — que costuma ser ou vazia ou juridicamente vulnerável.</p>
      </div>
      <div class="act-block"><div class="act-block-h good">Prompt melhorado</div>
        <div class="prompt good">Você é assessor da área de acesso à informação. Redija resposta ao pedido de LAI abaixo, seguindo esta estrutura:
(1) Cumprimento formal e referência ao protocolo.
(2) Repita o pedido do cidadão para confirmar entendimento.
(3) Para cada item pedido, responda usando SOMENTE as informações do bloco “Dados disponíveis” abaixo. Se algum item não estiver contemplado, escreva “esta informação não integra a base de dados desta unidade” e indique órgão competente.
(4) Se houver recusa de acesso, cite base legal exata (art. da Lei 12.527/2011 e/ou decreto regulamentador aplicável) e explique em linguagem simples o motivo.
(5) Feche informando prazos e canais para recurso (CGU, autoridade de monitoramento).

Não invente informação nem cite documento que não esteja no bloco. Tom formal, mas claro para cidadão não-especialista.

Pedido do cidadão: [colar]
Dados disponíveis: [colar planilha, tabela, resumo — nunca com dados pessoais de terceiros]
Fundamentos de recusa aplicáveis (se houver): [colar]</div>
      </div>
      <div class="act-grid">
        <div class="col review"><div class="act-block-h review">Como revisar</div>
          <ul><li>Cada afirmação da resposta tem correspondência exata no bloco de dados que você forneceu? Se não tem, é alucinação.</li><li>Se houve recusa, o artigo citado realmente sustenta o que a resposta afirma? Cheque no texto da lei.</li><li>A resposta cobre todos os itens do pedido — mesmo os que resultam em “não temos”? Item ignorado costuma virar recurso.</li></ul>
        </div>
        <div class="col risk"><div class="act-block-h risk">Riscos e o que não usar</div>
          <ul><li>Nunca cole no modelo dados pessoais de terceiros que apareçam nos documentos — anonimize antes.</li><li>Modelo tende a “ser cordial” além do necessário; corte adjetivos e mantenha o tom institucional.</li><li>Decisão de recusa é ato administrativo — precisa de assinatura da autoridade competente, não da IA.</li></ul>
        </div>
      </div>
    </article>

    <article class="act" id="act-11" style="scroll-margin-top:96px">
      <header class="act-head">
        <div class="act-num">11</div>
        <div><div class="cat">Análise jurídica</div><h2>Analisar uma minuta de contrato (cláusulas de risco)</h2></div>
      </header>
      <div class="act-block"><div class="act-block-h ctx">Contexto</div>
        <p class="act-ctx">Você vai receber uma minuta de contrato para revisar antes da assinatura. Precisa identificar rapidamente cláusulas que criam risco desproporcional, obrigações desequilibradas ou lacunas críticas — para levar essas questões ao jurídico com foco, não pedir “dá uma olhada em tudo”.</p>
      </div>
      <div class="act-block"><div class="act-block-h weak">Prompt fraco</div>
        <div class="prompt weak">Encontre problemas neste contrato.</div>
        <p class="prompt-why">Sem lista de tipos de risco a procurar, sem contexto do que a organização considera aceitável, o modelo devolve lista genérica de “melhores práticas” — muitas irrelevantes para o caso, algumas incorretas.</p>
      </div>
      <div class="act-block"><div class="act-block-h good">Prompt melhorado</div>
        <div class="prompt good">Você é assessor jurídico apoiando a leitura preliminar de um contrato administrativo. Analise a minuta abaixo procurando especificamente cinco categorias de risco. Para cada uma, cite a cláusula (número e trecho literal) e explique o risco em 2 linhas.

Categorias:
1. Obrigações desproporcionais para a Administração (multa unilateral, indenização ampla, garantia excessiva).
2. Lacunas em rescisão, prorrogação ou reajuste (situações não previstas que geram disputa).
3. Cláusulas de foro, lei aplicável ou arbitragem incompatíveis com contrato público brasileiro.
4. Propriedade intelectual e uso de dados — quem fica com o quê, quem pode reutilizar.
5. Sigilo e proteção de dados pessoais (LGPD) — obrigações do contratado, prazo, responsabilidade em incidente.

Se algo estiver AUSENTE mas devesse estar (por exemplo, cláusula de LGPD faltando em contrato que envolve dado pessoal), sinalize como lacuna.
Ao final, priorize os três pontos mais críticos para levar ao jurídico.

Contrato: [colar]
Contexto do objeto: [ex.: contratação de plataforma SaaS que processará dados pessoais de servidores]</div>
      </div>
      <div class="act-grid">
        <div class="col review"><div class="act-block-h review">Como revisar</div>
          <ul><li>Cada cláusula citada tem número e trecho literal? Se o modelo parafraseia sem citar, pode estar inventando — cheque no texto.</li><li>O risco apontado depende do contexto do objeto — cláusula “normal” em contrato de bem é problema em contrato de serviço continuado. Confira se o modelo considerou o contexto.</li><li>Se o modelo não sinalizou nada em uma categoria, releia — pode ter passado, especialmente em contratos longos.</li></ul>
        </div>
        <div class="col risk"><div class="act-block-h risk">Riscos e o que não usar</div>
          <ul><li>Este é apoio à triagem, não parecer jurídico — decisão sobre assinar ou negociar exige análise formal pela advocacia pública.</li><li>Nunca cole contrato com informação sigilosa (empresarial ou de terceiros) em ferramenta aberta — use ambiente institucional.</li><li>Modelo tem viés a favor de identificar risco (“algo parece problemático”) — nem toda observação apontada é real. Filtre.</li></ul>
        </div>
      </div>
    </article>

    <article class="act" id="act-12" style="scroll-margin-top:96px">
      <header class="act-head">
        <div class="act-num">12</div>
        <div><div class="cat">Comunicação</div><h2>Redigir um FAQ para o portal do cidadão</h2></div>
      </header>
      <div class="act-block"><div class="act-block-h ctx">Contexto</div>
        <p class="act-ctx">Um serviço público novo (ou atualizado) precisa de FAQ no portal para que o cidadão resolva sozinho — reduzindo pressão sobre atendimento humano. O risco é criar FAQ que responde o que ninguém pergunta e não responde o que todo mundo quer saber.</p>
      </div>
      <div class="act-block"><div class="act-block-h weak">Prompt fraco</div>
        <div class="prompt weak">Faça um FAQ sobre [serviço].</div>
        <p class="prompt-why">Sem lista das dúvidas reais que chegam à ouvidoria, o modelo inventa perguntas de manual — “o que é X?”, “quais são os benefícios?” — que ninguém digita na barra de busca.</p>
      </div>
      <div class="act-block"><div class="act-block-h good">Prompt melhorado</div>
        <div class="prompt good">Você é redator de conteúdo público. Escreva um FAQ para o portal do cidadão sobre [serviço], seguindo estas regras:

(1) Priorize perguntas que aparecem na lista de dúvidas reais abaixo — se algo é perguntado muitas vezes, é a primeira pergunta.
(2) Escreva a pergunta como o cidadão a formularia (“Preciso agendar antes de ir?”), não como o servidor a formula (“Da necessidade de agendamento prévio”).
(3) Resposta em no máximo 5 linhas, começando pelo verbo de ação — “Sim, agende em…” / “Não é preciso, mas…”.
(4) Se a resposta depender de caso (“depende da renda”), diga o que faz depender e onde a pessoa checa.
(5) Ao final de cada resposta, se houver serviço vinculado, incluir link — apenas para páginas oficiais listadas em “Fontes autorizadas”.

Não invente prazo, valor ou requisito que não esteja no material. Se a lista de dúvidas cobrir tema que não está no material, marque “verificar” — não responda.

Serviço: [nome + descrição em 3 linhas]
Dúvidas reais (por frequência): [colar do sistema de atendimento ou ouvidoria]
Material oficial disponível: [colar cartilha, norma, portaria]
Fontes autorizadas para link: [lista de URLs gov.br permitidas]</div>
      </div>
      <div class="act-grid">
        <div class="col review"><div class="act-block-h review">Como revisar</div>
          <ul><li>Cada pergunta é uma pergunta que alguém realmente faz? Se soar como “manual de treinamento”, corte ou reescreva.</li><li>Toda resposta começa com verbo direto? Se começa com “A prestação do serviço é regida por…”, o cidadão desiste.</li><li>Confira valores, prazos e requisitos linha a linha no material oficial — modelo pode aproximar número e inventar exceção.</li></ul>
        </div>
        <div class="col risk"><div class="act-block-h risk">Riscos e o que não usar</div>
          <ul><li>Um FAQ errado no portal do cidadão gera ligações, recursos e — no limite — judicialização. Publique só depois de revisão da área finalística responsável pelo serviço.</li><li>Se o serviço mudar, o FAQ envelhece silenciosamente. Defina responsável e ciclo de revisão antes de publicar.</li><li>Não use este prompt para responder pedido individual — é para material de referência pública. Casos individuais precisam de canal formal.</li></ul>
        </div>
      </div>
    </article>

  </section>

  <section class="blk" style="border-bottom:0;padding-top:36px;padding-bottom:60px">
    <div class="note">
      <b>Regra que atravessa tudo.</b> A IA é <b>rascunhista</b>, não decisora. Cada uma das doze atividades acima pressupõe que a decisão final e a responsabilidade continuam com o servidor. Antes de colar qualquer conteúdo num modelo aberto, aplique o <a href="{{ '/setorpublico/governanca/posso-usar-ia/' | relative_url }}">Posso usar IA para isso?</a>.
    </div>
  </section>
</div>
