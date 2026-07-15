import Link from "next/link";

const products = [
  {
    name: "PhishNet Exchange",
    href: "/solutions/phishnet-exchange",
    tagline: "Threat Intelligence & Phishing Detection",
    desc: "Real-time URL scanning, leak detection, and threat intelligence powered by multiple threat feeds. Detect phishing, malware, and malicious domains before they reach your users.",
    icon: "🛡️",
    features: ["URL & email scanning", "Leak check against breach databases", "MITRE ATT&CK mapping", "Browser extension protection"],
  },
  {
    name: "PhishNet Recon",
    href: "/solutions/phishnet-recon",
    tagline: "OSINT & Reconnaissance",
    desc: "Proactive threat discovery through open-source intelligence gathering. Identify exposed assets, leaked credentials, and potential attack vectors targeting your organization.",
    icon: "🔍",
    features: ["OSINT data aggregation", "Dark web monitoring", "Attack surface mapping", "Credential leak detection"],
  },
  {
    name: "Shinobi",
    href: "/solutions/shinobi",
    tagline: "Penetration Testing Framework",
    desc: "Advanced security assessment suite for professional penetration testers. Comprehensive tools for vulnerability scanning, exploitation, and reporting.",
    icon: "⚔️",
    features: ["Automated scanning", "Manual exploitation tools", "Report generation", "Compliance mapping"],
  },
  {
    name: "HAKII",
    href: "/solutions/hakii",
    tagline: "Mobile Security Platform",
    desc: "Enterprise-grade mobile security for Android and iOS devices. Protect your workforce against mobile threats, malicious apps, and data exfiltration.",
    icon: "📱",
    features: ["Mobile threat detection", "App vulnerability scanning", "Device compliance", "Remote wipe & lockdown"],
  },
  {
    name: "Pentest Tools",
    href: "/solutions/pentest",
    tagline: "Security Assessment Suite",
    desc: "A collection of specialized tools for security assessments, vulnerability research, and red team operations. Regular updates with the latest techniques.",
    icon: "🔧",
    features: ["Vulnerability scanners", "Network analysis tools", "Web application testing", "Social engineering toolkits"],
  },
  {
    name: "Infrastructure Monitoring",
    href: "/solutions/infrastructure-monitoring",
    tagline: "Observability & Alerting",
    desc: "Real-time infrastructure monitoring powered by Prometheus and Grafana. Track system metrics, set up intelligent alerts, and visualize your entire stack.",
    icon: "📊",
    features: ["Prometheus metrics collection", "Grafana dashboards", "Intelligent alerting", "Uptime & SLA tracking"],
  },
];

export default function SolutionsPage() {
  return (
    <>
      <section className="container-wide py-16 lg:py-24">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-primary tracking-tight">
            Our <span className="text-accent">Solutions</span>
          </h1>
          <p className="mt-4 text-lg text-muted">
            A complete security ecosystem covering endpoints, networks, cloud infrastructure, and mobile devices.
          </p>
        </div>

        <div className="mt-16 space-y-12">
          {products.map((product, idx) => (
            <div
              key={product.href}
              className={`grid md:grid-cols-2 gap-8 items-center p-8 rounded-xl border border-border ${
                idx % 2 === 1 ? "md:grid-flow-dense" : ""
              }`}
            >
              <div className={idx % 2 === 1 ? "md:col-start-2" : ""}>
                <span className="text-3xl mb-2 block">{product.icon}</span>
                <h2 className="text-xl font-bold text-primary mt-2">{product.name}</h2>
                <p className="text-sm text-accent font-medium mt-1">{product.tagline}</p>
                <p className="text-sm text-muted mt-3 leading-relaxed">{product.desc}</p>
                <ul className="mt-4 space-y-2">
                  {product.features.map((f, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-sm text-muted">
                      <svg className="w-4 h-4 text-safe shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {f}
                    </li>
                  ))}
                </ul>
                <div className="mt-5 flex flex-wrap gap-3">
                  <Link
                    href={product.href}
                    className="inline-flex items-center gap-1.5 text-sm text-accent font-medium hover:underline"
                  >
                    Learn more →
                  </Link>
                  <a
                    href="http://localhost:3000/signup"
                    className="text-sm text-primary font-medium hover:underline"
                  >
                    Get Started
                  </a>
                  <Link
                    href="/trial"
                    className="text-sm text-accent font-medium hover:underline"
                  >
                    Free Trial
                  </Link>
                </div>
              </div>
              <div className={`bg-gradient-to-br from-accent/5 to-blue-50 rounded-lg p-8 flex items-center justify-center min-h-[200px] border border-border ${
                idx % 2 === 1 ? "md:col-start-1 md:row-start-1" : ""
              }`}>
                <span className="text-6xl opacity-80">{product.icon}</span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
