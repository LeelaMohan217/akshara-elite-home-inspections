import { FaFacebookF, FaInstagram, FaLinkedinIn, FaXTwitter } from 'react-icons/fa6'
import socialLinks from '../data/socialLinks'

const icons = {
  Facebook: FaFacebookF,
  Instagram: FaInstagram,
  LinkedIn: FaLinkedinIn,
  X: FaXTwitter,
}

// Only profiles with a real URL are shown; renders nothing if there are none.
function SocialLinks({ className = '' }) {
  const links = socialLinks.filter((social) => social.href)
  if (links.length === 0) return null

  return (
    <div className={`flex gap-3 ${className}`}>
      {links.map((social) => {
        const Icon = icons[social.label]
        return (
          <a
            key={social.label}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={social.label}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-body transition-colors hover:border-accent hover:text-accent"
          >
            <Icon className="h-4 w-4" />
          </a>
        )
      })}
    </div>
  )
}

export default SocialLinks
