import Image from "next/image";
import { CSSProperties } from "react";

export default function Floating({
  src,
  w,
  h,
  style,
  delay = 0,
  className = "",
  spin = false,
}: {
  src: string;
  w: number;
  h: number;
  style?: CSSProperties;
  delay?: number;
  className?: string;
  spin?: boolean;
}) {
  return (
    <div
      className={`pointer-events-none absolute select-none ${className}`}
      style={style}
      aria-hidden
    >
      <div
        className={spin ? "animate-spin-slow" : "animate-floaty"}
        style={{ animationDelay: `${delay}s` }}
      >
        <Image
          src={src}
          alt=""
          width={w}
          height={h}
          className="h-auto w-full select-none pointer-events-none"
        />
      </div>
    </div>
  );
}
