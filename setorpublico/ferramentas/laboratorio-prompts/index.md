---
title: "Laboratório de prompts"
description: "Atividades práticas para servidores usarem IA de forma crítica e segura — do prompt fraco ao prompt melhorado, com revisão, riscos e dados que não devem ser usados."
---

<style>
  .prompt{font-family:var(--mono);font-size:12.5px;line-height:1.55;color:var(--tx);background:var(--bg2);
    border:1px solid var(--line);border-left:2px solid var(--accent);border-radius:8px;padding:14px 16px;
    margin-top:10px;white-space:pre-wrap}
  .prompt.weak{border-left-color:var(--ris)}
  .lab-sub{font-family:var(--mono);font-size:10.5px;letter-spacing:.14em;text-transform:uppercase;
    color:var(--tx3);margin:20px 0 6px}
  .lab-sub.on::before{content:"";display:inline-block;width:8px;height:8px;border-radius:2px;
    background:var(--sub,var(--accent));margin-right:8px;vertical-align:middle}
</style>

<div class="wrap">
  <div class="page-head">
    <div class="crumb"><a href="{{ '/setorpublico/' | relative_url }}">Início</a> / <a href="{{ '/setorpublico/ferramentas/' | relative_url }}">Ferramentas</a> / Laboratório de prompts</div>
    <h1>Laboratório de prompts</h1>
    <p class="lede">Aprender a usar IA no serviço público é menos sobre “saber o comando mágico” e mais sobre pensar criticamente: dar contexto, delimitar a tarefa, revisar a saída e saber o que nunca colocar num modelo. Cada atividade parte de um prompt fraco, mostra por que ele falha e evolui para um prompt melhor — com revisão e riscos.</p>
  </div>

  <section class="blk" style="border-bottom:0;padding-top:36px">
    <div class="sk">Categorias</div>
    <h2>O que dá para praticar</h2>
    <div class="taglist"><span>Resumo</span><span>Redação</span><span>Comparação</span><span>Pesquisa</span><span>Análise de dados</span><span>Planejamento</span><span>Comunicação</span><span>Atendimento</span><span>Gestão do conhecimento</span><span>Aprendizagem</span></div>
  </section>

  <section class="blk" style="border-bottom:0;padding-top:10px">
    <div class="sk">Atividade 01 · Resumo</div>
    <h2>Resumir uma nota técnica</h2>
    <div class="lab-sub on" style="--sub:var(--via)">Contexto</div>
    <p>Você recebeu uma nota técnica de 15 páginas e precisa de um resumo executivo para a chefia decidir. O risco é o resumo perder ressalvas importantes ou “inventar” conclusões que não estão no texto.</p>
    <div class="lab-sub on" style="--sub:var(--ris)">Prompt fraco</div>
    <div class="prompt weak">Resuma esta nota técnica.</div>
    <p style="margin-top:10px;color:var(--tx2);font-size:14px">Sem papel, sem público, sem formato e sem limites: o modelo escolhe o que achar relevante, no tamanho que quiser, e pode suavizar ou omitir ressalvas.</p>
    <div class="lab-sub on" style="--sub:var(--val)">Prompt melhorado</div>
    <div class="prompt">Você é assessor técnico. Resuma a nota abaixo para um secretário decidir, em no máximo 10 linhas.
Estruture em: (1) do que se trata, (2) recomendação principal, (3) ressalvas e riscos, (4) o que falta decidir.
Use apenas o que está no texto; se algo não estiver claro, escreva “não consta”. Não acrescente informação externa.

[colar a nota]</div>
    <div class="lab-sub on">Como revisar</div>
    <ul class="klist"><li>Confira cada afirmação contra o texto original, sobretudo números e prazos.</li><li>Verifique se as ressalvas do documento sobreviveram ao resumo.</li><li>Desconfie de qualquer conclusão que você não encontra na nota.</li></ul>
    <div class="lab-sub on" style="--sub:var(--alr)">Riscos e o que não usar</div>
    <ul class="klist"><li>Alucinação: o modelo pode afirmar com segurança algo que não está no documento.</li><li>Não cole notas <b>sigilosas</b> ou com dados pessoais em ferramentas abertas — use ambiente institucional.</li></ul>
  </section>

  <section class="blk" style="border-bottom:0;padding-top:10px">
    <div class="sk">Atividade 02 · Comunicação</div>
    <h2>Adaptar um texto para linguagem simples</h2>
    <div class="lab-sub on" style="--sub:var(--via)">Contexto</div>
    <p>Uma orientação ao cidadão está escrita em juridiquês. Você quer torná-la clara sem mudar o que ela determina — simplificar a forma, não o direito.</p>
    <div class="lab-sub on" style="--sub:var(--ris)">Prompt fraco</div>
    <div class="prompt weak">Deixe este texto mais simples.</div>
    <p style="margin-top:10px;color:var(--tx2);font-size:14px">“Mais simples” é vago: o modelo pode cortar exceções, trocar termos técnicos por aproximações erradas e alterar o sentido jurídico.</p>
    <div class="lab-sub on" style="--sub:var(--val)">Prompt melhorado</div>
    <div class="prompt">Reescreva o texto abaixo em linguagem simples, para um cidadão sem formação jurídica.
