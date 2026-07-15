"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Footer() {
  const [year, setYear] = useState("2026");

  useEffect(() => {
    setYear(String(new Date().getFullYear()));
  }, []);

  return (
    <footer className="border-t border-border bg-surface mt-20">
      <div className="container-wide py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <Link href="/" className="text-lg font-bold text-primary">
              SecureFix<span className="text-accent">.KE</span>
            </Link>
            <p className="mt-3 text-sm text-muted leading-relaxed">
              Enterprise cybersecurity solutions for Kenyan businesses.
            </p>
          </div>
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-primary mb-4">Solutions</h4>
            <ul className="space-y-2.5">
              <li><FooterLink href="/solutions/phishnet-exchange">PhishNet Exchange</FooterLink></li>
              <li><FooterLink href="/solutions/phishnet-recon">PhishNet Recon</FooterLink></li>
              <li><FooterLink href="/solutions/shinobi">Shinobi</FooterLink></li>
              <li><FooterLink href="/solutions/hakii">HAKII</FooterLink></li>
            </ul>
          </div>
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-primary mb-4">Services</h4>
            <ul className="space-y-2.5">
              <li><FooterLink href="/services/managed-endpoint-protection">Endpoint Protection</FooterLink></li>
              <li><FooterLink href="/services/phishing-protection">Phishing Protection</FooterLink></li>
              <li><FooterLink href="/services/breach-leak-monitoring">Breach Leak Monitoring</FooterLink></li>
              <li><FooterLink href="/services/infrastructure-monitoring">Infrastructure Monitoring</FooterLink></li>
              <li><FooterLink href="/services/email-security">Email Security</FooterLink></li>
              <li><FooterLink href="/services/cloud-firewall-management">Cloud Firewall</FooterLink></li>
              <li><FooterLink href="/services/security-awareness-training">Security Training</FooterLink></li>
            </ul>
          </div>
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-primary mb-4">Resources</h4>
            <ul className="space-y-2.5">
              <li><FooterLink href="/resources">Blog</FooterLink></li>
              <li><FooterLink href="/resources/community">Community</FooterLink></li>
              <li><FooterLink href="/resources/discussions">Discussions</FooterLink></li>
              <li><FooterLink href="/resources/iocs">IOC Database</FooterLink></li>
              <li><FooterLink href="/submit-threat">Submit Threat</FooterLink></li>
            </ul>
          </div>
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-primary mb-4">Company</h4>
            <ul className="space-y-2.5">
              <li><FooterLink href="/why-securefix">Why SecureFix</FooterLink></li>
              <li><FooterLink href="/services">All Services</FooterLink></li>
              <li><FooterLink href="/pricing">Pricing</FooterLink></li>
              <li><FooterLink href="/contact">Contact Us</FooterLink></li>
              <li><FooterLink href="/legal/trial-agreement">Trial Agreement</FooterLink></li>
              <li><FooterLink href="/legal/terms-and-conditions">Terms &amp; Conditions</FooterLink></li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted">&copy; {year} SecureFix.KE. All rights reserved.</p>
          <div className="flex gap-4 text-xs text-muted">
            <Link href="/legal/privacy" className="hover:text-accent transition-colors">Privacy Policy</Link>
            <Link href="/legal/terms-and-conditions" className="hover:text-accent transition-colors">Terms of Use</Link>
            <Link href="/legal/trial-agreement" className="hover:text-accent transition-colors">Trial Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterLink({ href, children }) {
  return (
    <Link href={href} className="text-sm text-muted hover:text-accent transition-colors">
      {children}
    </Link>
  );
}
