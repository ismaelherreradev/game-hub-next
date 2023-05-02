'use client';

import Image from 'next/image';
import { useState } from 'react';

type BlurImageProps = {
  image: string;
  alt: string;
  width: number;
  height: number;
};

export default function BlurImage({ image, alt, width, height }: BlurImageProps) {
  const [isLoading, setLoading] = useState(true);

  return (
    <div className='overflow-hidden rounded-t-lg bg-gray-200'>
      <Image
        alt={alt}
        src={image}
        width={width}
        height={height}
        priority
        className={`
              duration-200
              ${isLoading ? 'scale-110 blur-2xl grayscale' : 'scale-100 blur-0 grayscale-0'})`}
        onLoadingComplete={() => setLoading(false)}
      />
    </div>
  );
}
