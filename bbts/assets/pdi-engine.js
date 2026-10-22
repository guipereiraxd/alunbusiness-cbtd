/* BBTS · Motor de lacunas, seleção de cursos e planejamento de 12 meses
   Catálogo: base real Alura (IA & Dados), 717 cursos. Carga horária real,
   lida da página de cada curso — ver nota em /bbts/metodologia/. */
window.BBTS_PDI = (function(){
  const CAT = window.BBTS_CATALOGO;

  /* ── mapa competência → macro-temas do catálogo ──────────────
     Liga cada pergunta do assessment aos temas que a desenvolvem. */
  const MAPA = {
    P1: ["IA Generativa & Prompt Engineering","Automação & Produtividade","IA para Produto & Negócio"],
    P2: ["IA Generativa & Prompt Engineering","Automação & Produtividade","IA para Produto & Negócio","IA para Design & Conteúdo","IA para Marketing"],
    P3: ["IA Generativa & Prompt Engineering","Governança & Ética de IA","Automação & Produtividade"],
    P4: ["Automação & Produtividade","Engenharia de LLMs & Agentes","MLOps e Operacionalização"],
    P5: ["Fundamentos de Dados","Exploração de Dados","Business Intelligence & Visualização","Bancos de Dados & SQL","IA para Análise de Dados & BI"],
    P6: ["Automação & Produtividade","Business Intelligence & Visualização","IA para Análise de Dados & BI"],
    P7: ["Engenharia de LLMs & Agentes","IA Generativa & Prompt Engineering","Machine Learning & Deep Learning","Engenharia de Modelos & Fine-Tuning"],
    P8: ["Governança & Ética de IA","IA para Produto & Negócio"],
    P9: ["Governança & Ética de IA","IA para Produto & Negócio"],

    /* As cinco técnicas descrevem prática, não percepção — por isso
       apontam para temas mais estreitos que as perguntas de prontidão. */
    T1: ["IA Generativa & Prompt Engineering"],
    T2: ["Governança & Ética de IA","IA Generativa & Prompt Engineering"],
    T3: ["Fundamentos de Dados","Exploração de Dados","Bancos de Dados & SQL"],
    T4: ["Engenharia de LLMs & Agentes","IA Generativa & Prompt Engineering"],
    T5: ["Engenharia de LLMs & Agentes","Automação & Produtividade","MLOps e Operacionalização"],
    T6: ["Engenharia de LLMs & Agentes","MLOps e Operacionalização","Machine Learning & Deep Learning"],
    T7: ["Governança & Ética de IA"]
  };
  /* O comportamento que fecha cada lacuna. É o que a pessoa lê junto do gap,
     para saber o que fazer na segunda-feira — curso sozinho não diz isso.
     Em P10–P12 o verbo muda de propósito: não é esforço individual, é acordo. */
  const ACAO = {
    P1:  "Crie disciplina de uso: escolha uma tarefa recorrente e faça-a com IA todo dia, até virar hábito.",
    P2:  "Saia do uso avulso: defina um caso de uso do seu processo e construa um protótipo que resolva ele.",
    P3:  "Reduza a dependência: antes de pedir ajuda, teste, compare resultados e aprenda a reconhecer quando a resposta não serve.",
    P4:  "Escolha uma etapa manual e repetitiva do seu processo e faça-a acontecer sem alguém repetir o passo a passo.",
    P5:  "Pare de consolidar planilha à mão: monte uma análise sobre a base real e leve o resultado para alguém decidir.",
    P6:  "Experimente uma ferramenta de automação sem código no seu próprio fluxo — comece por algo pequeno que você faz toda semana.",
    P7:  "Aprenda o vocabulário para conversar de igual com quem constrói: prompt, modelo, contexto e integração.",
    P8:  "Torne seu trabalho visível: compartilhe o que deu certo e o que não deu, até virarem referência de consulta na área.",
    P9:  "Ensine o que você já sabe: prepare uma sessão curta para o time, com um caso real seu.",
    P10: "Mapeie qual ferramenta falta e peça formalmente ao gestor — acesso não se conquista com estudo.",
    P11: "Leve um resultado concreto ao seu gestor e combine como o uso de IA passa a ser acompanhado na área.",
    P12: "Negocie uma janela protegida na agenda. Sem tempo reservado, nenhum plano de desenvolvimento acontece.",

    T1: "Pare de pedir solto: escreva o objetivo, o contexto, o formato esperado e o que não pode acontecer — e guarde o que funcionou para reusar.",
    T2: "Defina antes como vai saber se a resposta serve. Confira número contra fonte e teste a IA justamente onde ela tende a errar.",
    T3: "Antes de enviar, selecione o que importa, limpe duplicidade e ausência, e confirme que pode usar aquele dado.",
    T4: "Em vez de colar trecho na conversa, monte uma base de documentos e teste se a resposta recupera a informação certa — inclusive quando ela não existe.",
    T5: "Saia do copiar e colar entre ferramentas: conecte as etapas com gatilho, validação e tratamento de falha, e deixe a aprovação humana onde a decisão pesa.",
    T6: "Comece adaptando um exemplo de chamada de API no seu próprio contexto — e evolua até o que você entrega ter versionamento e alguém conseguir manter depois de você.",
    T7: "Descubra a política da casa e classifique o que você pode usar. Antes de colar algo numa IA, pergunte-se de quem é aquele dado e se a ferramenta é homologada."
  };

  /* P10–P12 (contexto) não têm curso: dependem do ambiente, não da pessoa. */
  const SEM_CURSO = ["P10","P11","P12"];

  /* profundidade adequada ao nível atual da pessoa */
  const PROF_POR_NIVEL = { 1:["Introdutório"], 2:["Introdutório","Intermediário"],
                           3:["Intermediário","Avançado"], 4:["Avançado"] };

  const PRATICAS = {
    uso:  { titulo:"Rotina assistida documentada",
            desc:"Escolha uma tarefa recorrente sua e refaça-a com apoio de IA por quatro semanas, registrando o antes e o depois.",
            evidencia:"Documento com a tarefa, o prompt usado, o resultado e o tempo gasto em cada semana." },
    base: { titulo:"Automação de uma etapa real",
            desc:"Escolha uma etapa manual e repetitiva do seu processo e faça-a acontecer sem repetição manual.",
            evidencia:"A automação funcionando, com registro de quantas vezes rodou e o que falhou." },
    infl: { titulo:"Oficina de 45 minutos para o time",
            desc:"Prepare e conduza uma sessão curta mostrando um caso real seu, com o que funcionou e o que não funcionou.",
            evidencia:"Material da sessão, lista de participantes e três compromissos de aplicação assumidos por colegas." },
    ctx:  { titulo:"Acordo de espaço com o gestor",
            desc:"Combine com seu gestor uma janela protegida na agenda e o acesso à ferramenta necessária.",
            evidencia:"Registro do acordo: janela na agenda, ferramenta liberada e data de revisão." }
  };
  const ROTULO = { uso:"Uso atual", base:"Base técnica", infl:"Influência", ctx:"Contexto de trabalho",
                   tec:"Competência técnica" };

  function lacunas(R, SK, alvo){
    const B = window.BBTS, out = [];
    B.perguntas.forEach(function(p){
      if (p.foraDoIndice) return;
      const atual = Number(R[p.id]) || null, meta = alvo.porPergunta[p.id] || 0;
      if (SK[p.id]) { out.push({ id:p.id, titulo:p.titulo, bloco:p.bloco, atual:null, meta, delta:null,
        estado:"pendente", motivo: SK[p.id]==="nao_sei" ? "Respondido como “não sei”" : "Marcado como “não se aplica”" }); return; }
      if (!atual) return;
      const delta = meta - atual;
      out.push({ id:p.id, titulo:p.titulo, bloco:p.bloco, atual, meta, delta, estado: delta>0?"lacuna":"atendido" });
    });
    out.sort(function(a,b){
      if (a.estado==="pendente" && b.estado!=="pendente") return -1;
      if (b.estado==="pendente" && a.estado!=="pendente") return 1;
      return (b.delta||0) - (a.delta||0);
    });
    return out;
  }

  /* Alvo das técnicas. Escala 0–4 e natureza diferente das de prontidão:
     T1 e T2 todo mundo precisa; T3 sobe com sinal de dado; T4 e T5 com
     sinal de agente. Teto em 4, piso em 2 — abaixo disso não é prática. */
  function alvoTecnico(alvo){
    const base = Math.max(2, Math.min(4, alvo.nivelBase || 2));
    const s = alvo.sinais || {};
    const cap = n => Math.max(2, Math.min(4, n));
    return {
      T1: cap(base),
      T2: cap(base),
      T3: cap(s.dado   ? base + 1 : base),
      T4: cap(s.agente ? base + 1 : base - 1),
      T5: cap(s.agente ? base + 1 : base),
      /* Construção técnica é de trilha, e tem piso próprio em 0: para quem
         é de negócio, não programar não é dívida. Só vira alvo quando o
         objetivo declarado aponta para construir. */
      T6: Math.max(0, Math.min(4, s.agente ? base : base - 2)),
      /* segurança não tem trilha: todo mundo precisa do mesmo patamar */
      T7: cap(Math.max(3, base))
    };
  }

  /* Alvo por dimensão: aplica a mesma matriz sobre os alvos por pergunta,
     para o alvo e o resultado serem lidos na mesma régua. */
  function alvoDimensoes(alvo){
    const meta = alvoTecnico(alvo), out = {};
    window.BBTS.DIMENSOES.forEach(function(d){
      let soma = 0, peso = 0;
      Object.keys(d.pesos).forEach(function(id){
        soma += (meta[id] || 0) * d.pesos[id]; peso += d.pesos[id];
      });
      out[d.id] = peso ? soma/peso : 0;
    });
    return out;
  }

  /* Lista de lacunas do bloco técnico, no mesmo formato das outras,
     para a tela e o motor de curso tratarem igual. */
  function lacunasTecnicas(R, alvo){
    const B = window.BBTS, meta = alvoTecnico(alvo), out = [];
    B.tecnicas.forEach(function(t){
      const bruto = R[t.id];
      if (bruto === undefined || bruto === null || bruto === "") return;
      const atual = Number(bruto), m = meta[t.id];
      out.push({ id:t.id, titulo:t.titulo, bloco:"tec", atual, meta:m,
                 delta:m-atual, estado: m>atual ? "lacuna" : "atendido", tecnica:true });
    });
    out.sort((a,b) => b.delta - a.delta);
    return out;
  }

  function alvoDe(T, calc){
    const OPTS = ["Executar com apoio de exemplos prontos","Executar sozinho e avaliar o resultado",
                  "Construir algo que outras pessoas usem","Orientar outras pessoas e revisar o que elas produzem"];
    const i = OPTS.indexOf(T.aut||"");
    const base = i >= 0 ? i+1 : Math.min(4, Math.max(2, Math.round(calc.indice/12)+1));
    const txt = ((T.obj||"")+" "+(T.P15||"")+" "+(T.proc||"")).toLowerCase();
    const sinais = {
      agente: /agente|automat|fluxo|integra|orquestr|workflow|n8n|zapier|power automate/.test(txt),
      dado:   /dado|planilha|base|relat|indicador|análise|analise|métrica|metrica|sql|bi|dashboard|power bi/.test(txt),
      ensino: /ensin|multiplic|treinar|time|equipe|compartilh|dissemin|lideran/.test(txt)
    };
    const cap = n => Math.max(1, Math.min(4, n));
    const alvo = { nivelBase: base, porPergunta:{}, sinais };
    window.BBTS.perguntas.forEach(function(p){
      if (p.foraDoIndice) return;
      let n = base;
      if (p.bloco==="base" && sinais.agente && ["P4","P6","P7"].includes(p.id)) n = cap(base+1);
      if (p.id==="P5" && sinais.dado) n = cap(base+1);
      if (p.bloco==="infl") n = sinais.ensino ? cap(base) : cap(base-1);
      if (p.bloco==="ctx")  n = Math.min(3, base);
      alvo.porPergunta[p.id] = n;
    });
    return alvo;
  }

  /* ── piso do alvo ───────────────────────────────────────────
     Quando o objetivo declarado já está coberto pelo nível atual, não há
     lacuna e o plano sairia vazio. Isso é falha de produto: a pessoa
     respondeu e não recebe nada. A regra é subir um degrau onde ainda há
     espaço, nas competências que formação desenvolve — contexto fica de
     fora, porque não se resolve com curso. */
  function alvoComPiso(R, SK, alvo){
    /* só conta lacuna que formação resolve: quem tem gap apenas em contexto
       continuaria sem plano, e contexto é acordo com o gestor, não curso */
    const temLacuna = lacunas(R, SK, alvo)
      .some(l => l.estado === "lacuna" && SEM_CURSO.indexOf(l.id) < 0);
    if (temLacuna) return { alvo, elevado:false, noTopo:false };

    const novo = Object.assign({}, alvo, { porPergunta: Object.assign({}, alvo.porPergunta) });
    let subiu = false, comEspaco = false;
    window.BBTS.perguntas.forEach(function(p){
      if (p.foraDoIndice || SEM_CURSO.indexOf(p.id) >= 0) return;
      const atual = Number(R[p.id]) || 0;
      if (!atual) return;
      if (atual < 4) comEspaco = true;
      if (atual < 4 && novo.porPergunta[p.id] <= atual){
        novo.porPergunta[p.id] = atual + 1; subiu = true;
      }
    });
    /* sem espaço em competência nenhuma: a pessoa está no topo da escada
       naquilo que curso cobre — o passo seguinte é praticar e ensinar */
    return { alvo: subiu ? novo : alvo, elevado: subiu, noTopo: !comEspaco };
  }

  /* ── seleção no catálogo real ─────────────────────────────── */
  function candidatos(lac, R, perfilAlvo){
    const gaps = lac.filter(l => l.estado==="lacuna" && !SEM_CURSO.includes(l.id));
    const porMacro = {};
    gaps.forEach(function(g){
      (MAPA[g.id]||[]).forEach(function(m){
        porMacro[m] = porMacro[m] || { peso:0, comps:[] };
        porMacro[m].peso += g.delta;
        if (!porMacro[m].comps.includes(g.id)) porMacro[m].comps.push(g.id);
      });
    });
    const nivelMedio = gaps.length
      ? Math.round(gaps.reduce((a,g)=>a+g.atual,0)/gaps.length) : 2;
    const profOk = PROF_POR_NIVEL[nivelMedio] || ["Introdutório","Intermediário"];

    return CAT.cursos.map(function(c){
      const macro = CAT.macros[c.m], info = porMacro[macro];
      if (!info) return null;
      const prof = CAT.profs[c.p], perfil = CAT.perfis[c.a];
      let score = info.peso * 10;
      if (profOk.includes(prof)) score += 6;                       // aderente ao nível
      if (perfil === perfilAlvo || perfil === "Todos os perfis") score += 5;
      if (prof === "Avançado" && nivelMedio <= 2) score -= 12;     // cedo demais
      /* Peça curta é complemento, não trilha. Com a carga horária real no
         catálogo surgiram cursos de 1h a 4h (flash skills, checkpoints,
         cursos-texto): eles cobrem a competência no papel, mas não sustentam
         um ciclo de 90 dias sozinhos. Entram quando não há nada melhor. */
      if (c.h < 6) score -= 9;
      return { ...c, macro, prof, perfil, comps:info.comps, score,
               url: CAT.base + c.s };
    /* Desempate neutro quanto à duração. Preferir o curso mais curto enchia o
       plano de peças de 2h; preferir o mais longo inflava as horas de volta.
       Entre candidatos igualmente aderentes, a ordem é estável pelo slug e a
       duração sai de quem é mais aderente, não de uma preferência embutida. */
    }).filter(Boolean).sort((a,b) => b.score - a.score || (a.s < b.s ? -1 : a.s > b.s ? 1 : 0));
  }

  /* perfil-alvo do catálogo a partir do contexto declarado */
  function perfilCatalogo(T, alvo){
    const txt = ((T.obj||"")+" "+(T.proc||"")).toLowerCase();
    if (/sql|etl|pipeline|engenhar|data lake|warehouse/.test(txt)) return "Engenheiro(a) de Dados";
    if (/modelo|machine learning|ml|treinar modelo|fine.?tun/.test(txt)) return "Engenheiro(a) de IA/ML";
    if (/dashboard|bi|indicador|relatório|relatorio|análise|analise/.test(txt)) return "Analista de Dados & BI";
    if (/lidera|gestor|equipe|governan|time/.test(txt) && alvo.sinais.ensino) return "Liderança & Governança";
    if (/desenvolv|código|codigo|api|backend|front/.test(txt)) return "Desenvolvedor(a) de Software";
    return "Profissional de Negócio";
  }

  /* ── plano de 12 meses ─────────────────────────────────────
     4 ciclos de 90 dias. Capacidade por ciclo = dedicação semanal × ~12 semanas,
     com fator de folga (0,75) para férias, picos e a atividade prática. */
  const CICLOS = 4, SEMANAS = 12, FOLGA = 0.75;
  const TETO_CICLO = { cursos:3, horas:32 };   // ritmo máximo dentro de um ciclo
  const TETO_PLANO = { cursos:8 };             // trava de segurança do ano
  const PISO_PLANO = { cursos:2 };             // ninguém sai com plano de um curso

  function planejar(cands, horasSemana){
    const capBruta  = (horasSemana||0) * SEMANAS * FOLGA;
    const capCiclo  = Math.max(0, Math.min(TETO_CICLO.horas, Math.round(capBruta)));
    const semCapacidade = capCiclo < 8;

    /* O que o plano precisa cobrir: toda lacuna que algum curso do catálogo
       desenvolve. Sai dos próprios candidatos — candidatos() já anexa em
       .comps as lacunas que cada curso atende. */
    const aCobrir = new Set();
    cands.forEach(c => c.comps.forEach(q => aCobrir.add(q)));

    /* Seleção por COBERTURA, não por capacidade.
       Antes o plano empilhava cursos até encher a agenda da pessoa, e como o
       pool de candidatos passa de 500, ele sempre enchia: o tamanho do plano
       era o tamanho da agenda, não o da necessidade. O efeito colateral ficou
       evidente quando a carga horária real entrou — cursos mais curtos viraram
       mais cursos, não menos horas. Agora um curso só entra se ainda traz
       lacuna nova, e o plano termina quando a última é coberta. */
    const escolhidos = [], cobertos = new Set();
    for (const cur of cands){
      if (cobertos.size >= aCobrir.size) break;
      if (escolhidos.length >= TETO_PLANO.cursos) break;
      const novas = cur.comps.filter(q => !cobertos.has(q));
      if (!novas.length) continue;
      escolhidos.push(cur); novas.forEach(q => cobertos.add(q));
    }

    /* Piso: coberto tudo com um curso só, o plano fica magro demais para um
       ano. Completa com o melhor candidato restante, que reforça o que já
       foi escolhido em vez de abrir frente nova. */
    const usados = new Set(escolhidos.map(c => c.s));
    for (const cur of cands){
      if (escolhidos.length >= PISO_PLANO.cursos) break;
      if (usados.has(cur.s)) continue;
      escolhidos.push(cur); usados.add(cur.s);
    }

    /* Distribui em ritmo parelho entre os ciclos, em vez de carregar o
       primeiro e esvaziar os últimos. */
    const porCiclo = Math.max(1, Math.ceil(escolhidos.length / CICLOS));
    const fila = escolhidos.slice(), ciclos = [], apertados = [];
    for (let c = 0; c < CICLOS; c++){
      const sel = []; let h = 0;
      while (fila.length && sel.length < Math.min(porCiclo, TETO_CICLO.cursos)){
        const cur = fila[0];
        /* a capacidade volta ao papel de ritmo: segura o segundo curso do
           ciclo, nunca o primeiro — senão quem declara pouca hora fica sem
           plano nenhum, que é a falha que a regra de plano mínimo cobre */
        if (sel.length && h + cur.h > capCiclo) break;
        if (!sel.length && cur.h > capCiclo) apertados.push(c+1);
        sel.push(fila.shift()); h += cur.h;
      }
      ciclos.push({ n:c+1, cursos:sel, horas:h, capacidade:capCiclo,
                    apertado: apertados.indexOf(c+1) >= 0 });
    }

    const totalH = ciclos.reduce((a,c)=>a+c.horas,0);
    const totalC = ciclos.reduce((a,c)=>a+c.cursos.length,0);
    /* o que não coube no ano fica visível como próximo ciclo, fora da conta */
    const adiados = fila.slice();
    const naoCobertas = [...aCobrir].filter(q => !cobertos.has(q));
    return { ciclos, capCiclo, capBruta, totalH, totalC, semCapacidade, apertados,
             adiados, naoCobertas, cobertos:[...cobertos], aCobrir:[...aCobrir],
             teto:TETO_CICLO, tetoPlano:TETO_PLANO, semanas:SEMANAS, folga:FOLGA };
  }

  function blocoPrioritario(lac){
    const soma = {uso:0, base:0, infl:0, ctx:0};
    lac.forEach(l => { if (l.estado==="lacuna") soma[l.bloco] += l.delta; });
    return Object.keys(soma).sort((a,b)=>soma[b]-soma[a])[0];
  }

  return { MAPA, SEM_CURSO, PRATICAS, ROTULO, ACAO, TETO_CICLO, TETO_PLANO, CICLOS,
           lacunas, lacunasTecnicas, alvoTecnico, alvoDimensoes, alvoDe, alvoComPiso,
           candidatos, perfilCatalogo, planejar, blocoPrioritario };
})();
