'use client';

import React from 'react';

interface Props {
  image: string;
  name: string;
}

const RoomImagePage = React.forwardRef<HTMLDivElement, Props>(({ image, name }, ref) => {
  return (
    <div ref={ref} className="page">
      <div className="relative w-full h-full overflow-hidden">
        <img
          src={image}
          alt={name}
          className="absolute inset-0 w-full h-full object-cover"
        />
        {/* Subtle vignette */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent" />
      </div>
    </div>
  );
});

RoomImagePage.displayName = 'RoomImagePage';
export default RoomImagePage;
