/* AI Business ReCode — demo pública de oito perguntas.
   Uma questão por componente: o Q01 de cada H do banco v2.0, com redação
   de visitante onde o enunciado corporativo pressupunha contexto interno.
   Os IDs seguem os do instrumento para manter rastreabilidade, mas a demo
   NUNCA produz escore da empresa nem benchmark — ver RECODE_DEMO.limites. */
window.RECODE_DEMO = (function(){

  var VERSAO = "2.0";

  /* A escala é a mesma do instrumento corporativo. NS não pontua e não
     penaliza: vira cobertura, que na demo lemos como sinal próprio. */
  var ESCALA = [
    { v:0, r:"Não existe",   d:"Não acontece na organização." },
    { v:1, r:"Pontual",      d:"Ocorre em iniciativas isoladas." },
    { v:2, r:"Parcial",      d:"Ocorre em algumas áreas, de forma parcial." },
    { v:3, r:"Consistente",  d:"Ocorre com consistência nos processos relevantes." },
    { v:4, r:"Monitorado",   d:"É prática monitorada e revista com evidências." }
  ];

  var PERGUNTAS = [
    { id:"H1-Q01", h:"H1", nome:"Modelo de negócio e economia do valor",
      texto:"A organização define resultados econômicos e de negócio para IA, além de métricas de uso de ferramentas." },
    { id:"H2-Q01", h:"H2", nome:"Arquitetura do trabalho e fluxo",
      texto:"Antes de automatizar com IA, o fluxo completo é redesenhado — questionando tarefas, aprovações e etapas que não geram valor." },
    { id:"H3-Q01", h:"H3", nome:"Modelo operacional humano–agente",
      texto:"Há clareza sobre quais decisões e tarefas cabem a pessoas, a agentes de IA e aos sistemas que já existem." },
    { id:"H4-Q01", h:"H4", nome:"Contexto, conhecimento e dados",
      texto:"As iniciativas prioritárias conseguem acessar os dados e conhecimentos atualizados de que precisam para executar." },
    { id:"H5-Q01", h:"H5", nome:"Execução e orquestração",
      texto:"As soluções de IA conseguem executar tarefas nos sistemas necessários, com integrações autorizadas e documentadas." },
    { id:"H6-Q01", h:"H6", nome:"Avaliação, observabilidade e confiabilidade",
      texto:"Critérios objetivos de qualidade são definidos antes de colocar agentes em atividades críticas." },
    { id:"H7-Q01", h:"H7", nome:"Governança e direitos de decisão",
      texto:"A empresa define limites de autonomia e de aprovação humana conforme o risco de cada ação com IA." },
    { id:"H8-Q01", h:"H8", nome:"Liderança, competências e mudança",
      texto:"As lideranças são preparadas para redesenhar metas, equipes, decisões e incentivos no trabalho combinado de pessoas e IA." }
  ];

  /* Para cada componente: a restrição provável quando a nota é baixa e a
     pergunta que vale levar para a mesa executiva. São formulações de
     hipótese — jamais diagnóstico — conforme o manual de linguagem. */
  var LEITURA = {
    H1:{ restricao:"O valor não tem para onde ir",
         hip:"Sem resultado econômico definido e sem decisão sobre o destino da capacidade liberada, o ganho de IA se dissolve na rotina — ninguém o recolhe.",
         exec:"Quando uma equipe passa a entregar o mesmo em menos tempo, para onde vai esse tempo: mais volume, mais qualidade, oferta nova ou redução de custo?" },
    H2:{ restricao:"O gargalo não foi tocado",
         hip:"Automatizar uma etapa de um fluxo que não foi redesenhado acelera a etapa e preserva a fila seguinte. O ciclo de ponta a ponta fica igual.",
         exec:"No processo que mais importa, qual é hoje o tempo total de ciclo — e quanto dele é espera, e não trabalho?" },
    H3:{ restricao:"A responsabilidade ficou ambígua",
         hip:"Quando não está claro quem decide, verifica e responde, o trabalho híbrido gera retrabalho e decisões que ninguém assume.",
         exec:"Se um agente produzir um resultado errado que chegue ao cliente, quem responde por ele — e essa pessoa sabe disso?" },
    H4:{ restricao:"O contexto não chega na hora",
         hip:"Pessoas e agentes com acesso incompleto ou desatualizado produzem respostas plausíveis e erradas. O limite não é o modelo; é o que ele enxerga.",
         exec:"As informações necessárias para a decisão estão acessíveis, atualizadas e autorizadas — ou dependem de alguém lembrar onde ficam?" },
    H5:{ restricao:"A execução para na borda",
         hip:"Sem integração autorizada, estado e recuperação, o agente recomenda mas não executa — e o ganho fica preso na demonstração.",
         exec:"O que acontece hoje quando uma automação falha no meio: existe retomada, ou alguém refaz tudo à mão?" },
    H6:{ restricao:"Não há como saber se está funcionando",
         hip:"Sem critério de qualidade definido antes e sem rastro depois, não se distingue um sistema que funciona de um que ainda não falhou de forma visível.",
         exec:"Qual é a taxa de erro aceitável nesta aplicação — e como ela é medida hoje?" },
    H7:{ restricao:"A autonomia não é proporcional ao risco",
         hip:"Dar a mesma liberdade a ações reversíveis e irreversíveis é o caminho mais curto para um incidente caro. Escalar sem gate é apostar.",
         exec:"Quais ações com IA podem acontecer sem aprovação humana hoje — e quem decidiu que podiam?" },
    H8:{ restricao:"O modelo mudou; os hábitos não",
         hip:"Processo redesenhado com liderança, rituais e incentivos antigos volta ao formato anterior em poucos meses.",
         exec:"O que mudou nas metas e nos incentivos da liderança depois que a IA entrou na operação?" }
  };

  /* Textos que o produto não pode deixar de dizer na prévia. */
  var LIMITES = {
    previa: "Prévia educacional. Não substitui diagnóstico corporativo nem avaliação de evidências.",
    naoE: "Isto não é um diagnóstico organizacional, não é benchmark e não mede a sua empresa — " +
          "são oito respostas de uma pessoa só, sobre a própria percepção."
  };

  /* Leitura da demo: duas restrições prováveis e uma pergunta executiva.
     Sem índice, sem percentual, sem rótulo de prontidão — a demo descreve
     um ponto de vista, e um ponto de vista não tem nota.

     O PISO existe porque pegar as duas menores sem condição produzia uma
     afirmação falsa: quem marcava 4 ("prática monitorada e revista com
     evidências") nos oito componentes lia na tela que não tinha resultado
     econômico definido. As duas menores continuam sendo mostradas — o PRD
     pede duas —, mas só são narradas como restrição quando a própria
     resposta indica fragilidade. Acima do piso, o cartão diz o que é:
     o ponto relativamente menos forte de uma leitura que não acusa nada. */
  var PISO = 2;   /* 0 ausente, 1 pontual, 2 parcial → cabe hipótese de gargalo */

  function ler(respostas){
    var dadas = PERGUNTAS.map(function(p){
      return { p:p, v: respostas[p.id] };
    });
    var numericas = dadas.filter(function(x){ return typeof x.v === "number"; });
    var naoSei    = dadas.filter(function(x){ return x.v === "NS"; });

    /* ordena da menor para a maior; empate mantém a ordem do instrumento,
       que vai do econômico ao humano — começar pelo H mais estrutural */
    var ordenadas = numericas.slice().sort(function(a,b){ return a.v - b.v; });
    var restricoes = ordenadas.slice(0,2).map(function(x){
      return { h:x.p.h, nome:x.p.nome, valor:x.v,
               forte: x.v <= PISO,          /* narrar como gargalo provável */
               leitura:LEITURA[x.p.h] };
    });

    var comGargalo = restricoes.filter(function(r){ return r.forte; });

    /* a pergunta executiva sai da restrição mais forte; sem gargalo
       provável ela ainda vale, porque é pergunta de verificação */
    var exec = restricoes.length ? restricoes[0].leitura.exec : null;

    return {
      versao: VERSAO,
      respondidas: numericas.length,
      naoSei: naoSei.length,
      naoSeiComponentes: naoSei.map(function(x){ return x.p.h; }),
      restricoes: restricoes,
      temGargalo: comGargalo.length > 0,
      semCobertura: numericas.length < 2,   /* NS demais para dizer qualquer coisa */
      perguntaExecutiva: exec,
      dadas: dadas
    };
  }

  return { VERSAO:VERSAO, ESCALA:ESCALA, PERGUNTAS:PERGUNTAS, LEITURA:LEITURA,
           LIMITES:LIMITES, ler:ler };
})();
