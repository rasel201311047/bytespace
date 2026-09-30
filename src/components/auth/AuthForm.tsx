"use client";

import { useRouter } from "next/navigation";
import { useState, type FormEvent } from "react";
import Field from "./Field";
import { AuthLink } from "./AuthShell";

const FacebookIcon = () => (
  <svg
    viewBox="0 0 24 24"
    width="28"
    height="28"
    fill="currentColor"
    aria-hidden
  >
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
  </svg>
);

const GoogleIcon = () => (
  <svg viewBox="0 0 24 24" width="28" height="28" aria-hidden>
    <path
      fill="#111"
      d="M21.35 11.1H12v3.2h5.35c-.5 2.4-2.5 3.7-5.35 3.7a6 6 0 1 1 0-12c1.5 0 2.85.55 3.9 1.45l2.3-2.3A9.2 9.2 0 0 0 12 2.6a9.4 9.4 0 1 0 0 18.8c5.4 0 9-3.8 9-9.1 0-.4 0-.8-.1-1.2h.45Z"
    />
  </svg>
);

type Errors = Partial<Record<"name" | "email" | "password", string>>;

export default function AuthForm({ mode }: { mode: "login" | "register" }) {
  const router = useRouter();
  const isLogin = mode === "login";
  const [values, setValues] = useState({ name: "", email: "", password: "" });
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<"idle" | "loading" | "done">("idle");

  const set =
    (k: keyof typeof values) => (e: React.ChangeEvent<HTMLInputElement>) =>
      setValues((v) => ({ ...v, [k]: e.target.value }));

  const submit = (e: FormEvent) => {
    e.preventDefault();
    const err: Errors = {};
    if (!isLogin && values.name.trim().length < 2)
      err.name = "Please enter your full name.";
    if (!/^\S+@\S+\.\S+$/.test(values.email))
      err.email = "Enter a valid email address.";
    if (values.password.length < 8)
      err.password = "Password must be at least 8 characters.";
    setErrors(err);
    if (Object.keys(err).length) return;
    setStatus("loading");
    setTimeout(() => {
      setStatus("done");
      setTimeout(() => router.push("/"), 900);
    }, 700);
  };

  return (
    <form onSubmit={submit} noValidate>
      <p className="text-lg sm:text-xl font-medium text-brand">
        {isLogin ? "Sign In" : "Create an Account"}
      </p>
      <h2 className="mt-1 text-[30px] sm:text-[38px] lg:text-[44px] font-semibold leading-[1.15] text-ink">
        {isLogin ? (
          "Welcome Back"
        ) : (
          <>
            Welcome to
            <br />
            ByteSpace
          </>
        )}
      </h2>

      <div
        className={`space-y-4 sm:space-y-6 ${isLogin ? "mt-8 sm:mt-12" : "mt-8 sm:mt-10"}`}
      >
        {!isLogin && (
          <Field
            label="Full Name"
            name="name"
            placeholder="Jamie Davis"
            autoComplete="name"
            value={values.name}
            onChange={set("name")}
            error={errors.name}
          />
        )}
        <Field
          label="Email"
          name="email"
          type="email"
          placeholder="designer@example.com"
          autoComplete="email"
          value={values.email}
          onChange={set("email")}
          error={errors.email}
        />
        <Field
          label="Password"
          name="password"
          type="password"
          placeholder="••••••••"
          autoComplete={isLogin ? "current-password" : "new-password"}
          value={values.password}
          onChange={set("password")}
          error={errors.password}
        />
      </div>

      <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
        {status === "done" && (
          <p
            role="status"
            className="animate-pop text-sm font-medium text-[#2E7D32]"
          >
            {isLogin
              ? "Signed in! Redirecting…"
              : "Account created! Redirecting…"}
          </p>
        )}
        <button
          type="submit"
          disabled={status !== "idle"}
          className="btn-lime h-[46px] sm:h-[48px] cursor-pointer sm:ml-auto disabled:opacity-70 shadow-md"
        >
          {status === "loading"
            ? "Please wait…"
            : isLogin
              ? "Sign In"
              : "Continue"}
        </button>
      </div>

      {isLogin && (
        <>
          <div className="my-8 sm:my-10 flex items-center gap-4 text-sm text-[#777]">
            <span className="h-px flex-1 bg-[#E0E0E0]" />
            or
            <span className="h-px flex-1 bg-[#E0E0E0]" />
          </div>
          <div className="flex justify-center gap-4">
            <button
              type="button"
              aria-label="Continue with Facebook"
              className="grid h-[58px] w-[58px] sm:h-[68px] sm:w-[68px] place-items-center rounded-[20px] border border-[#DADADA] bg-white transition hover:-translate-y-1 hover:border-brand cursor-pointer shadow-sm"
            >
              <FacebookIcon />
            </button>
            <button
              type="button"
              aria-label="Continue with Google"
              className="grid h-[58px] w-[58px] sm:h-[68px] sm:w-[68px] place-items-center rounded-[20px] border border-[#DADADA] bg-white transition hover:-translate-y-1 hover:border-brand cursor-pointer shadow-sm"
            >
              <GoogleIcon />
            </button>
          </div>
        </>
      )}

      <p
        className={`text-center text-sm sm:text-base lg:text-lg text-[#666] ${
          isLogin ? "mt-8 sm:mt-12 lg:mt-[60px]" : "mt-8 sm:mt-12 lg:mt-[70px]"
        }`}
      >
        {isLogin ? (
          <>
            New user? <AuthLink href="/register">Create an account</AuthLink>
          </>
        ) : (
          <>
            Already have an account? <AuthLink href="/login">Login</AuthLink>
          </>
        )}
      </p>
    </form>
  );
}
