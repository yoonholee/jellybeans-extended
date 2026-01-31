# Publishing VS Code Themes

## Prerequisites

1. **Node.js** (LTS version recommended)
2. **VS Code Extension Manager (vsce)**:
   ```bash
   npm install -g @vscode/vsce
   ```
3. **Microsoft Account** (for Azure DevOps)
4. **Publisher Account** on VS Code Marketplace

## Creating a Publisher

### Via Web Interface

1. Go to [Visual Studio Marketplace Management](https://marketplace.visualstudio.com/manage)
2. Sign in with Microsoft account
3. Click "Create publisher"
4. Fill in:
   - Publisher ID (unique, URL-friendly)
   - Display name
   - Description (optional)

### Via Command Line

```bash
vsce create-publisher <publisher-name>
```

## Personal Access Token (PAT)

Required for publishing. Create at Azure DevOps:

1. Go to [dev.azure.com](https://dev.azure.com)
2. Sign in with same Microsoft account
3. Click user icon → Personal access tokens
4. New Token:
   - Name: "VS Code Marketplace"
   - Organization: All accessible organizations
   - Expiration: Custom (up to 1 year)
   - Scopes: Custom defined → Marketplace → **Manage**
5. Copy the token immediately (shown only once)

## Project Structure

```
my-theme/
├── package.json           # Required
├── README.md             # Required for marketplace
├── CHANGELOG.md          # Recommended
├── LICENSE               # Recommended (MIT, Apache, etc.)
├── icon.png              # 128x128, appears in marketplace
├── themes/
│   └── my-theme-color-theme.json
└── .vscodeignore         # Files to exclude from package
```

## package.json

### Minimal Required Fields

```json
{
  "name": "my-theme",
  "displayName": "My Theme",
  "description": "A beautiful color theme",
  "version": "1.0.0",
  "publisher": "your-publisher-id",
  "engines": {
    "vscode": "^1.60.0"
  },
  "categories": ["Themes"],
  "contributes": {
    "themes": [
      {
        "label": "My Theme",
        "uiTheme": "vs-dark",
        "path": "./themes/my-theme-color-theme.json"
      }
    ]
  }
}
```

### Complete Marketplace-Ready Example

```json
{
  "name": "my-theme",
  "displayName": "My Theme",
  "description": "A carefully crafted dark theme for developers",
  "version": "1.0.0",
  "publisher": "your-publisher-id",
  "author": {
    "name": "Your Name",
    "email": "you@example.com"
  },
  "engines": {
    "vscode": "^1.60.0"
  },
  "categories": ["Themes"],
  "keywords": ["theme", "dark", "syntax", "color scheme"],
  "license": "MIT",
  "icon": "icon.png",
  "galleryBanner": {
    "color": "#151515",
    "theme": "dark"
  },
  "repository": {
    "type": "git",
    "url": "https://github.com/you/my-theme"
  },
  "bugs": {
    "url": "https://github.com/you/my-theme/issues"
  },
  "homepage": "https://github.com/you/my-theme#readme",
  "contributes": {
    "themes": [
      {
        "label": "My Theme",
        "uiTheme": "vs-dark",
        "path": "./themes/my-theme-color-theme.json"
      },
      {
        "label": "My Theme Light",
        "uiTheme": "vs",
        "path": "./themes/my-theme-light-color-theme.json"
      }
    ]
  }
}
```

### uiTheme Values

| Value | Description |
|-------|-------------|
| `vs` | Light theme |
| `vs-dark` | Dark theme |
| `hc-black` | High contrast dark |
| `hc-light` | High contrast light |

## README.md

The README appears on the marketplace. Include:

1. **Screenshot(s)** - Show your theme in action
2. **Features** - What makes it special
3. **Color palette** - Key colors
4. **Installation** - How to install
5. **Feedback** - How to report issues

### Example Structure

```markdown
# My Theme

A beautiful dark theme for VS Code.

![Screenshot](images/screenshot.png)

## Features

- Carefully selected colors for reduced eye strain
- Support for Python, JavaScript, Markdown, and more
- Both dark and light variants

## Color Palette

| Color | Hex | Usage |
|-------|-----|-------|
| Background | #151515 | Editor background |
| ...

## Installation

1. Open VS Code
2. Go to Extensions (Ctrl+Shift+X)
3. Search "My Theme"
4. Click Install
5. Select theme: Ctrl+K Ctrl+T

## Feedback

Found an issue? [Open a GitHub issue](https://github.com/...)
```

## .vscodeignore

Exclude unnecessary files from the package:

```
.git
.github
.vscode
node_modules
src
*.md
!README.md
!CHANGELOG.md
```

## Packaging

### Create VSIX Package

```bash
vsce package
```

Creates `my-theme-1.0.0.vsix`

### Verify Package Contents

```bash
unzip -l my-theme-1.0.0.vsix
```

### Install Locally for Testing

```bash
code --install-extension my-theme-1.0.0.vsix
```

## Publishing

### Login to Publisher

```bash
vsce login <publisher-id>
# Enter PAT when prompted
```

### Publish

```bash
vsce publish
```

Or publish with version bump:

```bash
vsce publish minor  # 1.0.0 → 1.1.0
vsce publish patch  # 1.0.0 → 1.0.1
vsce publish major  # 1.0.0 → 2.0.0
```

### Manual Upload

Alternatively, upload VSIX directly:
1. Go to [Marketplace Management](https://marketplace.visualstudio.com/manage)
2. Click "..." on your publisher
3. "New Extension" → "VS Code"
4. Drag and drop VSIX file

## Updating Your Theme

1. Make changes to theme files
2. Update version in `package.json`
3. Update CHANGELOG.md
4. Package and publish:
   ```bash
   vsce publish
   ```

## Best Practices

### Before Publishing

- [ ] Test on multiple monitors
- [ ] Test all supported languages
- [ ] Check accessibility (contrast ratios)
- [ ] Verify dark/light mode if applicable
- [ ] Add meaningful keywords
- [ ] Include a good icon (128x128)
- [ ] Write a helpful README
- [ ] Add screenshots

### Marketplace Optimization

1. **Good name**: Descriptive, searchable
2. **Keywords**: Relevant tags ("dark", "python", "minimal")
3. **Category**: "Themes" (required)
4. **Icon**: Professional, visible at small size
5. **Screenshots**: Show actual code, not just colors
6. **Gallery banner**: Matches theme aesthetic

### Version Management

Follow [Semantic Versioning](https://semver.org/):
- **Major** (1.0.0 → 2.0.0): Breaking changes
- **Minor** (1.0.0 → 1.1.0): New features
- **Patch** (1.0.0 → 1.0.1): Bug fixes

## Troubleshooting

### "Publisher not found"

Create publisher first:
```bash
vsce create-publisher <name>
```

### "Invalid publisher"

Ensure `publisher` in package.json matches your publisher ID exactly.

### "Missing required field"

Check package.json has: `name`, `displayName`, `description`, `version`, `publisher`, `engines`

### PAT Authentication Failed

- Verify PAT has "Marketplace > Manage" scope
- Check PAT hasn't expired
- Ensure correct organization access

## Open VSX Registry

Alternative marketplace for VS Code forks (VSCodium, etc.):

1. Create account at [open-vsx.org](https://open-vsx.org/)
2. Install ovsx:
   ```bash
   npm install -g ovsx
   ```
3. Publish:
   ```bash
   ovsx publish -p <token>
   ```

## Resources

- [Publishing Extensions](https://code.visualstudio.com/api/working-with-extensions/publishing-extension)
- [Marketplace Presentation Tips](https://code.visualstudio.com/api/references/extension-manifest#marketplace-presentation-tips)
- [vsce Documentation](https://github.com/microsoft/vscode-vsce)
- [Open VSX](https://open-vsx.org/)
