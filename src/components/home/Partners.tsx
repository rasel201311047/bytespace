import { partnerLogos } from "@/src/lib/data";
import Image from "next/image";

export default function Partners() {
  const row = [
    ...partnerLogos,
    ...partnerLogos,
    ...partnerLogos,
    ...partnerLogos,
  ];
  return (
    <section
      className="overflow-hidden bg-[#F4F4F4] py-10 sm:py-14 lg:py-[72px]"
      aria-label="Our partners"
    >
      <div className="flex w-max animate-marquee gap-10 sm:gap-14 lg:gap-[72px]">
        {row.map((n, i) => (
          <Image
            key={i}
            src={`/images/logo-partner-${n}.png`}
            alt="Partner brand logo"
            width={175}
            height={52}
            className="h-8 sm:h-10 lg:h-[52px] w-auto shrink-0 opacity-80 transition hover:opacity-100"
          />
        ))}
      </div>
    </section>
  );
}
