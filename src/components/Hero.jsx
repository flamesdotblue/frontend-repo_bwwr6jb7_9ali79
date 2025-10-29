import { Search, MapPin } from "lucide-react";

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-gradient-to-b from-red-50 to-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 lg:py-24 grid lg:grid-cols-2 gap-10 items-center">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full bg-white border border-red-200 px-3 py-1 text-xs text-red-700 mb-4">
            <span className="h-2 w-2 rounded-full bg-red-600" />
            Made for Nepal — by Nepalis
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Empower real change with Donate Nepal
          </h1>
          <p className="mt-4 text-lg text-slate-600">
            A transparent, community-first crowdfunding platform for medical needs, education, disaster relief, and local initiatives across Nepal.
          </p>

          <div className="mt-6 flex flex-col sm:flex-row gap-3">
            <a href="#campaigns" className="inline-flex justify-center items-center rounded-md bg-red-600 px-5 py-3 text-white font-medium hover:bg-red-700">
              Explore campaigns
            </a>
            <a href="#how-it-works" className="inline-flex justify-center items-center rounded-md border border-slate-300 px-5 py-3 text-slate-700 font-medium hover:bg-slate-50">
              How it works
            </a>
          </div>

          <div className="mt-8 grid grid-cols-2 sm:flex sm:flex-wrap gap-3 text-sm text-slate-600">
            <span className="inline-flex items-center gap-2"><MapPin className="h-4 w-4 text-red-600" /> Nationwide reach</span>
            <span className="inline-flex items-center gap-2"><Search className="h-4 w-4 text-red-600" /> Verified campaigns</span>
          </div>
        </div>

        <div className="relative">
          <div className="aspect-[4/3] w-full rounded-2xl bg-white shadow-xl border border-slate-100 overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1603314585442-c8ea755d8e38?q=80&w=1600&auto=format&fit=crop"
              alt="Nepal community support"
              className="h-full w-full object-cover"
              loading="eager"
            />
          </div>
          <div className="absolute -bottom-6 -left-6 hidden sm:block">
            <div className="rounded-xl bg-white shadow-lg border border-slate-100 p-4">
              <p className="text-sm font-medium text-slate-900">Trusted by thousands</p>
              <p className="text-xs text-slate-600">Local donors and the Nepali diaspora worldwide</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
