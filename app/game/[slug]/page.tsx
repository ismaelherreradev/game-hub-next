import { getBaseUrl } from '@/lib/getBaseUrl';

export default function page({ params }: { params: { slug: string } }) {
  console.log(params);
  return <div>page</div>;
}

export async function generateStaticParams() {
  const games = await fetch(`${getBaseUrl()}/api`);

  const response = await games.json();

  return response.games.results.map((game: { slug: any }) => ({
    slug: game.slug,
  }));
}
