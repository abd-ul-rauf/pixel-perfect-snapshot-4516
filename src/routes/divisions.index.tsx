import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

import { CTASection } from "@/components/site/CTASection";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { SiteImage } from "@/components/site/SiteImage";
import { images } from "@/lib/images";
import { divisions } from "@/lib/site";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/divisions/")({
  head: () => ({
    meta: [
      { title: "Business Divisions — Spinning, Weaving, Processing, Stitching | Magna" },
      {
        name: "description",
        content:
          "Magna Processing's four integrated divisions: automated spinning, a 500+ loom weaving park, German processing machinery and high-speed stitching.",
      },
      { property: "og:title", content: "Magna Business Divisions" },
      {
        property: "og:description",
        content: "Spinning, weaving, processing and stitching — integrated under one management.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: DivisionsPage,
});

function DivisionsPage() {
  return (
    <>
      <PageHero
        eyebrow="Business divisions"
        title={
          <>
            Four disciplines. <span className="serif-accent text-copper-soft">One process.</span>
          </>
        }
        intro="Spinning, weaving, processing and stitching operate as one integrated chain — giving buyers control of quality and lead time from fibre to finished product."
        image={images.warping}
        crumbs={[{ label: "Home", to: "/" }, { label: "Divisions" }]}
      />

      <section className="section-y bg-background">
        <div className="container-site space-y-24 lg:space-y-36">
          {divisions.map((d, i) => (
            <article key={d.slug} className="grid items-center gap-10 lg:grid-cols-12 lg:gap-16">
              <Reveal className={cn("lg:col-span-7", i % 2 === 1 && "lg:order-2")}>
                <Link to="/divisions/$slug" params={{ slug: d.slug }} className="group block">
                  <SiteImage image={d.hero} className="aspect-[16/11]" zoom />
                </Link>
              </Reveal>
              <Reveal delay={120} className={cn("lg:col-span-5", i % 2 === 1 && "lg:order-1")}>
                <p className="font-display text-7xl font-extrabold tracking-tight text-ivory [-webkit-text-stroke:1px_var(--copper)]">
                  {d.number}
                </p>
                <h2 className="display-md mt-4 text-navy">{d.name}</h2>
                <p className="mt-5 leading-relaxed text-slate">{d.intro}</p>
                <dl className="mt-8 grid grid-cols-3 gap-4 border-y border-border py-6">
                  {d.specs.map((s) => (
                    <div key={s.label}>
                      <dt className="sr-only">{s.label}</dt>
                      <dd className="font-display text-lg font-bold text-navy lg:text-xl">{s.value}</dd>
                      <dd className="mt-1 text-[0.7rem] leading-snug text-slate">{s.label}</dd>
                    </div>
                  ))}
                </dl>
                <Link
                  to="/divisions/$slug"
                  params={{ slug: d.slug }}
                  className="link-underline mt-8 inline-flex items-center gap-2 text-sm font-semibold text-navy"
                >
                  Explore {d.name} <ArrowRight className="size-4 text-copper" />
                </Link>
              </Reveal>
            </article>
          ))}
        </div>
      </section>

      <CTASection />
    </>
  );
}
