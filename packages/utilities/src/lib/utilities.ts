import { clsx, type ClassValue } from 'clsx';

export function utilities(): string {
  return 'utilities';
}

/**
 * Combine class names with clsx
 * Perfect for conditional styling with design tokens
 */
export function cn(...inputs: ClassValue[]) {
  return clsx(inputs);
}
