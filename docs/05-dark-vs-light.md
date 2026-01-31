# Dark Mode vs Light Mode: Research Summary

## The Science

### Eye Strain Studies

**MIT-WPU Study (2025)** - 500 software development students:

- Dark mode users reported **significantly lower eye strain**
- Improved concentration and sustained focus
- Benefits most pronounced in **prolonged coding sessions**

**MDPI Study (2025)** - Tablet users:

- Dark mode may help **reduce risk of visual fatigue**
- Both modes cause visual fatigue and dry eye symptoms
- No clear winner for "immediate effects"

### Cognitive Load Research

**Eye Tracking Study (2025)** - Ettling et al.:

- Users **perceive** dark mode as less mentally demanding
- But pupil dilation suggests cognitive load may **actually be higher**
- Discrepancy between subjective feel and physiological response

### Readability Studies

| Condition | Winner | Notes |
|-----------|--------|-------|
| Bright environment | Light mode | Better text readability |
| Low-light environment | Dark mode | Reduces glare, eye strain |
| High-precision tasks | Light mode | Better for detailed work |
| Extended sessions | Dark mode | Reduced fatigue reports |

## Dark Mode Benefits

### Eye Comfort

- Reduces screen glare in dim environments
- Less blue light emission (depends on specific colors)
- Lower overall brightness = less pupil constriction

### Battery Life

- **OLED/AMOLED screens**: Up to 63% battery savings
- True black (`#000000`) turns pixels off entirely
- LCD screens: Minimal to no battery benefit

### Aesthetic Preference

- 81.9% of developers prefer dark mode (StackOverflow 2023)
- Associated with "professional" coding environments
- Code often "pops" more against dark backgrounds

### Sleep & Circadian Rhythm

- Less blue light exposure in evening
- May help maintain melatonin production
- Benefit depends on overall screen time reduction

## Light Mode Benefits

### Readability

- Black text on white: highest contrast ratio (21:1)
- Better for proofreading and detailed reading
- Matches paper documents (familiar)

### Bright Environments

- Better visibility in daylight/office lighting
- Reduces need to squint against window glare
- Screen doesn't appear "dim"

### Accessibility

- Some users with visual impairments prefer light
- Easier to see in presentations/screen sharing
- Better for astigmatism (some studies suggest)

## Factors Affecting Choice

### Personal

- Age (older users may prefer higher contrast)
- Visual impairments (varies by condition)
- Personal aesthetic preference

### Environmental

- Ambient lighting conditions
- Screen type (OLED vs LCD)
- Working hours (day vs night)

### Task-Based

- Reading dense text: Light may be better
- Long coding sessions: Dark may be better
- Screen sharing/presentations: Light often preferred

## Recommendations for Theme Developers

### Offer Both Modes

- Provide dark AND light variants
- Match color relationships between modes
- Use same accent colors when possible (Solarized approach)

### Dark Mode Design Tips

- Don't use pure black (`#000000`) - too harsh
- Aim for dark gray (`#1a1a1a` to `#2d2d2d`)
- Reduce saturation of accent colors slightly
- Ensure sufficient contrast (WCAG guidelines)

### Light Mode Design Tips

- Don't use pure white (`#ffffff`) for large areas
- Consider warm off-white (`#fdf6e3`, `#faf8f5`)
- Accent colors may need to be deeper/darker
- Watch for glare on glossy screens

## Auto-Switching

VS Code supports automatic theme switching based on OS:

```json
{
  "window.autoDetectColorScheme": true,
  "workbench.preferredDarkColorTheme": "One Dark Pro",
  "workbench.preferredLightColorTheme": "GitHub Light"
}
```

## The Verdict

**There is no universally "better" mode.**

| Situation | Recommendation |
|-----------|---------------|
| Evening/night coding | Dark mode |
| Daytime, bright office | Light mode |
| Long sessions | Dark mode (usually) |
| Reading documentation | Light mode |
| Presentations | Light mode |
| Battery conscious (OLED) | Dark mode |
| Personal preference | Trust your eyes |

### Key Insight

> "The best theme is the one you don't notice."

If you're constantly aware of your theme, something is wrong. A good theme fades into the background while keeping code readable.

## References

1. Impact of Dark Mode on Software Development (MIT-WPU, 2025)
2. Immediate Effects of Light/Dark Mode on Visual Fatigue (MDPI, 2025)
3. Eye Tracking Study on Dark/Light Themes (ETRA, 2025)
4. WCAG 2.1 Contrast Guidelines
5. StackOverflow Developer Survey 2023
