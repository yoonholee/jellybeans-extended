# Color Theory for Code Editors

## Core Principles

### 1. Contrast is a Scarce Resource

We have a finite palette of visually distinct colors. Spend contrast budget wisely to resolve ambiguity, not for decoration.

> "Contrast is a scarce resource which we only spend to resolve ambiguity." — Craig Motlin

### 2. Selective Contrast

Traditional black-on-white creates excessive brightness contrast (like reading in direct sunlight). Better approach:

- **Lower brightness contrast** between text and background
- **Higher hue contrast** for syntax differentiation
- Result: easier on eyes, still distinguishes code elements

### 3. Perceptual Uniformity

Colors should have consistent perceived brightness. Use color spaces like CIELAB/LAB that model human perception rather than RGB.

## Color Selection Strategy

### Background & Foreground

| Mode | Background | Foreground | Notes |
|------|-----------|------------|-------|
| Dark | `#151515` - `#282a36` | `#e8e8d3` - `#f8f8f2` | Off-black, cream/off-white |
| Light | `#fdf6e3` - `#ffffff` | `#073642` - `#333333` | Warm white, dark gray |

### The 8-10 Color Rule

Most effective themes use 8-10 distinct colors:

- 2-4 **background tones** (base, current line, selection, comments)
- 1 **foreground** (primary text)
- 1 **secondary text** (comments, disabled)
- 4-6 **accent colors** for syntax

### Color Roles

| Role | Purpose | Example Colors |
|------|---------|---------------|
| Keywords | Control flow, language constructs | Blue, Purple |
| Functions | Callable names | Yellow, Gold |
| Strings | Literal text | Green |
| Numbers | Numeric literals | Orange, Red |
| Types/Classes | Type definitions | Orange, Coral |
| Comments | Documentation, notes | Gray |
| Errors | Problems, warnings | Red |
| Constants | Immutable values | Cyan, Blue |

## Harmony Principles

### Complementary Colors

Colors opposite on the color wheel. High contrast, use sparingly.

### Analogous Colors

Adjacent on color wheel. Harmonious, low contrast. Good for related elements.

### Triadic Colors

Three colors equally spaced (120°). Balanced, vibrant. Popular for syntax themes.

### Split-Complementary

Base color + two adjacent to its complement. Less tension than pure complementary.

## Practical Guidelines

### Don't Distinguish by Color Alone

Same hue, different saturation/lightness is hard to distinguish. Better approaches:

- Different hues entirely
- Add font style (italic, bold)
- Add underline or other decoration

### Mind Color Blindness

~8% of men, ~0.5% of women have color vision deficiency:

- **Protanopia/Deuteranopia**: Red-green confusion
- **Tritanopia**: Blue-yellow confusion

Safe combinations:

- Blue + Orange (safe for most types)
- Blue + Yellow
- Avoid pure red/green distinctions

### Ambient Lighting Matters

- Dark themes: Better in low-light environments
- Light themes: Better in bright environments, daylight
- Consider offering both variants

## The Solarized Approach

Ethan Schoonover's Solarized demonstrates mathematical color selection:

1. **CIELAB lightness relationships**: Colors maintain equal perceptual brightness
2. **Fixed color wheel relationships**: Hues selected using geometric relationships
3. **Symmetric light/dark modes**: Same accent colors work in both modes

## Recommended Contrast Ratios

### WCAG Guidelines

| Level | Normal Text | Large Text | UI Components |
|-------|-------------|-----------|---------------|
| AA | 4.5:1 | 3:1 | 3:1 |
| AAA | 7:1 | 4.5:1 | 4.5:1 |

### For Code Editors

- Primary text: Aim for 7:1+ against background
- Comments: 4.5:1 minimum (intentionally lower contrast)
- Keywords: High contrast (they're important)
- Strings: Medium-high contrast

## Anti-Patterns

### Rainbow Soup

Too many distinct colors creates visual noise. Limit your palette.

### Insufficient Distinction

Using three shades of blue for different elements. Users won't distinguish them.

### Hardcoding Colors

Using absolute colors instead of theme variables. Makes customization impossible.

### Ignoring Context

Same color for unrelated concepts across different file types.

## Testing Your Theme

1. **Use real code**: Not just "Hello World" - test complex files
2. **Multiple languages**: Python, JavaScript, Markdown, JSON
3. **Edge cases**: Long files, nested structures, mixed content
4. **Different monitors**: Color-calibrated and uncalibrated
5. **Lighting conditions**: Daylight, office lighting, low light
6. **Color blindness simulators**: Chrome DevTools, Sim Daltonism

## Resources

- [WCAG Contrast Checker](https://webaim.org/resources/contrastchecker/)
- [Coolors Contrast Checker](https://coolors.co/contrast-checker)
- [Color Oracle](https://colororacle.org/) - Color blindness simulator
- [Paletton](https://paletton.com/) - Color scheme designer
