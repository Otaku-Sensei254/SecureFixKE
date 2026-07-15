export default function TrustBar() {
  return (
    <section className="border-y border-border bg-surface">
      <div className="container-wide py-10">
        <p className="text-xs font-semibold uppercase tracking-widest text-muted text-center mb-6">
          Trusted by security teams across Kenya
        </p>
        <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-6 text-sm text-muted font-medium">
          {["SACCOs", "Banks", "NGOs", "Startups", "Enterprises", "Government"].map((name) => (
            <span key={name} className="opacity-60 hover:opacity-100 transition-opacity">
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
