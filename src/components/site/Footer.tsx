import { Link } from "@tanstack/react-router";
import { Mail, MapPin, Phone } from "lucide-react";

import { company, divisions, orderedProducts } from "@/lib/site";
import { Logo } from "./Logo";

const quickLinks = [
  { label: "About Magna", to: "/about" as const },
  { label: "Business Divisions", to: "/divisions" as const },
  { label: "Products", to: "/products" as const },
  { label: "Sustainability", to: "/sustainability" as const },
  { label: "Quality & Certifications", to: "/quality" as const },
  { label: "Contact", to: "/contact" as const },
];

const linkCls = "link-underline text-sm text-on-dark-muted transition-colors hover:text-on-dark";

export function Footer() {
  return (
    <footer className="weave-texture bg-navy-deep text-on-dark">
      <div className="container-site pt-20 pb-10">
        <div className="grid gap-14 border-b border-line-dark pb-16 md:grid-cols-2 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Logo tone="light" />
            <p className="serif-accent mt-8 text-2xl text-copper-soft">{company.tagline}</p>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-on-dark-muted">
              A vertically integrated textile manufacturer and exporter in Faisalabad, Pakistan —
              spinning, weaving, processing and stitching since 1965.
            </p>
          </div>

          <FooterCol title="Company" className="lg:col-span-2">
            {quickLinks.map((l) => (
              <li key={l.to}>
                <Link to={l.to} className={linkCls}>
                  {l.label}
                </Link>
              </li>
            ))}
          </FooterCol>

          <FooterCol title="Divisions" className="lg:col-span-2">
            {divisions.map((d) => (
              <li key={d.slug}>
                <Link to="/divisions/$slug" params={{ slug: d.slug }} className={linkCls}>
                  {d.name}
                </Link>
              </li>
            ))}
          </FooterCol>

          <FooterCol title="Products" className="lg:col-span-2">
            {orderedProducts().map((p) => (
              <li key={p.slug}>
                <Link to="/products/$slug" params={{ slug: p.slug }} className={linkCls}>
                  {p.name}
                </Link>
              </li>
            ))}
          </FooterCol>

          <FooterCol title="Contact" className="lg:col-span-2">
            <li className="flex gap-3 text-sm text-on-dark-muted">
              <MapPin className="mt-0.5 size-4 shrink-0 text-copper" aria-hidden="true" />
              <a href={company.mapsUrl} target="_blank" rel="noreferrer" className="hover:text-on-dark">
                {company.address.map((l) => (
                  <span key={l} className="block">
                    {l}
                  </span>
                ))}
              </a>
            </li>
            <li className="flex gap-3">
              <Phone className="mt-0.5 size-4 shrink-0 text-copper" aria-hidden="true" />
              <a href={company.phoneHref} className={linkCls}>
                {company.phonePrimary}
              </a>
            </li>
            <li className="flex gap-3">
              <Mail className="mt-0.5 size-4 shrink-0 text-copper" aria-hidden="true" />
              <a href={company.emailHref} className={`${linkCls} break-all`}>
                {company.email}
              </a>
            </li>
          </FooterCol>
        </div>

        <div className="flex flex-col gap-3 pt-8 text-xs text-on-dark-muted md:flex-row md:items-center md:justify-between">
          <p>
            © {new Date().getFullYear()} {company.name} All rights reserved.
          </p>
          <p className="tracking-[0.18em] uppercase">Faisalabad · Pakistan</p>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({
  title,
  children,
  className,
}: {
  title: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={className}>
      <h3 className="font-sans text-[0.68rem] font-semibold tracking-[0.2em] text-copper uppercase">
        {title}
      </h3>
      <ul className="mt-6 space-y-3.5">{children}</ul>
    </div>
  );
}
