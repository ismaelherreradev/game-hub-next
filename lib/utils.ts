import { type ClassValue, clsx } from 'clsx';
import { cache } from 'react';
import { twMerge } from 'tailwind-merge';

export const getBaseUrl = cache(() => process.env.VERCEL_URL ?? 'http://localhost:3000');

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getCroppedImageUrl(url: string) {
  const target = 'media/';
  const index = url.indexOf(target) + target.length;

  return url.slice(0, index) + 'crop/600/400/' + url.slice(index);
}
