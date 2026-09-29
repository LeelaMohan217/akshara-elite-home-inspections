// Small "• Label" marker used to open editorial sections.
function SectionLabel({ children, className = '' }) {
  return (
    <p className={`inline-flex items-center gap-2 text-xs font-medium uppercase tracking-wider sm:text-sm text-ink ${className}`}>
      <span className="size-1.5 rounded-full bg-accent" />
      {children}
    </p>
  )
}

export default SectionLabel
