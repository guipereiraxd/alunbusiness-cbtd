#!/usr/bin/env python3
"""Exporta um slide HTML para PNG 4K (3840x2160), como os demais do deck.

    python3 radar-repositorio/exportar-slide.py slide-cone-de-futuros.html

O slide é desenhado em 1920x1080 e capturado com escala 2. Antes da captura o
signals.json é embutido no HTML: o Chrome bloqueia fetch em file://, e assim o
slide continua lendo da fonte única em vez de ter dados próprios.
"""

import json
import pathlib
import re
import shutil
import subprocess
import sys
import tempfile

RAIZ = pathlib.Path(__file__).resolve().parent.parent
DADOS = RAIZ / "signals.json"
SAIDA = pathlib.Path(__file__).resolve().parent / "slides"
CHROME = "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"
MARCA = "<script>\nconst NS='http://www.w3.org/2000/svg';"


def main() -> int:
    if len(sys.argv) < 2:
        print(__doc__, file=sys.stderr)
        return 2
    origem = pathlib.Path(sys.argv[1])
    if not origem.is_absolute():
        origem = pathlib.Path(__file__).resolve().parent / origem
    if not origem.exists():
        print(f"erro: não achei {origem}", file=sys.stderr)
        return 1
    if not pathlib.Path(CHROME).exists():
        print(f"erro: Chrome não encontrado em {CHROME}", file=sys.stderr)
        return 1

    html = origem.read_text(encoding="utf-8")
    dados = json.loads(DADOS.read_text(encoding="utf-8"))
    if MARCA not in html:
        print("erro: não achei o início do script no slide", file=sys.stderr)
        return 1
    bloco = ('<script id="signals-data" type="application/json">\n'
             + json.dumps(dados, ensure_ascii=False) + "\n</script>\n")

    SAIDA.mkdir(exist_ok=True)
    destino = SAIDA / (origem.stem.replace("slide-", "") + ".png")

    with tempfile.TemporaryDirectory() as tmp:
        tmp = pathlib.Path(tmp)
        alvo = tmp / origem.name
        alvo.write_text(html.replace(MARCA, bloco + MARCA, 1), encoding="utf-8")
        # Chrome headless leva minutos para arrancar nesta máquina — em --headless
        # e em --headless=new, com ou sem rede. É lento, não travado: espere.
        # (--headless=new estourou 2 min consistentemente; o antigo conclui.)
        subprocess.run(
            [CHROME, "--headless", "--disable-gpu", "--no-sandbox", "--hide-scrollbars",
             "--no-first-run", "--disable-extensions",
             "--force-device-scale-factor=2", "--window-size=1920,1080",
             "--virtual-time-budget=10000",       # deixa as webfonts carregarem
             f"--screenshot={tmp/'out.png'}", f"--user-data-dir={tmp/'perfil'}",
             alvo.as_uri()],
            check=True, timeout=900,
            # NÃO usar capture_output: os processos auxiliares do Chrome herdam o
            # pipe e o Python espera um EOF que não vem.
            stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL,
        )
        shutil.move(str(tmp / "out.png"), destino)

    tam = subprocess.run(["sips", "-g", "pixelWidth", "-g", "pixelHeight", str(destino)],
                         capture_output=True, text=True).stdout
    dims = re.findall(r"pixel(?:Width|Height): (\d+)", tam)
    print(f"ok: {destino.name} ({'x'.join(dims) if dims else '?'})")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
