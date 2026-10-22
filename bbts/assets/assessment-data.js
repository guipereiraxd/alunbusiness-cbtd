/* BBTS · Prontidão em IA — instrumento v6 (out/2026)
   Recorte: bloco PESSOAS (P1–P16). Maturidade organizacional (O1–O10) fora do escopo. */
window.BBTS = (function(){
  const ESCADA_P = ["Desconhece","Depende","Executa","Transfere"];
  const ESCADA_C = ["Ausente","Marginal","Disponível","Favorável"];
  const ESCADA_T = ["Sem ganho","Até 1h","1 a 3h","Mais de 3h"];

  const perguntas = [
    { id:"P1", bloco:"uso", titulo:"Frequência de uso", escada:ESCADA_P,
      enunciado:"Com que frequência você usa ferramentas de IA no seu trabalho?",
      opcoes:["Nunca usei IA no trabalho","Já experimentei, mas não virou hábito","Uso algumas vezes por semana","Uso todos os dias"] },
    { id:"P2", bloco:"uso", titulo:"Para que usa", escada:ESCADA_P, perfil:true,
      enunciado:"Para que você usa IA no trabalho hoje? Marque a situação mais avançada.",
      opcoes:["Não uso IA no trabalho","Uso para tirar dúvidas e pesquisar","Uso para fazer meu trabalho: escrever, resumir, analisar","Criei algo com IA que outras pessoas também usam"] },
    { id:"P3", bloco:"uso", titulo:"Autonomia", escada:ESCADA_P, perfil:true,
      enunciado:"Quando você usa IA, consegue se virar sozinho?",
      opcoes:["Não sei usar essas ferramentas","Consigo usar seguindo um exemplo pronto","Consigo usar sozinho e percebo quando a resposta não está boa","Consigo ensinar outras pessoas e corrigir o que não funciona"] },

    { id:"P4", bloco:"base", titulo:"Automação", escada:ESCADA_P,
      enunciado:"Você já fez alguma tarefa do seu trabalho passar a acontecer sozinha, sem alguém repetir o passo a passo?",
      opcoes:["Nunca fiz isso e não saberia por onde começar","Entendo a ideia, mas nunca fiz","Já fiz sozinho e consegui ajustar quando parou de funcionar","Fiz algo assim que outras pessoas da minha área usam"] },
    { id:"P5", bloco:"base", titulo:"Dados", escada:ESCADA_P,
      enunciado:"Como você costuma trabalhar com dados e planilhas?",
      opcoes:["Não trabalho com dados no meu dia a dia","Só leio relatórios e painéis que outras pessoas montam","Monto planilhas e junto informações de lugares diferentes para responder perguntas","Faço análises que outras pessoas usam para tomar decisão"] },
    { id:"P6", bloco:"base", titulo:"Ferramentas sem programação", escada:ESCADA_P,
      enunciado:"Você já usou ferramentas que montam automações sem precisar programar, como Power Automate, Zapier, Make ou parecidas?",
      opcoes:["Não sei o que são essas ferramentas","Sei o que são, mas nunca usei","Já montei algo que uso no meu dia a dia","Já montei algo que outras pessoas usam"] },
    { id:"P7", bloco:"base", titulo:"Conceitos técnicos", escada:ESCADA_P,
      enunciado:"Você conhece os termos técnicos de IA, como prompt, modelo de linguagem, contexto ou integração com outros sistemas?",
      opcoes:["Não conheço nenhum desses termos","Já ouvi falar de alguns, mas não saberia explicar","Conheço e uso isso para melhorar meus resultados","Conheço bem e explico para outras pessoas"] },

    { id:"P8", bloco:"infl", titulo:"Procurado por outros", escada:ESCADA_P,
      enunciado:"Outras pessoas te procuram para tirar dúvidas sobre IA?",
      opcoes:["Nunca me procuram sobre isso","Já aconteceu uma ou outra vez","Acontece com frequência, dentro e fora do meu time","Sou uma das pessoas que a empresa procura quando o assunto é IA"] },
    { id:"P9", bloco:"infl", titulo:"Compartilha e ensina", escada:ESCADA_P,
      enunciado:"Você já ensinou ou mostrou para colegas alguma coisa sobre IA?",
      opcoes:["Nunca mostrei nada sobre o assunto","Já comentei com alguém o que aprendi","Já apresentei para o meu time, de forma preparada","Já organizei alguma ação de treinamento para mais de um time"] },

    { id:"P10", bloco:"ctx", titulo:"Ferramenta disponível", escada:ESCADA_C,
      enunciado:"Você tem ferramentas de IA disponíveis para usar no seu trabalho?",
      opcoes:["Não tenho nenhuma ferramenta de IA disponível","Uso por conta própria, com ferramenta gratuita ou paga por mim","A empresa me dá acesso a pelo menos uma ferramenta de IA","A empresa me dá acesso e eu sei a quem pedir quando preciso de outra"] },
    { id:"P11", bloco:"ctx", titulo:"Ambiente da área", escada:ESCADA_C,
      enunciado:"Como o uso de IA é visto na sua área?",
      opcoes:["Não sei se posso usar, ou sei que não é bem visto","Ninguém fala sobre isso na minha área","É aceito, e as pessoas comentam abertamente o que usam","Meu gestor incentiva e pergunta sobre os resultados"] },
    { id:"P12", bloco:"ctx", titulo:"Espaço na rotina", escada:ESCADA_C,
      enunciado:"Sua rotina deixa espaço para testar uma forma nova de fazer alguma coisa?",
      opcoes:["Não. Minha rotina é toda tomada pelo que já está marcado","Raramente, e normalmente fora do horário de trabalho","Sim, consigo encaixar quando acho que vale a pena","Sim, e testar coisa nova faz parte do que esperam de mim"] },

    { id:"P13", bloco:"retorno", titulo:"Tempo economizado", escada:ESCADA_T, foraDoIndice:true,
      enunciado:"Somando tudo o que você faz com IA, quanto tempo você acha que ela te economiza por semana?",
      opcoes:["Não percebo ganho de tempo, ou não uso IA","Até 1 hora por semana","De 1 a 3 horas por semana","Mais de 3 horas por semana"] }
  ];

  const abertas = [
    { id:"P14", titulo:"Um caso concreto", obrigatoria:false,
      enunciado:'Conte um caso concreto em que você já usou IA no seu trabalho. O que você precisava fazer, o que usou e o que mudou no resultado. Se nunca usou, escreva "não usei".',
      placeholder:"Ex.: precisava resumir atas longas para a diretoria. Passei a usar IA para gerar o resumo e eu revisava…" },
    { id:"P15", titulo:"O que a IA poderia resolver", obrigatoria:false,
      enunciado:"Pense em algo do seu trabalho ou da sua área que ainda é feito de um jeito trabalhoso, repetitivo ou demorado, e que a IA poderia resolver. Descreva o que é.",
      placeholder:"Ex.: conferência manual de planilhas que chegam de três sistemas diferentes…" },
    { id:"P16", titulo:"O que mais atrapalha", obrigatoria:false,
      enunciado:"O que mais atrapalha você a usar mais IA no trabalho hoje? Por exemplo: falta de ferramenta, falta de tempo, não saber por onde começar, receio de errar, não ver onde aplicar.",
      placeholder:"Ex.: não sei por onde começar e tenho receio de usar dado interno na ferramenta errada…" }
  ];

  const blocos = {
    uso:    { nome:"Uso atual",           letra:"A", min:3, max:12, desc:"O hábito. O que você já faz com IA hoje." },
    base:   { nome:"Base técnica",        letra:"B", min:4, max:16, desc:"O ponto de partida que uma formação aplicada exige." },
    infl:   { nome:"Influência",          letra:"C", min:2, max:8,  desc:"Capacidade de levar o aprendizado para a área." },
    ctx:    { nome:"Contexto de trabalho",letra:"D", min:3, max:12, desc:"O que o ambiente permite: recurso, permissão e tempo." },
    retorno:{ nome:"Retorno percebido",   letra:"E", min:1, max:4,  desc:"Percepção declarada de tempo economizado. Não entra no índice." }
  };

  /* P13 → horas por semana. Faixa 4 é aberta; 4h é piso deliberado. */
  /* A P13 pergunta em faixas, não em número. Para somar e tirar média,
     cada faixa entra pelo seu PONTO MÉDIO — "até 1h" conta como 0,5.
     O piso e o teto ficam guardados para a tela poder mostrar a faixa
     em vez de um número que a pessoa não digitou. A última faixa não
     tem teto; o meio dela é estimativa conservadora. */
  const HORAS_FAIXA = {
    1: { rotulo:"Sem ganho percebido", min:0, max:0,    meio:0   },
    2: { rotulo:"Até 1 h",             min:0, max:1,    meio:0.5 },
    3: { rotulo:"De 1 a 3 h",          min:1, max:3,    meio:2   },
    4: { rotulo:"Mais de 3 h",         min:3, max:null, meio:4   }
  };
  const HORAS = {1:0, 2:0.5, 3:2.0, 4:4.0};   /* atalho para o ponto médio */


  /* ── Bloco técnico ────────────────────────────────────────────
     Cinco competências de prática, de 0 a 4 pontos. Escala própria:
     o zero existe porque "ainda não sei fazer" é resposta legítima e
     diferente de "faço de forma rudimentar".

     NÃO entram no índice de prontidão. O v6 é calibrado em 12–48 com
     perguntas de 1 a 4; somar aqui quebraria a escala e a comparação.
     Formam um segundo eixo, de 0 a 20, lido em paralelo. */
  const tecnicas = [
    { id:"T1", titulo:"Formulação de solicitações", tema:"prompt",
      enunciado:"Como você prepara uma solicitação para uma IA realizar uma tarefa do seu trabalho?",
      opcoes:[
        "Ainda não sei como formular uma solicitação.",
        "Faço pedidos simples e genéricos.",
        "Explico o objetivo e forneço contexto sobre a tarefa.",
        "Também defino o formato da resposta, os critérios de qualidade e as restrições.",
        "Estruturo solicitações reutilizáveis, testo diferentes versões e ajusto com base nos resultados."
      ],
      escada:["Não formula","Pedido genérico","Objetivo e contexto","Formato e critérios","Reutilizável e testado"] },

    { id:"T2", titulo:"Verificação de respostas", tema:"avaliacao",
      enunciado:"Como você verifica a qualidade e a confiabilidade de uma resposta produzida por IA?",
      opcoes:[
        "Ainda não sei como verificar.",
        "Leio a resposta e avalio se ela parece fazer sentido.",
        "Confiro as principais informações em fontes confiáveis.",
        "Também verifico cálculos, inconsistências, possíveis vieses e se as conclusões são sustentadas pelos dados.",
        "Defino critérios de avaliação e testo a IA em diferentes situações, incluindo casos em que ela pode falhar ou embutir viés."
      ],
      escada:["Não verifica","Parece fazer sentido","Confere em fonte","Checa dados e viés","Testa com critério"] },

    { id:"T3", titulo:"Preparação de dados", tema:"dados",
      enunciado:"Como você prepara dados ou documentos para trabalhar com IA?",
      opcoes:[
        "Ainda não sei preparar esses materiais.",
        "Copio textos ou envio arquivos como estão.",
        "Seleciono as informações relevantes e organizo o material antes de enviar.",
        "Também trato duplicidades, inconsistências e dados ausentes, respeitando as regras de uso das informações.",
        "Estruturo um processo reutilizável de preparação e verificação da qualidade dos dados."
      ],
      escada:["Não prepara","Envia como está","Seleciona e organiza","Trata e respeita regra","Processo reutilizável"] },

    { id:"T4", titulo:"Respostas sobre documentos internos", tema:"rag",
      enunciado:"Como você faria uma IA responder com base em documentos internos da organização?",
      opcoes:[
        "Ainda não sei como fazer.",
        "Incluo trechos dos documentos na conversa.",
        "Forneço os documentos e instruo a IA a responder com base neles, indicando as fontes.",
        "Configuro uma base de conhecimento e verifico se as respostas recuperam as informações corretas.",
        "Também configuro atualização das fontes e permissões de acesso, e testo respostas para informações ausentes ou conflitantes."
      ],
      escada:["Não sabe","Cola trechos","Documento com fonte","Base de conhecimento","Fonte viva e permissão"] },

    { id:"T5", titulo:"Automação com IA", tema:"agente",
      enunciado:"Qual é sua capacidade de automatizar uma tarefa com IA?",
      opcoes:[
        "Ainda não sei como automatizar uma tarefa.",
        "Uso IA em uma etapa, mas transfiro manualmente as informações entre as ferramentas.",
        "Configuro uma automação simples com IA, com um gatilho e uma saída definidos.",
        "Conecto etapas e ferramentas, incluindo validações e tratamento de falhas.",
        "Configuro um fluxo com agentes, ações permitidas, registros de execução e aprovação humana quando necessária."
      ],
      escada:["Não automatiza","Passo manual","Gatilho e saída","Etapas com validação","Agentes com governança"] },

    { id:"T6", titulo:"Construção e integração técnica", tema:"codigo",
      enunciado:"Como você constrói ou integra tecnicamente com IA?",
      opcoes:[
        "Não programo nem integro sistemas.",
        "Leio código e entendo o que um script faz, mas não escrevo.",
        "Adapto exemplos e chamo uma API de IA seguindo a documentação.",
        "Escrevo scripts que integram IA a sistemas e bases que já usamos.",
        "Entrego componente em uso por outras pessoas, com versionamento, testes e monitoramento."
      ],
      escada:["Não programa","Lê código","Adapta exemplo","Integra com script","Componente em uso"] },

    { id:"T7", titulo:"Segurança e conformidade", tema:"governanca",
      enunciado:"Como você lida com dado sensível e conformidade ao usar IA?",
      opcoes:[
        "Não sei o que pode ou não pode ser usado com IA.",
        "Evito colocar o que me parece sensível.",
        "Conheço a política da empresa e classifico o que posso usar.",
        "Avalio risco antes de usar, registro a decisão e escolho ferramenta homologada.",
        "Defino critério para a área e reviso o uso de outras pessoas."
      ],
      escada:["Não sabe","Evita o óbvio","Classifica","Avalia e registra","Define critério"] }

  ];

  const NIVEIS_TEC = [
    { id:"nenhum",   nome:"Sem prática", faixa:[0,4],   desc:"Ainda não executa essas tarefas de forma autônoma." },
    { id:"inicial",  nome:"Inicial",     faixa:[5,11],  desc:"Executa o básico, sem método definido." },
    { id:"aplicado", nome:"Aplicado",    faixa:[12,18], desc:"Trabalha com contexto, critério e fonte." },
    { id:"solido",   nome:"Sólido",      faixa:[19,24], desc:"Trata dado, valida resultado e encadeia etapas." },
    { id:"avancado", nome:"Avançado",    faixa:[25,28], desc:"Constrói processo reutilizável, com governança." }
  ];
  /* ── Dimensões técnicas ───────────────────────────────────────
     Sete perguntas produzem seis leituras. Cada dimensão é a média
     ponderada das perguntas que a alimentam, de 0 a 4 — assim nenhuma
     depende de uma pergunta só, e entender mal um enunciado pesa menos.

     Programação e MLOps não são dimensão: T6 é multiplicador, porque
     quem constrói aprofunda dados, ancoragem e automação. */
  const DIMENSOES = [
    { id:"instr", nome:"Instrução e orquestração",
      desc:"Estruturar o pedido: objetivo, contexto, formato, restrição e encadeamento.",
      pesos:{ T1:1.0, T2:0.3, T4:0.3 } },
    { id:"julg",  nome:"Julgamento crítico",
      desc:"Reconhecer alucinação e viés, e exigir que a conclusão se sustente.",
      pesos:{ T2:1.0, T7:0.3 } },
    { id:"dados", nome:"Dados",
      desc:"Selecionar, limpar e tratar o material, respeitando a regra de uso.",
      pesos:{ T3:1.0, T4:0.3, T6:0.4 } },
    { id:"ancor", nome:"Ancoragem em fontes",
      desc:"Fazer a IA responder a partir de fonte confiável e verificar o que ela recuperou.",
      pesos:{ T4:1.0, T3:0.3, T5:0.3, T6:0.4 } },
    { id:"autom", nome:"Automação e agentes",
      desc:"Encadear etapas e ferramentas, com validação, falha tratada e aprovação.",
      pesos:{ T5:1.0, T6:0.6 } },
    { id:"seg",   nome:"Segurança e conformidade",
      desc:"Dado sensível, política, ferramenta homologada e decisão registrada.",
      pesos:{ T7:1.0, T2:0.3, T3:0.3, T4:0.3 } }
  ];

  /* Média ponderada por dimensão, ignorando pergunta não respondida.
     Devolve null quando nenhuma pergunta da dimensão foi respondida. */
  function calcularDimensoes(R){
    const out = {};
    DIMENSOES.forEach(function(d){
      let soma = 0, peso = 0, faltam = [];
      Object.keys(d.pesos).forEach(function(id){
        const v = R[id];
        if (v === undefined || v === null || v === "") { faltam.push(id); return; }
        soma += Number(v) * d.pesos[id];
        peso += d.pesos[id];
      });
      out[d.id] = peso
        ? { valor: soma/peso, cobertura: peso/Object.values(d.pesos).reduce((a,b)=>a+b,0), faltam }
        : null;
    });
    return out;
  }


  /* Pontuação do bloco técnico. Devolve null quando não foi respondido,
     para a tela saber que o eixo não existe em vez de mostrar zero. */
  function calcularTecnico(R){
    const dadas = tecnicas.filter(t => R[t.id] !== undefined && R[t.id] !== null && R[t.id] !== "");
    if (!dadas.length) return null;
    const pontos = dadas.reduce((a,t) => a + (Number(R[t.id]) || 0), 0);
    const nivel = NIVEIS_TEC.find(n => pontos >= n.faixa[0] && pontos <= n.faixa[1]) || NIVEIS_TEC[0];
    const porId = {};
    tecnicas.forEach(t => { porId[t.id] = R[t.id] === undefined ? null : Number(R[t.id]); });
    return { pontos, max:28, nivel, respondidas:dadas.length, total:tecnicas.length, porId,
             dims: calcularDimensoes(R) };
  }

  /* Perfil de uso. Vem de P2 (para que usa) e P3 (autonomia), que
     compartilham a mesma escada do instrumento: Desconhece, Depende,
     Executa, Transfere.

     A regra é o MENOR dos dois, não a soma. Somar achatava informação:
     quem criou algo que o time usa mas ainda depende de exemplo (4 e 2)
     recebia o mesmo rótulo de quem é consistente nos dois (3 e 3). O
     perfil passa a ser o degrau que a pessoa sustenta nas duas pontas —
     o elo mais fraco é que define, como em qualquer leitura de
     competência. */
  /* lastro mínimo em T1 e T2 para alguém sustentar o degrau de autonomia */
  const PORTA_TECNICA = 2;

  const PERFIS = [
    { id:"iniciante", nivel:1, nome:"Iniciante",
      desc:"Não usa IA no trabalho, ou usa sem conseguir avaliar o resultado." },
    { id:"assistido", nivel:2, nome:"Praticante",
      desc:"Usa no próprio trabalho, mas depende de exemplo pronto ou de alguém para destravar." },
    { id:"autonomo",  nivel:3, nome:"Autônomo",
      desc:"Resolve sozinho e reconhece quando a resposta não serve — é o que separa usar de depender." },
    { id:"construtor", nivel:4, nome:"Construtor",
      desc:"O que faz com IA serve a outras pessoas: criou algo que o time usa, ou ensina e corrige." }
  ];

  function calcular(r){
    const v = id => Number(r[id]) || 0;
    const soma = ids => ids.reduce((a,id)=>a+v(id),0);
    const sub = {
      uso:  soma(["P1","P2","P3"]),
      base: soma(["P4","P5","P6","P7"]),
      infl: soma(["P8","P9"]),
      ctx:  soma(["P10","P11","P12"])
    };
    const indice     = sub.uso + sub.base + sub.infl + sub.ctx;  // 12–48
    const capacidade = sub.uso + sub.base + sub.infl;             // 9–36
    const somaPerfil = v("P2") + v("P3");                         // 2–8, só para exibição
    const eloDeclarado = Math.min(v("P2") || 1, v("P3") || 1);     // o degrau sustentado

    /* ── porta técnica ────────────────────────────────────────
       P2 e P3 medem percepção; o degrau 3 promete "uso para fazer meu
       trabalho" e "percebo quando a resposta não está boa". O bloco
       técnico pergunta a mesma coisa pela prática, e as duas leituras
       discordavam: 74% do primeiro grupo real se declarou autônomo,
       com técnico médio de 12 de 28.

       A promessa do degrau 3 só vale com lastro nas duas perguntas que
       descrevem exatamente esse comportamento — e o nível 1 de cada uma
       é justamente a versão que não sustenta a afirmação:
         T1=1 "pedidos simples e genéricos" não é fazer o trabalho com IA;
         T2=1 "parece fazer sentido" é o oposto de perceber que não serve.
       Sem o bloco técnico respondido não há o que corroborar, e o
       declarado vale — rebaixar por ausência de dado seria pior. */
    const temTec = ["T1","T2"].every(id => r[id] !== undefined && r[id] !== null && r[id] !== "");
    const lastro = Math.min(v("T1"), v("T2"));
    const elo = (temTec && eloDeclarado >= 3 && lastro < PORTA_TECNICA)
      ? 2 : eloDeclarado;
    const rebaixado = elo < eloDeclarado;
    const perfil = PERFIS.find(p => p.nivel === elo) || PERFIS[0];
    /* quando a outra ponta está acima, a pessoa está a caminho do degrau seguinte */
    const aCaminho = !rebaixado && Math.max(v("P2"), v("P3")) > elo;
    return {
      sub, indice, capacidade,
      contexto: sub.ctx,
      somaPerfil, elo, eloDeclarado, rebaixado, aCaminho, perfil,
      horas: HORAS[v("P13")] ?? null,
      horasFaixa: HORAS_FAIXA[v("P13")] ?? null,
      /* proporção de cada sub-índice em relação ao próprio teto — comparável entre blocos */
      prop: {
        uso:  sub.uso  / 12, base: sub.base / 16,
        infl: sub.infl / 8,  ctx:  sub.ctx  / 12
      }
    };
  }

  return { versao:"v6 · out/2026", perguntas, abertas, blocos, tecnicas, NIVEIS_TEC, DIMENSOES,
           PERFIS, PORTA_TECNICA, HORAS, HORAS_FAIXA, calcular, calcularTecnico, calcularDimensoes,
           ESCADA_P, ESCADA_C, ESCADA_T };
})();
