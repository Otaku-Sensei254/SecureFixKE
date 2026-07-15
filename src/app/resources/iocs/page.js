"use client";

import { useState, useEffect } from "react";

const API = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000";

export default function IOCsPage() {
  const [iocs, setIocs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${API}/api/iocs/`)
      .then((res) => res.json())
      .then((data) => {
        if (data.success) setIocs(data.iocs);
      })
      .catch(console.error)
      .finally(() => setLoading(false));
  }, []);

  return (
    <section className="container-wide py-16 lg:py-24">
      <div className="max-w-3xl">
        <h1 className="text-4xl sm:text-5xl font-bold text-primary tracking-tight">
          IOC <span className="text-accent">Database</span>
        </h1>
        <p className="mt-4 text-lg text-muted">
          Browse the latest indicators of compromise submitted by our community and security researchers.
        </p>
      </div>

      <div className="mt-10">
        {loading ? (
          <div className="text-center py-12 text-muted">Loading indicators...</div>
        ) : iocs.length === 0 ? (
          <div className="text-center py-12 text-muted">No IOCs found.</div>
        ) : (
          <div className="overflow-x-auto border border-border rounded-xl">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-surface border-b border-border">
                  <th className="text-left py-3.5 px-4 text-xs font-semibold text-muted uppercase tracking-wider">Type</th>
                  <th className="text-left py-3.5 px-4 text-xs font-semibold text-muted uppercase tracking-wider">Indicator</th>
                  <th className="text-left py-3.5 px-4 text-xs font-semibold text-muted uppercase tracking-wider">Tags</th>
                  <th className="text-left py-3.5 px-4 text-xs font-semibold text-muted uppercase tracking-wider">Country</th>
                  <th className="text-right py-3.5 px-4 text-xs font-semibold text-muted uppercase tracking-wider">Votes</th>
                </tr>
              </thead>
              <tbody>
                {iocs.map((ioc) => (
                  <tr key={ioc._id} className="border-b border-border last:border-b-0 hover:bg-surface/50 transition-colors">
                    <td className="py-3 px-4">
                      <span className="text-xs font-medium text-accent bg-accent/5 px-2 py-1 rounded">{ioc.indicatorType}</span>
                    </td>
                    <td className="py-3 px-4 font-mono text-xs text-primary">{ioc.ioc}</td>
                    <td className="py-3 px-4">
                      <div className="flex flex-wrap gap-1">
                        {(ioc.tags || []).map((tag, i) => (
                          <span key={i} className="text-xs text-muted bg-surface px-1.5 py-0.5 rounded">{tag}</span>
                        ))}
                      </div>
                    </td>
                    <td className="py-3 px-4 text-xs text-muted">{ioc.sourceCountry || "—"}</td>
                    <td className="py-3 px-4 text-right text-xs text-muted">
                      <span className="text-safe">▲ {ioc.upvotes || 0}</span>
                      {" "}
                      <span className="text-danger">▼ {ioc.downvotes || 0}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </section>
  );
}
