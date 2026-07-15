"use client";

import { useState } from "react";
import Link from "next/link";

const plans = [
  {
    name: "Sentry",
    icon: "🛡️",
    tagline: "Essential endpoint protection",
    monthly: "KSh 800",
    annual: "KSh 7,200",
    period: "/user/mo",
    minSeats: "No minimum",
    target: "Startups, SMBs, Small NGOs",
    popular: false,
    features: [
      { name: "Core antivirus & antimalware", included: true },
      { name: "Email filtering & phishing protection", included: true },
      { name: "PhishNet Exchange — URL scanning", included: true },
      { name: "Leak checker & breach detection", included: true },
      { name: "Device security (laptops & phones)", included: true },
      { name: "Email support (9 AM – 5 PM)", included: true },
      { name: "Next-Gen AI behavioral detection", included: false },
      { name: "Cloud firewall (network protection)", included: false },
      { name: "Security audit reports", included: false },
      { name: "Priority phone & chat support", included: false },
      { name: "Infrastructure monitoring", included: false },
      { name: "Dedicated SOC team (24/7)", included: false },
      { name: "CBK & ODPC compliance reporting", included: false },
    ],
  },
  {
    name: "Sentinel",
    icon: "🦅",
    tagline: "Proactive threat management",
    monthly: "KSh 2,200",
    annual: "KSh 23,760",
    period: "/user/mo",
    minSeats: "Min. 15 users",
    target: "Mid-Market, IT Managers, SACCOs",
    popular: true,
    features: [
      { name: "Core antivirus & antimalware", included: true },
      { name: "Email filtering & phishing protection", included: true },
      { name: "PhishNet Exchange — URL scanning", included: true },
      { name: "Leak checker & breach detection", included: true },
      { name: "Device security (laptops & phones)", included: true },
      { name: "Email support (9 AM – 5 PM)", included: true },
      { name: "Next-Gen AI behavioral detection", included: true },
      { name: "Cloud firewall (network protection)", included: true },
      { name: "Security audit reports", included: true },
      { name: "Priority phone & chat support", included: true },
      { name: "Infrastructure monitoring", included: false },
      { name: "Dedicated SOC team (24/7)", included: false },
      { name: "CBK & ODPC compliance reporting", included: false },
    ],
  },
  {
    name: "Citadel",
    icon: "🏰",
    tagline: "Enterprise zero-trust architecture",
    monthly: "Custom",
    annual: "Custom",
    period: "",
    minSeats: "Min. 100 users",
    target: "Banks, Large Enterprises, Tier-1 NGOs",
    popular: false,
    features: [
      { name: "Core antivirus & antimalware", included: true },
      { name: "Email filtering & phishing protection", included: true },
      { name: "PhishNet Exchange — URL scanning", included: true },
      { name: "Leak checker & breach detection", included: true },
      { name: "Device security (laptops & phones)", included: true },
      { name: "Email support (9 AM – 5 PM)", included: true },
      { name: "Next-Gen AI behavioral detection", included: true },
      { name: "Cloud firewall (network protection)", included: true },
      { name: "Security audit reports", included: true },
      { name: "Priority phone & chat support", included: true },
      { name: "Infrastructure monitoring", included: true },
      { name: "Dedicated SOC team (24/7)", included: true },
      { name: "CBK & ODPC compliance reporting", included: true },
    ],
  },
];

const allFeatures = [
  { label: "Core antivirus & antimalware", key: 0 },
  { label: "Email filtering & phishing protection", key: 1 },
  { label: "PhishNet Exchange — URL scanning", key: 2 },
  { label: "Leak checker & breach detection", key: 3 },
  { label: "Device security (laptops & phones)", key: 4 },
  { label: "Email support (9 AM – 5 PM)", key: 5 },
  { label: "Next-Gen AI behavioral detection", key: 6 },
  { label: "Cloud firewall (network protection)", key: 7 },
  { label: "Security audit reports", key: 8 },
  { label: "Priority phone & chat support", key: 9 },
  { label: "Infrastructure monitoring (Prometheus & Grafana)", key: 10 },
  { label: "Dedicated SOC team (24/7)", key: 11 },
  { label: "CBK & ODPC compliance reporting", key: 12 },
];

