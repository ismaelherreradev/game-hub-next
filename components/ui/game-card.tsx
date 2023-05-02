import { getCroppedImageUrl } from '@/lib/utils';
import type { Result as Game } from '@/types';

import BlurImage from './blur-image';
import { Card, CardHeader, CardTitle } from './card';
import PlataformList from './plataform-list';
import Score from './score';

export default function GameCard({ game }: { game: Game }) {
  return (
    <Card className='relative'>
      <CardHeader className='space-y-0 p-0'>
        <div className='absolute inset-2 z-10'>
          <Score score={game.metacritic} />
        </div>
        <BlurImage image={getCroppedImageUrl(game.background_image)} alt={game.name} width={600} height={400} />
      </CardHeader>
      <CardHeader>
        <PlataformList plataforms={game.parent_platforms} />
        <CardTitle>{game.name}</CardTitle>
      </CardHeader>
    </Card>
  );
}
