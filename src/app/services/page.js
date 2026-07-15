import Link from "next/link";

const services = [
  { icon: "🛡️", title: "Managed SOC", desc: "24/7 security operations center monitoring your infrastructure. Our team of analysts monitors, detects, and responds to threats in real-time." },
  { icon: "🔍", title: "Incident Response", desc: "Rapid containment and remediation when a breach occurs. We help you investigate, contain, eradicate, and recover from security incidents." },
  { icon: "📋", title: "Compliance Audits", desc: "Comprehensive security assessments against CBK guidelines, Kenya Data Protection Act (ODPC), and international standards." },
  { icon: "📊", title: "Infrastructure Monitoring", desc: "Managed Prometheus and Grafana stack for real-time observability. Custom dashboards, alerting, and SLA tracking." },
  { icon: "🎯", title: "Penetration Testing", desc: "Simulated attacks against your systems to identify vulnerabilities before real attackers do. Web, mobile, network, and social engineering." },
  { icon: "📚", title: "Security Training", desc: "Awareness and technical training for your team. Phishing simulations, secure coding practices, and incident response drills." },
];

export default function ServicesPage() {
  return (
    <section className="container-wide py-16 lg:py-24">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-4xl sm:text-5xl font-bold text-primary tracking-tight">Our <span className="text-accent">Services</span></h1>
        <p className="mt-4 text-lg text-muted">Beyond our products, we offer expert security services to keep your organization protected.</p>
      </div>
      <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((s) => (
          <div key={s.title} className="border border-border rounded-xl p-6 hover:border-accent/40 transition-colors">
            <span className="text-2xl block mb-3">{s.icon}</span>
            <h3 className="text-base font-semibold text-primary">{s.title}</h3>
            <p className="mt-2 text-sm text-muted leading-relaxed">{s.desc}</p>
          </div>
        ))}
      </div>
      <div className="mt-12 text-center">
        <Link href="/contact" className="inline-flex items-center gap-2 bg-accent text-white px-6 py-3 text-sm font-semibold rounded-lg hover:bg-accent-dark transition-colors">Get in Touch</Link>
      </div>
    </section>
  );
}
