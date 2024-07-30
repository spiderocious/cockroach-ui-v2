# @cockroach-ui/tokens

Design tokens and theming system for the Cockroach UI component library.

## Installation

```bash
npm install @cockroach-ui/tokens
```

## Quick Start

```tsx
import { initializeTokens } from '@cockroach-ui/tokens';

// Initialize with default tokens
initializeTokens();
```

## Features

- **Configurable Token System**: Override default tokens with your brand colors
- **Runtime CSS Variables**: Dynamic theming with CSS custom properties
- **Fallback Support**: Graceful degradation to default values
- **TypeScript Support**: Full type safety and IntelliSense
- **Tailwind Integration**: Works seamlessly with Tailwind CSS classes

## Usage

### Basic Usage (Default Tokens)

```tsx
import { initializeTokens } from '@cockroach-ui/tokens';

// Use default design tokens
initializeTokens();
```

### Custom Token Configuration

```tsx
import { configureTokens, initializeTokens } from '@cockroach-ui/tokens';

// Configure custom tokens
configureTokens({
  colors: {
    primary: {
      500: '#your-brand-color',
      600: '#your-brand-dark',
    },
  },
  spacing: {
    custom: '2.5rem',
  },
});

// Initialize with custom tokens
initializeTokens();
```

### Dynamic Theme Switching

```tsx
import { configureTokens, injectCSSVariables } from '@cockroach-ui/tokens';

function switchTheme(theme: 'light' | 'dark') {
  configureTokens({
    colors: {
      primary: theme === 'light' ? { 500: '#0ea5e9' } : { 500: '#38bdf8' },
    },
  });

  // Re-inject CSS variables
  injectCSSVariables();
}
```

## Token Categories

### Colors

- `primary`: Main brand colors (50-950 scale)
- `secondary`: Secondary colors (50-950 scale)
- `success`: Success state colors (50-950 scale)
- `warning`: Warning state colors (50-950 scale)
- `error`: Error state colors (50-950 scale)
- `neutral`: Neutral/gray colors (50-950 scale)

### Spacing

- Consistent spacing scale from 0 to 64 (0px to 16rem)

### Typography

- `fontSize`: xs, sm, base, lg, xl, 2xl, 3xl, 4xl, 5xl, 6xl
- `fontWeight`: thin, extralight, light, normal, medium, semibold, bold, extrabold, black

### Border Radius

- `borderRadius`: none, sm, DEFAULT, md, lg, xl, 2xl, 3xl, full

### Box Shadow

- `boxShadow`: sm, DEFAULT, md, lg, xl, 2xl, inner, none

## CSS Variables

Tokens are automatically converted to CSS custom properties:

```css
:root {
  --color-primary-500: #0ea5e9;
  --spacing-4: 1rem;
  --font-size-base: 1rem;
  --border-radius-lg: 0.5rem;
  /* ... and many more */
}
```

Use in your CSS:

```css
.my-component {
  background-color: var(--color-primary-500);
  padding: var(--spacing-4);
  border-radius: var(--border-radius-lg);
}
```

## API Reference

### Functions

- `configureTokens(customTokens, replaceDefaults?)` - Configure custom design tokens
- `getTokens()` - Get current token configuration
- `resetTokens()` - Reset to default tokens
- `hasCustomTokens()` - Check if custom tokens are configured
- `initializeTokens()` - Initialize token system (injects CSS variables)
- `injectCSSVariables()` - Inject/update CSS variables in document
- `generateCSSVariables()` - Generate CSS custom properties string

### Token Getters

- `getColors()` - Get current color tokens
- `getSpacing()` - Get current spacing tokens
- `getFontSize()` - Get current font size tokens
- `getFontWeight()` - Get current font weight tokens
- `getBorderRadius()` - Get current border radius tokens
- `getBoxShadow()` - Get current box shadow tokens

## Development

```bash
# Run tests
npx nx test tokens

# Build package
npx nx build tokens
```

## TypeScript Support

Full TypeScript support with intelligent autocompletion:

```tsx
import { TokensConfig, DeepPartial } from '@cockroach-ui/tokens';

const myTokens: DeepPartial<TokensConfig> = {
  colors: {
    primary: {
      500: '#custom-color', // TypeScript ensures correct structure
    },
  },
};
```
