'use client';

import React from 'react';
import { coverImage, property } from '@/data/property';

const CoverPage = React.forwardRef<HTMLDivElement>((_, ref) => {
  return (
    <div ref={ref} className="page page-cover">
      <div className="relative w-full h-full overflow-hidden">
        {/* Background image */}
        <img
          src={coverImage}
          alt="The Meridian Penthouse"
          className="absolute inset-0 w-full h-full object-cover"
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/10" />

        {/* Content */}
        <div className="absolute inset-0 flex flex-col justify-between p-10">
          {/* Top: logo/firm */}
          <div className="text-right">
            <span className="text-xs tracking-[0.3em] text-gold uppercase font-light">
              Meridian Estates International
            </span>
          </div>

          {/* Bottom: property title */}
          <div>
            <p className="text-xs tracking-[0.4em] text-gold uppercase mb-3 font-light">
              {property.floors} · {property.city}
            </p>
            <h1 className="font-display text-5xl text-white leading-none tracking-tight mb-1">
              {property.name}
            </h1>
            <p className="font-display text-2xl text-white/70 italic mb-6">
              {property.subtitle}
            </p>
            <div className="w-12 h-px bg-gold mb-6" />
            <p className="text-2xl text-white font-light tracking-wider">
              {property.price}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
});

CoverPage.displayName = 'CoverPage';
export default CoverPage;
