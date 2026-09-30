"use client";

import Link from "next/link";
import { useState, type FormEvent } from "react";

import Logo from "./Logo";
import { footerCols } from "../lib/data";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);

  const submit = (e: FormEvent) => {
    e.preventDefault();
    if (!/^\S+@\S+\.\S+$/.test(email)) return;
    setDone(true);
    setEmail("");
  };
  return (
    <footer className="border-t border-[#E6E6E6] bg-white">
      <div className="wrap pt-12 sm:pt-16 lg:pt-[70px]">
        <div className="grid gap-12 lg:grid-cols-[1fr_620px] lg:gap-8">
          <div>
            <Logo variant="dark" />
            <p className="mt-3 text-sm text-[#444] max-w-[440px]">
              Stay up to date with our latest features and releases by joining
              our newsletter.
            </p>
            <form
              onSubmit={submit}
              className="mt-7 flex max-w-[520px] flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4"
              noValidate
            >
              <label htmlFor="newsletter" className="sr-only">
                Email address
              </label>
              <input
                id="newsletter"
                type="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  setDone(false);
                }}
                placeholder="Enter your email"
                className="h-[50px] sm:h-[52px] min-w-0 flex-1 rounded-full border border-[#D5D5D5] bg-white px-5 sm:px-6 text-base outline-none transition placeholder:text-[#666] focus:border-brand focus:ring-2 focus:ring-brand/20"
              />
              <button
                type="submit"
                className="btn-lime h-[46px] !px-6 cursor-pointer"
              >
                Subscribe
              </button>
            </form>
            <p
              className="mt-3.5 max-w-[470px] text-xs leading-5 text-[#555]"
              aria-live="polite"
            >
              {done
                ? "Thanks for subscribing — check your inbox soon."
                : "By subscribing, you agree to our Privacy Policy and consent to receive updates from our company."}
            </p>
          </div>

          <nav
            aria-label="Footer"
            className="grid grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-3 lg:pl-0"
          >
            {footerCols.map((col, i) => (
              <ul key={i} className="space-y-3.5 sm:space-y-[18px]">
                {col.map((t) => (
                  <li key={t}>
                    <Link
                      href="#"
                      className="text-sm text-[#333] transition hover:text-brand"
                    >
                      {t}
                    </Link>
                  </li>
                ))}
              </ul>
            ))}
          </nav>
        </div>

        <div className="mt-12 sm:mt-16 lg:mt-[110px] flex flex-col-reverse items-start justify-between gap-4 border-t border-[#DDD] py-7 sm:py-8 text-xs text-[#555] sm:flex-row sm:items-center">
          <p>© 2026 ByteSpace. All rights reserved.</p>
          <div className="flex flex-wrap gap-5 sm:gap-6">
            <Link href="#" className="hover:text-brand transition">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-brand transition">
              Terms of Service
            </Link>
            <Link href="#" className="hover:text-brand transition">
              Cookies Settings
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
