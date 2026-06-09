---
layout: default
title: Leituras Recomendadas
description: Livros, artigos e pensadores que moldam minha visão sobre T&D, estratégia e transformação organizacional.
---

<style>
/* ── Page header ─────────────────────────────────────────── */
.lr-intro {
  font-size: 1.05rem;
  color: var(--text-2);
  line-height: 1.7;
  max-width: 640px;
  margin-bottom: 2.5rem;
}

/* ── Section labels ──────────────────────────────────────── */
.lr-section {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 3px;
  text-transform: uppercase;
  color: var(--text-4);
  margin: 2.5rem 0 1.25rem;
}
.lr-section::after {
  content: "";
  flex: 1;
  height: 1px;
  background: var(--border-sub);
}

/* ── Book grid ───────────────────────────────────────────── */
.book-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  margin-bottom: 0.5rem;
}
@media (max-width: 860px) { .book-grid { grid-template-columns: 1fr; } }

/* ── Book card ───────────────────────────────────────────── */
.book-card {
  display: flex;
  gap: 1rem;
  background: var(--surface);
  border: 1px solid var(--border-sub);
  border-left: 3px solid var(--gold);
  border-radius: 8px;
  padding: 1rem;
  transition: border-color 0.15s, background 0.15s;
}
.book-card:hover {
  background: var(--surface-2);
  border-left-color: var(--gold);
  border-color: var(--gold-border);
}
.book-cover-wrap {
  flex-shrink: 0;
  width: 72px;
}
.book-cover {
  width: 72px;
  height: 108px;
  object-fit: cover;
  border-radius: 4px;
  background: var(--surface-2);
  display: block;
}
.book-cover-placeholder {
  width: 72px;
  height: 108px;
  border-radius: 4px;
  background: var(--surface-2);
  border: 1px solid var(--border-sub);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 22px;
  color: var(--text-5);
}
.book-info { flex: 1; min-width: 0; }
.book-cat {
  font-size: 9px;
  font-weight: 700;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: var(--gold);
  margin-bottom: 5px;
}
.book-title {
  font-size: 0.95rem;
  font-weight: 700;
  color: var(--text-1);
  line-height: 1.3;
  margin-bottom: 3px;
}
.book-author {
  font-size: 0.78rem;
  color: var(--text-3);
  margin-bottom: 10px;
}
.book-why {
  font-size: 0.82rem;
  color: var(--text-2);
  line-height: 1.55;
  margin-bottom: 12px;
}
.book-link {
  display: inline-flex;
  align-items: center;
  gap: 5px;
  font-size: 0.75rem;
  font-weight: 600;
  color: var(--gold);
  text-decoration: none;
  border: 1px solid var(--gold-border);
  border-radius: 4px;
  padding: 4px 10px;
  transition: background 0.15s;
}
.book-link:hover { background: var(--gold-dim); }
.book-link svg { width: 11px; height: 11px; fill: currentColor; flex-shrink: 0; }

/* ── Articles list ───────────────────────────────────────── */
.article-group { margin-bottom: 1.5rem; }
.article-group-title {
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: var(--text-4);
  margin-bottom: 0.75rem;
}
.article-item {
  display: flex;
  gap: 0.75rem;
  padding: 0.75rem 1rem;
  background: var(--surface);
  border: 1px solid var(--border-sub);
  border-radius: 6px;
  margin-bottom: 0.5rem;
}
.article-item:last-child { margin-bottom: 0; }
.article-dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: var(--gold);
  flex-shrink: 0;
  margin-top: 6px;
}
.article-body {}
.article-name {
  font-size: 0.875rem;
  font-weight: 600;
  color: var(--text-1);
  line-height: 1.3;
  margin-bottom: 3px;
}
.article-source {
  font-size: 0.78rem;
  color: var(--text-3);
  margin-bottom: 4px;
}
.article-note {
  font-size: 0.8rem;
  color: var(--text-2);
  line-height: 1.5;
}

/* ── Follow grid ─────────────────────────────────────────── */
.follow-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0.75rem;
}
@media (max-width: 640px) { .follow-grid { grid-template-columns: 1fr 1fr; } }

