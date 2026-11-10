import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowRight, Check } from "lucide-react";

import { CTASection } from "@/components/site/CTASection";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { SectionHeading } from "@/components/site/SectionHeading";
import { SiteImage } from "@/components/site/SiteImage";
import { Button } from "@/components/ui/button";
import { getDivision, getProduct, orderedProducts } from "@/lib/site";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/products/$slug")({
  loader: ({ params }) => {
    const product = getProduct(params.slug);
    if (!product) throw notFound();
    return { slug: product.slug };
  },
  head: ({ loaderData }) => {
    const p = loaderData ? getProduct(loaderData.slug) : undefined;
    if (!p) return { meta: [{ title: "Product not found | Magna Processing" }, { name: "robots", content: "noindex" }] };
    return {
      meta: [
        { title: `${p.name} | Magna Processing Products` },
        { name: "description", content: `${p.intro}`.slice(0, 158) },
        { property: "og:title", content: `${p.name} — Magna Processing` },
        { property: "og:description", content: p.short },
        { property: "og:type", content: "website" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
    };
  },
  component: ProductPage,
});

function ProductPage() {
  const { slug } = Route.useLoaderData();
  const p = getProduct(slug)!;
  const others = orderedProducts().filter((x) => x.slug !== p.slug);

  return (
    <>
      <PageHero
        eyebrow="Product category"
        title={p.name}
        intro={p.headline}
        image={p.hero}
        crumbs={[{ label: "Home", to: "/" }, { label: "Products", to: "/products" }, { label: p.name }]}
      />

      <section className="section-y bg-background">
        <div className="container-site grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionHeading eyebrow="Introduction" title={p.headline} />
          </div>
          <Reveal delay={100} className="lg:col-span-6 lg:col-start-7">
            <p className="lead text-slate">{p.intro}</p>
            <ul className="mt-10 space-y-4">
              {p.capabilities.map((c) => (
                <li key={c} className="flex items-start gap-4 border-b border-border pb-4 text-navy">
                  <Check className="mt-0.5 size-4 shrink-0 text-copper" aria-hidden="true" />
                  {c}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* Subcategories */}
      <section className="section-y bg-ivory">
        <div className="container-site">
          <SectionHeading eyebrow="Product range" title="What we manufacture." />
          <div
            className={cn(
              "mt-14 grid gap-px bg-border sm:grid-cols-2",
              p.groups.length >= 4 ? "lg:grid-cols-4" : "lg:grid-cols-3",
            )}
          >
            {p.groups.map((g, i) => (
              <Reveal key={g.title} delay={i * 90} className="bg-ivory p-8">
                <h3 className="font-display text-lg font-bold text-navy">{g.title}</h3>
                <span className="rule-copper mt-4 w-8" aria-hidden="true" />
                <ul className="mt-6 space-y-3">
                  {g.items.map((it) => (
                    <li key={it} className="text-sm leading-relaxed text-slate">
                      {it}
                    </li>
                  ))}
                </ul>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="section-y bg-background">
        <div className="container-site">
          <SectionHeading eyebrow="Gallery" title="Materials and production." />
          <div className="mt-14 grid gap-6 md:grid-cols-12">
            {p.gallery.map((img, i) => (
              <Reveal
                key={img.src}
                delay={i * 100}
                className={cn(
                  i === 0 ? "md:col-span-7" : "md:col-span-5",
                  i === 2 && "md:col-span-12",
                )}
              >
                <SiteImage image={img} className={cn(i === 2 ? "aspect-[21/9]" : "aspect-[4/3]")} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Made by */}
      <section className="weave-texture bg-navy text-on-dark">
        <div className="container-site grid gap-10 py-16 lg:grid-cols-12 lg:items-center lg:py-20">
          <div className="lg:col-span-4">
            <p className="eyebrow">Made in-house by</p>
            <p className="mt-4 text-sm text-on-dark-muted">
              The Magna divisions involved in producing {p.name.toLowerCase()}.
            </p>
          </div>
          <ul className="flex flex-wrap gap-3 lg:col-span-5">
            {p.divisions.map((s) => {
              const d = getDivision(s)!;
              return (
                <li key={s}>
                  <Link
                    to="/divisions/$slug"
                    params={{ slug: s }}
                    className="inline-flex items-center gap-3 border border-line-dark px-5 py-3 font-display font-semibold transition-colors hover:border-copper hover:text-copper-soft"
                  >
                    <span className="text-xs text-copper">{d.number}</span>
                    {d.name}
                  </Link>
                </li>
              );
            })}
          </ul>
          <div className="lg:col-span-3 lg:text-right">
            <Button asChild variant="copper" size="cta">
              <Link to="/contact">
                Request a Quote <ArrowRight />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Other categories */}
      <section className="section-y bg-background">
        <div className="container-site">
          <SectionHeading eyebrow="More categories" title="Explore other product families." />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {others.map((o, i) => (
              <Reveal key={o.slug} delay={i * 80}>
                <Link to="/products/$slug" params={{ slug: o.slug }} className="group block">
                  <SiteImage image={o.hero} className="aspect-[4/5]" zoom label={false} />
                  <p className="mt-4 flex items-center justify-between font-display text-lg font-bold text-navy">
                    {o.name}
                    <ArrowRight className="size-4 text-copper transition-transform duration-500 group-hover:translate-x-1" />
                  </p>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title={`Request a quotation for ${p.name.toLowerCase()}.`}
        text="Send us your specifications, quantities and target delivery — our merchandising team will respond with options."
      />
    </>
  );
}
