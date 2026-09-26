import { Link } from 'react-router-dom'
import LogoMark from './LogoMark'

function Logo() {
  return (
    <Link
      to="/"
      className="flex items-baseline gap-1.5 text-3xl font-bold tracking-tight text-[#080808]"
    >
      <LogoMark />
      Akshara
    </Link>
  )
}

export default Logo
