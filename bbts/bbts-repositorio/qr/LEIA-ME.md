# QR codes do assessment

Apontam para `https://alunbusiness.md/bbts/assessment/`.
Gerados por `bbts/assets/marca/gerar-qr.py` — rode de novo se a URL mudar.

| Arquivo | Quando usar |
|---|---|
| `qr-assessment.svg` | **Padrão para o slide.** Vetor, azul da marca, escala sem perder nitidez. |
| `qr-assessment.png` | Mesmo desenho em 2000px, para ferramenta que não aceita SVG. |
| `qr-assessment-escuro.png` | Azul-escuro. Melhor se o projetor lavar as cores ou a sala for clara. |
| `qr-assessment-marca.png` | Com o símbolo da BBTS no centro. Bonito, mas veja a ressalva. |

Todos com correção de erro **H** (reconstrói 30% da área).

## Testado

Decodificados com jsQR em 900, 400, 220 e 140px de lado. Os quatro
devolveram a URL exata em todos os tamanhos, inclusive o que tem símbolo.

## Ressalvas de palco

- **No slide, não desça de 25% da altura da tela.** Quem está no fundo da
  sala escaneia num ângulo ruim; sobra de tamanho compensa.
- **Fundo branco, sempre.** O QR precisa da margem clara em volta — não
  encoste em caixa colorida nem corte a borda.
- A versão com símbolo passou no teste, mas **para palco prefira a sem**:
  a leitura real tem ângulo, brilho de projetor e mão tremendo, condições
  que o teste não reproduz. Cada elemento a menos é uma falha a menos.
- Se puder, projete o QR e teste com dois celulares diferentes antes.
