import type { Meta, StoryObj } from '@storybook/react';
import { DialogComponent } from './Dialog';
import { Button } from './components';

const meta: Meta<typeof DialogComponent> = {
  title: 'Components/Dialog',
  component: DialogComponent,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'A modal dialog component built with Radix UI primitives and integrated with design tokens. Supports various sizes, customizable overlay opacity, and uses CSS variables from the token system.',
      },
    },
  },
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg', 'xl'],
      description: 'Size of the dialog content',
    },
    rounded: {
      control: 'select',
      options: ['none', 'sm', 'md', 'lg'],
      description: 'Border radius of the dialog',
    },
    overlayOpacity: {
      control: 'select',
      options: ['light', 'medium', 'heavy'],
      description: 'Opacity of the overlay backdrop',
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: 'Dialog Title',
    description: 'This is a description of what this dialog does.',
    size: 'md',
    rounded: 'lg',
    overlayOpacity: 'medium',
    trigger: <Button variant="primary">Open Dialog</Button>,
    children: (
      <div className="space-y-4">
        <p>This is the dialog content. You can put any React content here.</p>
        <div className="flex justify-end space-x-2">
          <button className="px-4 py-2 text-sm bg-gray-200 rounded hover:bg-gray-300 transition-colors">
            Cancel
          </button>
          <button
            className="px-4 py-2 text-sm text-white rounded transition-colors"
            style={{
              backgroundColor: 'var(--color-primary-500)',
              borderRadius: 'var(--border-radius-md)',
            }}
          >
            Confirm
          </button>
        </div>
      </div>
    ),
  },
};

export const Small: Story = {
  args: {
    ...Default.args,
    size: 'sm',
    title: 'Small Dialog',
    description: 'A smaller dialog for simple confirmations.',
  },
};

export const Large: Story = {
  args: {
    ...Default.args,
    size: 'lg',
    title: 'Large Dialog',
    description: 'A larger dialog with more content space.',
    children: (
      <div className="space-y-6">
        <div>
          <h3 className="text-lg font-semibold mb-2">Section 1</h3>
          <p>This is a larger dialog with more content sections.</p>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-2">Section 2</h3>
          <p>You can organize complex content in larger dialogs.</p>
        </div>
        <div className="flex justify-end space-x-2">
          <button className="px-4 py-2 text-sm bg-gray-200 rounded hover:bg-gray-300">
            Cancel
          </button>
          <button
            className="px-4 py-2 text-sm text-white rounded"
            style={{ backgroundColor: 'var(--color-primary-500)' }}
          >
            Save Changes
          </button>
        </div>
      </div>
    ),
  },
};

export const HeavyOverlay: Story = {
  args: {
    ...Default.args,
    overlayOpacity: 'heavy',
    title: 'Heavy Overlay',
    description: 'Dialog with a darker overlay backdrop.',
  },
};

export const WithForm: Story = {
  args: {
    ...Default.args,
    title: 'Contact Form',
    description: 'Fill out this form to get in touch.',
    children: (
      <form className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1">Name</label>
          <input
            type="text"
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Your name"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Email</label>
          <input
            type="email"
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="your@email.com"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Message</label>
          <textarea
            rows={3}
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Your message..."
          />
        </div>
        <div className="flex justify-end space-x-2">
          <button
            type="button"
            className="px-4 py-2 text-sm bg-gray-200 rounded hover:bg-gray-300"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="px-4 py-2 text-sm text-white rounded"
            style={{ backgroundColor: 'var(--color-primary-500)' }}
          >
            Send Message
          </button>
        </div>
      </form>
    ),
  },
};
