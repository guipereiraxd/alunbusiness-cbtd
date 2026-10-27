/* BBDW · Hybrid Skills — conteúdo editorial do diagnóstico, v2026-10-27.1
   Fonte: PRD Hybrid Skills v1 (seções 2, 3, 4, 6 e 7) e deck da palestra
   (slides 10 e 16). Textos curados, sem IA no caminho crítico.

   Regras de voz (PRD §2 e §6): "pelas suas respostas", "vale praticar";
   nunca "fraqueza", nunca nota, nunca comparação com outras pessoas.
   Quem usa pouco IA não é "menos criativo"; falta de oportunidade não é
   falta de capacidade. Resultados idênticos para a mesma versão. */
window.BBDW_CONTEUDO = {
  versao: "2026-10-27.1",

  /* ── as cinco duplas (PRD §2; movimentos do slide 10; perguntas do slide 16) ── */
  duplas: {
    P1: {
      movimento: "Ler", num: "01",
      nome: "Dados + pensamento crítico",
      simples: "entender antes de agir",
      tecnica: "dados", humana: "pensamento crítico",
      resumo: "Interpretar informações e questionar evidências antes de concluir.",
      definicao: "Aqui, dados significa ler e verificar informações: de onde vieram e o que mostram. Pensamento crítico é pensar em outras explicações antes de aceitar uma conclusão.",
      pergunta: "Se eu entregar exatamente o que foi pedido, o problema estará resolvido?",
      objetivo: "Entender melhor as informações"
    },
    P2: {
      movimento: "Conectar", num: "02",
      nome: "Dados + visão estratégica",
      simples: "escolher o que importa",
      tecnica: "dados", humana: "visão estratégica",
      resumo: "Usar informações para escolher prioridades ligadas a um objetivo.",
      definicao: "Aqui, dados significa escolher e comparar as informações que importam para uma decisão. Visão estratégica é definir o resultado que você quer alcançar e o que é prioridade.",
      pergunta: "Ao melhorar o resultado da minha área, que problema posso criar para outra?",
      objetivo: "Escolher prioridades"
    },
    P3: {
      movimento: "Criar", num: "03",
      nome: "IA + criatividade",
      simples: "encontrar outras soluções",
      tecnica: "IA", humana: "criatividade",
      resumo: "Usar IA para explorar alternativas e adaptar uma solução ao contexto.",
      definicao: "Aqui, IA é uma ferramenta para pedir e explorar alternativas. Criatividade é pensar em maneiras diferentes e adaptar a solução à sua situação.",
      pergunta: "Que teste pequeno pode revelar uma solução que ainda não consideramos?",
      objetivo: "Encontrar novas soluções"
    },
    P4: {
      movimento: "Mobilizar", num: "04",
      nome: "Ferramentas digitais + colaboração",
      simples: "fazer junto",
      tecnica: "ferramentas digitais", humana: "colaboração",
      resumo: "Organizar tarefas e combinar responsabilidades com outras pessoas.",
      definicao: "Aqui, a parte técnica é usar um recurso de organização compartilhada, como uma lista, agenda ou planilha. Colaboração é construir acordos com as pessoas sobre quem faz o quê.",
      pergunta: "Quem precisa construir esta solução comigo para que ela saia do papel?",
      objetivo: "Fazer acontecer com outras pessoas"
    },
    P5: {
      movimento: "Aprender", num: "05",
      nome: "Experimentação + adaptabilidade",
      simples: "testar e ajustar",
      tecnica: "experimentação", humana: "adaptabilidade",
      resumo: "Planejar um teste simples, observar o resultado e ajustar a abordagem.",
      definicao: "Aqui, a parte técnica é definir um teste pequeno e o que observar. Adaptabilidade é mudar a maneira de agir a partir do que foi observado.",
      pergunta: "O que aconteceu que contraria minha hipótese, e o que vou mudar por isso?",
      objetivo: "Aprender com tentativas"
    }
  },

  /* ── as seis orientações internas (PRD §6, classificação da dupla) ── */
  orientacoes: {
    explorar: { nome: "Explorar",                  mensagem: "Ainda temos poucas informações; vamos experimentar a dupla." },
    base:     { nome: "Começar pelos dois lados",  mensagem: "Vale começar com uma prática simples dos dois lados." },
    tecnica:  { nome: "Praticar a parte técnica",  mensagem: "Pratique a ferramenta ou método para apoiar sua intenção." },
    humana:   { nome: "Praticar a parte humana",   mensagem: "Conecte o uso técnico ao objetivo ou às pessoas." },
    integrar: { nome: "Juntar os dois lados",      mensagem: "Pratique os dois lados na mesma situação." },
    avancar:  { nome: "Avançar",                   mensagem: "Você relata uso conjunto; experimente um desafio novo." }
  },

  /* texto neutro quando I ≥ 2 e algum lado ≤ 1 (PRD §6) */
  neutro: "Você relata usar a combinação, mas também encontra espaço para praticar este aspecto.",
  /* quando nenhum item inicial chega a 2 (PRD §6, comportamento presente) */
  semForca: "Você já deu um passo ao olhar para sua prática.",

  /* ── comportamento presente: completa "Você relata que costuma ___" (PRD §4) ── */
  comportamentos: {
    P1A: "comparar informações para entender o que está acontecendo antes de decidir",
    P1B: "procurar de onde veio uma informação que parece estranha",
    P2A: "usar informações para escolher o que merece atenção primeiro",
    P2B: "pensar em como um número ajuda no que você quer alcançar antes de acompanhá-lo",
    P3A: "usar uma ferramenta de IA para explorar mais de uma maneira de resolver algo",
    P3B: "adaptar a sugestão da IA à situação que precisa resolver",
    P4A: "usar uma lista, agenda ou ferramenta compartilhada para organizar tarefas com outras pessoas",
    P4B: "combinar com as pessoas quem fará o quê ao organizar tarefas",
    P5A: "fazer um teste pequeno e observar o que aconteceu antes de mudar tudo",
    P5B: "usar o resultado de uma tentativa para decidir o que mudar na próxima"
  },

  /* ── explicação do resultado, até 60 palavras (PRD §7, item 3) ── */
  explicacoes: {
    "P1/explorar": "Faltaram respostas sobre esta combinação, e isso não diz nada sobre você: talvez a situação ainda não tenha aparecido. Vale experimentar entender antes de agir numa situação pequena, para ver como ler informações e questionar conclusões funcionam juntos.",
    "P1/base":     "Pelas suas respostas, ler informações e questionar conclusões ainda aparecem pouco no seu dia a dia. Vale começar pelos dois lados, com uma prática simples numa situação real. Um roteiro ajuda a dar o primeiro passo sem precisar de ferramenta nenhuma.",
    "P1/tecnica":  "Pelas suas respostas, você costuma pensar em outras explicações antes de aceitar uma conclusão. Vale praticar a parte técnica: comparar números e informações de uma tabela para entender uma situação. Com isso, seu senso crítico ganha material para trabalhar.",
    "P1/humana":   "Pelas suas respostas, você consegue comparar números e informações de uma tabela. Vale praticar a parte humana: antes de concluir, pensar em outras explicações possíveis e perguntar de onde a informação veio. É o que transforma leitura em julgamento.",
    "P1/integrar": "Pelas suas respostas, você lê informações e também questiona conclusões, mas em momentos separados. Vale praticar os dois na mesma situação: comparar dados e, antes de concluir, verificar a origem e o que eles não explicam.",
    "P1/avancar":  "Pelas suas respostas, você relata usar dados e pensamento crítico juntos. Vale experimentar um desafio novo: revisar uma conclusão que já está aceita pelo seu grupo e levar o que encontrar para uma conversa com quem decide.",

    "P2/explorar": "Faltaram respostas sobre esta combinação, e isso não diz nada sobre você: talvez a situação ainda não tenha aparecido. Vale experimentar escolher o que importa numa decisão pequena, para ver como objetivo e informação trabalham juntos.",
    "P2/base":     "Pelas suas respostas, definir um objetivo e usar informações para escolher ainda aparecem pouco no seu dia a dia. Vale começar pelos dois lados, com uma decisão simples e um roteiro que liga o que você quer alcançar ao próximo passo.",
    "P2/tecnica":  "Pelas suas respostas, você costuma definir o que quer alcançar e o que é prioridade. Vale praticar a parte técnica: escolher quais informações comparar para apoiar essa decisão. Assim, a prioridade ganha base, e não só intenção.",
    "P2/humana":   "Pelas suas respostas, você consegue escolher e comparar informações. Vale praticar a parte humana: antes de agir, definir o resultado que quer alcançar e o que é prioridade. É o objetivo que diz quais informações valem a pena.",
    "P2/integrar": "Pelas suas respostas, você define objetivos e também compara informações, mas em momentos separados. Vale praticar os dois na mesma decisão: escolher um objetivo, duas informações e uma ação, e explicar como uma coisa levou à outra.",
    "P2/avancar":  "Pelas suas respostas, você relata usar dados e visão estratégica juntos. Vale experimentar um desafio novo: priorizar entre ações que competem num objetivo do time, e propor a escolha a quem decide.",

    "P3/explorar": "Faltaram respostas sobre esta combinação, e isso não diz nada sobre você: talvez ainda não tenha havido oportunidade. Vale experimentar encontrar outras soluções numa situação pequena, com ou sem ferramenta de IA, para ver como alternativas e adaptação funcionam juntas.",
    "P3/base":     "Pelas suas respostas, usar IA para explorar alternativas e adaptar ideias ao contexto ainda aparecem pouco no seu dia a dia. Vale começar pelos dois lados, com um problema pequeno e um roteiro. Sem conta de IA, dá para praticar com uma sugestão demonstrativa.",
    "P3/tecnica":  "Pelas suas respostas, você costuma pensar em maneiras diferentes de resolver uma situação. Vale praticar a parte técnica: explicar a uma ferramenta de IA o que precisa e ajustar o pedido. Suas ideias ganham mais alternativas para comparar.",
    "P3/humana":   "Pelas suas respostas, você consegue pedir à IA o que precisa e ajustar o pedido. Vale praticar a parte humana: pensar em maneiras diferentes antes de escolher e adaptar a sugestão ao seu contexto. É você quem dá direção à ferramenta.",
    "P3/integrar": "Pelas suas respostas, você usa IA e também cria alternativas, mas em momentos separados. Vale praticar os dois na mesma situação: usar a sugestão da IA como ponto de partida e construir uma solução adequada ao seu contexto.",
    "P3/avancar":  "Pelas suas respostas, você relata usar IA e criatividade juntas. Vale experimentar um desafio novo: mudar uma condição de um problema já resolvido, pedir alternativas e testar uma de verdade.",

    "P4/explorar": "Faltaram respostas sobre esta combinação, e isso não diz nada sobre você: talvez a situação ainda não tenha aparecido. Vale experimentar fazer junto numa tarefa pequena, para ver como organizar e combinar funcionam ao mesmo tempo.",
    "P4/base":     "Pelas suas respostas, organizar tarefas numa ferramenta e combinar responsabilidades ainda aparecem pouco no seu dia a dia. Vale começar pelos dois lados, com uma tarefa pequena e um roteiro. Pode começar em papel; a ferramenta vem depois.",
    "P4/tecnica":  "Pelas suas respostas, você costuma ouvir as pessoas e combinar responsabilidades antes de começar. Vale praticar a parte técnica: registrar tarefas, responsáveis e prazos numa ferramenta compartilhada. O acordo que você já faz passa a ficar visível para todos.",
    "P4/humana":   "Pelas suas respostas, você consegue organizar tarefas, responsáveis e prazos numa ferramenta. Vale praticar a parte humana: ouvir as pessoas envolvidas e combinar responsabilidades antes de registrar. A ferramenta mostra o acordo; a conversa é que o constrói.",
    "P4/integrar": "Pelas suas respostas, você organiza numa ferramenta e também combina com as pessoas, mas em momentos separados. Vale praticar os dois na mesma tarefa: combinar na conversa, registrar na ferramenta e acompanhar junto o que foi combinado.",
    "P4/avancar":  "Pelas suas respostas, você relata usar ferramentas digitais e colaboração juntas. Vale experimentar um desafio novo: organizar uma tarefa com mais pessoas, ou com outra área, e fazer um ponto de acompanhamento no meio do caminho.",

    "P5/explorar": "Faltaram respostas sobre esta combinação, e isso não diz nada sobre você: talvez a situação ainda não tenha aparecido. Vale experimentar testar e ajustar numa coisa pequena do seu dia, para ver como testar e mudar funcionam juntos.",
    "P5/base":     "Pelas suas respostas, fazer testes pequenos e mudar a abordagem ainda aparecem pouco no seu dia a dia. Vale começar pelos dois lados, com uma tentativa pequena e um roteiro de quatro linhas: o que testar, o que observar, o que aconteceu, o que muda.",
    "P5/tecnica":  "Pelas suas respostas, você costuma mudar sua maneira de agir quando percebe que não está funcionando. Vale praticar a parte técnica: antes de testar, definir o que vai fazer e como observar o resultado. Assim, a mudança deixa de ser só intuição.",
    "P5/humana":   "Pelas suas respostas, você consegue definir um teste e o que observar. Vale praticar a parte humana: mudar a maneira de agir quando o resultado mostra que ela não funciona. O teste só vale se a próxima tentativa for diferente.",
    "P5/integrar": "Pelas suas respostas, você define testes e também muda de abordagem, mas em momentos separados. Vale praticar os dois na mesma tentativa: testar, observar, registrar e ajustar a próxima rodada a partir do que viu.",
    "P5/avancar":  "Pelas suas respostas, você relata usar experimentação e adaptabilidade juntas. Vale experimentar um desafio novo: um teste que envolva outra pessoa ou outra etapa do processo, em duas rodadas, registrando o que mudou entre elas."
  },

  /* ── prática da semana e plano de sete dias (PRD §7) ──
     base: roteiro preenchível · tecnica: método ou ferramenta · humana: decisão
     ou conversa · integrar: os dois na mesma situação · avancar: uma variável
     a mais · explorar: tentativa guiada, sem diagnóstico de lacuna.
     O plano nunca promete concluir um curso; funciona sem acesso à Alura. */
  praticas: {
    /* ─── P1 · Dados + pensamento crítico ─── */
    "P1/explorar": {
      acao: "Escolha uma situação pequena desta semana em que você precisa entender o que está acontecendo. Pegue duas informações sobre ela (um número, uma mensagem, uma conversa) e anote de onde cada uma veio. Depois escreva uma frase sobre o que elas mostram.",
      evidencia: "Duas informações com a origem anotada e uma frase de conclusão.",
      plano: {
        d12: "Escolha a situação e, se quiser, comece o conteúdo sugerido.",
        d35: "Reúna as duas informações, anote de onde cada uma veio e escreva a conclusão.",
        d67: "Registre o que você percebeu ao olhar a origem e qual situação vai tentar na próxima semana."
      }
    },
    "P1/base": {
      acao: "Complete o roteiro numa situação real: Quero entender ____. A informação 1 diz ____ e veio de ____. A informação 2 diz ____ e veio de ____. Antes de concluir, minha dúvida é ____.",
      evidencia: "O roteiro preenchido, com uma dúvida registrada antes da conclusão.",
      plano: {
        d12: "Escolha a situação, copie o roteiro e, se quiser, comece o conteúdo sugerido.",
        d35: "Preencha o roteiro com duas informações reais e a sua dúvida.",
        d67: "Releia o roteiro e anote o que mudou na sua conclusão. Escolha a próxima situação."
      }
    },
    "P1/tecnica": {
      acao: "Pegue uma tabela ou relatório que você já recebe. Compare dois números dele (dois meses, duas áreas, dois produtos) e escreva o que a diferença mostra. Se a leitura for difícil, comece por uma linha e uma coluna.",
      evidencia: "Uma comparação escrita entre dois números, com o que ela mostra.",
      plano: {
        d12: "Escolha a tabela ou o relatório e comece o conteúdo sugerido.",
        d35: "Compare os dois números e escreva o que a diferença mostra.",
        d67: "Registre o que ficou mais claro ao comparar e qual tabela vai ler na próxima semana."
      }
    },
    "P1/humana": {
      acao: "Antes de aceitar a próxima conclusão que chegar até você (de uma reunião, de um relatório, de uma mensagem), escreva duas explicações diferentes para o mesmo fato. Pergunte a alguém qual delas faz mais sentido e por quê.",
      evidencia: "Duas explicações alternativas e a opinião de uma pessoa.",
      plano: {
        d12: "Escolha uma conclusão que você recebeu e, se quiser, comece o conteúdo sugerido.",
        d35: "Escreva as duas explicações e converse com alguém sobre elas.",
        d67: "Registre se a conversa mudou o que você pensava e qual conclusão vai questionar na próxima semana."
      }
    },
    "P1/integrar": {
      acao: "Escolha uma decisão pequena. Compare duas informações sobre ela e, antes de concluir, anote a origem de cada uma e o que elas não explicam. Só então escreva a conclusão, com uma ressalva.",
      evidencia: "Uma conclusão com ressalva, apoiada em duas informações com origem.",
      plano: {
        d12: "Escolha a decisão e, se quiser, comece o conteúdo sugerido.",
        d35: "Compare as informações, anote origem e limites, e escreva a conclusão com ressalva.",
        d67: "Registre o que a ressalva mudou na decisão e qual será a próxima tentativa."
      }
    },
    "P1/avancar": {
      acao: "Pegue uma conclusão que já esteja aceita no seu grupo (uma meta, um indicador, uma explicação comum). Procure a origem do número e uma informação que a contradiga. Leve o que encontrou para uma conversa com quem decide.",
      evidencia: "Uma conclusão aceita, revisada com origem e contraponto, e uma conversa feita.",
      plano: {
        d12: "Escolha a conclusão aceita e, se quiser, comece o conteúdo sugerido.",
        d35: "Procure a origem e o contraponto, e marque a conversa.",
        d67: "Registre o que a conversa mudou e qual conclusão vai revisar na próxima semana."
      }
    },

    /* ─── P2 · Dados + visão estratégica ─── */
    "P2/explorar": {
      acao: "Escolha uma decisão simples desta semana. Escreva em uma frase o que você quer alcançar com ela e procure uma informação que ajude a escolher. Decida e anote o motivo.",
      evidencia: "Uma decisão anotada, com o objetivo e o motivo da escolha.",
      plano: {
        d12: "Escolha a decisão e, se quiser, comece o conteúdo sugerido.",
        d35: "Escreva o objetivo, procure a informação e decida.",
        d67: "Registre se a informação ajudou e qual decisão vai tentar na próxima semana."
      }
    },
    "P2/base": {
      acao: "Escolha uma decisão simples e complete o roteiro: Quero alcançar ____. As informações mostram ____. Por isso, meu próximo passo será ____.",
      evidencia: "O roteiro preenchido: uma decisão e a razão da escolha.",
      plano: {
        d12: "Escolha a decisão, copie o roteiro e, se quiser, comece o conteúdo sugerido.",
        d35: "Procure duas informações que ajudem e preencha o roteiro.",
        d67: "Releia o roteiro e anote se o próximo passo aconteceu. Escolha a próxima decisão."
      }
    },
    "P2/tecnica": {
      acao: "Escolha um objetivo que você já tem. Liste três informações disponíveis sobre ele e marque qual delas realmente ajuda a decidir o próximo passo. Descarte as outras duas e escreva por quê.",
      evidencia: "Uma lista de três informações, com uma escolhida e a razão.",
      plano: {
        d12: "Escolha o objetivo e comece o conteúdo sugerido.",
        d35: "Liste as três informações, escolha uma e explique a escolha.",
        d67: "Registre se a informação escolhida levou a uma ação e qual objetivo vai usar na próxima semana."
      }
    },
    "P2/humana": {
      acao: "Antes de agir na próxima tarefa importante, escreva em uma frase o resultado que quer alcançar e o que é prioridade. Converse com alguém sobre essa frase e ajuste o que for preciso.",
      evidencia: "Uma frase de objetivo, revisada depois de uma conversa.",
      plano: {
        d12: "Escolha a tarefa e, se quiser, comece o conteúdo sugerido.",
        d35: "Escreva a frase de objetivo e converse com alguém sobre ela.",
        d67: "Registre o que mudou na frase e qual tarefa vai começar assim na próxima semana."
      }
    },
    "P2/integrar": {
      acao: "Escolha um objetivo, duas informações e uma ação. Mostre a alguém como as duas informações levaram à ação escolhida.",
      evidencia: "Uma decisão com a razão da escolha, explicada a uma pessoa.",
      plano: {
        d12: "Escolha o objetivo e, se quiser, comece o conteúdo sugerido.",
        d35: "Reúna as duas informações, escolha a ação e explique a alguém.",
        d67: "Registre se a explicação convenceu e qual decisão vai tomar assim na próxima semana."
      }
    },
    "P2/avancar": {
      acao: "Pegue um objetivo do seu time ou da sua área, não só seu. Escolha duas informações que ajudem a decidir entre duas ações que competem pelo mesmo tempo ou recurso, e proponha a escolha a quem decide.",
      evidencia: "Uma proposta de prioridade com duas informações, apresentada a quem decide.",
      plano: {
        d12: "Escolha o objetivo do time e, se quiser, comece o conteúdo sugerido.",
        d35: "Compare as duas ações com as informações e monte a proposta.",
        d67: "Registre a resposta de quem decide e qual prioridade vai propor na próxima semana."
      }
    },

    /* ─── P3 · IA + criatividade ─── */
    "P3/explorar": {
      acao: "Escolha algo pequeno que você precisa resolver. Pense em duas maneiras diferentes de fazer. Se tiver acesso a uma ferramenta de IA, peça uma terceira. Se não tiver, use esta sugestão demonstrativa: divida o problema em três partes e resolva primeiro a menor.",
      evidencia: "Três maneiras de resolver, sendo uma adaptada por você.",
      plano: {
        d12: "Escolha o que resolver e, se quiser, comece o conteúdo sugerido.",
        d35: "Escreva as maneiras, peça a terceira (ou use a demonstrativa) e escolha uma.",
        d67: "Registre qual maneira funcionou e qual problema vai tentar na próxima semana."
      }
    },
    "P3/base": {
      acao: "Complete o roteiro: Preciso resolver ____. Minha primeira ideia é ____. Pedi à IA (ou usei a sugestão demonstrativa: fazer de um jeito mais simples, com menos etapas) e a alternativa foi ____. Adaptei para ____ porque ____.",
      evidencia: "O roteiro preenchido: ideia inicial e adaptação própria.",
      plano: {
        d12: "Escolha o que resolver, copie o roteiro e, se quiser, comece o conteúdo sugerido.",
        d35: "Preencha o roteiro com a sua ideia, a alternativa e a adaptação.",
        d67: "Releia o roteiro e anote se a adaptação funcionou. Escolha o próximo problema."
      }
    },
    "P3/tecnica": {
      acao: "Escolha uma tarefa pequena. Escreva o pedido para a IA em três partes: o que você precisa, para quem é e o que não pode faltar. Peça duas alternativas. Depois ajuste o pedido uma vez e compare o que mudou. Sem conta de IA, escreva o pedido mesmo assim e use a sugestão demonstrativa: uma versão curta e uma versão detalhada da mesma solução.",
      evidencia: "Um pedido escrito em três partes, ajustado uma vez, com duas alternativas.",
      plano: {
        d12: "Escolha a tarefa e comece o conteúdo sugerido.",
        d35: "Escreva o pedido, peça as alternativas e ajuste uma vez.",
        d67: "Registre o que o ajuste mudou e qual tarefa vai pedir na próxima semana."
      }
    },
    "P3/humana": {
      acao: "Antes de abrir qualquer ferramenta, escreva três maneiras diferentes de resolver a próxima situação. Só depois peça à IA (ou use a sugestão demonstrativa: perguntar a alguém de outra área como resolveria) e compare com as suas.",
      evidencia: "Três maneiras suas e uma de fora, comparadas.",
      plano: {
        d12: "Escolha a situação e, se quiser, comece o conteúdo sugerido.",
        d35: "Escreva as três maneiras, peça a de fora e compare.",
        d67: "Registre qual maneira escolheu e por quê, e qual situação vai tentar na próxima semana."
      }
    },
    "P3/integrar": {
      acao: "Peça alternativas à IA para um problema real, escolha uma, adapte ao seu contexto e confira se funciona com alguém que conhece a situação. Sem conta de IA, use a sugestão demonstrativa: resolver com o que já existe, sem criar nada novo.",
      evidencia: "Ideia inicial, adaptação própria e a opinião de quem conhece a situação.",
      plano: {
        d12: "Escolha o problema e, se quiser, comece o conteúdo sugerido.",
        d35: "Peça as alternativas, adapte uma e confira com alguém.",
        d67: "Registre o que a conferência mudou e qual problema vai tentar na próxima semana."
      }
    },
    "P3/avancar": {
      acao: "Escolha um problema que você já resolveu de um jeito. Peça à IA alternativas que mudem uma condição (prazo menor, sem orçamento, outro público). Adapte uma e teste de verdade, nem que seja em escala pequena.",
      evidencia: "Uma alternativa com condição diferente, adaptada e testada.",
      plano: {
        d12: "Escolha o problema e a condição que vai mudar e, se quiser, comece o conteúdo sugerido.",
        d35: "Peça as alternativas, adapte uma e faça o teste.",
        d67: "Registre o que o teste mostrou e qual condição vai mudar na próxima semana."
      }
    },

    /* ─── P4 · Ferramentas digitais + colaboração ─── */
    "P4/explorar": {
      acao: "Escolha uma tarefa que depende de outra pessoa. Combine com ela quem faz o quê e até quando. Anote em uma lista compartilhada ou, se preferir, em papel.",
      evidencia: "Um acordo anotado, com responsável e prazo.",
      plano: {
        d12: "Escolha a tarefa e, se quiser, comece o conteúdo sugerido.",
        d35: "Combine com a pessoa e anote o acordo.",
        d67: "Registre se o combinado aconteceu e qual tarefa vai organizar na próxima semana."
      }
    },
    "P4/base": {
      acao: "Complete o roteiro com outra pessoa: A tarefa é ____. Eu faço ____ até ____. ____ faz ____ até ____. Combinamos em ____ (lista, agenda, mensagem ou papel).",
      evidencia: "O roteiro preenchido e confirmado pela outra pessoa.",
      plano: {
        d12: "Escolha a tarefa, copie o roteiro e, se quiser, comece o conteúdo sugerido.",
        d35: "Preencha o roteiro junto com a pessoa e confirme o acordo.",
        d67: "Releia o roteiro e anote o que foi cumprido. Escolha a próxima tarefa."
      }
    },
    "P4/tecnica": {
      acao: "Escolha uma tarefa que vocês já combinaram. Registre em uma ferramenta compartilhada (lista de tarefas, agenda ou planilha) o responsável e o prazo de cada parte. Se nunca usou uma, comece em papel e passe para a ferramenta no dia seguinte.",
      evidencia: "A tarefa registrada numa ferramenta compartilhada, com responsáveis e prazos.",
      plano: {
        d12: "Escolha a tarefa e a ferramenta, e comece o conteúdo sugerido.",
        d35: "Registre responsáveis e prazos e mostre para quem participa.",
        d67: "Registre se a ferramenta ajudou a acompanhar e qual tarefa vai registrar na próxima semana."
      }
    },
    "P4/humana": {
      acao: "Antes de registrar a próxima tarefa compartilhada, converse com quem participa: pergunte o que cada pessoa consegue fazer e até quando. Só registre depois do acordo.",
      evidencia: "Um acordo confirmado em conversa, antes do registro.",
      plano: {
        d12: "Escolha a tarefa e, se quiser, comece o conteúdo sugerido.",
        d35: "Converse com as pessoas, combine e só então registre.",
        d67: "Registre o que a conversa mudou no combinado e qual tarefa vai começar assim na próxima semana."
      }
    },
    "P4/integrar": {
      acao: "Organize uma tarefa com outra pessoa: combine responsável e prazo na conversa e registre na ferramenta compartilhada. Use a ferramenta junto com a pessoa para acompanhar o que foi combinado.",
      evidencia: "Acordo confirmado e registrado, acompanhado pelas duas pessoas.",
      plano: {
        d12: "Escolha a tarefa e, se quiser, comece o conteúdo sugerido.",
        d35: "Combine, registre e acompanhe junto pelo menos uma vez.",
        d67: "Registre o que o acompanhamento resolveu e qual tarefa vai organizar na próxima semana."
      }
    },
    "P4/avancar": {
      acao: "Organize uma tarefa com três ou mais pessoas, ou com alguém de outra área. Combine responsáveis e prazos, registre na ferramenta compartilhada e faça um ponto de acompanhamento no meio da semana.",
      evidencia: "Uma tarefa com várias pessoas, registrada e acompanhada no meio do caminho.",
      plano: {
        d12: "Escolha a tarefa e as pessoas e, se quiser, comece o conteúdo sugerido.",
        d35: "Combine, registre e faça o ponto de acompanhamento.",
        d67: "Registre o que o ponto de acompanhamento mudou e qual tarefa maior vai organizar na próxima semana."
      }
    },

    /* ─── P5 · Experimentação + adaptabilidade ─── */
    "P5/explorar": {
      acao: "Escolha uma coisa pequena do seu dia que você gostaria de fazer diferente. Tente de um jeito novo por dois dias e anote o que aconteceu.",
      evidencia: "Uma anotação do que foi tentado e do que aconteceu.",
      plano: {
        d12: "Escolha o que vai tentar e, se quiser, comece o conteúdo sugerido.",
        d35: "Tente o jeito novo por dois dias e anote.",
        d67: "Registre se vale continuar ou mudar e qual tentativa vem na próxima semana."
      }
    },
    "P5/base": {
      acao: "Complete o roteiro numa tentativa pequena: Vou testar ____. Vou observar ____. O que aconteceu: ____. Na próxima vez, vou mudar ____.",
      evidencia: "O roteiro preenchido: o que foi testado e o que será alterado.",
      plano: {
        d12: "Escolha o teste, copie o roteiro e, se quiser, comece o conteúdo sugerido.",
        d35: "Faça o teste e preencha o que observou.",
        d67: "Preencha a última linha do roteiro e escolha o próximo teste."
      }
    },
    "P5/tecnica": {
      acao: "Antes de testar uma ideia, escreva em duas linhas o que vai fazer e como vai saber se funcionou (o que vai observar). Faça o teste e preencha o resultado ao lado.",
      evidencia: "Um teste escrito antes de acontecer, com o resultado preenchido depois.",
      plano: {
        d12: "Escolha a ideia e comece o conteúdo sugerido.",
        d35: "Escreva as duas linhas, faça o teste e preencha o resultado.",
        d67: "Registre se o que observou respondeu à pergunta e qual teste vem na próxima semana."
      }
    },
    "P5/humana": {
      acao: "Escolha algo que você faz sempre do mesmo jeito e que não está dando o resultado que queria. Mude a abordagem por uma semana e anote o que mudou e o que você sentiu.",
      evidencia: "Uma abordagem mudada por uma semana, com o que mudou anotado.",
      plano: {
        d12: "Escolha o que vai mudar e, se quiser, comece o conteúdo sugerido.",
        d35: "Faça do jeito novo e anote o que mudou.",
        d67: "Registre se vai manter a mudança e o que vai mudar na próxima semana."
      }
    },
    "P5/integrar": {
      acao: "Defina um teste pequeno e o que vai observar. Faça, registre o resultado e mude uma coisa na próxima tentativa, a partir do que viu.",
      evidencia: "Registro do que foi testado, do resultado e do que foi alterado.",
      plano: {
        d12: "Escolha o teste e, se quiser, comece o conteúdo sugerido.",
        d35: "Faça o teste, registre e faça a segunda tentativa com uma mudança.",
        d67: "Registre o que mudou entre as tentativas e qual será a próxima."
      }
    },
    "P5/avancar": {
      acao: "Defina um teste que envolva outra pessoa ou outra etapa do processo. Combine o que observar, faça duas rodadas e registre o que mudou entre elas.",
      evidencia: "Duas rodadas de um teste com outra pessoa, com o que mudou registrado.",
      plano: {
        d12: "Escolha o teste e a pessoa e, se quiser, comece o conteúdo sugerido.",
        d35: "Faça as duas rodadas e registre.",
        d67: "Registre o que mudou entre as rodadas e qual teste maior vem na próxima semana."
      }
    }
  },

  /* ── exemplos cotidianos para a ajuda opcional (PRD §3: o contexto muda
     só os exemplos, nunca a pontuação; PRD §4: não indicam resposta desejável) ── */
  exemplos: {
    P1: {
      trabalho: "Dois relatórios dizem coisas diferentes sobre o mesmo mês e você confere de onde cada um veio.",
      estudos:  "Você compara duas fontes antes de usar um dado num trabalho.",
      pessoal:  "Antes de comprar algo, você compara duas avaliações e desconfia da que parece exagerada."
    },
    P2: {
      trabalho: "Você usa os números do atendimento para decidir o que resolver primeiro.",
      estudos:  "Você olha as notas e os prazos para escolher qual matéria estudar hoje.",
      pessoal:  "Você usa o extrato para decidir onde cortar gastos neste mês."
    },
    P3: {
      trabalho: "Você pede à IA três jeitos de escrever um comunicado e adapta um ao seu time.",
      estudos:  "Você pede à IA formas diferentes de explicar um assunto e monta a sua.",
      pessoal:  "Você pede ideias de cardápio para a semana e ajusta ao que tem em casa."
    },
    P4: {
      trabalho: "Você e um colega combinam quem faz o quê numa planilha compartilhada.",
      estudos:  "O grupo divide o trabalho numa lista e cada pessoa marca o que terminou.",
      pessoal:  "A família organiza as tarefas da casa numa lista no celular."
    },
    P5: {
      trabalho: "Você testa um jeito novo de responder clientes por uma semana e compara com o anterior.",
      estudos:  "Você testa estudar de manhã em vez de à noite e vê se rende mais.",
      pessoal:  "Você experimenta uma rota nova para o trabalho e anota quanto tempo levou."
    }
  }
};
