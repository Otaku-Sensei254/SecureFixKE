"use client";

import { useState } from "react";
import Link from "next/link";

const API = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000";

const tiers = [
  {
    name: "Sentry",
    icon: "🛡️",
    tagline: "Essential endpoint protection",
    price: "KSh 800/user/mo",
    trial: "15 days free",
    target: "Startups, SMBs",
    features: [
      "PhishNet Exchange — URL scanning & leak check",
      "Email filtering & phishing protection",
      "Core antivirus & malware detection",
      "Device security (laptops & phones)",
      "Email support (9 AM – 5 PM)",
    ],
  },
  {
    name: "Sentinel",
    icon: "🦅",
    tagline: "Proactive threat management",
    price: "KSh 2,200/user/mo",
    trial: "15 days free",
    target: "Mid-Market, SACCOs",
    popular: true,
    features: [
      "Everything in Sentry, plus:",
      "Next-Gen AI behavioral malware detection",
      "Cloud firewall (Wi-Fi/LAN protection)",
      "Standard security audit reports",
      "Priority phone & chat support",
      "Minimum 15 seats",
    ],
  },
  {
    name: "Citadel",
    icon: "🏰",
    tagline: "Enterprise zero-trust architecture",
    price: "Custom pricing",
    trial: "Contact sales",
    target: "Banks, Large Enterprises",
    features: [
      "Everything in Sentinel, plus:",
      "Advanced threat sandboxing",
      "Dedicated corporate VPN & SASE",
      "24/7 dedicated SOC team",
      "CBK & ODPC compliance reporting",
      "Full infrastructure coverage",
      "Minimum 100 seats",
    ],
  },
];

const faqs = [
  {
    q: "What's included in the free trial?",
    a: "Sentry and Sentinel trials include full access to all features of each tier for 15 days. You can test PhishNet Exchange, email filtering, malware detection, and more. Additional modules can be activated during the trial at no extra cost.",
  },
  {
    q: "Is there a credit card required?",
    a: "No. The trial is completely free with no credit card required. We'll set up your environment within 24 hours of your request.",
  },
  {
    q: "What happens after the 15 days?",
    a: "Your trial will automatically expire. You can upgrade to a paid plan at any time during or after the trial. Your data and configurations will be preserved when you upgrade.",
  },
  {
    q: "How long does it take to get started?",
    a: "Once you submit your request, our team will provision your trial environment within 24 hours. You'll receive an email with login credentials and setup instructions.",
  },
  {
    q: "Can I upgrade from Sentry to Sentinel during the trial?",
    a: "Yes. You can switch between tiers during the trial period. Contact our team and we'll adjust your trial environment accordingly.",
  },
  {
    q: "Is there a minimum number of users for the trial?",
    a: "No minimum for Sentry. Sentinel trials require a minimum of 15 users to accurately test the full feature set. Citadel is by demo only.",
  },
];

