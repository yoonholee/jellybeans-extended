# JSON and YAML Syntax Highlighting

## JSON

### Key TextMate Scopes

```
source.json                                    # File scope

# Keys (property names)
support.type.property-name.json                # "key"
string.json.key                                # Alternative
meta.structure.dictionary.key.json

# Values
string.quoted.double.json                      # "value"
constant.numeric.json                          # 123, 1.5
constant.language.json                         # true, false, null

# Punctuation
punctuation.definition.string.begin.json       # Opening "
punctuation.definition.string.end.json         # Closing "
punctuation.separator.dictionary.key-value.json  # :
punctuation.separator.dictionary.pair.json     # , between pairs
punctuation.separator.array.json               # , in arrays
punctuation.definition.dictionary.begin.json   # {
punctuation.definition.dictionary.end.json     # }
punctuation.definition.array.begin.json        # [
punctuation.definition.array.end.json          # ]
```

### Design Considerations

**Keys vs Values**: The most important distinction in JSON. Keys should be clearly differentiated from string values.

| Element | Recommended Color | Reasoning |
|---------|------------------|-----------|
| Keys | Yellow/Gold | Stand out, identify structure |
| String values | Green | Content, distinct from keys |
| Numbers | Orange/Red | Data type distinction |
| Booleans/null | Blue/Keyword | Language constants |
| Punctuation | Dim/Foreground | Structure, not content |

### Example Theme Rules

```json
{
  "tokenColors": [
    {
      "name": "JSON Key",
      "scope": [
        "support.type.property-name.json",
        "support.type.property-name.json.comments"
      ],
      "settings": {
        "foreground": "#fad07a"
      }
    },
    {
      "name": "JSON String Value",
      "scope": "string.quoted.double.json",
      "settings": {
        "foreground": "#99ad6a"
      }
    },
    {
      "name": "JSON Number",
      "scope": "constant.numeric.json",
      "settings": {
        "foreground": "#cf6a4c"
      }
    },
    {
      "name": "JSON Boolean/Null",
      "scope": "constant.language.json",
      "settings": {
        "foreground": "#8197BF"
      }
    }
  ]
}
```

### JSON with Comments (JSONC)

VS Code supports `jsonc` for files like `settings.json`:

```
source.json.comments                           # File scope
comment.line.double-slash.jsonc                # // comment
comment.block.json                             # /* comment */
```

---

## YAML

### Key TextMate Scopes

```
source.yaml                                    # File scope

# Keys
entity.name.tag.yaml                           # key:
meta.key.yaml                                  # Key context

# Values
string.unquoted.plain.yaml                     # unquoted value
string.unquoted.plain.out.yaml                 # Outside quotes
string.quoted.single.yaml                      # 'single quoted'
string.quoted.double.yaml                      # "double quoted"
string.unquoted.block.yaml                     # Block scalars
constant.numeric.yaml                          # 123
constant.numeric.integer.yaml
constant.numeric.float.yaml
constant.language.boolean.yaml                 # true, false
constant.language.null.yaml                    # null, ~

# Structure
punctuation.definition.block.sequence.item.yaml  # - in lists
punctuation.separator.key-value.mapping.yaml   # :
punctuation.definition.mapping.yaml

# Special
entity.name.type.anchor.yaml                   # &anchor
variable.other.alias.yaml                      # *alias
punctuation.definition.alias.yaml              # * for alias
punctuation.definition.anchor.yaml             # & for anchor
keyword.control.flow.yaml                      # ---  ...

# Block Scalars
punctuation.definition.block.scalar.literal.yaml   # |
punctuation.definition.block.scalar.folded.yaml    # >
```

### Design Considerations

**Keys as anchors**: YAML keys define structure. Make them prominent.

**Multiple value types**: YAML allows unquoted strings, which can look like plain text. Consider visual hierarchy:

| Element | Recommended Color | Notes |
|---------|------------------|-------|
| Keys | Yellow/Gold | Primary navigation |
| String values | Green | Quoted and unquoted |
| Numbers | Orange/Red | Numeric distinction |
| Booleans | Blue | Keywords |
| Anchors | Purple | Meta/special |
| Aliases | Purple | References anchors |
| Comments | Gray | Non-code |
| Block indicators | Dim | `|` and `>` |

