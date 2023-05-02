import { getBaseUrl } from '@/lib/getBaseUrl';

export default async function Home() {
  const a = await fetch(`${getBaseUrl()}/api`);

  const b = await a.json();

  return (
    <main>
      <pre>{JSON.stringify(b.games.results, null, 2)}</pre>
    </main>
  );
}
