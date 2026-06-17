const items = [
  "You have a calling — music, writing, visual art, performance, entrepreneurship — and you feel it slipping further away every year you don't act on it.",
  "You've been diagnosed with ADHD, suspect you might have it, or just know your brain works differently than most people's.",
  "Anxiety shows up as perfectionism, procrastination, creative blocks, or the constant feeling that you're one bad performance away from being found out.",
  "You've tried therapy before and felt like your therapist didn't really get the creative life.",
  "You're tired of being told to be more consistent, more disciplined, more organized — as if the problem is that you're just not trying hard enough.",
  "You want to make things that matter, live a life that feels fully expressed, and stop spending your creative energy on the fear of making it.",
];

export default function WhoSection() {
  return (
    <section id="who" className="bg-stone-950 px-6 py-28 md:py-36">
      <div className="max-w-6xl mx-auto">
        {/* Section label */}
        <p className="text-xs tracking-[0.3em] text-stone-500 uppercase mb-8">
          02 — Who This Is For
        </p>

        <h2 className="font-serif text-[clamp(1.75rem,4vw,3.25rem)] text-stone-100 leading-tight mb-16">
          This is for you if:
        </h2>

        <ul className="space-y-0 max-w-3xl">
          {items.map((item, i) => (
            <li
              key={i}
              className="flex gap-6 py-7 border-b border-stone-800 last:border-0"
            >
              <span className="text-gold font-serif text-sm mt-1 shrink-0 select-none">
                {String(i + 1).padStart(2, "0")}
              </span>
              <p className="text-stone-300 text-lg leading-relaxed">{item}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
