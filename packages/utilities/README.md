# @cockroach-ui/utilities

Utility functions and hooks for the Cockroach UI component library.

## Installation

```bash
npm install @cockroach-ui/utilities
```

## Features

- **React Hooks**: Custom hooks for common UI patterns
- **Utility Functions**: Helper functions for component development
- **TypeScript Support**: Full type safety and IntelliSense
- **Tree Shakeable**: Import only what you need

## Utilities

### Coming Soon

This package will include:

- **useToggle**: Hook for boolean state management
- **useLocalStorage**: Hook for localStorage integration
- **useDebounce**: Hook for debouncing values
- **usePrevious**: Hook to track previous values
- **useMediaQuery**: Hook for responsive design
- **cn**: Utility for conditional class names
- **merge**: Deep merge utility for objects
- **clamp**: Math utility for clamping values
- **formatBytes**: Utility for formatting file sizes
- **generateId**: Utility for generating unique IDs

## Development

```bash
# Run tests
npx nx test utilities

# Build package
npx nx build utilities
```

## Example Usage

```tsx
import { useToggle, cn } from '@cockroach-ui/utilities';

function MyComponent() {
  const [isOpen, toggle] = useToggle(false);

  return (
    <div className={cn('base-class', { open: isOpen })}>
      <button onClick={toggle}>{isOpen ? 'Close' : 'Open'}</button>
    </div>
  );
}
```

## TypeScript Support

Full TypeScript support with comprehensive type definitions.
