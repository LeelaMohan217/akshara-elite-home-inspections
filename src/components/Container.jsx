function Container({ className = '', children }) {
  return (
    <div className={`px-5 lg:px-16 ${className}`}>
      {children}
    </div>
  )
}

export default Container
