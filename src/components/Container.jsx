function Container({ className = '', children }) {
  return (
    <div className={`mx-auto max-w-7xl px-5 sm:px-8 lg:px-16 xl:px-0 ${className}`}>
      {children}
    </div>
  )
}

export default Container
