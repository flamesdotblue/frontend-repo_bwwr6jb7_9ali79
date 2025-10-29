import { Heart } from "lucide-react";

function ProgressBar({ value }) {
  return (
    <div className="w-full h-2 rounded-full bg-slate-200 overflow-hidden">
      <div
        className="h-full bg-red-600"
        style={{ width: `${Math.min(100, Math.max(0, value))}%` }}
      />
    </div>
  );
}

function CampaignCard({ image, title, location, raised, goal }) {
  const progress = Math.round((raised / goal) * 100);
  return (
    <div className="rounded-xl border border-slate-200 bg-white overflow-hidden hover:shadow-md transition-shadow">
      <div className="aspect-[4/3] w-full overflow-hidden">
        <img src={image} alt={title} className="h-full w-full object-cover" />
      </div>
      <div className="p-4">
        <p className="text-xs text-slate-500">{location}</p>
        <h3 className="mt-1 font-semibold text-slate-900 line-clamp-2">{title}</h3>
        <div className="mt-3">
          <ProgressBar value={progress} />
          <div className="mt-2 flex items-center justify-between text-sm text-slate-600">
            <span>
              NPR {raised.toLocaleString()} raised
            </span>
            <span className="text-slate-500">of NPR {goal.toLocaleString()}</span>
          </div>
        </div>
        <button className="mt-4 inline-flex items-center gap-2 w-full justify-center rounded-md bg-red-600 px-4 py-2 text-white font-medium hover:bg-red-700">
          <Heart className="h-4 w-4" /> Donate now
        </button>
      </div>
    </div>
  );
}

export default function CampaignGrid() {
  const campaigns = [
    {
      image:
        "https://images.unsplash.com/photo-1593113598332-cc7cbedca2bc?q=80&w=1600&auto=format&fit=crop",
      title: "Emergency medical fund for earthquake-affected families in Gorkha",
      location: "Gorkha, Nepal",
      raised: 650000,
      goal: 1000000,
    },
    {
      image:
        "https://images.unsplash.com/photo-1523731407965-2430cd12f5e4?q=80&w=1600&auto=format&fit=crop",
      title: "Scholarships for rural girls pursuing STEM education",
      location: "Karnali, Nepal",
      raised: 280000,
      goal: 500000,
    },
    {
      image:
        "https://images.unsplash.com/photo-1521503862171-67b9a95dadb1?q=80&w=1600&auto=format&fit=crop",
      title: "Rebuild a community learning center with internet access",
      location: "Sindhupalchowk, Nepal",
      raised: 1200000,
      goal: 1500000,
    },
    {
      image:
        "https://images.unsplash.com/photo-1533139502658-0198f920d8ae?q=80&w=1600&auto=format&fit=crop",
      title: "Clean water project for a remote mountain village",
      location: "Dolpa, Nepal",
      raised: 410000,
      goal: 800000,
    },
  ];

  return (
    <section id="campaigns" className="bg-slate-50 py-14 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">Featured campaigns</h2>
            <p className="mt-2 text-slate-600 text-sm sm:text-base">Verified stories from across Nepal and the diaspora.</p>
          </div>
          <a href="#" className="hidden sm:inline-flex rounded-md border border-slate-300 px-4 py-2 text-sm font-medium text-slate-700 hover:bg-white">View all</a>
        </div>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {campaigns.map((c) => (
            <CampaignCard key={c.title} {...c} />
          ))}
        </div>
      </div>
    </section>
  );
}
