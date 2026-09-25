function Container({ className = '', children }) {
  return (
    <div className={`mx-auto max-w-[1280px] px-5 lg:px-16 ${className}`}>
      {children}
    </div>
  )
}

export default Container
