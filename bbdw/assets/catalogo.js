/* BBDW · Hybrid Skills — catálogo curado de conteúdos Alura (v2026-10-27.1)

   Origem: planilha "conteúdos_Alura.xlsx" (3.753 cursos com título, URL,
   objetivo e ementa), fornecida por Guilherme em 27/10/2026. Seleção feita
   pela leitura de título e objetivo, com foco em público geral e sem
   exigência de programação.

   Limites desta versão (PRD §8 exige, mas a planilha não traz):
   - duracao: desconhecida (null). Não exibir "Xh" enquanto for null.
   - prereq: não verificado; assume-se nenhum, por serem introdutórios.
   - ativo / verificadoEm: status de publicação NÃO conferido na Alura.
     "responsavel: curadoria pendente" marca isso em cada item.
   Um link que cair deve ser desativado aqui (ativo:false) e o catálogo
   republicado com versão nova. Nunca substituir por link inventado.

   Contrato: window.BBDW_CATALOGO.itens[]. Cada item cobre uma ou mais
   rotas [par, orientacao]. A seleção filtra ativo && rota elegível,
   ordena por `ordem` crescente e desempata por `id`. O primeiro é o
   principal; até dois seguintes são complementares.
   `porque["P2/tecnica"]` é o texto da rota; `porque["P2"]` é o fallback
   do par. */
