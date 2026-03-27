'use client';

import React from 'react';
import { locationImage, neighborhoodHighlights } from '@/data/property';

interface Props {
  side: 'left' | 'right';
}

const LocationPage = React.forwardRef<HTMLDivElement, Props>(({ side }, ref) => {
  if (side === 'left') {
    return (
      <div ref={ref} className="page">
        <div className="relative w-full h-full overflow-hidden">
          <img
            src={locationImage}
            alt="Manhattan neighborhood"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/30 to-transparent" />
          <div className="absolute bottom-8 left-8">
            <p className="text-[9px] tracking-[0.3em] text-gold uppercase">
              Manhattan · Upper East Side
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div ref={ref} className="page page-paper">
      <div className="h-full flex flex-col justify-between p-10">
        <div>
          <p className="text-[10px] tracking-[0.35em] text-gold uppercase mb-8 font-light">
            Location &amp; Neighborhood
          </p>
          <h2 className="font-display text-3xl text-ink leading-tight mb-6">
            At the Center<br />of Everything
          </h2>
          <div className="w-8 h-px bg-gold mb-8" />
          <p className="text-sm text-ink/80 leading-relaxed mb-8">
            432 Park Avenue places you at the geographic and cultural heart of
            Manhattan — steps from Central Park, Fifth Avenue, and the world's
            finest dining, arts, and commerce.
          </p>

          {/* Highlights */}
          <div className="space-y-3">
            {neighborhoodHighlights.map((h) => (
              <div key={h.label} className="flex items-center justify-between border-b border-ink/8 pb-3">
                <span className="text-sm text-ink">{h.label}</span>
                <span className="text-xs text-gold tracking-wide">{h.distance}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex-1 h-px bg-ink/10" />
          <span className="ml-4 text-[9px] tracking-[0.3em] text-muted uppercase">09</span>
        </div>
      </div>
    </div>
  );
});

LocationPage.displayName = 'LocationPage';
export default LocationPage;
