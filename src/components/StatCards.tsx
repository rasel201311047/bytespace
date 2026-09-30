import { Star } from "lucide-react";
import Image from "next/image";

export function LearningProgress({
  className = "",
  style,
}: {
  className?: string;
  style?: React.CSSProperties;
}) {
  return (
    <div
      style={style}
      className={`rounded-[1.1em] bg-white p-[1.15em] shadow-[0_20px_50px_-20px_rgba(0,0,0,.35)] backdrop-blur-sm select-none ${className}`}
    >
      <p className="text-[1em] text-ink whitespace-nowrap">Learning Progress</p>
      <p className="mt-[.15em] font-heading text-[3.3em] font-medium leading-[1.15] text-ink">
        55%
      </p>
      <div className="mt-[.45em] h-[.7em] w-full overflow-hidden rounded-full bg-[#EEE]">
        <div
          className="h-full animate-fill rounded-full bg-lime"
          style={{ ["--w" as string]: "55%" }}
        />
      </div>
    </div>
  );
}
export function HappyStudents({
  className = "",
  style,
  dark = false,
}: {
  className?: string;
  style?: React.CSSProperties;
  dark?: boolean;
}) {
  return (
    <div
      style={style}
      className={`rounded-[1.1em] bg-white p-[1.1em] shadow-[0_20px_50px_-20px_rgba(0,0,0,.35)] backdrop-blur-sm select-none ${className}`}
    >
      <p className="text-[1.2em] leading-tight text-ink font-medium whitespace-nowrap">
        Happy Students
      </p>
      <p className="mt-[.2em] flex items-center gap-[.3em] text-[.8em] text-ink">
        <b className="font-medium">4.5</b>
        <span className="text-[#999]">(240)</span>
        <Star className="h-[1em] w-[1em] fill-lime text-lime" />
      </p>
      <Image
        src={dark ? "/images/cluster-login.png" : "/images/cluster-hero.png"}
        alt="Student avatars"
        width={244}
        height={54}
        className="mt-[.6em] h-auto w-[92%]"
      />
    </div>
  );
}