### Example Theme Rules

```json
{
  "tokenColors": [
    {
      "name": "YAML Key",
      "scope": "entity.name.tag.yaml",
      "settings": {
        "foreground": "#fad07a"
      }
    },
    {
      "name": "YAML String",
      "scope": [
        "string.unquoted.plain.yaml",
        "string.quoted.single.yaml",
        "string.quoted.double.yaml"
      ],
      "settings": {
        "foreground": "#99ad6a"
      }
    },
    {
      "name": "YAML Number",
      "scope": [
        "constant.numeric.yaml",
        "constant.numeric.integer.yaml",
        "constant.numeric.float.yaml"
      ],
      "settings": {
        "foreground": "#cf6a4c"
      }
    },
    {
      "name": "YAML Boolean/Null",
      "scope": [
        "constant.language.boolean.yaml",
        "constant.language.null.yaml"
      ],
      "settings": {
        "foreground": "#8197BF"
      }
    },
    {
      "name": "YAML Anchor/Alias",
      "scope": [
        "entity.name.type.anchor.yaml",
        "variable.other.alias.yaml",
        "punctuation.definition.alias.yaml",
        "punctuation.definition.anchor.yaml"
      ],
      "settings": {
        "foreground": "#b267e6"
      }
    },
    {
      "name": "YAML List Item Marker",
      "scope": "punctuation.definition.block.sequence.item.yaml",
      "settings": {
        "foreground": "#fad07a"
      }
    }
  ]
}
```

### Nested Structure Visibility

YAML relies heavily on indentation. Consider:

1. **Indent guides**: Use `editorIndentGuide` colors
2. **Bracket pair colorization**: Less relevant for YAML
3. **List markers**: Highlight `-` for sequence items

### Embedded Languages in YAML

YAML often contains embedded code (shell scripts, SQL, etc.). Extensions like `vscode-yaml-embedded-languages` can inject syntax:

```yaml
script: |
  #!/bin/bash
  echo "Hello"  # Gets bash highlighting
```

---

## Common Patterns

### Key/Property Colors Across Languages

Consistency helps when switching between JSON, YAML, and other languages:

| Language | Key/Property Scope | Typical Color |
|----------|-------------------|---------------|
| JSON | `support.type.property-name.json` | Yellow/Gold |
| YAML | `entity.name.tag.yaml` | Yellow/Gold |
| TOML | `keyword.key.toml` | Yellow/Gold |
| JavaScript | `meta.object-literal.key` | Yellow/Gold |
| Python dict | `meta.structure.dictionary.key.python` | Yellow/Gold |

### Data Type Consistency

| Type | JSON Scope | YAML Scope | Color |
|------|-----------|-----------|-------|
| String | `string.quoted.double.json` | `string.*.yaml` | Green |
| Number | `constant.numeric.json` | `constant.numeric.yaml` | Orange |
| Boolean | `constant.language.json` | `constant.language.boolean.yaml` | Blue |
| Null | `constant.language.json` | `constant.language.null.yaml` | Blue |

---

## Testing JSON/YAML Highlighting

### JSON Test File

```json
{
  "name": "Example",
  "version": "1.0.0",
  "enabled": true,
  "count": 42,
  "ratio": 3.14,
  "tags": ["one", "two", "three"],
  "nested": {
    "deep": {
      "value": null
    }
  },
  "multiline": "This is a\nlong string"
}
```

### YAML Test File

```yaml
# Configuration file
name: Example
version: 1.0.0

settings:
  enabled: true
  count: 42
  ratio: 3.14
  empty: null
  
tags:
  - one
  - two
  - three

anchored: &defaults
  timeout: 30
  retries: 3

service:
  <<: *defaults
  name: my-service

multiline_literal: |
  This is a literal
  block scalar

multiline_folded: >
  This is a folded
  block scalar

special_strings:
  quoted: "with \"escapes\""
  single: 'single quoted'
  unquoted: plain text value
```

## Resources

- [JSON Language Server](https://github.com/microsoft/vscode/tree/main/extensions/json-language-features)
- [YAML Language Server](https://github.com/redhat-developer/yaml-language-server)
- [YAML Embedded Languages Extension](https://github.com/harrydowning/vscode-yaml-embedded-languages)
