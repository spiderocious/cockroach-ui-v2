import { getTokens } from './tokens';

/**
 * Generate CSS custom properties (variables) from design tokens
 */
export function generateCSSVariables(): string {
  const tokens = getTokens();
  let css = ':root {\n';

  // Generate color variables
  Object.entries(tokens.colors).forEach(([colorName, colorScale]) => {
    if (typeof colorScale === 'object') {
      Object.entries(colorScale).forEach(([shade, value]) => {
        css += `  --color-${colorName}-${shade}: ${value};\n`;
      });
    }
  });

  // Generate spacing variables
  Object.entries(tokens.spacing).forEach(([size, value]) => {
    css += `  --spacing-${size}: ${value};\n`;
  });

  // Generate font size variables
  Object.entries(tokens.fontSize).forEach(([size, value]) => {
    const fontSize = Array.isArray(value) ? value[0] : value;
    css += `  --font-size-${size}: ${fontSize};\n`;
  });

  // Generate font weight variables
  Object.entries(tokens.fontWeight).forEach(([weight, value]) => {
    css += `  --font-weight-${weight}: ${value};\n`;
  });

  // Generate border radius variables
  Object.entries(tokens.borderRadius).forEach(([size, value]) => {
    const key = size === 'DEFAULT' ? 'default' : size;
    css += `  --border-radius-${key}: ${value};\n`;
  });

  css += '}\n';
  return css;
}

/**
 * Inject CSS variables into the document head
 */
export function injectCSSVariables(): void {
  if (typeof document === 'undefined') return;

  const existingStyle = document.getElementById('cockroach-ui-tokens');
  if (existingStyle) {
    existingStyle.remove();
  }

  const style = document.createElement('style');
  style.id = 'cockroach-ui-tokens';
  style.textContent = generateCSSVariables();
  document.head.appendChild(style);
}

/**
 * Initialize design tokens - call this once in your app
 */
export function initializeTokens(): void {
  injectCSSVariables();
}
