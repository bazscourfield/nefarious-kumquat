'use client';

import React from 'react';

interface Props {
  side: 'left' | 'right';
}

const FloorPlanPage = React.forwardRef<HTMLDivElement, Props>(({ side }, ref) => {
  return (
    <div ref={ref} className="page page-paper">
      <div className="h-full flex flex-col p-10">
        {side === 'left' ? (
          <>
            <p className="text-[10px] tracking-[0.35em] text-gold uppercase mb-4 font-light">
              Floor Plan · Level 48
            </p>
            <h2 className="font-display text-3xl text-ink mb-6">Lower Level</h2>
            <div className="w-8 h-px bg-gold mb-8" />
            {/* SVG floor plan — lower level */}
            <div className="flex-1 flex items-center justify-center">
              <svg viewBox="0 0 400 500" className="w-full max-w-xs opacity-90" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* Outer walls */}
                <rect x="20" y="20" width="360" height="460" stroke="#1a1a1a" strokeWidth="3" fill="#faf7f2" />
                {/* Living room */}
                <rect x="20" y="20" width="220" height="200" stroke="#1a1a1a" strokeWidth="1.5" fill="#f0ebe3" />
                <text x="100" y="125" textAnchor="middle" fontSize="10" fill="#6b6b6b" fontFamily="Inter, sans-serif">Living Room</text>
                {/* Kitchen */}
                <rect x="240" y="20" width="140" height="160" stroke="#1a1a1a" strokeWidth="1.5" fill="#f0ebe3" />
                <text x="310" y="105" textAnchor="middle" fontSize="10" fill="#6b6b6b" fontFamily="Inter, sans-serif">Kitchen</text>
                {/* Dining */}
                <rect x="240" y="180" width="140" height="100" stroke="#1a1a1a" strokeWidth="1.5" fill="#f0ebe3" />
                <text x="310" y="235" textAnchor="middle" fontSize="10" fill="#6b6b6b" fontFamily="Inter, sans-serif">Dining</text>
                {/* Bed 2 */}
                <rect x="20" y="220" width="160" height="140" stroke="#1a1a1a" strokeWidth="1.5" fill="#f0ebe3" />
                <text x="100" y="295" textAnchor="middle" fontSize="10" fill="#6b6b6b" fontFamily="Inter, sans-serif">Bedroom 2</text>
                {/* Bed 3 */}
                <rect x="180" y="220" width="160" height="140" stroke="#1a1a1a" strokeWidth="1.5" fill="#f0ebe3" />
                <text x="260" y="295" textAnchor="middle" fontSize="10" fill="#6b6b6b" fontFamily="Inter, sans-serif">Bedroom 3</text>
                {/* Library */}
                <rect x="20" y="360" width="180" height="120" stroke="#1a1a1a" strokeWidth="1.5" fill="#f0ebe3" />
                <text x="110" y="425" textAnchor="middle" fontSize="10" fill="#6b6b6b" fontFamily="Inter, sans-serif">Library</text>
                {/* Bath */}
                <rect x="200" y="360" width="80" height="120" stroke="#1a1a1a" strokeWidth="1.5" fill="#f0ebe3" />
                <text x="240" y="425" textAnchor="middle" fontSize="9" fill="#6b6b6b" fontFamily="Inter, sans-serif">Bath</text>
                {/* Utility */}
                <rect x="280" y="360" width="100" height="120" stroke="#1a1a1a" strokeWidth="1.5" fill="#f0ebe3" />
                <text x="330" y="425" textAnchor="middle" fontSize="9" fill="#6b6b6b" fontFamily="Inter, sans-serif">Utility</text>
                {/* Terrace outline */}
                <rect x="20" y="480" width="360" height="0" stroke="#c9a84c" strokeWidth="1" strokeDasharray="4 3" />
                {/* North arrow */}
                <text x="370" y="490" fontSize="9" fill="#6b6b6b" fontFamily="Inter, sans-serif">N ↑</text>
              </svg>
            </div>
          </>
        ) : (
          <>
            <p className="text-[10px] tracking-[0.35em] text-gold uppercase mb-4 font-light">
              Floor Plan · Level 49
            </p>
            <h2 className="font-display text-3xl text-ink mb-6">Upper Level</h2>
            <div className="w-8 h-px bg-gold mb-8" />
            {/* SVG floor plan — upper level */}
            <div className="flex-1 flex items-center justify-center">
              <svg viewBox="0 0 400 500" className="w-full max-w-xs opacity-90" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="20" y="20" width="360" height="460" stroke="#1a1a1a" strokeWidth="3" fill="#faf7f2" />
                {/* Primary suite */}
                <rect x="20" y="20" width="240" height="220" stroke="#1a1a1a" strokeWidth="1.5" fill="#f0ebe3" />
                <text x="140" y="130" textAnchor="middle" fontSize="10" fill="#6b6b6b" fontFamily="Inter, sans-serif">Primary Suite</text>
                {/* Primary bath */}
                <rect x="260" y="20" width="120" height="140" stroke="#1a1a1a" strokeWidth="1.5" fill="#f0ebe3" />
                <text x="320" y="95" textAnchor="middle" fontSize="9" fill="#6b6b6b" fontFamily="Inter, sans-serif">Primary Bath</text>
                {/* Dressing */}
                <rect x="260" y="160" width="120" height="80" stroke="#1a1a1a" strokeWidth="1.5" fill="#f0ebe3" />
                <text x="320" y="205" textAnchor="middle" fontSize="9" fill="#6b6b6b" fontFamily="Inter, sans-serif">Dressing</text>
                {/* Bed 4 */}
                <rect x="20" y="240" width="180" height="140" stroke="#1a1a1a" strokeWidth="1.5" fill="#f0ebe3" />
                <text x="110" y="315" textAnchor="middle" fontSize="10" fill="#6b6b6b" fontFamily="Inter, sans-serif">Bedroom 4</text>
                {/* Media room */}
                <rect x="200" y="240" width="180" height="140" stroke="#1a1a1a" strokeWidth="1.5" fill="#f0ebe3" />
                <text x="290" y="315" textAnchor="middle" fontSize="10" fill="#6b6b6b" fontFamily="Inter, sans-serif">Media Room</text>
                {/* Terrace */}
                <rect x="20" y="380" width="360" height="100" stroke="#c9a84c" strokeWidth="1.5" strokeDasharray="6 3" fill="#f5f0e8" />
                <text x="200" y="435" textAnchor="middle" fontSize="10" fill="#c9a84c" fontFamily="Inter, sans-serif">Wraparound Terrace · 1,100 sqft</text>
              </svg>
            </div>
            <div className="flex items-center justify-between mt-4">
              <div className="flex-1 h-px bg-ink/10" />
              <span className="ml-4 text-[9px] tracking-[0.3em] text-muted uppercase">08</span>
            </div>
          </>
        )}
      </div>
    </div>
  );
});

FloorPlanPage.displayName = 'FloorPlanPage';
export default FloorPlanPage;
