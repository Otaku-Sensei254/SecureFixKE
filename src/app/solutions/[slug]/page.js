import Link from "next/link";

const productData = {
  "phishnet-recon": {
    icon: "🔍",
    name: "PhishNet Recon",
    tagline: "OSINT & Reconnaissance",
    desc: "Proactive threat discovery through open-source intelligence gathering. Identify exposed assets, leaked credentials, and potential attack vectors targeting your organization before they can be exploited.",
    features: ["OSINT data aggregation from 50+ sources", "Dark web monitoring & credential leak detection", "Attack surface mapping & discovery", "Automated reconnaissance scheduling", "Exportable reports for compliance"],
  },
  shinobi: {
    icon: "⚔️",
    name: "Shinobi",
    tagline: "Penetration Testing Framework",
    desc: "Advanced security assessment suite for professional penetration testers. Comprehensive tools for vulnerability scanning, exploitation, and detailed reporting.",
    features: ["Automated vulnerability scanning", "Manual exploitation toolkit", "Comprehensive report generation", "OWASP Top 10 & WSTG mapping", "Collaborative team workspace"],
  },
  hakii: {
    icon: "📱",
    name: "HAKII",
    tagline: "Mobile Security Platform",
    desc: "Enterprise-grade mobile security for Android and iOS devices. Protect your workforce against mobile threats, malicious applications, and data exfiltration.",
    features: ["Real-time mobile threat detection", "App vulnerability scanning & analysis", "Device compliance & policy enforcement", "Remote wipe and lockdown capabilities", "BYOD security & containerization"],
  },
  pentest: {
    icon: "🔧",
    name: "Pentest Tools",
    tagline: "Security Assessment Suite",
    desc: "A collection of specialized tools for security assessments, vulnerability research, and red team operations. Regularly updated with the latest techniques.",
    features: ["Network vulnerability scanners", "Web application testing tools", "Wireless security assessment", "Social engineering toolkits", "Reporting & evidence management"],
  },
};

export async function generateStaticParams() {
  return Object.keys(productData).map((slug) => ({ slug }));
}

export default async function SolutionPage({ params }) {
  const { slug } = await params;
  const p = productData[slug];

  if (!p) {
    return (
      <section className="container-wide py-24 text-center">
        <h1 className="text-2xl font-bold text-primary">Solution not found</h1>
        <p className="mt-2 text-muted">The page you&apos;re looking for doesn&apos;t exist.</p>
        <Link href="/solutions" className="mt-4 inline-block text-accent hover:underline">View all solutions</Link>
      </section>
    );
  }

  return (
    <section className="container-wide py-16 lg:py-24">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <span className="text-4xl mb-4 block">{p.icon}</span>
          <p className="text-sm text-accent font-semibold uppercase tracking-wider">{p.tagline}</p>
          <h1 className="text-4xl sm:text-5xl font-bold text-primary tracking-tight mt-2">{p.name}</h1>
          <p className="mt-4 text-lg text-muted leading-relaxed">{p.desc}</p>
          <ul className="mt-6 space-y-3">
            {p.features.map((f, i) => (
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
            <Link href="/solutions" className="border border-border text-primary px-5 py-2.5 text-sm font-semibold rounded-lg hover:bg-surface transition-colors">View All Solutions</Link>
          </div>
        </div>
        <div className="bg-gradient-to-br from-accent/5 to-blue-50 border border-border rounded-xl p-8 flex items-center justify-center min-h-[250px]">
          <span className="text-7xl opacity-80">{p.icon}</span>
        </div>
      </div>
    </section>
  );
}
