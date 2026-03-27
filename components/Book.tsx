'use client';

import React, { useState, useCallback } from 'react';
import CoverPage from './CoverPage';
import IntroPage from './IntroPage';
import RoomImagePage from './RoomImagePage';
import RoomTextPage from './RoomTextPage';
import FloorPlanPage from './FloorPlanPage';
import LocationPage from './LocationPage';
import BackCoverPage from './BackCoverPage';
import { rooms } from '@/data/property';

type Page = React.ReactElement;

function buildPages(): Page[] {
  const pages: Page[] = [];
  pages.push(<CoverPage key="cover" />);
  pages.push(<div key="blank" className="page page-paper" />);
  pages.push(<IntroPage key="intro" />);
  rooms.forEach((room, i) => {
    pages.push(<RoomImagePage key={`img-${i}`} image={room.image} name={room.name} />);
    pages.push(
      <RoomTextPage
        key={`txt-${i}`}
        name={room.name}
        area={room.area}
        description={room.description}
        pageNum={String(i + 2).padStart(2, '0')}
      />
    );
  });
  pages.push(<FloorPlanPage key="fp-l" side="left" />);
  pages.push(<FloorPlanPage key="fp-r" side="right" />);
  pages.push(<LocationPage key="loc-l" side="left" />);
  pages.push(<LocationPage key="loc-r" side="right" />);
  pages.push(<BackCoverPage key="back" />);
  return pages;
}

const PAGES = buildPages();
// spreads: cover alone, then pairs, back cover alone
function getSpreads() {
  const spreads: [number, number | null][] = [];
  spreads.push([0, null]); // cover
  for (let i = 1; i < PAGES.length - 1; i += 2) {
    spreads.push([i, i + 1 < PAGES.length - 1 ? i + 1 : null]);
  }
  spreads.push([PAGES.length - 1, null]); // back cover
  return spreads;
}

const SPREADS = getSpreads();

export default function Book() {
  const [spread, setSpread] = useState(0);
  const [flipping, setFlipping] = useState<'forward' | 'backward' | null>(null);

  const goNext = useCallback(() => {
    if (spread >= SPREADS.length - 1 || flipping) return;
    setFlipping('forward');
    setTimeout(() => {
      setSpread((s) => s + 1);
      setFlipping(null);
    }, 500);
  }, [spread, flipping]);

  const goPrev = useCallback(() => {
    if (spread <= 0 || flipping) return;
    setFlipping('backward');
    setTimeout(() => {
      setSpread((s) => s - 1);
      setFlipping(null);
    }, 500);
  }, [spread, flipping]);

  const [leftIdx, rightIdx] = SPREADS[spread];
  const isCover = spread === 0;
  const isBack = spread === SPREADS.length - 1;

  return (
    <div className="flex flex-col items-center gap-6 select-none">
      <div className="flex items-center gap-4">
        {/* Prev */}
        <button
          onClick={goPrev}
          disabled={spread === 0 || !!flipping}
          aria-label="Previous page"
          className="flex items-center justify-center w-10 h-10 rounded-full border border-white/20 text-white/50 hover:border-gold hover:text-gold transition-all disabled:opacity-20 disabled:cursor-not-allowed"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M10 3L5 8L10 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>

        {/* Book */}
        <div
          className="relative overflow-hidden rounded-sm"
          style={{
            width: isCover || isBack ? 420 : 840,
            height: 560,
            boxShadow: '0 40px 80px rgba(0,0,0,0.8), 0 8px 24px rgba(0,0,0,0.6)',
            transition: 'width 0.4s ease',
          }}
        >
          {/* Spine line for spreads */}
          {!isCover && !isBack && (
            <div
              className="absolute inset-y-0 pointer-events-none z-10"
              style={{
                left: '50%',
                width: 2,
                background: 'linear-gradient(to right, rgba(0,0,0,0.18), rgba(0,0,0,0.06), rgba(0,0,0,0.18))',
              }}
            />
          )}

          {/* Flip animation overlay */}
          {flipping && (
            <div
              className="absolute inset-0 z-20 pointer-events-none"
              style={{
                background: 'linear-gradient(to right, transparent 40%, rgba(0,0,0,0.08) 50%, transparent 60%)',
                animation: `pageSweep 0.5s ease-in-out`,
              }}
            />
          )}

          {/* Left page */}
          {!isCover && !isBack && leftIdx !== null && (
            <div
              className="absolute top-0 left-0 h-full"
              style={{ width: '50%' }}
            >
              {PAGES[leftIdx]}
            </div>
          )}

          {/* Right page or single cover/back */}
          <div
            className="absolute top-0 h-full"
            style={
              isCover || isBack
                ? { left: 0, width: '100%' }
                : { left: '50%', width: '50%' }
            }
          >
            {rightIdx !== null ? PAGES[rightIdx] : isCover ? PAGES[leftIdx] : PAGES[leftIdx]}
          </div>
        </div>

        {/* Next */}
        <button
          onClick={goNext}
          disabled={spread === SPREADS.length - 1 || !!flipping}
          aria-label="Next page"
          className="flex items-center justify-center w-10 h-10 rounded-full border border-white/20 text-white/50 hover:border-gold hover:text-gold transition-all disabled:opacity-20 disabled:cursor-not-allowed"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M6 3L11 8L6 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>

      {/* Page indicator */}
      <div className="flex items-center gap-2">
        {SPREADS.map((_, i) => (
          <button
            key={i}
            onClick={() => !flipping && setSpread(i)}
            className="transition-all rounded-full"
            style={{
              width: i === spread ? 20 : 6,
              height: 6,
              background: i === spread ? '#c9a84c' : 'rgba(255,255,255,0.2)',
            }}
          />
        ))}
      </div>

      {spread === 0 && (
        <p className="text-[9px] tracking-[0.25em] text-white/20 uppercase animate-pulse">
          Click arrows or dots to turn pages
        </p>
      )}

      <style>{`
        @keyframes pageSweep {
          0%   { opacity: 0; }
          30%  { opacity: 1; }
          70%  { opacity: 1; }
          100% { opacity: 0; }
        }
      `}</style>
    </div>
  );
}
