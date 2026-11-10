import type { ReactNode } from "react";

import type { SiteImage as SiteImageType } from "@/lib/images";
import { Breadcrumbs, type Crumb } from "./Breadcrumbs";
import { ImageLabel } from "./SiteImage";

type Props = {
  eyebrow: string;
  title: ReactNode;
  intro?: ReactNode;
  image: SiteImageType;
  crumbs: Crumb[];
  aside?: ReactNode;
};

export function PageHero({ eyebrow, title, intro, image, crumbs, aside }: Props) {
  return (
    <section className="relative isolate flex min-h-[78svh] items-end overflow-hidden bg-navy-deep text-on-dark lg:min-h-[86svh]">
      <img
        src={image.src}
        alt={image.alt}
        width={image.width}
        height={image.height}
        fetchPriority="high"
        className="animate-hero-zoom absolute inset-0 -z-20 h-full w-full object-cover"
      />
      <div className="bg-hero-overlay absolute inset-0 -z-10" aria-hidden="true" />
      <div className="bg-bottom-overlay absolute inset-0 -z-10" aria-hidden="true" />

      <div className="container-site pt-36 pb-14 lg:pb-20">
        <div className="animate-hero-rise">
          <Breadcrumbs items={crumbs} />
        </div>
        <div className="mt-10 grid items-end gap-10 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <p className="eyebrow animate-hero-rise" style={{ animationDelay: "120ms" }}>
              {eyebrow}
            </p>
            <h1
              className="display-xl animate-hero-rise mt-5 text-balance"
              style={{ animationDelay: "220ms" }}
            >
              {title}
            </h1>
            {intro && (
              <p
                className="lead animate-hero-rise mt-7 max-w-2xl text-on-dark-muted"
                style={{ animationDelay: "340ms" }}
              >
                {intro}
              </p>
            )}
          </div>
          {aside && (
            <div className="animate-hero-rise lg:col-span-4" style={{ animationDelay: "460ms" }}>
              {aside}
            </div>
          )}
        </div>
      </div>
      <ImageLabel source={image.source} className="right-5 bottom-5 left-auto" />
    </section>
  );
}
