import { baseCourses } from "@/src/lib/data";
import CourseCard from "../CourseCard";
import Reveal from "../Reveal";
import { pos } from "@/src/lib/pos";
import Image from "next/image";
import Floating from "../Floating";
import { LearningProgress } from "../StatCards";
const W = 640,
  H = 570;
const p = (x: number, y: number, w?: number) => pos(W, H, x, y, w);
const stats = [
  ["12K", "Students"],
  ["70+", "Courses"],
  ["16", "Creators"],
];

export default function PathSection() {
  return (
    <section className="relative overflow-hidden bg-[#FAFAFA] py-14 sm:py-20 lg:py-[100px]">
      <div className="pointer-events-none absolute -top-40 left-[10%] h-[380px] sm:h-[520px] w-[500px] sm:w-[760px] rounded-full bg-[#D9FF3D]/60 blur-[110px]" />
      <div className="pointer-events-none absolute -bottom-32 -left-24 h-[280px] sm:h-[380px] w-[380px] sm:w-[520px] rounded-full bg-[#C6D0FA]/70 blur-[110px]" />
      <div className="pointer-events-none absolute -right-24 top-10 h-[280px] sm:h-[380px] w-[300px] sm:w-[420px] rounded-full bg-[#DDE2FA]/70 blur-[110px]" />
      <div className="wrap relative grid items-center gap-12 lg:grid-cols-[1fr_640px] lg:gap-14">
        <Reveal>
          <h2 className="max-w-[560px] text-[28px] sm:text-[36px] lg:text-[43px] font-semibold leading-[1.22] text-ink">
            Your Path to Professional Growth Starts Here!
          </h2>

          <p className="mt-6 sm:mt-8 max-w-[480px] text-sm sm:text-base lg:text-lg font-light leading-relaxed text-[#555]">
            Explore our curated selection of courses tailored to enhance your
            capabilities and accelerate your career journey. Whether you are
            looking to sharpen specific skills, gain industry expertise, or
            embark on a new career path entirely, we have the resources you
            need.
          </p>

          <dl className="mt-8 sm:mt-10 flex gap-8 sm:gap-14">
            {stats.map(([n, l]) => (
              <div key={l}>
                <dt className="font-body text-[28px] sm:text-[34px] font-normal leading-none text-brand">
                  {n}
                </dt>
                <dd className="mt-2 text-base sm:text-lg font-light text-[#444]">
                  {l}
                </dd>
              </div>
            ))}
          </dl>
        </Reveal>

        <Reveal>
          <div
            className="relative mx-auto w-full max-w-[640px] select-none"
            style={{
              aspectRatio: `${W}/${H}`,
              fontSize: "clamp(8.5px, 2.2vw, 14.4px)",
            }}
          >
            <CourseCard
              course={baseCourses[0]}
              decorative
              className="pointer-events-none absolute !text-[.95em] shadow-lg"
              style={{ ...p(18, 0, 372) }}
            />
            <Image
              src="/images/hero-man.png"
              alt="Student"
              width={570}
              height={494}
              className="absolute z-10 h-auto pointer-events-none"
              style={{
                ...p(62, 28, 590),
                WebkitMaskImage:
                  "linear-gradient(90deg,transparent 12%,#000 30%)",
                maskImage: "linear-gradient(90deg,transparent 12%,#000 30%)",
              }}
            />

            <Floating
              src="/images/spring-lime-diag.png"
              w={158}
              h={160}
              style={p(462, 88, 150)}
              className="z-20"
              delay={0.4}
            />
            <LearningProgress
              className="animate-floaty-slow absolute z-30"
              style={{
                ...p(345, 214, 232),
                fontSize: "clamp(8px, 1.8vw, 13.5px)",
              }}
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
