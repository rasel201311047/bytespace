"use client";

import Image from "next/image";
import { useState } from "react";

export default function CreatorHeader() {
  const [following, setFollowing] = useState(false);
  return (
    <div className="wrap pb-12 sm:pb-16 pt-[110px] sm:pt-[150px] lg:pt-[170px]">
      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-5 animate-rise">
        <Image
          src="/images/creator.png"
          alt="PurePearl Studio"
          width={96}
          height={96}
          priority
          className="h-[80px] w-[80px] sm:h-[96px] sm:w-[96px] rounded-[22px] object-cover shadow-lg"
        />
        <div>
          <div className="flex flex-wrap items-center gap-2.5 sm:gap-3">
            <h1 className="text-[26px] sm:text-[34px] lg:text-[40px] font-semibold leading-tight text-white">
              PurePearl Studio
            </h1>
            <span className="rounded-full bg-lime px-4 sm:px-5 py-1 text-xs sm:text-base font-medium text-ink shadow-sm">
              Creator
            </span>
          </div>
          <p className="mt-1 text-sm sm:text-lg font-light text-white/90">
            Passionate UI/UX, Web designer
          </p>
        </div>
      </div>

      <p className="mt-6 sm:mt-9 max-w-[1200px] text-sm sm:text-base lg:text-[17px] font-light leading-relaxed text-white/95 animate-rise [animation-delay:.1s]">
        Welcome to the creative world of PurePearl Studio. Here, you&apos;ll
        discover the passion, expertise, and inspiration that drive our creative
        journey. Let&apos;s explore and learn together!
        <br className="hidden sm:inline" />
        <span className="block mt-2 sm:inline sm:mt-0">
          {" "}
          Dive into our creative portfolio, showcasing a glimpse of artistic
          endeavors. From digital designs to multimedia projects, each piece
          tells a unique story. Explore the world of creativity with us.
        </span>
      </p>

      <div className="mt-8 sm:mt-10 flex flex-wrap items-center justify-between gap-4">
        <div className="flex flex-wrap gap-2.5 sm:gap-4">
          <span className="chip-white text-sm sm:text-base shadow-md">
            <b className="font-semibold text-brand">3</b> Products
          </span>
          <span className="chip-white text-sm sm:text-base shadow-md">
            <b className="font-semibold text-brand">{following ? 13 : 12}</b>{" "}
            Followers
          </span>
        </div>
        <button
          type="button"
          onClick={() => setFollowing((f) => !f)}
          aria-pressed={following}
          className="btn-lime cursor-pointer shadow-lg"
        >
          {following ? "Following" : "Follow"}
        </button>
      </div>
    </div>
  );
}
