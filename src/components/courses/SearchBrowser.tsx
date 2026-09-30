"use client";

import { useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import {
  ArrowDownUp,
  BarChart3,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  LayoutGrid,
  Search,
  SlidersHorizontal,
} from "lucide-react";
import { catalogue, searchCategories } from "@/src/lib/data";

const PER_PAGE = 18;
const levels = ["All levels", "Beginner", "Intermediate", "Advanced"] as const;

const Pill = ({
  children,
  onClick,
  active,
}: {
  children: React.ReactNode;
  onClick?: () => void;
  active?: boolean;
}) => (
  <button
    type="button"
    onClick={onClick}
    className={`inline-flex cursor-pointer items-center gap-2 rounded-full border px-4 py-2 sm:px-5 sm:py-2.5 text-sm sm:text-[15px] transition duration-200 select-none ${
      active
        ? "border-brand bg-brand/5 text-brand font-medium"
        : "border-[#D5D5D5] bg-white text-[#333] hover:border-brand hover:text-brand"
    }`}
  >
    {children}
  </button>
);

export default function SearchBrowser() {
  const params = useSearchParams();
  const [q, setQ] = useState(params.get("q") ?? "");
  const [cat, setCat] = useState(searchCategories[0]);
  const [level, setLevel] = useState<(typeof levels)[number]>("All levels");
  const [sort, setSort] = useState<"relevant" | "price" | "title">("relevant");
  const [page, setPage] = useState(1);

  const filtered = useMemo(() => {
    let list = catalogue.filter(
      (c) =>
        (cat === "Featured" || c.categories.includes(cat)) &&
        (level === "All levels" || c.level === level) &&
        (!q.trim() ||
          `${c.title} ${c.author}`
            .toLowerCase()
            .includes(q.trim().toLowerCase())),
    );
    if (sort === "title")
      list = [...list].sort((a, b) => a.title.localeCompare(b.title));
    return list;
  }, [q, cat, level, sort]);

  const pages = Math.max(1, Math.ceil(filtered.length / PER_PAGE));
  const current = Math.min(page, pages);
  const visible = filtered.slice((current - 1) * PER_PAGE, current * PER_PAGE);
  const reset =
    <T,>(fn: (v: T) => void) =>
    (v: T) => {
      fn(v);
      setPage(1);
    };
  return (
    <>
      <div className="wrap relative z-10 -mt-[80px] sm:-mt-[90px] lg:-mt-[100px]">
        <form
          onSubmit={(e) => e.preventDefault()}
          className="mx-auto flex max-w-[640px] items-center gap-2.5 sm:gap-3 "
        >
          <label htmlFor="course-search" className="sr-only">
            Search courses
          </label>
          <div className="flex h-[50px] sm:h-[54px] flex-1 items-center gap-3 rounded-full bg-white px-4 sm:px-5 text-[#777] shadow-xl focus-within:ring-2 focus-within:ring-lime">
            <Search size={18} className="shrink-0 text-[#888]" />
            <input
              id="course-search"
              value={q}
              onChange={(e) => reset(setQ)(e.target.value)}
              placeholder="Search courses, skills, topics..."
              className="w-full min-w-0 bg-transparent text-sm sm:text-base text-ink outline-none placeholder:text-[#888]"
            />
          </div>
          <button
            type="button"
            className="btn-lime h-[46px] sm:h-[48px] gap-2 !px-4 sm:!px-5 shadow-lg cursor-pointer shrink-0"
          >
            <span>Courses</span> <ChevronDown size={16} />
          </button>
        </form>

        <div className="wrap pb-16 sm:pb-20 pt-10 sm:pt-14"></div>
      </div>
    </>
  );
}
