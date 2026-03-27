'use client';

import React from 'react';
import { property } from '@/data/property';

const BackCoverPage = React.forwardRef<HTMLDivElement>((_, ref) => {
  return (
    <div ref={ref} className="page page-cover">
      <div className="h-full flex flex-col items-center justify-between p-12 bg-ink">
        {/* Top */}
        <div className="text-center">
          <div className="w-12 h-px bg-gold mx-auto mb-8 mt-4" />
          <p className="text-[10px] tracking-[0.4em] text-gold uppercase font-light">
            Exclusively Represented By
          </p>
        </div>

        {/* Agent info */}
        <div className="text-center">
          <p className="font-display text-2xl text-white mb-1">{property.agent.name}</p>
          <p className="text-xs tracking-[0.2em] text-white/50 uppercase mb-6">
            {property.agent.title}
          </p>
          <div className="w-6 h-px bg-gold mx-auto mb-6" />
          <p className="text-sm text-white/70 mb-1">{property.agent.phone}</p>
          <p className="text-sm text-white/70">{property.agent.email}</p>
        </div>

        {/* Firm */}
        <div className="text-center">
          <p className="font-display text-lg text-gold tracking-wide mb-2">
            Meridian Estates
          </p>
          <p className="text-[9px] tracking-[0.3em] text-white/30 uppercase">
            International
          </p>
          <div className="w-12 h-px bg-gold mx-auto mt-8" />
        </div>
      </div>
    </div>
  );
});

BackCoverPage.displayName = 'BackCoverPage';
export default BackCoverPage;
