import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from "react";

import { cn } from "@/lib/utils";

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  as?: "div" | "section" | "li" | "article" | "span";
};

/** Fades and lifts content into view once, when it scrolls into the viewport. */
export function Reveal({ children, className, delay = 0, as = "div" }: RevealProps) {
  const ref = useRef<HTMLElement | null>(null);
  const visible = useInView(ref);
  const Tag = as;
  const style: CSSProperties = { transitionDelay: `${delay}ms` };

  return (
    <Tag
      ref={ref as never}
      data-visible={visible}
      style={style}
      className={cn("reveal", className)}
    >
      {children}
    </Tag>
  );
}

export function useInView(ref: React.RefObject<HTMLElement | null>, rootMargin = "0px 0px -10% 0px") {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === "undefined") {
      setVisible(true);
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setVisible(true);
          io.disconnect();
        }
      },
      { rootMargin, threshold: 0.08 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [ref, rootMargin]);

  return visible;
}
