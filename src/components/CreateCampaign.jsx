import { Shield, CheckCircle, FileText } from "lucide-react";

export default function CreateCampaign() {
  const steps = [
    {
      icon: FileText,
      title: "Tell your story",
      desc: "Set a goal, add photos, and explain how funds will be used.",
    },
    {
      icon: Shield,
      title: "Verify identity",
      desc: "Upload ID and supporting documents for quick verification.",
    },
    {
      icon: CheckCircle,
      title: "Launch and share",
      desc: "Go live and share with friends, community, and the diaspora.",
    },
  ];

  return (
    <section id="create" className="relative py-16 sm:py-24">
      <div className="absolute inset-0 pointer-events-none">
        <div className="mx-auto max-w-7xl h-full px-4 sm:px-6 lg:px-8">
          <div className="h-48 sm:h-56 rounded-3xl bg-gradient-to-r from-emerald-600 to-emerald-700 blur-2xl opacity-10" />
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
        <div className="rounded-3xl border border-emerald-100 bg-white overflow-hidden">
          <div className="bg-gradient-to-r from-emerald-600 to-emerald-700 px-6 sm:px-10 py-10">
            <div className="inline-flex items-center gap-2 rounded-full bg-amber-400/20 text-amber-900 px-3 py-1 text-xs">
              <span className="h-2 w-2 rounded-full bg-amber-400" />
              Start in minutes
            </div>
            <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-white">Create your campaign</h2>
            <p className="mt-2 text-emerald-50/90 max-w-2xl">
              Your story matters. Raise funds securely with transparency and privacy controls built in.
            </p>
          </div>

          <div className="px-6 sm:px-10 py-10 grid md:grid-cols-2 gap-10">
            <div>
              <div className="grid sm:grid-cols-3 gap-4">
                {steps.map((s) => (
                  <div key={s.title} className="rounded-xl border border-emerald-100 bg-emerald-50/50 p-4">
                    <div className="h-10 w-10 rounded-lg bg-emerald-600/10 text-emerald-700 grid place-items-center">
                      <s.icon className="h-5 w-5" />
                    </div>
                    <h3 className="mt-3 font-semibold text-emerald-950">{s.title}</h3>
                    <p className="mt-1 text-sm text-emerald-800/80">{s.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-emerald-900">Campaign title</label>
                  <input type="text" className="mt-1 w-full rounded-md border border-emerald-200 bg-white px-3 py-2 text-emerald-900 placeholder-emerald-800/50 focus:outline-none focus:ring-2 focus:ring-amber-400" placeholder="E.g., Emergency medical support for..." />
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-emerald-900">Funding goal (NPR)</label>
                    <input type="number" className="mt-1 w-full rounded-md border border-emerald-200 bg-white px-3 py-2 text-emerald-900 placeholder-emerald-800/50 focus:outline-none focus:ring-2 focus:ring-amber-400" placeholder="500000" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-emerald-900">Location</label>
                    <input type="text" className="mt-1 w-full rounded-md border border-emerald-200 bg-white px-3 py-2 text-emerald-900 placeholder-emerald-800/50 focus:outline-none focus:ring-2 focus:ring-amber-400" placeholder="City, District" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-emerald-900">Story</label>
                  <textarea rows={4} className="mt-1 w-full rounded-md border border-emerald-200 bg-white px-3 py-2 text-emerald-900 placeholder-emerald-800/50 focus:outline-none focus:ring-2 focus:ring-amber-400" placeholder="Share the background, how funds will be used, and timelines." />
                </div>
                <div className="flex items-center gap-2">
                  <input id="verify" type="checkbox" className="h-4 w-4 rounded border-emerald-300 text-emerald-600 focus:ring-amber-400" />
                  <label htmlFor="verify" className="text-sm text-emerald-800/90">I’m ready to submit ID and documents for verification</label>
                </div>
                <button type="button" className="w-full sm:w-auto inline-flex items-center justify-center rounded-md bg-emerald-600 px-5 py-3 text-white font-medium hover:bg-emerald-700">Continue</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
