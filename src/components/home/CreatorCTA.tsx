import Link from "next/link";
import Reveal from "../Reveal";
import Floating from "../Floating";
import { pos } from "@/src/lib/pos";
const W = 1440,
  H = 488;
const p = (x: number, y: number, w?: number) => pos(W, H, x, y, w);
export default function CreatorCTA() {
  return (
    <section className="bg-grid relative overflow-hidden">
      <div className="relative mx-auto max-w-[1440px]">
        <div className="hidden lg:block pointer-events-none">
          <Floating
            src="/images/cta-spring-lime-tl.png"
            w={170}
            h={178}
            style={{ ...p(0, 2, 170), top: 0 }}
          />
          <Floating
            src="/images/cta-squiggle-white.png"
            w={127}
            h={132}
            style={p(205, 28, 127)}
            delay={1}
          />
          <Floating
            src="/images/cta-cone-lime.png"
            w={138}
            h={146}
            style={p(1098, 18, 138)}
            delay={0.5}
          />
          <Floating
            src="/images/cta-cylinder-white.png"
            w={178}
            h={308}
            style={p(1262, 38, 178)}
            delay={1.5}
          />
          <Floating
            src="/images/cta-cone-white.png"
            w={122}
            h={160}
            style={p(0, 238, 122)}
            delay={0.8}
          />
          <Floating
            src="/images/cta-torus-lime.png"
            w={250}
            h={134}
            style={{ ...p(64, 354, 250) }}
            delay={1.9}
          />
          <Floating
            src="/images/cta-spring-lime-br.png"
            w={206}
            h={166}
            style={p(1172, 322, 206)}
            delay={0.2}
          />
        </div>
        <Reveal className="relative z-10 mx-auto max-w-[980px] px-5 py-14 sm:py-18 md:pb-[70px] md:pt-[100px] text-center">
          <h2 className="mx-auto max-w-[660px] text-[26px] sm:text-[34px] md:text-[42px] font-semibold leading-[1.25] text-white">
            Unlock Your Potential as a Creator with ByteSpace
          </h2>
          <p className="mx-auto mt-6 sm:mt-8 max-w-[920px] text-sm sm:text-base md:text-[17px] font-light leading-relaxed text-white/90">
            Experience the collaboration of numerous creators and an expanding
            selection of courses. Register now and become a part of a community
            comprising over 10,000 local and international creators. Utilize our
            Course Editor, and showcase your expertise by publishing your finest
            course on the ByteSpace Course Library.
          </p>
          <div className="mt-8 sm:mt-10">
            <Link
              href="/register"
              className="btn-lime cursor-pointer inline-flex"
            >
              Join as Creator
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
