# MonoLisa Font Features

Complete reference for MonoLisa font OpenType features and stylistic sets.

## OpenType Features (Core)

| Feature | Code | Description |
|---------|------|-------------|
| Ligatures | `liga` | 120+ coding ligatures (`!=`, `=>`, `->`, `===`, etc.) |
| Discretionary Ligatures | `dlig` | Spacing-related subtle tweaks |
| Contextual Alternates | `calt` | Whitespace ligatures |
| Fractions | `frac` | Turns `1/2` into `½` |
| Old Style Numbers | `onum` | Lowercase-style numerals |
| Slashed Zero | `zero` | Zero with slash for disambiguation |

## Stylistic Sets (ss01-ss18)

| Code | Feature | Default |
|------|---------|---------|
| `ss01` | Normal asterisk (centered) | off |
| `ss02` | Script/cursive italic (italic only) | off |
| `ss03` | Alternative `g` (single-story) | off |
| `ss04` | Other alternative `g` | off |
| `ss05` | Alternative `ß` (sharp s) | off |
| `ss06` | Alternative `@` | off |
| `ss07` | Alternative curly brackets `{}` | off |
| `ss08` | Alternative parenthesis `()` (rounder) | off |
| `ss09` | Alternative `>=` ligature | off |
| `ss10` | Other alternative `>=` ligature | off |
| `ss11` | Centered hexadecimal `0xF` | off |
| `ss12` | Thin backslash `\` | off |
| `ss13` | Alternative `$` (strikethrough) | on (v2+) |
| `ss14` | Alternative `&` | off |
| `ss15` | `i` without serif | off |
| `ss16` | `r` without serif | off |
| `ss17` | Alternative `.=` and `..=` ligatures | off |
| `ss18` | Alternative `@` (variant 2) | off |

## Font Weights

| Weight | Name |
|--------|------|
| 300 | Light |
| 400 | Regular |
| 500 | Medium |
| 600 | SemiBold |
| 700 | Bold |
| 800 | ExtraBold |
| 900 | Black |

Variable font available with continuous weight axis.

## Package Tiers

- **Basic**: Regular (400), Bold (700) - TTF only
- **Plus**: Light (300), Regular (400), Medium (500), SemiBold (600), Bold (700) - TTF
- **Complete**: All weights (300-900), Variable font, Webfont

## Additional Features

### Symbol Support

- Powerline symbols (built-in)
- Progress bar characters
- Angle brackets `〈〉`
- Box drawing characters

### Currency Symbols

Ukrainian hryvnia `₴`, Israeli shekel `₪`, South Korean won `₩`, and standard currency symbols.

### Language Support

200+ languages across multiple alphabets:

- Latin (extended)
- Cyrillic (including script variant)
- Greek (including script variant)
- Vietnamese

### Typography Features

- Superscript glyphs (`m²`)
- Subscript glyphs (`H₂O`)
- Mathematical operators

## VS Code Configuration

### Enable Features

```json
{
  "editor.fontFamily": "MonoLisa",
  "editor.fontLigatures": "'liga' on, 'calt' on, 'ss02' on, 'ss07' on, 'ss11' on",
  "editor.fontWeight": "400"
}
```

### Recommended Setup

```json
{
  "editor.fontFamily": "MonoLisa",
  "editor.fontSize": 13,
  "editor.fontLigatures": "'calt' on, 'liga' on, 'ss02' on, 'ss07' on, 'ss08' on, 'ss11' on, 'zero' on",
  "editor.fontWeight": "400"
}
```

### Variable Font

```json
{
  "editor.fontFamily": "MonoLisa Variable",
  "editor.fontVariations": true,
  "editor.fontWeight": "450"
}
```

## Script Variant (ss02)

The script variant only applies to italic text. To use it effectively:

1. Enable `ss02` in font ligatures
2. Configure your theme to use italic for specific tokens (comments, keywords, etc.)
3. The italic glyphs will render in the cursive script style

Example tokens that work well with script italic:

- Comments
- `this`/`self` keywords
- HTML attributes
- Type annotations

## References

- [MonoLisa Specimen](https://www.monolisa.dev/specimen)
- [MonoLisa Playground](https://www.monolisa.dev/playground)
- [MonoLisa FAQ](https://www.monolisa.dev/faq)
