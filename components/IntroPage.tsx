'use client';

import React from 'react';
import { property } from '@/data/property';

const IntroPage = React.forwardRef<HTMLDivElement>((_, ref) => {
  const stats = [
    { label: 'Bedrooms', value: property.beds },
    { label: 'Bathrooms', value: property.baths },
    { label: 'Interior', value: `${property.sqft} sqft` },
    { label: 'Price / sqft', value: property.pricePerSqft },
  ];

  return (
    <div ref={ref} className="page page-paper">
      <div className="h-full flex flex-col justify-between p-10">
        {/* Header */}
        <div>
          <p className="text-[10px] tracking-[0.35em] text-gold uppercase mb-8 font-light">
            Overview
          </p>
          <h2 className="font-display text-3xl text-ink leading-tight mb-2">
            {property.name}
          </h2>
          <p className="text-sm text-muted tracking-wide mb-6">
            {property.address} · {property.city}
          </p>
          <div className="w-8 h-px bg-gold mb-8" />
          <p className="text-sm text-ink/80 leading-relaxed">
            {property.description}
          </p>
        </div>

        {/* Stats grid */}
        <div>
          <div className="grid grid-cols-2 gap-px bg-ink/10 border border-ink/10">
            {stats.map((s) => (
              <div key={s.label} className="bg-paper p-4">
                <p className="text-[9px] tracking-[0.3em] text-muted uppercase mb-1">
                  {s.label}
                </p>
                <p className="font-display text-xl text-ink">{s.value}</p>
              </div>
            ))}
          </div>

          {/* Page number */}
          <div className="flex justify-end mt-6">
            <span className="text-[9px] tracking-[0.3em] text-muted uppercase">01</span>
          </div>
        </div>
      </div>
    </div>
  );
});

IntroPage.displayName = 'IntroPage';
export default IntroPage;
