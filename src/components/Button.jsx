import { Link } from 'react-router-dom'

const sizes = {
  md: 'px-[15px] py-[11.25px] text-[15px] leading-[22.5px] font-semibold',
  lg: 'px-6 py-4 text-base leading-[19.5px] font-medium',
}

function Button({ href, size = 'md', className = '', ...props }) {
  return (
    <Link
      to={href}
      className={`rounded-[4px] bg-accent text-white transition-colors hover:bg-accent-hover ${sizes[size]} ${className}`}
      {...props}
    />
  )
}

export default Button