.follow-card {
  background: var(--surface);
  border: 1px solid var(--border-sub);
  border-radius: 8px;
  padding: 1rem;
  text-decoration: none;
  display: block;
  transition: border-color 0.15s, background 0.15s;
}
.follow-card:hover {
  background: var(--surface-2);
  border-color: var(--border);
}
.follow-name {
  font-size: 0.9rem;
  font-weight: 700;
  color: var(--text-1);
  margin-bottom: 3px;
}
.follow-area {
  font-size: 0.75rem;
  color: var(--gold);
  margin-bottom: 6px;
}
.follow-desc {
  font-size: 0.78rem;
  color: var(--text-3);
  line-height: 1.5;
}
</style>

# Leituras Recomendadas

<p class="lr-intro">
Uma curadoria do que realmente leio, releio e recomendo — livros, pesquisas e pensadores que moldam minha visão sobre T&D, estratégia e transformação organizacional. Atualizado sempre que algo novo entra na lista.
</p>

<div class="lr-section">Livros</div>

<div class="lr-section" style="margin-top:0;margin-bottom:0.75rem;font-size:9px;color:var(--text-4);letter-spacing:2px;">Estratégia</div>

<div class="book-grid">

<div class="book-card">
  <div class="book-cover-wrap">
    <img class="book-cover"
         src="https://covers.openlibrary.org/b/isbn/9781422187395-L.jpg"
         alt="Playing to Win"
         onerror="this.style.display='none';this.nextElementSibling.style.display='flex'">
    <div class="book-cover-placeholder" style="display:none">📖</div>
  </div>
  <div class="book-info">
    <div class="book-cat">Estratégia</div>
    <div class="book-title">Playing to Win</div>
    <div class="book-author">A.G. Lafley & Roger Martin · 2013</div>
    <p class="book-why">O melhor livro sobre o que estratégia realmente é. O framework Where to Play & How to Win é simples o suficiente para caber em um slide e profundo o suficiente para reorganizar uma área inteira de T&D.</p>
    <a class="book-link" href="https://www.amazon.com.br/s?k=Playing+to+Win+Lafley+Roger+Martin&i=stripbooks" target="_blank" rel="noopener">
      <svg viewBox="0 0 24 24"><path d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"/></svg>
      Ver na Amazon
    </a>
  </div>
</div>

<div class="book-card">
  <div class="book-cover-wrap">
    <img class="book-cover"
         src="https://covers.openlibrary.org/b/isbn/9780307886231-L.jpg"
         alt="Good Strategy Bad Strategy"
         onerror="this.style.display='none';this.nextElementSibling.style.display='flex'">
    <div class="book-cover-placeholder" style="display:none">📖</div>
  </div>
  <div class="book-info">
    <div class="book-cat">Estratégia</div>
    <div class="book-title">Good Strategy / Bad Strategy</div>
    <div class="book-author">Richard Rumelt · 2011</div>
    <p class="book-why">Rumelt é direto: a maioria das "estratégias" corporativas são listas de intenções disfarçadas. Ele define com precisão o que separa um diagnóstico real de uma wishlist — leitura obrigatória antes de qualquer planejamento.</p>
    <a class="book-link" href="https://www.amazon.com.br/s?k=Good+Strategy+Bad+Strategy+Rumelt&i=stripbooks" target="_blank" rel="noopener">
      <svg viewBox="0 0 24 24"><path d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"/></svg>
      Ver na Amazon
    </a>
  </div>
</div>

</div>

<div class="lr-section" style="margin-top:1.25rem;margin-bottom:0.75rem;font-size:9px;color:var(--text-4);letter-spacing:2px;">Transformação e Mudança</div>

<div class="book-grid">

<div class="book-card">
  <div class="book-cover-wrap">
    <img class="book-cover"
         src="https://covers.openlibrary.org/b/isbn/9780062060242-L.jpg"
         alt="The Innovator's Dilemma"
         onerror="this.style.display='none';this.nextElementSibling.style.display='flex'">
    <div class="book-cover-placeholder" style="display:none">📖</div>
  </div>
  <div class="book-info">
    <div class="book-cat">Transformação</div>
    <div class="book-title">The Innovator's Dilemma</div>
    <div class="book-author">Clayton Christensen · 1997</div>
    <p class="book-why">Explica por que empresas bem-geridas falham — não por incompetência, mas por usar as lentes do passado para enxergar o futuro. O argumento central ressoa em qualquer conversa sobre transformação digital ou inovação em T&D.</p>
    <a class="book-link" href="https://www.amazon.com.br/s?k=Innovator%27s+Dilemma+Christensen&i=stripbooks" target="_blank" rel="noopener">
      <svg viewBox="0 0 24 24"><path d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"/></svg>
      Ver na Amazon
    </a>
  </div>
</div>

