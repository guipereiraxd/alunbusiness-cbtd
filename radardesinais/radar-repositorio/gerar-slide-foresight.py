#!/usr/bin/env python3
"""Gera o slide do funil de foresight como SVG autocontido, 1920x1080.

    python3 radar-repositorio/gerar-slide-foresight.py

Sem navegador e sem HTML: sai um .svg único em radar-repositorio/slides/.
As fontes do projeto não estão instaladas neste Mac (vêm do Google Fonts em
tempo de renderização), então elas são baixadas uma vez e embutidas em base64 —
sem isso o SVG cai em fallback fora daqui e a tipografia não bate com o deck.

Adaptação visual direta do slide "Foresight Estratégico" (Alura + FIAP) para a
paleta e a tipografia do Radar de Sinais. Sem tese acrescentada: mesmas sete
etapas, mesmas três perguntas. O logotipo original não é reproduzido e o canto
inferior direito fica livre, como manda a gramática do projeto.
"""

import base64
import pathlib
import re
import sys
import urllib.request

AQUI = pathlib.Path(__file__).resolve().parent
FONTES = AQUI / "fontes"
SAIDA = AQUI / "slides" / "foresight-estrategico.svg"

UA = ("Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 "
      "(KHTML, like Gecko) Chrome/151.0 Safari/537.36")
CSS = ("https://fonts.googleapis.com/css2?family=Press+Start+2P"
       "&family=Jost:wght@600&family=IBM+Plex+Sans:wght@400;600"
       "&family=IBM+Plex+Mono:wght@400;500&display=swap")

# paleta canônica — 00-gramatica-signals.md
BG, PANEL, INK = "#F0F0EE", "#FFFFFF", "#1D3557"
MUTED, FAINT, LINE = "#5F6B7A", "#8A93A0", "#E2E2E0"
OLIVA, OLIVA_CLARO, MOSTARDA = "#7E9B57", "#99B278", "#D9A82E"
LARANJA, VERMELHO, ROXO = "#E07B2A", "#C93A2B", "#7B3FA0"

W, H = 1920, 1080


def baixar_fontes() -> dict:
    """Baixa os woff2 latinos uma vez e devolve {(família, peso): bytes}."""
    FONTES.mkdir(exist_ok=True)
    req = urllib.request.Request(CSS, headers={"User-Agent": UA})
    css = urllib.request.urlopen(req).read().decode()
    out = {}
    for sub, bloco in re.findall(r"/\*\s*(\S+)\s*\*/\s*@font-face\s*\{(.*?)\}", css, re.S):
        if sub != "latin":
            continue
        fam = re.search(r"font-family: '([^']+)'", bloco).group(1)
        peso = re.search(r"font-weight: (\d+)", bloco).group(1)
        url = re.search(r"url\((\S+?)\)", bloco).group(1)
        nome = f"{fam.replace(' ', '')}-{peso}.woff2"
        arq = FONTES / nome
        if not arq.exists():
            arq.write_bytes(urllib.request.urlopen(
                urllib.request.Request(url, headers={"User-Agent": UA})).read())
        out[(fam, peso)] = arq.read_bytes()
    return out


def face(fam: str, peso: str, dados: bytes) -> str:
    b64 = base64.b64encode(dados).decode()
    return (f"@font-face{{font-family:'{fam}';font-style:normal;font-weight:{peso};"
            f"src:url(data:font/woff2;base64,{b64}) format('woff2');}}")


def rng(semente: int):
    """Mesmo gerador pseudoaleatório do site, para o mosaico ficar igual."""
    a = semente & 0xFFFFFFFF

    def prox():
        nonlocal a
        a = (a + 0x6D2B79F5) & 0xFFFFFFFF
        t = (a ^ (a >> 15)) * (1 | a) & 0xFFFFFFFF
        t = (t + ((t ^ (t >> 7)) * (61 | t) & 0xFFFFFFFF)) ^ t & 0xFFFFFFFF
        return ((t ^ (t >> 14)) & 0xFFFFFFFF) / 4294967296
    return prox


def esc(t: str) -> str:
    return t.replace("&", "&amp;").replace("<", "&lt;").replace(">", "&gt;")


def texto(x, y, tam, peso, cor, txt, fam="mono", anc=None, esp=None):
    familias = {"mono": "IBM Plex Mono", "sans": "IBM Plex Sans",
                "display": "Jost", "px": "Press Start 2P"}
    a = (f'<text x="{x}" y="{y}" font-family="{familias[fam]}" font-size="{tam}" '
         f'font-weight="{peso}" fill="{cor}"')
    if anc:
        a += f' text-anchor="{anc}"'
    if esp:
        a += f' letter-spacing="{esp}"'
    return a + f">{esc(txt)}</text>"


