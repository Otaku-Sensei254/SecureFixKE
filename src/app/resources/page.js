import Link from "next/link";

const sections = [
  { href: "/resources/community", icon: "👥", title: "Community", desc: "Join our community of security professionals. Share insights, ask questions, and collaborate." },
  { href: "/resources/discussions", icon: "💬", title: "Discussions", desc: "Technical discussions on threat intelligence, security tools, and best practices." },
  { href: "/resources/iocs", icon: "🔗", title: "IOC Database", desc: "Browse and search indicators of compromise submitted by our global community." },
];

export default function ResourcesPage() {
  return (
    <section className="container-wide py-16 lg:py-24">
      <div className="max-w-3xl">
        <h1 className="text-4xl sm:text-5xl font-bold text-primary tracking-tight">
          <span className="text-accent">Resources</span>
        </h1>
        <p className="mt-4 text-lg text-muted">Security insights, community discussions, and threat intelligence at your fingertips.</p>
      </div>
      <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {sections.map((s) => (
          <Link key={s.href} href={s.href} className="group border border-border rounded-xl p-6 hover:border-accent/40 hover:shadow-sm transition-all">
            <span className="text-2xl block mb-3">{s.icon}</span>
            <h3 className="text-base font-semibold text-primary group-hover:text-accent transition-colors">{s.title}</h3>
            <p className="mt-2 text-sm text-muted leading-relaxed">{s.desc}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}
