function ServiceCard({ title, desc }) {
  return (
    <div className="rounded-lg border border-slate-200 p-6">
      <h3 className="font-semibold">{title}</h3>
      <p className="mt-2 text-sm text-slate-600">{desc}</p>
    </div>
  )
}

export default ServiceCard
