import { createFileRoute } from "@tanstack/react-router";

import { CTASection } from "@/components/site/CTASection";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { SectionHeading } from "@/components/site/SectionHeading";
import { SiteImage } from "@/components/site/SiteImage";
import { images } from "@/lib/images";

export const Route = createFileRoute("/sustainability")({
  head: () => ({
    meta: [
      { title: "Sustainability & Responsibility | Magna Processing" },
      {
        name: "description",
        content:
          "How Magna Processing balances growth with environmental responsibility, resource-conscious production, compliance and corporate social responsibility.",
      },
      { property: "og:title", content: "Sustainability at Magna Processing" },
      {
        property: "og:description",
        content: "Environmental commitment, resource management, compliance and CSR at Magna.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: SustainabilityPage,
});

const pillars = [
  {
    n: "01",
    title: "Environmental commitment",
    text: "Our expansion strategy is designed to balance economic growth while embedding a culture of sustainable development for the environment and the community. Our environmental management system is certified to ISO 14001:2015.",
  },
  {
    n: "02",
    title: "Resource management",
    text: "Before beginning this journey we set a clear strategy to embed healthy business practices into our corporate culture. These efforts have reduced our carbon and water footprint, decreased energy consumption and lowered wastage — while also reducing costs and improving productivity.",
  },
  {
    n: "03",
    title: "Safer products",
    text: "We strive to provide environmentally friendly products to our customers' requirements. Certified articles meet OEKO-TEX® STANDARD 100, and organic programmes are supported under the Organic Content Standard.",
  },
];

function SustainabilityPage() {
  return (
    <>
      <PageHero
        eyebrow="Sustainability"
        title={
          <>
            Progress <span className="serif-accent text-copper-soft">with purpose.</span>
          </>
        }
        intro="We give high priority to sustainable practices that contribute to a greener, healthier planet — and to responsible conduct across every part of our operations."
        image={images.finishing}
        crumbs={[{ label: "Home", to: "/" }, { label: "Sustainability" }]}
      />

      <section className="section-y bg-ivory">
        <div className="container-site grid items-center gap-14 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <p className="eyebrow">Our commitment</p>
            <Reveal delay={80}>
              <p className="serif-accent mt-6 text-3xl leading-snug text-navy lg:text-[2.6rem] lg:leading-[1.2]">
                “We are striving to provide environmentally friendly products to our customers, to
                avoid harming life on planet earth in all its forms.”
              </p>
            </Reveal>
          </div>
          <Reveal delay={150} className="lg:col-span-5 lg:col-start-8">
            <SiteImage image={images.aerial} className="aspect-[4/5]" />
          </Reveal>
        </div>
      </section>

      <section className="section-y bg-background">
        <div className="container-site">
          <SectionHeading eyebrow="Environment" title="Three areas of focus." />
          <div className="mt-16 divide-y divide-border border-y border-border">
            {pillars.map((p, i) => (
              <Reveal key={p.n} delay={i * 80} className="grid gap-6 py-10 md:grid-cols-12 lg:py-14">
                <p className="font-display text-sm font-semibold text-copper md:col-span-1">{p.n}</p>
                <h3 className="display-md text-navy md:col-span-4">{p.title}</h3>
                <p className="leading-relaxed text-slate md:col-span-6 md:col-start-7">{p.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="relative isolate overflow-hidden bg-navy text-on-dark">
        <div className="grid lg:grid-cols-2">
          <div className="weave-texture px-5 py-20 sm:px-10 lg:px-16 lg:py-28 xl:px-24">
            <SectionHeading
              tone="light"
              eyebrow="Compliance culture"
              title="A dedicated team for responsible operations."
            />
            <Reveal delay={120} className="mt-8 space-y-5 leading-relaxed text-on-dark-muted">
              <p>
                Magna's Compliance department trains and advises management and staff on all matters
                related to corporate social responsibility, and communicates with customers on labour,
                environment, health and safety.
              </p>
              <p>
                It is a continuous process: the team works closely with buyers and with local and
                international organisations to find ways of improving our workplace. This commitment
                to global compliance standards is reflected in our ISO 14001 certification and amfori
                BSCI social audit.
              </p>
            </Reveal>
          </div>
          <div className="relative min-h-[420px]">
            <SiteImage image={images.stitchFloor} className="absolute inset-0" />
          </div>
        </div>
      </section>

      <section className="section-y bg-ivory">
        <div className="container-site grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionHeading eyebrow="Corporate social responsibility" title="A responsible corporate citizen." />
          </div>
          <Reveal delay={100} className="space-y-6 leading-relaxed text-slate lg:col-span-6 lg:col-start-7">
            <p className="lead text-navy">
              As an established name in the textile industry, we recognise the responsibility we
              carry towards the environment and our community.
            </p>
            <p>
              Being compliant is an integral part of Magna's culture, demonstrated in our commitment to
              conduct business responsibly and ethically. We have developed a comprehensive Corporate
              Social Responsibility Policy whose principles cover every area of our operations.
            </p>
            <p>
              Magna is committed to being a responsible and honest corporate citizen, and to playing an
              active role in the development of our society.
            </p>
          </Reveal>
        </div>
      </section>

      <CTASection
        title="Sourcing responsibly? Let's talk compliance."
        text="Request certificate copies, audit information or details on organic and OEKO-TEX® programmes."
      />
    </>
  );
}