export default function PricingPage() {
  const [annual, setAnnual] = useState(false);

  return (
    <>
      <section className="container-wide py-16 lg:py-24">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-primary tracking-tight">
            Simple, Transparent <span className="text-accent">Pricing</span>
          </h1>
          <p className="mt-4 text-lg text-muted">
            Flexible plans for every stage of growth. All prices in KES per user per month.
          </p>
        </div>

        <div className="flex items-center justify-center gap-3 mt-10">
          <span className={`text-sm font-medium ${!annual ? "text-primary" : "text-muted"}`}>Monthly</span>
          <button
            onClick={() => setAnnual(!annual)}
            className={`relative w-12 h-6 rounded-full transition-colors ${annual ? "bg-accent" : "bg-border"}`}
          >
            <span className={`absolute top-0.5 w-5 h-5 bg-white rounded-full shadow-sm transition-transform ${annual ? "translate-x-6" : "translate-x-0.5"}`} />
          </button>
          <span className={`text-sm font-medium ${annual ? "text-primary" : "text-muted"}`}>
            Annual <span className="text-safe text-xs">(Save ~25%)</span>
          </span>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mt-10">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative bg-white border rounded-xl p-6 flex flex-col ${
                plan.popular ? "border-accent ring-1 ring-accent shadow-sm" : "border-border"
              }`}
            >
              {plan.popular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-accent text-white text-xs font-bold px-3 py-1 rounded-full">
                  Most Popular
                </span>
              )}
              <span className="text-2xl mb-2 block">{plan.icon}</span>
              <h3 className="text-lg font-bold text-primary">{plan.name}</h3>
              <p className="text-xs text-muted mt-1">{plan.tagline}</p>
              <div className="mt-4">
                <span className="text-3xl font-bold text-primary">
                  {annual ? plan.annual : plan.monthly}
                </span>
                <span className="text-sm text-muted ml-1">{plan.period}</span>
              </div>
              <p className="text-xs text-muted mt-1">{plan.minSeats}</p>
              <p className="text-xs text-muted mt-0.5">{plan.target}</p>

              <div className="mt-6 space-y-3 flex-1">
                {plan.features.map((f, i) => (
                  <div key={i} className="flex items-start gap-2.5">
                    {f.included ? (
                      <svg className="w-4 h-4 text-safe shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    ) : (
                      <svg className="w-4 h-4 text-border shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    )}
                    <span className={`text-xs ${f.included ? "text-primary" : "text-muted"}`}>{f.name}</span>
                  </div>
                ))}
              </div>

              <div className="mt-6">
                {plan.name === "Citadel" ? (
                  <Link
                    href="/contact"
                    className="block text-center border border-accent text-accent py-3 text-sm font-semibold rounded-lg hover:bg-accent hover:text-white transition-colors"
                  >
                    Contact Sales
                  </Link>
                ) : (
                  <Link
                    href="/trial"
                    className="block text-center bg-accent text-white py-3 text-sm font-semibold rounded-lg hover:bg-accent-dark transition-colors"
                  >
                    Start Free Trial
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-surface border-y border-border">
        <div className="container-wide py-16">
          <h2 className="text-2xl font-bold text-primary text-center mb-10">Feature Comparison</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-3 px-4 text-xs font-semibold text-muted uppercase tracking-wider">Feature</th>
                  <th className="text-center py-3 px-4 text-xs font-semibold text-muted uppercase tracking-wider">Sentry</th>
                  <th className="text-center py-3 px-4 text-xs font-semibold text-muted uppercase tracking-wider bg-accent/5">Sentinel</th>
                  <th className="text-center py-3 px-4 text-xs font-semibold text-muted uppercase tracking-wider">Citadel</th>
                </tr>
              </thead>
              <tbody>
                {allFeatures.map((feat, i) => (
                  <tr key={i} className="border-b border-border last:border-b-0">
                    <td className="py-3 px-4 text-sm text-primary">{feat.label}</td>
                    {[0, 1, 2].map((tierIdx) => {
                      const included = plans[tierIdx].features[feat.key]?.included;
                      return (
                        <td key={tierIdx} className={`text-center py-3 px-4 ${tierIdx === 1 ? "bg-accent/5" : ""}`}>
                          {included ? (
                            <svg className="w-5 h-5 text-safe mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                          ) : (
                            <svg className="w-4 h-4 text-border mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                          )}
                        </td>
                      );
                    })}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </>
  );
}
