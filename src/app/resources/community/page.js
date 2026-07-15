"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const API = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000";

const dummyPosts = [
  {
    id: 1,
    username: "CyberWarrior",
    timestamp: "2025-05-24T08:32:00Z",
    content:
      "Just received a phishing email pretending to be from PayPal. Be careful!",
    tags: ["#phishing", "#paypal", "#email"],
    likes: 12,
    comments: 1,
  },
  {
    id: 2,
    username: "SecOpsQueen",
    timestamp: "2025-05-24T09:15:00Z",
    content: "New spear-phishing tactic spotted targeting finance teams.",
    tags: ["#spearphishing", "#finance", "#payload"],
    likes: 25,
    comments: 0,
  },
  {
    id: 3,
    username: "ByteKnight",
    timestamp: "2025-05-24T10:02:00Z",
    content: "Amazon scam alert. Users receiving fake order confirmations.",
    tags: ["#amazon", "#fakeorder", "#scam"],
    likes: 7,
    comments: 0,
  },
];

function ScamBusterFeed({ limit = 5 }) {
  const [reports, setReports] = useState([]);
  const [sbLoading, setSbLoading] = useState(true);

  useEffect(() => {
    fetch(`${API}/api/link/scambuster`)
      .then((r) => r.json())
      .then((d) => setReports(d.reports?.slice(0, limit) || []))
      .catch(() => {})
      .finally(() => setSbLoading(false));
  }, [limit]);

  return (
    <div className="space-y-3">
      <h3 className="text-xs font-semibold uppercase tracking-wider text-muted">
        ScamBuster Kenya Reports
      </h3>
      {sbLoading ? (
        <p className="text-xs text-muted">Loading reports...</p>
      ) : reports.length === 0 ? (
        <p className="text-xs text-muted">No recent reports.</p>
      ) : (
        <div className="space-y-2">
          {reports.map((r) => (
            <div
              key={r.id}
              className="border border-border rounded-lg p-3 bg-white"
            >
              <a
                href={`https://scambuster.co.ke/check/${encodeURIComponent(r.identifier)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-mono text-primary hover:text-accent transition-colors block mb-1.5 break-all"
              >
                {r.identifier}
              </a>
              <div className="flex flex-wrap items-center gap-2 text-xs">
                <span
                  className={`inline-block px-1.5 py-0.5 text-[0.6rem] font-semibold uppercase tracking-wider border ${
                    r.scam_type === "phishing"
                      ? "border-red-300 text-red-600 bg-red-50"
                      : r.scam_type === "fake-lottery"
                      ? "border-amber-300 text-amber-600 bg-amber-50"
                      : r.scam_type === "investment"
                      ? "border-amber-300 text-amber-600 bg-amber-50"
                      : r.scam_type === "romance"
                      ? "border-blue-300 text-blue-600 bg-blue-50"
                      : "border-gray-300 text-gray-500 bg-gray-50"
                  }`}
                >
                  {r.scam_type}
                </span>
                {r.amount_lost > 0 && (
                  <span className="text-red-500 font-semibold">
                    KSh {Number(r.amount_lost).toLocaleString()}
                  </span>
                )}
                <span className="text-muted ml-auto">
                  {(() => {
                    if (!r.created_at) return "";
                    const diff = Date.now() - new Date(r.created_at).getTime();
                    const days = Math.floor(diff / 86400000);
                    if (days < 1) return "Today";
                    if (days === 1) return "Yesterday";
                    if (days < 30) return `${days}d ago`;
                    return `${Math.floor(days / 30)}mo ago`;
                  })()}
                </span>
              </div>
            </div>
          ))}
        </div>
      )}
      <a
        href="https://scambuster.co.ke/browse"
        target="_blank"
        rel="noopener noreferrer"
        className="block text-xs text-accent text-center border border-border rounded-lg py-2 hover:bg-surface transition-colors"
      >
        View all on ScamBuster →
      </a>
    </div>
  );
}

export default function CommunityPage() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showSidebar, setShowSidebar] = useState(false);

  useEffect(() => {
    fetch(`${API}/api/threats/`)
      .then((r) => r.json())
      .then((d) => {
        if (d.success && d.threats?.length > 0) setPosts(d.threats);
      })
      .catch(() => {})
      .finally(() => setLoading(false));
  }, []);

  const displayPosts = posts.length > 0 ? posts : dummyPosts;

  return (
    <section className="container-wide py-16 lg:py-24">
      <div className="flex items-center justify-between mb-10">
        <div className="max-w-3xl">
          <h1 className="text-4xl sm:text-5xl font-bold text-primary tracking-tight">
            <span className="text-accent">Community</span>
          </h1>
          <p className="mt-4 text-lg text-muted">
            Join security professionals and researchers in the SecureFix
            community. Share insights, report threats, and stay informed.
          </p>
        </div>
        <button
          className="lg:hidden border border-border text-primary px-3 py-2 rounded-lg text-sm hover:bg-surface"
          onClick={() => setShowSidebar(!showSidebar)}
        >
          ☰
        </button>
      </div>

      <div className="flex gap-8 items-start">
        <div className="flex-1 min-w-0">
          {loading && posts.length === 0 ? (
            <div className="text-center py-12 text-muted">
              Loading community posts...
            </div>
          ) : (
            <div className="space-y-4">
              {displayPosts.map((post) => (
                <div
                  key={post.id || post._id}
                  className="border border-border rounded-xl p-5 bg-white"
                >
                  <div className="flex items-center gap-2 text-xs text-muted mb-3">
                    <span className="text-accent font-semibold">
                      {post.username || post.type || "Threat"}
                    </span>
                    <span>•</span>
                    <span>
                      {new Date(
                        post.timestamp || post.createdAt
                      ).toLocaleDateString()}
                    </span>
                  </div>
                  <p className="text-sm text-primary leading-relaxed">
                    {post.content || post.indicator}
                  </p>
                  {(post.tags || post.hashtags) && (
                    <div className="mt-3 flex flex-wrap gap-1.5">
                      {(post.tags || (post.hashtags || "").split(" ")).map(
                        (t, i) => (
                          <span
                            key={i}
                            className="text-xs text-muted bg-surface px-2 py-0.5 rounded"
                          >
                            {t}
                          </span>
                        )
                      )}
                    </div>
                  )}
                  {post.likes !== undefined && (
                    <div className="mt-3 flex items-center gap-4 text-xs text-muted border-t border-border pt-3">
                      <span>👍 {post.likes}</span>
                      <span>💬 {post.comments || 0}</span>
                      <span>🔁 Share</span>
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>

        <div
          className={`w-72 shrink-0 ${
            showSidebar ? "block" : "hidden"
          } lg:block`}
        >
          <div className="lg:sticky lg:top-24 space-y-6">
            <div className="border border-border rounded-xl p-5 bg-white">
              <ScamBusterFeed limit={5} />
            </div>
            <div className="border border-border rounded-xl p-5 bg-white">
              <Link
                href="/resources/iocs"
                className="block text-center text-sm text-accent font-semibold border border-accent/30 rounded-lg py-2.5 hover:bg-accent/5 transition-colors"
              >
                Browse IOC Database
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
