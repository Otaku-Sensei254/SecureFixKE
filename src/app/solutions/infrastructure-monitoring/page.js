import Link from "next/link";

export default function InfraMonitoringPage() {
  return (
    <>
      <section className="container-wide py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-4xl mb-4 block">📊</span>
            <h1 className="text-4xl sm:text-5xl font-bold text-primary tracking-tight">
              Infrastructure <span className="text-accent">Monitoring</span>
            </h1>
            <p className="mt-4 text-lg text-muted">
              Real-time observability for your entire infrastructure. Powered by Prometheus and Grafana — managed and maintained by SecureFix.KE.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/trial"
                className="inline-flex items-center gap-2 bg-accent text-white px-5 py-2.5 text-sm font-semibold rounded-lg hover:bg-accent-dark transition-colors"
              >
                Start Free Trial
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 border border-border text-primary px-5 py-2.5 text-sm font-semibold rounded-lg hover:bg-surface transition-colors"
              >
                Request Demo
              </Link>
            </div>
          </div>
          <div className="bg-gradient-to-br from-accent/5 to-blue-50 border border-border rounded-xl p-8 flex items-center justify-center min-h-[250px]">
            <div className="text-center">
              <span className="text-6xl block mb-2">📈</span>
              <p className="text-sm text-muted">Prometheus + Grafana Stack</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-surface border-y border-border">
        <div className="container-wide py-16">
          <h2 className="text-2xl font-bold text-primary text-center mb-10">What You Get</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Prometheus Metrics", desc: "Collect and store time-series metrics from every server, container, and service in your infrastructure." },
              { title: "Grafana Dashboards", desc: "Beautiful, customizable dashboards for visualizing CPU, memory, disk, network, and application metrics." },
              { title: "Intelligent Alerting", desc: "Set up alert rules with Slack, email, or webhook notifications. Know about issues before your users do." },
              { title: "Uptime Monitoring", desc: "Track SLA compliance with automated uptime and latency checks from multiple geographic locations." },
              { title: "Infrastructure Mapping", desc: "Auto-discover services and dependencies across your stack with service graph visualization." },
              { title: "Managed Service", desc: "SecureFix.KE handles installation, configuration, updates, and scaling. You just consume the dashboards." },
            ].map((item) => (
              <div key={item.title} className="bg-white border border-border rounded-xl p-6">
                <h3 className="text-sm font-bold text-primary">{item.title}</h3>
                <p className="mt-2 text-sm text-muted leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container-wide py-16">
        <h2 className="text-2xl font-bold text-primary text-center mb-10">Common Metrics Tracked</h2>
        <div className="max-w-3xl mx-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-3 text-xs font-semibold text-muted uppercase tracking-wider">Category</th>
                <th className="text-left py-3 text-xs font-semibold text-muted uppercase tracking-wider">Metrics</th>
                <th className="text-right py-3 text-xs font-semibold text-muted uppercase tracking-wider">Retention</th>
              </tr>
            </thead>
            <tbody>
              {[
                { cat: "System", metrics: "CPU, Memory, Disk I/O, Network bandwidth", retention: "90 days" },
                { cat: "Database", metrics: "Query latency, connection pools, replication lag", retention: "90 days" },
                { cat: "Web Server", metrics: "Request rate, error rate, response time percentiles", retention: "30 days" },
                { cat: "Network", metrics: "Throughput, packet loss, connection states", retention: "30 days" },
                { cat: "Custom", metrics: "Application-specific metrics via Prometheus client libraries", retention: "Custom" },
              ].map((row) => (
                <tr key={row.cat} className="border-b border-border">
                  <td className="py-3 text-primary font-medium">{row.cat}</td>
                  <td className="py-3 text-muted">{row.metrics}</td>
                  <td className="py-3 text-muted text-right">{row.retention}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
}
