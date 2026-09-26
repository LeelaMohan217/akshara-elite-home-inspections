function Eyebrow({ children, className = '' }) {
  return (
    <div className={`text-xl font-medium text-[#080808] ${className}`}>{children}</div>
  )
}

export default Eyebrow
