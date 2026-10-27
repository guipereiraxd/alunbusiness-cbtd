/* Hybrid Skills · motor de regras v2026-10-27.1
   Fonte: PRD Hybrid Skills v1.0, seções 6, 7 e 8. Determinístico e sem
   rede: as mesmas respostas, na mesma versão, dão o mesmo resultado.
   Nada aqui lê a tela; recebe objetos e devolve objetos. */
window.BBDW_REGRAS = (function(){
  var PARES = ["P1","P2","P3","P4","P5"];
  var ORIENTACOES = ["explorar","base","tecnica","humana","integrar","avancar"];

  function valido(v){ return typeof v === "number" && v >= 0 && v <= 3; }

  /* §6 Seleção da dupla: T é a média dos dois itens iniciais quando os
     dois são válidos. Com menos de dois, "informação insuficiente" e a
     média não entra em ranking. Nunca preenche ausentes. */
  function triagem(respostas){
    var out = {};
    PARES.forEach(function(p){
      var a = respostas[p+"A"], b = respostas[p+"B"];
      var n = (valido(a)?1:0) + (valido(b)?1:0);
      out[p] = { n:n, T: n === 2 ? (a+b)/2 : null };
    });
    return out;
  }

  /* objetivo específico → o par dele, mesmo sem respostas. "nao" ou
     vazio → menor T entre os completos; empate: ordem estável P1..P5.
     Nenhum completo → pedir escolha. */
  function sugerir(objetivo, tri){
    if (PARES.indexOf(objetivo) >= 0) return { par:objetivo, origem:"objetivo", empate:false };
    var completos = PARES.filter(function(p){ return tri[p].T !== null; });
    if (!completos.length) return { par:null, origem:"escolha", empate:false };
    var melhor = completos[0];
    completos.forEach(function(p){ if (tri[p].T < tri[melhor].T) melhor = p; });
    var empate = completos.filter(function(p){ return tri[p].T === tri[melhor].T; }).length > 1;
    return { par:melhor, origem:"triagem", empate:empate };
  }

  /* §6 Comportamento presente: entre itens válidos com 2 ou 3, o de
     maior valor; empate pela ordem dos IDs. Nenhum → null. */
  function comportamento(respostas, ids){
    var melhor = null;
    ids.forEach(function(id){
      var v = respostas[id];
      if (valido(v) && v >= 2 && (melhor === null || v > respostas[melhor])) melhor = id;
    });
    return melhor;
  }

  /* §6 Classificação da dupla aprofundada, condições em ordem. */
  function classificar(H, S, I){
    if (!valido(H) || !valido(S) || !valido(I)) return { orientacao:"explorar", neutro:false };
    var o;
    if (H <= 1 && S <= 1) o = "base";
    else if (H <= 1 && S >= 2) o = "tecnica";
    else if (S <= 1 && H >= 2) o = "humana";
    else if (I <= 1) o = "integrar";
    else o = "avancar";
    var neutro = I >= 2 && (H <= 1 || S <= 1);
    return { orientacao:o, neutro:neutro };
  }

  /* §8 Seleção de conteúdo: ativos, elegíveis para par e orientação,
     sem pré-requisito não verificado; ordem editorial, desempate por id.
     Um principal e até dois complementares. */
  function cursos(catalogo, par, orientacao){
    if (!catalogo || !catalogo.itens) return { principal:null, complementares:[] };
    var el = catalogo.itens.filter(function(i){
      if (!i.ativo) return false;
      if (i.prereq && i.prereq.length && !i.prereqVerificado) return false;
      return (i.rotas || []).some(function(r){ return r[0] === par && r[1] === orientacao; });
    });
    el.sort(function(a,b){ return (a.ordem - b.ordem) || (a.id < b.id ? -1 : a.id > b.id ? 1 : 0); });
    return { principal: el[0] || null, complementares: el.slice(1,3) };
  }

  function porque(item, par, orientacao){
    if (!item || !item.porque) return "";
    return item.porque[par+"/"+orientacao] || item.porque[par] || "";
  }

  /* Monta o resultado inteiro a partir do estado e dos conteúdos. */
  function resultado(estado, inst, cont, cat){
    var ids = inst.triagem.map(function(q){ return q.id; });
    var tri = triagem(estado.respostas || {});
    var par = estado.dupla && estado.dupla.par;
    if (!par) return null;
    var ap = estado.aprofundamento || {};
    var cls = classificar(ap.H, ap.S, ap.I);
    var comp = comportamento(estado.respostas || {}, ids);
    var chave = par + "/" + cls.orientacao;
    var dupla = cont.duplas[par];
    var sel = cursos(cat, par, cls.orientacao);
    var objetivoTexto = null;
    inst.objetivos.forEach(function(o){ if (o.id === estado.objetivo) objetivoTexto = o.r; });

    var motivo;
    switch (estado.dupla.origem){
      case "objetivo": motivo = "Você escolheu “" + (objetivoTexto || "") + "”; vamos explorar esta combinação."; break;
      case "manual":   motivo = "Você escolheu explorar esta combinação."; break;
      case "triagem":  motivo = "Pelas suas respostas iniciais, esta é a combinação com mais espaço para praticar."
                                + (estado.dupla.empate ? " Outra dupla ficou empatada; a escolha é sua." : ""); break;
      default:         motivo = "Faltaram respostas para sugerir uma dupla, então a escolha foi sua.";
    }

    return {
      versoes: { instrumento: inst.versao, regras: VERSAO, conteudo: cont.versao, catalogo: cat ? cat.versao : null },
      par: par, dupla: dupla, orientacao: cls.orientacao, neutro: cls.neutro,
      orientacaoTexto: cont.orientacoes[cls.orientacao],
      comportamento: comp ? { id:comp, texto: cont.comportamentos[comp], valor: estado.respostas[comp] } : null,
      semForca: cont.semForca,
      explicacao: (cont.explicacoes[chave] || "") + (cls.neutro ? " " + cont.neutro : ""),
      pratica: cont.praticas[chave] || null,
      exemplo: (cont.exemplos[par] || {})[estado.contexto === "nao" || !estado.contexto ? "trabalho" : estado.contexto] || null,
      motivo: motivo,
      triagem: tri,
      principal: sel.principal ? { item: sel.principal, porque: porque(sel.principal, par, cls.orientacao) } : null,
      complementares: sel.complementares.map(function(i){ return { item:i, porque: porque(i, par, cls.orientacao) }; })
    };
  }

  var VERSAO = "2026-10-27.1";
  return { versao: VERSAO, PARES: PARES, ORIENTACOES: ORIENTACOES, valido: valido,
           triagem: triagem, sugerir: sugerir, comportamento: comportamento,
           classificar: classificar, cursos: cursos, porque: porque, resultado: resultado };
})();
