import { Star } from "lucide-react";
import Image from "next/image";
import Floating from "../Floating";
import CourseCard from "../CourseCard";
import { baseCourses } from "@/src/lib/data";
import Logo from "../Logo";
import { pos } from "@/src/lib/pos";
import Link from "next/link";
const W = 520,
  H = 580;
const p = (x: number, y: number, w?: number) => pos(W, H, x, y, w);

export default function AuthShell({
  title,
  text,
  children,
}: {
  title: string;
  text: string;
  children: React.ReactNode;
}) {
  return (
    <main className="bg-grid relative min-h-screen overflow-hidden flex flex-col justify-center">
      <div className="mx-auto grid w-full max-w-[1440px] gap-8 sm:gap-10 px-4 sm:px-10 py-8 lg:grid-cols-[1fr_579px] lg:gap-[100px] xl:gap-[120px] lg:px-[80px] xl:px-[120px] lg:py-[33px]">
        <div className="hidden lg:block">
          <Logo variant="icon" />
          <div className="animate-rise pt-10 xl:pt-12">
            <h1 className="text-[24px] xl:text-[26px] font-medium text-white">
              {title}
            </h1>
            <p className="mt-4 max-w-[480px] text-base xl:text-lg font-light leading-relaxed text-white/90">
              {text}
            </p>
          </div>

          <div
            className="relative mt-10 xl:mt-[54px] w-[520px] max-w-full select-none"
            style={{ aspectRatio: `${W}/${H}`, fontSize: 16 }}
            aria-hidden
          >
            <CourseCard
              decorative
              course={baseCourses[1]}
              className="absolute"
              style={p(12, 95, 373)}
            />
            <CourseCard
              decorative
              course={baseCourses[2]}
              className="absolute z-10 shadow-2xl"
              style={p(123, 5, 373)}
            />
            <Floating
              src="/images/login-torus.png"
              w={112}
              h={104}
              style={p(62, 45, 102)}
              className="z-20"
              delay={0}
            />
            <Floating
              src="/images/login-cone.png"
              w={136}
              h={146}
              style={p(12, 425, 126)}
              className="z-20"
              delay={1}
            />
            <Floating
              src="/images/login-spring.png"
              w={124}
              h={132}
              style={p(388, 350, 124)}
              className="z-20"
              delay={0.5}
            />
            <div
              className="absolute z-20 rounded-[14px] bg-lime px-4 py-3 shadow-lg animate-floaty-slow"
              style={p(238, 440, 258)}
            >
              <p className="text-sm font-medium text-ink">Happy Students</p>
              <p className="flex items-center gap-1 text-[11px] text-ink">
                <b className="font-semibold">4.5</b>
                <span className="text-[#666]">(240)</span>
                <Star size={12} className="fill-brand text-brand" />
              </p>
              <Image
                src="/images/cluster-login.png"
                alt=""
                width={238}
                height={48}
                className="mt-1.5 h-auto w-[92%]"
              />
            </div>
          </div>
        </div>

        <div className="lg:hidden flex items-center justify-between">
          <Logo variant="icon" />
          <Link
            href="/"
            className="text-sm font-medium text-white/90 hover:text-lime transition"
          >
            ← Back to Home
          </Link>
        </div>

        <div className="mx-auto w-full max-w-[579px] animate-pop rounded-[28px] sm:rounded-[32px] bg-white p-6 sm:p-10 lg:p-[56px] xl:p-[63px] shadow-2xl lg:mx-0 lg:mt-[50px] lg:self-start">
          {children}
        </div>
      </div>
    </main>
  );
}
export function AuthLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link href={href} className="text-brand font-medium hover:underline">
      {children}
    </Link>
  );
}
