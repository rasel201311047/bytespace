"use client";

import { useState } from "react";

export default function CategoryChips({
  items,
  className = "",
  onChange,
  extra,
}: {
  items: string[];
  className?: string;
  onChange?: (c: string) => void;
  extra?: string;
}) {
  const [active, setActive] = useState(items[0]);

  return (
    <div
      className={`flex flex-wrap items-center gap-2.5 sm:gap-3 ${className}`}
      role="tablist"
      aria-label="Categories"
    >
      {items.map((c) => (
        <button
          key={c}
          role="tab"
          aria-selected={active === c}
          onClick={() => {
            setActive(c);
            onChange?.(c);
          }}
          className={`cursor-pointer rounded-full px-4 py-2 text-sm sm:px-5 sm:py-2.5 sm:text-[15px] transition duration-300 hover:-translate-y-0.5 select-none ${
            active === c
              ? "bg-lime font-medium text-ink shadow-[0_8px_20px_-6px_rgba(204,255,0,0.6)]"
              : "bg-[#F3F3F3] text-[#333] hover:bg-[#E9E9E9]"
          }`}
        >
          {c}
        </button>
      ))}
      {extra && (
        <button
          type="button"
          className="cursor-pointer px-3 py-2 text-sm sm:text-[15px] text-[#333] transition hover:text-brand"
        >
          {extra}
        </button>
      )}
    </div>
  );
}
