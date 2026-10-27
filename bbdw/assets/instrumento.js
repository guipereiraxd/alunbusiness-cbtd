/* Hybrid Skills · instrumento v2026-10-27.1
   Fonte: PRD Hybrid Skills v1.0 (27/10/2026), seções 3, 4 e 5.
   Escala comum: 0 a 3; "Ainda não vivi essa situação" é ausente (null) e
   nunca vira zero. Os IDs H, S e I são internos e não aparecem na tela. */
window.BBDW_INSTRUMENTO = {
  versao: "2026-10-27.1",
  pares: ["P1","P2","P3","P4","P5"],

  escala: [
    { v:0, r:"Quase nunca" },
    { v:1, r:"Às vezes" },
    { v:2, r:"Muitas vezes" },
    { v:3, r:"Quase sempre" }
  ],
  ausente: { v:null, r:"Ainda não vivi essa situação" },

  instrucao: "Pense nos últimos três meses, no trabalho, nos estudos ou em outros projetos. Responda sobre o que você fez, não sobre o que gostaria de fazer.",

  contextos: [
    { id:"trabalho", r:"Trabalho" },
    { id:"estudos",  r:"Estudos" },
    { id:"pessoal",  r:"Projetos pessoais" },
    { id:"nao",      r:"Prefiro não dizer" }
  ],

  /* o objetivo liga a um par; "nao" é "Ainda não sei" */
  objetivos: [
    { id:"P1",  r:"Entender melhor as informações" },
    { id:"P2",  r:"Escolher prioridades" },
    { id:"P3",  r:"Encontrar novas soluções" },
    { id:"P4",  r:"Fazer acontecer com outras pessoas" },
    { id:"P5",  r:"Aprender com tentativas" },
    { id:"nao", r:"Ainda não sei" }
  ],

  triagem: [
    { id:"P1A", par:"P1", texto:"Antes de decidir, comparo informações para entender o que está acontecendo." },
    { id:"P1B", par:"P1", texto:"Quando uma informação parece estranha, procuro saber de onde ela veio." },
    { id:"P2A", par:"P2", texto:"Uso informações para escolher o que merece atenção primeiro." },
    { id:"P2B", par:"P2", texto:"Antes de acompanhar um número, penso em como ele ajuda no que quero alcançar." },
    { id:"P3A", par:"P3", texto:"Uso uma ferramenta de IA para explorar mais de uma maneira de resolver algo." },
    { id:"P3B", par:"P3", texto:"Quando a IA sugere uma ideia, adapto a sugestão à situação que preciso resolver." },
    { id:"P4A", par:"P4", texto:"Uso uma lista, agenda ou ferramenta compartilhada para organizar tarefas com outras pessoas." },
    { id:"P4B", par:"P4", texto:"Ao organizar tarefas em uma ferramenta, combino com as pessoas quem fará o quê." },
    { id:"P5A", par:"P5", texto:"Antes de mudar tudo, faço um teste pequeno e observo o que aconteceu." },
    { id:"P5B", par:"P5", texto:"Uso o resultado de uma tentativa para decidir o que vou mudar na próxima." }
  ],

  aprofundamento: {
    P1: [
      { id:"H", texto:"Consigo comparar números ou informações de uma tabela para entender uma situação." },
      { id:"S", texto:"Antes de aceitar uma conclusão, penso em outras explicações possíveis." },
      { id:"I", texto:"Ao usar um número para decidir, verifico sua origem e o que ele não explica." }
    ],
    P2: [
      { id:"H", texto:"Consigo escolher quais informações comparar para apoiar uma decisão." },
      { id:"S", texto:"Antes de agir, defino o resultado que quero alcançar e o que é prioridade." },
      { id:"I", texto:"Uso as informações disponíveis para escolher a ação que mais ajuda no meu objetivo." }
    ],
    P3: [
      { id:"H", texto:"Consigo explicar a uma ferramenta de IA o que preciso e ajustar meu pedido." },
      { id:"S", texto:"Penso em maneiras diferentes de resolver uma situação antes de escolher uma." },
      { id:"I", texto:"Uso sugestões da IA como ponto de partida e crio uma solução adequada à minha situação." }
    ],
    P4: [
      { id:"H", texto:"Consigo organizar tarefas, responsáveis e prazos em uma ferramenta compartilhada." },
      { id:"S", texto:"Ouço as pessoas envolvidas e combino responsabilidades antes de começar." },
      { id:"I", texto:"Uso a ferramenta junto com as pessoas para acompanhar o combinado e resolver dificuldades." }
    ],
    P5: [
      { id:"H", texto:"Antes de testar uma ideia, defino o que vou fazer e como observar o resultado." },
      { id:"S", texto:"Mudo minha maneira de agir quando percebo que ela não está funcionando." },
      { id:"I", texto:"Uso o que observei em um teste para ajustar minha próxima tentativa." }
    ]
  }
};
