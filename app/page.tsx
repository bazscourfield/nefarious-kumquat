import BookClient from "@/components/BookClient";
import { property } from "@/data/property";

export default function Home() {
  return (
    <main className="spotlight h-screen w-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Minimal header */}
      <header className="absolute top-0 left-0 right-0 flex items-center justify-between px-8 py-5 z-10">
        <div>
          <p className="text-[9px] tracking-[0.4em] text-gold uppercase font-light">
            Meridian Estates International
          </p>
        </div>
        <div className="text-right">
          <p className="text-[9px] tracking-[0.3em] text-white/30 uppercase">
            {property.address} · {property.city}
          </p>
        </div>
      </header>

      {/* Book */}
      <div className="flex items-center justify-center w-full h-full px-4">
        <BookClient />
      </div>
    </main>
  );
}
