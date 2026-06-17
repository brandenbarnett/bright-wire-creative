import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-stone-900 border-t border-stone-800 px-6 py-12">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
          {/* Brand */}
          <div>
            <p className="font-serif text-stone-100 text-lg mb-1">
              Bright Wire Creative
            </p>
            <p className="text-stone-500 text-sm">
              Therapy &amp; Coaching for Creative Professionals
            </p>
          </div>

          {/* Details */}
          <div className="text-right space-y-1">
            <p className="text-stone-500 text-sm">St. Petersburg, Florida</p>
            <p className="text-stone-600 text-xs">
              Licensed Psychotherapist &nbsp;·&nbsp; FL License # pending
            </p>
            <Link
              href="mailto:brandenbarnett@gmail.com"
              className="text-gold text-xs hover:text-gold-light transition-colors"
            >
              brandenbarnett@gmail.com
            </Link>
          </div>
        </div>

        <div className="mt-10 pt-8 border-t border-stone-800/60 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <p className="text-stone-600 text-xs">
            © {new Date().getFullYear()} Bright Wire Creative. All rights
            reserved.
          </p>
          <p className="text-stone-700 text-xs">
            This site does not constitute a therapeutic relationship. For mental
            health emergencies, call 988.
          </p>
        </div>
      </div>
    </footer>
  );
}
