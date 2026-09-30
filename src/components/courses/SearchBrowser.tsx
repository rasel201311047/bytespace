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
import Reveal from "../Reveal";
import CourseCard from "../CourseCard";

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
      </div>

      {/* contain */}

      <div className="wrap pb-16 sm:pb-20 pt-10 sm:pt-14">
        {/* filter */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-2 sm:gap-3">
            <Pill>
              <SlidersHorizontal size={15} />
              Filter
            </Pill>
            <Pill
              onClick={() =>
                reset(setLevel)(
                  levels[(levels.indexOf(level) + 1) % levels.length],
                )
              }
              active={level !== "All levels"}
            >
              <BarChart3 size={15} />
              {level === "All levels" ? "Level" : level}
            </Pill>
            <Pill>
              <LayoutGrid size={15} />
              Category
            </Pill>
          </div>
          <div className="self-end sm:self-auto">
            <Pill
              onClick={() =>
                setSort(sort === "relevant" ? "title" : "relevant")
              }
            >
              <ArrowDownUp size={15} />
              {sort === "relevant" ? "Most relevant" : "A → Z"}
            </Pill>
          </div>
        </div>

        {/* catagory */}
        <div className="mt-5 sm:mt-6 flex flex-wrap gap-2 sm:gap-2.5">
          {searchCategories.map((c) => (
            <button
              key={c}
              type="button"
              onClick={() => reset(setCat)(c)}
              className={`cursor-pointer rounded-full px-4 py-2 sm:px-5 sm:py-2.5 text-xs sm:text-[15px] transition duration-200 hover:-translate-y-0.5 select-none ${
                cat === c
                  ? "bg-lime font-medium text-ink shadow-[0_4px_14px_-3px_rgba(204,255,0,0.6)]"
                  : "bg-[#F3F3F3] text-[#444] hover:bg-[#E8E8E8]"
              }`}
            >
              {c}
            </button>
          ))}
        </div>
        {/* course */}
        <div className="mt-12 sm:mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-[42px] lg:gap-y-8">
          {visible.map((c, i) => (
            <Reveal key={c.id} delay={(i % 3) * 80}>
              <CourseCard course={c} />
            </Reveal>
          ))}
        </div>

        {visible.length === 0 && (
          <div className="my-16 rounded-3xl bg-[#F8F8F8] p-10 text-center">
            <p className="text-lg text-[#666]">
              No courses match your search. Try a different keyword or category.
            </p>
          </div>
        )}

        {pages > 1 && (
          <nav
            aria-label="Pagination"
            className="mt-12 sm:mt-16 flex items-center justify-center gap-3 sm:gap-5"
          >
            <button
              aria-label="Previous page"
              disabled={current === 1}
              onClick={() => setPage(current - 1)}
              className="grid h-10 w-10 sm:h-11 sm:w-11 place-items-center rounded-full border border-[#D5D5D5] bg-white transition hover:border-brand disabled:opacity-30 cursor-pointer"
            >
              <ChevronLeft size={20} />
            </button>
            <div className="flex items-center gap-2 sm:gap-3">
              {Array.from({ length: pages }, (_, i) => i + 1).map((n) => (
                <button
                  key={n}
                  onClick={() => setPage(n)}
                  aria-current={n === current ? "page" : undefined}
                  className={`h-9 w-9 sm:h-10 sm:w-10 rounded-full text-base sm:text-lg transition cursor-pointer ${
                    n === current
                      ? "bg-brand text-white font-medium shadow-md"
                      : "text-ink hover:bg-[#F3F3F3]"
                  }`}
                >
                  {n}
                </button>
              ))}
            </div>
            <button
              aria-label="Next page"
              disabled={current === pages}
              onClick={() => setPage(current + 1)}
              className="grid h-10 w-10 sm:h-11 sm:w-11 place-items-center rounded-full border border-[#D5D5D5] bg-white transition hover:border-brand disabled:opacity-30 cursor-pointer"
            >
              <ChevronRight size={20} />
            </button>
          </nav>
        )}
      </div>
    </>
  );
}
