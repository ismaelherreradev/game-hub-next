import { getBaseUrl } from '@/lib/utils';
import { Games } from '@/types/games';

export const runtime = 'edge';
export const revalidate = 60;

export default async function page({ params }: { params: { id: string } }) {
  const game = await fetch(`${getBaseUrl()}/game`).then((res) => res.json());

  return <pre className='text-white'>{JSON.stringify(game, null, 2)}</pre>;
}

export async function generateStaticParams() {
  const {
    games: { results },
  }: Games = await fetch(`${getBaseUrl()}/api/games`).then((res) => res.json());

  return results.map((game) => ({
    id: game.id,
  }));
}
