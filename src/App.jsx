import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import CampaignGrid from "./components/CampaignGrid";
import CreateCampaign from "./components/CreateCampaign";

function App() {
  return (
    <div className="min-h-screen bg-white text-emerald-950">
      <Navbar />
      <main>
        <Hero />
        <CampaignGrid />
        <CreateCampaign />
        <section id="how-it-works" className="py-16 sm:py-24 bg-emerald-50">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold">How it works</h2>
            <p className="mt-3 max-w-2xl mx-auto text-emerald-800/80">
              Create, verify, and launch in a few guided steps. Donors can contribute using local and international methods with full transparency and privacy.
            </p>
            <div className="mt-8 inline-flex rounded-full border border-emerald-200 bg-white px-4 py-2 text-sm text-emerald-800">
              Secure payments • eSewa • Khalti • FonePay • Cards & Wallets
            </div>
          </div>
        </section>
      </main>
      <footer className="border-t border-emerald-100 py-8 bg-gradient-to-b from-white to-emerald-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-sm text-emerald-800/80 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p>
            © {new Date().getFullYear()} Donate Nepal. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-emerald-900">Privacy</a>
            <a href="#" className="hover:text-emerald-900">Terms</a>
            <a href="#" className="hover:text-emerald-900">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
