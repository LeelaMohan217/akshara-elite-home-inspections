import siteInfo from '../data/siteInfo'

// Link that opens a WhatsApp chat with the business, with `text` pre-filled.
export function whatsappLink(text = siteInfo.whatsappMessage) {
  return `https://wa.me/${siteInfo.whatsapp}?text=${encodeURIComponent(text)}`
}
