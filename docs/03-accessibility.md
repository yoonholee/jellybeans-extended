# Accessibility in Code Editor Themes

## Color Vision Deficiency Statistics

- ~300 million people worldwide with color blindness
- ~253 million with low vision
- ~8% of men, ~0.5% of women affected
- Most common: red-green color blindness (deuteranopia, protanopia)

## Types of Color Blindness

### Red-Green (Most Common)

| Type | Prevalence | Confusion |
|------|-----------|-----------|
| Deuteranopia | 1% men | Red ↔ Green |
| Deuteranomaly | 5% men | Reduced green sensitivity |
| Protanopia | 1% men | Red appears dark |
| Protanomaly | 1% men | Reduced red sensitivity |

### Blue-Yellow (Rare)

| Type | Prevalence | Confusion |
|------|-----------|-----------|
| Tritanopia | 0.01% | Blue ↔ Yellow |
| Tritanomaly | 0.01% | Reduced blue sensitivity |

### Monochromacy (Very Rare)

- Complete color blindness
- Sees only grayscale

## WCAG Contrast Requirements

### Text Contrast (WCAG 2.1)

| Level | Normal Text | Large Text |
|-------|-------------|-----------|
| AA (minimum) | 4.5:1 | 3:1 |
| AAA (enhanced) | 7:1 | 4.5:1 |

Large text = 18pt+ regular or 14pt+ bold

### Non-Text Contrast (WCAG 2.1)

- UI components and graphics: **3:1 minimum**
- Includes: form inputs, focus indicators, icons

### WCAG 1.4.1 - Use of Color

> Color is not used as the only visual means of conveying information

For code editors:
- Don't rely solely on color for errors (add squiggles, icons)
- Provide multiple visual cues for importance

## APCA (Advanced Perceptual Contrast Algorithm)

WCAG 2.x has limitations, especially for dark mode. APCA addresses:

- Better modeling of dark-on-light vs light-on-dark asymmetry
- More accurate for low-luminance backgrounds
- Part of WCAG 3.0 draft

APCA contrast values:
- Lc 90+: Fluent body text
- Lc 75-90: Large text, headlines
- Lc 60-75: Sub-text, placeholders
- Lc 45-60: Large icons, graphics

## Accessible Theme Design

### Safe Color Combinations

**Works for most color blindness:**
- Blue + Orange
- Blue + Yellow  
- Blue + White/Black
- Purple + Yellow
- High contrast neutrals

**Avoid:**
- Red + Green as sole distinction
- Light green + yellow
- Blue + purple (for tritanopia)

### Beyond Color

Supplement color with:
- **Font weight**: Bold for emphasis
- **Font style**: Italic for comments, decorators
- **Underlines**: For links, errors
- **Background highlights**: For selections, current line
- **Icons**: For file types, git status

### Recommended Accessible Themes

| Theme | Notes |
|-------|-------|
| GitHub Theme | Accessible to most forms of color blindness |
| Pitaya Smoothie | WCAG 2.1 compliant for color contrast |
| Modus (Emacs) | Designed specifically for WCAG AAA |
| High Contrast | Built into VS Code |
| Gotthard | Optimized for ~20 programming languages |
| Blinds | Designed for deuteranopia |

## Testing for Accessibility

### Browser DevTools

Chrome/Edge DevTools can emulate vision deficiencies:
1. Open DevTools → More Tools → Rendering
2. Scroll to "Emulate vision deficiencies"
3. Test: Protanopia, Deuteranopia, Tritanopia, Achromatopsia

### Standalone Tools

- **Color Oracle** (Mac/Win/Linux): System-wide simulation
- **Sim Daltonism** (Mac): Real-time camera simulation
- **NoCoffee** (Chrome): Vision impairment simulator

### Contrast Checking

- [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/)
- [Coolors Contrast Checker](https://coolors.co/contrast-checker)
- VS Code CSS Overview tool (in DevTools)

## VS Code High Contrast Mode

VS Code provides built-in high contrast themes:
- **High Contrast** (dark)
- **High Contrast Light**

Enable via: File → Preferences → Theme → Color Theme

These themes set additional `contrastBorder` and `contrastActiveBorder` colors.

## Customizing for Accessibility

### User Settings

Users can override any theme color:

```json
{
  "workbench.colorCustomizations": {
    "[Your Theme]": {
      "editor.background": "#000000",
      "editor.foreground": "#ffffff"
    }
  },
  "editor.tokenColorCustomizations": {
    "[Your Theme]": {
      "textMateRules": [{
        "scope": "comment",
        "settings": {
          "foreground": "#808080"
        }
      }]
    }
  }
}
```

### Warning Colors

Customize warning colors if defaults are problematic:

```json
{
  "workbench.colorCustomizations": {
    "editorWarning.foreground": "#ffcc00",
    "editorWarning.background": "#ffcc0020"
  }
}
```

## Checklist for Theme Authors

- [ ] Test with color blindness simulators
- [ ] Verify 4.5:1 contrast ratio for normal text
- [ ] Verify 3:1 contrast ratio for large text and UI
- [ ] Don't use color as sole indicator
- [ ] Test in both light and dark ambient lighting
- [ ] Provide high contrast variant if possible
- [ ] Document accessibility considerations in README

## Resources

- [WCAG 2.1 Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)
- [APCA Contrast Calculator](https://www.myndex.com/APCA/)
- [Color Blindness Simulator](https://www.color-blindness.com/coblis-color-blindness-simulator/)
- [Accessible Pygments Themes](https://github.com/Quansight-Labs/accessible-pygments)
- [VS Code Accessibility Documentation](https://code.visualstudio.com/docs/editor/accessibility)
