# VS Code Theme Architecture

## Overview

VS Code themes consist of two main categories of colors:

1. **Workbench Colors** (`colors`) - UI elements like Activity Bar, Status Bar, sidebars, tabs
2. **Syntax Colors** (`tokenColors`) - Source code highlighting based on TextMate grammars
3. **Semantic Colors** (`semanticTokenColors`) - Language-server-aware highlighting (introduced in VS Code 1.43)

## File Structure

```
my-theme/
├── package.json           # Extension manifest
├── themes/
│   └── my-theme-color-theme.json
├── README.md
├── CHANGELOG.md
├── icon.png              # 128x128 marketplace icon
└── LICENSE
```

## package.json Structure

```json
{
  "name": "my-theme",
  "displayName": "My Theme",
  "description": "A beautiful color theme",
  "version": "1.0.0",
  "publisher": "your-publisher-id",
  "engines": { "vscode": "^1.60.0" },
  "categories": ["Themes"],
  "contributes": {
    "themes": [{
      "label": "My Theme",
      "uiTheme": "vs-dark",  // vs-dark | vs | hc-black | hc-light
      "path": "./themes/my-theme-color-theme.json"
    }]
  }
}
```

## Theme JSON Structure

```json
{
  "name": "My Theme",
  "type": "dark",
  "semanticHighlighting": true,
  
  "colors": {
    "editor.background": "#151515",
    "editor.foreground": "#e8e8d3",
    // ... 600+ possible workbench colors
  },
  
  "semanticTokenColors": {
    "variable": "#ddddc1",
    "function": "#fad07a",
    "class": "#fabb6e",
    // ... semantic token rules
  },
  
  "tokenColors": [
    {
      "name": "Comment",
      "scope": ["comment", "punctuation.definition.comment"],
      "settings": {
        "foreground": "#888888",
        "fontStyle": "italic"
      }
    }
    // ... TextMate scope rules
  ]
}
```

## Color Formats

VS Code supports these hexadecimal notations:
- `#RGB` - 4-bit per channel
- `#RGBA` - with alpha
- `#RRGGBB` - 8-bit per channel
- `#RRGGBBAA` - with alpha (`ff` = opaque, `00` = transparent)

## The Three Layers

### 1. Workbench Colors (`colors`)

Controls UI elements outside the editor:
- Activity Bar, Sidebars, Panels
- Editor chrome (gutters, line numbers, scrollbars)
- Tabs, Breadcrumbs, Title bar
- Input controls, Buttons, Dropdowns
- Git decorations, Diff highlighting
- Terminal ANSI colors

### 2. Token Colors (`tokenColors`)

TextMate-based syntax highlighting:
- Uses scope selectors (dot-separated identifiers)
- Processed in order, most specific match wins
- Font styles: `bold`, `italic`, `underline`, `strikethrough`

### 3. Semantic Token Colors (`semanticTokenColors`)

Language-server-aware highlighting:
- More accurate than TextMate (understands symbols)
- Selector syntax: `tokenType.modifier:language`
- Examples: `variable.readonly`, `function.async:typescript`

## Semantic vs TextMate Precedence

When semantic highlighting is enabled:
1. Semantic rules take precedence over TextMate rules
2. If no semantic rule matches, falls back to TextMate
3. VS Code maintains a semantic → TextMate scope map for compatibility

## Key Workbench Color Categories

| Category | Example Keys |
|----------|-------------|
| Base | `foreground`, `focusBorder`, `selection.background` |
| Editor | `editor.background`, `editorCursor.foreground` |
| Gutter | `editorGutter.addedBackground` |
| Diff | `diffEditor.insertedTextBackground` |
| Sidebar | `sideBar.background`, `list.activeSelectionBackground` |
| Tabs | `tab.activeBackground`, `tab.activeBorder` |
| Terminal | `terminal.ansiRed`, `terminalCursor.foreground` |
| Git | `gitDecoration.modifiedResourceForeground` |

## Standard Semantic Token Types

| Token Type | Description |
|------------|-------------|
| `namespace` | Namespaces, modules |
| `type` | Types, type parameters |
| `class` | Class names |
| `interface` | Interface names |
| `enum` | Enum names |
| `function` | Function names |
| `method` | Method names |
| `property` | Property names |
| `variable` | Variable names |
| `parameter` | Parameter names |
| `enumMember` | Enum members |
| `decorator` | Decorators |
| `comment` | Comments |
| `string` | String literals |
| `number` | Numeric literals |
| `regexp` | Regular expressions |
| `operator` | Operators |
| `keyword` | Keywords |

## Standard Semantic Token Modifiers

| Modifier | Description |
|----------|-------------|
| `declaration` | Declarations |
| `definition` | Definitions |
| `readonly` | Read-only variables |
| `static` | Static members |
| `async` | Async functions |
| `deprecated` | Deprecated symbols |
| `modification` | Write access |
| `documentation` | Documentation |
| `defaultLibrary` | Standard library |

## Resources

- [Theme Color Reference](https://code.visualstudio.com/api/references/theme-color) - Complete list of workbench colors
- [Syntax Highlight Guide](https://code.visualstudio.com/api/language-extensions/syntax-highlight-guide)
- [Semantic Highlight Guide](https://code.visualstudio.com/api/language-extensions/semantic-highlight-guide)
