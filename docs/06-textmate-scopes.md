# TextMate Scopes Reference

## Overview

TextMate scopes are hierarchical, dot-separated identifiers that classify code elements. Themes map these scopes to colors and styles.

```
keyword.control.flow.python
   │       │     │     │
   │       │     │     └── Language (most specific)
   │       │     └── Element type
   │       └── Category
   └── Root scope
```

## Root Scope Categories

| Root | Description |
|------|-------------|
| `comment` | Comments |
| `constant` | Constants, literals |
| `entity` | Classes, functions, tags |
| `invalid` | Invalid/deprecated code |
| `keyword` | Keywords |
| `markup` | Markdown, HTML content |
| `meta` | Higher-level constructs |
| `punctuation` | Punctuation marks |
| `source` | Source code files |
| `storage` | Types, modifiers |
| `string` | String literals |
| `support` | Library/framework elements |
| `text` | Text documents |
| `variable` | Variables, parameters |

## Essential Scopes for Themes

### Comments

```
comment
comment.line
comment.line.double-slash          // C, JS
comment.line.number-sign           # Python, Ruby
comment.block
comment.block.documentation        /** JSDoc */
```

### Strings

```
string
string.quoted.single               'single'
string.quoted.double               "double"
string.quoted.triple               """triple"""
string.quoted.docstring            Python docstrings
string.template                    `template ${}`
string.regexp                      /regex/
string.interpolated                Interpolated strings
punctuation.definition.string.begin
punctuation.definition.string.end
```

### Numbers & Constants

```
constant.numeric
constant.numeric.integer
constant.numeric.float
constant.numeric.hex
constant.language                  true, false, null, None
constant.character
constant.character.escape          \n, \t
constant.other
```

### Keywords

```
keyword
keyword.control                    if, else, for, while
keyword.control.flow               return, break, continue
keyword.control.import             import, from, require
keyword.control.conditional        if, else, switch
keyword.control.loop               for, while, do
keyword.operator                   Operators
keyword.operator.arithmetic        + - * /
keyword.operator.comparison        == != < >
keyword.operator.logical           && || !
keyword.operator.assignment        = += -=
keyword.other
```

### Storage & Types

```
storage
storage.type                       class, function, var, let
storage.modifier                   static, final, abstract, async
storage.type.class                 class
storage.type.function              function, def
```

### Entity Names

```
entity.name
entity.name.function               Function names
entity.name.function.method        Method names
entity.name.class                  Class names
entity.name.type                   Type names
entity.name.tag                    HTML/XML tags
entity.name.section                Section headers
entity.other.attribute-name        HTML attributes
entity.other.inherited-class       Superclass
```

### Variables

```
variable
variable.language                  this, self, super
variable.parameter                 Function parameters
variable.other                     Regular variables
variable.other.constant            CONSTANTS
variable.other.property            obj.property
```

### Support (Libraries)

```
support.function                   Built-in functions
support.class                      Built-in classes
support.type                       Built-in types
support.constant                   Built-in constants
support.variable                   Built-in variables
```

### Punctuation

```
punctuation
punctuation.definition.comment
punctuation.definition.string
punctuation.definition.tag
punctuation.separator              , ; :
punctuation.accessor               . -> ::
punctuation.bracket                ( ) [ ] { }
```

### Meta (Context)

```
meta.function
meta.function.parameters
meta.class
meta.block
meta.decorator                     @decorator
meta.annotation                    @annotation
```

### Markup (Markdown, HTML)

```
markup.heading                     # Headers
markup.heading.1                   # H1
markup.heading.2                   ## H2
markup.bold                        **bold**
markup.italic                      *italic*
markup.underline                   
markup.strikethrough               ~~strike~~
markup.list                        Lists
markup.list.numbered
markup.list.unnumbered
markup.quote                       > Blockquotes
markup.raw                         `code`
markup.raw.block                   Code blocks
markup.inline.raw                  Inline code
markup.link                        [Links](url)
markup.inserted                    Git additions
markup.deleted                     Git deletions
markup.changed                     Git changes
```

## Language-Specific Scopes

### Python

```
source.python
keyword.control.flow.python
keyword.operator.logical.python
storage.type.function.python       def
storage.type.class.python          class
entity.name.function.python
entity.name.class.python
meta.function-call.python
meta.function-call.arguments.python
variable.parameter.function.python
variable.language.special.self.python
variable.language.special.cls.python
string.quoted.docstring.multi.python
support.function.builtin.python
punctuation.definition.decorator.python
entity.name.function.decorator.python
```

### JavaScript/TypeScript

```
source.js / source.ts
keyword.control.js
keyword.operator.new.js
storage.type.js                    var, let, const
storage.type.function.js           function
storage.type.class.js              class
entity.name.function.js
entity.name.class.js
meta.function-call.js
variable.language.this.js
string.template.js
punctuation.definition.template-expression
```

### Markdown

```
text.html.markdown
markup.heading.markdown
heading.1.markdown
heading.2.markdown
entity.name.section.markdown       Heading text
punctuation.definition.heading.markdown
markup.bold.markdown
markup.italic.markdown
markup.inline.raw.string.markdown
markup.fenced_code.block.markdown
fenced_code.block.language.markdown
meta.link.inline.markdown
markup.underline.link.markdown
string.other.link.title.markdown
punctuation.definition.list.begin.markdown
markup.quote.markdown
```

### JSON

```
source.json
support.type.property-name.json    "keys"
string.quoted.double.json          "values"
constant.numeric.json
constant.language.json             true, false, null
punctuation.definition.string.begin.json
punctuation.definition.string.end.json
punctuation.separator.dictionary.key-value.json
punctuation.separator.array.json
```

### YAML

```
source.yaml
entity.name.tag.yaml               keys:
string.unquoted.plain.yaml         unquoted values
string.quoted.single.yaml
string.quoted.double.yaml
constant.numeric.yaml
constant.language.boolean.yaml
punctuation.definition.block.sequence.item.yaml
entity.name.type.anchor.yaml       &anchor
variable.other.alias.yaml          *alias
```

## Scope Inspector

Use VS Code's built-in scope inspector:
1. Command Palette: `Developer: Inspect Editor Tokens and Scopes`
2. Click on any token to see its scopes
3. Shows: semantic token, TextMate scopes, theme rules

## Minimal Theme Coverage

For basic syntax highlighting, cover at least:

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

## Scope Matching Rules

1. **More specific wins**: `keyword.control.flow.python` beats `keyword.control`
2. **Order matters**: Later rules override earlier for same specificity
3. **Selectors**: Can use space-separated parents: `source.python keyword`
4. **Exclusions**: Use minus: `string - source` (strings not in embedded code)
