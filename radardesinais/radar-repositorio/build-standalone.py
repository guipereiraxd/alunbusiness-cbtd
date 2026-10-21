#!/usr/bin/env python3
"""Gera radar-standalone.html a partir de index.html + signals.json.

O standalone é um BUILD: nunca editar à mão. Rode este script depois de
qualquer mudança no index.html ou no signals.json.

    python3 radar-repositorio/build-standalone.py

A única diferença para o index.html é um bloco <script id="signals-data">
com o JSON embutido, que o próprio index.html detecta e usa no lugar do fetch
— o que faz o arquivo abrir por file:// sem servidor.
"""

import json
import pathlib
import sys

RAIZ = pathlib.Path(__file__).resolve().parent.parent
INDEX = RAIZ / "index.html"
DADOS = RAIZ / "signals.json"
SAIDA = RAIZ / "radar-standalone.html"

MARCA = "<script>\nconst NS='http://www.w3.org/2000/svg';"


def main() -> int:
    html = INDEX.read_text(encoding="utf-8")
    dados = json.loads(DADOS.read_text(encoding="utf-8"))  # valida o JSON

    if MARCA not in html:
        print("erro: não encontrei o início do script principal no index.html", file=sys.stderr)
        return 1
    if 'id="signals-data"' in html:
        print("erro: o index.html não deve conter o bloco de dados embutido", file=sys.stderr)
        return 1

    bloco = (
        '<script id="signals-data" type="application/json">\n'
        + json.dumps(dados, ensure_ascii=False, indent=2)
        + "\n</script>\n"
    )
    SAIDA.write_text(html.replace(MARCA, bloco + MARCA, 1), encoding="utf-8")
    print(f"ok: {SAIDA.name} regenerado ({SAIDA.stat().st_size // 1024} KB)")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
