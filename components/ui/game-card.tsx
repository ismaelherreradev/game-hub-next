import { getCroppedImageUrl } from '@/lib/utils';
import type { Result as Game } from '@/types/games';

import BlurImage from './blur-image';
import { Card, CardContent, CardHeader, CardTitle } from './card';
import PlataformList from './plataform-list';
import Score from './score';

export default function GameCard({ game }: { game: Game }) {
  return (
    <Card className='relative overflow-hidden rounded-xl border-none bg-[#202020] text-white'>
      <CardHeader className='space-y-0 p-0'>
        <div className='absolute inset-2 z-10'>
          <Score score={game.metacritic} />
        </div>
        <BlurImage image={getCroppedImageUrl(game.background_image)} alt={game.name} width={600} height={400} />
      </CardHeader>
      <CardContent className='p-0'>
        <div className='space-y-4 px-4 py-4'>
          <PlataformList plataforms={game.parent_platforms} />
          <CardTitle className='text-xl'>{game.name}</CardTitle>
        </div>
      </CardContent>
    </Card>
  );
}
