"use client";

import Image from "next/image";
import { useState } from "react";
import { CheckCircle2, Star, Video } from "lucide-react";
import { keyPoints, modules, ratingBreakdown, reviews } from "@/src/lib/data";

const tabs = ["About", "Lessons", "Reviews"] as const;
type Tab = (typeof tabs)[number];

export default function CourseTabs() {
  const [tab, setTab] = useState<Tab>("About");

  return (
    <div>
      <div role="tablist" className="flex flex-wrap gap-2.5 sm:gap-3">
        {tabs.map((t) => (
          <button
            key={t}
            role="tab"
            aria-selected={tab === t}
            onClick={() => setTab(t)}
            className={`cursor-pointer rounded-full px-5 py-2.5 sm:px-6 sm:py-3 text-sm sm:text-base transition duration-300 select-none ${
              tab === t
                ? "bg-lime font-medium text-ink shadow-[0_4px_16px_-3px_rgba(204,255,0,0.6)]"
                : "bg-[#F3F3F3] text-[#444] hover:bg-[#E8E8E8]"
            }`}
          >
            {t}
          </button>
        ))}
      </div>
      <div key={tab} className="mt-8 sm:mt-10 animate-rise">
        {tab === "About" && <About />}
        {tab === "Lessons" && <Lessons />}
        {tab === "Reviews" && <Reviews />}
      </div>
    </div>
  );
}

const H = ({ children }: { children: React.ReactNode }) => (
  <h3 className="text-[20px] sm:text-[22px] font-medium text-ink">
    {children}
  </h3>
);

const P = ({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <p
    className={`text-sm sm:text-base font-light leading-relaxed text-[#555] ${className}`}
  >
    {children}
  </p>
);

function About() {
  return (
    <>
      <H>Description</H>
      <div className="mt-4 space-y-5 sm:space-y-6">
        <P>
          Embark on an enlightening exploration into the world of digital
          creation with our comprehensive course, &quot;Build Digital Assets: A
          Comprehensive Guide.&quot; This transformative learning experience
          invites you to delve deep into the intricacies of crafting impactful
          digital content. From laying the groundwork with foundational concepts
          to mastering advanced techniques, this guide is meticulously curated
          to empower you with the skills essential for navigating the dynamic
          landscape of digital asset creation.
        </P>
        <P>
          In the initial modules, you&apos;ll establish a solid foundation by
          immersing yourself in the foundational concepts that form the backbone
          of digital asset creation. Understand the fundamental elements that
          constitute compelling digital content and gain proficiency in
          leveraging these elements to communicate effectively in the digital
          realm.
        </P>
        <P>
          As you progress through the course, you&apos;ll ascend to higher
          levels of expertise, delving into the nuances of design principles
          that drive impactful creations. Uncover the secrets behind effective
          visual communication, exploring color theory, typography, and layout
          strategies that elevate your digital assets to new heights. Engage in
          hands-on exercises that reinforce your understanding, allowing you to
          apply these principles in practical scenarios.
        </P>
      </div>

      <h3 className="mt-8 sm:mt-9 text-[20px] sm:text-[22px] font-medium text-ink">
        Sneak Peak
      </h3>
      <div className="mt-4 grid grid-cols-2 gap-3 sm:gap-4 sm:grid-cols-4">
        {[1, 2, 3, 4].map((n) => (
          <div key={n} className="overflow-hidden rounded-2xl bg-[#eee]">
            <Image
              src={`/images/sneak-${n}.png`}
              alt={`Course preview ${n}`}
              width={167}
              height={126}
              className="aspect-[167/126] w-full object-cover transition duration-500 hover:scale-105"
            />
          </div>
        ))}
      </div>

      <h3 className="mt-8 sm:mt-9 text-[20px] sm:text-[22px] font-medium text-ink">
        Key Points
      </h3>
      <ul className="mt-4 space-y-3 sm:space-y-[15px]">
        {keyPoints.map((k) => (
          <li
            key={k}
            className="flex items-center gap-3 text-sm sm:text-base text-[#444]"
          >
            <CheckCircle2 className="h-5 w-5 sm:h-6 sm:w-6 shrink-0 fill-brand text-white" />
            {k}
          </li>
        ))}
      </ul>
    </>
  );
}

function Lessons() {
  return (
    <>
      <H>Explore the Modules</H>
      <P className="mt-3 sm:mt-4">
        Immerse yourself in the course content as we break down each module into
        comprehensive lessons, providing practical insights and hands-on
        experiences.
      </P>
      <h3 className="mb-4 sm:mb-5 mt-6 sm:mt-7 text-[20px] sm:text-[22px] font-medium text-ink">
        Lesson List
      </h3>
      <ul className="space-y-4 sm:space-y-6">
        {modules
          .filter((m) => !m.title.startsWith("Module 3"))
          .map((m) => (
            <li key={m.title} className="flex gap-4 sm:gap-5 items-start">
              <span className="grid h-12 w-12 sm:h-16 sm:w-16 shrink-0 place-items-center rounded-2xl bg-lime-soft">
                <Video
                  size={24}
                  className="text-ink sm:scale-110"
                  strokeWidth={2.2}
                />
              </span>
              <div>
                <p className="text-sm sm:text-base font-medium text-ink">
                  {m.title}
                </p>
                <p className="mt-1 text-xs sm:text-base font-light leading-relaxed text-[#666]">
                  {m.text}
                </p>
              </div>
            </li>
          ))}
      </ul>
      <h3 className="mt-8 text-[20px] sm:text-[22px] font-medium text-ink">
        Lesson Content
      </h3>
      <P className="mt-3 sm:mt-4">
        Engage with each lesson through captivating video content, detailed
        textual explanations, and interactive elements. Download resources,
        complete assignments, and test your understanding with quizzes.
      </P>
      <h3 className="mt-8 text-[20px] sm:text-[22px] font-medium text-ink">
        Lesson Progress Tracking
      </h3>
      <P className="mt-3 sm:mt-4">
        Witness your growth as you complete lessons, with an intuitive progress
        tracking feature guiding you through your learning journey.
      </P>
      <div className="mt-5 sm:mt-6 rounded-2xl border border-[#D9D9D9] p-5 sm:p-6 bg-white shadow-sm">
        <p className="text-sm sm:text-[15px] text-ink font-medium">
          Learning Progress
        </p>
        <p className="mt-1 font-heading text-[32px] sm:text-[40px] font-medium leading-tight text-ink">
          55%
        </p>
        <div className="mt-3 h-2 overflow-hidden rounded-full bg-[#E6E6E6]">
          <div
            className="h-full animate-fill rounded-full bg-lime"
            style={{ ["--w" as string]: "55%" }}
          />
        </div>
      </div>
    </>
  );
}

const Stars = ({
  n,
  size = 18,
  className = "",
}: {
  n: number;
  size?: number;
  className?: string;
}) => (
  <span
    className={`flex gap-1 ${className}`}
    aria-label={`${n} out of 5 stars`}
  >
    {Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        size={size}
        className={
          i < n ? "fill-[#4A4A4A] text-[#4A4A4A]" : "fill-[#DDD] text-[#DDD]"
        }
      />
    ))}
  </span>
);

