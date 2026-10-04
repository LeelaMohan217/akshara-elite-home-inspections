function Container({ className = '', children }) {
  return (
    <div className={`mx-auto w-full max-w-[1360px] px-5 sm:px-8 lg:px-10 ${className}`}>
      {children}
    </div>
  )
}

export default Container
