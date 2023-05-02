import { type ClassValue, clsx } from 'clsx';
import { cache } from 'react';
import { twMerge } from 'tailwind-merge';

export const getBaseUrl = cache(() => `http://localhost:3000`);

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
