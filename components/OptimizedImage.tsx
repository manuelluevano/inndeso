// components/OptimizedImage.tsx
'use client';

import Image from 'next/image';

export default function OptimizedImage({
  src,
  alt,
  width,
  height,
  className = ''
}: {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
}) {
  // Determina el basePath automáticamente
  const basePath = typeof window === 'undefined' 
    ? process.env.NODE_ENV === 'production' ? '/inndeso' : ''
    : '';

  return (
    <Image
      src={`${basePath}${src}`}
      alt={alt}
      width={width}
      height={height}
      className={className}
      unoptimized={true} // Necesario para static export
    />
  );
}