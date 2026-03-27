'use client';

import React, { useRef, useState, useCallback } from 'react';
import HTMLFlipBook from 'react-pageflip';
import CoverPage from './CoverPage';
import IntroPage from './IntroPage';
import RoomImagePage from './RoomImagePage';
import RoomTextPage from './RoomTextPage';
import FloorPlanPage from './FloorPlanPage';
import LocationPage from './LocationPage';
import BackCoverPage from './BackCoverPage';
import { rooms } from '@/data/property';

const TOTAL_PAGES = 14; // cover + intro + (5 rooms × 2) + floorplan × 2 + location × 2 + back cover

export default function Book() {
  const bookRef = useRef<any>(null);
  const [currentPage, setCurrentPage] = useState(0);

  const onFlip = useCallback((e: any) => {
    setCurrentPage(e.data);
  }, []);

  const prevPage = () => bookRef.current?.pageFlip()?.flipPrev();
  const nextPage = () => bookRef.current?.pageFlip()?.flipNext();

  const roomPageNums = ['02', '03', '04', '05', '06', '07'];

  return (
    <div className="flex flex-col items-center gap-6">
      {/* Book + nav arrows */}
      <div className="flex items-center gap-4">
        {/* Prev arrow */}
        <button
          onClick={prevPage}
          disabled={currentPage === 0}
          aria-label="Previous page"
          className="group flex items-center justify-center w-10 h-10 rounded-full border border-white/20 text-white/50 hover:border-gold hover:text-gold transition-all disabled:opacity-20 disabled:cursor-not-allowed"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M10 3L5 8L10 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>

        {/* The book */}
        <div className="book-wrapper shadow-2xl">
          {/* @ts-ignore — react-pageflip types are loose */}
          <HTMLFlipBook
            ref={bookRef}
            width={420}
            height={560}
            size="fixed"
            minWidth={280}
            maxWidth={600}
            showCover={true}
            mobileScrollSupport={true}
            onFlip={onFlip}
            className=""
            style={{}}
            startPage={0}
            drawShadow={true}
            flippingTime={700}
            usePortrait={false}
            startZIndex={0}
            autoSize={false}
            clickEventForward={true}
            useMouseEvents={true}
            swipeDistance={30}
            showPageCorners={true}
            disableFlipByClick={false}
            maxShadowOpacity={0.4}
          >
            {/* 1 - Front cover (single page) */}
            <CoverPage />

            {/* 2 - Intro spread: blank left + intro right */}
            <div className="page page-paper" />
            <IntroPage />

            {/* 3-12 — Rooms (image left, text right) */}
            {rooms.map((room, i) => (
              <React.Fragment key={room.name}>
                <RoomImagePage image={room.image} name={room.name} />
                <RoomTextPage
                  name={room.name}
                  area={room.area}
                  description={room.description}
                  pageNum={roomPageNums[i] ?? ''}
                />
              </React.Fragment>
            ))}

            {/* 13-14 — Floor plan spread */}
            <FloorPlanPage side="left" />
            <FloorPlanPage side="right" />

            {/* 15-16 — Location spread */}
            <LocationPage side="left" />
            <LocationPage side="right" />

            {/* 17 - Back cover (single page) */}
            <BackCoverPage />
          </HTMLFlipBook>
        </div>

        {/* Next arrow */}
        <button
          onClick={nextPage}
          disabled={currentPage >= TOTAL_PAGES - 1}
          aria-label="Next page"
          className="group flex items-center justify-center w-10 h-10 rounded-full border border-white/20 text-white/50 hover:border-gold hover:text-gold transition-all disabled:opacity-20 disabled:cursor-not-allowed"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M6 3L11 8L6 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>

      {/* Page indicator */}
      <div className="flex items-center gap-3">
        <span className="text-[9px] tracking-[0.3em] text-white/30 uppercase">
          {currentPage === 0
            ? 'Cover'
            : currentPage >= TOTAL_PAGES - 1
            ? 'Back Cover'
            : `Page ${currentPage} of ${TOTAL_PAGES - 2}`}
        </span>
      </div>

      {/* Hint */}
      {currentPage === 0 && (
        <p className="text-[9px] tracking-[0.25em] text-white/20 uppercase animate-pulse">
          Click the edge or drag to turn pages
        </p>
      )}
    </div>
  );
}
