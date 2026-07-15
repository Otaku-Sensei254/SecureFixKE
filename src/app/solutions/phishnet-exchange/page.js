import Link from "next/link";

export default function PhishNetExchangePage() {
  return (
    <section className="container-wide py-16 lg:py-24">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <span className="text-4xl mb-4 block">🛡️</span>
          <h1 className="text-4xl sm:text-5xl font-bold text-primary tracking-tight">
            PhishNet <span className="text-accent">Exchange</span>
          </h1>
          <p className="mt-4 text-lg text-muted">
            Real-time phishing detection, threat intelligence, and URL scanning. The flagship product that powers SecureFix.KE&apos;s threat detection capabilities.
          </p>
          <ul className="mt-6 space-y-3">
            {[
              "URL scanning against 6 threat intelligence feeds",
              "Email & credential leak detection",
              "MITRE ATT&CK threat mapping",
              "Browser extension for real-time protection",
              "Team dashboard with SOC war-room view",
            ].map((f, i) => (
              <li key={i} className="flex items-start gap-2.5 text-sm text-muted">
                <svg className="w-4 h-4 text-safe shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                {f}
              </li>
            ))}
          </ul>
          <div className="mt-8 flex flex-wrap gap-4">
            <a href="http://localhost:3000/signup" className="bg-accent text-white px-5 py-2.5 text-sm font-semibold rounded-lg hover:bg-accent-dark transition-colors">Get Started</a>
            <Link href="/trial" className="border border-accent text-accent px-5 py-2.5 text-sm font-semibold rounded-lg hover:bg-accent/5 transition-colors">Start Free Trial</Link>
            <Link href="/resources/iocs" className="border border-border text-primary px-5 py-2.5 text-sm font-semibold rounded-lg hover:bg-surface transition-colors">Browse IOCs</Link>
          </div>
        </div>
        <div className="bg-gradient-to-br from-accent/5 to-blue-50 border border-border rounded-xl p-8 flex items-center justify-center min-h-[250px]">
          <span className="text-7xl opacity-80">🛡️</span>
        </div>
      </div>
    </section>
  );
}
