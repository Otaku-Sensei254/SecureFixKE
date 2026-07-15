import Link from "next/link";

const values = [
  { title: "Kenyan-built, Kenyan-first", desc: "We understand the unique cybersecurity challenges facing Kenyan organizations — from CBK compliance to the Kenya Data Protection Act." },
  { title: "Enterprise-grade, accessible", desc: "World-class security tools priced for the African market. From startups to tier-1 banks, we have a plan that fits." },
  { title: "End-to-end protection", desc: "One platform covering endpoints, networks, cloud infrastructure, and mobile. No more stitching together 10 different vendors." },
  { title: "24/7 Expertise", desc: "Our team of security professionals is always available. From our SOC to your boardroom, we speak security." },
];

export default function WhySecureFixPage() {
  return (
    <>
      <section className="container-wide py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl sm:text-5xl font-bold text-primary tracking-tight">
              Why <span className="text-accent">SecureFix.KE</span>
            </h1>
            <p className="mt-4 text-lg text-muted leading-relaxed">
              SecureFix.KE is a Kenyan cybersecurity division dedicated to protecting businesses across Africa. We combine global best practices with deep local knowledge of the regulatory landscape.
            </p>
            <p className="mt-4 text-sm text-muted">
              Founded by security professionals who understand the unique challenges facing Kenyan organizations, we deliver enterprise-grade protection at accessible prices.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/trial" className="bg-accent text-white px-5 py-2.5 text-sm font-semibold rounded-lg hover:bg-accent-dark transition-colors">Start Free Trial</Link>
              <Link href="/contact" className="border border-border text-primary px-5 py-2.5 text-sm font-semibold rounded-lg hover:bg-surface transition-colors">Contact Us</Link>
            </div>
          </div>
          <div className="bg-gradient-to-br from-accent/5 to-blue-50 border border-border rounded-xl p-8 flex items-center justify-center min-h-[250px]">
            <span className="text-7xl opacity-80">🇰🇪</span>
          </div>
        </div>
      </section>

      <section className="bg-surface border-y border-border">
        <div className="container-wide py-16">
          <h2 className="text-2xl font-bold text-primary text-center mb-10">What Sets Us Apart</h2>
          <div className="grid sm:grid-cols-2 gap-6">
            {values.map((v) => (
              <div key={v.title} className="bg-white border border-border rounded-xl p-6">
                <h3 className="text-sm font-bold text-primary">{v.title}</h3>
                <p className="mt-2 text-sm text-muted leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
