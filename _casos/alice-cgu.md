---
title: "Alice: auditoria contínua de licitações"
resumo: "RPA e NLP analisam 100% das compras federais e sinalizam risco em dias — mais de R$ 9,7 bilhões em licitações suspensas ou canceladas."
tecnologia: "RPA + Processamento de Linguagem Natural (Python)"
principal_resultado: "Mais de R$ 9,7 bilhões em licitações suspensas ou canceladas entre 2019 e 2022 (jun)."
organizacao: "Controladoria-Geral da União (CGU)"
esfera: "Federal"
poder: "Executivo"
area: "Controle e auditoria"
localidade: "Brasil"
ano: "2014 (em operação)"
grau_risco: "médio"
status: "Em produção"
qualidade: "Informações de fontes públicas (CGU e apresentação na ONU)"
tags: ["Controle e auditoria", "Compras públicas", "RPA", "NLP", "Prevenção de fraude"]
problema: "As compras do Governo Federal movimentam cerca de 1,5% do PIB — aproximadamente R$ 119 bilhões em 2021 —, o que torna o setor criticamente vulnerável a fraudes e irregularidades. O modelo tradicional de auditoria, reativo e baseado em amostragem, ficou obsoleto diante do volume de transações: analisar manualmente cada edital é inviável, e a falha costuma ser detectada só depois do empenho do recurso (a 'intervenção destrutiva'), quando a recuperação do erário é cara e judicializada."
solucao: "A Alice (Analisadora de Licitações, Contratos e Editais) opera como auditoria contínua. Um robô de RPA coleta diariamente editais e metadados de Compras.gov.br, Licitações-e, do Diário Oficial da União e de bases estaduais; técnicas de Processamento de Linguagem Natural (em Python, pioneiras no governo em 2014) analisam o texto dos editais e cruzam dados de 23 bases para avaliar 40 tipologias de risco. Os indícios viram alertas diários por e-mail para auditores e órgãos compradores. O modelo é de auditoria por exceção: o software processa o volume colossal e reserva o julgamento humano apenas para os casos críticos. A equipe superou obstáculos concretos — a latência do sistema oficial, os captchas do Comprasnet e a burocracia de acesso — para viabilizar a coleta automatizada."
impacto: "Mais de R$ 9,7 bilhões em licitações suspensas ou canceladas por indícios de fraude ou erro (2019 a junho de 2022, pelos critérios da Portaria nº 1.976). Em 2021 o sistema processou 139.566 compras — 35.461 delas sob jurisdição da CGU —, gerando alertas em cerca de 13% dos processos, em média até 8 dias após a publicação do edital. O ganho de produtividade foi o que sustentou o controle mesmo com uma redução de 28% na força de trabalho da CGU entre 2012 e 2020: automação para 'fazer mais com menos', escalando a capacidade do servidor em vez de substituí-lo. A ferramenta foi apresentada na ONU como benchmark internacional no uso de tecnologia contra a corrupção."
governanca: "A CGU institucionalizou a Comissão Alice, um núcleo de governança que monitora e direciona a evolução da ferramenta. O desenho preserva a supervisão humana: a IA sinaliza, o auditor decide. Fatores centrais de sucesso foram o patrocínio da alta administração — para integrar os alertas ao fluxo de trabalho ordinário — e a transparência do processo. A atuação preventiva (antes da sessão pública) reduz o custo de mudança e o litígio."
aprendizados: "O êxito exigiu equilíbrio entre a audácia técnica da base (postura intraempreendedora, criatividade para vencer captcha e burocracia) e o patrocínio incondicional da alta administração. A automação não substitui o servidor: escala sua capacidade de defesa do patrimônio público num cenário de escassez de pessoal. Perspectivas: expansão federativa (levar a análise a estados e municípios), análise antecipada (atuar na fase de planejamento, antes do edital) e fortalecimento da governança para manter a IA ética e eficiente."
---

<div class="case-sec">
  <h2>Licitações suspensas ou canceladas, por ano</h2>
  <div class="bars">
    <div class="bar"><span class="yr">2019</span><span class="track"><span class="fill" style="width:100%"></span></span><span class="v">R$ 3,74 bi</span></div>
    <div class="bar"><span class="yr">2020</span><span class="track"><span class="fill" style="width:13.4%"></span></span><span class="v">R$ 0,50 bi</span></div>
    <div class="bar"><span class="yr">2021</span><span class="track"><span class="fill" style="width:72.2%"></span></span><span class="v">R$ 2,70 bi</span></div>
    <div class="bar"><span class="yr">2022*</span><span class="track"><span class="fill" style="width:73.8%"></span></span><span class="v">R$ 2,76 bi</span></div>
  </div>
  <p class="bars-cap">* 2022 até junho · total acumulado: R$ 9,7 bi · Fonte: Relato Técnico da CGU (Figura 5). O valor de 2019 vem de registros históricos; 2020–2022, do sistema e-Aud.</p>
</div>

<div class="case-sec">
  <h2>Tradicional × auditoria contínua</h2>
  <ul class="klist" style="margin-top:8px">
    <li><b>Escopo</b> Amostragem e denúncias pontuais → análise de 100% das transações.</li>
    <li><b>Tempestividade</b> Meses ou anos após o evento → em média até 8 dias após a publicação.</li>
    <li><b>Profundidade</b> Conformidade básica → 40 tipologias de risco avaliadas.</li>
    <li><b>Papel humano</b> Trabalho manual e repetitivo → julgamento estratégico dos alertas críticos.</li>
    <li><b>Impacto</b> Recuperação complexa e cara → prevenção e correção antes do pregão.</li>
  </ul>
</div>
