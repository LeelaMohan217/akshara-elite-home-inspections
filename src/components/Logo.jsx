import { Link } from 'react-router-dom'
import LogoMark from './LogoMark'

function Logo() {
  return (
    <Link
      to="/"
      className="flex items-center gap-1 text-2xl font-bold tracking-tight text-[#080808]"
    >
      <LogoMark />
      Akshara
    </Link>
  )
}

export default Logo
