import { getBaseUrl } from '@/lib/getBaseUrl';

export default async function Home() {
  const a = await fetch(`${getBaseUrl()}/api`);

  const b = await a.json();

  console.log(b);

  return (
    <main>
      <h1>hi</h1>
    </main>
  );
}
