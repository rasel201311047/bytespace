"use client";

import { usePathname } from "next/navigation";
import { useState } from "react";
import Logo from "./Logo";
import Link from "next/link";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { Menu, X } from "lucide-react";

const links = [
  { href: "/", label: "Home" },
  { href: "/courses", label: "Courses" },
  { href: "/creators/purepearl-studio", label: "Creators" },
];
export default function Navber() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const isActive = (href: string) =>
    href === "/"
      ? pathname === "/"
      : pathname.startsWith(href.split("/").slice(0, 2).join("/"));

  return (
    <header className="absolute inset-x-0 top-0 z-30 animate-rise">
      <div className="wrap relative flex h-[88px] sm:h-[104px] lg:h-[120px] items-center justify-between">
        <Logo />
        <nav
          className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-8 md:flex"
          aria-label="Main"
        >
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`text-base transition-colors hover:text-lime ${
                isActive(l.href)
                  ? "font-normal text-white"
                  : "font-light text-white/90"
              }`}
            >
              {l.label}
            </Link>
          ))}
        </nav>
        <div className="hidden items-center gap-6 lg:gap-7 md:flex">
          <Link
            href="/login"
            className="text-base font-light text-white/90 transition-colors hover:text-lime"
          >
            Sign In
          </Link>
          <Link
            href="/register"
            className="text-base font-light text-white/90 transition-colors hover:text-lime"
          >
            Join Us
          </Link>
          <button
            aria-label="Cart"
            className="cursor-pointer text-white transition hover:scale-110 hover:text-lime"
          >
            <HiOutlineShoppingBag size={20} strokeWidth={1.75} />
          </button>
        </div>

        {/*------mobole phone------------- */}

        <div className="flex items-center gap-4 md:hidden">
          <button
            aria-label="Cart"
            className="cursor-pointer text-white transition hover:text-lime"
          >
            <HiOutlineShoppingBag size={22} strokeWidth={1.75} />
          </button>
          <button
            className="cursor-pointer text-white p-1 focus:outline-none"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((o) => !o)}
          >
            {open ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>

        {/* dwair */}
        {open && (
          <div className="wrap md:hidden pb-4">
            <div className="animate-pop rounded-3xl bg-white/98 p-6 shadow-2xl backdrop-blur-xl border border-white/20">
              <nav className="flex flex-col gap-1.5" aria-label="Mobile">
                {links.map((l) => (
                  <Link
                    key={l.href}
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className={`rounded-2xl px-4 py-3 text-lg transition duration-200 ${
                      isActive(l.href)
                        ? "bg-lime font-medium text-ink shadow-[0_4px_12px_-2px_rgba(204,255,0,0.6)]"
                        : "text-ink hover:bg-[#F3F3F3]"
                    }`}
                  >
                    {l.label}
                  </Link>
                ))}
                <div className="mt-4 flex gap-3">
                  <Link
                    href="/login"
                    onClick={() => setOpen(false)}
                    className="btn-lime flex-1 !bg-[#F3F3F3] text-ink"
                  >
                    Sign In
                  </Link>
                  <Link
                    href="/register"
                    onClick={() => setOpen(false)}
                    className="btn-lime flex-1"
                  >
                    Join Us
                  </Link>
                </div>
              </nav>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
