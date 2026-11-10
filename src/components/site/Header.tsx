import { Link, useRouterState } from "@tanstack/react-router";
import { ArrowRight, ChevronDown, Menu, Minus, Plus, X } from "lucide-react";
import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import { company, navigation } from "@/lib/site";
import { cn } from "@/lib/utils";
import { Logo } from "./Logo";

type NavChild = { label: string; slug: string; kind: "division" | "product" };

function ChildLink({
  child,
  className,
  onNavigate,
}: {
  child: NavChild;
  className?: string;
  onNavigate?: () => void;
}) {
  const props = { className, onClick: onNavigate };
  return child.kind === "division" ? (
    <Link to="/divisions/$slug" params={{ slug: child.slug }} {...props}>
      {child.label}
    </Link>
  ) : (
    <Link to="/products/$slug" params={{ slug: child.slug }} {...props}>
      {child.label}
    </Link>
  );
}

const blurActive = () => {
  if (document.activeElement instanceof HTMLElement) document.activeElement.blur();
};

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [expanded, setExpanded] = useState<string | null>(null);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
    setExpanded(null);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const solid = scrolled && !open;
  const isActive = (to: string) => (to === "/" ? pathname === "/" : pathname.startsWith(to));

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        solid
          ? "border-b border-border bg-background/95 shadow-soft backdrop-blur-md"
          : "border-b border-transparent bg-transparent",
      )}
    >
      <div
        className={cn(
          "container-site flex items-center justify-between transition-all duration-500",
          solid ? "h-[72px]" : "h-[88px]",
        )}
      >
        <Logo tone={solid ? "dark" : "light"} />

        <nav aria-label="Main" className="hidden xl:block">
          <ul className="flex items-center gap-1">
            {navigation.map((item) => (
              <li key={item.label} className="group relative">
                <Link
                  to={item.to}
                  onClick={blurActive}
                  aria-haspopup={item.children ? "true" : undefined}
                  className={cn(
                    "relative flex items-center gap-1 px-3.5 py-3 text-[0.82rem] font-medium transition-colors",
                    solid ? "text-navy hover:text-copper" : "text-on-dark hover:text-copper-soft",
                  )}
                >
                  {item.label}
                  {item.children && (
                    <ChevronDown
                      className="size-3.5 opacity-60 transition-transform duration-300 group-hover:rotate-180 group-focus-within:rotate-180"
                      aria-hidden="true"
                    />
                  )}
                  <span
                    className={cn(
                      "absolute inset-x-3.5 bottom-1.5 h-px origin-left bg-copper transition-transform duration-500",
                      isActive(item.to) ? "scale-x-100" : "scale-x-0",
                    )}
                    aria-hidden="true"
                  />
                </Link>
                {item.children && (
                  <div className="invisible absolute top-full left-0 translate-y-2 pt-2 opacity-0 transition-all duration-300 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                    <ul className="min-w-60 border border-border bg-background p-2 shadow-soft">
                      {item.children.map((child, i) => (
                        <li key={child.slug}>
                          <ChildLink
                            child={child}
                            onNavigate={blurActive}
                            className="group/item flex items-center justify-between gap-6 px-4 py-3 text-sm text-navy transition-colors hover:bg-ivory hover:text-copper focus-visible:bg-ivory"
                          />
                          {i < item.children.length - 1 && <div className="mx-4 h-px bg-border" />}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-3">
          <Button
            asChild
            variant={solid ? "navy" : "copper"}
            size="cta-sm"
            className="hidden sm:inline-flex"
          >
            <Link to="/contact">Request a Quote</Link>
          </Button>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            className={cn(
              "flex size-11 items-center justify-center border transition-colors xl:hidden",
              solid ? "border-border text-navy" : "border-on-dark/30 text-on-dark",
            )}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        className={cn(
          "fixed inset-x-0 top-[88px] bottom-0 overflow-y-auto bg-navy-deep text-on-dark transition-all duration-500 xl:hidden",
          open ? "visible translate-y-0 opacity-100" : "invisible -translate-y-4 opacity-0",
        )}
      >
        <nav aria-label="Mobile" className="container-site pt-4 pb-12">
          <ul className="divide-y divide-line-dark border-y border-line-dark">
            {navigation.map((item) => (
              <li key={item.label}>
                <div className="flex items-center justify-between">
                  <Link to={item.to} className="flex-1 py-5 font-display text-2xl font-semibold">
                    {item.label}
                  </Link>
                  {item.children && (
                    <button
                      type="button"
                      onClick={() => setExpanded((v) => (v === item.label ? null : item.label))}
                      aria-expanded={expanded === item.label}
                      aria-label={`Show ${item.label} pages`}
                      className="flex size-11 items-center justify-center text-copper"
                    >
                      {expanded === item.label ? <Minus className="size-5" /> : <Plus className="size-5" />}
                    </button>
                  )}
                </div>
                {item.children && (
                  <div
                    className={cn(
                      "grid transition-all duration-500",
                      expanded === item.label ? "grid-rows-[1fr] pb-5" : "grid-rows-[0fr]",
                    )}
                  >
                    <ul className="overflow-hidden">
                      {item.children.map((child) => (
                        <li key={child.slug}>
                          <ChildLink
                            child={child}
                            className="flex items-center gap-3 py-2.5 pl-4 text-base text-on-dark-muted transition-colors hover:text-copper-soft"
                          />
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </li>
            ))}
          </ul>
          <Button asChild variant="copper" size="cta" className="mt-8 w-full">
            <Link to="/contact">
              Request a Quote <ArrowRight />
            </Link>
          </Button>
          <div className="mt-10 space-y-2 text-sm text-on-dark-muted">
            <a href={company.phoneHref} className="block">
              {company.phonePrimary}
            </a>
            <a href={company.emailHref} className="block">
              {company.email}
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}
