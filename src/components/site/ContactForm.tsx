import { AlertCircle, ArrowRight, Info, Loader2, Mail } from "lucide-react";
import { useState, type FormEvent } from "react";

import { Button } from "@/components/ui/button";
import { buildInquiryMailto, inquiryCategories, inquirySchema, type Inquiry } from "@/lib/inquiry";
import { cn } from "@/lib/utils";

type Errors = Partial<Record<keyof Inquiry, string>>;
type Status = "idle" | "submitting" | "demo-success" | "invalid";

const empty: Inquiry = {
  fullName: "",
  company: "",
  email: "",
  phone: "",
  country: "",
  category: "",
  message: "",
};

const fieldCls =
  "peer w-full border-0 border-b bg-transparent px-0 pt-2 pb-3 text-[0.95rem] text-navy outline-none transition-colors placeholder:text-slate/50 focus:border-copper focus:ring-0";

export function ContactForm() {
  const [values, setValues] = useState<Inquiry>(empty);
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<Status>("idle");
  const [submitted, setSubmitted] = useState<Inquiry | null>(null);

  const set = (k: keyof Inquiry) => (e: { target: { value: string } }) => {
    setValues((v) => ({ ...v, [k]: e.target.value }));
    if (errors[k]) setErrors((er) => ({ ...er, [k]: undefined }));
  };

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const parsed = inquirySchema.safeParse(values);
    if (!parsed.success) {
      const next: Errors = {};
      for (const issue of parsed.error.issues) {
        const key = issue.path[0] as keyof Inquiry;
        if (!next[key]) next[key] = issue.message;
      }
      setErrors(next);
      setStatus("invalid");
      const first = Object.keys(next)[0];
      if (first) document.getElementById(`f-${first}`)?.focus();
      return;
    }
    setStatus("submitting");
    await new Promise((r) => setTimeout(r, 900));
    setSubmitted(parsed.data);
    setStatus("demo-success");
  };

  if (status === "demo-success" && submitted) {
    return (
      <div role="status" className="border border-border bg-background p-8 lg:p-12">
        <span className="inline-flex items-center gap-2 bg-ivory px-3 py-1.5 text-[0.65rem] font-semibold tracking-[0.18em] text-copper uppercase">
          <Info className="size-3.5" /> Demonstration mode
        </span>
        <h3 className="display-md mt-6 text-navy">Your inquiry is ready — but has not been sent.</h3>
        <p className="mt-4 leading-relaxed text-slate">
          This website is a design concept and the form is not yet connected to an email service, so
          nothing has been delivered to Magna. To send it now, open it in your email app — your
          details are already filled in.
        </p>
        <div className="mt-8 flex flex-wrap gap-4">
          <Button asChild variant="navy" size="cta">
            <a href={buildInquiryMailto(submitted)}>
              <Mail /> Open in Email App
            </a>
          </Button>
          <Button
            variant="outline-dark"
            size="cta"
            onClick={() => {
              setStatus("idle");
              setSubmitted(null);
            }}
          >
            Edit Inquiry
          </Button>
        </div>
      </div>
    );
  }

  const errorCount = Object.values(errors).filter(Boolean).length;

  return (
    <form noValidate onSubmit={onSubmit} className="border border-border bg-background p-8 lg:p-12">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <h2 className="display-md text-navy">Request a quotation</h2>
        <span className="inline-flex items-center gap-2 bg-ivory px-3 py-1.5 text-[0.62rem] font-semibold tracking-[0.18em] text-slate uppercase">
          <Info className="size-3.5 text-copper" /> Demo form
        </span>
      </div>
      <p className="mt-3 text-sm text-slate">Fields marked * are required.</p>

      {status === "invalid" && errorCount > 0 && (
        <div
          role="alert"
          className="mt-8 flex items-start gap-3 border-l-2 border-destructive bg-destructive/5 p-4 text-sm text-destructive"
        >
          <AlertCircle className="mt-0.5 size-4 shrink-0" />
          Please correct {errorCount === 1 ? "the highlighted field" : `the ${errorCount} highlighted fields`} below.
        </div>
      )}

      <div className="mt-10 grid gap-x-8 gap-y-8 sm:grid-cols-2">
        <Field id="fullName" label="Full name *" error={errors.fullName}>
          <input id="f-fullName" autoComplete="name" value={values.fullName} onChange={set("fullName")} className={cn(fieldCls, errors.fullName ? "border-destructive" : "border-input")} aria-invalid={!!errors.fullName} aria-describedby={errors.fullName ? "e-fullName" : undefined} />
        </Field>
        <Field id="company" label="Company name *" error={errors.company}>
          <input id="f-company" autoComplete="organization" value={values.company} onChange={set("company")} className={cn(fieldCls, errors.company ? "border-destructive" : "border-input")} aria-invalid={!!errors.company} aria-describedby={errors.company ? "e-company" : undefined} />
        </Field>
        <Field id="email" label="Business email *" error={errors.email}>
          <input id="f-email" type="email" autoComplete="email" value={values.email} onChange={set("email")} className={cn(fieldCls, errors.email ? "border-destructive" : "border-input")} aria-invalid={!!errors.email} aria-describedby={errors.email ? "e-email" : undefined} />
        </Field>
        <Field id="phone" label="Phone number" error={errors.phone}>
          <input id="f-phone" type="tel" autoComplete="tel" value={values.phone} onChange={set("phone")} className={cn(fieldCls, errors.phone ? "border-destructive" : "border-input")} aria-invalid={!!errors.phone} aria-describedby={errors.phone ? "e-phone" : undefined} />
        </Field>
        <Field id="country" label="Country *" error={errors.country}>
          <input id="f-country" autoComplete="country-name" value={values.country} onChange={set("country")} className={cn(fieldCls, errors.country ? "border-destructive" : "border-input")} aria-invalid={!!errors.country} aria-describedby={errors.country ? "e-country" : undefined} />
        </Field>
        <Field id="category" label="Product category *" error={errors.category}>
          <select id="f-category" value={values.category} onChange={set("category")} className={cn(fieldCls, "cursor-pointer appearance-none", errors.category ? "border-destructive" : "border-input", !values.category && "text-slate/60")} aria-invalid={!!errors.category} aria-describedby={errors.category ? "e-category" : undefined}>
            <option value="">Select a category</option>
            {inquiryCategories.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
        </Field>
        <Field id="message" label="Your requirement *" error={errors.message} className="sm:col-span-2">
          <textarea id="f-message" rows={5} value={values.message} onChange={set("message")} placeholder="Product, construction, quantities, target delivery…" className={cn(fieldCls, "resize-y", errors.message ? "border-destructive" : "border-input")} aria-invalid={!!errors.message} aria-describedby={errors.message ? "e-message" : undefined} />
        </Field>
      </div>

      <div className="mt-10 flex flex-wrap items-center justify-between gap-6">
        <p className="max-w-xs text-xs leading-relaxed text-slate">
          Demo only: submitting prepares your inquiry to send from your own email app.
        </p>
        <Button type="submit" variant="copper" size="cta" disabled={status === "submitting"}>
          {status === "submitting" ? (
            <>
              <Loader2 className="animate-spin" /> Preparing…
            </>
          ) : (
            <>
              Send Inquiry <ArrowRight />
            </>
          )}
        </Button>
      </div>
    </form>
  );
}

function Field({
  id,
  label,
  error,
  children,
  className,
}: {
  id: string;
  label: string;
  error: string | undefined;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={className}>
      <label htmlFor={`f-${id}`} className="text-[0.68rem] font-semibold tracking-[0.16em] text-slate uppercase">
        {label}
      </label>
      {children}
      {error && (
        <p id={`e-${id}`} className="mt-2 text-xs text-destructive">
          {error}
        </p>
      )}
    </div>
  );
}
