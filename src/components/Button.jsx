function Button({ href, className = '', children }) {
  return (
    <a
      href={href}
      className={`rounded-[4px] bg-accent px-[15px] py-[11.25px] text-[15px] leading-[22.5px] font-semibold text-white transition-colors hover:bg-accent-hover ${className}`}
    >
      {children}
    </a>
  )
}

export default Button
