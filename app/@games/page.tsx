import GameCard from '@/components/ui/game-card';
import { getBaseUrl } from '@/lib/utils';
import type { Games } from '@/types/games';

export const runtime = 'edge';

export default async function GameContainer() {
  const {
    games: { results },
  }: Games = await fetch(`${getBaseUrl()}/api/games`).then((res) => res.json());

  return (
    <section className='container pt-4'>
      <div className='grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-4 lg:grid-cols-3 lg:gap-8 xl:grid-cols-5'>
        {results.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </div>
    </section>
  );
}
