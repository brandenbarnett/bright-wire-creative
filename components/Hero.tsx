import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden px-6">
      {/* Subtle warm vignette */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 30% 40%, rgba(41,37,34,0.6) 0%, rgba(12,10,9,0) 65%)",
        }}
      />

      <div className="relative max-w-6xl mx-auto w-full pt-28 pb-20">
        {/* Brand label */}
        <p className="text-xs tracking-[0.35em] text-stone-500 uppercase mb-10">
          Bright Wire Creative &nbsp;/&nbsp; St. Petersburg, FL
        </p>

        {/* Main headline */}
        <h1 className="font-serif text-[clamp(3rem,8vw,6.5rem)] text-stone-50 leading-[1.05] mb-6">
          You were made
          <br />
          to make things.
        </h1>

        {/* Subheadline */}
        <p className="font-serif italic text-[clamp(1.5rem,3.5vw,2.5rem)] text-stone-400 mb-10 leading-snug">
          So why does it feel impossible?
        </p>

        {/* Thin rule */}
        <div className="w-12 h-px bg-gold mb-10" />

        {/* Body */}
        <p className="text-stone-400 text-lg leading-relaxed max-w-xl mb-14">
          Therapy and coaching for musicians, artists, writers, and creative
          professionals who are wired differently — and ready to stop fighting
          themselves.
        </p>

        {/* CTA */}
        <Link
          href="/contact"
          className="inline-flex items-center gap-4 bg-gold text-stone-950 px-9 py-4 text-xs tracking-[0.2em] uppercase font-semibold hover:bg-gold-light transition-colors"
        >
          Work With Me
          <span aria-hidden="true">→</span>
        </Link>
      </div>
    </section>
  );
}