<div class="book-card">
  <div class="book-cover-wrap">
    <img class="book-cover"
         src="https://covers.openlibrary.org/b/isbn/9781422186435-L.jpg"
         alt="Leading Change"
         onerror="this.style.display='none';this.nextElementSibling.style.display='flex'">
    <div class="book-cover-placeholder" style="display:none">📖</div>
  </div>
  <div class="book-info">
    <div class="book-cat">Transformação</div>
    <div class="book-title">Leading Change</div>
    <div class="book-author">John P. Kotter · 1996</div>
    <p class="book-why">Os 8 passos de Kotter continuam sendo o mapa mais útil para navegar mudanças organizacionais. Simples na estrutura, brutalmente honesto na aplicação — especialmente nos estágios que as empresas costumam pular.</p>
    <a class="book-link" href="https://www.amazon.com.br/s?k=Leading+Change+John+Kotter&i=stripbooks" target="_blank" rel="noopener">
      <svg viewBox="0 0 24 24"><path d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"/></svg>
      Ver na Amazon
    </a>
  </div>
</div>

<div class="book-card">
  <div class="book-cover-wrap">
    <img class="book-cover"
         src="https://covers.openlibrary.org/b/isbn/9780735216358-L.jpg"
         alt="Thinking in Bets"
         onerror="this.style.display='none';this.nextElementSibling.style.display='flex'">
    <div class="book-cover-placeholder" style="display:none">📖</div>
  </div>
  <div class="book-info">
    <div class="book-cat">Decisão</div>
    <div class="book-title">Thinking in Bets</div>
    <div class="book-author">Annie Duke · 2018</div>
    <p class="book-why">Annie Duke usa o poker profissional para ensinar a tomar decisões melhores em cenários de incerteza. Ideal para líderes que precisam agir sem ter todas as informações — o que é basicamente sempre.</p>
    <a class="book-link" href="https://www.amazon.com.br/s?k=Thinking+in+Bets+Annie+Duke&i=stripbooks" target="_blank" rel="noopener">
      <svg viewBox="0 0 24 24"><path d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"/></svg>
      Ver na Amazon
    </a>
  </div>
</div>

</div>

<div class="lr-section" style="margin-top:1.25rem;margin-bottom:0.75rem;font-size:9px;color:var(--text-4);letter-spacing:2px;">Aprendizagem Organizacional</div>

<div class="book-grid">

<div class="book-card">
  <div class="book-cover-wrap">
    <img class="book-cover"
         src="https://covers.openlibrary.org/b/isbn/9780385517256-L.jpg"
         alt="The Fifth Discipline"
         onerror="this.style.display='none';this.nextElementSibling.style.display='flex'">
    <div class="book-cover-placeholder" style="display:none">📖</div>
  </div>
  <div class="book-info">
    <div class="book-cat">Aprendizagem</div>
    <div class="book-title">The Fifth Discipline</div>
    <div class="book-author">Peter Senge · 1990</div>
    <p class="book-why">O livro fundacional sobre organizações que aprendem. Senge introduz os sistemas de aprendizagem coletiva que ainda hoje são o padrão de referência — qualquer conversa séria sobre cultura de aprendizagem começa aqui.</p>
    <a class="book-link" href="https://www.amazon.com.br/s?k=The+Fifth+Discipline+Peter+Senge&i=stripbooks" target="_blank" rel="noopener">
      <svg viewBox="0 0 24 24"><path d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"/></svg>
      Ver na Amazon
    </a>
  </div>
</div>

<div class="book-card">
  <div class="book-cover-wrap">
    <img class="book-cover"
         src="https://covers.openlibrary.org/b/isbn/9781626567986-L.jpg"
         alt="Theory U"
         onerror="this.style.display='none';this.nextElementSibling.style.display='flex'">
    <div class="book-cover-placeholder" style="display:none">📖</div>
  </div>
  <div class="book-info">
    <div class="book-cat">Transformação</div>
    <div class="book-title">Theory U</div>
    <div class="book-author">Otto Scharmer · 2007</div>
    <p class="book-why">Scharmer propõe que a qualidade de qualquer intervenção depende do estado interior de quem a lidera. Denso, mas transformador — especialmente para quem trabalha com desenvolvimento de líderes e mudança cultural profunda.</p>
    <a class="book-link" href="https://www.amazon.com.br/s?k=Theory+U+Otto+Scharmer&i=stripbooks" target="_blank" rel="noopener">
      <svg viewBox="0 0 24 24"><path d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"/></svg>
      Ver na Amazon
    </a>
  </div>
