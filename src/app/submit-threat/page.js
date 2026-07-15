"use client";

import { useState } from "react";

const API = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000";

export default function SubmitThreatPage() {
  const [indicator, setIndicator] = useState("");
  const [type, setType] = useState("url");
  const [country, setCountry] = useState("");
  const [hashtags, setHashtags] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        setError("Please log in to submit a threat.");
        return;
      }
      const res = await fetch(`${API}/api/threats/submit`, {
        method: "POST",
        headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` },
        body: JSON.stringify({ indicator, type, country, hashtags }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Submission failed");
      setSubmitted(true);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className="container-wide py-24 text-center">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <svg className="w-8 h-8 text-safe" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h1 className="text-3xl font-bold text-primary">Threat Submitted</h1>
        <p className="mt-4 text-muted">Thank you for contributing to the security community. Your submission will be reviewed and published.</p>
      </div>
    );
  }

  return (
    <section className="container-wide py-16 lg:py-24">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-4xl sm:text-5xl font-bold text-primary tracking-tight">Submit <span className="text-accent">Threat</span></h1>
        <p className="mt-4 text-lg text-muted">Share a security threat, phishing URL, or malicious indicator with the community.</p>

        <form onSubmit={handleSubmit} className="mt-10 bg-white border border-border rounded-xl p-6 shadow-sm space-y-4">
          <div>
            <label className="block text-xs font-medium text-muted mb-1.5">Indicator *</label>
            <input type="text" required value={indicator} onChange={(e) => setIndicator(e.target.value)} placeholder="URL, IP, domain, or hash" className="w-full px-3.5 py-2.5 text-sm border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent" />
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-medium text-muted mb-1.5">Type *</label>
              <select value={type} onChange={(e) => setType(e.target.value)} className="w-full px-3.5 py-2.5 text-sm border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent bg-white">
                <option value="url">URL</option>
                <option value="ip">IP Address</option>
                <option value="domain">Domain</option>
                <option value="hash">File Hash</option>
                <option value="email">Email</option>
              </select>
            </div>
            <div>
              <label className="block text-xs font-medium text-muted mb-1.5">Source Country</label>
              <input type="text" value={country} onChange={(e) => setCountry(e.target.value)} placeholder="e.g., KE, CN, RU" className="w-full px-3.5 py-2.5 text-sm border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent" />
            </div>
          </div>
          <div>
            <label className="block text-xs font-medium text-muted mb-1.5">Tags (space-separated)</label>
            <input type="text" value={hashtags} onChange={(e) => setHashtags(e.target.value)} placeholder="#phishing #malware" className="w-full px-3.5 py-2.5 text-sm border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent" />
          </div>
          {error && <p className="text-sm text-danger">{error}</p>}
          <button type="submit" disabled={loading} className="w-full bg-accent text-white py-3 text-sm font-semibold rounded-lg hover:bg-accent-dark disabled:opacity-50 transition-colors">
            {loading ? "Submitting..." : "Submit Threat"}
          </button>
        </form>
      </div>
    </section>
  );
}
