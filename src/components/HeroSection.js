"use client";

import { useState } from "react";
import Link from "next/link";

const API = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000";

export default function HeroSection() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState(null);
  const [inputType, setInputType] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleScan = async (e) => {
    e.preventDefault();
    const trimmed = input.trim();
    if (!trimmed) return;

    const isUrl = trimmed.startsWith("http://") || trimmed.startsWith("https://");
    const isEmail = trimmed.includes("@") && !trimmed.includes("/");

    if (!isUrl && !isEmail) {
      setError("Enter a URL (with http://) or an email address");
      return;
    }

    setLoading(true);
    setError("");
    setResult(null);
    setInputType(isUrl ? "url" : "email");

    try {
      if (isUrl) {
        const res = await fetch(`${API}/api/link/analyze`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ url: trimmed }),
        });
        if (!res.ok) throw new Error("Scan failed");
        const data = await res.json();
        setResult(data);
      } else {
        const res = await fetch(`${API}/api/check/leak`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email: trimmed }),
        });
        if (!res.ok) throw new Error("Scan failed");
        const data = await res.json();
        setResult(data);
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-slate-50" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]" />
      <div className="container-wide relative py-24 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-accent/10 text-accent text-xs font-semibold rounded-full mb-6">
              <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
              Trusted by businesses across Kenya
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-primary leading-[1.1]">
              Your Digital Security{" "}
              <span className="text-accent">Fortress</span>
            </h1>
            <p className="mt-6 text-lg text-muted leading-relaxed max-w-lg">
              Protect your business from cyber threats with enterprise-grade
              security solutions. Real-time threat detection, infrastructure
              monitoring, and compliance — built for Kenyan organizations.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/trial"
                className="inline-flex items-center gap-2 bg-accent text-white px-6 py-3 text-sm font-semibold rounded-lg hover:bg-accent-dark transition-colors shadow-sm"
              >
                Start Free Trial
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 border border-border text-primary px-6 py-3 text-sm font-semibold rounded-lg hover:bg-surface transition-colors"
              >
                Book a Demo
              </Link>
            </div>
          </div>

          <div>
            <div className="bg-white border border-border rounded-xl shadow-sm p-6">
              <h3 className="text-sm font-semibold text-primary mb-1">Live Threat Scan</h3>
              <p className="text-xs text-muted mb-4">Enter a URL or email to see how SecureFix detects threats in real-time.</p>
              <form onSubmit={handleScan} className="flex gap-2">
                <input
                  type="text"
                  placeholder="https://example.com or user@example.com"
                  value={input}
                  onChange={(e) => { setInput(e.target.value); setError(""); }}
                  className="flex-1 px-4 py-2.5 text-sm border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-all"
                />
                <button
                  type="submit"
                  disabled={loading || !input.trim()}
                  className="px-5 py-2.5 bg-accent text-white text-sm font-medium rounded-lg hover:bg-accent-dark disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  {loading ? "Scanning..." : "Scan"}
                </button>
              </form>

              {error && (
                <div className="mt-4 p-3 bg-red-50 border border-red-200 rounded-lg text-sm text-danger">
                  {error}
                </div>
              )}

              {result && inputType === "url" && (
                <div className="mt-4 space-y-3">
                  {(() => {
                    const isUnsafeSSL = result.heuristicDetails?.sslValid === false;
                    const cardBg = isUnsafeSSL
                      ? "bg-red-50 border-red-200"
                      : result.riskLevel === "safe"
                      ? "bg-green-50 border-green-200"
                      : result.riskLevel === "low"
                      ? "bg-yellow-50 border-yellow-200"
                      : "bg-red-50 border-red-200";
                    const badgeStyle = isUnsafeSSL
                      ? "bg-red-200 text-red-800"
                      : result.riskLevel === "safe"
                      ? "bg-green-200 text-green-800"
                      : result.riskLevel === "low"
                      ? "bg-yellow-200 text-yellow-800"
                      : "bg-red-200 text-red-800";
                    const badgeLabel = isUnsafeSSL ? "UNSAFE" : result.riskLevel.toUpperCase();
                    return (
                      <>
                        <div className={`p-3 rounded-lg border text-sm ${cardBg}`}>
                          <div className="flex items-center justify-between mb-2">
                            <span className="font-semibold text-primary">{result.domain}</span>
                            <span className={`text-xs font-bold px-2 py-0.5 rounded ${badgeStyle}`}>
                              {badgeLabel}
                            </span>
                          </div>
                          <div className="flex items-center gap-2 text-muted">
                            <span className="text-xs">Risk Score: {result.riskScore}/100</span>
                            {result.signals?.length > 0 && (
                              <span className="text-xs">{result.signals.length} signal(s) detected</span>
                            )}
                          </div>
                          {result.heuristicDetails?.sslValid !== undefined && (
                            <div className="flex items-center gap-2 text-xs text-muted mt-1">
                              <span>SSL:</span>
                              <span className={result.heuristicDetails.sslValid ? "text-safe font-semibold" : "text-danger font-semibold"}>
                                {result.heuristicDetails.sslValid ? "Yes (VALID)" : "No (INVALID)"}
                              </span>
                            </div>
                          )}
                          {result.signals?.length > 0 && (
                            <ul className="mt-2 space-y-1">
                              {result.signals.slice(0, 3).map((s, i) => (
                                <li key={i} className="text-xs text-muted flex items-start gap-1.5">
                                  <span className="text-danger mt-0.5">•</span>
                                  {s}
                                </li>
                              ))}
                            </ul>
                          )}
                        </div>
                      </>
                    );
                  })()}

                  <Link
                    href="/resources/iocs"
                    className="flex items-center justify-center gap-1.5 text-sm text-accent font-medium hover:underline"
                  >
                    Browse more indicators of compromise →
                  </Link>
                </div>
              )}

              {result && inputType === "email" && (
                <div className={`mt-4 p-3 rounded-lg border text-sm ${
                  result.leaked
                    ? "bg-red-50 border-red-200"
                    : "bg-green-50 border-green-200"
                }`}>
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-semibold text-primary">{input}</span>
                    <span className={`text-xs font-bold px-2 py-0.5 rounded ${
                      result.leaked
                        ? "bg-red-200 text-red-800"
                        : "bg-green-200 text-green-800"
                    }`}>
                      {result.leaked ? "LEAKED" : "CLEAN"}
                    </span>
                  </div>
                  {result.leaked ? (
                    <div>
                      <p className="text-xs text-danger font-medium mb-2">{result.matches?.length || 0} breach(es) found</p>
                      {result.matches?.slice(0, 3).map((m, i) => (
                        <div key={i} className="text-xs text-muted flex items-start gap-1.5 mb-1">
                          <span className="text-danger mt-0.5">•</span>
                          <span>{m.field}: <strong>{m.value}</strong> — {m.sources?.join(", ")}</span>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <p className="text-xs text-safe">No breaches found for this email.</p>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
