import { getBaseUrl } from '@/lib/utils';
import { Games } from '@/types/games';

export default async function page({ params }: { params: { slug: string } }) {
  return <pre className='text-white'>{JSON.stringify(params, null, 2)}</pre>;
}

export async function generateStaticParams() {
  const {
    games: { results },
  }: Games = await fetch(`${getBaseUrl()}/api/games`).then((res) => res.json());

  return results.map((game) => ({
    slug: game.slug,
  }));
}
