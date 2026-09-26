function Eyebrow({ children, className = '' }) {
  return (
    <div className={`inline-block rounded-full bg-accent/10 px-3 py-1 text-base font-medium sm:px-4 sm:text-xl text-[#080808] ${className}`}>
      {children}
    </div>
  )
}

export default Eyebrow
