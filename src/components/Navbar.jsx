import { Heart, User, LogIn, PlusCircle } from "lucide-react";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur bg-white/70 border-b border-emerald-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2 font-semibold text-emerald-900">
          <div className="h-9 w-9 rounded-lg bg-emerald-600 text-white grid place-items-center">
            <Heart className="h-5 w-5" />
          </div>
          <span className="text-lg">Donate Nepal</span>
        </a>

        <nav className="hidden md:flex items-center gap-6 text-sm text-emerald-700">
          <a href="#campaigns" className="hover:text-emerald-900">Campaigns</a>
          <a href="#create" className="hover:text-emerald-900">Start a campaign</a>
          <a href="#how-it-works" className="hover:text-emerald-900">How it works</a>
        </nav>

        <div className="flex items-center gap-2">
          <button className="inline-flex items-center gap-2 rounded-md border border-emerald-200 px-3 py-2 text-sm font-medium text-emerald-800 hover:bg-emerald-50">
            <LogIn className="h-4 w-4" />
            Sign in
          </button>
          <a href="#create" className="inline-flex items-center gap-2 rounded-md bg-emerald-600 px-3 py-2 text-sm font-medium text-white hover:bg-emerald-700">
            <PlusCircle className="h-4 w-4" />
            Start a campaign
          </a>
          <button className="ml-1 inline-flex items-center justify-center h-9 w-9 rounded-full border border-emerald-200 hover:bg-emerald-50">
            <User className="h-4 w-4 text-emerald-800" />
          </button>
        </div>
      </div>
    </header>
  );
}
