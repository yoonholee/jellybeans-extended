# VS Code Theme Research

Research notes on VS Code color themes, syntax highlighting, and best practices.

## Contents

### Foundation

| Doc | Description |
|-----|-------------|
| [01-theme-architecture](01-theme-architecture.md) | VS Code theme file structure, colors vs tokenColors vs semanticTokenColors |
| [02-color-theory](02-color-theory.md) | Color theory for code editors, contrast, readability principles |
| [03-accessibility](03-accessibility.md) | Color blindness, WCAG guidelines, contrast ratios |

### Analysis

| Doc | Description |
|-----|-------------|
| [04-popular-themes](04-popular-themes.md) | Deep dive into Dracula, One Dark, Solarized, Nord, Catppuccin |
| [05-dark-vs-light](05-dark-vs-light.md) | Research on eye strain, productivity, when to use each mode |

### Technical Reference

| Doc | Description |
|-----|-------------|
| [06-textmate-scopes](06-textmate-scopes.md) | Complete TextMate scope reference for syntax highlighting |

### Language-Specific

| Doc | Description |
|-----|-------------|
| [07-python-highlighting](07-python-highlighting.md) | Python: decorators, self/cls, type hints, f-strings, dunder methods |
| [08-markdown-highlighting](08-markdown-highlighting.md) | Markdown: headers, links, code blocks, emphasis |
| [09-json-yaml-highlighting](09-json-yaml-highlighting.md) | JSON/YAML: keys, values, nested structures |

### Publishing

| Doc | Description |
|-----|-------------|
| [10-publishing](10-publishing.md) | How to package and publish to VS Code Marketplace |

### Reference

| Doc | Description |
|-----|-------------|
| [11-monolisa-features](11-monolisa-features.md) | MonoLisa font OpenType features, stylistic sets, configuration |
| [12-vscode-theme-features](12-vscode-theme-features.md) | Complete VS Code theme API: tokens, semantic highlighting, workbench colors |

## Quick Reference

### Minimal Theme Coverage

At minimum, cover these scopes:

```
comment
constant
entity.name.function
entity.name.class
entity.name.tag
keyword
string
storage.type
variable
invalid
```

### Common Color Roles

| Role | Popular Colors |
|------|---------------|
| Background (dark) | `#151515` - `#282a36` |
| Foreground | `#e8e8d3` - `#f8f8f2` |
| Comments | `#555555` - `#888888` |
| Keywords | Blue/Purple |
| Functions | Yellow/Gold |
| Strings | Green |
| Numbers | Orange/Red |
| Types | Orange/Coral |

### WCAG Contrast Requirements

| Level | Normal Text | Large Text |
|-------|-------------|-----------|
| AA | 4.5:1 | 3:1 |
| AAA | 7:1 | 4.5:1 |

## Tools

- [VS Code Scope Inspector](https://code.visualstudio.com/api/language-extensions/syntax-highlight-guide#scope-inspector): `Developer: Inspect Editor Tokens and Scopes`
- [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/)
- [Color Oracle](https://colororacle.org/): Color blindness simulator
- [vsce](https://github.com/microsoft/vscode-vsce): Extension packaging tool

## Official Documentation

- [Color Theme Guide](https://code.visualstudio.com/api/extension-guides/color-theme)
- [Theme Color Reference](https://code.visualstudio.com/api/references/theme-color)
- [Syntax Highlight Guide](https://code.visualstudio.com/api/language-extensions/syntax-highlight-guide)
- [Semantic Highlight Guide](https://code.visualstudio.com/api/language-extensions/semantic-highlight-guide)
- [TextMate Grammars](https://macromates.com/manual/en/language_grammars)

---

*Research compiled January 2026*
