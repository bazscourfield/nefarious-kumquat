'use client';

import React from 'react';

interface Props {
  name: string;
  area: string;
  description: string;
  pageNum: string;
}

const RoomTextPage = React.forwardRef<HTMLDivElement, Props>(
  ({ name, area, description, pageNum }, ref) => {
    return (
      <div ref={ref} className="page page-paper">
        <div className="h-full flex flex-col justify-between p-10">
          <div>
            <p className="text-[10px] tracking-[0.35em] text-gold uppercase mb-8 font-light">
              Residence · Interior
            </p>
            <h2 className="font-display text-4xl text-ink leading-tight mb-3">
              {name}
            </h2>
            <p className="text-xs tracking-[0.2em] text-muted uppercase mb-6">
              {area}
            </p>
            <div className="w-8 h-px bg-gold mb-8" />
            <p className="text-sm text-ink/80 leading-relaxed">{description}</p>
          </div>

          {/* Decorative line + page number */}
          <div className="flex items-center justify-between">
            <div className="flex-1 h-px bg-ink/10" />
            <span className="ml-4 text-[9px] tracking-[0.3em] text-muted uppercase">
              {pageNum}
            </span>
          </div>
        </div>
      </div>
    );
  }
);

RoomTextPage.displayName = 'RoomTextPage';
export default RoomTextPage;
