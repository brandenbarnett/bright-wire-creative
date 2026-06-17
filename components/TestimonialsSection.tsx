const testimonials = [
  {
    quote: "Testimonial coming soon.",
    name: "Client Name",
    detail: "Musician, St. Petersburg",
  },
  {
    quote: "Testimonial coming soon.",
    name: "Client Name",
    detail: "Visual Artist, Florida",
  },
  {
    quote: "Testimonial coming soon.",
    name: "Client Name",
    detail: "Songwriter & Entrepreneur",
  },
];

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="bg-stone-950 px-6 py-28 md:py-36">
      <div className="max-w-6xl mx-auto">
        {/* Section label */}
        <p className="text-xs tracking-[0.3em] text-stone-500 uppercase mb-8">
          04 — What Clients Say
        </p>

        <h2 className="font-serif text-[clamp(1.75rem,4vw,3.25rem)] text-stone-100 leading-tight mb-16">
          Real work. Real results.
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-stone-900 border border-stone-800 p-8 flex flex-col justify-between min-h-[260px]"
            >
              <p className="font-serif italic text-xl text-stone-400 leading-relaxed mb-8">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div>
                <div className="w-8 h-px bg-gold mb-4" />
                <p className="text-stone-300 text-sm font-medium">{t.name}</p>
                <p className="text-stone-600 text-xs tracking-[0.15em] uppercase mt-1">
                  {t.detail}
                </p>
              </div>
            </div>
          ))}
        </div>

        <p className="mt-8 text-stone-600 text-xs tracking-[0.2em] uppercase">
          Testimonials will be updated once gathered from current clients.
        </p>
      </div>
    </section>
  );
}
