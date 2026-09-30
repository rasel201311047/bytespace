import Image from "next/image";
import { pos } from "../lib/pos";
import Reveal from "./Reveal";
import Floating from "./Floating";
import { HappyStudents } from "./StatCards";
import { CheckCircle2 } from "lucide-react";
const W = 600,
  H = 580;
const p = (x: number, y: number, w?: number) => pos(W, H, x, y, w);
const points = [
  "Share Your Expertise",
  "Monetize Your Passion",
  "Flexibility and Autonomy",
  "Build a Community",
];
export default function CreateSection() {
  return (
    <section className="relative overflow-hidden bg-[#FAFAFA] py-14 sm:py-20 lg:py-[90px]">
      <div className="pointer-events-none absolute -left-32 bottom-0 h-[320px] sm:h-[420px] w-[380px] sm:w-[520px] rounded-full bg-[#E4FF5C]/60 blur-[110px]" />
      <div className="pointer-events-none absolute -bottom-20 -right-20 h-[300px] sm:h-[400px] w-[420px] sm:w-[560px] rounded-full bg-[#BFCBF7]/70 blur-[110px]" />

      <div className="wrap relative grid items-center gap-12 lg:grid-cols-[600px_1fr] lg:gap-[100px] xl:gap-[120px]">
        {/* left */}
        <Reveal>
          <div
            className="relative mx-auto w-full max-w-[600px] select-none"
            style={{
              aspectRatio: `${W}/${H}`,
              fontSize: "clamp(8.5px, 2.3vw, 14.4px)",
            }}
          >
            {/* card*/}
            <div
              className="absolute z-0 rounded-2xl bg-brand p-[1.1em] text-white animate-floaty-slow shadow-xl"
              style={{
                ...p(21, 18, 187),
                height: `${(118 / H) * 100}%`,
              }}
            >
              <p className="text-[1.15em] font-light">Total Revenue</p>
              <p className="text-[.65em] opacity-80">July 1-28</p>
              <p className="mt-[.25em] font-heading text-[1.7em] font-medium leading-tight">
                $120.29
              </p>
              <div className="mt-[.4em] h-[.5em] w-full overflow-hidden rounded-full bg-white/30">
                <div
                  className="h-full animate-fill bg-lime rounded-full"
                  style={{ ["--w" as string]: "62%" }}
                />
              </div>
            </div>

            {/* woman herro  */}
            <Image
              src="/images/woman.png"
              alt="Creator with headphones holding a tablet"
              width={540}
              height={575}
              className="absolute z-10 h-auto pointer-events-none"
              style={p(50, 5, 540)}
            />
            {/* date */}
            <div
              className="absolute z-20 rounded-2xl bg-brand p-[1.1em] text-white animate-floaty-slow [animation-delay:1.2s] shadow-xl"
              style={{
                ...p(21, 168, 134),
                height: `${(134 / H) * 100}%`,
              }}
            >
              <p className="text-[1.15em] font-light">Year to Date</p>
              <p className="text-[.65em] opacity-80">2023</p>
              <p className="mt-[.25em] font-heading text-[1.6em] font-medium leading-tight">
                $1,200.38
              </p>
              <span className="mt-[.5em] inline-block rounded-full bg-lime px-[.8em] py-[.2em] text-[.7em] font-medium text-ink">
                +12$
              </span>
            </div>

            <Floating
              src="/images/spring-lime-diag.png"
              w={158}
              h={160}
              style={p(352, 118, 150)}
              className="z-20"
              delay={0.6}
            />

            <HappyStudents
              className="animate-floaty-slow [animation-delay:2s] absolute z-30"
              style={{
                ...p(304, 387, 258),
                fontSize: "clamp(7px, 1.9vw, 13.5px)",
              }}
            />
          </div>
        </Reveal>

        {/* right */}
        <Reveal>
          <h2 className="text-[28px] sm:text-[36px] lg:text-[43px] font-semibold leading-[1.22] text-ink">
            Create &amp; Manage
            <br />
            Courses Easily.
          </h2>
          <p className="mt-6 sm:mt-8 max-w-[560px] text-sm sm:text-base lg:text-lg font-light leading-relaxed text-[#555]">
            <b className="font-medium text-ink">ByteSpace</b> supports
            individuals or entities in the creation, publication, and
            administration of educational courses.
          </p>

          <ul className="mt-7 sm:mt-9 space-y-3.5 sm:space-y-[17px]">
            {points.map((t) => (
              <li
                key={t}
                className="flex items-center gap-3 text-base sm:text-lg text-ink"
              >
                <CheckCircle2 className="h-5 w-5 sm:h-6 sm:w-6 shrink-0 fill-brand text-white" />
                {t}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