Regras: frases curtas; explique o termo técnico na primeira vez; mantenha exatamente as condições, prazos e exceções.
Não altere o sentido jurídico nem invente casos. Ao final, liste os termos técnicos que você precisou manter e por quê.

[colar o texto]</div>
    <div class="lab-sub on">Como revisar</div>
    <ul class="klist"><li>Leia lado a lado: nenhuma condição, prazo ou exceção pode ter mudado.</li><li>Peça a alguém da área finalística e ao jurídico para validar antes de publicar.</li></ul>
    <div class="lab-sub on" style="--sub:var(--alr)">Riscos e o que não usar</div>
    <ul class="klist"><li>Simplificação excessiva pode virar informação incorreta — e orientação errada ao cidadão tem efeito real.</li><li>Trate o resultado como rascunho: a responsabilidade pela comunicação continua sendo humana.</li></ul>
  </section>

  <section class="blk" style="border-bottom:0;padding-top:10px">
    <div class="sk">Atividade 03 · Comparação</div>
    <h2>Comparar duas versões de uma norma</h2>
    <div class="lab-sub on" style="--sub:var(--via)">Contexto</div>
    <p>Saiu uma nova redação de uma portaria e você precisa entender o que mudou em relação à anterior — sem ler as duas inteiras palavra por palavra.</p>
    <div class="lab-sub on" style="--sub:var(--ris)">Prompt fraco</div>
    <div class="prompt weak">O que mudou entre estas duas normas?</div>
    <p style="margin-top:10px;color:var(--tx2);font-size:14px">O modelo pode resumir “no geral” e perder mudanças pontuais de redação que alteram obrigações — justamente o que importa.</p>
    <div class="lab-sub on" style="--sub:var(--val)">Prompt melhorado</div>
    <div class="prompt">Compare as duas versões abaixo (A = anterior, B = nova) e produza uma tabela com três colunas:
o que mudou · trecho da versão A · trecho da versão B.
Liste apenas diferenças de conteúdo (obrigações, prazos, competências), citando os trechos exatos.
Ignore mudanças puramente de formatação. Se um dispositivo foi incluído ou removido, marque como NOVO ou REVOGADO.

[versão A]
---
[versão B]</div>
    <div class="lab-sub on">Como revisar</div>
    <ul class="klist"><li>Confira cada trecho citado nas duas versões — o modelo pode parafrasear e mudar o sentido.</li><li>Verifique a <b>vigência</b>: a IA não sabe, por si, qual norma está em vigor.</li></ul>
    <div class="lab-sub on" style="--sub:var(--alr)">Riscos e o que não usar</div>
    <ul class="klist"><li>IA não é fonte jurídica: use-a para achar as diferenças, não para decidir o que elas significam.</li><li>Confirme a interpretação com o setor competente.</li></ul>
  </section>

  <section class="blk" style="border-bottom:0;padding-top:10px;padding-bottom:56px">
    <div class="sk">Próximas atividades</div>
    <h2>Em construção</h2>
    <p class="lead">Outras atividades previstas, com a mesma estrutura de prompt fraco → prompt melhorado → revisão → riscos:</p>
    <ul class="dashlist" style="max-width:640px">
      <li>Preparar a pauta de uma reunião</li>
      <li>Produzir a minuta de um ofício</li>
      <li>Organizar manifestações de cidadãos por tema</li>
      <li>Criar perguntas para uma consulta pública</li>
      <li>Analisar uma planilha (tendências e outliers)</li>
      <li>Criar o roteiro de uma capacitação</li>
    </ul>
    <div class="note"><b>Estrutura de cada atividade:</b> contexto · tarefa · prompt inicial · limitações · prompt melhorado · exemplo de resultado · como revisar · riscos · dados que não devem ser usados · variações.</div>
  </section>
</div>
