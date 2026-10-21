/* BBTS · Base sintética para demonstração do painel do DHO.
   Determinística (seed fixo) — os mesmos números a cada carregamento.
   NÃO são pessoas reais. Rótulos genéricos conforme previsto para a demo. */
window.BBTS_DEMO = (function(){
  const AREAS = [
    { id:"dev",   nome:"Desenvolvimento de Software", n:14, ctxBias: 0.6 },
    { id:"dados", nome:"Dados e Analytics",           n:9,  ctxBias: 0.9 },
    { id:"infra", nome:"Infraestrutura e Cloud",      n:10, ctxBias: 0.2 },
    { id:"seg",   nome:"Segurança da Informação",     n:6,  ctxBias:-0.3 },
    { id:"aten",  nome:"Atendimento e Suporte",       n:12, ctxBias:-0.6 },
    { id:"prod",  nome:"Produto e Negócio",           n:9,  ctxBias: 0.4 }
  ];

  /* LCG — gerador pseudoaleatório determinístico */
  let seed = 20261021;
  function rnd(){ seed = (seed * 1103515245 + 12345) & 0x7fffffff; return seed / 0x7fffffff; }
  function norm(){ return (rnd()+rnd()+rnd())/3; }               // tende ao centro
  function nivel(centro, espalha){
    const v = Math.round(centro + (norm()-0.5)*espalha*2);
    return Math.max(1, Math.min(4, v));
  }

  /* objetivos variados — fazem alvoDe() e perfilCatalogo() divergirem,
     para o painel mostrar demanda diferente por tema e não uma linha chata */
  const OBJETIVOS = [
    { obj:"Preciso automatizar a conferência de chamados repetitivos e integrar o fluxo com as bases autorizadas, sem depender de abrir ticket para cada etapa.",
      aut:"Construir algo que outras pessoas usem", proc:"triagem de chamados" },
    { obj:"Quero montar os relatórios de acompanhamento direto da base, com indicador confiável, em vez de consolidar planilha no fim do mês.",
      aut:"Executar sozinho e avaliar o resultado", proc:"relatório mensal de indicadores" },
    { obj:"Preciso usar IA no meu dia a dia com segurança e saber quando a resposta não serve, começando pelas tarefas de redação e revisão.",
      aut:"Executar com apoio de exemplos prontos", proc:"redação de documentos" },
    { obj:"Quero treinar meu time no uso de IA e revisar o que eles produzem, disseminando as práticas que já funcionam na minha área.",
      aut:"Orientar outras pessoas e revisar o que elas produzem", proc:"capacitação da equipe" },
    { obj:"Preciso construir agentes que orquestrem etapas de processo interno, integrando sistemas e avaliando o resultado antes de publicar.",
      aut:"Construir algo que outras pessoas usem", proc:"orquestração de processo interno" },
    { obj:"Quero analisar os dados de atendimento com SQL e dashboard próprio, para parar de pedir extração a cada pergunta nova.",
      aut:"Executar sozinho e avaliar o resultado", proc:"análise de dados de atendimento" }
  ];
  const DEDICACOES = [1,2,2,3,3,4,5,6];

  const STATUS = ["rascunho","submetido","em_revisao","aprovado"];
  const STATUS_LABEL = { rascunho:"Assessment em rascunho", submetido:"PDI gerado, aguardando revisão",
                         em_revisao:"Em revisão pelo gestor", aprovado:"PDI aprovado" };

  function gerar(){
    const pessoas = []; let n = 0;
    AREAS.forEach(function(a){
      for (let i=0;i<a.n;i++){
        n++;
        /* capacidade base da pessoa — distribuição realista, maioria no meio */
        const cap = norm();                       // 0..1
        const centroCap = 1.5 + cap*2.6;          // ~1,5 a 4,1
        const ctx = Math.max(0, Math.min(1, cap*0.3 + norm()*0.7 + a.ctxBias*0.25));
        const centroCtx = 1 + ctx*2.3;

        const R = {
          P1: nivel(centroCap+0.4, 1.0),
          P2: nivel(centroCap,     1.0),
          P3: nivel(centroCap,     1.0),
          P4: nivel(centroCap-0.5, 1.0),
          P5: nivel(centroCap-0.1, 1.2),
          P6: nivel(centroCap-0.6, 1.0),
          P7: nivel(centroCap-0.2, 1.0),
          P8: nivel(centroCap-0.9, 0.9),
          P9: nivel(centroCap-0.8, 0.9),
          P10:nivel(centroCtx+0.3, 0.9),
          P11:nivel(centroCtx,     1.0),
          P12:nivel(centroCtx-0.5, 1.0)
        };
        /* P13 correlaciona com o perfil, com ruído */
        const somaPerfil = R.P2 + R.P3;
        R.P13 = nivel(1.4 + (somaPerfil-2)/6*2.6, 1.0);

        /* status do PDI — a maioria já submeteu */
        const r = rnd();
        const status = r < 0.12 ? "rascunho" : r < 0.46 ? "submetido" : r < 0.78 ? "em_revisao" : "aprovado";

        /* objetivo e dedicação correlacionam com a capacidade da pessoa */
        const oi = Math.min(OBJETIVOS.length-1, Math.floor(rnd()*0.6*OBJETIVOS.length + cap*0.4*OBJETIVOS.length));
        const di = Math.min(DEDICACOES.length-1, Math.floor(norm()*0.7*DEDICACOES.length + cap*0.3*DEDICACOES.length));

        pessoas.push({ id:n, rotulo:"Colaborador "+n, area:a.id, areaNome:a.nome, R, status,
                       T: Object.assign({}, OBJETIVOS[oi], { ded: DEDICACOES[di] }) });
      }
    });
    return pessoas;
  }

  const pessoas = gerar();
  /* alguns não responderam — para a taxa de participação não ser 100% */
  const naoResponderam = 7;

  return { AREAS, STATUS, STATUS_LABEL, pessoas, naoResponderam,
           convidados: pessoas.length + naoResponderam };
})();