</div>

<div class="book-card">
  <div class="book-cover-wrap">
    <img class="book-cover"
         src="https://covers.openlibrary.org/b/isbn/9781264268498-L.jpg"
         alt="Irresistible"
         onerror="this.style.display='none';this.nextElementSibling.style.display='flex'">
    <div class="book-cover-placeholder" style="display:none">📖</div>
  </div>
  <div class="book-info">
    <div class="book-cat">Pessoas & Cultura</div>
    <div class="book-title">Irresistible</div>
    <div class="book-author">Josh Bersin · 2022</div>
    <p class="book-why">Bersin destila anos de pesquisa sobre o que faz organizações durarem e atraírem talento. Dados concretos sobre o que separa empresas de alto impacto — leitura direta para quem trabalha com estratégia de pessoas.</p>
    <a class="book-link" href="https://www.amazon.com.br/s?k=Irresistible+Josh+Bersin&i=stripbooks" target="_blank" rel="noopener">
      <svg viewBox="0 0 24 24"><path d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"/></svg>
      Ver na Amazon
    </a>
  </div>
</div>

</div>

<div class="lr-section" style="margin-top:1.25rem;margin-bottom:0.75rem;font-size:9px;color:var(--text-4);letter-spacing:2px;">Liderança e Cultura</div>

<div class="book-grid">

<div class="book-card">
  <div class="book-cover-wrap">
    <img class="book-cover"
         src="https://covers.openlibrary.org/b/isbn/9781119477242-L.jpg"
         alt="The Fearless Organization"
         onerror="this.style.display='none';this.nextElementSibling.style.display='flex'">
    <div class="book-cover-placeholder" style="display:none">📖</div>
  </div>
  <div class="book-info">
    <div class="book-cat">Liderança</div>
    <div class="book-title">The Fearless Organization</div>
    <div class="book-author">Amy Edmondson · 2018</div>
    <p class="book-why">Edmondson documenta com rigor acadêmico por que segurança psicológica é o pré-requisito de qualquer aprendizado real nas organizações. Não é sobre conforto — é sobre criar as condições para que as pessoas contribuam de verdade.</p>
    <a class="book-link" href="https://www.amazon.com.br/s?k=The+Fearless+Organization+Edmondson&i=stripbooks" target="_blank" rel="noopener">
      <svg viewBox="0 0 24 24"><path d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"/></svg>
      Ver na Amazon
    </a>
  </div>
</div>

<div class="book-card">
  <div class="book-cover-wrap">
    <img class="book-cover"
         src="https://covers.openlibrary.org/b/isbn/9780345472328-L.jpg"
         alt="Mindset"
         onerror="this.style.display='none';this.nextElementSibling.style.display='flex'">
    <div class="book-cover-placeholder" style="display:none">📖</div>
  </div>
  <div class="book-info">
    <div class="book-cat">Desenvolvimento</div>
    <div class="book-title">Mindset</div>
    <div class="book-author">Carol Dweck · 2006</div>
    <p class="book-why">A pesquisa original por trás do growth mindset — menos autoajuda, mais ciência. Dweck mostra como a crença na capacidade de aprender muda comportamentos mensuráveis em adultos, equipes e organizações.</p>
    <a class="book-link" href="https://www.amazon.com.br/s?k=Mindset+Carol+Dweck&i=stripbooks" target="_blank" rel="noopener">
      <svg viewBox="0 0 24 24"><path d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"/></svg>
      Ver na Amazon
    </a>
  </div>
</div>

<div class="book-card">
  <div class="book-cover-wrap">
    <img class="book-cover"
         src="https://covers.openlibrary.org/b/isbn/9781591848011-L.jpg"
         alt="Leaders Eat Last"
         onerror="this.style.display='none';this.nextElementSibling.style.display='flex'">
    <div class="book-cover-placeholder" style="display:none">📖</div>
  </div>
  <div class="book-info">
    <div class="book-cat">Liderança</div>
    <div class="book-title">Leaders Eat Last</div>
    <div class="book-author">Simon Sinek · 2014</div>
    <p class="book-why">Sinek conecta biologia, liderança e confiança de forma acessível. O argumento central: ambientes seguros não são um benefício — são uma responsabilidade da liderança. Complementa bem o Fearless Organization.</p>
    <a class="book-link" href="https://www.amazon.com.br/s?k=Leaders+Eat+Last+Simon+Sinek&i=stripbooks" target="_blank" rel="noopener">
      <svg viewBox="0 0 24 24"><path d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"/></svg>
      Ver na Amazon
    </a>
  </div>
