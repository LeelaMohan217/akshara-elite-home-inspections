import { FaFacebookF, FaInstagram, FaLinkedinIn, FaXTwitter } from 'react-icons/fa6'
import socialLinks from '../data/socialLinks'

const icons = {
  Facebook: FaFacebookF,
  Instagram: FaInstagram,
  LinkedIn: FaLinkedinIn,
  X: FaXTwitter,
}

function SocialLinks({ className = '' }) {
  return (
    <div className={`flex gap-3 ${className}`}>
      {socialLinks.map((social) => {
        const Icon = icons[social.label]
        return (
          <a
            key={social.label}
            href={social.href}
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
