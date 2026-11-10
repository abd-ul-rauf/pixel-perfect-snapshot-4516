import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";

import { CTASection } from "@/components/site/CTASection";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { SectionHeading } from "@/components/site/SectionHeading";
import { SiteImage } from "@/components/site/SiteImage";
import { images } from "@/lib/images";
import { orderedProducts } from "@/lib/site";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/products/")({
  head: () => ({
    meta: [
      { title: "Products — Yarn, Fabrics, Home Textiles, Garments | Magna Processing" },
      {
        name: "description",
        content:
          "Explore Magna's product families: ring-spun yarn, bleached, dyed and printed fabrics, bed linen and home textiles, garments and healthcare textiles.",
      },
      { property: "og:title", content: "Magna Processing Products" },
      {
        property: "og:description",
        content: "Yarn, fabrics, home textiles, garments and health & safety textiles for B2B buyers.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ProductsPage,
});

function ProductsPage() {
  const list = orderedProducts();
  return (
    <>
      <PageHero
        eyebrow="Our products"
        title={
          <>
            Five product families. <span className="serif-accent text-copper-soft">One standard.</span>
          </>
        }
        intro="From yarn on the cone to packed bed linen, every Magna product is made within our own integrated chain."
        image={images.displayRoom}
        crumbs={[{ label: "Home", to: "/" }, { label: "Products" }]}
      />

      <section className="section-y bg-background">
        <div className="container-site">
          <SectionHeading
            eyebrow="Explore the range"
            title="Textile solutions for retail, institutional and industrial buyers."
            intro="Select a category to view product types, capabilities and the divisions behind them."
          />
          <div className="mt-16 grid gap-x-8 gap-y-16 md:grid-cols-2 lg:grid-cols-6">
            {list.map((p, i) => (
              <Reveal
                key={p.slug}
                delay={(i % 3) * 100}
                className={cn(i < 2 ? "lg:col-span-3" : "lg:col-span-2")}
              >
                <Link to="/products/$slug" params={{ slug: p.slug }} className="group block">
                  <SiteImage image={p.hero} className={cn(i < 2 ? "aspect-[16/11]" : "aspect-[4/5]")} zoom />
                  <div className="mt-6 flex items-start justify-between gap-6">
                    <div>
                      <p className="text-xs text-copper">0{i + 1}</p>
                      <h2 className="mt-2 font-display text-2xl font-bold text-navy">{p.name}</h2>
                      <p className="mt-2 max-w-md text-sm leading-relaxed text-slate">{p.short}</p>
                    </div>
                    <span className="flex size-11 shrink-0 items-center justify-center border border-border transition-all duration-500 group-hover:border-copper group-hover:bg-copper group-hover:text-accent-foreground">
                      <ArrowUpRight className="size-4 transition-transform duration-500 group-hover:rotate-45" />
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-ivory">
        <div className="container-site grid gap-8 py-14 md:grid-cols-3">
          {[
            ["Made to specification", "Constructions, finishes and packaging built around buyer requirements."],
            ["No minimum guesswork", "Discuss volumes and lead times directly with our merchandising team."],
            ["Tested before dispatch", "In-house laboratory testing for pilling, rubbing, crocking and shrinkage."],
          ].map(([t, x]) => (
            <div key={t} className="border-l border-copper pl-6">
              <p className="font-display font-bold text-navy">{t}</p>
              <p className="mt-2 text-sm text-slate">{x}</p>
            </div>
          ))}
        </div>
      </section>

      <CTASection />
    </>
  );
}
