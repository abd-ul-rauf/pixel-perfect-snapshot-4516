import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight } from "lucide-react";

import { CountUp } from "@/components/site/CountUp";
import { CTASection } from "@/components/site/CTASection";
import { ImageLabel, SiteImage } from "@/components/site/SiteImage";
import { Reveal } from "@/components/site/Reveal";
import { SectionHeading } from "@/components/site/SectionHeading";
import { Button } from "@/components/ui/button";
import { images } from "@/lib/images";
import { certifications, divisions, getProduct, orderedProducts } from "@/lib/site";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Magna Processing — Integrated Textile Manufacturing Since 1965" },
      {
        name: "description",
        content:
          "Magna Processing Industries, Faisalabad: spinning, weaving, processing and stitching of yarn, fabrics, home textiles, garments and healthcare textiles for international buyers.",
      },
      { property: "og:title", content: "Magna Processing — Crafting Textiles. Building Trust." },
      {
        property: "og:description",
        content:
          "A vertically integrated Pakistani textile manufacturer and exporter, established in 1965.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <>
      <Hero />
      <Heritage />
      <Stats />
      <Divisions />
      <Journey />
      <Products />
      <Quality />
      <Sustainability />
      <Certifications />
      <CTASection />
    </>
  );
}

function Hero() {
  return (
    <section className="relative isolate flex min-h-[100svh] flex-col overflow-hidden bg-navy-deep text-on-dark">
      <img
        src={images.airjet.src}
        alt={images.airjet.alt}
        width={1920}
        height={920}
        fetchPriority="high"
        className="animate-hero-zoom absolute inset-0 -z-20 h-full w-full object-cover object-[60%_center]"
      />
      <div className="bg-hero-overlay absolute inset-0 -z-10" aria-hidden="true" />
      <div className="bg-bottom-overlay absolute inset-0 -z-10" aria-hidden="true" />

      <div className="container-site flex flex-1 flex-col justify-center pt-32 pb-16">
        <p className="eyebrow animate-hero-rise flex items-center gap-4">
          <span className="rule-copper w-10" aria-hidden="true" />
          Est. 1965 · Faisalabad, Pakistan
        </p>
        <h1
          className="display-xl animate-hero-rise mt-8 max-w-5xl"
          style={{ animationDelay: "150ms" }}
        >
          Crafting Textiles.
          <br />
          <span className="serif-accent text-copper-soft">Building Trust.</span>
        </h1>
        <p
          className="lead animate-hero-rise mt-8 max-w-xl text-on-dark-muted"
          style={{ animationDelay: "300ms" }}
        >
          From yarn to finished textiles, Magna Processing brings together integrated manufacturing
          expertise, quality craftsmanship and decades of industry experience.
        </p>
        <div
          className="animate-hero-rise mt-11 flex flex-wrap gap-4"
          style={{ animationDelay: "450ms" }}
        >
          <Button asChild variant="copper" size="cta">
            <Link to="/divisions">
              Explore Our Capabilities <ArrowRight />
            </Link>
          </Button>
          <Button asChild variant="outline-light" size="cta">
            <Link to="/about">Discover Magna</Link>
          </Button>
        </div>
      </div>

      <div className="relative border-t border-line-dark">
        <div className="container-site flex items-stretch justify-between">
          <ul className="grid flex-1 grid-cols-2 md:grid-cols-4">
            {divisions.map((d, i) => (
              <li
                key={d.slug}
                className={cn(
                  "border-line-dark",
                  i % 2 === 1 && "border-l",
                  i >= 2 && "border-t md:border-t-0",
                  i === 2 && "md:border-l",
                )}
              >
                <Link
                  to="/divisions/$slug"
                  params={{ slug: d.slug }}
                  className="group flex items-center justify-between gap-3 px-1 py-5 transition-colors hover:text-copper-soft md:px-6 md:first:pl-0"
                >
                  <span className="flex items-baseline gap-3">
                    <span className="text-[0.65rem] text-copper">{d.number}</span>
                    <span className="font-display text-sm font-semibold tracking-wide md:text-base">
                      {d.name}
                    </span>
                  </span>
                  <ArrowUpRight
                    className="size-4 opacity-0 transition-all duration-500 group-hover:-translate-y-0.5 group-hover:opacity-100"
                    aria-hidden="true"
                  />
                </Link>
              </li>
            ))}
          </ul>
          <a
            href="#heritage"
            aria-label="Scroll to introduction"
            className="hidden items-center gap-4 border-l border-line-dark pl-8 text-[0.62rem] tracking-[0.3em] text-on-dark-muted uppercase lg:flex"
          >
            Scroll
            <span className="relative block h-10 w-px overflow-hidden bg-line-dark">
              <span className="animate-scroll-cue absolute inset-x-0 top-0 h-1/2 bg-copper" />
            </span>
          </a>
        </div>
      </div>
      <ImageLabel source="magna" className="top-28 right-5 bottom-auto left-auto" />
    </section>
  );
}

