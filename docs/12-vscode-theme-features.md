# VS Code Theme Features

Complete reference for VS Code/Cursor color theme capabilities.

## Theme File Structure

```json
{
  "name": "Theme Name",
  "type": "dark",
  "semanticHighlighting": true,
  "colors": { },
  "tokenColors": [ ],
  "semanticTokenColors": { }
}
```

## Token Colors (TextMate Rules)

Traditional syntax highlighting using TextMate scopes.

### Structure

```json
{
  "tokenColors": [
    {
      "name": "Description",
      "scope": ["scope.one", "scope.two"],
      "settings": {
        "foreground": "#fad07a",
        "fontStyle": "bold italic"
      }
    }
  ]
}
```

### Font Style Options

| Style | Description |
|-------|-------------|
| `bold` | Bold text |
| `italic` | Italic text |
| `underline` | Underlined text |
| `strikethrough` | Strikethrough text |
| `""` | Reset/normal (removes inherited styles) |

Combine styles with spaces: `"fontStyle": "italic bold"`

### Common Scopes

```
comment
string
keyword
variable
entity.name.function
entity.name.type
entity.name.class
support.function
constant.numeric
constant.language
storage.type
storage.modifier
punctuation
markup.heading
markup.bold
markup.italic
```

Use `Developer: Inspect Editor Tokens and Scopes` command to discover scopes.

## Semantic Token Colors

Language-aware highlighting that understands code semantics.

### Structure

```json
{
  "semanticHighlighting": true,
  "semanticTokenColors": {
    "variable": "#ddddc1",
    "variable.readonly": { "foreground": "#c8c8b8", "italic": true },
    "function.defaultLibrary": "#fad07a"
  }
}
```

### Token Types

| Type | Description |
|------|-------------|
| `variable` | Variables |
| `parameter` | Function parameters |
| `property` | Object properties |
| `function` | Functions |
| `method` | Methods |
| `class` | Classes |
| `interface` | Interfaces |
| `type` | Types |
| `typeParameter` | Generic type parameters |
| `namespace` | Namespaces/modules |
| `enum` | Enums |
| `enumMember` | Enum members |
| `decorator` | Decorators |
| `macro` | Macros |
| `label` | Labels |
| `comment` | Comments |
| `string` | Strings |
| `keyword` | Keywords |
| `number` | Numbers |
| `regexp` | Regular expressions |
| `operator` | Operators |

### Modifiers

Append modifiers with `.`:

| Modifier | Description |
|----------|-------------|
| `.readonly` | Read-only/const |
| `.static` | Static members |
| `.async` | Async functions |
| `.declaration` | Declarations |
| `.definition` | Definitions |
| `.deprecated` | Deprecated symbols |
| `.modification` | Modified variables |
| `.documentation` | Documentation |
| `.defaultLibrary` | Built-in/stdlib |

### Language-Specific

Append language with `:`:

```json
{
  "variable.readonly:python": "#aabbcc",
  "function:typescript": "#fad07a"
}
```

### Object Syntax

Use object for multiple properties:

```json
{
  "variable.readonly": {
    "foreground": "#c8c8b8",
    "fontStyle": "italic",
    "bold": true
  }
}
```

## Workbench Colors

UI colors for the entire editor interface.

### Editor Core

```json
{
  "editor.background": "#151515",
  "editor.foreground": "#e8e8d3",
  "editor.lineHighlightBackground": "#1c1c1c",
  "editor.selectionBackground": "#404040",
  "editor.selectionHighlightBackground": "#3a3a3a",
  "editor.wordHighlightBackground": "#2a2a2a",
  "editor.findMatchBackground": "#4a4a4a",
  "editor.findMatchHighlightBackground": "#3a3a3a"
}
```

### Cursor and Line Numbers

```json
{
  "editorCursor.foreground": "#fad07a",
  "editorLineNumber.foreground": "#605958",
  "editorLineNumber.activeForeground": "#ccc5c4"
}
```

### Brackets

```json
{
  "editorBracketMatch.background": "#404040",
  "editorBracketMatch.border": "#888888",
  "editorBracketHighlight.foreground1": "#8197BF",
  "editorBracketHighlight.foreground2": "#fad07a",
  "editorBracketHighlight.foreground3": "#cf6a4c",
  "editorBracketHighlight.foreground4": "#99ad6a",
  "editorBracketHighlight.foreground5": "#c6b6ee",
  "editorBracketHighlight.foreground6": "#8fbfdc"
}
```

### Ghost Text (AI Completions)

```json
{
  "editorGhostText.foreground": "#707070",
  "editorGhostText.background": "#15151500",
  "editorGhostText.border": "#404040"
}
```

### Gutter and Margins

```json
{
  "editorGutter.background": "#151515",
  "editorGutter.modifiedBackground": "#8197BF",
  "editorGutter.addedBackground": "#99ad6a",
  "editorGutter.deletedBackground": "#cf6a4c"
}
```

### Minimap

```json
{
  "minimap.background": "#151515",
  "minimap.selectionHighlight": "#fad07a44",
  "minimap.findMatchHighlight": "#fad07a"
}
```

