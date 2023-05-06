import { getBaseUrl } from '@/lib/utils';
import type { Genres } from '@/types/genres';

export const runtime = 'edge';

export default async function GenresContainer() {
  const {
    genres: { results },
  }: Genres = await fetch(`${getBaseUrl()}/api/genres`).then((res) => res.json());

  return (
    <aside className=''>
      <h2 className='text-2xl font-semibold text-white'>Genres</h2>
      <ul>
        {results.map((genre) => (
          <li className='text-white' key={genre.id}>
            {genre.name}
          </li>
        ))}
      </ul>
    </aside>
  );
}
