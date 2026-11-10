import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";

import { CTASection } from "@/components/site/CTASection";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { SectionHeading } from "@/components/site/SectionHeading";
import { SiteImage } from "@/components/site/SiteImage";
import { divisions, getDivision, getProduct } from "@/lib/site";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/divisions/$slug")({
  loader: ({ params }) => {
    const division = getDivision(params.slug);
    if (!division) throw notFound();
    return { slug: division.slug };
  },
  head: ({ loaderData }) => {
    const d = loaderData ? getDivision(loaderData.slug) : undefined;
    if (!d) return { meta: [{ title: "Division not found | Magna Processing" }, { name: "robots", content: "noindex" }] };
    return {
      meta: [
        { title: `${d.name} Division | Magna Processing` },
        { name: "description", content: `${d.short} ${d.intro}`.slice(0, 158) },
        { property: "og:title", content: `${d.name} — Magna Processing` },
        { property: "og:description", content: d.short },
        { property: "og:type", content: "website" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
    };
  },
  component: DivisionPage,
});

function DivisionPage() {
  const { slug } = Route.useLoaderData();
  const d = getDivision(slug)!;
  const idx = divisions.findIndex((x) => x.slug === d.slug);
  const next = divisions[(idx + 1) % divisions.length]!;
  const prev = divisions[(idx - 1 + divisions.length) % divisions.length]!;

  return (
    <>
      <PageHero
        eyebrow={`Division ${d.number}`}
        title={d.name}
        intro={d.headline}
        image={d.hero}
        crumbs={[{ label: "Home", to: "/" }, { label: "Divisions", to: "/divisions" }, { label: d.name }]}
        aside={
          <dl className="grid grid-cols-3 gap-4 border-t border-line-dark pt-6 lg:grid-cols-1 lg:gap-6 lg:border-t-0 lg:border-l lg:pt-0 lg:pl-8">
            {d.specs.map((s) => (
              <div key={s.label}>
                <dt className="sr-only">{s.label}</dt>
                <dd className="font-display text-xl font-bold lg:text-3xl">{s.value}</dd>
                <dd className="mt-1 text-xs text-on-dark-muted">{s.label}</dd>
              </div>
            ))}
          </dl>
        }
      />

      {/* Intro */}
      <section className="section-y bg-background">
        <div className="container-site grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionHeading eyebrow="Overview" title={`About our ${d.name.toLowerCase()} operations`} />
          </div>
          <Reveal delay={100} className="lg:col-span-6 lg:col-start-7">
            <p className="lead text-slate">{d.intro}</p>
            {d.quote && (
              <blockquote className="mt-10 border-l-2 border-copper pl-6">
                <p className="serif-accent text-2xl leading-snug text-navy">“{d.quote}”</p>
              </blockquote>
            )}
          </Reveal>
        </div>
      </section>

      {/* Capabilities */}
      <section className="section-y bg-ivory">
        <div className="container-site">
          <SectionHeading eyebrow="Key capabilities" title="What this division delivers." />
          <div className="mt-14 grid gap-px bg-border md:grid-cols-2">
            {d.capabilities.map((c, i) => (
              <Reveal key={c.title} delay={(i % 2) * 100} className="bg-ivory p-8 lg:p-12">
                <p className="font-display text-sm font-semibold text-copper">
                  {d.number}.{i + 1}
                </p>
                <h3 className="mt-4 font-display text-2xl font-bold text-navy">{c.title}</h3>
                <p className="mt-3 max-w-md leading-relaxed text-slate">{c.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="weave-texture bg-navy text-on-dark">
        <div className="container-site py-16 lg:py-20">
          <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
            <p className="eyebrow lg:col-span-3">Production flow</p>
            <ol className="flex flex-wrap items-center gap-x-4 gap-y-6 lg:col-span-9">
              {d.process.map((step, i) => (
                <li key={step} className="flex items-center gap-4">
                  <span className="flex items-baseline gap-3">
                    <span className="text-xs text-copper">0{i + 1}</span>
                    <span className="font-display text-lg font-semibold lg:text-xl">{step}</span>
                  </span>
                  {i < d.process.length - 1 && (
                    <span className="h-px w-8 bg-copper/60 lg:w-12" aria-hidden="true" />
                  )}
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="section-y bg-background">
        <div className="container-site">
          <SectionHeading eyebrow="Inside the division" title="Equipment and operations." />
          <div className={cn("mt-14 grid gap-6", d.gallery.length > 2 ? "md:grid-cols-3" : "md:grid-cols-2")}>
            {d.gallery.map((img, i) => (
              <Reveal
                key={img.src}
                delay={i * 100}
                className={cn(d.gallery.length === 4 && i === 0 && "md:col-span-2", i % 2 === 1 && "md:mt-12")}
              >
                <SiteImage image={img} className="aspect-[4/3]" />
                <p className="mt-3 text-xs text-slate">{img.alt}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Related products */}
      <section className="section-y border-t border-border bg-ivory">
        <div className="container-site">
          <SectionHeading eyebrow="Related products" title="Where this capability ends up." />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {d.related.map((s, i) => {
              const p = getProduct(s)!;
              return (
                <Reveal key={p.slug} delay={i * 90}>
                  <Link to="/products/$slug" params={{ slug: p.slug }} className="group block bg-background">
                    <SiteImage image={p.hero} className="aspect-[4/3]" zoom label={false} />
                    <div className="flex items-start justify-between gap-4 p-6">
                      <div>
                        <h3 className="font-display text-lg font-bold text-navy">{p.name}</h3>
                        <p className="mt-1 text-sm text-slate">{p.short}</p>
                      </div>
                      <ArrowUpRight className="size-4 shrink-0 text-copper transition-transform duration-500 group-hover:rotate-45" />
                    </div>
                  </Link>
                </Reveal>
              );
            })}
          </div>

          <nav aria-label="Other divisions" className="mt-20 grid gap-px bg-border sm:grid-cols-2">
            <Link
              to="/divisions/$slug"
              params={{ slug: prev.slug }}
              className="group flex items-center gap-4 bg-ivory p-6 transition-colors hover:bg-background"
            >
              <ArrowLeft className="size-4 text-copper transition-transform group-hover:-translate-x-1" />
              <span>
                <span className="block text-xs text-slate">Previous division</span>
                <span className="font-display text-lg font-bold text-navy">{prev.name}</span>
              </span>
            </Link>
            <Link
              to="/divisions/$slug"
              params={{ slug: next.slug }}
              className="group flex items-center justify-end gap-4 bg-ivory p-6 text-right transition-colors hover:bg-background"
            >
              <span>
                <span className="block text-xs text-slate">Next division</span>
                <span className="font-display text-lg font-bold text-navy">{next.name}</span>
              </span>
              <ArrowRight className="size-4 text-copper transition-transform group-hover:translate-x-1" />
            </Link>
          </nav>
        </div>
      </section>

      <CTASection
        title={`Discuss your ${d.name.toLowerCase()} requirements.`}
        text="Share your specifications and volumes — our team will respond with capabilities and lead times."
      />
    </>
  );
}
