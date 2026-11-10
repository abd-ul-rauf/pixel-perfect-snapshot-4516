import { Link } from "@tanstack/react-router";
import { ChevronRight } from "lucide-react";

export type Crumb = { label: string; to?: "/" | "/divisions" | "/products" | "/about" };

export function Breadcrumbs({ items }: { items: Crumb[] }) {
  return (
    <nav aria-label="Breadcrumb">
      <ol className="flex flex-wrap items-center gap-2 text-[0.7rem] font-medium tracking-[0.16em] text-on-dark-muted uppercase">
        {items.map((c, i) => (
          <li key={c.label} className="flex items-center gap-2">
            {c.to ? (
              <Link to={c.to} className="link-underline transition-colors hover:text-on-dark">
                {c.label}
              </Link>
            ) : (
              <span aria-current="page" className="text-on-dark">
                {c.label}
              </span>
            )}
            {i < items.length - 1 && <ChevronRight className="size-3 text-copper" aria-hidden="true" />}
          </li>
        ))}
      </ol>
    </nav>
  );
}
