import React from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@cockroach-ui/utilities';

// Component variants using your design tokens
const dialogOverlayVariants = cva(
  // Base styles using design token CSS variables
  'fixed inset-0 z-50 bg-black/50 backdrop-blur-sm',
  {
    variants: {
      opacity: {
        light: 'bg-black/30',
        medium: 'bg-black/50',
        heavy: 'bg-black/70',
      },
    },
    defaultVariants: {
      opacity: 'medium',
    },
  }
);

const dialogContentVariants = cva(
  // Base styles using design token CSS variables
  [
    'fixed left-[50%] top-[50%] z-50',
    'translate-x-[-50%] translate-y-[-50%]',
    'w-full max-w-lg',
    'bg-white border border-gray-200',
    'shadow-lg',
    'duration-200',
    'data-[state=open]:animate-in data-[state=closed]:animate-out',
    'data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0',
    'data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95',
    'data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%]',
    'data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%]',
  ],
  {
    variants: {
      size: {
        sm: 'max-w-sm',
        md: 'max-w-lg',
        lg: 'max-w-2xl',
        xl: 'max-w-4xl',
      },
      rounded: {
        none: 'rounded-none',
        sm: 'rounded-sm',
        md: 'rounded-md',
        lg: 'rounded-lg',
      },
    },
    defaultVariants: {
      size: 'md',
      rounded: 'lg',
    },
  }
);

export interface DialogComponentProps
  extends VariantProps<typeof dialogContentVariants> {
  children: React.ReactNode;
  trigger: React.ReactNode;
  title?: string;
  description?: string;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  overlayOpacity?: VariantProps<typeof dialogOverlayVariants>['opacity'];
  className?: string;
}

export const DialogComponent: React.FC<DialogComponentProps> = ({
  children,
  trigger,
  title,
  description,
  open,
  onOpenChange,
  size,
  rounded,
  overlayOpacity,
  className,
  ...props
}) => {
  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <Dialog.Trigger asChild>{trigger}</Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay
          className={dialogOverlayVariants({ opacity: overlayOpacity })}
        />
        <Dialog.Content
          className={cn(dialogContentVariants({ size, rounded }), className)}
          {...props}
        >
          {title && (
            <Dialog.Title
              className="text-lg font-semibold mb-2"
              style={{
                color: 'var(--color-neutral-900)',
                fontSize: 'var(--font-size-lg)',
              }}
            >
              {title}
            </Dialog.Title>
          )}
          {description && (
            <Dialog.Description
              className="text-sm text-gray-600 mb-4"
              style={{
                color: 'var(--color-neutral-600)',
                fontSize: 'var(--font-size-sm)',
              }}
            >
              {description}
            </Dialog.Description>
          )}
          <div className="p-6">{children}</div>
          <Dialog.Close asChild>
            <button
              className="absolute right-4 top-4 rounded-sm opacity-70 transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-offset-2"
              style={{
                color: 'var(--color-neutral-600)',
                borderRadius: 'var(--border-radius-sm)',
              }}
            >
              <span className="sr-only">Close</span>✕
            </button>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};
