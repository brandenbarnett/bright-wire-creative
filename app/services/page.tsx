import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Services | Bright Wire Creative",
  description:
    "Individual therapy, coaching, and group programs for musicians, artists, and creative professionals with ADHD and anxiety.",
};

const CONSULT_HREF = "/contact";
const WAITLIST_HREF = "/contact";

function PrimaryButton({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className="inline-flex items-center gap-4 bg-gold text-stone-950 px-9 py-4 text-xs tracking-[0.2em] uppercase font-semibold hover:bg-gold-light transition-colors"
    >
      {children}
      <span aria-hidden="true">→</span>
    </Link>
  );
}

function OutlineButton({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className="inline-flex items-center gap-4 border border-gold/50 text-gold px-9 py-4 text-xs tracking-[0.2em] uppercase font-medium hover:bg-gold/10 hover:border-gold/80 transition-all"
    >
      {children}
      <span aria-hidden="true">→</span>
    </Link>
  );
}

export default function ServicesPage() {
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
              Bright Wire Creative &nbsp;/&nbsp; Services
            </p>
            <h1 className="font-serif text-[clamp(2.5rem,6vw,5rem)] text-stone-50 leading-[1.08] mb-8 max-w-3xl">
              How we work together.
            </h1>
            <p className="text-stone-400 text-lg leading-relaxed max-w-xl">
              Four ways to get support — from one-on-one clinical work to
              group programs to a self-paced course, depending on where you are
              and what you need.
            </p>
          </div>
        </section>

        {/* ── Jump nav ── */}
        <nav
          aria-label="Services"
          className="bg-stone-900 border-y border-stone-800 px-6 py-5 overflow-x-auto"
        >
          <ul className="flex items-center gap-8 max-w-6xl mx-auto whitespace-nowrap">
            {[
              ["#therapy", "Individual Therapy"],
              ["#coaching", "Coaching"],
              ["#workshop", "The Workshop"],
              ["#group", "8-Week Program"],
              ["#course", "The Course"],
            ].map(([href, label]) => (
              <li key={href}>
                <Link
                  href={href}
                  className="text-xs tracking-[0.2em] uppercase text-stone-500 hover:text-stone-200 transition-colors"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* ── Individual Therapy ── */}
        <section id="therapy" className="bg-stone-950 px-6 py-24 md:py-32">
          <div className="max-w-6xl mx-auto grid lg:grid-cols-[280px_1fr] gap-14 lg:gap-20">
            {/* Left metadata */}
            <div className="space-y-8">
              <div>
                <p className="text-xs tracking-[0.3em] text-stone-500 uppercase mb-4">
                  01
                </p>
                <h2 className="font-serif text-2xl text-stone-100 leading-snug mb-3">
                  Individual Therapy
                </h2>
                <p className="text-xs tracking-[0.2em] uppercase text-gold">
                  Florida residents only
                </p>
              </div>

              <div className="border-t border-stone-800 pt-7 space-y-4">
                <p className="text-xs tracking-[0.2em] text-stone-500 uppercase">
                  Investment
                </p>
                <p className="font-serif text-2xl text-stone-100">
                  $225 per session
                </p>
                <p className="text-stone-500 text-sm leading-relaxed">
                  Superbills provided for out-of-network insurance
                  reimbursement. Many clients recover 50–80% of session fees
                  through their insurance.
                </p>
              </div>
            </div>

            {/* Right content */}
            <div>
              <h3 className="font-serif text-[clamp(1.5rem,3vw,2.5rem)] text-stone-100 leading-tight mb-10 max-w-2xl">
                One-on-one therapy for the creative mind.
              </h3>

              <div className="space-y-5 text-stone-400 text-lg leading-relaxed max-w-2xl mb-12">
                <p>
                  For creative people with ADHD, anxiety, perfectionism,
                  creative blocks, and the particular kind of suffering that
                  comes from feeling called to something and not being able to
                  reach it.
                </p>
                <p>
                  Sessions are 50 minutes, weekly. We use ACT, mindfulness, and
                  Buddhist psychology — adapted specifically for how your brain
                  works, not how a neurotypical brain works.
                </p>
                <p className="text-stone-300">
                  This is not a place to be fixed. It&apos;s a place to get
                  honest, get clear, and build something real.
                </p>
              </div>

              <PrimaryButton href={CONSULT_HREF}>
                Schedule a Consultation
              </PrimaryButton>
            </div>
          </div>
        </section>

        {/* ── Coaching ── */}
        <section id="coaching" className="bg-stone-900 px-6 py-24 md:py-32">
          <div className="max-w-6xl mx-auto grid lg:grid-cols-[280px_1fr] gap-14 lg:gap-20">
            {/* Left metadata */}
            <div className="space-y-8">
              <div>
                <p className="text-xs tracking-[0.3em] text-stone-500 uppercase mb-4">
                  02
                </p>
                <h2 className="font-serif text-2xl text-stone-100 leading-snug mb-3">
                  Coaching
                </h2>
                <p className="text-xs tracking-[0.2em] uppercase text-gold">
                  Available anywhere in the US
                </p>
              </div>

              <div className="border-t border-stone-800 pt-7 space-y-4">
                <p className="text-xs tracking-[0.2em] text-stone-500 uppercase">
                  Investment
                </p>
                <p className="font-serif text-2xl text-stone-100">
                  $175 per session
                </p>
                <p className="font-serif text-lg text-stone-400">
                  or $600 for a 4-session package
                </p>
              </div>
            </div>

            {/* Right content */}
            <div>
              <h3 className="font-serif text-[clamp(1.5rem,3vw,2.5rem)] text-stone-100 leading-tight mb-10 max-w-2xl">
                Practical support for your creative life.
              </h3>

              <div className="space-y-5 text-stone-400 text-lg leading-relaxed max-w-2xl mb-8">
                <p>
                  For creative professionals who want practical, focused support
                  for ADHD, creative productivity, and building a life around
                  their calling — without the clinical framework of therapy.
                </p>
                <p>
                  Coaching is action-oriented and future-focused. We identify
                  what&apos;s getting in your way, build systems that work for
                  your brain, and hold you accountable to the creative life you
                  keep saying you want.
                </p>
              </div>

              <p className="text-stone-600 text-sm leading-relaxed max-w-2xl mb-12 border-l border-stone-700 pl-5">
                Coaching is not therapy and does not diagnose or treat mental
                health conditions. It is a professional development and creative
                partnership.
              </p>

              <PrimaryButton href={CONSULT_HREF}>
                Schedule a Consultation
              </PrimaryButton>
            </div>
          </div>
        </section>

        {/* ── Workshop ── */}
        <section id="workshop" className="bg-stone-950 px-6 py-24 md:py-32">
          <div className="max-w-6xl mx-auto grid lg:grid-cols-[280px_1fr] gap-14 lg:gap-20">
            {/* Left metadata */}
            <div className="space-y-8">
              <div>
                <p className="text-xs tracking-[0.3em] text-stone-500 uppercase mb-4">
                  03
                </p>
                <h2 className="font-serif text-2xl text-stone-100 leading-snug mb-3">
                  The Wired Creative Workshop
                </h2>
                <p className="text-xs tracking-[0.2em] uppercase text-gold">
                  Live in St. Pete &amp; online
                </p>
              </div>

              <div className="border-t border-stone-800 pt-7 space-y-4">
                <p className="text-xs tracking-[0.2em] text-stone-500 uppercase">
                  Investment
                </p>
                <p className="font-serif text-2xl text-stone-100">
                  $275 per person
                </p>
                <div className="border-t border-stone-800/60 pt-4">
                  <p className="text-xs tracking-[0.2em] text-stone-500 uppercase mb-2">
                    Next date
                  </p>
                  <p className="text-stone-500 text-sm">
                    TBD — join the email list to be notified.
                  </p>
                </div>
              </div>
            </div>

            {/* Right content */}
            <div>
              <h3 className="font-serif text-[clamp(1.5rem,3vw,2.5rem)] text-stone-100 leading-tight mb-10 max-w-2xl">
                A full-day immersive for creatives ready to get out of their own way.
              </h3>

              <div className="space-y-5 text-stone-400 text-lg leading-relaxed max-w-2xl mb-8">
                <p>
                  For musicians, artists, writers, and creative professionals who
                  are done talking about change and ready to do it.
                </p>
                <p>
                  We cover the psychology of the creative calling, ADHD and
                  anxiety as creative forces, ACT tools for breaking through
                  blocks, values clarification, and the fear of being seen.
                </p>
                <p className="text-stone-300">
                  The day closes with a live acoustic performance — because the
                  work isn&apos;t just talked about here. It&apos;s lived.
                </p>
              </div>

              <OutlineButton href={WAITLIST_HREF}>
                Join the Waitlist
              </OutlineButton>
            </div>
          </div>
        </section>

        {/* ── 8-Week Group ── */}
        <section id="group" className="bg-stone-900 px-6 py-24 md:py-32">
          <div className="max-w-6xl mx-auto grid lg:grid-cols-[280px_1fr] gap-14 lg:gap-20">
            {/* Left metadata */}
            <div className="space-y-8">
              <div>
                <p className="text-xs tracking-[0.3em] text-stone-500 uppercase mb-4">
                  04
                </p>
                <h2 className="font-serif text-2xl text-stone-100 leading-snug mb-3">
                  The Wired Creative — 8-Week Program
                </h2>
                <p className="text-xs tracking-[0.2em] uppercase text-gold">
                  Online · Cohort-based
                </p>
              </div>

              <div className="border-t border-stone-800 pt-7 space-y-4">
                <p className="text-xs tracking-[0.2em] text-stone-500 uppercase">
                  Investment
                </p>
                <p className="font-serif text-2xl text-stone-100">
                  $700 per cohort
                </p>
                <p className="text-stone-500 text-sm leading-relaxed">
                  Optional add-on: private 1:1 session with Branden — $175
                </p>
                <div className="border-t border-stone-800/60 pt-4">
                  <p className="text-stone-500 text-sm leading-relaxed">
                    Cohorts run twice per year. Join the email list to be
                    notified when enrollment opens.
                  </p>
                </div>
              </div>
            </div>

            {/* Right content */}
            <div>
              <h3 className="font-serif text-[clamp(1.5rem,3vw,2.5rem)] text-stone-100 leading-tight mb-10 max-w-2xl">
                Eight weeks. Real community. Real change.
              </h3>

              <div className="space-y-5 text-stone-400 text-lg leading-relaxed max-w-2xl mb-12">
                <p>
                  An intimate group program for creative people with ADHD and
                  anxiety who are serious about changing how they work and live.
                </p>
                <p>
                  Weekly 90-minute group video calls, a private community,
                  session recordings, and practical frameworks you can use
                  immediately.
                </p>
                <p className="text-stone-300">
                  Limited to 12 participants per cohort to ensure real
                  connection and real work.
                </p>
              </div>

              <OutlineButton href={WAITLIST_HREF}>
                Join the Waitlist
              </OutlineButton>
            </div>
          </div>
        </section>

        {/* ── The Wired Creative Course — Coming Soon ── */}
        <section id="course" className="bg-stone-950 px-6 py-24 md:py-32">
          <div className="max-w-6xl mx-auto">
            <div className="border border-stone-800 p-10 md:p-14 relative">
              {/* Coming soon badge */}
              <div className="absolute top-0 right-0 border-b border-l border-stone-700 bg-stone-900 px-4 py-2">
                <span className="text-[10px] tracking-[0.25em] uppercase text-stone-500">
                  Coming soon
                </span>
              </div>

              <div className="grid lg:grid-cols-[280px_1fr] gap-14 lg:gap-20">
                {/* Left */}
                <div className="space-y-6">
                  <div>
                    <p className="text-xs tracking-[0.3em] text-stone-500 uppercase mb-4">
                      05
                    </p>
                    <h2 className="font-serif text-2xl text-stone-500 leading-snug mb-3">
                      The Wired Creative Course
                    </h2>
                    <p className="text-xs tracking-[0.2em] uppercase text-stone-600">
                      Online · Self-paced
                    </p>
                  </div>
                  <div className="border-t border-stone-800 pt-6">
                    <p className="text-xs tracking-[0.2em] text-stone-600 uppercase">
                      Pricing TBD
                    </p>
                  </div>
                </div>

                {/* Right */}
                <div>
                  <h3 className="font-serif text-[clamp(1.5rem,3vw,2.5rem)] text-stone-500 leading-tight mb-8 max-w-2xl">
                    The work, on your own time.
                  </h3>
                  <p className="text-stone-600 text-lg leading-relaxed max-w-2xl mb-10">
                    A self-paced online course for creative people ready to get
                    out of their own way — covering the psychology of the
                    creative calling, ADHD and anxiety as creative forces, ACT
                    tools for breaking through blocks, values clarification, and
                    the fear of being seen.
                  </p>
                  <Link
                    href={WAITLIST_HREF}
                    className="inline-flex items-center gap-4 border border-stone-700 text-stone-500 px-9 py-4 text-xs tracking-[0.2em] uppercase font-medium hover:border-stone-500 hover:text-stone-400 transition-all"
                  >
                    Get notified when it launches
                    <span aria-hidden="true">→</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Closing CTA ── */}
        <section className="relative bg-stone-900 px-6 py-28 md:py-36 overflow-hidden">
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse at 50% 60%, rgba(200,145,58,0.06) 0%, transparent 60%)",
            }}
          />
          <div className="relative max-w-3xl mx-auto text-center">
            <p className="text-xs tracking-[0.35em] text-gold uppercase mb-10">
              Not sure where to start?
            </p>
            <h2 className="font-serif text-[clamp(2rem,4.5vw,3.75rem)] text-stone-50 leading-[1.1] mb-6">
              A free consultation is the place to begin.
            </h2>
            <div className="w-12 h-px bg-gold mx-auto mb-8" />
            <p className="text-stone-400 text-lg leading-relaxed mb-12 max-w-xl mx-auto">
              We&apos;ll talk about where you are, what you&apos;re working
              toward, and which option makes the most sense for you. No
              pressure, no commitment.
            </p>
            <PrimaryButton href={CONSULT_HREF}>
              Schedule a Free Consultation
            </PrimaryButton>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
