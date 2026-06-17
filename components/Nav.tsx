"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-stone-950/95 backdrop-blur-md border-b border-stone-800/60"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-5 flex items-center justify-between">
        <Link
          href="/"
          className="font-serif text-stone-100 text-lg tracking-wide hover:text-gold transition-colors"
        >
          Bright Wire Creative
        </Link>

        <div className="hidden md:flex items-center gap-8">
          <Link
            href="/about"
            className="text-xs tracking-[0.25em] uppercase text-stone-400 hover:text-stone-100 transition-colors"
          >
            About
          </Link>
          <Link
            href="/services"
            className="text-xs tracking-[0.25em] uppercase text-stone-400 hover:text-stone-100 transition-colors"
          >
            Services
          </Link>
          <Link
            href="/contact"
            className="text-xs tracking-[0.25em] uppercase border border-gold/40 text-gold px-5 py-2.5 hover:bg-gold/10 hover:border-gold/70 transition-all"
          >
            Work With Me
          </Link>
        </div>

        {/* Mobile CTA */}
        <Link
          href="/contact"
          className="md:hidden text-xs tracking-[0.2em] uppercase border border-gold/40 text-gold px-4 py-2 hover:bg-gold/10 transition-all"
        >
          Work With Me
        </Link>
      </div>
    </nav>
  );
}
