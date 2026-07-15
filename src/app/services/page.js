import Link from "next/link";

const services = [
  { icon: "🖥️", title: "Managed Endpoint Protection", desc: "24/7 endpoint detection and response across your entire fleet. Our SOC monitors, isolates, and remediates threats on workstations, servers, and mobile devices in real time." },
  { icon: "🎣", title: "Phishing Protection", desc: "Stop phishing attacks before they reach your users. Combines threat intelligence, URL scanning, brand monitoring, and automated takedown to neutralize phishing campaigns." },
  { icon: "🔓", title: "Breach Leak Monitoring", desc: "Continuous surveillance of the dark web, paste sites, and breach databases. Get alerted the moment your credentials, domains, or sensitive data appear in a leak." },
  { icon: "📊", title: "Infrastructure Monitoring", desc: "Managed Prometheus and Grafana stack for real-time observability. Custom dashboards, intelligent alerting, SLA tracking, and 24/7 coverage for your entire infrastructure." },
  { icon: "✉️", title: "Email Security", desc: "Enterprise-grade email protection with advanced threat filtering, DMARC/DKIM/SPF enforcement, attachment sandboxing, and anti-spoofing to secure your communication channels." },
  { icon: "☁️", title: "Cloud Firewall Management", desc: "Expert configuration and management of WAF, cloud firewalls, and network perimeter defense. Includes rule optimization, threat feed integration, and incident response." },
  { icon: "📚", title: "Security Awareness Training", desc: "Build a human firewall with engaging security training, automated phishing simulations, role-based learning paths, and measurable reporting to track improvement over time." },
];

export default function ServicesPage() {
  return (
    <section className="container-wide py-16 lg:py-24">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-4xl sm:text-5xl font-bold text-primary tracking-tight">Our <span className="text-accent">Services</span></h1>
        <p className="mt-4 text-lg text-muted">Beyond our products, we offer expert-managed security services to keep your organization protected around the clock.</p>
      </div>
      <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((s) => (
          <Link
            key={s.title}
            href={`/services/${s.title.toLowerCase().replace(/\s+/g, "-")}`}
            className="group border border-border rounded-xl p-6 hover:border-accent/40 transition-colors"
          >
            <span className="text-2xl block mb-3">{s.icon}</span>
            <h3 className="text-base font-semibold text-primary group-hover:text-accent transition-colors">{s.title}</h3>
            <p className="mt-2 text-sm text-muted leading-relaxed">{s.desc}</p>
          </Link>
        ))}
      </div>
      <div className="mt-12 text-center">
        <Link href="/contact" className="inline-flex items-center gap-2 bg-accent text-white px-6 py-3 text-sm font-semibold rounded-lg hover:bg-accent-dark transition-colors">Get in Touch</Link>
      </div>
    </section>
  );
}
