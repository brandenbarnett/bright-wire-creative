import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "About Branden Barnett | Bright Wire Creative",
  description:
    "Licensed psychotherapist, songwriter, and musician based in St. Petersburg, Florida. Specializing in creativity, ADHD, and the people who are wired differently.",
};

export default function AboutPage() {
  return (
    <>
      <Nav />
      <main>
        {/* ── Opening ── */}
        <section className="relative min-h-[60vh] flex flex-col justify-end px-6 pt-40 pb-24 bg-stone-950 overflow-hidden">
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse at 30% 50%, rgba(41,37,34,0.5) 0%, transparent 65%)",
            }}
          />
          <div className="relative max-w-6xl mx-auto w-full">
            <p className="text-xs tracking-[0.35em] text-stone-500 uppercase mb-10">
              Bright Wire Creative &nbsp;/&nbsp; About
            </p>
            <h1 className="font-serif text-[clamp(2.5rem,6vw,5.5rem)] text-stone-50 leading-[1.08] max-w-4xl">
              I know what it costs
              <br />
              to follow a calling.
            </h1>
          </div>
        </section>

        {/* ── Intro ── */}
        <section className="bg-stone-900 px-6 py-24 md:py-32">
          <div className="max-w-6xl mx-auto grid lg:grid-cols-[1fr_2fr] gap-16 lg:gap-24">
            {/* Sticky label column */}
            <div className="lg:pt-2">
              <p className="text-xs tracking-[0.3em] text-stone-500 uppercase mb-6">
                01 — Who I Am
              </p>
              {/*
                HEADSHOT PLACEHOLDER
                When your photo is ready:
                1. Drop the file into /public/ (e.g. /public/branden-headshot.jpg)
                2. Replace this entire block with:
                   <Image
                     src="/branden-headshot.jpg"
                     alt="Branden Barnett"
                     width={480}
                     height={640}
                     className="w-full h-auto"
                     priority
                   />
                   (import Image from "next/image" at the top of the file)
              */}
              <div className="relative mt-8 lg:mt-0">
                <div className="aspect-[3/4] w-full max-w-xs mx-auto lg:max-w-none bg-stone-800 border border-stone-700/50 flex flex-col items-center justify-center gap-3 p-6">
                  <div className="w-10 h-10 rounded-full border border-stone-600 flex items-center justify-center">
                    <span className="text-stone-600 text-lg">↑</span>
                  </div>
                  <p className="text-stone-600 text-xs tracking-[0.2em] uppercase text-center">
                    Studio headshot
                    <br />
                    coming soon
                  </p>
                </div>
                <div className="absolute -bottom-4 -right-4 w-full h-full border border-gold/20 -z-10" />
              </div>
            </div>

            {/* Copy column */}
            <div className="space-y-6 text-stone-400 text-lg leading-relaxed max-w-2xl">
              <p className="text-stone-200 text-xl leading-relaxed font-medium">
                I&apos;m Branden Barnett — a licensed psychotherapist, songwriter,
                and musician based in St. Petersburg, Florida.
              </p>
              <p>
                For the last 15 years I&apos;ve worked clinically with creative
                people: musicians, writers, visual artists, performers, and
                entrepreneurs who are extraordinarily gifted and extraordinarily
                stuck. I&apos;ve watched people with real talent hold themselves
                back from the work they were made to do — not because they lacked
                ability, but because anxiety, ADHD, perfectionism, and fear got
                there first.
              </p>
              <p className="text-stone-300 font-medium">
                I also know this from the inside.
              </p>
            </div>
          </div>
        </section>

        {/* ── Personal story ── */}
        <section className="bg-stone-950 px-6 py-24 md:py-32">
          <div className="max-w-6xl mx-auto grid lg:grid-cols-[1fr_2fr] gap-16 lg:gap-24">
            <div className="lg:pt-2">
              <p className="text-xs tracking-[0.3em] text-stone-500 uppercase">
                02 — The Inside View
              </p>
            </div>

            <div className="space-y-6 text-stone-400 text-lg leading-relaxed max-w-2xl">
              <p>
                I&apos;ve spent over 20 years as a songwriter and performer.
                I&apos;ve felt the pull of a calling so strong it kept me up at
                night, and I&apos;ve felt the weight of a life that made following
                it feel impossible. I&apos;ve sat in the studio at 2am with
                something real on the line and felt the fear try to talk me out of
                it. I&apos;ve written songs about the things I couldn&apos;t say
                any other way.
              </p>
              <p>I still do.</p>
            </div>
          </div>
        </section>

        {/* ── The dual life — pivotal pull quote ── */}
        <section className="bg-stone-900 px-6 py-24 md:py-32">
          <div className="max-w-6xl mx-auto">
            <div className="max-w-3xl mx-auto lg:mx-0 lg:ml-[calc(100%/3+2rem)]">
              <div className="border-l-2 border-gold pl-8 mb-14">
                <p className="font-serif italic text-[clamp(1.25rem,2.5vw,1.875rem)] text-stone-200 leading-snug">
                  That dual life — therapist and artist — is not incidental to the
                  work I do with clients. It is the work.
                </p>
              </div>
              <div className="space-y-6 text-stone-400 text-lg leading-relaxed">
                <p>
                  When you sit across from me, you&apos;re not working with someone
                  who studied creativity from the outside. You&apos;re working with
                  someone who has lived the paradox: the brain that makes you
                  extraordinary and exhausting at the same time, the calling that
                  feels like the most important thing in your life and the most
                  terrifying, the gap between who you are in your best moments and
                  who you are at 3pm on a Tuesday when nothing is working.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── Approach + Background ── */}
        <section className="bg-stone-950 px-6 py-24 md:py-32">
          <div className="max-w-6xl mx-auto space-y-24">

            {/* My Approach */}
            <div className="grid lg:grid-cols-[1fr_2fr] gap-16 lg:gap-24">
              <div className="lg:pt-2">
                <p className="text-xs tracking-[0.3em] text-stone-500 uppercase">
                  03 — My Approach
                </p>
              </div>
              <div className="max-w-2xl">
                <h2 className="font-serif text-[clamp(1.5rem,3vw,2.5rem)] text-stone-100 leading-tight mb-8">
                  Working with the brain you have.
                </h2>
                <div className="space-y-5 text-stone-400 text-lg leading-relaxed">
                  <p>
                    I draw primarily on Acceptance and Commitment Therapy (ACT),
                    mindfulness, and Buddhist psychology — frameworks that were
                    practically built for the creative mind. Instead of trying to
                    eliminate anxiety or fix your ADHD, we learn to work with the
                    way your brain actually functions.
                  </p>
                  <p>
                    We get clear on what matters most to you. We build toward that,
                    directly and honestly, without pretending the hard parts
                    aren&apos;t hard.
                  </p>
                </div>
              </div>
            </div>

            {/* Thin divider */}
            <div className="w-full h-px bg-stone-800" />

            {/* My Background */}
            <div className="grid lg:grid-cols-[1fr_2fr] gap-16 lg:gap-24">
              <div className="lg:pt-2">
                <p className="text-xs tracking-[0.3em] text-stone-500 uppercase">
                  04 — My Background
                </p>
              </div>
              <div className="max-w-2xl">
                <h2 className="font-serif text-[clamp(1.5rem,3vw,2.5rem)] text-stone-100 leading-tight mb-8">
                  Credentials, training, and the rest.
                </h2>
                <div className="space-y-5 text-stone-400 text-lg leading-relaxed">
                  <p>
                    I&apos;m a licensed psychotherapist (LMHC) with a
                    specialization in creativity and ADHD. I&apos;ve trained in ACT
                    and mindfulness-based approaches and have spent over a decade
                    working with creative professionals in private practice.
                  </p>
                  <p>
                    I&apos;m also the songwriter and driving force behind{" "}
                    <em className="text-stone-300 not-italic font-medium">
                      Ghost Shirt
                    </em>
                    , released on Anyway Records, and a solo artist with over 20
                    years of recorded work. I record and write from a professional
                    studio in St. Petersburg, Florida, where I live with my family.
                  </p>
                </div>

                {/* Credential chips */}
                <div className="mt-10 flex flex-wrap gap-3">
                  {[
                    "LMHC — Florida",
                    "ACT-trained",
                    "ADHD specialist",
                    "Mindfulness-based approaches",
                  ].map((cred) => (
                    <span
                      key={cred}
                      className="text-xs tracking-[0.15em] uppercase border border-stone-700 text-stone-500 px-3 py-1.5"
                    >
                      {cred}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
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
              Let&apos;s Work Together
            </p>
            <h2 className="font-serif text-[clamp(2rem,4.5vw,3.75rem)] text-stone-50 leading-[1.1] mb-6">
              Ready when you are.
            </h2>
            <div className="w-12 h-px bg-gold mx-auto mb-8" />
            <p className="text-stone-400 text-lg leading-relaxed mb-12 max-w-xl mx-auto">
              If any of this sounds like the support you&apos;ve been looking for,
              I&apos;d love to connect. A free consultation is the place to start.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-4 bg-gold text-stone-950 px-10 py-5 text-xs tracking-[0.25em] uppercase font-semibold hover:bg-gold-light transition-colors"
            >
              Work With Me
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