def mosaico(cx, cy, raio, cor, semente):
    """Nuvem de pixels — a tradução dos círculos do slide original."""
    r, saida = rng(semente), []
    passo = 13
    for i in range(-6, 7):
        for j in range(-6, 7):
            x, y = cx + i * passo, cy + j * passo
            d = ((i * passo) ** 2 + (j * passo) ** 2) ** .5 / raio
            if d > 1 or r() < max(0, d - .35) * 1.6:
                continue
            lado = 11 if d < .45 else 9
            saida.append(f'<rect x="{x-lado/2:.1f}" y="{y-lado/2:.1f}" width="{lado}" '
                         f'height="{lado}" fill="{cor}" opacity="{max(.25, .95-d*.55):.2f}"/>')
    return "".join(saida)


def chevron(cx, y, meia, alt, bico, cor):
    p = (f"{cx-meia},{y} {cx},{y+bico} {cx+meia},{y} "
         f"{cx+meia},{y+alt} {cx},{y+alt+bico} {cx-meia},{y+alt}")
    return f'<polygon points="{p}" fill="{cor}"/>'


def main() -> int:
    try:
        fontes = baixar_fontes()
    except Exception as e:                                   # noqa: BLE001
        print(f"erro ao obter as fontes: {e}", file=sys.stderr)
        return 1

    faces = "".join(face(f, p, d) for (f, p), d in fontes.items())
    o = [f'<svg xmlns="http://www.w3.org/2000/svg" width="{W}" height="{H}" '
         f'viewBox="0 0 {W} {H}" font-kerning="normal">',
         f"<style>{faces}</style>",
         f'<rect width="{W}" height="{H}" fill="{BG}"/>']

    # ---------- título ----------
    o.append(texto(96, 118, 62, 600, INK, "FORESIGHT ESTRATÉGICO", "display", esp="3.5"))
    o.append(texto(96, 160, 22, 400, MUTED, "ESTUDO DE FUTUROS", "sans", esp="5"))

    # ---------- três blocos da esquerda ----------
    blocos = [
        (OLIVA, "SINAIS & TENDÊNCIAS", ["O QUE ESTÁ", "INFLUENCIANDO", "OS FUTUROS?"], 1, 11),
        (LARANJA, "CENÁRIOS & MEGATENDÊNCIAS", ["QUAL É O", "FUTURO", "MAIS PROVÁVEL?"], 1, 37),
        (ROXO, "ESTRATÉGIA", ["QUAL É O", "FUTURO DA", "SUA EMPRESA?"], 2, 73),
    ]
    for i, (cor, rotulo, linhas, negrito, semente) in enumerate(blocos):
        topo = 268 + i * 268
        o.append(mosaico(212, topo + 78, 74, cor, semente))
        # rótulo em chip cheio, como o marcador do slide original.
        # 8,05 px por caractere é a medida real do Press Start 2P a 14 px,
        # conferida no render — não o 1em que a fonte sugere
        larg = len(rotulo) * 8.05 + 26
        o.append(f'<rect x="352" y="{topo-4}" width="{larg:.0f}" height="34" rx="4" fill="{cor}"/>')
        o.append(texto(365, topo + 20, 14, 400, PANEL, rotulo, "px"))
        for j, linha in enumerate(linhas):
            forte = j == negrito or (i == 2 and j >= 1)
            o.append(texto(352, topo + 82 + j * 46, 38, 600 if forte else 400,
                           INK if forte else MUTED, linha, "sans", esp="1"))
        o.append(f'<line x1="1002" y1="{topo-6}" x2="1002" y2="{topo+206}" '
                 f'stroke="{INK}" stroke-width="3" opacity="0.45"/>')

    # ---------- funil de sete etapas ----------
    etapas = [
        ("SINAIS", OLIVA, 300), ("TENDÊNCIAS", OLIVA_CLARO, 276),
        ("INCERTEZAS", MOSTARDA, 250), ("CENÁRIOS", LARANJA, 220),
        ("OPORTUNIDADES & AMEAÇAS", VERMELHO, 186), ("PLANEJAMENTO", ROXO, 140),
        ("AÇÃO", INK, 88),
    ]
    cx, topo, alt, bico = 1444, 168, 106, 28
    ys = [topo + n * alt for n in range(len(etapas))]
    # de trás para frente: assim o bico de cada banda fica por cima da seguinte,
    # que é o que dá a leitura de funil — desenhando na ordem natural ele some
    for n in range(len(etapas) - 1, -1, -1):
        nome, cor, meia = etapas[n]
        o.append(chevron(cx, ys[n], meia, alt, bico, cor))
        tam = 20 if len(nome) > 16 else 27
        o.append(texto(cx, ys[n] + alt / 2 + bico / 2 + tam / 3, tam, 600, PANEL,
                       nome, "sans", "middle", "1"))
    # numeração por último, sempre legível sobre os bicos
    for n, (nome, cor, meia) in enumerate(etapas, start=1):
        o.append(f'<circle cx="{cx}" cy="{ys[n-1]}" r="25" fill="{PANEL}"/>')
        o.append(texto(cx, ys[n-1] + 7, 19, 500, cor, str(n), "mono", "middle"))

    o.append("</svg>")
    SAIDA.parent.mkdir(exist_ok=True)
    SAIDA.write_text("\n".join(o), encoding="utf-8")
    print(f"ok: {SAIDA.relative_to(AQUI.parent)} ({SAIDA.stat().st_size//1024} KB)")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
