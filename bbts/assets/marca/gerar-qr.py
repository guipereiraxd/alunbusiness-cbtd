#!/usr/bin/env python3
"""Gera os QR codes do assessment.

Rodar da raiz:  python3 bbts/assets/marca/gerar-qr.py

Produz, em bbts/bbts-repositorio/qr/:
  qr-assessment.svg        vetor, azul da marca — use este no slide
  qr-assessment.png        2000px, para ferramentas que não aceitam SVG
  qr-assessment-escuro.png 2000px, azul-escuro — melhor para projeção fraca
  qr-assessment-marca.png  2000px, com o símbolo da BBTS no centro

Correção de erro H (30%) nos quatro, o que dá folga para a versão com
símbolo no centro. Mesmo assim, para palco prefira a versão sem símbolo:
a plateia escaneia de longe, e cada elemento a menos é uma falha a menos.
"""
import os, re, subprocess, tempfile
import qrcode
from qrcode.constants import ERROR_CORRECT_H
from qrcode.image.svg import SvgPathFillImage
from PIL import Image, ImageDraw

URL   = "https://alunbusiness.md/bbts/assessment/"
AZUL  = "#465EFF"
NAVY  = "#0F1433"

RAIZ  = os.path.abspath(os.path.join(os.path.dirname(__file__), "..", "..", ".."))
MARCA = os.path.join(RAIZ, "bbts/assets/marca/bbts-central-azul.svg")
SAIDA = os.path.join(RAIZ, "bbts/bbts-repositorio/qr")
os.makedirs(SAIDA, exist_ok=True)


def qr(border=4):
    q = qrcode.QRCode(error_correction=ERROR_CORRECT_H, box_size=10, border=border)
    q.add_data(URL)
    q.make(fit=True)
    return q


def png(cor, nome, lado=2000):
    q = qr()
    img = q.make_image(fill_color=cor, back_color="white").convert("RGB")
    img = img.resize((lado, lado), Image.NEAREST)   # NEAREST mantém o módulo nítido
    caminho = os.path.join(SAIDA, nome)
    img.save(caminho)
    return caminho, img


def svg():
    q = qr()
    img = q.make_image(image_factory=SvgPathFillImage)
    caminho = os.path.join(SAIDA, "qr-assessment.svg")
    img.save(caminho)
    # a fábrica não aceita cor; troca no arquivo
    with open(caminho, encoding="utf-8") as f:
        s = f.read()
    s = s.replace('fill="#000000"', f'fill="{AZUL}"').replace('fill:#000000', f'fill:{AZUL}')
    if AZUL not in s:                      # fallback: path sem fill declarado
        s = s.replace("<path ", f'<path fill="{AZUL}" ', 1)
    with open(caminho, "w", encoding="utf-8") as f:
        f.write(s)
    return caminho


def simbolo_png(lado):
    """Símbolo da BBTS em azul sobre branco, recortado antes da wordmark."""
    with open(MARCA, encoding="utf-8") as f:
        d = re.search(r'<path[^>]*d="([^"]+)"', f.read()).group(1)
    SW, SH = 68.14, 62.3          # o símbolo termina em ~62.3 do viewBox
    L = 1200
    pad = L * 0.13
    esc = min((L - 2*pad)/SW, (L - 2*pad)/SH)
    x, y = (L - SW*esc)/2, (L - SH*esc)/2
    svg_txt = (
        f'<svg xmlns="http://www.w3.org/2000/svg" width="{L}" height="{L}" viewBox="0 0 {L} {L}">'
        f'<defs><clipPath id="c"><rect width="{SW}" height="{SH}"/></clipPath></defs>'
        f'<rect width="{L}" height="{L}" fill="#FFFFFF"/>'
        f'<g transform="translate({x:.2f},{y:.2f}) scale({esc:.4f})">'
        f'<g clip-path="url(#c)"><path d="{d}" fill="{AZUL}" fill-rule="evenodd"/></g></g></svg>'
    )
    tmp = tempfile.mkdtemp(prefix="qrsim-")
    p = os.path.join(tmp, "s.svg")
    with open(p, "w", encoding="utf-8") as f:
        f.write(svg_txt)
    subprocess.run(["qlmanage", "-t", "-s", "1200", "-o", tmp, p],
                   stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL)
    return Image.open(os.path.join(tmp, "s.svg.png")).convert("RGB").resize((lado, lado), Image.LANCZOS)


def com_marca(lado=2000):
    _, base = png(AZUL, "_tmp.png", lado)
    os.remove(os.path.join(SAIDA, "_tmp.png"))
    # o emblema ocupa ~19% do lado: dentro da folga dos 30% da correção H
    emb = int(lado * 0.19)
    sim = simbolo_png(emb)
    cx = (lado - emb) // 2
    moldura = int(emb * 0.09)
    d = ImageDraw.Draw(base)
    d.rectangle([cx - moldura, cx - moldura, cx + emb + moldura, cx + emb + moldura], fill="white")
    base.paste(sim, (cx, cx))
    caminho = os.path.join(SAIDA, "qr-assessment-marca.png")
    base.save(caminho)
    return caminho


if __name__ == "__main__":
    q = qr()
    print(f"url      {URL}")
    print(f"versão   {q.version} · {len(q.get_matrix())}x{len(q.get_matrix())} módulos · correção H")
    for c in [svg(),
              png(AZUL, "qr-assessment.png")[0],
              png(NAVY, "qr-assessment-escuro.png")[0],
              com_marca()]:
        print(f"  {os.path.relpath(c, RAIZ)}  ({os.path.getsize(c)//1024} KB)")
