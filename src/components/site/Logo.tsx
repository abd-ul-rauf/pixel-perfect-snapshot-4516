import { Link } from "@tanstack/react-router";

import { cn } from "@/lib/utils";

/**
 * Temporary wordmark. Replace the contents of this component with the official
 * Magna Processing logo file when it is supplied.
 */
export function Logo({ tone = "dark", className }: { tone?: "dark" | "light"; className?: string }) {
  return (
    <Link
      to="/"
      aria-label="Magna Processing — home"
      className={cn(
        "group inline-flex items-center gap-3",
        tone === "light" ? "text-on-dark" : "text-navy",
        className,
      )}
    >
      <svg
        viewBox="0 0 32 32"
        className="size-8 shrink-0 transition-transform duration-700 group-hover:rotate-90"
        aria-hidden="true"
      >
        <rect x="1" y="1" width="30" height="30" fill="none" stroke="currentColor" strokeWidth="1.5" />
        <path d="M8 1v30M16 1v30M24 1v30" stroke="currentColor" strokeWidth="1.5" opacity="0.35" />
        <path d="M1 10h30M1 22h30" stroke="var(--copper)" strokeWidth="1.5" />
      </svg>
      <span className="flex flex-col leading-none">
        <span className="font-display text-[1.15rem] font-extrabold tracking-[0.22em]">MAGNA</span>
        <span
          className={cn(
            "mt-1 text-[0.56rem] font-medium tracking-[0.32em] uppercase",
            tone === "light" ? "text-on-dark-muted" : "text-slate",
          )}
        >
          Processing · Est. 1965
        </span>
      </span>
    </Link>
  );
}
