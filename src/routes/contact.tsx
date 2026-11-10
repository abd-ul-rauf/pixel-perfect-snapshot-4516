import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";

import { ContactForm } from "@/components/site/ContactForm";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { images } from "@/lib/images";
import { company } from "@/lib/site";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact & Request a Quote | Magna Processing, Faisalabad" },
      {
        name: "description",
        content:
          "Contact Magna Processing Industries — 2.6-K.M., Khurrianwala, Jaranwala Road, Faisalabad. Tel +92 41 2424070, info@magnaprocessing.com.",
      },
      { property: "og:title", content: "Contact Magna Processing" },
      {
        property: "og:description",
        content: "Request a quotation or speak with our team in Faisalabad, Pakistan.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title={
          <>
            Let's talk about <span className="serif-accent text-copper-soft">your programme.</span>
          </>
        }
        intro="Share your requirements and our team will respond with capabilities, samples and lead times."
        image={images.headOffice}
        crumbs={[{ label: "Home", to: "/" }, { label: "Contact" }]}
      />

      <section className="section-y bg-ivory">
        <div className="container-site grid gap-12 lg:grid-cols-12 lg:gap-16">
          <Reveal className="lg:col-span-4">
            <p className="eyebrow">Mills & head office</p>
            <ul className="mt-8 space-y-8">
              <li className="flex gap-5">
                <span className="flex size-11 shrink-0 items-center justify-center border border-copper text-copper">
                  <MapPin className="size-4" />
                </span>
                <div>
                  <p className="text-[0.68rem] font-semibold tracking-[0.16em] text-slate uppercase">Address</p>
                  <address className="mt-2 leading-relaxed text-navy not-italic">
                    {company.address.map((l) => (
                      <span key={l} className="block">
                        {l}
                      </span>
                    ))}
                  </address>
                </div>
              </li>
              <li className="flex gap-5">
                <span className="flex size-11 shrink-0 items-center justify-center border border-copper text-copper">
                  <Phone className="size-4" />
                </span>
                <div>
                  <p className="text-[0.68rem] font-semibold tracking-[0.16em] text-slate uppercase">Telephone</p>
                  <ul className="mt-2 space-y-1">
                    {company.phones.map((p) => (
                      <li key={p}>
                        <a href={`tel:${p.replace(/\s/g, "")}`} className="link-underline text-navy">
                          {p}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
              <li className="flex gap-5">
                <span className="flex size-11 shrink-0 items-center justify-center border border-copper text-copper">
                  <Mail className="size-4" />
                </span>
                <div className="min-w-0">
                  <p className="text-[0.68rem] font-semibold tracking-[0.16em] text-slate uppercase">Email</p>
                  <a href={company.emailHref} className="link-underline mt-2 inline-block break-all text-navy">
                    {company.email}
                  </a>
                </div>
              </li>
            </ul>
          </Reveal>

          <Reveal delay={120} className="lg:col-span-8">
            <ContactForm />
          </Reveal>
        </div>
      </section>

      <section aria-label="Location map" className="relative bg-navy">
        <iframe
          title="Map showing Magna Processing Industries, Jaranwala Road, Faisalabad"
          src={company.mapsEmbed}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="block h-[460px] w-full grayscale-[60%]"
        />
        <a
          href={company.mapsUrl}
          target="_blank"
          rel="noreferrer"
          className="absolute top-6 left-6 inline-flex items-center gap-2 bg-navy px-5 py-3 text-[0.72rem] font-semibold tracking-[0.14em] text-on-dark uppercase shadow-soft transition-colors hover:bg-copper"
        >
          Open in Google Maps <ArrowUpRight className="size-4" />
        </a>
      </section>
    </>
  );
}
