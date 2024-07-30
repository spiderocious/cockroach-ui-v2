import type { Meta, StoryObj } from '@storybook/react';
import { getTokens } from '@cockroach-ui/tokens';

// Demo component to showcase design tokens
const TokenShowcase = () => {
  const tokens = getTokens();

  return (
    <div className="space-y-8 p-6">
      <div>
        <h2 className="text-2xl font-bold mb-4">Colors</h2>
        <div className="grid grid-cols-6 gap-4">
          {Object.entries(tokens.colors).map(([colorName, colorScale]) => (
            <div key={colorName}>
              <h3 className="text-sm font-semibold mb-2 capitalize">
                {colorName}
              </h3>
              <div className="space-y-1">
                {typeof colorScale === 'object' &&
                  colorScale !== null &&
                  Object.entries(colorScale).map(([shade, value]) => (
                    <div
                      key={shade}
                      className="h-8 rounded flex items-center justify-center text-xs font-mono"
                      style={{ backgroundColor: value as string }}
                      title={`${colorName}-${shade}: ${value}`}
                    >
                      {shade}
                    </div>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-4">Typography</h2>
        <div className="space-y-2">
          {Object.entries(tokens.fontSize).map(([size, value]) => {
            const fontSize = Array.isArray(value) ? value[0] : value;
            return (
              <div key={size} className="flex items-center space-x-4">
                <span className="w-16 text-sm font-mono">{size}</span>
                <span style={{ fontSize }} className="font-normal">
                  The quick brown fox jumps over the lazy dog
                </span>
                <span className="text-xs text-gray-500 font-mono">
                  {fontSize}
                </span>
              </div>
            );
          })}
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-4">Spacing</h2>
        <div className="grid grid-cols-4 gap-4">
          {Object.entries(tokens.spacing)
            .slice(0, 12)
            .map(([size, value]) => (
              <div key={size} className="flex items-center space-x-2">
                <span className="w-8 text-sm font-mono">{size}</span>
                <div
                  className="bg-blue-300"
                  style={{ width: value as string, height: '16px' }}
                />
                <span className="text-xs text-gray-500 font-mono">
                  {String(value)}
                </span>
              </div>
            ))}
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-4">Border Radius</h2>
        <div className="grid grid-cols-4 gap-4">
          {Object.entries(tokens.borderRadius).map(([size, value]) => (
            <div key={size} className="text-center">
              <div
                className="w-16 h-16 bg-blue-200 mx-auto mb-2"
                style={{ borderRadius: value as string }}
              />
              <span className="text-sm font-mono">{size}</span>
              <div className="text-xs text-gray-500">{String(value)}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const meta: Meta<typeof TokenShowcase> = {
  title: 'Design Tokens/Overview',
  component: TokenShowcase,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          'Design tokens used throughout the component library. These tokens can be customized by configuring the token system.',
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
