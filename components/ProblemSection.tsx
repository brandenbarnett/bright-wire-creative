import Link from "next/link";

export default function ProblemSection() {
  return (
    <section id="problem" className="bg-stone-900 px-6 py-28 md:py-36">
      <div className="max-w-6xl mx-auto">
        {/* Section label */}
        <p className="text-xs tracking-[0.3em] text-stone-500 uppercase mb-8">
          01 — The Problem
        </p>

        {/* Heading */}
        <h2 className="font-serif text-[clamp(1.75rem,4vw,3.25rem)] text-stone-100 leading-[1.15] mb-16 max-w-3xl">
          You have more ideas than you know what to do with.
          <br />
          <span className="text-stone-400">And somehow, nothing gets finished.</span>
        </h2>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left column */}
          <div className="space-y-6 text-stone-400 text-lg leading-relaxed">
            <p>
              You sit down to write, record, paint, build — and an hour later
              you&apos;re reorganizing your desk, down a rabbit hole on YouTube,
              or staring at a blank page wondering why someone as talented as
              you can&apos;t just start.
            </p>
            <p>
              You know what you&apos;re capable of. You&apos;ve felt the moments
              when it all clicks — when you&apos;re in the flow and the work
              comes through you like it was always there. But getting to that
              place feels harder than it should. And staying there feels
              impossible.
            </p>
          </div>

          {/* Right column */}
          <div className="space-y-6 text-stone-400 text-lg leading-relaxed">
            <p className="text-stone-300 font-medium">
              Here&apos;s what&apos;s actually happening:
            </p>
            <p>
              Your brain is not broken. It&apos;s wired for creativity — for
              big ideas, deep feeling, intense connection, and bursts of
              brilliance. But that same wiring comes with a cost: the anxiety
              that lives just underneath everything, the ADHD that turns your
              greatest asset into your biggest obstacle, the perfectionism that
              keeps you polishing instead of finishing, the fear of being seen
              that makes you hold back right at the moment you should be showing
              up.
            </p>
          </div>
        </div>

        {/* Pull quote */}
        <div className="my-16 border-l-2 border-gold pl-8 max-w-2xl">
          <p className="font-serif italic text-[clamp(1.25rem,2.5vw,1.875rem)] text-stone-200 leading-snug">
            You&apos;re not lazy. You&apos;re not self-destructive.
            You&apos;re not failing.
          </p>
          <p className="mt-4 text-stone-400 text-lg leading-relaxed">
            You&apos;re a creative person who has never had the right support.
          </p>
        </div>

        {/* CTA */}
        <Link
          href="/contact"
          className="inline-flex items-center gap-4 bg-gold text-stone-950 px-9 py-4 text-xs tracking-[0.2em] uppercase font-semibold hover:bg-gold-light transition-colors"
        >
          Let&apos;s Change That
          <span aria-hidden="true">→</span>
        </Link>
      </div>
    </section>
  );
}
