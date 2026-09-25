function Button({ href, className = '', children }) {
  return (
    <a
      href={href}
      className={`rounded-md bg-accent px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-accent-hover ${className}`}
    >
      {children}
    </a>
  )
}

export default Button
