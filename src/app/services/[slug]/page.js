import Link from "next/link";

const serviceData = {
  "managed-endpoint-protection": {
    icon: "🖥️",
    name: "Managed Endpoint Protection",
    tagline: "Endpoint Detection & Response",
    desc: "24/7 endpoint detection and response across your entire fleet. Our SOC monitors, isolates, and remediates threats on workstations, servers, and mobile devices in real time.",
    features: [
      "Real-time endpoint monitoring & threat detection",
      "Automated isolation of compromised devices",
      "Ransomware rollback & file recovery",
      "Cross-platform support (Windows, macOS, Linux, mobile)",
      "Monthly executive summary & threat briefings",
    ],
  },
  "phishing-protection": {
    icon: "🎣",
    name: "Phishing Protection",
    tagline: "Anti-Phishing & Threat Intelligence",
    desc: "Stop phishing attacks before they reach your users. Combines threat intelligence, URL scanning, brand monitoring, and automated takedown to neutralize phishing campaigns.",
    features: [
      "Real-time URL & domain threat scoring",
      "Brand impersonation monitoring & takedown",
      "Integration with PhishNet Exchange intelligence feeds",
      "Automated email & gateway policy updates",
      "Monthly phishing campaign analysis reports",
    ],
  },
  "breach-leak-monitoring": {
    icon: "🔓",
    name: "Breach Leak Monitoring",
    tagline: "Credential & Data Leak Surveillance",
    desc: "Continuous surveillance of the dark web, paste sites, and breach databases. Get alerted the moment your credentials, domains, or sensitive data appear in a leak.",
    features: [
      "Dark web & paste site crawling",
      "Credential leak alerts via email, SMS & dashboard",
      "Historical breach database lookup (10B+ records)",
      "Domain & email alias monitoring",
      "Compliance-ready incident reporting",
    ],
  },
  "infrastructure-monitoring": {
    icon: "📊",
    name: "Infrastructure Monitoring",
    tagline: "Prometheus & Grafana Observability",
    desc: "Managed Prometheus and Grafana stack for real-time observability. Custom dashboards, intelligent alerting, SLA tracking, and 24/7 coverage for your entire infrastructure.",
    features: [
      "Managed Prometheus & Grafana deployment",
      "Custom dashboard design per environment",
      "Intelligent alerting with PagerDuty/Slack/Email integration",
      "SLA tracking & uptime monitoring",
      "24/7 NOC escalation for critical alerts",
    ],
  },
  "email-security": {
    icon: "✉️",
    name: "Email Security",
    tagline: "Secure Email Gateway & Filtering",
    desc: "Enterprise-grade email protection with advanced threat filtering, DMARC/DKIM/SPF enforcement, attachment sandboxing, and anti-spoofing to secure your communication channels.",
    features: [
      "Advanced spam & malware filtering",
      "DMARC/DKIM/SPF configuration & monitoring",
      "Attachment sandboxing & URL detonation",
      "BEC & impersonation attack detection",
      "Email encryption & DLP policy enforcement",
    ],
  },
  "cloud-firewall-management": {
    icon: "☁️",
    name: "Cloud Firewall Management",
    tagline: "WAF & Network Perimeter Defense",
    desc: "Expert configuration and management of WAF, cloud firewalls, and network perimeter defense. Includes rule optimization, threat feed integration, and incident response.",
    features: [
      "WAF rule tuning & optimization",
      "Cloud firewall policy management (AWS, Azure, GCP)",
      "Threat feed integration & IP reputation blocking",
      "DDoS mitigation & rate limiting configuration",
      "Quarterly firewall audit & rule cleanup",
    ],
  },
  "security-awareness-training": {
    icon: "📚",
    name: "Security Awareness Training",
    tagline: "Staff Training & Phishing Simulations",
    desc: "Build a human firewall with engaging security training, automated phishing simulations, role-based learning paths, and measurable reporting to track improvement over time.",
    features: [
      "Automated phishing simulation campaigns",
      "Role-based security training modules",
      "Real-time staff risk scoring",
      "Interactive learning & gamified assessments",
      "Quarterly improvement reports & benchmarks",
    ],
  },
};

export async function generateStaticParams() {
  return Object.keys(serviceData).map((slug) => ({ slug }));
}

export default async function ServicePage({ params }) {
  const { slug } = await params;
  const s = serviceData[slug];

  if (!s) {
    return (
      <section className="container-wide py-24 text-center">
        <h1 className="text-2xl font-bold text-primary">Service not found</h1>
        <p className="mt-2 text-muted">The page you&apos;re looking for doesn&apos;t exist.</p>
        <Link href="/services" className="mt-4 inline-block text-accent hover:underline">View all services</Link>
      </section>
    );
  }

  return (
    <section className="container-wide py-16 lg:py-24">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <span className="text-4xl mb-4 block">{s.icon}</span>
          <p className="text-sm text-accent font-semibold uppercase tracking-wider">{s.tagline}</p>
          <h1 className="text-4xl sm:text-5xl font-bold text-primary tracking-tight mt-2">{s.name}</h1>
          <p className="mt-4 text-lg text-muted leading-relaxed">{s.desc}</p>
          <ul className="mt-6 space-y-3">
            {s.features.map((f, i) => (
              <li key={i} className="flex items-start gap-2.5 text-sm text-muted">
                <svg className="w-4 h-4 text-safe shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                {f}
              </li>
            ))}
          </ul>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/contact" className="bg-accent text-white px-5 py-2.5 text-sm font-semibold rounded-lg hover:bg-accent-dark transition-colors">Get Started</Link>
            <Link href="/trial" className="border border-accent text-accent px-5 py-2.5 text-sm font-semibold rounded-lg hover:bg-accent/5 transition-colors">Start Free Trial</Link>
            <Link href="/services" className="border border-border text-primary px-5 py-2.5 text-sm font-semibold rounded-lg hover:bg-surface transition-colors">View All Services</Link>
          </div>
        </div>
        <div className="bg-gradient-to-br from-accent/5 to-blue-50 border border-border rounded-xl p-8 flex items-center justify-center min-h-[250px]">
          <span className="text-7xl opacity-80">{s.icon}</span>
        </div>
      </div>
    </section>
  );
}
