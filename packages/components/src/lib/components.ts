import React from 'react';
import { createRoot } from 'react-dom/client';
import { getTokens } from '@cockroach-ui/tokens';

export function components(): string {
  return 'components';
}

// Example component to validate dependencies
export interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  size?: 'sm' | 'md' | 'lg';
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
}) => {
  // Use tokens to validate the import
  const tokens = getTokens();

  return React.createElement(
    'button',
    {
      className: `btn btn-${variant} btn-${size}`,
      style: {
        backgroundColor: tokens.colors.primary[500],
        padding: tokens.spacing[2],
      },
    },
    children
  );
};

// Utility function to render components (uses react-dom)
export const renderComponent = (
  component: React.ReactElement,
  container: HTMLElement
) => {
  const root = createRoot(container);
  root.render(component);
  return root;
};

// Export Radix UI integrated components
export { DialogComponent as Dialog } from './Dialog';
