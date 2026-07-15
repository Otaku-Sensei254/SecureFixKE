"use client";

import { useState } from "react";
import Link from "next/link";

const solutions = [
  { name: "PhishNet Exchange", href: "/solutions/phishnet-exchange", desc: "Threat intelligence & phishing detection" },
  { name: "PhishNet Recon", href: "/solutions/phishnet-recon", desc: "Reconnaissance & OSINT gathering" },
  { name: "Shinobi", href: "/solutions/shinobi", desc: "Penetration testing framework" },
  { name: "HAKII", href: "/solutions/hakii", desc: "Mobile security platform" },
  { name: "Pentest Tools", href: "/solutions/pentest", desc: "Security assessment suite" },
  { name: "Infrastructure Monitoring", href: "/solutions/infrastructure-monitoring", desc: "Prometheus & Grafana observability" },
];

const resources = [
  { name: "Blog", href: "/resources", desc: "Security insights & updates" },
  { name: "Community", href: "/resources/community", desc: "Join the discussion" },
  { name: "Discussions", href: "/resources/discussions", desc: "Technical forums" },
  { name: "IOC Database", href: "/resources/iocs", desc: "Browse indicators of compromise" },
];

export default function Navbar() {
  const [open, setOpen] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-white/95 backdrop-blur-sm">
      <div className="container-wide flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2 font-bold text-xl tracking-tight text-primary">
          <span className="flex items-center justify-center w-8 h-8 bg-accent text-white rounded text-sm font-bold">S</span>
          SecureFix<span className="text-accent">.KE</span>
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          <Dropdown
            label="Solutions"
            open={open === "solutions"}
            onToggle={() => setOpen(open === "solutions" ? null : "solutions")}
            onClose={() => setOpen(null)}
          >
            <div className="grid grid-cols-2 gap-x-4 gap-y-2 p-4 w-[520px]">
              {solutions.map((s) => (
                <Link
                  key={s.href}
                  href={s.href}
                  className="group rounded-lg p-3 hover:bg-surface transition-colors"
                  onClick={() => setOpen(null)}
                >
                  <div className="font-medium text-sm text-primary group-hover:text-accent transition-colors">{s.name}</div>
                  <div className="text-xs text-muted mt-0.5">{s.desc}</div>
                </Link>
              ))}
            </div>
          </Dropdown>

          <NavLink href="/services">Services</NavLink>

          <Dropdown
            label="Resources"
            open={open === "resources"}
            onToggle={() => setOpen(open === "resources" ? null : "resources")}
            onClose={() => setOpen(null)}
          >
            <div className="p-3 w-64 space-y-1">
              {resources.map((r) => (
                <Link
                  key={r.href}
                  href={r.href}
                  className="block rounded-lg px-3 py-2.5 hover:bg-surface transition-colors"
                  onClick={() => setOpen(null)}
                >
                  <div className="font-medium text-sm text-primary hover:text-accent transition-colors">{r.name}</div>
                  <div className="text-xs text-muted mt-0.5">{r.desc}</div>
                </Link>
              ))}
            </div>
          </Dropdown>

          <NavLink href="/pricing">Pricing</NavLink>
          <NavLink href="/why-securefix">Why SecureFix</NavLink>
        </nav>

        <Link
          href="/trial"
          className="hidden lg:inline-flex items-center gap-2 bg-accent text-white px-5 py-2.5 text-sm font-medium rounded-lg hover:bg-accent-dark transition-colors"
        >
          Start Free Trial
        </Link>

        <button
          className="lg:hidden p-2 text-primary"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {mobileOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {mobileOpen && (
        <div className="lg:hidden border-t border-border bg-white">
          <div className="container-wide py-4 space-y-4">
            <div>
              <div className="text-xs font-semibold uppercase tracking-wider text-muted mb-2">Solutions</div>
              {solutions.map((s) => (
                <Link key={s.href} href={s.href} className="block py-2 text-sm text-primary hover:text-accent" onClick={() => setMobileOpen(false)}>{s.name}</Link>
              ))}
            </div>
            <NavMobileLink href="/services" label="Services" />
            <div>
              <div className="text-xs font-semibold uppercase tracking-wider text-muted mb-2">Resources</div>
              {resources.map((r) => (
                <Link key={r.href} href={r.href} className="block py-2 text-sm text-primary hover:text-accent" onClick={() => setMobileOpen(false)}>{r.name}</Link>
              ))}
            </div>
            <NavMobileLink href="/pricing" label="Pricing" />
            <NavMobileLink href="/why-securefix" label="Why SecureFix" />
            <Link href="/trial" className="block text-center bg-accent text-white px-5 py-3 text-sm font-medium rounded-lg" onClick={() => setMobileOpen(false)}>Start Free Trial</Link>
          </div>
        </div>
      )}
    </header>
  );
}

function NavLink({ href, children }) {
  return (
    <Link href={href} className="px-3 py-2 text-sm font-medium text-primary hover:text-accent transition-colors rounded-lg hover:bg-surface">
      {children}
    </Link>
  );
}

function NavMobileLink({ href, label }) {
  return (
    <Link href={href} className="block py-2 text-sm text-primary hover:text-accent">{label}</Link>
  );
}

function Dropdown({ label, children, open, onToggle, onClose }) {
  return (
    <div className="relative" onMouseEnter={onToggle} onMouseLeave={onClose}>
      <button className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-primary hover:text-accent transition-colors rounded-lg hover:bg-surface">
        {label}
        <svg className={`w-3.5 h-3.5 transition-transform ${open ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {open && (
        <div className="absolute top-full left-0 mt-1 bg-white border border-border rounded-xl shadow-lg">
          {children}
        </div>
      )}
    </div>
  );
}
