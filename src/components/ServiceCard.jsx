function ServiceCard({ title, desc, icon: Icon }) {
  return (
    <div className="rounded-2xl border border-border p-8">
      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 text-accent">
        <Icon className="h-6 w-6" aria-hidden="true" />
      </div>
      <h3 className="mt-6 text-lg font-semibold text-ink">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-body">{desc}</p>
    </div>
  )
}

export default ServiceCard
