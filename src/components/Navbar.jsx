import { Heart, User, LogIn, PlusCircle } from "lucide-react";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur bg-white/70 border-b border-slate-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2 font-semibold text-slate-900">
          <div className="h-9 w-9 rounded-lg bg-red-600 text-white grid place-items-center">
            <Heart className="h-5 w-5" />
          </div>
          <span className="text-lg">Donate Nepal</span>
        </a>

        <nav className="hidden md:flex items-center gap-6 text-sm text-slate-600">
          <a href="#campaigns" className="hover:text-slate-900">Campaigns</a>
          <a href="#how-it-works" className="hover:text-slate-900">How it works</a>
          <a href="#trust" className="hover:text-slate-900">Trust & Safety</a>
        </nav>

        <div className="flex items-center gap-2">
          <button className="inline-flex items-center gap-2 rounded-md border border-slate-300 px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50">
            <LogIn className="h-4 w-4" />
            Sign in
          </button>
          <button className="inline-flex items-center gap-2 rounded-md bg-red-600 px-3 py-2 text-sm font-medium text-white hover:bg-red-700">
            <PlusCircle className="h-4 w-4" />
            Start a campaign
          </button>
          <button className="ml-1 inline-flex items-center justify-center h-9 w-9 rounded-full border border-slate-300 hover:bg-slate-50">
            <User className="h-4 w-4 text-slate-700" />
          </button>
        </div>
      </div>
    </header>
  );
}
