# @cockroach-ui/components

React components for the Cockroach UI design system.

## Installation

```bash
npm install @cockroach-ui/components @cockroach-ui/tokens
```

## Usage

```tsx
import React from 'react';
import { Button } from '@cockroach-ui/components';
import { initializeTokens } from '@cockroach-ui/tokens';

// Initialize design tokens (call once in your app)
initializeTokens();

function App() {
  return (
    <div>
      <Button variant="primary" size="md">
        Click me
      </Button>
    </div>
  );
}
```

## Components

### Button

A flexible button component with multiple variants and sizes.

**Props:**

- `variant`: 'primary' | 'secondary' (default: 'primary')
- `size`: 'sm' | 'md' | 'lg' (default: 'md')
- `children`: React.ReactNode
- Standard button props (onClick, disabled, etc.)

**Example:**

```tsx
<Button variant="primary" size="lg" onClick={() => alert('Clicked!')}>
  Primary Button
</Button>
```

## Development

This package is part of the Cockroach UI monorepo. For development:

```bash
# Install dependencies
npm install

# Run tests
npx nx test components

# Build package
npx nx build components

# Run Storybook
npx nx storybook components
```

## Design Tokens Integration

Components automatically use design tokens from `@cockroach-ui/tokens`. You can customize the appearance by configuring tokens:

```tsx
import { configureTokens, initializeTokens } from '@cockroach-ui/tokens';

// Customize tokens
configureTokens({
  colors: {
    primary: {
      500: '#your-brand-color',
    },
  },
});

// Initialize with custom tokens
initializeTokens();
```

## Accessibility

All components are built with accessibility in mind:

- Semantic HTML elements
- ARIA attributes where appropriate
- Keyboard navigation support
- Screen reader compatibility
- Color contrast compliance

## TypeScript Support

Full TypeScript support with comprehensive type definitions and IntelliSense.

## Browser Support

- Chrome (last 2 versions)
- Firefox (last 2 versions)
- Safari (last 2 versions)
- Edge (last 2 versions)
