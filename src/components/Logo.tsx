import Image from "next/image";
import Link from "next/link";

export default function Logo({
  variant = "light",
  className = "",
}: {
  variant?: "light" | "dark" | "icon";
  className?: string;
}) {
  const src =
    variant === "light"
      ? "/images/logo-light.png"
      : variant === "dark"
        ? "/images/logo-dark.png"
        : "/images/logo-icon.png";

  const [w, h] =
    variant === "icon" ? [38, 42] : variant === "light" ? [180, 44] : [182, 46];

  return (
    <Link
      href="/"
      aria-label="ByteSpace home"
      className={`inline-block shrink-0 transition-opacity hover:opacity-90 ${className}`}
    >
      <Image
        src={src}
        alt="ByteSpace"
        width={w}
        height={h}
        priority={variant !== "dark"}
        className="h-auto w-[140px] sm:w-[172px]"
        style={variant === "icon" ? { width: 38 } : undefined}
      />
    </Link>
  );
}
