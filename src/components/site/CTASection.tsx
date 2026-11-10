import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { images } from "@/lib/images";
import { company } from "@/lib/site";
import { Reveal } from "./Reveal";

type Props = {
  title?: string;
  text?: string;
};

export function CTASection({
  title = "Let's Build Something Exceptional Together.",
  text = "Explore reliable textile manufacturing solutions tailored to your business requirements — from yarn and greige fabric to finished, packed made-ups.",
}: Props) {
  return (
    <section className="relative isolate overflow-hidden bg-navy-deep text-on-dark">
      <img
        src={images.warpThreads.src}
        alt=""
        aria-hidden="true"
        loading="lazy"
        className="absolute inset-0 -z-20 h-full w-full object-cover opacity-60"
      />
      <div className="bg-solid-overlay absolute inset-0 -z-10" aria-hidden="true" />
      <div className="weave-texture absolute inset-0 -z-10 opacity-60" aria-hidden="true" />

      <div className="container-site section-y">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-end">
          <Reveal className="lg:col-span-8">
            <p className="eyebrow">Partner with Magna</p>
            <h2 className="display-lg mt-6 max-w-3xl text-balance">{title}</h2>
            <p className="lead mt-6 max-w-2xl text-on-dark-muted">{text}</p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Button asChild variant="copper" size="cta">
                <Link to="/contact">
                  Request a Quote <ArrowRight />
                </Link>
              </Button>
              <Button asChild variant="outline-light" size="cta">
                <Link to="/contact">Contact Our Team</Link>
              </Button>
            </div>
          </Reveal>
          <Reveal delay={150} className="border-l border-line-dark pl-8 lg:col-span-4">
            <p className="text-[0.68rem] font-semibold tracking-[0.2em] text-on-dark-muted uppercase">
              Mills & Head Office
            </p>
            <p className="mt-3 text-sm leading-relaxed text-on-dark">{company.addressLine}</p>
            <a
              href={company.phoneHref}
              className="link-underline mt-5 block font-display text-xl font-semibold"
            >
              {company.phonePrimary}
            </a>
            <a href={company.emailHref} className="link-underline mt-2 block text-sm text-copper-soft">
              {company.email}
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
