---
title: "Trilhas"
description: "Trilhas de aprendizagem por perfil, do letramento à liderança da transformação — com sugestões de conteúdos reais do ecossistema Alun (Alura, FIAP, PM3, StartSe)."
---

<style>
  .trilha{background:var(--paper);border:1px solid var(--line);border-radius:16px;padding:28px;
    transition:transform .18s var(--ease),border-color .18s ease,box-shadow .18s ease}
  .trilha:hover{transform:translateY(-2px);border-color:var(--line2);box-shadow:0 16px 40px -20px rgba(20,20,40,.15)}
  .trilha-head{display:flex;justify-content:space-between;align-items:baseline;gap:12px;flex-wrap:wrap}
  .trilha-k{font-family:var(--mono);font-size:10.5px;color:var(--brand-p);letter-spacing:.14em;text-transform:uppercase;background:var(--tint-p);padding:4px 9px;border-radius:5px}
  .trilha h3{font-family:var(--disp);font-weight:600;font-size:22px;color:var(--ink);margin:12px 0 0;line-height:1.2}
  .trilha .pub{font-family:var(--mono);font-size:11px;color:var(--tx3);letter-spacing:.05em;margin-top:6px}
  .trilha .obj{color:var(--tx);font-size:14.5px;line-height:1.6;margin-top:14px}
  .trilha-cols{display:grid;grid-template-columns:1fr 1fr;gap:24px;margin-top:22px;padding-top:22px;border-top:1px solid var(--line)}
  @media(max-width:720px){ .trilha-cols{grid-template-columns:1fr;gap:18px} }
  .col-h{font-family:var(--mono);font-size:10px;color:var(--tx3);letter-spacing:.14em;text-transform:uppercase;margin-bottom:10px;display:flex;align-items:center;gap:8px}
  .col-h::before{content:"";width:14px;height:1px;background:var(--brand-p)}
  .mod-tags{display:flex;flex-wrap:wrap;gap:6px}
  .mod-tags span{font-family:var(--mono);font-size:11px;color:var(--tx2);border:1px solid var(--line2);border-radius:6px;padding:4px 9px;background:var(--paper)}
  .sug{list-style:none;display:grid;gap:8px}
  .sug li{font-size:13.5px;color:var(--tx);line-height:1.45;padding-left:60px;position:relative;min-height:20px;display:flex;align-items:center}
  .sug .bg{position:absolute;left:0;top:0;font-family:var(--mono);font-size:9.5px;font-weight:700;letter-spacing:.06em;text-transform:uppercase;padding:3px 7px;border-radius:5px;line-height:1.2}
  .bg-alura{background:#0F4FB5;color:#fff}
  .bg-fiap{background:#ED1846;color:#fff}
  .bg-pm3{background:#1A1A2E;color:#fff}
  .bg-startse{background:#F26522;color:#fff}
</style>

<div class="wrap">
  <div class="page-head">
    <div class="crumb"><a href="{{ '/setorpublico/' | relative_url }}">Início</a> / Trilhas</div>
    <h1>Trilhas de aprendizagem por perfil</h1>
    <p class="lede">Sete caminhos de capacitação — da alta liderança à execução — com os módulos essenciais para cada papel e sugestões de conteúdos reais do <a href="{{ '/setorpublico/sobre/' | relative_url }}">ecossistema Alun</a>: cursos e formações da Alura, MBAs da FIAP, cursos da PM3 e imersões da StartSe.</p>
  </div>

  <section class="blk" style="border-bottom:0;padding-top:40px;padding-bottom:60px">
    <div class="cards c2 rv" style="grid-template-columns:1fr;gap:16px">

      <div class="trilha card" style="padding:28px">
        <div class="trilha-head">
          <div>
            <span class="trilha-k">Trilha 01</span>
            <h3>Para a alta liderança</h3>
            <div class="pub">Secretários · presidentes · diretores · superintendentes</div>
          </div>
        </div>
        <p class="obj">Entender o impacto estratégico da IA no Estado, definir prioridades e liderar a transformação com governança e responsabilidade.</p>
        <div class="trilha-cols">
          <div>
            <div class="col-h">Módulos customizáveis</div>
            <div class="mod-tags"><span>O que a IA muda no Estado</span><span>Estratégia de IA na esfera pública</span><span>Como medir valor público</span><span>Portfólio: onde investir primeiro</span><span>Governança institucional</span><span>Riscos que a liderança precisa ver</span><span>Conduzir a transformação</span></div>
          </div>
          <div>
            <div class="col-h">Alguns cursos do Grupo Alun</div>
            <ul class="sug">
              <li><span class="bg bg-fiap">FIAP</span>MBA em AI Leadership: Strategy, Governance &amp; Scale</li>
              <li><span class="bg bg-fiap">FIAP</span>MBA em Gestão Estratégica de Negócios na Era da IA</li>
              <li><span class="bg bg-startse">StartSe</span>Global MBA + imersões internacionais</li>
              <li><span class="bg bg-alura">Alura</span>Formação Começando no mundo da IA</li>
            </ul>
          </div>
        </div>
      </div>

      <div class="trilha card" style="padding:28px">
        <div class="trilha-head">
          <div>
            <span class="trilha-k">Trilha 02</span>
            <h3>Para gestores de áreas finalísticas</h3>
            <div class="pub">Saúde · Educação · Justiça · Segurança · Assistência · Fazenda · Atendimento</div>
          </div>
        </div>
        <p class="obj">Identificar problemas adequados à IA, redesenhar processos e conduzir experimentos com método — sem depender do técnico para todo o percurso.</p>
        <div class="trilha-cols">
          <div>
            <div class="col-h">Módulos customizáveis</div>
            <div class="mod-tags"><span>Que problema vale usar IA?</span><span>Casos de uso que funcionam no setor público</span><span>Redesenhar o processo com IA</span><span>Do papel à prototipação</span><span>Como medir se deu certo</span><span>Levar a equipe junto</span></div>
          </div>
          <div>
            <div class="col-h">Alguns cursos do Grupo Alun</div>
            <ul class="sug">
              <li><span class="bg bg-pm3">PM3</span>Product Discovery — identificar problemas e oportunidades</li>
              <li><span class="bg bg-pm3">PM3</span>Product Management — do problema ao produto</li>
              <li><span class="bg bg-pm3">PM3</span>Product Analytics — decisão orientada por dados</li>
              <li><span class="bg bg-alura">Alura</span>Escola de IA — categoria IA para Produto &amp; Negócio</li>
            </ul>
          </div>
        </div>
      </div>

      <div class="trilha card" style="padding:28px">
        <div class="trilha-head">
          <div>
            <span class="trilha-k">Trilha 03</span>
            <h3>Para tecnologia, dados e inovação</h3>
            <div class="pub">CIOs · CTOs · analistas · cientistas de dados · arquitetos · governo digital</div>
          </div>
        </div>
        <p class="obj">Arquitetar, integrar e operar soluções de IA com segurança e observabilidade — do modelo à operação em produção.</p>
        <div class="trilha-cols">
          <div>
            <div class="col-h">Módulos customizáveis</div>
            <div class="mod-tags"><span>Arquitetura de soluções de IA</span><span>Dados: qualidade, integração e governança</span><span>Escolher o modelo certo</span><span>RAG e busca aumentada</span><span>Integração com sistemas legados</span><span>Segurança em ambientes públicos</span><span>Como avaliar um modelo</span><span>Observabilidade em produção</span><span>Operar IA em escala</span></div>
          </div>
          <div>
            <div class="col-h">Alguns cursos do Grupo Alun</div>
            <ul class="sug">
              <li><span class="bg bg-alura">Alura</span>Formação Data Science</li>
              <li><span class="bg bg-alura">Alura</span>Formação Machine Learning na prática</li>
              <li><span class="bg bg-alura">Alura</span>Formação Machine Learning Avançada (NLP, Visão)</li>
              <li><span class="bg bg-alura">Alura</span>Escola de IA — LLMs, agentes e IA generativa</li>
              <li><span class="bg bg-fiap">FIAP</span>MBA em Data Science &amp; Artificial Intelligence</li>
            </ul>
          </div>
        </div>
      </div>

      <div class="trilha card" style="padding:28px">
        <div class="trilha-head">
          <div>
            <span class="trilha-k">Trilha 04</span>
            <h3>Para jurídico e proteção de dados</h3>
            <div class="pub">Procuradorias · encarregados de dados · assessorias jurídicas</div>
          </div>
        </div>
        <p class="obj">Fundamentar o uso de IA em finalidade, bases legais e direitos, com transparência, avaliação de impacto e contestação para o cidadão.</p>
        <div class="trilha-cols">
          <div>
            <div class="col-h">Módulos customizáveis</div>
            <div class="mod-tags"><span>Finalidade e legitimidade do uso</span><span>Bases legais da LGPD para IA</span><span>Tratamento de dados pessoais</span><span>Direitos do cidadão</span><span>Transparência algorítmica</span><span>Contestação de decisões automatizadas</span><span>Avaliação de impacto (RIPD/AIPD)</span><span>Cláusulas contratuais essenciais</span></div>
          </div>
          <div>
            <div class="col-h">Alguns cursos do Grupo Alun</div>
            <ul class="sug">
              <li><span class="bg bg-alura">Alura</span>Formação Governança de IA: fundamentos, ética e gestão de riscos</li>
              <li><span class="bg bg-alura">Alura</span>Governança de dados — privacidade e proteção (LGPD)</li>
              <li><span class="bg bg-alura">Alura</span>Governança de IA: estratégias éticas e compliance (LGPD, GDPR, AI Act)</li>
            </ul>
          </div>
        </div>
      </div>

      <div class="trilha card" style="padding:28px">
        <div class="trilha-head">
          <div>
            <span class="trilha-k">Trilha 05</span>
            <h3>Para compras e contratações</h3>
            <div class="pub">Áreas de licitação · gestores de contrato · assessorias técnicas</div>
          </div>
        </div>
        <p class="obj">Contratar IA com bons critérios técnicos, segurança de dados, portabilidade e prevenção de dependência de fornecedor.</p>
        <div class="trilha-cols">
          <div>
            <div class="col-h">Módulos customizáveis</div>
            <div class="mod-tags"><span>Escrever o termo de referência</span><span>Como avaliar fornecedores de IA</span><span>Prova de conceito antes de contratar</span><span>Titularidade e uso dos dados</span><span>Requisitos de segurança</span><span>Direito de auditoria</span><span>Portabilidade e prevenção de dependência</span><span>Gestão do contrato ao longo do tempo</span></div>
          </div>
          <div>
            <div class="col-h">Alguns cursos do Grupo Alun</div>
            <ul class="sug">
              <li><span class="bg bg-fiap">FIAP</span>MBA em Gestão da Tecnologia da Informação</li>
              <li><span class="bg bg-alura">Alura</span>Escola de IA — categoria IA para Produto &amp; Negócio</li>
              <li><span class="bg bg-alura">Alura</span>Governança de IA — compliance na contratação</li>
              <li><span class="bg bg-pm3">PM3</span>Product Analytics — critérios de avaliação técnica</li>
            </ul>
          </div>
        </div>
      </div>

      <div class="trilha card" style="padding:28px">
        <div class="trilha-head">
          <div>
            <span class="trilha-k">Trilha 06</span>
            <h3>Para controle e auditoria</h3>
            <div class="pub">TCU · TCEs · CGU · controladorias · corregedorias · ministério público</div>
          </div>
        </div>
        <p class="obj">Auditar algoritmos, avaliar evidências e vieses, monitorar sistemas e prestar contas sobre o uso de IA no Estado.</p>
        <div class="trilha-cols">
          <div>
            <div class="col-h">Módulos customizáveis</div>
            <div class="mod-tags"><span>Como auditar um algoritmo</span><span>Evidências e trilhas de decisão</span><span>Riscos em sistemas de IA</span><span>Vieses e discriminação algorítmica</span><span>Monitoramento contínuo</span><span>Prestação de contas ao cidadão</span></div>
          </div>
          <div>
            <div class="col-h">Alguns cursos do Grupo Alun</div>
            <ul class="sug">
              <li><span class="bg bg-fiap">FIAP</span>MBA em Business Intelligence &amp; Analytics</li>
              <li><span class="bg bg-alura">Alura</span>Formação Machine Learning — modelos, avaliação e vieses</li>
              <li><span class="bg bg-alura">Alura</span>Governança de IA — auditoria e monitoramento</li>
              <li><span class="bg bg-alura">Alura</span>Escola de Dados — BI, SQL e visualização</li>
            </ul>
          </div>
        </div>
      </div>

      <div class="trilha card" style="padding:28px">
        <div class="trilha-head">
          <div>
            <span class="trilha-k">Trilha 07</span>
            <h3>Para gestão de pessoas e escolas de governo</h3>
            <div class="pub">RH · gestão da mudança · escolas de governo · comunidades de prática</div>
          </div>
        </div>
        <p class="obj">Desenvolver letramento e competências em IA, formar por função, cuidar da cultura e desenhar os novos papéis profissionais da administração pública.</p>
        <div class="trilha-cols">
          <div>
            <div class="col-h">Módulos customizáveis</div>
            <div class="mod-tags"><span>Letramento em IA para servidores</span><span>Mapear as competências necessárias</span><span>Formação por função</span><span>Comunidades de prática</span><span>Cultura de experimentação</span><span>Novos papéis profissionais</span><span>Gestão da mudança</span></div>
          </div>
          <div>
            <div class="col-h">Alguns cursos do Grupo Alun</div>
            <ul class="sug">
              <li><span class="bg bg-alura">Alura</span>Escola de Inovação &amp; Gestão — 400+ cursos de liderança e soft skills</li>
              <li><span class="bg bg-alura">Alura</span>Formação Inovação para Líderes</li>
              <li><span class="bg bg-alura">Alura</span>Liderança Ágil — aprimoramento de soft skills</li>
              <li><span class="bg bg-pm3">PM3</span>Product Leadership — liderar times de produto</li>
              <li><span class="bg bg-fiap">FIAP</span>MBA em Gestão Estratégica de Negócios na Era da IA</li>
            </ul>
          </div>
        </div>
      </div>

    </div>

    <div class="note" style="margin-top:32px"><b>Como estruturar para a sua equipe?</b> As sugestões acima são <b>orientativas</b> e podem ser customizadas de acordo com seu objetivo. Para desenhar uma trilha institucional sob medida — combinando conteúdos, workshops, mentoria e mensuração de impacto — <a href="{{ '/setorpublico/contato/' | relative_url }}">entre em contato com a Alun Business</a>.</div>
  </section>
</div>
