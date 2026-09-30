import type { InputHTMLAttributes } from "react";

type Props = InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  error?: string;
};
export default function Field({ label, error, id, ...rest }: Props) {
  const fid = id ?? rest.name;
  return (
    <div>
      <label
        htmlFor={fid}
        className="mb-1.5 sm:mb-2 block text-sm sm:text-base font-medium text-ink"
      >
        {label}
      </label>
      <input
        id={fid}
        aria-invalid={!!error}
        aria-describedby={error ? `${fid}-err` : undefined}
        className={`h-[48px] sm:h-[52px] w-full rounded-xl border bg-[#FBFBFB] px-4 sm:px-6 text-base sm:text-lg text-ink outline-none transition placeholder:text-[#8A8A8A] focus:border-brand focus:bg-white focus:ring-4 focus:ring-brand/10 ${
          error ? "border-red-500" : "border-[#DCDCDC]"
        }`}
        {...rest}
      />
      {error && (
        <p
          id={`${fid}-err`}
          role="alert"
          className="mt-1.5 text-xs sm:text-sm text-red-600"
        >
          {error}
        </p>
      )}
    </div>
  );
}
