function Container({ className = '', children }) {
  return (
    <div className={`px-5 sm:px-8 lg:px-16 xl:px-24 ${className}`}>
      {children}
    </div>
  )
}

export default Container
