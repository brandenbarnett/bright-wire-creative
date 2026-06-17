import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact | Bright Wire Creative",
  description:
    "Schedule a free 20-minute consultation with Branden Barnett — therapy and coaching for creative professionals with ADHD and anxiety.",
};

export default function ContactPage() {
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
              Bright Wire Creative &nbsp;/&nbsp; Contact
            </p>
            <h1 className="font-serif text-[clamp(2.5rem,6vw,5rem)] text-stone-50 leading-[1.08] mb-8 max-w-2xl">
              Let&apos;s talk.
            </h1>
          </div>
        </section>

        {/* ── Form section ── */}
        <section className="bg-stone-900 px-6 py-24 md:py-32">
          <div className="max-w-6xl mx-auto grid lg:grid-cols-[1fr_1.5fr] gap-16 lg:gap-24 items-start">

            {/* Left: intro copy */}
            <div className="lg:pt-2">
              <p className="text-xs tracking-[0.3em] text-stone-500 uppercase mb-8">
                Free Consultation
              </p>
              <div className="space-y-5 text-stone-400 text-lg leading-relaxed">
                <p>
                  If you&apos;re curious about working together, the next step is
                  a free 20-minute consultation. We&apos;ll talk about what
                  you&apos;re dealing with, what you&apos;re hoping for, and
                  whether I&apos;m the right fit.
                </p>
                <p>
                  No pressure. No commitment. Just an honest conversation to
                  figure out if this makes sense.
                </p>
                <p className="text-stone-300">
                  I&apos;ll be in touch within 1–2 business days.
                </p>
              </div>

              {/* Divider + direct email */}
              <div className="mt-10 pt-10 border-t border-stone-800">
                <p className="text-xs tracking-[0.2em] uppercase text-stone-500 mb-2">
                  Prefer email?
                </p>
                <a
                  href="mailto:brandenbarnett@gmail.com"
                  className="text-gold hover:text-gold-light transition-colors text-base"
                >
                  brandenbarnett@gmail.com
                </a>
              </div>
            </div>

            {/* Right: form */}
            <div>
              <ContactForm />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
