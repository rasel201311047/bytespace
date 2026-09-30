import {
  Building2,
  Camera,
  Code2,
  Laptop,
  Megaphone,
  PenTool,
} from "lucide-react";
import Reveal from "../Reveal";
import { learningPaths } from "@/src/lib/data";
const icons = {
  Design: PenTool,
  Development: Code2,
  "IT & Software": Laptop,
  Business: Building2,
  Marketing: Megaphone,
  Photography: Camera,
} as const;
export default function LearningPaths() {
  return (
    <section className="bg-white pb-16 pt-4 sm:pb-[110px] sm:pt-6">
      <div className="wrap">
        <Reveal className="text-center">
          <h2 className="text-[26px] sm:text-[34px] lg:text-[36px] font-semibold text-[#0B0B1A]">
            Explore Diverse Learning Paths at Bytespace
          </h2>
          <p className="mx-auto mt-3.5 sm:mt-4 max-w-[920px] text-sm sm:text-base lg:text-lg font-light leading-relaxed text-[#7A7A7A]">
            At Bytespace, we believe in empowering individuals through
            knowledge. Our diverse range of courses spans various fields,
            ensuring there&apos;s something for everyone. Unleash your potential
            and explore our carefully curated categories.
          </p>
        </Reveal>
        {/* the contain */}
        <div className="mt-10 sm:mt-12 grid grid-cols-2 gap-3.5 sm:grid-cols-3 lg:grid-cols-6 lg:gap-8">
          {learningPaths.map((p, i) => {
            const Icon = icons[p];
            return (
              <Reveal key={p} delay={i * 70}>
                <button
                  type="button"
                  className="group flex aspect-square w-full cursor-pointer flex-col items-center justify-center gap-3 sm:gap-4 rounded-[24px] sm:rounded-[28px] border border-[#D9D9D9] bg-white transition duration-300 hover:-translate-y-1.5 hover:border-lime hover:shadow-[0_18px_36px_-18px_rgba(140,180,0,.6)]"
                >
                  <span className="grid h-[52px] w-[52px] sm:h-[60px] sm:w-[60px] place-items-center rounded-full bg-lime-soft transition duration-500 group-hover:rotate-[360deg]">
                    <Icon
                      size={24}
                      strokeWidth={2.4}
                      className="text-ink sm:scale-110"
                    />
                  </span>
                  <span className="text-sm sm:text-[16px] lg:text-[17px] font-medium text-ink">
                    {p}
                  </span>
                </button>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
