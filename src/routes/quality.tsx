import { createFileRoute } from "@tanstack/react-router";

import { CTASection } from "@/components/site/CTASection";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { SectionHeading } from "@/components/site/SectionHeading";
import { SiteImage } from "@/components/site/SiteImage";
import { images } from "@/lib/images";
import { certifications, qualityTests } from "@/lib/site";

export const Route = createFileRoute("/quality")({
  head: () => ({
    meta: [
      { title: "Quality Assurance & Certifications | Magna Processing" },
      {
        name: "description",
        content:
          "Magna's in-house textile laboratory, pilling, rubbing, crocking and shrinkage testing, and certifications including ISO 9001, ISO 14001, OEKO-TEX, amfori BSCI and OCS.",
      },
      { property: "og:title", content: "Quality & Certifications — Magna Processing" },
      {
        property: "og:description",
        content: "In-house laboratory testing and internationally recognised certifications.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: QualityPage,
});

const stages = [
  { t: "Planning", x: "Our design team carries out market research and trend analysis." },
  { t: "Development", x: "Designers and merchandisers embody market information into products." },
  { t: "Production", x: "Magna's quality control system is applied to every product." },
  { t: "Check", x: "All products are inspected and must clear Magna's quality standard." },
];

function QualityPage() {
  return (
    <>
      <PageHero
        eyebrow="Quality & certifications"
        title={
          <>
            Precision, <span className="serif-accent text-copper-soft">verified.</span>
          </>
        }
        intro="Stringent quality control and a modern in-house laboratory ensure every standard is met before delivery to the customer."
        image={images.qualityLab}
        crumbs={[{ label: "Home", to: "/" }, { label: "Quality" }]}
      />

      <section className="section-y bg-background">
        <div className="container-site grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionHeading eyebrow="Quality assurance" title="Reliable, premium quality — by design." />
          </div>
          <Reveal delay={100} className="space-y-6 leading-relaxed text-slate lg:col-span-6 lg:col-start-7">
            <p className="lead text-navy">
              We believe in delivering reliable, premium-quality products. Our testing laboratories are
              equipped with modern technology and staffed by highly qualified, experienced technicians.
            </p>
            <p>
              This allows us to meet international quality standards as well as each customer's own
              requirements. Lab certification and equipment calibration are carried out annually to
              keep quality checks consistent.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section-y bg-ivory">
        <div className="container-site">
          <SectionHeading
            eyebrow="Testing & inspection"
            title="Tests conducted routinely in our laboratory."
            intro="Carried out by experienced personnel who specialise in analysing new varieties of dyes and chemicals used in fabric processing."
          />
          <div className="mt-14 grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-4">
            {qualityTests.map((q, i) => (
              <Reveal key={q.name} delay={i * 90} className="bg-ivory p-8">
                <p className="font-display text-5xl font-extrabold text-navy/10">0{i + 1}</p>
                <h3 className="mt-4 font-display text-xl font-bold text-navy">{q.name}</h3>
                <p className="mt-2 text-sm text-slate">{q.text}</p>
              </Reveal>
            ))}
          </div>
          <p className="mt-6 text-xs text-slate">
            Additional standards and tests are conducted to customer specification.
          </p>
        </div>
      </section>

      <section className="section-y bg-background">
        <div className="container-site grid items-center gap-14 lg:grid-cols-12">
          <Reveal className="lg:col-span-6">
            <SiteImage image={images.finishing} className="aspect-[4/3]" />
          </Reveal>
          <div className="lg:col-span-5 lg:col-start-8">
            <SectionHeading eyebrow="Quality at every stage" title="From planning to final check." />
            <ol className="mt-10 space-y-6">
              {stages.map((s, i) => (
                <Reveal as="li" key={s.t} delay={i * 80} className="flex gap-6 border-b border-border pb-6">
                  <span className="font-display text-sm font-semibold text-copper">0{i + 1}</span>
                  <div>
                    <p className="font-display text-lg font-bold text-navy">{s.t}</p>
                    <p className="mt-1 text-sm text-slate">{s.x}</p>
                  </div>
                </Reveal>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section className="section-y weave-texture bg-navy text-on-dark">
        <div className="container-site">
          <SectionHeading
            tone="light"
            eyebrow="Certifications"
            title="Standards That Inspire Confidence."
            intro="Certifications documented on Magna's existing records. Certificate copies, scope and current validity are available on request."
          />
          <ul className="mt-14 divide-y divide-line-dark border-y border-line-dark">
            {certifications.map((c, i) => (
              <Reveal as="li" key={c.code} delay={i * 70} className="grid gap-4 py-8 md:grid-cols-12 md:items-baseline">
                <p className="font-display text-2xl font-bold md:col-span-4">{c.code}</p>
                <div className="md:col-span-3">
                  <p className="font-medium text-copper-soft">{c.name}</p>
                  <p className="mt-1 text-xs text-on-dark-muted">{c.body}</p>
                </div>
                <p className="text-sm leading-relaxed text-on-dark-muted md:col-span-5">{c.scope}</p>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <CTASection
        title="Need test reports or certificate copies?"
        text="Our quality and compliance teams can share documentation for your supplier onboarding."
      />
    </>
  );
}
