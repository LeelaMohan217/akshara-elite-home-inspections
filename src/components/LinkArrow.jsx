function LinkArrow({ href, className = '', children }) {
  return (
    <a
      href={href}
      className={`text-base font-medium text-[#080808] underline underline-offset-2 ${className}`}
    >
      {children} →
    </a>
  )
}

export default LinkArrow
