import Reveal from "../Reveal";
import Image from "next/image";
import { testimonials } from "@/src/lib/data";

export default function Testimonials() {
  return (
    <section className="relative overflow-hidden bg-[#FAFAFA] py-14 sm:py-20 lg:py-[100px]">
      <div className="pointer-events-none absolute right-0 top-0 h-[380px] sm:h-[520px] w-[500px] sm:w-[720px] rounded-full bg-[#DCFF3A]/50 blur-[120px]" />
      <div className="pointer-events-none absolute -left-20 bottom-0 h-[320px] sm:h-[420px] w-[400px] sm:w-[520px] rounded-full bg-[#C2CEF8]/70 blur-[120px]" />

      <div className="wrap relative">
        {/* head */}
        <Reveal className="grid items-center gap-6 lg:grid-cols-2 lg:gap-16">
          <h2 className="max-w-[520px] text-[28px] sm:text-[36px] lg:text-[43px] font-semibold leading-[1.22] text-black">
            Discover What Our Community Is Saying
          </h2>
          <p className="text-sm sm:text-base lg:text-lg font-light leading-relaxed text-[#555]">
            At ByteSpace, our vibrant community of learners and creators is at
            the heart of what we do. Hear directly from those who have
            experienced the transformative journey of learning and creating on
            our platform. Explore testimonials that reflect the diverse
            perspectives of enthusiastic learners and accomplished creators.
          </p>
        </Reveal>

        {/* card  */}

        <div className="mt-10 sm:mt-14 grid items-stretch gap-6 md:grid-cols-3 lg:gap-8 xl:gap-10">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={i * 110}>
              <figure className="flex h-full flex-col rounded-[28px] sm:rounded-[32px] bg-white p-6 sm:p-7 shadow-[0_10px_30px_-15px_rgba(0,0,0,0.06)] transition duration-300 hover:-translate-y-1.5 hover:shadow-[0_24px_50px_-24px_rgba(0,59,226,.35)]">
                <Image
                  src={t.avatar}
                  alt={t.name}
                  width={81}
                  height={81}
                  className="h-16 w-16 sm:h-20 sm:w-20 rounded-full object-cover"
                />
                <figcaption className="mt-5 sm:mt-6">
                  <p className="font-heading text-lg sm:text-xl font-semibold text-black">
                    {t.name}
                  </p>
                  <p className="mt-0.5 text-sm sm:text-[16px] text-brand">
                    {t.role}
                  </p>
                </figcaption>
                <blockquote className="mt-4 sm:mt-5 flex-1 text-sm sm:text-[16px] font-light leading-relaxed text-[#555]">
                  {t.text}
                </blockquote>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
