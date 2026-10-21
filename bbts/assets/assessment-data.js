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
  const HORAS = {1:0, 2:0.5, 3:2.0, 4:4.0};

  const PERFIS = [
    { id:"iniciante",  nome:"Iniciante",            faixa:[2,3], desc:"Uso raro ou nenhum, sem autonomia." },
    { id:"tarefa",     nome:"Usuário de tarefa",    faixa:[4,5], desc:"Usa para produzir o próprio trabalho, com autonomia parcial." },
    { id:"aplicador",  nome:"Aplicador avançado",   faixa:[6,6], desc:"Usa sozinho e percebe quando a resposta não serve." },
    { id:"construtor", nome:"Construtor",           faixa:[7,8], desc:"Criou algo que outras pessoas usam, ou ensina." }
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
    const somaPerfil = v("P2") + v("P3");                         // 2–8
    const perfil = PERFIS.find(p => somaPerfil >= p.faixa[0] && somaPerfil <= p.faixa[1]) || PERFIS[0];
    return {
      sub, indice, capacidade,
      contexto: sub.ctx,
      somaPerfil, perfil,
      horas: HORAS[v("P13")] ?? null,
      /* proporção de cada sub-índice em relação ao próprio teto — comparável entre blocos */
      prop: {
        uso:  sub.uso  / 12, base: sub.base / 16,
        infl: sub.infl / 8,  ctx:  sub.ctx  / 12
      }
    };
  }

  return { versao:"v6 · out/2026", perguntas, abertas, blocos, PERFIS, HORAS, calcular,
           ESCADA_P, ESCADA_C, ESCADA_T };
})();
