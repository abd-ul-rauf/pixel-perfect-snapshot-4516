import { useEffect, useRef, useState } from "react";

import { useInView } from "./Reveal";

/** Counts up to `value` once visible. Renders the final value on the server and for reduced motion. */
export function CountUp({
  value,
  prefix = "",
  suffix = "",
  duration = 1600,
  format = (n: number) => n.toLocaleString("en-US"),
}: {
  value: number;
  prefix?: string;
  suffix?: string;
  duration?: number;
  format?: (n: number) => string;
}) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const inView = useInView(ref);
  const [display, setDisplay] = useState(value);
  const started = useRef(false);

  useEffect(() => {
    if (!inView || started.current) return;
    started.current = true;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let raf = 0;
    const start = performance.now();
    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - t, 3);
      setDisplay(Math.round(value * eased));
      if (t < 1) raf = requestAnimationFrame(tick);
    };
    setDisplay(0);
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, value, duration]);

  return (
    <span ref={ref} className="tabular-nums">
      {prefix}
      {format(display)}
      {suffix}
    </span>
  );
}
