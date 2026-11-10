import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

import { CTASection } from "@/components/site/CTASection";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { SectionHeading } from "@/components/site/SectionHeading";
import { SiteImage } from "@/components/site/SiteImage";
import { images } from "@/lib/images";
import { divisions, leadership, timeline } from "@/lib/site";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Magna Processing — Textile Heritage Since 1965" },
      {
        name: "description",
        content:
          "The story of Magna Processing Industries: founded in Faisalabad in 1965, exporting since 1990, and today a vertically integrated textile group.",
      },
      { property: "og:title", content: "About Magna Processing" },
      {
        property: "og:description",
        content: "Founded in 1965, exporting since 1990 — a vertically integrated Pakistani textile group.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: AboutPage,
});

const principles = [
  {
    title: "One venue for every requirement",
    text: "Our goal is to give customers a single partner able to supply all of their textile needs — from yarn to finished, packed product.",
  },
  {
    title: "Research & development at the core",
    text: "Designers carry out market research and trend analysis; merchandisers translate it into commercially driven products.",
  },
  {
    title: "Service excellence",
    text: "Management focuses on responsiveness and reliability, aiming to be the buyer's first choice around the world.",
  },
];

function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Magna"
        title={
          <>
            Six decades of <span className="serif-accent text-copper-soft">commitment.</span>
          </>
        }
        intro="From a Faisalabad printing and processing house in 1965 to a vertically integrated textile group serving international buyers."
        image={images.headOffice}
        crumbs={[{ label: "Home", to: "/" }, { label: "About" }]}
      />

      {/* Story */}
      <section className="section-y bg-background">
        <div className="container-site grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionHeading eyebrow="Our story" title="Built on a firm commitment to customers." />
          </div>
          <Reveal delay={120} className="space-y-6 text-[1.05rem] leading-relaxed text-slate lg:col-span-6 lg:col-start-7">
            <p>
              Magna Processing was established in 1965 as a textile printing and fabric processing
              company — one of the pioneers of the trade in Faisalabad. In 1990 the company made its
              first forays into export markets.
            </p>
            <p>
              Since 2000, with Mr. Farhat Sheikh — son of Chairman Mr. Saeed Ullah Sheikh — joining the
              business, Magna has moved from strength to strength. Bringing education and experience
              from England, along with strong and forward-looking leadership, he built a team of
              skilled professionals that has driven substantial growth in assets and revenue.
            </p>
            <p className="font-display text-xl font-semibold leading-snug text-navy">
              Today, two vertically integrated plants — with rotary printing and continuous dyeing
              infrastructure — process over five million meters of fabric every month.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-y weave-texture bg-navy text-on-dark">
        <div className="container-site">
          <SectionHeading tone="light" eyebrow="Milestones" title="A measured path of growth." />
          <ol className="mt-16 grid gap-px bg-line-dark md:grid-cols-2 lg:grid-cols-4">
            {timeline.map((t, i) => (
              <Reveal as="li" key={t.year} delay={i * 120} className="bg-navy p-8 lg:p-10">
                <p className="font-display text-5xl font-extrabold tracking-tight text-copper-soft">
                  {t.year}
                </p>
                <h3 className="mt-6 font-display text-lg font-semibold">{t.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-on-dark-muted">{t.text}</p>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* Mission & vision */}
      <section className="section-y bg-ivory">
        <div className="container-site grid items-center gap-14 lg:grid-cols-12">
          <Reveal className="lg:col-span-6">
            <SiteImage image={images.displayRoom} className="aspect-[4/3]" />
          </Reveal>
          <div className="lg:col-span-5 lg:col-start-8">
            <p className="eyebrow">Vision & mission</p>
            <Reveal delay={80}>
              <p className="serif-accent mt-6 text-3xl leading-snug text-navy lg:text-4xl">
                “To become the buyer's first choice all around the world.”
              </p>
              <p className="mt-8 leading-relaxed text-slate">
                We strive for continued improvement in our services and product quality, and we are
                accelerating product innovation by bringing market-driven commercial ideas to our
                customers — while staying true to the highest standards of excellence.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="section-y bg-background">
        <div className="container-site">
          <SectionHeading
            eyebrow="Manufacturing philosophy"
            title="Modern machinery. One accountable partner."
            intro="Magna Group is a vertically integrated unit covering sizing, warping, weaving, processing and stitching — producing bed linen, curtains, quilted products, furnishings, kitchen linen and apparel."
          />
          <div className="mt-16 grid gap-10 md:grid-cols-3">
            {principles.map((p, i) => (
              <Reveal key={p.title} delay={i * 100} className="border-t border-navy pt-8">
                <p className="font-display text-sm font-semibold text-copper">0{i + 1}</p>
                <h3 className="mt-4 font-display text-xl font-bold text-navy">{p.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate">{p.text}</p>
              </Reveal>
            ))}
          </div>

          <div className="mt-20 grid grid-cols-2 gap-px bg-border md:grid-cols-4">
            {divisions.map((d) => (
              <Link
                key={d.slug}
                to="/divisions/$slug"
                params={{ slug: d.slug }}
                className="group bg-background p-6 transition-colors hover:bg-ivory lg:p-8"
              >
                <p className="text-xs text-copper">{d.number}</p>
                <p className="mt-2 flex items-center justify-between font-display text-lg font-bold text-navy">
                  {d.name}
                  <ArrowRight className="size-4 text-copper transition-transform duration-500 group-hover:translate-x-1" />
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="section-y border-t border-border bg-ivory">
        <div className="container-site grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <SectionHeading eyebrow="Leadership" title="Guided by family leadership." />
          </div>
          <ul className="grid gap-px bg-border sm:grid-cols-3 lg:col-span-8">
            {leadership.map((l, i) => (
              <Reveal as="li" key={l.name} delay={i * 100} className="bg-ivory p-8">
                <span
                  className="flex size-14 items-center justify-center border border-copper font-display text-lg font-bold text-navy"
                  aria-hidden="true"
                >
                  {l.name
                    .replace("Mr. ", "")
                    .split(" ")
                    .map((w) => w[0])
                    .slice(0, 2)
                    .join("")}
                </span>
                <p className="mt-6 font-display text-lg font-bold text-navy">{l.name}</p>
                <p className="mt-1 text-sm text-copper">{l.role}</p>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <CTASection
        title="Work with a partner that has been listening since 1965."
        text="Tell us about your programme — our team will respond with capabilities, samples and lead times."
      />
    </>
  );
}
