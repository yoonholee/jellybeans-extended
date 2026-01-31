# Markdown Syntax Highlighting

## Overview

Markdown presents unique challenges for syntax highlighting:
- Mixed content (prose, code, links)
- Structural elements (headers, lists, quotes)
- Embedded code blocks with language-specific highlighting
- Emphasis and formatting marks

## Key TextMate Scopes

### Headers

```
markup.heading.markdown                    # All headers
heading.1.markdown                         # # H1
heading.2.markdown                         # ## H2
heading.3.markdown                         # ### H3
heading.4.markdown                         # #### H4
heading.5.markdown                         # ##### H5
heading.6.markdown                         # ###### H6
entity.name.section.markdown               # Header text itself
punctuation.definition.heading.markdown    # The # symbols
```

**Tip**: Color different heading levels differently for visual hierarchy:
```json
{
  "scope": "heading.1.markdown entity.name.section.markdown",
  "settings": { "foreground": "#ff6b6b" }
},
{
  "scope": "heading.2.markdown entity.name.section.markdown",
  "settings": { "foreground": "#ffa94d" }
}
```

### Emphasis

```
markup.bold.markdown                       # **bold**
markup.italic.markdown                     # *italic*
markup.strikethrough.markdown              # ~~strikethrough~~
punctuation.definition.bold.markdown       # ** markers
punctuation.definition.italic.markdown     # * markers
punctuation.definition.strikethrough.markdown
```

**Recommended styling**:
- Bold: `fontStyle: bold` (obvious)
- Italic: `fontStyle: italic` (obvious)
- Strikethrough: gray + `fontStyle: strikethrough`

### Links

```
meta.link.inline.markdown                  # [text](url) entire
markup.underline.link.markdown             # URL portion
string.other.link.title.markdown           # Link text
string.other.link.description.markdown     # Link description
punctuation.definition.link.title.begin.markdown
punctuation.definition.link.title.end.markdown
punctuation.definition.metadata.markdown   # ( ) around URL
```

**Recommended styling**: 
- Link text: Blue or cyan, possibly underlined
- URL: Dimmer color (gray)
- Punctuation: Even dimmer

### Lists

```
markup.list.unnumbered.markdown            # - * + lists
markup.list.numbered.markdown              # 1. 2. lists
punctuation.definition.list.begin.markdown # The - * + 1. markers
beginning.punctuation.definition.list.markdown
```

**Recommended styling**: List markers in accent color (yellow, orange)

### Blockquotes

```
markup.quote.markdown                      # > quote text
punctuation.definition.quote.begin.markdown  # > character
```

**Recommended styling**: Italic, possibly dimmed or different color

### Code

```
# Inline code
markup.inline.raw.string.markdown          # `code`
markup.raw.inline.markdown                 # Alternative scope
punctuation.definition.raw.markdown        # ` markers