</div>

</div>

<div class="lr-section" style="margin-top:1.25rem;margin-bottom:0.75rem;font-size:9px;color:var(--text-4);letter-spacing:2px;">Coaching e Perguntas</div>

<div class="book-grid">

<div class="book-card">
  <div class="book-cover-wrap">
    <img class="book-cover"
         src="https://covers.openlibrary.org/b/isbn/9781620402085-L.jpg"
         alt="A More Beautiful Question"
         onerror="this.style.display='none';this.nextElementSibling.style.display='flex'">
    <div class="book-cover-placeholder" style="display:none">📖</div>
  </div>
  <div class="book-info">
    <div class="book-cat">Coaching</div>
    <div class="book-title">A More Beautiful Question</div>
    <div class="book-author">Warren Berger · 2014</div>
    <p class="book-why">A capacidade de fazer boas perguntas é tão importante quanto ter respostas. Berger documenta como as melhores inovações começam com uma pergunta simples, bem formulada — essencial para coaching, design instrucional e facilitação.</p>
    <a class="book-link" href="https://www.amazon.com.br/s?k=A+More+Beautiful+Question+Warren+Berger&i=stripbooks" target="_blank" rel="noopener">
      <svg viewBox="0 0 24 24"><path d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"/></svg>
      Ver na Amazon
    </a>
  </div>
</div>

<div class="book-card">
  <div class="book-cover-wrap">
    <img class="book-cover"
         src="https://covers.openlibrary.org/b/isbn/9780978440749-L.jpg"
         alt="The Coaching Habit"
         onerror="this.style.display='none';this.nextElementSibling.style.display='flex'">
    <div class="book-cover-placeholder" style="display:none">📖</div>
  </div>
  <div class="book-info">
    <div class="book-cat">Coaching</div>
    <div class="book-title">The Coaching Habit</div>
    <div class="book-author">Michael Bungay Stanier · 2016</div>
    <p class="book-why">O livro mais acionável da lista. MBS transforma coaching em 7 perguntas práticas — dá para aplicar numa reunião 1:1 amanhã. O mais subgrifado da minha estante.</p>
    <a class="book-link" href="https://www.amazon.com.br/s?k=The+Coaching+Habit+Michael+Bungay+Stanier&i=stripbooks" target="_blank" rel="noopener">
      <svg viewBox="0 0 24 24"><path d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"/></svg>
      Ver na Amazon
    </a>
  </div>
</div>

</div>

---

<div class="lr-section">Pesquisas e Relatórios</div>

<div class="article-group">
<div class="article-group-title">IA e Tecnologia</div>

<div class="article-item">
  <div class="article-dot"></div>
  <div class="article-body">
    <div class="article-name">Agentic AI in the Workplace — Gartner, 2025</div>
    <div class="article-source">Gartner Research</div>
    <div class="article-note">O relatório de referência sobre adoção de agentes de IA nas empresas. Os números sobre automação de processos e crescimento de adoção que mais circulam em apresentações de C-suite.</div>
  </div>
</div>

<div class="article-item">
  <div class="article-dot"></div>
  <div class="article-body">
    <div class="article-name">IT's New Mandate: The Experience Silo — 2025</div>
    <div class="article-source">Research Report</div>
    <div class="article-note">Sobre a fusão crescente entre RH e TI — e por que a parceria CHRO-CIO virou pauta estratégica. Os dados sobre líderes de TI redefinindo sua relação com people analytics são os mais citados.</div>
  </div>
</div>

<div class="article-item">
  <div class="article-dot"></div>
  <div class="article-body">
    <div class="article-name">EU AI Act</div>
    <div class="article-source">União Europeia · 2024</div>
    <div class="article-note">A regulamentação europeia que redefine o papel do RH como guardião de dados e ética em sistemas de IA. Independente de onde sua empresa opera, os parâmetros do AI Act estão influenciando políticas globais.</div>
  </div>
</div>
</div>

<div class="article-group">
<div class="article-group-title">Pessoas e Habilidades</div>

<div class="article-item">
  <div class="article-dot"></div>
  <div class="article-body">
    <div class="article-name">Future of Jobs Report 2025</div>
    <div class="article-source">World Economic Forum</div>
    <div class="article-note">O relatório bianual mais completo sobre o futuro do trabalho. Os dados sobre disrupção de habilidades, agilidade organizacional e barreiras de transformação são referência para qualquer conversa de planejamento de workforce.</div>
  </div>
