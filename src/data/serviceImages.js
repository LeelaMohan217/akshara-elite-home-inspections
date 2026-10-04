// Every photo on the Services page is picked here. To use new photos, drop
// them in src/assets/services and change the import below. `position` keeps
// the subject in frame when a photo is cropped.
import handshake from '../assets/services/handshake-closeup.webp'
import inspectorSite from '../assets/services/inspector-hard-hat-site.webp'

const serviceImages = {
  hero: {
    src: inspectorSite,
    alt: 'Inspector in a hard hat looking at a building under construction',
    position: 'object-[center_30%]',
  },
  audiences: {
    src: handshake,
    alt: 'Inspector shaking hands with a homeowner',
    position: 'object-center',
  },
}

export default serviceImages
