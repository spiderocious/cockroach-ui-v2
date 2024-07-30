import type { Preview } from '@storybook/react';
import { initializeTokens } from '@cockroach-ui/tokens';
import './tailwind.css';

// Initialize design tokens for Storybook
initializeTokens();

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    docs: {
      toc: true,
    },
    options: {
      storySort: {
        order: ['Design Tokens', 'Components', '*'],
      },
    },
  },
  tags: ['autodocs'],
};

export default preview;
