import Link from "next/link";

const products = [
  {
    name: "PhishNet Exchange",
    href: "/solutions/phishnet-exchange",
    desc: "Real-time phishing detection, threat intelligence, and URL scanning powered by multiple threat feeds.",
    icon: "🛡️",
  },
  {
    name: "PhishNet Recon",
    href: "/solutions/phishnet-recon",
    desc: "OSINT gathering and reconnaissance tools for proactive threat discovery.",
    icon: "🔍",
  },
  {
    name: "Shinobi",
    href: "/solutions/shinobi",
    desc: "Advanced penetration testing framework for comprehensive security assessments.",
    icon: "⚔️",
  },
  {
    name: "HAKII",
    href: "/solutions/hakii",
    desc: "Mobile security platform protecting Android and iOS devices from threats.",
    icon: "📱",
  },
  {
    name: "Infrastructure Monitoring",
    href: "/solutions/infrastructure-monitoring",
    desc: "Real-time observability with Prometheus & Grafana dashboards and alerting.",
    icon: "📊",
  },
];

export default function ProductGrid() {
  return (
    <section className="container-wide py-20">
      <div className="text-center mb-14">
        <h2 className="text-3xl sm:text-4xl font-bold text-primary tracking-tight">
          One Platform. Complete Protection.
        </h2>
        <p className="mt-4 text-lg text-muted max-w-2xl mx-auto">
          A unified security ecosystem covering endpoints, networks, cloud infrastructure, and mobile devices.
        </p>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((p) => (
          <Link
            key={p.href}
            href={p.href}
            className="group relative border border-border rounded-xl p-6 hover:border-accent/40 hover:shadow-sm transition-all"
          >
            <span className="text-2xl mb-3 block">{p.icon}</span>
            <h3 className="text-base font-semibold text-primary group-hover:text-accent transition-colors">
              {p.name}
            </h3>
            <p className="mt-2 text-sm text-muted leading-relaxed">{p.desc}</p>
            <span className="mt-4 inline-flex items-center gap-1 text-sm text-accent font-medium opacity-0 group-hover:opacity-100 transition-opacity">
              Learn more
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}
