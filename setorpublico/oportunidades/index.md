---
title: "Oportunidades"
description: "Mapa de oportunidades: onde a IA gera valor no setor público — por área, com nível de maturidade, complexidade, casos de uso, benefícios, riscos e casos reais relacionados."
---

<style>
  /* layout 2 colunas: sidebar sticky + painel */
  .op-shell{display:grid;grid-template-columns:280px 1fr;gap:40px;margin-top:40px;align-items:start}
  @media(max-width:900px){ .op-shell{grid-template-columns:1fr;gap:20px} }

  /* sidebar */
  .op-side{position:sticky;top:96px;display:grid;gap:6px;padding:0}
  @media(max-width:900px){ .op-side{position:static;display:flex;overflow-x:auto;gap:8px;padding:4px 0 12px;
    -webkit-overflow-scrolling:touch;scrollbar-width:thin}
    .op-side::-webkit-scrollbar{height:6px}
    .op-side::-webkit-scrollbar-thumb{background:var(--line2);border-radius:3px} }
  .op-tab{display:grid;grid-template-columns:36px 1fr;gap:12px;align-items:center;
    background:var(--paper);border:1px solid var(--line);border-radius:12px;padding:12px 14px;
    text-decoration:none;color:inherit;cursor:pointer;transition:border-color .15s,background .15s,transform .15s}
  @media(max-width:900px){ .op-tab{flex-shrink:0;min-width:220px;grid-template-columns:32px 1fr} }
  .op-tab:hover{border-color:var(--line2);transform:translateX(2px)}
  .op-tab.active{border-color:var(--brand-p);background:var(--tint-p);box-shadow:0 8px 24px -16px rgba(90,46,138,.35)}
  .op-tab .icb{width:36px;height:36px;border-radius:10px;background:var(--tint-b);color:var(--brand-b);display:grid;place-items:center}
  .op-tab.active .icb{background:#fff;color:var(--brand-p)}
  .op-tab .icb svg{width:18px;height:18px}
  .op-tab .nm{display:block;font-family:var(--disp);font-weight:600;font-size:14.5px;color:var(--ink);line-height:1.15}
  .op-tab .mt{display:block;font-family:var(--mono);font-size:10px;color:var(--tx3);letter-spacing:.06em;margin-top:4px;line-height:1.4}
  .op-tab.active .mt{color:var(--brand-p)}

  /* painel principal */
  .op-panel{display:none}
  .op-panel.active{display:block;animation:opFade .28s var(--ease)}
  @keyframes opFade{from{opacity:0;transform:translateY(6px)}to{opacity:1;transform:none}}

  .op-hero{background:linear-gradient(120deg,var(--tint-b) 0%,var(--tint-p) 100%);
    border:1px solid rgba(90,46,138,.15);border-radius:16px;padding:28px 32px}
  @media(max-width:640px){ .op-hero{padding:24px 22px} }
  .op-hero .cat{font-family:var(--mono);font-size:11px;color:var(--brand-p);letter-spacing:.14em;text-transform:uppercase}
  .op-hero h2{font-family:var(--disp);font-weight:600;font-size:32px;letter-spacing:-.02em;line-height:1.1;color:var(--ink2);margin:8px 0 0;max-width:24ch}
  .op-hero .lede{color:var(--tx);font-size:16.5px;line-height:1.6;margin-top:12px;max-width:60ch}

  /* indicadores maturidade/complexidade */
  .op-meta{display:flex;flex-wrap:wrap;gap:26px;margin-top:22px;padding-top:20px;border-top:1px solid rgba(90,46,138,.15)}
  .meta-item{min-width:180px}
  .meta-item .k{font-family:var(--mono);font-size:10px;color:var(--tx3);letter-spacing:.14em;text-transform:uppercase;margin-bottom:8px}
  .dots{display:flex;gap:5px;align-items:center}
  .dots i{width:10px;height:10px;border-radius:50%;background:var(--line2);display:inline-block}
  .dots i.on.mat1{background:#B84330}
  .dots i.on.mat2{background:#B07A16}
  .dots i.on.mat3{background:#2E7D46}
  .dots i.on.cx1{background:#2E7D46}
  .dots i.on.cx2{background:#B07A16}
  .dots i.on.cx3{background:#B84330}
  .dots .lbl{font-family:var(--disp);font-weight:600;font-size:14px;color:var(--ink);margin-left:8px}

  /* trio de colunas — reforçado */
  .op-trio{display:grid;grid-template-columns:repeat(3,1fr);gap:14px;margin-top:26px}
  @media(max-width:820px){ .op-trio{grid-template-columns:1fr;gap:12px} }
  .trio-col{background:var(--paper);border:1px solid var(--line);border-radius:12px;padding:20px 22px;position:relative;overflow:hidden}
  .trio-col::before{content:"";position:absolute;left:0;top:0;bottom:0;width:3px}
  .trio-col.uso::before{background:#4A82C4}
  .trio-col.ben::before{background:#2E7D46}
  .trio-col.risco::before{background:#B07A16}
  .trio-col h4{font-family:var(--disp);font-weight:600;font-size:14px;color:var(--ink);margin:0 0 12px;display:flex;align-items:center;gap:9px}
  .trio-col h4 svg{width:16px;height:16px}
  .trio-col.uso h4 svg{color:#4A82C4}
  .trio-col.ben h4 svg{color:#2E7D46}
  .trio-col.risco h4 svg{color:#B07A16}
  .trio-col ul{list-style:none;display:grid;gap:8px;padding:0;margin:0}
  .trio-col li{font-size:13.5px;color:var(--tx);line-height:1.5;padding-left:16px;position:relative}
  .trio-col.uso li::before{content:"·";position:absolute;left:0;color:#4A82C4;font-weight:800}
  .trio-col.ben li::before{content:"+";position:absolute;left:0;color:#2E7D46;font-weight:700;font-size:12px;top:1px}
  .trio-col.risco li::before{content:"!";position:absolute;left:0;color:#B07A16;font-weight:700;font-size:12px}

  /* casos relacionados */
  .op-cases{margin-top:32px}
  .op-cases-h{font-family:var(--mono);font-size:11px;color:var(--tx3);letter-spacing:.14em;text-transform:uppercase;margin-bottom:12px}
  .op-cases-h b{color:var(--brand-p);font-weight:600}
  .op-cases-empty{background:var(--paper);border:1px dashed var(--line2);border-radius:12px;padding:22px;
    color:var(--tx2);font-size:14px;text-align:center}
  .op-cases-empty a{color:var(--brand-p)}

  .op-cta{display:flex;gap:12px;flex-wrap:wrap;margin-top:28px}
</style>

<div class="wrap">
  <div class="page-head">
    <div class="crumb"><a href="{{ '/setorpublico/' | relative_url }}">Início</a> / Oportunidades</div>
    <h1>Mapa de oportunidades</h1>
    <p class="lede">Onde a IA gera valor no setor público — por área. Escolha a sua e veja o que se aplica, o nível de maturidade das aplicações, a complexidade típica dos projetos e os casos reais já em operação.</p>
  </div>

  <div class="op-shell">
    <!-- SIDEBAR: 6 áreas -->
    <nav class="op-side" id="op-side" role="tablist" aria-label="Áreas de oportunidade">
      <a class="op-tab active" data-area="atendimento" role="tab" aria-selected="true" href="#atendimento">
        <span class="icb"><svg><use href="#i-hands"></use></svg></span>
        <span><span class="nm">Atendimento ao cidadão</span><span class="mt">Maturidade alta · Complexidade baixa</span></span>
      </a>
      <a class="op-tab" data-area="processos" role="tab" aria-selected="false" href="#processos">
        <span class="icb"><svg><use href="#i-cases"></use></svg></span>
        <span><span class="nm">Processos administrativos</span><span class="mt">Maturidade alta · Complexidade média</span></span>
      </a>
      <a class="op-tab" data-area="compras" role="tab" aria-selected="false" href="#compras">
        <span class="icb"><svg><use href="#i-scale"></use></svg></span>
        <span><span class="nm">Compras e contratos</span><span class="mt">Maturidade baixa · Complexidade alta</span></span>
      </a>
      <a class="op-tab" data-area="controle" role="tab" aria-selected="false" href="#controle">
        <span class="icb"><svg><use href="#i-shield"></use></svg></span>
        <span><span class="nm">Controle e auditoria</span><span class="mt">Maturidade alta · Complexidade média</span></span>
      </a>
      <a class="op-tab" data-area="politicas" role="tab" aria-selected="false" href="#politicas">
        <span class="icb"><svg><use href="#i-chart"></use></svg></span>
        <span><span class="nm">Políticas públicas</span><span class="mt">Maturidade baixa · Complexidade alta</span></span>
      </a>
      <a class="op-tab" data-area="pessoas" role="tab" aria-selected="false" href="#pessoas">
        <span class="icb"><svg><use href="#i-path"></use></svg></span>
        <span><span class="nm">Gestão de pessoas</span><span class="mt">Maturidade média · Complexidade média</span></span>
      </a>
    </nav>

    <!-- PAINÉIS -->
    <div id="op-content">
      {% assign casos = site.casos %}

      {%- comment -%}Atendimento{%- endcomment -%}
      <section class="op-panel active" id="p-atendimento" role="tabpanel" aria-labelledby="atendimento" data-area="Atendimento ao cidadão">
        <div class="op-hero">
          <div class="cat">Área 01</div>
          <h2>Atendimento ao cidadão</h2>
          <p class="lede">É onde a IA chega mais rápido ao cidadão — e onde o erro é mais visível. Bem feita, reduz fila e barreira de acesso; mal feita, afasta justamente quem já tinha dificuldade. O segredo está no escopo: informar e encaminhar, mantendo sempre um canal humano.</p>
          <div class="op-meta">
            <div class="meta-item"><div class="k">Nível de maturidade</div>
              <div class="dots" role="img" aria-label="Maturidade alta"><i class="on mat3"></i><i class="on mat3"></i><i class="on mat3"></i><span class="lbl">Alta</span></div>
            </div>
            <div class="meta-item"><div class="k">Complexidade típica</div>
              <div class="dots" role="img" aria-label="Complexidade baixa"><i class="on cx1"></i><i></i><i></i><span class="lbl">Baixa</span></div>
            </div>
          </div>
        </div>
        <div class="op-trio">
          <div class="trio-col uso"><h4><svg><use href="#i-cases"></use></svg>Casos de uso</h4>
            <ul><li>Assistentes virtuais</li><li>Triagem de solicitações</li><li>Encaminhamento automático</li><li>Linguagem simples e tradução</li><li>Acessibilidade</li><li>Resumo de orientações</li><li>Identificação de demandas recorrentes</li></ul>
          </div>
          <div class="trio-col ben"><h4><svg><use href="#i-chart"></use></svg>Benefícios</h4>
            <ul><li>Atendimento contínuo</li><li>Menor tempo de resposta</li><li>Maior consistência</li><li>Redução de barreiras de acesso</li></ul>
          </div>
          <div class="trio-col risco"><h4><svg><use href="#i-shield"></use></svg>Riscos</h4>
            <ul><li>Respostas incorretas</li><li>Exclusão digital</li><li>Tratamento inadequado de dados</li><li>Falta de canal humano</li><li>Orientações desatualizadas</li></ul>
          </div>
        </div>
      </section>

      {%- comment -%}Processos{%- endcomment -%}
      <section class="op-panel" id="p-processos" role="tabpanel" aria-labelledby="processos" data-area="Processos administrativos">
        <div class="op-hero">
          <div class="cat">Área 02</div>
          <h2>Processos administrativos</h2>
          <p class="lede">O território dos ganhos silenciosos: ler, classificar, resumir e comparar documentos consome horas que a IA pode devolver. O risco mora no que passa sem revisão — e no que nunca deveria ter entrado num modelo.</p>
          <div class="op-meta">
            <div class="meta-item"><div class="k">Nível de maturidade</div>
              <div class="dots" role="img" aria-label="Maturidade alta"><i class="on mat3"></i><i class="on mat3"></i><i class="on mat3"></i><span class="lbl">Alta</span></div>
            </div>
            <div class="meta-item"><div class="k">Complexidade típica</div>
              <div class="dots" role="img" aria-label="Complexidade média"><i class="on cx2"></i><i class="on cx2"></i><i></i><span class="lbl">Média</span></div>
            </div>
          </div>
        </div>
        <div class="op-trio">
          <div class="trio-col uso"><h4><svg><use href="#i-cases"></use></svg>Casos de uso</h4>
            <ul><li>Classificação de documentos</li><li>Extração de informações</li><li>Resumos e comparação de versões</li><li>Produção de minutas</li><li>Pesquisa normativa</li><li>Gestão do conhecimento</li><li>Encaminhamento de processos</li></ul>
          </div>
          <div class="trio-col ben"><h4><svg><use href="#i-chart"></use></svg>Benefícios</h4>
            <ul><li>Redução de retrabalho</li><li>Maior velocidade</li><li>Padronização</li><li>Melhor acesso ao conhecimento institucional</li></ul>
          </div>
          <div class="trio-col risco"><h4><svg><use href="#i-shield"></use></svg>Riscos</h4>
            <ul><li>Uso de documentos sigilosos</li><li>Erros de interpretação</li><li>Perda de contexto</li><li>Automação sem revisão</li></ul>
          </div>
        </div>
      </section>

      {%- comment -%}Compras{%- endcomment -%}
      <section class="op-panel" id="p-compras" role="tabpanel" aria-labelledby="compras" data-area="Compras e contratos">
        <div class="op-hero">
          <div class="cat">Área 03</div>
          <h2>Compras e contratos</h2>
          <p class="lede">Da elaboração do edital ao acompanhamento do contrato, a IA amplia a capacidade de análise sobre um volume documental que ninguém lê inteiro. Exige cuidado com dados comerciais sensíveis e com a auditabilidade do que a máquina sugere.</p>
          <div class="op-meta">
            <div class="meta-item"><div class="k">Nível de maturidade</div>
              <div class="dots" role="img" aria-label="Maturidade baixa"><i class="on mat1"></i><i></i><i></i><span class="lbl">Baixa</span></div>
            </div>
            <div class="meta-item"><div class="k">Complexidade típica</div>
              <div class="dots" role="img" aria-label="Complexidade alta"><i class="on cx3"></i><i class="on cx3"></i><i class="on cx3"></i><span class="lbl">Alta</span></div>
            </div>
          </div>
        </div>
        <div class="op-trio">
          <div class="trio-col uso"><h4><svg><use href="#i-cases"></use></svg>Casos de uso</h4>
            <ul><li>Apoio a termos de referência</li><li>Pesquisa de requisitos</li><li>Comparação de propostas</li><li>Análise documental</li><li>Monitoramento de preços</li><li>Identificação de riscos</li><li>Acompanhamento de contratos</li></ul>
          </div>
          <div class="trio-col ben"><h4><svg><use href="#i-chart"></use></svg>Benefícios</h4>
            <ul><li>Melhoria da qualidade documental</li><li>Maior capacidade de análise</li><li>Redução de inconsistências</li><li>Apoio à fiscalização</li></ul>
          </div>
          <div class="trio-col risco"><h4><svg><use href="#i-shield"></use></svg>Riscos</h4>
            <ul><li>Dependência de fornecedor</li><li>Dados comerciais sensíveis</li><li>Recomendações enviesadas</li><li>Falta de auditabilidade</li></ul>
          </div>
        </div>
      </section>

      {%- comment -%}Controle{%- endcomment -%}
      <section class="op-panel" id="p-controle" role="tabpanel" aria-labelledby="controle" data-area="Controle e auditoria">
        <div class="op-hero">
          <div class="cat">Área 04</div>
          <h2>Controle e auditoria</h2>
          <p class="lede">A frente mais madura no Brasil. A IA transforma o controle de reativo em contínuo: analisa 100% em vez de amostra, prioriza o que é crítico e permite agir antes do dano. Os riscos são o falso positivo e o viés herdado dos dados históricos.</p>
          <div class="op-meta">
            <div class="meta-item"><div class="k">Nível de maturidade</div>
              <div class="dots" role="img" aria-label="Maturidade alta"><i class="on mat3"></i><i class="on mat3"></i><i class="on mat3"></i><span class="lbl">Alta</span></div>
            </div>
            <div class="meta-item"><div class="k">Complexidade típica</div>
              <div class="dots" role="img" aria-label="Complexidade média"><i class="on cx2"></i><i class="on cx2"></i><i></i><span class="lbl">Média</span></div>
            </div>
          </div>
        </div>
        <div class="op-trio">
          <div class="trio-col uso"><h4><svg><use href="#i-cases"></use></svg>Casos de uso</h4>
            <ul><li>Detecção de anomalias</li><li>Priorização de auditorias</li><li>Cruzamento de bases</li><li>Análise de prestações de contas</li><li>Identificação de padrões</li><li>Monitoramento de contratos</li></ul>
          </div>
          <div class="trio-col ben"><h4><svg><use href="#i-chart"></use></svg>Benefícios</h4>
            <ul><li>Ampliação de cobertura</li><li>Atuação preventiva</li><li>Melhor alocação de recursos</li><li>Identificação mais rápida de riscos</li></ul>
          </div>
          <div class="trio-col risco"><h4><svg><use href="#i-shield"></use></svg>Riscos</h4>
            <ul><li>Falsos positivos</li><li>Falta de explicabilidade</li><li>Viés histórico</li><li>Impactos reputacionais</li></ul>
          </div>
        </div>
      </section>

      {%- comment -%}Políticas{%- endcomment -%}
      <section class="op-panel" id="p-politicas" role="tabpanel" aria-labelledby="politicas" data-area="Formulação de políticas">
        <div class="op-hero">
          <div class="cat">Área 05</div>
          <h2>Formulação de políticas públicas</h2>
          <p class="lede">Aqui a IA apoia o raciocínio — sintetiza evidências, simula cenários, segmenta públicos — sem substituir a decisão política. O maior risco é confundir correlação com causa e perder o contexto social por trás do número.</p>
          <div class="op-meta">
            <div class="meta-item"><div class="k">Nível de maturidade</div>
              <div class="dots" role="img" aria-label="Maturidade baixa"><i class="on mat1"></i><i></i><i></i><span class="lbl">Baixa</span></div>
            </div>
            <div class="meta-item"><div class="k">Complexidade típica</div>
              <div class="dots" role="img" aria-label="Complexidade alta"><i class="on cx3"></i><i class="on cx3"></i><i class="on cx3"></i><span class="lbl">Alta</span></div>
            </div>
          </div>
        </div>
        <div class="op-trio">
          <div class="trio-col uso"><h4><svg><use href="#i-cases"></use></svg>Casos de uso</h4>
            <ul><li>Síntese de evidências</li><li>Análise de consultas</li><li>Construção de cenários</li><li>Simulação de impactos</li><li>Segmentação de públicos</li><li>Monitoramento de indicadores</li><li>Avaliação de políticas</li></ul>
          </div>
          <div class="trio-col ben"><h4><svg><use href="#i-chart"></use></svg>Benefícios</h4>
            <ul><li>Melhor uso de evidências</li><li>Maior velocidade de análise</li><li>Ampliação de repertório</li><li>Monitoramento mais contínuo</li></ul>
          </div>
          <div class="trio-col risco"><h4><svg><use href="#i-shield"></use></svg>Riscos</h4>
            <ul><li>Dados incompletos</li><li>Modelos inadequados</li><li>Confusão entre correlação e causalidade</li><li>Recomendações sem contexto social</li></ul>
          </div>
        </div>
      </section>

      {%- comment -%}Pessoas{%- endcomment -%}
      <section class="op-panel" id="p-pessoas" role="tabpanel" aria-labelledby="pessoas" data-area="Gestão de pessoas">
        <div class="op-hero">
          <div class="cat">Área 06</div>
          <h2>Gestão de pessoas</h2>
          <p class="lede">Do letramento à alocação de talentos, a IA ajuda a desenvolver e organizar as equipes. É também a área mais sensível em dados pessoais: avaliação automatizada e discriminação são riscos que pedem transparência e supervisão.</p>
          <div class="op-meta">
            <div class="meta-item"><div class="k">Nível de maturidade</div>
              <div class="dots" role="img" aria-label="Maturidade média"><i class="on mat2"></i><i class="on mat2"></i><i></i><span class="lbl">Média</span></div>
            </div>
            <div class="meta-item"><div class="k">Complexidade típica</div>
              <div class="dots" role="img" aria-label="Complexidade média"><i class="on cx2"></i><i class="on cx2"></i><i></i><span class="lbl">Média</span></div>
            </div>
          </div>
        </div>
        <div class="op-trio">
          <div class="trio-col uso"><h4><svg><use href="#i-cases"></use></svg>Casos de uso</h4>
            <ul><li>Mapeamento de competências</li><li>Recomendação de aprendizagem</li><li>Integração de servidores</li><li>Assistentes internos</li><li>Gestão do conhecimento</li><li>Planejamento da força de trabalho</li></ul>
          </div>
          <div class="trio-col ben"><h4><svg><use href="#i-chart"></use></svg>Benefícios</h4>
            <ul><li>Desenvolvimento personalizado</li><li>Melhor acesso ao conhecimento</li><li>Redução de tempo administrativo</li><li>Identificação de lacunas de competências</li></ul>
          </div>
          <div class="trio-col risco"><h4><svg><use href="#i-shield"></use></svg>Riscos</h4>
            <ul><li>Uso inadequado de dados pessoais</li><li>Avaliações automatizadas</li><li>Discriminação</li><li>Falta de transparência</li></ul>
          </div>
        </div>
      </section>

      {%- comment -%}Casos relacionados + CTA — gerados por JS a partir dos data-area{%- endcomment -%}
      <div id="op-related-slot"></div>
    </div>
  </div>
</div>

<script type="application/json" id="op-casos-data">
[{% for c in site.casos %}
  {"url":{{ c.url | relative_url | jsonify }},"title":{{ c.title | jsonify }},"org":{{ c.organizacao | jsonify }},"area":{{ c.area | jsonify }},"resumo":{{ c.resumo | jsonify }},"principal":{{ c.principal_resultado | jsonify }}}{% unless forloop.last %},{% endunless %}
{% endfor %}]
</script>

{% raw %}
<script>
(function(){
  var tabs = [].slice.call(document.querySelectorAll('.op-tab'));
  var panels = [].slice.call(document.querySelectorAll('.op-panel'));
  var slot = document.getElementById('op-related-slot');
  if(!tabs.length) return;

  var CASOS = [];
  try{ CASOS = JSON.parse(document.getElementById('op-casos-data').textContent); }catch(e){}

  function areaSlug(area){
    var m = { 'atendimento':'Atendimento ao cidadão','processos':'Processos administrativos','compras':'Compras e contratos','controle':'Controle e auditoria','politicas':'Formulação de políticas','pessoas':'Gestão de pessoas' };
    return m[area];
  }
  function esc(s){ return String(s||'').replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;'); }

  function renderRelated(area){
    var full = areaSlug(area);
    var rel = CASOS.filter(function(c){ return c.area === full; });
    var qs = '?area=' + encodeURIComponent(full);
    var html = '<section class="op-cases">';
    html += '<div class="op-cases-h">Casos reais nesta área · <b>' + rel.length + '</b></div>';
    if(rel.length){
      html += '<div class="cards c3">';
      rel.forEach(function(c){
        html += '<a class="card" href="'+c.url+'">'+
                '<div class="card-k">'+esc(c.org)+'</div>'+
                '<h3>'+esc(c.title)+'</h3>'+
                '<p>'+esc(c.principal || c.resumo || '')+'</p>'+
                '<span class="go">Ler o caso →</span>'+
              '</a>';
      });
      html += '</div>';
    } else {
      html += '<div class="op-cases-empty">Ainda não temos casos catalogados nesta área. <a href="/setorpublico/casos/'+qs+'">Ver a biblioteca completa</a> ou <a href="/setorpublico/contato/">indicar um caso</a>.</div>';
    }
    html += '<div class="op-cta">'+
              '<a class="btn btn-primary" href="/setorpublico/casos/'+qs+'">Ver casos filtrados <svg width="16" height="16" aria-hidden="true"><use href="#i-arrow"></use></svg></a>'+
              '<a class="btn btn-line" href="/setorpublico/diagnostico/">Fazer diagnóstico</a>'+
              '<a class="btn btn-line" href="/setorpublico/ferramentas/priorizador/">Priorizar um caso</a>'+
            '</div>';
    html += '</section>';
    slot.innerHTML = html;
  }

  function activate(area, updateHash){
    tabs.forEach(function(t){
      var on = t.getAttribute('data-area') === area;
      t.classList.toggle('active', on);
      t.setAttribute('aria-selected', on ? 'true' : 'false');
    });
    panels.forEach(function(p){
      p.classList.toggle('active', p.id === 'p-'+area);
    });
    renderRelated(area);
    if(updateHash){ history.replaceState(null, '', '#'+area); }
  }

  tabs.forEach(function(t){
    t.addEventListener('click', function(ev){
      ev.preventDefault();
      activate(t.getAttribute('data-area'), true);
      // scroll suave para o topo do painel (útil no mobile)
      if(window.innerWidth <= 900){ document.getElementById('op-content').scrollIntoView({behavior:'smooth',block:'start'}); }
    });
  });

  // deep-link inicial
  var initial = (location.hash || '').slice(1);
  var validAreas = tabs.map(function(t){return t.getAttribute('data-area');});
  activate(validAreas.indexOf(initial) > -1 ? initial : 'atendimento', false);

  window.addEventListener('hashchange', function(){
    var h = (location.hash || '').slice(1);
    if(validAreas.indexOf(h) > -1) activate(h, false);
  });
})();
</script>
{% endraw %}
