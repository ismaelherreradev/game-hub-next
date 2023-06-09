import { NextResponse } from 'next/server';

import type { Genres } from '@/types/genres';

export const runtime = 'edge';
export const revalidate = 60;

export async function GET() {
  const res = await fetch(
    `https://api.rawg.io/api/genres?key=${process.env.RAWG_API_KEY ?? '065a1653038042558b1708e972428a26'}`
  );

  const genres = (await res.json()) as Genres;

  return NextResponse.json({ genres });
}
