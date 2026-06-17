import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Fees & Insurance | Bright Wire Creative",
  description:
    "Transparent pricing for therapy, coaching, and group programs. Out-of-network superbills provided. Reduced-fee spots available for working artists.",
};

const CONSULT_HREF = "/contact";

const pricing = [
  {
    service: "Individual Therapy",
    availability: "Florida residents",
    rate: "$225",
    detail: "per 50-minute session",
  },
  {
    service: "Coaching",
    availability: "Available US-wide",
    rate: "$175",
    detail: "per session",
    alt: "$600 for 4 sessions",
  },
  {
    service: "The Wired Creative Workshop",
    availability: "Live in St. Pete & online",
    rate: "$275",
    detail: "per person",
  },
  {
    service: "The Wired Creative — 8-Week Program",
    availability: "Online · Cohort-based",
    rate: "$700",
    detail: "per cohort",
    alt: "+ $175 optional 1:1 add-on",
  },
];

const faqs = [
  {
    q: "Do you take insurance?",
    a: [
      "I am an out-of-network provider for therapy. I don't bill insurance directly, but I provide superbills for every session — a detailed receipt you can submit to your insurance company for reimbursement. Many clients with PPO plans recover 50–80% of session fees this way.",
      "Contact your insurance provider and ask about your out-of-network mental health benefits before we begin.",
      "Coaching is not a clinical service and is not covered by insurance.",
    ],
    note: null,
  },
  {
    q: "What if I can't afford the full rate?",
    a: [
      "I maintain a small number of reduced-fee therapy spots for working artists and musicians. If cost is a genuine barrier, reach out and let's talk honestly about it.",
    ],
    note: null,
  },
  {
    q: "How do I get started?",
    a: [
      "Schedule a free 20-minute consultation. We'll talk about what you're looking for, I'll answer your questions, and we'll figure out together whether working together makes sense.",
    ],
    note: null,
  },
];

export default function FeesPage() {
  return (
    <>
      <Nav />
      <main>
        {/* ── Page header ── */}
        <section className="relative bg-stone-950 pt-40 pb-20 px-6 overflow-hidden">
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse at 30% 50%, rgba(41,37,34,0.5) 0%, transparent 65%)",
            }}
          />
          <div className="relative max-w-6xl mx-auto">
            <p className="text-xs tracking-[0.35em] text-stone-500 uppercase mb-10">
              Bright Wire Creative &nbsp;/&nbsp; Fees
            </p>
            <h1 className="font-serif text-[clamp(2.5rem,6vw,5rem)] text-stone-50 leading-[1.08] mb-8 max-w-2xl">
              Investment.
            </h1>
            <p className="text-stone-400 text-lg leading-relaxed max-w-xl">
              I believe good therapy and coaching should be accessible — and I
              also believe that you get what you pay for.
            </p>
          </div>
        </section>

        {/* ── Pricing table ── */}
        <section className="bg-stone-900 px-6 py-24 md:py-32">
          <div className="max-w-6xl mx-auto">
            <p className="text-xs tracking-[0.3em] text-stone-500 uppercase mb-12">
              01 — Rates
            </p>

            <div className="divide-y divide-stone-800">
              {pricing.map((item, i) => (
                <div
                  key={i}
                  className="grid md:grid-cols-[1fr_auto] gap-4 md:gap-16 items-baseline py-8 first:pt-0 last:pb-0"
                >
                  {/* Left: service + availability */}
                  <div>
                    <p className="font-serif text-xl text-stone-100 mb-1">
                      {item.service}
                    </p>
                    <p className="text-xs tracking-[0.2em] uppercase text-gold">
                      {item.availability}
                    </p>
                  </div>

                  {/* Right: rate */}
                  <div className="md:text-right">
                    <p className="font-serif text-3xl text-stone-100 leading-none mb-1">
                      {item.rate}
                    </p>
                    <p className="text-stone-500 text-sm">{item.detail}</p>
                    {item.alt && (
                      <p className="text-stone-600 text-xs mt-1">{item.alt}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── FAQ ── */}
        <section className="bg-stone-950 px-6 py-24 md:py-32">
          <div className="max-w-6xl mx-auto">
            <p className="text-xs tracking-[0.3em] text-stone-500 uppercase mb-16">
              02 — Common Questions
            </p>

            <div className="space-y-0 divide-y divide-stone-800 max-w-4xl">
              {faqs.map((faq, i) => (
                <div
                  key={i}
                  className="grid lg:grid-cols-[2fr_3fr] gap-8 lg:gap-16 py-14 first:pt-0 last:pb-0"
                >
                  {/* Question */}
                  <h2 className="font-serif text-xl md:text-2xl text-stone-100 leading-snug lg:pt-1">
                    {faq.q}
                  </h2>

                  {/* Answer */}
                  <div className="space-y-4">
                    {faq.a.map((para, j) => (
                      <p
                        key={j}
                        className={`text-lg leading-relaxed ${
                          j === faq.a.length - 1 && faq.a.length > 1
                            ? "text-stone-500 text-base border-l border-stone-700 pl-5"
                            : "text-stone-400"
                        }`}
                      >
                        {para}
                      </p>
                    ))}

                    {/* Inline CTA for "How do I get started?" */}
                    {i === faqs.length - 1 && (
                      <div className="pt-4">
                        <Link
                          href={CONSULT_HREF}
                          className="inline-flex items-center gap-4 bg-gold text-stone-950 px-9 py-4 text-xs tracking-[0.2em] uppercase font-semibold hover:bg-gold-light transition-colors"
                        >
                          Schedule Your Free Consultation
                          <span aria-hidden="true">→</span>
                        </Link>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Still have questions ── */}
        <section className="relative bg-stone-900 px-6 py-24 md:py-32 overflow-hidden">
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse at 50% 60%, rgba(200,145,58,0.05) 0%, transparent 60%)",
            }}
          />
          <div className="relative max-w-6xl mx-auto grid lg:grid-cols-[1fr_2fr] gap-12 items-center">
            <div>
              <p className="text-xs tracking-[0.3em] text-stone-500 uppercase mb-4">
                03 — Still have questions?
              </p>
              <h2 className="font-serif text-[clamp(1.5rem,3vw,2.5rem)] text-stone-100 leading-tight">
                Just ask.
              </h2>
            </div>
            <div>
              <p className="text-stone-400 text-lg leading-relaxed mb-8 max-w-xl">
                The free consultation is a real conversation — not a sales
                call. Bring your questions about fees, fit, process, or
                anything else. There&apos;s no pressure and no commitment.
              </p>
              <Link
                href={CONSULT_HREF}
                className="inline-flex items-center gap-4 bg-gold text-stone-950 px-9 py-4 text-xs tracking-[0.2em] uppercase font-semibold hover:bg-gold-light transition-colors"
              >
                Schedule Your Free Consultation
                <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
