import { getCroppedImageUrl } from '@/lib/utils';
import type { Result as Game } from '@/types';

import BlurImage from './blur-image';
import { Card, CardHeader, CardTitle } from './card';
import PlataformList from './plataform-list';

export default function GameCard({ game }: { game: Game }) {
  return (
    <Card>
      <CardHeader className='p-0'>
        <BlurImage image={getCroppedImageUrl(game.background_image)} alt={game.name} width={600} height={400} />
      </CardHeader>
      <CardHeader>
        <PlataformList plataforms={game.parent_platforms} />
        <CardTitle>{game.name}</CardTitle>
      </CardHeader>
    </Card>
  );
}