### Scrollbar

```json
{
  "scrollbar.shadow": "#00000044",
  "scrollbarSlider.background": "#40404066",
  "scrollbarSlider.hoverBackground": "#50505088",
  "scrollbarSlider.activeBackground": "#606060aa"
}
```

### Sticky Scroll

```json
{
  "editorStickyScroll.background": "#1a1a1a",
  "editorStickyScrollHover.background": "#252525"
}
```

### Activity Bar

```json
{
  "activityBar.background": "#151515",
  "activityBar.foreground": "#e8e8d3",
  "activityBar.inactiveForeground": "#888888",
  "activityBar.border": "#252525",
  "activityBarBadge.background": "#fad07a",
  "activityBarBadge.foreground": "#151515"
}
```

### Sidebar

```json
{
  "sideBar.background": "#181818",
  "sideBar.foreground": "#e8e8d3",
  "sideBar.border": "#252525",
  "sideBarTitle.foreground": "#e8e8d3",
  "sideBarSectionHeader.background": "#1c1c1c",
  "sideBarSectionHeader.foreground": "#e8e8d3"
}
```

### Tabs

```json
{
  "tab.activeBackground": "#151515",
  "tab.activeForeground": "#e8e8d3",
  "tab.inactiveBackground": "#1a1a1a",
  "tab.inactiveForeground": "#888888",
  "tab.border": "#252525",
  "tab.activeBorderTop": "#fad07a"
}
```

### Status Bar

```json
{
  "statusBar.background": "#151515",
  "statusBar.foreground": "#e8e8d3",
  "statusBar.border": "#252525",
  "statusBar.debuggingBackground": "#cf6a4c",
  "statusBar.noFolderBackground": "#151515"
}
```

### Terminal

```json
{
  "terminal.background": "#151515",
  "terminal.foreground": "#e8e8d3",
  "terminal.ansiBlack": "#151515",
  "terminal.ansiRed": "#cf6a4c",
  "terminal.ansiGreen": "#99ad6a",
  "terminal.ansiYellow": "#fad07a",
  "terminal.ansiBlue": "#8197bf",
  "terminal.ansiMagenta": "#c6b6ee",
  "terminal.ansiCyan": "#8fbfdc",
  "terminal.ansiWhite": "#e8e8d3"
}
```

### Git Decorations

```json
{
  "gitDecoration.addedResourceForeground": "#99ad6a",
  "gitDecoration.modifiedResourceForeground": "#8197BF",
  "gitDecoration.deletedResourceForeground": "#cf6a4c",
  "gitDecoration.untrackedResourceForeground": "#fad07a",
  "gitDecoration.ignoredResourceForeground": "#555555",
  "gitDecoration.conflictingResourceForeground": "#ff8800"
}
```

### Diff Editor

```json
{
  "diffEditor.insertedTextBackground": "#99ad6a22",
  "diffEditor.removedTextBackground": "#cf6a4c22",
  "diffEditor.insertedLineBackground": "#99ad6a15",
  "diffEditor.removedLineBackground": "#cf6a4c15"
}
```

### Lists and Trees

```json
{
  "list.activeSelectionBackground": "#353535",
  "list.activeSelectionForeground": "#e8e8d3",
  "list.inactiveSelectionBackground": "#2a2a2a",
  "list.hoverBackground": "#252525",
  "list.focusBackground": "#303030",
  "tree.indentGuidesStroke": "#404040"
}
```

### Input Controls

```json
{
  "input.background": "#1c1c1c",
  "input.foreground": "#e8e8d3",
  "input.border": "#404040",
  "input.placeholderForeground": "#888888",
  "inputOption.activeBorder": "#fad07a",
  "inputOption.activeBackground": "#fad07a33"
}
```

### Buttons

```json
{
  "button.background": "#fad07a",
  "button.foreground": "#151515",
  "button.hoverBackground": "#e8c06a",
  "button.secondaryBackground": "#404040",
  "button.secondaryForeground": "#e8e8d3"
}
```

## User Customization

Users can override theme colors in settings:

```json
{
  "workbench.colorCustomizations": {
    "[Theme Name]": {
      "editor.background": "#000000"
    }
  },
  "editor.tokenColorCustomizations": {
    "[Theme Name]": {
      "textMateRules": [
        {
          "scope": "comment",
          "settings": { "fontStyle": "italic" }
        }
      ]
    }
  },
  "editor.semanticTokenColorCustomizations": {
    "[Theme Name]": {
      "enabled": true,
      "rules": {
        "variable.readonly": { "foreground": "#aabbcc" }
      }
    }
  }
}
```

## References

- [Theme Color Reference](https://code.visualstudio.com/api/references/theme-color)
- [Syntax Highlight Guide](https://code.visualstudio.com/api/language-extensions/syntax-highlight-guide)
- [Semantic Highlight Guide](https://code.visualstudio.com/api/language-extensions/semantic-highlight-guide)
- [Color Theme Guide](https://code.visualstudio.com/api/extension-guides/color-theme)
