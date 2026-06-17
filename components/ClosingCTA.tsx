import Link from "next/link";

export default function ClosingCTA() {
  return (
    <section
      id="contact"
      className="relative bg-stone-950 px-6 py-28 md:py-40 overflow-hidden"
    >
      {/* Warm glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 50% 60%, rgba(200,145,58,0.07) 0%, transparent 65%)",
        }}
      />

      <div className="relative max-w-3xl mx-auto text-center">
        {/* Label */}
        <p className="text-xs tracking-[0.35em] text-gold uppercase mb-10">
          Bright Wire Creative
        </p>

        <h2 className="font-serif text-[clamp(2.25rem,5vw,4.5rem)] text-stone-50 leading-[1.1] mb-8">
          Ready to stop waiting?
        </h2>

        <div className="w-12 h-px bg-gold mx-auto mb-8" />

        <p className="text-stone-400 text-lg leading-relaxed mb-6 max-w-xl mx-auto">
          The creative life you want is not behind you. It&apos;s waiting on the
          other side of the work you haven&apos;t been able to do alone.
        </p>

        <p className="font-serif italic text-stone-300 text-xl mb-14">
          Let&apos;s do it together.
        </p>

        <Link
          href="/contact"
          className="inline-flex items-center gap-4 bg-gold text-stone-950 px-10 py-5 text-xs tracking-[0.25em] uppercase font-semibold hover:bg-gold-light transition-colors"
        >
          Schedule a Free Consultation
          <span aria-hidden="true">→</span>
        </Link>
      </div>
    </section>
  );
}