export default function TrialPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    size: "",
    tier: "sentry",
    message: "",
    agreed: false,
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({ ...prev, [name]: type === "checkbox" ? checked : value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.agreed) {
      setError("Please agree to the Trial Agreement and Terms & Conditions.");
      return;
    }
    setLoading(true);
    setError("");
    try {
      const res = await fetch(`${API}/api/trial/request`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("Failed to submit trial request");
      setSubmitted(true);
    } catch (err) {
      setError(err.message || "Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className="container-wide py-24 text-center">
        <div className="max-w-lg mx-auto">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="w-8 h-8 text-safe" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h1 className="text-3xl font-bold text-primary">Request Received!</h1>
          <p className="mt-4 text-lg text-muted">
            Thank you for your interest in SecureFix.KE. Our team will review your request and get back to you within 24 hours with access credentials and setup instructions.
          </p>
          <p className="mt-4 text-sm text-muted">
            In the meantime, feel free to{" "}
            <Link href="/resources/iocs" className="text-accent hover:underline">
              browse our IOC database
            </Link>{" "}
            or{" "}
            <Link href="/contact" className="text-accent hover:underline">
              contact us
            </Link>{" "}
            with any questions.
          </p>
        </div>
      </div>
    );
  }

  return (
    <>
      <section className="container-wide py-16 lg:py-24">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-primary tracking-tight">
            Try SecureFix{" "}
            <span className="text-accent">Free for 15 Days</span>
          </h1>
          <p className="mt-4 text-lg text-muted max-w-2xl mx-auto">
            Total protection has never been easier. Take advantage of our free trial and explore the full capabilities of your chosen tier. No credit card required.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mt-16 items-start">
          <div>
            <h2 className="text-sm font-semibold uppercase tracking-wider text-primary mb-4">What&apos;s Included</h2>
            <ul className="space-y-3">
              {[
                "PhishNet Exchange — full URL scanning & leak detection",
                "Email filtering & phishing protection",
                "Next-gen antivirus & malware detection",
                "Device & endpoint security",
                "Ability to test additional modules during trial",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-muted">
                  <svg className="w-5 h-5 text-safe shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>

            <div className="mt-4 p-4 bg-amber-50 border border-amber-200 rounded-lg text-sm text-amber-800">
              <strong>Note:</strong> Citadel (Enterprise) is not available as a self-service trial.{" "}
              <Link href="/contact" className="text-accent hover:underline">Contact our team</Link> for a personalized demo.
            </div>

            <div className="mt-8 grid grid-cols-3 gap-4">
              {[
                { num: "1", label: "Submit Request" },
                { num: "2", label: "We Provision" },
                { num: "3", label: "Start Securing" },
              ].map((step) => (
                <div key={step.num} className="text-center">
                  <div className="w-10 h-10 bg-accent text-white rounded-full flex items-center justify-center mx-auto text-sm font-bold">
                    {step.num}
                  </div>
                  <p className="mt-2 text-xs font-medium text-primary">{step.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white border border-border rounded-xl p-6 shadow-sm">
            <h3 className="text-base font-semibold text-primary mb-4">Request a Free Trial</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-muted mb-1.5">Full Name *</label>
                  <input type="text" name="name" required value={form.name} onChange={handleChange} className="w-full px-3.5 py-2.5 text-sm border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent" />
                </div>
                <div>
                  <label className="block text-xs font-medium text-muted mb-1.5">Email Address *</label>
                  <input type="email" name="email" required value={form.email} onChange={handleChange} className="w-full px-3.5 py-2.5 text-sm border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent" />
                </div>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-muted mb-1.5">Phone Number</label>
                  <input type="tel" name="phone" value={form.phone} onChange={handleChange} className="w-full px-3.5 py-2.5 text-sm border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent" />
                </div>
                <div>
                  <label className="block text-xs font-medium text-muted mb-1.5">Company / Organization *</label>
                  <input type="text" name="company" required value={form.company} onChange={handleChange} className="w-full px-3.5 py-2.5 text-sm border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent" />
                </div>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-muted mb-1.5">Company Size</label>
                  <select name="size" value={form.size} onChange={handleChange} className="w-full px-3.5 py-2.5 text-sm border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent bg-white">
                    <option value="">Select size</option>
                    <option value="1-10">1–10 employees</option>
                    <option value="11-50">11–50 employees</option>
                    <option value="51-200">51–200 employees</option>
                    <option value="201-1000">201–1,000 employees</option>
                    <option value="1000+">1,000+ employees</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-medium text-muted mb-1.5">Tier Interested In *</label>
                  <select name="tier" required value={form.tier} onChange={handleChange} className="w-full px-3.5 py-2.5 text-sm border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent bg-white">
                    <option value="sentry">Sentry — Essential</option>
                    <option value="sentinel">Sentinel — Proactive</option>
                    <option value="citadel">Citadel — Enterprise (Demo)</option>
                  </select>
                </div>
              </div>
              <div>
                <label className="block text-xs font-medium text-muted mb-1.5">Message / Use Case</label>
                <textarea name="message" rows={3} value={form.message} onChange={handleChange} className="w-full px-3.5 py-2.5 text-sm border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent resize-none" placeholder="Tell us about your security needs..." />
              </div>
              <label className="flex items-start gap-3">
                <input type="checkbox" name="agreed" checked={form.agreed} onChange={handleChange} className="mt-1" />
                <span className="text-xs text-muted">
                  I agree to the{" "}
                  <Link href="/legal/trial-agreement" className="text-accent hover:underline">Trial Agreement</Link>{" "}
                  and{" "}
                  <Link href="/legal/terms-and-conditions" className="text-accent hover:underline">Terms &amp; Conditions</Link>.
                </span>
              </label>
              {error && <p className="text-sm text-danger">{error}</p>}
              <button type="submit" disabled={loading} className="w-full bg-accent text-white py-3 text-sm font-semibold rounded-lg hover:bg-accent-dark disabled:opacity-50 transition-colors">
                {loading ? "Submitting..." : "Request Free Trial"}
              </button>
              <p className="text-xs text-center text-muted">Confirmation will be emailed within 24 hours.</p>
            </form>
          </div>
        </div>
      </section>

      <section className="bg-surface border-y border-border">
        <div className="container-wide py-16">
          <h2 className="text-2xl font-bold text-primary text-center mb-10">Choose Your Trial Tier</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {tiers.map((tier) => (
              <div key={tier.name} className={`relative bg-white border rounded-xl p-6 ${tier.popular ? "border-accent ring-1 ring-accent" : "border-border"}`}>
                {tier.popular && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-accent text-white text-xs font-bold px-3 py-1 rounded-full">Most Popular</span>
                )}
                <span className="text-2xl mb-2 block">{tier.icon}</span>
                <h3 className="text-lg font-bold text-primary">{tier.name}</h3>
                <p className="text-xs text-muted mt-1">{tier.tagline}</p>
                <p className="text-xl font-bold text-primary mt-4">{tier.price}</p>
                <p className="text-xs text-accent font-semibold mt-1">{tier.trial}</p>
                <p className="text-xs text-muted mt-1">{tier.target}</p>
                <ul className="mt-4 space-y-2.5">
                  {tier.features.map((f, i) => (
                    <li key={i} className="text-xs text-muted flex items-start gap-2">
                      <svg className="w-4 h-4 text-safe shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container-wide py-16">
        <h2 className="text-2xl font-bold text-primary text-center mb-10">Frequently Asked Questions</h2>
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, i) => (
            <details key={i} className="group border border-border rounded-lg open:border-accent/40 transition-colors">
              <summary className="flex items-center justify-between px-5 py-4 text-sm font-semibold text-primary cursor-pointer list-none">
                {faq.q}
                <svg className="w-4 h-4 text-muted group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-5 pb-4">
                <p className="text-sm text-muted leading-relaxed">{faq.a}</p>
              </div>
            </details>
          ))}
        </div>
      </section>
    </>
  );
}
