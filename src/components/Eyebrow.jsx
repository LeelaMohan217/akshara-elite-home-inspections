function Eyebrow({ children, dot = false, className = '' }) {
  return (
    <div className={`inline-flex items-center gap-2 rounded-full bg-accent/10 px-3 py-1 text-xs font-medium uppercase tracking-wider text-[#080808] sm:px-4 sm:text-sm ${className}`}>
      {dot && (
        <span className="relative flex size-2">
          <span className="absolute inline-flex size-full animate-ping rounded-full bg-accent opacity-75" />
          <span className="relative inline-flex size-2 rounded-full bg-accent" />
        </span>
      )}
      {children}
    </div>
  )
}

export default Eyebrow
