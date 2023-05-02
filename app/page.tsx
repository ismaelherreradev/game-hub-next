import GameCard from '@/components/ui/game-card';
import { getBaseUrl } from '@/lib/utils';
import type { Games } from '@/types';

export default async function Home() {
  const {
    games: { results },
  }: Games = await fetch(`${getBaseUrl()}/api`).then((res) => res.json());

  return (
    <main>
      <div className='grid grid-cols-1 gap-2 md:grid-cols-2 md:gap-4 lg:grid-cols-3 lg:gap-8 xl:grid-cols-4'>
        {results.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </div>
    </main>
  );
}
