"use client";

import { useState } from "react";

type Status = "idle" | "sending" | "success" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(data as unknown as Record<string, string>).toString(),
      });

      if (res.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="py-16 text-center max-w-lg mx-auto">
        <div className="w-10 h-px bg-gold mx-auto mb-8" />
        <p className="font-serif italic text-2xl text-stone-200 mb-4">
          Thank you for reaching out.
        </p>
        <p className="text-stone-400 text-lg leading-relaxed">
          I&apos;ll be in touch within 1–2 business days.
        </p>
      </div>
    );
  }

  return (
    <form
      name="contact"
      method="POST"
      data-netlify="true"
      netlify-honeypot="bot-field"
      onSubmit={handleSubmit}
      className="space-y-7"
    >
      {/* Required hidden fields for Netlify */}
      <input type="hidden" name="form-name" value="contact" />

      {/* Honeypot — hidden from real users, catches bots */}
      <div className="hidden" aria-hidden="true">
        <label>
          Don&apos;t fill this out
          <input name="bot-field" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      {/* Name */}
      <div>
        <label
          htmlFor="name"
          className="block text-xs tracking-[0.2em] uppercase text-stone-500 mb-2"
        >
          Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          autoComplete="name"
          className="w-full bg-stone-900 border border-stone-700 text-stone-100 px-4 py-3.5 text-base placeholder:text-stone-600 focus:outline-none focus:border-gold/60 focus:ring-1 focus:ring-gold/20 transition-colors"
          placeholder="Your full name"
        />
      </div>

      {/* Email */}
      <div>
        <label
          htmlFor="email"
          className="block text-xs tracking-[0.2em] uppercase text-stone-500 mb-2"
        >
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          autoComplete="email"
          className="w-full bg-stone-900 border border-stone-700 text-stone-100 px-4 py-3.5 text-base placeholder:text-stone-600 focus:outline-none focus:border-gold/60 focus:ring-1 focus:ring-gold/20 transition-colors"
          placeholder="you@example.com"
        />
      </div>

      {/* Message */}
      <div>
        <label
          htmlFor="message"
          className="block text-xs tracking-[0.2em] uppercase text-stone-500 mb-2"
        >
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={6}
          className="w-full bg-stone-900 border border-stone-700 text-stone-100 px-4 py-3.5 text-base placeholder:text-stone-600 focus:outline-none focus:border-gold/60 focus:ring-1 focus:ring-gold/20 transition-colors resize-none"
          placeholder="Tell me a little about what's going on and what you're looking for."
        />
      </div>

      {/* Error message */}
      {status === "error" && (
        <p className="text-sm text-stone-400 border-l-2 border-stone-600 pl-4">
          Something went wrong. Try emailing directly at{" "}
          <a
            href="mailto:brandenbarnett@gmail.com"
            className="text-gold hover:text-gold-light underline underline-offset-2"
          >
            brandenbarnett@gmail.com
          </a>
        </p>
      )}

      {/* Submit */}
      <button
        type="submit"
        disabled={status === "sending"}
        className="inline-flex items-center gap-4 bg-gold text-stone-950 px-9 py-4 text-xs tracking-[0.2em] uppercase font-semibold hover:bg-gold-light transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {status === "sending" ? "Sending…" : "Send Message"}
        {status !== "sending" && <span aria-hidden="true">→</span>}
      </button>
    </form>
  );
}
