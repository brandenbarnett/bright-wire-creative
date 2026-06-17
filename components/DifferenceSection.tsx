import Link from "next/link";

export default function DifferenceSection() {
  return (
    <section id="about" className="bg-stone-900 px-6 py-28 md:py-36">
      <div className="max-w-6xl mx-auto">
        {/* Section label */}
        <p className="text-xs tracking-[0.3em] text-stone-500 uppercase mb-8">
          03 — The Difference
        </p>

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Left: text */}
          <div>
            <h2 className="font-serif text-[clamp(1.75rem,4vw,3.25rem)] text-stone-100 leading-tight mb-10">
              This isn&apos;t generic therapy.
            </h2>

            <div className="space-y-6 text-stone-400 text-lg leading-relaxed">
              <p>
                Most therapists will listen compassionately and offer you coping
                skills. That&apos;s not nothing. But it&apos;s not enough when
                your whole identity is built around making things — and the
                thing standing between you and your work lives inside your own
                head.
              </p>

              <p>
                I&apos;m Branden Barnett. I&apos;m a licensed psychotherapist
                who specializes in creativity and ADHD. I&apos;m also a
                songwriter and musician who has spent 20 years navigating
                exactly what you&apos;re navigating — the cost of following a
                calling, the grief of putting it down, and the work of picking
                it back up.
              </p>

              <p className="text-stone-200">
                I don&apos;t just understand the creative struggle clinically.
                I live it.
              </p>

              <p>That changes everything about how we work together.</p>
            </div>

            <div className="mt-12">
              <Link
                href="#about"
                className="inline-flex items-center gap-4 bg-gold text-stone-950 px-9 py-4 text-xs tracking-[0.2em] uppercase font-semibold hover:bg-gold-light transition-colors"
              >
                Meet Branden
                <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>

          {/* Right: image placeholder */}
          <div className="relative">
            <div className="aspect-[3/4] bg-stone-800 border border-stone-700/50 flex items-end p-8">
              <p className="text-stone-600 text-xs tracking-[0.2em] uppercase">
                Portrait — coming soon
              </p>
            </div>
            {/* Decorative offset border */}
            <div className="absolute -bottom-4 -right-4 w-full h-full border border-gold/20 -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
}
