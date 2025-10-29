import { Shield, CheckCircle, Globe, CreditCard } from "lucide-react";

export default function TrustAndPayments() {
  const items = [
    {
      icon: Shield,
      title: "Verification first",
      desc:
        "All campaigns go through identity checks and document verification before going live.",
    },
    {
      icon: CheckCircle,
      title: "Transparency by design",
      desc:
        "Live progress, cost breakdowns, and post-updates ensure donors always know the impact.",
    },
    {
      icon: CreditCard,
      title: "Pay your way (Nepal + global)",
      desc:
        "eSewa, Khalti, FonePay, bank transfer, plus international cards and wallets.",
    },
    {
      icon: Globe,
      title: "Privacy respected",
      desc:
        "Control what you share. We protect personal data and never sell donor information.",
    },
  ];

  return (
    <section id="trust" className="bg-white py-14 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">Trust, transparency, and secure payments</h2>
          <p className="mt-3 text-slate-600">
            Built for Nepal with global standards. Your generosity deserves safety and clarity.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item) => (
            <div key={item.title} className="rounded-xl border border-slate-200 bg-slate-50 p-5">
              <div className="h-10 w-10 rounded-lg bg-red-600/10 text-red-700 grid place-items-center">
                <item.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-3 font-semibold text-slate-900">{item.title}</h3>
              <p className="mt-1 text-sm text-slate-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
