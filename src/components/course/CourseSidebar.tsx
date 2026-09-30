import Image from "next/image";
import Link from "next/link";
import { FileText, Video, Award, MessagesSquare } from "lucide-react";
import { sidebarLessons } from "@/src/lib/data";

const includes = [
  { icon: FileText, label: "Learning Resources" },
  { icon: Video, label: "Quality Lesson Videos" },
  { icon: Award, label: "Certificate of Completion" },
  { icon: MessagesSquare, label: "Private Consultation" },
];

export default function CourseSidebar({ price }: { price: number }) {
  return (
    <aside className="rounded-[28px] sm:rounded-[32px] border border-[#DADADA] bg-white p-6 sm:p-8 lg:p-9 shadow-[0_20px_50px_-20px_rgba(0,20,120,.2)]">
      <h2 className="text-[20px] sm:text-[22px] font-medium text-ink">
        112 Lessons (24 hours)
      </h2>
      <ol className="mt-4 space-y-3">
        {sidebarLessons.map((l) => (
          <li
            key={l.n}
            className="flex items-start gap-3 text-[14px] sm:text-[15px] text-ink"
          >
            <span className="w-6 shrink-0 font-medium text-[#777]">{l.n}</span>
            <span className="flex-1 leading-[1.3]">{l.title}</span>
            <span className="shrink-0 font-medium text-brand">{l.time}</span>
          </li>
        ))}
      </ol>
      <p className="mt-3.5 text-sm text-[#777]">99 more videos</p>
      <p className="mt-7 text-sm sm:text-[15px] leading-relaxed text-[#666]">
        Ready to Dive In? Enroll Now and Start Building Your Digital Future!
      </p>
      <p className="mt-5">
        <span className="font-heading text-[32px] sm:text-[36px] font-medium text-brand">
          ${price}
        </span>
        <span className="text-base text-[#666]">/lifetime</span>
      </p>
      <button
        type="button"
        className="btn-lime mt-4 w-full cursor-pointer shadow-md"
      >
        Enroll Now
      </button>

      <h3 className="mt-8 text-[20px] sm:text-[22px] font-medium text-ink">
        This course includes
      </h3>
      <ul className="mt-4 space-y-3.5">
        {includes.map(({ icon: Icon, label }) => (
          <li
            key={label}
            className="flex items-center gap-3 text-sm sm:text-base text-[#555]"
          >
            <Icon size={19} className="text-brand shrink-0" strokeWidth={1.8} />
            {label}
          </li>
        ))}
      </ul>

      <hr className="my-6 sm:my-7 border-[#E5E5E5]" />
      <div className="flex items-center gap-4">
        <Image
          src="/images/avatar-side.png"
          alt="PurePearl Studio"
          width={58}
          height={58}
          className="h-[52px] w-[52px] sm:h-[58px] sm:w-[58px] rounded-full object-cover"
        />
        <div>
          <p className="text-base sm:text-lg font-medium text-ink">
            PurePearl Studio
          </p>
          <p className="text-xs sm:text-[14px] text-[#777]">
            Professional Creator
          </p>
        </div>
      </div>
      <p className="mt-5 text-sm leading-relaxed text-[#666]">
        Passionate UI/UX and Web designer dedicated to crafting top-tier
        learning experiences for students globally.
      </p>
      <Link
        href="/creators/purepearl-studio"
        className="mt-5 inline-block rounded-full border border-[#CFCFCF] px-5 py-2 text-sm sm:text-[15px] text-ink transition hover:border-brand hover:text-brand"
      >
        See Full Profile
      </Link>
    </aside>
  );
}
