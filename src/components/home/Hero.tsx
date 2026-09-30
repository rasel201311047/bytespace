import { pos } from "@/src/lib/pos";
import Floating from "../Floating";
import Navber from "../Navber";
import { Search } from "lucide-react";
const W = 1440,
  H = 1024;
const p = (x: number, y: number, w?: number) => pos(W, H, x, y, w);

export default function Hero() {
  return (
    <section className="bg-grid relative overflow-hidden">
      <Navber />

      <div
        className="relative mx-auto max-w-[1440px] lg:aspect-[1440/1024]"
        style={{ fontSize: "clamp(8px,1vw,14.4px)" }}
      >
        {/* the element of the herroside  */}
        <div className="hidden lg:block pointer-events-none">
          <Floating
            src="/images/hero-spring-lime.png"
            w={205}
            h={287}
            style={p(0, 275, 205)}
            className="[--r:0deg]"
            delay={0}
          />
          <Floating
            src="/images/hero-squiggle-white.png"
            w={130}
            h={138}
            style={p(208, 498, 130)}
            delay={1.2}
          />
          <Floating
            src="/images/hero-cone-white.png"
            w={140}
            h={154}
            style={p(1124, 478, 140)}
            delay={0.6}
          />
          <Floating
            src="/images/hero-torus-white.png"
            w={252}
            h={268}
            style={p(60, 732, 252)}
            delay={2}
            className="z-20"
          />
          <Floating
            src="/images/hero-spring-white.png"
            w={206}
            h={264}
            style={p(1190, 704, 206)}
            delay={1.6}
            className="z-20"
          />
          <Floating
            src="/images/hero-cylinder-lime.png"
            w={172}
            h={318}
            style={p(1268, 250, 172)}
            delay={0.3}
          />
        </div>

        <div className="relative z-10 px-5 pb-6 pt-[110px] sm:pt-[130px] text-center lg:absolute lg:inset-x-0 lg:top-0 lg:p-0 lg:pt-[12.2%]">
          <h1 className="mx-auto max-w-[853px] animate-rise text-[34px] sm:text-[48px] md:text-[56px] lg:text-[clamp(44px,4.9vw,70px)] font-semibold leading-[1.16] text-white">
            Get Access to Hundreds Courses Available
          </h1>
          <p className="mx-auto mt-4 sm:mt-6 max-w-[860px] animate-rise text-sm sm:text-base md:text-lg font-light text-white/90 [animation-delay:.12s] lg:mt-[2.6%]">
            Unlock your creativity, gain valuable knowledge, and grow your
            business with our wide range of courses.
          </p>
          <form
            action="/courses"
            className="mx-auto mt-6 sm:mt-8 flex max-w-[555px] animate-rise items-center gap-2.5 sm:gap-3 [animation-delay:.24s] lg:mt-[4%]"
          >
            <label htmlFor="hero-search" className="sr-only">
              Search courses
            </label>
            <div className="flex h-[48px] sm:h-[52px] flex-1 items-center gap-2.5 sm:gap-3 rounded-full bg-white px-4 sm:px-5 text-[#777] shadow-lg focus-within:ring-2 focus-within:ring-lime">
              <Search size={18} className="shrink-0 text-[#888]" />
              <input
                id="hero-search"
                name="q"
                placeholder="Course, topic, creator"
                className="w-full min-w-0 bg-transparent text-sm sm:text-base text-ink outline-none placeholder:text-[#888]"
              />
            </div>
            <button
              type="submit"
              className="btn-lime h-[46px] sm:h-[48px] !px-5 sm:!px-6 shadow-md cursor-pointer shrink-0"
            >
              Search
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
