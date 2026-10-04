import { Link } from 'react-router-dom'

function LinkArrow({ href, className = '', children }) {
  return (
    <Link
      to={href}
      className={`text-base font-medium text-[#080808] underline underline-offset-2 ${className}`}
    >
      {children} →
    </Link>
  )
}

export default LinkArrow
