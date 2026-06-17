import Link from "next/link";

const offers = [
  {
    tag: "Individual Therapy",
    availability: "Florida residents only",
    comingSoon: false,
    title: "Deep, one-on-one therapeutic work",
    description:
      "Using ACT, mindfulness, and Buddhist psychology — adapted specifically for the creative mind. We get to the roots, not just the symptoms.",
  },
  {
    tag: "Coaching",
    availability: "Available anywhere in the US",
    comingSoon: false,
    title: "Practical tools for your creative life",
    description:
      "For creative professionals who want focused support around ADHD, creative productivity, and building a life around their calling. Not clinical therapy — an action-oriented partnership.",
  },
  {
    tag: "The Wired Creative Course",
    availability: "Online · Self-paced",
    comingSoon: true,
    title: "A self-paced online course",
    description:
      "Covers the psychology of the creative calling, ADHD and anxiety as creative forces, ACT tools for breaking through blocks, values clarification, and the fear of being seen — built so you can move through it on your own time.",
  },
  {
    tag: "The Wired Creative — 8 Weeks",
    availability: "Online · Runs twice per year",
    comingSoon: false,
    title: "A cohort-based group program",
    description:
      "For musicians, artists, and creative professionals with ADHD and anxiety. Eight weeks of structured support, community, and real change.",
  },
];

export default function OffersSection() {
  return (
    <section id="services" className="bg-stone-900 px-6 py-28 md:py-36">
      <div className="max-w-6xl mx-auto">
        {/* Section label */}
        <p className="text-xs tracking-[0.3em] text-stone-500 uppercase mb-8">
          05 — How We Can Work Together
        </p>

        <h2 className="font-serif text-[clamp(1.75rem,4vw,3.25rem)] text-stone-100 leading-tight mb-16">
          Find the right fit for where you are.
        </h2>

        <div className="grid md:grid-cols-2 gap-6 mb-14">
          {offers.map((offer, i) => (
            <div
              key={i}
              className={`relative bg-stone-950 border p-8 transition-colors group ${
                offer.comingSoon
                  ? "border-stone-700/50 opacity-80"
                  : "border-stone-800 hover:border-stone-700"
              }`}
            >
              <div className="flex items-start justify-between gap-4 mb-6">
                <span className="text-xs tracking-[0.2em] uppercase text-gold font-medium">
                  {offer.tag}
                </span>
                <div className="flex items-center gap-2 shrink-0">
                  {offer.comingSoon && (
                    <span className="text-[10px] tracking-[0.2em] uppercase border border-stone-600 text-stone-500 px-2 py-0.5">
                      Coming soon
                    </span>
                  )}
                  <span className="text-xs text-stone-600">
                    {offer.availability}
                  </span>
                </div>
              </div>
              <h3 className={`font-serif text-xl mb-4 leading-snug transition-colors ${
                offer.comingSoon
                  ? "text-stone-400"
                  : "text-stone-100 group-hover:text-gold"
              }`}>
                {offer.title}
              </h3>
              <p className="text-stone-400 text-base leading-relaxed">
                {offer.description}
              </p>
            </div>
          ))}
        </div>

        <Link
          href="/contact"
          className="inline-flex items-center gap-4 bg-gold text-stone-950 px-9 py-4 text-xs tracking-[0.2em] uppercase font-semibold hover:bg-gold-light transition-colors"
        >
          See All Options
          <span aria-hidden="true">→</span>
        </Link>
      </div>
    </section>
  );
}
