"use client";

import { useState } from "react";

const API = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", company: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSent(true);
  };

  if (sent) {
    return (
      <div className="container-wide py-24 text-center">
        <div className="max-w-lg mx-auto">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="w-8 h-8 text-safe" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h1 className="text-3xl font-bold text-primary">Message Sent!</h1>
          <p className="mt-4 text-muted">We&apos;ll get back to you within 24 hours.</p>
        </div>
      </div>
    );
  }

  return (
    <section className="container-wide py-16 lg:py-24">
      <div className="grid lg:grid-cols-2 gap-12">
        <div>
          <h1 className="text-4xl sm:text-5xl font-bold text-primary tracking-tight">
            Get in <span className="text-accent">Touch</span>
          </h1>
          <p className="mt-4 text-lg text-muted">Have a question about our products or services? Ready to secure your organization? Reach out and our team will respond within 24 hours.</p>
          <div className="mt-8 space-y-4 text-sm text-muted">
            <div className="flex items-center gap-3">
              <span className="text-accent font-bold">Email:</span>
              <a href="mailto:sales@securefix.ke" className="hover:text-accent">sales@securefix.ke</a>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-accent font-bold">Phone:</span>
              <span>+254 (0) 700 000 000</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-accent font-bold">Hours:</span>
              <span>Mon–Fri, 8 AM – 6 PM EAT</span>
            </div>
          </div>
        </div>
        <div className="bg-white border border-border rounded-xl p-6 shadow-sm">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-medium text-muted mb-1.5">Full Name *</label>
                <input type="text" required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="w-full px-3.5 py-2.5 text-sm border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent" />
              </div>
              <div>
                <label className="block text-xs font-medium text-muted mb-1.5">Email *</label>
                <input type="email" required value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className="w-full px-3.5 py-2.5 text-sm border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent" />
              </div>
            </div>
            <div>
              <label className="block text-xs font-medium text-muted mb-1.5">Company</label>
              <input type="text" value={form.company} onChange={(e) => setForm({ ...form, company: e.target.value })} className="w-full px-3.5 py-2.5 text-sm border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent" />
            </div>
            <div>
              <label className="block text-xs font-medium text-muted mb-1.5">Message *</label>
              <textarea rows={4} required value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} className="w-full px-3.5 py-2.5 text-sm border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent resize-none" />
            </div>
            <button type="submit" className="w-full bg-accent text-white py-3 text-sm font-semibold rounded-lg hover:bg-accent-dark transition-colors">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
}
