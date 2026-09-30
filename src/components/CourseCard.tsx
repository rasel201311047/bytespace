import Image from "next/image";
import Link from "next/link";
import { BarChart3, Star } from "lucide-react";
import { Course } from "../lib/data";

export default function CourseCard({
  course,
  className = "",
  style,
  decorative = false,
}: {
  course: Course;
  className?: string;
  style?: React.CSSProperties;
  decorative?: boolean;
}) {
  const Wrapper: React.ElementType = decorative ? "div" : Link;
  const wrapperProps = decorative
    ? { "aria-hidden": true }
    : { href: `/courses/${course.slug}` };

  return (
    <Wrapper
      {...wrapperProps}
      style={style}
      className={`group block rounded-[1.5em] border border-[#D9D9D9] bg-white p-[1em] text-left transition duration-300 hover:-translate-y-1 hover:border-brand/30 hover:shadow-[0_18px_40px_-18px_rgba(0,59,226,.35)] ${className}`}
    >
      <div className="relative aspect-[340/193] w-full overflow-hidden rounded-[1em] bg-[#eee]">
        <Image
          src={course.image}
          alt={course.title}
          fill
          sizes="(min-width:1024px) 340px, (min-width:640px) 45vw, 92vw"
          className="object-cover transition duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-x-[.5em] bottom-[.5em] sm:inset-x-[.8em] sm:bottom-[.8em] flex items-center justify-between gap-[.25em] sm:gap-[.5em] text-[.62em] min-[400px]:text-[.72em] sm:text-[.8em] text-[#4d4d4d]">
          <span className="min-w-0 truncate whitespace-nowrap rounded-full bg-white/70 px-[.55em] sm:px-[.65em] py-[.3em] backdrop-blur-md">
            {course.lessons} Lessons
          </span>
          <span className="min-w-0 truncate whitespace-nowrap rounded-full bg-white/70 px-[.55em] sm:px-[.65em] py-[.3em] backdrop-blur-md">
            {course.duration}
          </span>
          <span className="min-w-0 truncate whitespace-nowrap rounded-full bg-white/70 px-[.55em] sm:px-[.65em] py-[.3em] backdrop-blur-md">
            {course.comments} Comments
          </span>
        </div>
      </div>

      <div className="mt-[1.1em] flex items-start justify-between gap-[.5em] px-[.1em]">
        <h3 className="min-w-0 truncate font-heading text-[1.25em] font-medium leading-[1.3] text-black">
          {course.title}
        </h3>
        <span className="flex shrink-0 items-center gap-[.25em] text-[1.1em] text-[#666]">
          {course.rating}
          <Star
            className="h-[1.05em] w-[1.05em] fill-[#CFCFCF] text-[#CFCFCF]"
            strokeWidth={0}
          />
        </span>
      </div>
      <p className="px-[.1em] text-[.8125em] text-[#666]">
        by <span className="text-brand font-normal">{course.author}</span>
      </p>

      <div className="mt-[1em] flex items-center gap-[.7em]">
        <span className="inline-flex items-center gap-[.5em] rounded-full bg-[#F3F3F3] px-[1em] py-[.5em] text-[.875em] text-[#444]">
          <BarChart3 className="h-[1.1em] w-[1.1em]" strokeWidth={2.4} />
          {course.level}
        </span>
        <Image
          src="/images/cluster-lime.png"
          alt=""
          width={132}
          height={38}
          className="h-[2.35em] w-auto"
        />
      </div>

      <p className="mt-[1em] px-[.1em] pb-[.4em]">
        <span className="font-heading text-[1.375em] font-semibold text-brand">
          ${course.price}
        </span>
        <span className="text-[.8125em] text-[#666]">/lifetime</span>
      </p>
    </Wrapper>
  );
}