function Heritage() {
  return (
    <section id="heritage" className="section-y bg-ivory">
      <div className="container-site grid items-center gap-16 lg:grid-cols-12 lg:gap-20">
        <Reveal className="relative lg:col-span-6">
          <SiteImage image={images.aerial} className="aspect-[4/5] sm:aspect-[5/4] lg:aspect-[4/5]" />
          <div className="absolute -right-3 -bottom-8 bg-navy px-8 py-7 text-on-dark shadow-soft sm:-right-8 lg:-right-14">
            <p className="text-[0.62rem] tracking-[0.3em] text-copper uppercase">Established</p>
            <p className="mt-2 font-display text-6xl font-extrabold tracking-tight">1965</p>
            <p className="serif-accent mt-1 text-lg text-copper-soft">Faisalabad</p>
          </div>
        </Reveal>

        <div className="pt-8 lg:col-span-6 lg:pt-0">
          <SectionHeading
            eyebrow="Who we are"
            title={
              <>
                An Enduring Legacy of <span className="serif-accent">Textile Excellence.</span>
              </>
            }
          />
          <Reveal delay={120}>
            <span className="rule-copper reveal-line mt-10" aria-hidden="true" />
            <div className="mt-10 space-y-5 text-[1.02rem] leading-relaxed text-slate">
              <p>
                Founded in 1965 as a textile printing and fabric processing company, Magna Processing
                was one of the pioneers of its trade in Faisalabad — Pakistan's textile heartland. In
                1990 the company entered export markets, and it has grown steadily ever since on a
                firm commitment to its customers.
              </p>
              <p>
                Today Magna is a vertically integrated group spanning sizing, warping, weaving,
                processing and stitching. Our philosophy is simple: to give buyers one place to meet
                diverse, demanding requirements, using modern and efficient machinery.
              </p>
            </div>
            <Button asChild variant="outline-dark" size="cta" className="mt-10">
              <Link to="/about">
                Our Story <ArrowRight />
              </Link>
            </Button>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

const stats = [
  { node: <CountUp value={1965} format={(n) => String(n)} />, label: "Year established" },
  { node: <CountUp value={1990} format={(n) => String(n)} />, label: "Exporting since" },
  { node: <CountUp value={5} suffix="M+" />, label: "Meters of fabric processed monthly" },
  { node: <CountUp value={15000} />, label: "Sheet sets stitching capacity per day" },
];

function Stats() {
  return (
    <section aria-label="Key facts" className="border-b border-border bg-background">
      <div className="container-site">
        <ul className="grid grid-cols-2 lg:grid-cols-4">
          {stats.map((s, i) => (
            <Reveal
              as="li"
              key={s.label}
              delay={i * 100}
              className={cn(
                "border-border py-12 lg:py-16",
                i % 2 === 1 && "border-l pl-6 lg:pl-10",
                i >= 2 && "border-t lg:border-t-0",
                i === 2 && "lg:border-l lg:pl-10",
                i === 0 && "pr-6",
              )}
            >
              <p className="font-display text-4xl font-bold tracking-tight text-navy sm:text-5xl lg:text-6xl">
                {s.node}
              </p>
              <p className="mt-4 max-w-[14rem] text-sm text-slate">{s.label}</p>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Divisions() {
  return (
    <section className="section-y bg-background">
      <div className="container-site">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            eyebrow="Our expertise"
            title={
              <>
                Integrated Manufacturing.
                <br />
                One Trusted Partner.
              </>
            }
          />
          <Reveal delay={100} className="max-w-sm">
            <p className="text-slate">
              Four divisions under one management — so quality, lead times and specifications stay
              under control from fibre to finished product.
            </p>
            <Link
              to="/divisions"
              className="link-underline mt-5 inline-flex items-center gap-2 text-sm font-semibold text-navy"
            >
              All divisions <ArrowRight className="size-4" />
            </Link>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:mt-20 lg:gap-8">
          {divisions.map((d, i) => (
            <Reveal key={d.slug} delay={(i % 2) * 120} className={cn(i % 2 === 1 && "md:mt-24")}>
              <Link
                to="/divisions/$slug"
                params={{ slug: d.slug }}
                className="group relative block aspect-[4/5] overflow-hidden bg-navy sm:aspect-[5/4] md:aspect-[4/5]"
              >
                <img
                  src={d.hero.src}
                  alt={d.hero.alt}
                  loading="lazy"
                  width={d.hero.width}
                  height={d.hero.height}
                  className="img-zoom absolute inset-0 h-full w-full object-cover"
                />
                <div
                  className="bg-bottom-overlay absolute inset-0 transition-opacity duration-700 group-hover:opacity-90"
                  aria-hidden="true"
                />
                <div className="absolute inset-0 bg-navy-deep/20 transition-colors duration-700 group-hover:bg-navy-deep/45" />
                <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-6 p-7 text-on-dark lg:p-10">
                  <div>
                    <p className="font-display text-sm font-semibold text-copper-soft">{d.number}</p>
                    <h3 className="mt-2 font-display text-3xl font-bold lg:text-4xl">{d.name}</h3>
                    <p className="mt-3 max-w-sm text-sm leading-relaxed text-on-dark-muted">{d.short}</p>
                  </div>
                  <span className="flex size-12 shrink-0 items-center justify-center border border-on-dark/40 transition-all duration-500 group-hover:border-copper group-hover:bg-copper">
                    <ArrowUpRight className="size-5 transition-transform duration-500 group-hover:rotate-45" />
                  </span>
                </div>
                <ImageLabel source={d.hero.source} className="top-4 right-4 bottom-auto left-auto" />
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

const journey = [
  { d: "spinning", text: "Cotton and blended fibres are spun into carded and combed ring-spun yarns." },
  { d: "weaving", text: "Yarn is sized, warped and woven into cotton and poly-cotton greige fabric." },
  { d: "processing", text: "Fabric is singed, bleached, dyed, printed and finished to specification." },
  { d: "stitching", text: "Dedicated units cut, stitch, inspect and pack finished made-ups for export." },
] as const;

function Journey() {
  return (
    <section className="section-y overflow-hidden bg-ivory">
      <div className="container-site">
        <SectionHeading
          eyebrow="Manufacturing journey"
          title="From fibre to finished product, under one roof."
          intro="Integrated production means fewer hand-offs, tighter control and a single accountable partner for every stage of your programme."
        />

        <ol className="relative mt-16 grid gap-12 lg:mt-24 lg:grid-cols-4 lg:gap-8">
          <span
            className="reveal-line absolute top-[7px] right-0 left-0 hidden h-px bg-copper/60 lg:block"
            data-visible="true"
            aria-hidden="true"
          />
          <span
            className="absolute top-0 bottom-0 left-[7px] w-px bg-copper/40 lg:hidden"
            aria-hidden="true"
          />
          {journey.map((step, i) => {
            const div = divisions.find((x) => x.slug === step.d)!;
            return (
              <Reveal as="li" key={step.d} delay={i * 150} className="relative pl-10 lg:pl-0">
                <span
                  className="absolute top-0 left-0 block size-[15px] rotate-45 border border-copper bg-ivory"
                  aria-hidden="true"
                />
                <div className="lg:pt-12">
                  <p className="font-display text-sm font-semibold text-copper">{div.number}</p>
                  <h3 className="mt-2 font-display text-2xl font-bold text-navy">{div.name}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate">{step.text}</p>
                  <Link
                    to="/divisions/$slug"
                    params={{ slug: div.slug }}
                    className="group mt-6 block overflow-hidden"
                  >
                    <SiteImage image={div.gallery[0] ?? div.hero} className="aspect-[4/3]" zoom label={false} />
                  </Link>
                </div>
              </Reveal>
            );
          })}
        </ol>
      </div>
    </section>
  );
}

function Products() {
  const featured = getProduct("home-textiles")!;
  const rest = orderedProducts().filter((p) => p.slug !== "home-textiles");
  return (
    <section className="section-y bg-background">
      <div className="container-site">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            eyebrow="What we create"
            title="Textile Solutions for Diverse Industries."
          />
          <Reveal delay={100}>
            <Button asChild variant="outline-dark" size="cta">
              <Link to="/products">
                View All Products <ArrowRight />
              </Link>
            </Button>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-6 lg:grid-cols-12 lg:gap-8">
          <Reveal className="lg:col-span-7">
            <Link
              to="/products/$slug"
              params={{ slug: featured.slug }}
              className="group relative block h-full min-h-[520px] overflow-hidden bg-navy"
            >
              <img
                src={featured.hero.src}
                alt={featured.hero.alt}
                loading="lazy"
                className="img-zoom absolute inset-0 h-full w-full object-cover"
              />
              <div className="bg-bottom-overlay absolute inset-0" aria-hidden="true" />
              <div className="absolute inset-x-0 bottom-0 p-8 text-on-dark lg:p-12">
                <p className="eyebrow">Featured collection</p>
                <h3 className="display-md mt-4">{featured.name}</h3>
                <p className="mt-4 max-w-md text-on-dark-muted">{featured.short}</p>
                <span className="mt-8 inline-flex items-center gap-3 text-[0.75rem] font-semibold tracking-[0.16em] uppercase">
                  Explore Collection
                  <ArrowRight className="size-4 transition-transform duration-500 group-hover:translate-x-1.5" />
                </span>
              </div>
              <ImageLabel source={featured.hero.source} className="top-4 right-4 bottom-auto left-auto" />
            </Link>
          </Reveal>

          <div className="grid gap-6 sm:grid-cols-2 lg:col-span-5 lg:gap-8">
            {rest.map((p, i) => (
              <Reveal key={p.slug} delay={i * 90}>
                <Link to="/products/$slug" params={{ slug: p.slug }} className="group block">
                  <SiteImage image={p.hero} className="aspect-[4/3] sm:aspect-square" zoom />
                  <div className="mt-4 flex items-start justify-between gap-4 border-b border-border pb-4">
                    <div>
                      <h3 className="font-display text-lg font-bold text-navy">{p.name}</h3>
                      <p className="mt-1 text-xs leading-relaxed text-slate">{p.short}</p>
                    </div>
                    <ArrowUpRight className="mt-1 size-4 shrink-0 text-copper transition-transform duration-500 group-hover:rotate-45" />
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

const qualityPoints = [
  { title: "Fabric testing", text: "Pilling, rubbing, crocking and shrinkage tests run routinely in-house." },
  { title: "Quality inspection", text: "Every product is inspected against Magna's standard before it reaches the market." },
  { title: "Calibrated equipment", text: "Laboratory certification and equipment calibration are renewed annually." },
  { title: "Customer requirements", text: "Specifications are built into product development by designers and merchandisers." },
];

function Quality() {
  return (
    <section className="relative isolate overflow-hidden bg-navy text-on-dark">
      <div className="grid lg:grid-cols-2">
        <div className="relative min-h-[420px] lg:min-h-full">
          <SiteImage image={images.qualityLab} className="absolute inset-0" />
        </div>
        <div className="weave-texture px-5 py-20 sm:px-10 lg:px-16 lg:py-32 xl:px-24">
          <SectionHeading
            tone="light"
            eyebrow="Quality without compromise"
            title="Precision at Every Stage."
            intro="Magna's laboratory is equipped with modern apparatus and staffed by experienced technicians, ensuring every quality standard is met before delivery."
          />
          <dl className="mt-12 grid gap-px bg-line-dark sm:grid-cols-2">
            {qualityPoints.map((q, i) => (
              <Reveal key={q.title} delay={i * 80} className="bg-navy p-6">
                <dt className="font-display text-base font-semibold">{q.title}</dt>
                <dd className="mt-2 text-sm leading-relaxed text-on-dark-muted">{q.text}</dd>
              </Reveal>
            ))}
          </dl>
          <Reveal delay={200}>
            <Button asChild variant="copper" size="cta" className="mt-12">
              <Link to="/quality">
                Explore Quality Standards <ArrowRight />
              </Link>
            </Button>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Sustainability() {
  return (
    <section className="section-y bg-ivory">
      <div className="container-site grid items-center gap-14 lg:grid-cols-12 lg:gap-20">
        <div className="order-2 lg:order-1 lg:col-span-5">
          <SectionHeading
            eyebrow="Responsible manufacturing"
            title={
              <>
                Progress <span className="serif-accent">With Purpose.</span>
              </>
            }
            intro="Our expansion strategy balances economic growth with a culture of sustainable development for the environment and our community."
          />
          <Reveal delay={120}>
            <ul className="mt-10 divide-y divide-border border-y border-border">
              {[
                "Environmental responsibility, backed by ISO 14001",
                "Resource-conscious production: lower energy, water and waste",
                "Responsible, ethical business practices",
                "A dedicated compliance team for labour, health and safety",
              ].map((t) => (
                <li key={t} className="flex items-center gap-4 py-4 text-sm text-navy">
                  <span className="size-1.5 shrink-0 rotate-45 bg-copper" aria-hidden="true" />
                  {t}
                </li>
              ))}
            </ul>
            <Button asChild variant="outline-dark" size="cta" className="mt-10">
              <Link to="/sustainability">
                Our Sustainability Approach <ArrowRight />
              </Link>
            </Button>
          </Reveal>
        </div>
        <Reveal className="order-1 grid grid-cols-5 gap-4 lg:order-2 lg:col-span-7">
          <SiteImage image={images.finishing} className="col-span-3 aspect-[3/4]" />
          <div className="col-span-2 flex flex-col gap-4 pt-16">
            <SiteImage image={images.aerial} className="aspect-[3/4]" label={false} />
            <p className="serif-accent text-lg leading-snug text-navy lg:text-xl">
              “Environmentally friendly products, as per our customers’ requirements.”
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Certifications() {
  return (
    <section className="section-y bg-background">
      <div className="container-site">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <SectionHeading
              eyebrow="Compliance"
              title="Standards That Inspire Confidence."
              intro="Accreditations documented by Magna that reflect our commitment to quality, product safety, the environment and ethics."
            />
            <Reveal delay={120}>
              <Button asChild variant="navy" size="cta" className="mt-10">
                <Link to="/quality">
                  View Quality & Certifications <ArrowRight />
                </Link>
              </Button>
            </Reveal>
          </div>
          <ul className="grid border-t border-l border-border sm:grid-cols-2 lg:col-span-8">
            {certifications.map((c, i) => (
              <Reveal
                as="li"
                key={c.code}
                delay={i * 70}
                className="group border-r border-b border-border p-8 transition-colors duration-500 hover:bg-ivory"
              >
                <p className="font-display text-xl font-bold text-navy">{c.code}</p>
                <p className="mt-1 text-sm font-medium text-copper">{c.name}</p>
                <p className="mt-4 text-xs leading-relaxed text-slate">{c.body}</p>
              </Reveal>
            ))}
            <li className="flex items-end border-r border-b border-border bg-navy p-8 text-on-dark">
              <p className="text-xs leading-relaxed text-on-dark-muted">
                Certificate copies and current validity are available from Magna's compliance team on
                request.
              </p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
