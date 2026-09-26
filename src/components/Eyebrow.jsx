function Eyebrow({ children, className = '' }) {
  return (
    <div className={`inline-block rounded-full bg-accent/10 px-4 py-1 text-xl font-medium text-[#080808] ${className}`}>
      {children}
    </div>
  )
}

export default Eyebrow