</div>

<div class="article-item">
  <div class="article-dot"></div>
  <div class="article-body">
    <div class="article-name">Reskilling in the Age of AI</div>
    <div class="article-source">Harvard Business Review · Set/2023</div>
    <div class="article-note">O artigo que popularizou os números sobre a meia-vida das competências: 5 anos em média, 2,5 anos em tecnologia. Leitura rápida, argumentação sólida.</div>
  </div>
</div>

<div class="article-item">
  <div class="article-dot"></div>
  <div class="article-body">
    <div class="article-name">Pesquisa sobre Maturidade de Aprendizagem — Josh Bersin Company, 2025</div>
    <div class="article-source">Josh Bersin Company</div>
    <div class="article-note">A base empírica do modelo de maturidade dos 4 níveis do ecossistema de aprendizagem. Os dados sobre distribuição das empresas norte-americanas por nível são reveladores — e um pouco deprimentes.</div>
  </div>
</div>
</div>

<div class="article-group">
<div class="article-group-title">Cultura e Engajamento</div>

<div class="article-item">
  <div class="article-dot"></div>
  <div class="article-body">
    <div class="article-name">State of the Global Workplace 2025</div>
    <div class="article-source">Gallup</div>
    <div class="article-note">O maior estudo contínuo sobre engajamento no trabalho. O dado de 21% de colaboradores efetivamente engajados globalmente não é novo — mas continua sendo o mais incômodo de apresentar para um board.</div>
  </div>
</div>

<div class="article-item">
  <div class="article-dot"></div>
  <div class="article-body">
    <div class="article-name">CEO Outlook 2024</div>
    <div class="article-source">KPMG</div>
    <div class="article-note">O relatório que evidenciou o gap de percepção entre líderes e colaboradores sobre retorno ao escritório. Útil como dado de contexto para qualquer conversa sobre cultura e modelo de trabalho.</div>
  </div>
</div>
</div>

---

<div class="lr-section">Quem Acompanho</div>

<div class="follow-grid">

<a class="follow-card" href="https://joshbersin.com" target="_blank" rel="noopener">
  <div class="follow-name">Josh Bersin</div>
  <div class="follow-area">Learning, Talent & HR Tech</div>
  <div class="follow-desc">A pesquisa mais rigorosa disponível sobre ecossistemas de aprendizagem e o futuro do RH. Newsletter semanal obrigatória.</div>
</a>

<a class="follow-card" href="https://sloanreview.mit.edu" target="_blank" rel="noopener">
  <div class="follow-name">MIT Sloan Management Review</div>
  <div class="follow-area">Estratégia e Futuro do Trabalho</div>
  <div class="follow-desc">Pesquisa acadêmica com aplicação prática. Melhor fonte para navegar a tensão entre IA e trabalho humano.</div>
</a>

<a class="follow-card" href="https://hbr.org" target="_blank" rel="noopener">
  <div class="follow-name">Harvard Business Review</div>
  <div class="follow-area">Gestão e Desenvolvimento</div>
  <div class="follow-desc">Gestão, inovação e desenvolvimento de pessoas. Qualidade desigual, mas os melhores artigos ainda são referência de setor.</div>
</a>

<a class="follow-card" href="https://gallup.com/workplace" target="_blank" rel="noopener">
  <div class="follow-name">Gallup Workplace</div>
  <div class="follow-area">Engajamento e Cultura</div>
  <div class="follow-desc">Os dados mais consistentes sobre engajamento, produtividade e bem-estar organizacional ao longo do tempo.</div>
</a>

<a class="follow-card" href="https://www.weforum.org/reports" target="_blank" rel="noopener">
  <div class="follow-name">WEF — Future of Jobs</div>
  <div class="follow-area">Tendências de Habilidades</div>
  <div class="follow-desc">O relatório bianual mais completo sobre workforce, automação e habilidades emergentes. Referência para planejamento de longo prazo.</div>
</a>

<a class="follow-card" href="https://signalandcipher.com" target="_blank" rel="noopener">
  <div class="follow-name">Signal and Cipher</div>
  <div class="follow-area">Futurismo e Estratégia Tecnológica</div>
  <div class="follow-desc">Ian Beacraft combina visão de longo prazo com análise estratégica. Uma das vozes mais interessantes sobre IA e o futuro das organizações.</div>
</a>

</div>
