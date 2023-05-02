import { Card, CardHeader, CardTitle } from '@/components/ui/card';
import { getBaseUrl } from '@/lib/utils';
import type { Games } from '@/types';

export default async function Home() {
  const {
    games: { results },
  }: Games = await fetch(`${getBaseUrl()}/api`).then((res) => res.json());

  return (
    <main>
      {results.map((game) => (
        <Card key={game.id}>
          <CardHeader>
            <CardTitle>{game.name}</CardTitle>
          </CardHeader>
        </Card>
      ))}
    </main>
  );
}