function Reviews() {
  const [filter, setFilter] = useState<number | "all">("all");
  const list = reviews.filter((r) => filter === "all" || r.rating === filter);
  const max = Math.max(...ratingBreakdown.map((r) => r.count));

  return (
    <>
      <H>What Learners Are Saying</H>
      <P className="mt-3 sm:mt-4">
        Discover what our learners have to say about their experience with
        &apos;Build Digital Assets: A Comprehensive Guide.&apos; Read reviews
        and ratings from individuals who have embarked on the transformative
        journey of mastering digital asset creation.
      </P>

      <div className="mt-6 flex flex-col gap-6 rounded-3xl border border-[#D9D9D9] p-5 sm:p-6 sm:flex-row sm:items-center bg-white">
        <div className="grid h-[92px] w-[92px] sm:h-[104px] sm:w-[96px] shrink-0 place-content-center rounded-2xl bg-lime-soft text-center self-start sm:self-auto">
          <p className="text-xs sm:text-[13px] text-ink">Ratings</p>
          <p className="font-heading text-[34px] sm:text-[38px] font-medium leading-none text-ink">
            4.7
          </p>
        </div>
        <div className="flex-1 space-y-2 sm:space-y-[9px]">
          {ratingBreakdown.map((r) => (
            <div key={r.stars} className="flex items-center gap-3 sm:gap-4">
              <div className="h-[6px] flex-1 overflow-hidden rounded-full bg-[#E4E4E4]">
                <div
                  className="h-full animate-fill rounded-full bg-lime"
                  style={{
                    ["--w" as string]: `${(r.count / max) * 100}%`,
                  }}
                />
              </div>
              <Stars n={r.stars} size={15} className="hidden sm:flex" />
              <span className="w-8 sm:w-9 text-right text-xs sm:text-[15px] text-[#555]">
                {r.count}
              </span>
            </div>
          ))}
        </div>
      </div>

      <h3 className="mt-8 sm:mt-10 text-[20px] sm:text-[22px] font-medium text-ink">
        Individual Reviews:
      </h3>
      <div className="mt-4 sm:mt-5 flex flex-wrap gap-2.5 sm:gap-3">
        {(["all", 5, 4, 3, 2, 1] as const).map((f) => (
          <button
            key={f}
            type="button"
            onClick={() => setFilter(f)}
            className={`cursor-pointer inline-flex items-center gap-1.5 rounded-full px-4 py-2 sm:px-5 sm:py-2.5 text-xs sm:text-[15px] transition select-none ${
              filter === f
                ? "bg-lime font-medium text-ink shadow-sm"
                : "bg-[#F3F3F3] text-[#444] hover:bg-[#E8E8E8]"
            }`}
          >
            {f === "all" ? (
              "All rating"
            ) : (
              <>
                <Star size={15} className="fill-[#444] text-[#444]" />
                {f}
              </>
            )}
          </button>
        ))}
      </div>

      <div className="mt-6 space-y-4 sm:space-y-6">
        {list.length === 0 && (
          <p className="rounded-2xl bg-[#F6F6F6] p-6 text-[#666]">
            No reviews with this rating yet.
          </p>
        )}
        {list.map((r) => (
          <article
            key={r.id}
            className="rounded-3xl border border-[#D9D9D9] bg-white p-5 sm:p-6 transition hover:shadow-md"
          >
            <header className="flex items-start justify-between gap-4">
              <div className="flex items-center gap-3">
                <Image
                  src={r.avatar}
                  alt=""
                  width={53}
                  height={53}
                  className="h-10 w-10 sm:h-[42px] sm:w-[42px] rounded-full object-cover"
                />
                <div>
                  <p className="text-sm sm:text-base font-medium text-ink">
                    {r.name}
                  </p>
                  <p className="text-xs sm:text-sm text-[#777]">{r.role}</p>
                </div>
              </div>
              <span className="text-xs sm:text-sm text-[#777]">{r.when}</span>
            </header>
            <Stars n={r.rating} size={18} className="mt-4 sm:mt-5" />
            <p className="mt-3.5 sm:mt-4 text-sm sm:text-base font-light leading-relaxed text-[#555]">
              {r.text}
            </p>
          </article>
        ))}
      </div>
    </>
  );
}