# Fenced code blocks
markup.fenced_code.block.markdown          # ```code```
markup.raw.block.markdown                  # Alternative
fenced_code.block.language.markdown        # Language identifier
punctuation.definition.markdown            # ``` markers
```

**Recommended styling**:
- Different background color for code
- Monospace implied by editor
- Language identifier: dim/gray

### Images

```
meta.image.inline.markdown                 # ![alt](url)
string.other.link.description.title.markdown  # Alt text
markup.underline.link.image.markdown       # Image URL
```

### Horizontal Rules

```
meta.separator.markdown                    # --- or ***
```

## Example Theme Rules

```json
{
  "tokenColors": [
    {
      "name": "Markdown Heading",
      "scope": [
        "markup.heading.markdown",
        "punctuation.definition.heading.markdown",
        "entity.name.section.markdown"
      ],
      "settings": {
        "foreground": "#fabb6e",
        "fontStyle": "bold"
      }
    },
    {
      "name": "Markdown Link Text",
      "scope": [
        "string.other.link.title.markdown",
        "string.other.link.description.markdown"
      ],
      "settings": {
        "foreground": "#99ad6a"
      }
    },
    {
      "name": "Markdown URL",
      "scope": [
        "markup.underline.link.markdown",
        "markup.underline.link.image.markdown"
      ],
      "settings": {
        "foreground": "#8197BF"
      }
    },
    {
      "name": "Markdown Bold",
      "scope": [
        "markup.bold.markdown",
        "punctuation.definition.bold.markdown"
      ],
      "settings": {
        "fontStyle": "bold"
      }
    },
    {
      "name": "Markdown Italic",
      "scope": [
        "markup.italic.markdown",
        "punctuation.definition.italic.markdown"
      ],
      "settings": {
        "fontStyle": "italic"
      }
    },
    {
      "name": "Markdown Quote",
      "scope": [
        "markup.quote.markdown",
        "punctuation.definition.quote.begin.markdown"
      ],
      "settings": {
        "foreground": "#888888",
        "fontStyle": "italic"
      }
    },
    {
      "name": "Markdown Inline Code",
      "scope": [
        "markup.inline.raw.string.markdown",
        "markup.raw.inline.markdown"
      ],
      "settings": {
        "foreground": "#99ad6a"
      }
    },
    {
      "name": "Markdown Fenced Code Block",
      "scope": [
        "markup.fenced_code.block.markdown",
        "markup.raw.block.markdown"
      ],
      "settings": {
        "foreground": "#c8c8b8"
      }
    },
    {
      "name": "Markdown Code Block Language",
      "scope": "fenced_code.block.language.markdown",
      "settings": {
        "foreground": "#888888"
      }
    },
    {
      "name": "Markdown List Marker",
      "scope": [
        "punctuation.definition.list.begin.markdown",
        "beginning.punctuation.definition.list.markdown"
      ],
      "settings": {
        "foreground": "#fad07a"
      }
    },
    {
      "name": "Markdown Strikethrough",
      "scope": [
        "markup.strikethrough.markdown",
        "punctuation.definition.strikethrough.markdown"
      ],
      "settings": {
        "foreground": "#888888",
        "fontStyle": "strikethrough"
      }
    },
    {
      "name": "Markdown Separator",
      "scope": "meta.separator.markdown",
      "settings": {
        "foreground": "#555555"
      }
    }
  ]
}
```

## Fenced Code Block Language Highlighting

VS Code automatically applies language-specific highlighting inside fenced code blocks:

````markdown
```python
def hello():
    print("Hello!")
```
````

This is handled by **injection grammars**. The `fenced_code.block.language.markdown` scope contains the language identifier.

### Adding Custom Language Support

Create an extension with injection grammar:

```json
{
  "contributes": {
    "grammars": [{
      "scopeName": "markdown.myLanguage",
      "path": "./syntaxes/myLanguage.markdown.json",
      "injectTo": ["text.html.markdown"]
    }]
  }
}
```

## Styling Considerations

### Heading Hierarchy

Visual hierarchy helps navigation:

| Level | Color | Size/Weight |
|-------|-------|-------------|
| H1 | Brightest/warmest | Bold |
| H2 | Slightly dimmer | Bold |
| H3 | Even dimmer | Bold or regular |
| H4-H6 | Progressively dimmer | Regular |

### Punctuation Visibility

Markdown has lots of punctuation (`#`, `*`, `-`, `` ` ``, `[`, `]`). Two approaches:

1. **Dim punctuation**: Focus on content, punctuation fades
2. **Visible punctuation**: Easier to edit, see structure

### Code vs Prose Balance

Code blocks and inline code should be visually distinct:
- Background tint for code regions
- Different font (monospace)
- Border or highlight

### Dark Mode Considerations

In dark themes:
- Headers can be brighter (they're important)
- Code blocks may need subtle background
- Links should still look "linkish" (blue/cyan tradition)

## Testing Markdown Highlighting

```markdown
# Heading 1

## Heading 2

### Heading 3

Regular paragraph with **bold**, *italic*, and ~~strikethrough~~ text.

- Unordered list item
- Another item
  - Nested item

1. Ordered list
2. Second item

> Blockquote text
> continues here

[Link text](https://example.com "Title")

![Image alt](image.png)

Inline `code` and:

```python
def code_block():
    pass
```

---

| Table | Header |
|-------|--------|
| Cell  | Cell   |
```

## Resources

- [Markdown All in One](https://marketplace.visualstudio.com/items?itemName=yzhang.markdown-all-in-one)
- [GitHub Markdown Spec](https://github.github.com/gfm/)
- [VS Code Markdown Documentation](https://code.visualstudio.com/docs/languages/markdown)