window.BBDW_CATALOGO = {
  versao: "2026-10-27.1",
  base: "https://cursos.alura.com.br/course/",
  itens: [

    /* ── P1 · Ler · dados + pensamento crítico ─────────────────── */
    { id:"c01", titulo:"Identificando vieses e armadilhas em análises",
      slug:"identificando-vieses-armadilhas-analises", tipo:"curso", duracao:null, acesso:"alura", prereq:"",
      rotas:[["P1","humana"],["P1","integrar"],["P1","avancar"],["P1","explorar"]], ordem:1,
      porque:{ "P1":"Ajuda a perceber onde uma análise engana antes de você concluir a partir dela.",
               "P1/avancar":"Ajuda a testar suas próprias conclusões num desafio novo, procurando o viés antes que ele apareça." },
      ativo:true, verificadoEm:"2026-10-27", responsavel:"curadoria pendente" },

    { id:"c02", titulo:"Análise de dados: cálculos, padrões e estratégias com Excel",
      slug:"analise-de-dados-excel", tipo:"curso", duracao:null, acesso:"alura", prereq:"",
      rotas:[["P1","tecnica"],["P1","base"],["P1","integrar"],["P2","tecnica"]], ordem:2,
      porque:{ "P1":"Ajuda a comparar números de uma tabela e enxergar padrões antes de decidir.",
               "P1/tecnica":"Ajuda a ler e comparar informações de uma planilha, que é a parte técnica desta dupla.",
               "P2":"Ajuda a extrair de uma planilha as informações que sustentam uma escolha." },
      ativo:true, verificadoEm:"2026-10-27", responsavel:"curadoria pendente" },

    { id:"c03", titulo:"Excel: domine o editor de planilhas",
      slug:"excel-introducao", tipo:"curso", duracao:null, acesso:"alura", prereq:"",
      rotas:[["P1","base"],["P1","explorar"]], ordem:1,
      porque:{ "P1":"Ajuda a dar o primeiro passo com planilhas, sem exigir nenhum conhecimento anterior." },
      ativo:true, verificadoEm:"2026-10-27", responsavel:"curadoria pendente" },

    { id:"c04", titulo:"Tomada de decisão: pensar, analisar e agir",
      slug:"tomada-decisao-pensar-analisar-agir", tipo:"curso", duracao:null, acesso:"alura", prereq:"",
      rotas:[["P1","humana"],["P1","base"],["P2","humana"]], ordem:2,
      porque:{ "P1":"Ajuda a separar o que a informação mostra do que a pressa ou a emoção sugerem.",
               "P2":"Ajuda a organizar o raciocínio antes de escolher uma prioridade." },
      ativo:true, verificadoEm:"2026-10-27", responsavel:"curadoria pendente" },

    { id:"c05", titulo:"Estatística: métodos e práticas para dados",
      slug:"fundamentos-estatistica-ciencia-dados", tipo:"curso", duracao:null, acesso:"alura", prereq:"",
      rotas:[["P1","tecnica"],["P1","avancar"]], ordem:2,
      porque:{ "P1":"Ajuda a entender o que uma média ou uma variação dizem, e o que elas escondem." },
      ativo:true, verificadoEm:"2026-10-27", responsavel:"curadoria pendente" },

    { id:"c06", titulo:"Data Visualization: técnicas de visualização com Google Sheets",
      slug:"data-visualization-visualizacao-google-sheets", tipo:"curso", duracao:null, acesso:"alura", prereq:"",
      rotas:[["P1","tecnica"],["P2","tecnica"],["P2","integrar"]], ordem:3,
      porque:{ "P1":"Ajuda a transformar uma tabela num gráfico que você consegue questionar.",
               "P2":"Ajuda a mostrar uma informação de um jeito que apoie a decisão, e não só a decore." },
      ativo:true, verificadoEm:"2026-10-27", responsavel:"curadoria pendente" },

    /* ── P2 · Conectar · dados + visão estratégica ─────────────── */
    { id:"c07", titulo:"Liderança focada em resultados (OKRs e KPIs)",
      slug:"lideranca-resultados-okrs-kpis", tipo:"curso", duracao:null, acesso:"alura", prereq:"",
      rotas:[["P2","integrar"],["P2","avancar"]], ordem:1,
      porque:{ "P2":"Ajuda a ligar um objetivo a um indicador, que é exatamente juntar os dois lados desta dupla." },
      ativo:true, verificadoEm:"2026-10-27", responsavel:"curadoria pendente" },

    { id:"c08", titulo:"OKR: construindo metas ágeis",
      slug:"okr-construindo-metas-ageis", tipo:"curso", duracao:null, acesso:"alura", prereq:"",
      rotas:[["P2","humana"],["P2","base"],["P2","explorar"]], ordem:2,
      porque:{ "P2":"Ajuda a escrever um objetivo claro e escolher o que merece atenção primeiro." },
      ativo:true, verificadoEm:"2026-10-27", responsavel:"curadoria pendente" },

    { id:"c09", titulo:"Produtividade parte 2: organização e prioridade",
      slug:"produtividade-organizacao-e-prioridade", tipo:"curso", duracao:null, acesso:"alura", prereq:"",
      rotas:[["P2","humana"],["P2","base"],["P2","explorar"]], ordem:1,
      porque:{ "P2":"Ajuda a decidir o que fazer primeiro quando tudo parece urgente, começando pelo seu dia." },
      ativo:true, verificadoEm:"2026-10-27", responsavel:"curadoria pendente" },

    { id:"c10", titulo:"Excel: tabelas dinâmicas e dashboards",
      slug:"excel-tabelas-dinamicas", tipo:"curso", duracao:null, acesso:"alura", prereq:"",
      rotas:[["P2","tecnica"],["P2","integrar"]], ordem:1,
      porque:{ "P2":"Ajuda a resumir muitas linhas em poucos números que respondem a uma pergunta de decisão." },
      ativo:true, verificadoEm:"2026-10-27", responsavel:"curadoria pendente" },

    { id:"c11", titulo:"Gestão de produtos digitais: priorização",
      slug:"gestao-produtos-priorizacao", tipo:"curso", duracao:null, acesso:"alura", prereq:"",
      rotas:[["P2","avancar"],["P2","humana"]], ordem:3,
      porque:{ "P2":"Ajuda a usar métodos simples de priorização quando há mais pedidos do que capacidade." },
      ativo:true, verificadoEm:"2026-10-27", responsavel:"curadoria pendente" },

    /* ── P3 · Criar · IA + criatividade ────────────────────────── */
    { id:"c12", titulo:"ChatGPT: desvendando a IA em conversas e suas aplicações",
      slug:"chatgpt-desvendando-ia-conversas-aplicacoes", tipo:"curso", duracao:null, acesso:"alura", prereq:"",
      rotas:[["P3","explorar"],["P3","base"],["P3","tecnica"]], ordem:1,
      porque:{ "P3":"Ajuda a começar a conversar com uma IA e a adaptar o que ela devolve ao seu caso." },
      ativo:true, verificadoEm:"2026-10-27", responsavel:"curadoria pendente" },

    { id:"c13", titulo:"ChatGPT: otimizando a qualidade dos resultados",
      slug:"chatgpt-otimizando-qualidade-resultados", tipo:"curso", duracao:null, acesso:"alura", prereq:"",
      rotas:[["P3","tecnica"],["P3","integrar"],["P3","avancar"]], ordem:2,
      porque:{ "P3":"Ajuda a explicar melhor à IA o que você precisa, para que as alternativas venham mais úteis.",
               "P3/tecnica":"Ajuda a formular e ajustar o pedido à IA, que é a parte técnica desta dupla." },
      ativo:true, verificadoEm:"2026-10-27", responsavel:"curadoria pendente" },

    { id:"c14", titulo:"Criatividade aplicada: aprimorando o processo criativo no mercado de trabalho",
      slug:"criatividade-aplicada", tipo:"curso", duracao:null, acesso:"alura", prereq:"",
      rotas:[["P3","humana"],["P3","integrar"],["P3","base"]], ordem:1,
      porque:{ "P3":"Ajuda a gerar mais de uma saída para um problema antes de escolher uma.",
               "P3/integrar":"Ajuda a tratar a sugestão da IA como ponto de partida, e não como resposta final." },
      ativo:true, verificadoEm:"2026-10-27", responsavel:"curadoria pendente" },

    { id:"c15", titulo:"Criatividade e adequação: aprendendo e aprimorando um processo criativo",
      slug:"criatividade-adequacao", tipo:"curso", duracao:null, acesso:"alura", prereq:"",
      rotas:[["P3","humana"],["P3","explorar"]], ordem:2,
      porque:{ "P3":"Ajuda a destravar ideias e a adequá-las ao contexto em que serão usadas." },
      ativo:true, verificadoEm:"2026-10-27", responsavel:"curadoria pendente" },

    { id:"c16", titulo:"Design Thinking parte 1: utilize uma metodologia de design para solucionar desafios",
      slug:"design-thinking-parte-1", tipo:"curso", duracao:null, acesso:"alura", prereq:"",
      rotas:[["P3","avancar"],["P3","humana"]], ordem:1,
      porque:{ "P3":"Ajuda a levar a busca por alternativas para um desafio maior, com um método de apoio.",
               "P3/humana":"Ajuda a estruturar a exploração de ideias quando a intuição sozinha não basta." },
      ativo:true, verificadoEm:"2026-10-27", responsavel:"curadoria pendente" },

    { id:"c17", titulo:"Gerenciamento de inovação organizacional parte 1: técnicas de ideação",
      slug:"gerenciamento-inovacao-organizacional", tipo:"curso", duracao:null, acesso:"alura", prereq:"",
      rotas:[["P3","avancar"]], ordem:3,
      porque:{ "P3":"Ajuda a aplicar técnicas de ideação com outras pessoas, além do uso individual da IA." },
      ativo:true, verificadoEm:"2026-10-27", responsavel:"curadoria pendente" },

    /* ── P4 · Mobilizar · ferramentas digitais + colaboração ───── */
    { id:"c18", titulo:"Kanban parte 1: fundamentos essenciais",
      slug:"kanban-primeiros-passos", tipo:"curso", duracao:null, acesso:"alura", prereq:"",
      rotas:[["P4","tecnica"],["P4","integrar"],["P4","base"],["P4","avancar"]], ordem:1,
      porque:{ "P4":"Ajuda a deixar visível quem faz o quê e o que está travado, num quadro que todos veem.",
               "P4/tecnica":"Ajuda a organizar tarefas, responsáveis e prazos num quadro compartilhado, que é a parte técnica desta dupla." },
      ativo:true, verificadoEm:"2026-10-27", responsavel:"curadoria pendente" },

    { id:"c19", titulo:"Gemini no Google Workspace: comunicação, criação e organização com IA",
      slug:"gemini-workspace-rotinas", tipo:"curso", duracao:null, acesso:"alura", prereq:"",
      rotas:[["P4","tecnica"],["P4","explorar"]], ordem:2,
      porque:{ "P4":"Ajuda a transformar e-mails e combinados em tarefas organizadas, usando as ferramentas que você já tem." },
      ativo:true, verificadoEm:"2026-10-27", responsavel:"curadoria pendente" },

    { id:"c20", titulo:"Microsoft 365 Copilot: dominando a comunicação produtiva no Outlook e To Do",
      slug:"microsoft-365-copilot-dominando-comunicacao-produtiva-outlook", tipo:"curso", duracao:null, acesso:"alura", prereq:"",
      rotas:[["P4","tecnica"]], ordem:3,
      porque:{ "P4":"Ajuda a organizar tarefas e combinados a partir do e-mail, no ambiente Microsoft." },
      ativo:true, verificadoEm:"2026-10-27", responsavel:"curadoria pendente" },

    { id:"c21", titulo:"Princípios do trabalho em equipe: relações colaborativas",
      slug:"principios-trabalho-equipe-relacao-colaborativa", tipo:"curso", duracao:null, acesso:"alura", prereq:"",
      rotas:[["P4","humana"],["P4","base"],["P4","explorar"],["P4","integrar"]], ordem:1,
      porque:{ "P4":"Ajuda a construir acordos com as pessoas antes de registrar quem faz o quê.",
               "P4/base":"Ajuda a começar pelo lado das pessoas: como combinar responsabilidades de um jeito que funcione." },
      ativo:true, verificadoEm:"2026-10-27", responsavel:"curadoria pendente" },

    { id:"c22", titulo:"Comunicação: como se expressar bem e ser compreendido",
      slug:"comunicacao", tipo:"curso", duracao:null, acesso:"alura", prereq:"",
      rotas:[["P4","humana"],["P4","explorar"]], ordem:2,
      porque:{ "P4":"Ajuda a explicar um combinado de forma que a outra pessoa entenda o mesmo que você." },
      ativo:true, verificadoEm:"2026-10-27", responsavel:"curadoria pendente" },

    { id:"c23", titulo:"Feedback: a arte de orientar e ser orientado com sentido",
      slug:"feedback", tipo:"curso", duracao:null, acesso:"alura", prereq:"",
      rotas:[["P4","humana"],["P4","avancar"]], ordem:3,
      porque:{ "P4":"Ajuda a conversar sobre o que não saiu como combinado sem transformar isso em conflito." },
      ativo:true, verificadoEm:"2026-10-27", responsavel:"curadoria pendente" },

    { id:"c24", titulo:"Negociação parte 1: práticas essenciais",
      slug:"negociacao-praticas-essenciais", tipo:"curso", duracao:null, acesso:"alura", prereq:"",
      rotas:[["P4","avancar"]], ordem:1,
      porque:{ "P4":"Ajuda a chegar a acordos quando as pessoas envolvidas querem coisas diferentes." },
      ativo:true, verificadoEm:"2026-10-27", responsavel:"curadoria pendente" },

    /* ── P5 · Aprender · experimentação + adaptabilidade ───────── */
    { id:"c25", titulo:"Transformação Digital: cultura de experimentação",
      slug:"transformacao-digital-cultura-experimentacao", tipo:"curso", duracao:null, acesso:"alura", prereq:"",
      rotas:[["P5","tecnica"],["P5","integrar"],["P5","explorar"]], ordem:1,
      porque:{ "P5":"Ajuda a entender por que testar pequeno antes de mudar tudo, e como montar esse teste.",
               "P5/tecnica":"Ajuda a definir o que testar e como observar o resultado, que é a parte técnica desta dupla." },
      ativo:true, verificadoEm:"2026-10-27", responsavel:"curadoria pendente" },

    { id:"c26", titulo:"Experimentação com Teste A/B",
      slug:"experimentacao-teste-a-b", tipo:"curso", duracao:null, acesso:"alura", prereq:"",
      rotas:[["P5","tecnica"],["P5","avancar"]], ordem:2,
      porque:{ "P5":"Ajuda a desenhar um teste em que dá para comparar duas opções e saber qual funcionou." },
      ativo:true, verificadoEm:"2026-10-27", responsavel:"curadoria pendente" },

    { id:"c27", titulo:"Design Thinking parte 3: experimente suas ideias",
      slug:"design-thinking-parte-3", tipo:"curso", duracao:null, acesso:"alura", prereq:"Design Thinking parte 1 e 2 (recomendado)",
      rotas:[["P5","avancar"],["P5","tecnica"]], ordem:1,
      porque:{ "P5":"Ajuda a transformar uma ideia num protótipo rápido e a aprender com a reação das pessoas." },
      ativo:true, verificadoEm:"2026-10-27", responsavel:"curadoria pendente" },

    { id:"c28", titulo:"Aprender a aprender: técnicas para seu autodesenvolvimento",
      slug:"aprender-a-aprender-tecnicas-para-seu-autodesenvolvimento", tipo:"curso", duracao:null, acesso:"alura", prereq:"",
      rotas:[["P5","humana"],["P5","base"],["P5","explorar"]], ordem:1,
      porque:{ "P5":"Ajuda a tirar aprendizado de cada tentativa, em vez de só repetir ou desistir." },
      ativo:true, verificadoEm:"2026-10-27", responsavel:"curadoria pendente" },

    { id:"c29", titulo:"Resiliência: aumente sua capacidade de adaptação a adversidades",
      slug:"resiliencia", tipo:"curso", duracao:null, acesso:"alura", prereq:"",
      rotas:[["P5","humana"],["P5","base"]], ordem:2,
      porque:{ "P5":"Ajuda a mudar de abordagem quando algo não funciona, sem levar isso como fracasso." },
      ativo:true, verificadoEm:"2026-10-27", responsavel:"curadoria pendente" },

    { id:"c30", titulo:"Aprendizado contínuo: desenvolvendo o perfil de lifelong learner",
      slug:"aprendizado-continuo-desenvolvendo-perfil-lifelong-learner", tipo:"curso", duracao:null, acesso:"alura", prereq:"",
      rotas:[["P5","humana"],["P5","integrar"]], ordem:3,
      porque:{ "P5":"Ajuda a fazer do ciclo testar, observar e ajustar um hábito, e não um evento." },
      ativo:true, verificadoEm:"2026-10-27", responsavel:"curadoria pendente" }
  ]
};
