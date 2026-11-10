import type { SiteImage as SiteImageType } from "@/lib/images";
import { cn } from "@/lib/utils";

type Props = {
  image: SiteImageType;
  className?: string;
  imgClassName?: string;
  priority?: boolean;
  /** Show a small "Magna facility" / "Illustrative" label. */
  label?: boolean;
  zoom?: boolean;
};

export function SiteImage({ image, className, imgClassName, priority, label = true, zoom }: Props) {
  return (
    <figure className={cn("relative overflow-hidden bg-muted", className)}>
      <img
        src={image.src}
        alt={image.alt}
        width={image.width}
        height={image.height}
        loading={priority ? "eager" : "lazy"}
        decoding="async"
        {...(priority ? { fetchPriority: "high" as const } : {})}
        className={cn("h-full w-full object-cover", zoom && "img-zoom", imgClassName)}
      />
      {label && <ImageLabel source={image.source} />}
    </figure>
  );
}

export function ImageLabel({ source, className }: { source: SiteImageType["source"]; className?: string }) {
  return (
    <figcaption
      className={cn(
        "pointer-events-none absolute bottom-3 left-3 bg-navy-deep/70 px-2 py-1 text-[0.58rem] font-medium tracking-[0.18em] text-on-dark-muted uppercase backdrop-blur-sm",
        className,
      )}
    >
      {source === "magna" ? "Magna facility" : "Illustrative"}
    </figcaption>
  );
}
