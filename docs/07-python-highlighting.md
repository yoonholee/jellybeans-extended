# Python Syntax Highlighting

## Overview

Python has unique syntax elements that benefit from thoughtful highlighting:
- Decorators (`@`)
- Self/cls parameters
- Type hints
- F-strings
- Magic/dunder methods
- Docstrings

## Key TextMate Scopes

### Functions & Classes

```
entity.name.function.python        # def my_function():
entity.name.class.python           # class MyClass:
storage.type.function.python       # def keyword
storage.type.class.python          # class keyword
meta.function-call.python          # function()
meta.function-call.generic.python  # generic call context
```

### Decorators

```
punctuation.definition.decorator.python    # @ symbol
entity.name.function.decorator.python      # decorator name
meta.decorator.python                      # entire decorator
```

**Recommended styling**: Italic or distinct color to separate from regular functions

### Self & Cls Parameters

```
variable.parameter.function.language.special.self.python
variable.parameter.function.language.special.cls.python
variable.language.special.self.python
variable.language.special.cls.python
```

**Semantic tokens** (Pylance):
```json
"selfParameter": "#569CD6",
"clsParameter": "#569CD6"
```

**Recommended styling**: Keyword color or italic to distinguish from regular parameters

### Type Hints

```
# TextMate scopes (limited)
support.type.python
meta.function.parameters.python

# Semantic token rules (better)
"*.typeHint": { "foreground": "#888888", "fontStyle": "italic" },
"class.typeHint.builtin": { "foreground": "#888888", "fontStyle": "italic" }
```

**Challenge**: Type hints often tokenize as regular classes. Use semantic highlighting for better results.

### Strings

```
string.quoted.single.python              # 'single'
string.quoted.double.python              # "double"
string.quoted.docstring.multi.python     # """docstring"""
string.quoted.docstring.single.python    # '''docstring'''
string.interpolated.python               # f-string
constant.character.format.placeholder.python    # {variable} in f-string
constant.character.escape.python         # \n, \t
```

### F-Strings (Python 3.6+)

```
string.interpolated.python               # f"..."
punctuation.definition.template-expression.begin.python   # {
punctuation.definition.template-expression.end.python     # }
constant.character.format.placeholder.other.python
```

**Tip**: Color `{}` brackets and expressions differently from the string content.

### Magic/Dunder Methods

```
support.function.magic.python            # __init__, __str__, etc.
entity.name.function.python              # falls back here often
```

**Common dunder methods to highlight**:
- `__init__`, `__new__`, `__del__`
- `__str__`, `__repr__`
- `__eq__`, `__lt__`, `__gt__`, `__hash__`
- `__len__`, `__getitem__`, `__setitem__`
- `__enter__`, `__exit__`
- `__call__`
- `__iter__`, `__next__`

**Tip**: Consider italic or bold for dunder methods if you want them to stand out.

### Built-in Functions

```
support.function.builtin.python          # print, len, range, etc.
```

### Keywords

```
keyword.control.flow.python              # if, else, for, while, return
keyword.control.import.python            # import, from
keyword.operator.logical.python          # and, or, not, in, is
keyword.operator.arithmetic.python       # +, -, *, /
storage.modifier.python                  # async, await
```

### Constants

```
constant.language.python                 # True, False, None
constant.numeric.integer.python
constant.numeric.float.python
constant.numeric.hex.python
```

## Semantic Highlighting (Pylance)

Pylance provides richer semantic tokens:

```json
{
  "editor.semanticTokenColorCustomizations": {
    "rules": {
      "class:python": "#fabb6e",
      "function:python": "#fad07a",
      "parameter:python": "#ddddc1",
      "variable:python": "#ddddc1",
      "variable.readonly:python": "#c8c8b8",
      "selfParameter:python": "#8197BF",
      "clsParameter:python": "#8197BF",
      "decorator:python": "#fad07a",
      "builtinConstant:python": "#8197BF"
    }
  }
}
```

## Example Theme Rules for Python

```json
{
  "tokenColors": [
    {
      "name": "Python self/cls",
      "scope": [
        "variable.parameter.function.language.special.self.python",
        "variable.parameter.function.language.special.cls.python"
      ],
      "settings": {
        "foreground": "#8197BF",
        "fontStyle": "italic"
      }
    },
    {
      "name": "Python decorators",
      "scope": [
        "punctuation.definition.decorator.python",
        "entity.name.function.decorator.python"
      ],
      "settings": {
        "foreground": "#fad07a"
      }
    },
    {
      "name": "Python docstrings",
      "scope": "string.quoted.docstring.multi.python",
      "settings": {
        "foreground": "#888888",
        "fontStyle": "italic"
      }
    },
    {
      "name": "Python f-string braces",
      "scope": [
        "punctuation.definition.template-expression.begin.python",
        "punctuation.definition.template-expression.end.python"
      ],
      "settings": {
        "foreground": "#cf6a4c"
      }
    },
    {
      "name": "Python function call",
      "scope": "meta.function-call.generic.python",
      "settings": {
        "foreground": "#fad07a"
      }
    },
    {
      "name": "Python magic methods",
      "scope": "support.function.magic.python",
      "settings": {
        "foreground": "#fad07a",
        "fontStyle": "bold"
      }
    }
  ]
}
```

## Best Practices for Python Themes

### 1. Differentiate self/cls
Make `self` and `cls` visually distinct from regular parameters. Many themes use keyword color or italic.

### 2. Style Decorators Distinctly
Decorators are meta-programming. Consider a unique color or italic style.

### 3. Dim Docstrings
Docstrings are documentation, not code. Consider comment color or gray.

### 4. Highlight F-String Expressions
The `{variable}` parts inside f-strings are code. Make them stand out from the string.

### 5. Consider Type Hint Styling
Type hints can clutter visually. Consider:
- Dimmer color (gray)
- Italic
- Same as comments

### 6. Magic Methods
If important to your workflow, make `__init__` etc. stand out with bold or different color.

## Testing Python Highlighting

Use this test file:

```python
from typing import Optional, List
import asyncio

@dataclass
class User:
    """A user in the system."""
    
    name: str
    email: Optional[str] = None
    
    def __init__(self, name: str) -> None:
        self.name = name
    
    def __repr__(self) -> str:
        return f"User({self.name!r})"
    
    @classmethod
    def from_dict(cls, data: dict) -> "User":
        return cls(data["name"])
    
    @staticmethod
    def validate_email(email: str) -> bool:
        return "@" in email
    
    async def fetch_profile(self) -> dict:
        """Fetch user profile from API."""
        result = await asyncio.sleep(1)
        return {"name": self.name}

# Constants
MAX_USERS: int = 100
DEFAULT_NAME = "Anonymous"

# F-strings and formatting
print(f"Hello, {user.name}!")
print(f"Count: {len(users):,d}")
```

## Resources

- [MagicPython](https://marketplace.visualstudio.com/items?itemName=magicstack.MagicPython) - Enhanced Python grammar
- [Pylance](https://marketplace.visualstudio.com/items?itemName=ms-python.vscode-pylance) - Semantic highlighting
- [Python Scope List](https://github.com/MagicStack/MagicPython/blob/master/misc/scopes)
