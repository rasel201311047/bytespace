"use client";

import Image from "next/image";
import { useState } from "react";
import { Play } from "lucide-react";

const YOUTUBE_ID = "TgyzPfgEUHE";

export default function VideoPlayer() {
  const [playing, setPlaying] = useState(false);

  return (
    <div className="relative aspect-[712/472] w-full overflow-hidden rounded-[24px] sm:rounded-[28px] bg-[#E6E6E6] shadow-xl">
      {playing ? (
        <iframe
          className="absolute inset-0 h-full w-full"
          src={`https://www.youtube-nocookie.com/embed/${YOUTUBE_ID}?autoplay=1&rel=0&playsinline=1`}
          title="Course preview video"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      ) : (
        <>
          <Image
            src="/images/video-poster.png"
            alt="Course preview video"
            fill
            sizes="(min-width:1024px) 720px, 100vw"
            className="object-cover select-none"
            priority
          />
          <button
            onClick={() => setPlaying(true)}
            aria-label="Play course preview"
            className="absolute left-[52.3%] top-[53.4%] grid h-[18%] w-[13%] min-h-[50px] min-w-[50px] max-h-[84px] max-w-[84px] -translate-x-1/2 -translate-y-1/2 place-items-center rounded-[22%] bg-[#A58C82] shadow-2xl transition duration-300 hover:scale-110 cursor-pointer"
          >
            <span className="grid h-[62%] w-[62%] place-items-center rounded-full bg-white/95 shadow-inner">
              <Play className="ml-0.5 h-[46%] w-[46%] fill-[#8A7268] text-[#8A7268]" />
            </span>
          </button>
        </>
      )}
    </div>
  );
}
