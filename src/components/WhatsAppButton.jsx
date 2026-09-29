import { FaWhatsapp } from 'react-icons/fa6'
import siteInfo from '../data/siteInfo'

const href = `https://wa.me/${siteInfo.whatsapp}?text=${encodeURIComponent(
  siteInfo.whatsappMessage,
)}`

function WhatsAppButton() {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="fixed right-5 bottom-[max(1.25rem,env(safe-area-inset-bottom))] z-30 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-black/20 sm:right-6 sm:h-16 sm:w-16"
    >
      <FaWhatsapp className="h-8 w-8 sm:h-9 sm:w-9" aria-hidden="true" />
    </a>
  )
}

export default WhatsAppButton
