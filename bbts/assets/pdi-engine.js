/* BBTS · Motor de lacunas, seleção de cursos e planejamento de 12 meses
   Catálogo: base real Alura (IA & Dados), 717 cursos. Carga horária estimada. */
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
    P9: ["Governança & Ética de IA","IA para Produto & Negócio"]
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
  const ROTULO = { uso:"Uso atual", base:"Base técnica", infl:"Influência", ctx:"Contexto de trabalho" };

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
      return { ...c, macro, prof, perfil, comps:info.comps, score,
               url: CAT.base + c.s };
    }).filter(Boolean).sort((a,b) => b.score - a.score || a.h - b.h);
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
  const TETO_CICLO = { cursos:3, horas:32 };   // limite institucional da demo

  function planejar(cands, horasSemana){
    const capBruta  = (horasSemana||0) * SEMANAS * FOLGA;
    const capCiclo  = Math.max(0, Math.min(TETO_CICLO.horas, Math.round(capBruta)));
    const ciclos = [], usados = new Set(), cobertos = new Set();
    let semCapacidade = capCiclo < 8;

    const apertados = [];
    for (let c = 0; c < CICLOS; c++){
      const sel = []; let h = 0;
      for (const cur of cands){
        if (sel.length >= TETO_CICLO.cursos) break;
        if (usados.has(cur.s)) continue;
        if (h + cur.h > capCiclo) continue;
        // no 1º ciclo prioriza competência ainda descoberta
        if (c === 0 && sel.length && !cur.comps.some(q => !cobertos.has(q))) continue;
        sel.push(cur); usados.add(cur.s); h += cur.h;
        cur.comps.forEach(q => cobertos.add(q));
      }
      /* Plano mínimo: havendo lacuna, o ciclo não sai vazio. Se nada coube
         na capacidade, entra o curso mais curto disponível mesmo excedendo —
         a capacidade é estimativa de ritmo, não limite rígido, e em 90 dias
         ele cabe. O ciclo fica marcado como apertado para a tela avisar. */
      if (!sel.length){
        const resto = cands.filter(x => !usados.has(x.s));
        if (resto.length){
          const curto = resto.reduce((a,b) => b.h < a.h ? b : a);
          sel.push(curto); usados.add(curto.s); h += curto.h;
          curto.comps.forEach(q => cobertos.add(q));
          apertados.push(c+1);
        }
      }
      ciclos.push({ n:c+1, cursos:sel, horas:h, capacidade:capCiclo,
                    apertado: apertados.indexOf(c+1) >= 0 });
    }
    const totalH = ciclos.reduce((a,c)=>a+c.horas,0);
    const totalC = ciclos.reduce((a,c)=>a+c.cursos.length,0);
    return { ciclos, capCiclo, capBruta, totalH, totalC, semCapacidade, apertados,
             cobertos:[...cobertos], teto:TETO_CICLO, semanas:SEMANAS, folga:FOLGA };
  }

  function blocoPrioritario(lac){
    const soma = {uso:0, base:0, infl:0, ctx:0};
    lac.forEach(l => { if (l.estado==="lacuna") soma[l.bloco] += l.delta; });
    return Object.keys(soma).sort((a,b)=>soma[b]-soma[a])[0];
  }

  return { MAPA, SEM_CURSO, PRATICAS, ROTULO, TETO_CICLO, CICLOS,
           lacunas, alvoDe, alvoComPiso, candidatos, perfilCatalogo, planejar, blocoPrioritario };
})();
