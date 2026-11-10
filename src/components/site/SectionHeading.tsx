import type { ReactNode } from "react";

import { cn } from "@/lib/utils";
import { Reveal } from "./Reveal";

type Props = {
  eyebrow: string;
  title: ReactNode;
  intro?: ReactNode;
  tone?: "dark" | "light";
  align?: "left" | "center";
  className?: string;
  as?: "h1" | "h2";
};

export function SectionHeading({
  eyebrow,
  title,
  intro,
  tone = "dark",
  align = "left",
  className,
  as = "h2",
}: Props) {
  const H = as;
  return (
    <Reveal className={cn(align === "center" && "mx-auto text-center", "max-w-3xl", className)}>
      <div className={cn("flex items-center gap-4", align === "center" && "justify-center")}>
        <span className="rule-copper w-10" aria-hidden="true" />
        <p className="eyebrow">{eyebrow}</p>
      </div>
      <H className={cn("display-lg mt-6", tone === "light" ? "text-on-dark" : "text-navy")}>{title}</H>
      {intro && (
        <p className={cn("lead mt-6", tone === "light" ? "text-on-dark-muted" : "text-slate")}>{intro}</p>
      )}
    </Reveal>
  );
}
