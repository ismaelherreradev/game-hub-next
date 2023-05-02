import { Badge } from './badge';

export default function Score({ score }: { score: number }) {
  const variant = score > 75 ? 'green' : score > 60 ? 'yellow' : 'red';
  return (
    <Badge variant={variant}>
      <span className='text-sm'>{score}</span>
    </Badge>
  );
}
