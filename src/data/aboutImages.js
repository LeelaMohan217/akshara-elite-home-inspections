// Every photo on the About page is picked here. To use new photos, drop them
// in src/assets/about and change the import below — the sections don't need
// edits. `position` keeps the subject in frame when a photo is cropped.
import buildingRoofline from '../assets/about/building-roofline.webp'
import closingSky from '../assets/about/closing-sky-buildings.webp'
import floorPlans from '../assets/about/floor-plans.webp'
import handshakeCloseup from '../assets/about/handshake-closeup.webp'
import inspectorCeiling from '../assets/about/inspector-checking-ceiling.webp'
import inspectorClient from '../assets/about/inspector-client-handshake.webp'
import inspectorSite from '../assets/about/inspector-hard-hat-site.webp'
import inspectorTowers from '../assets/about/inspector-towers.webp'

const aboutImages = {
  hero: {
    src: inspectorClient,
    alt: 'Inspector shaking hands with a homeowner inside a newly built flat',
    position: 'object-[center_40%]',
  },
  heroThumbs: [
    { src: handshakeCloseup, alt: 'Close-up of an inspector’s handshake', position: 'object-center' },
    { src: inspectorSite, alt: 'Inspector in a hard hat facing a building site', position: 'object-[center_35%]' },
  ],
  band: {
    src: buildingRoofline,
    alt: 'Building roofline against a clear blue sky',
    position: 'object-[center_58%]',
  },
  intro: {
    src: inspectorCeiling,
    alt: 'Inspector with a clipboard pointing out a ceiling detail to a homeowner',
    position: 'object-[center_30%]',
  },
  approach: {
    src: floorPlans,
    alt: 'Inspector marking up floor plans',
    position: 'object-center',
  },
  inspect: {
    src: inspectorTowers,
    alt: 'Inspector in a helmet looking up at apartment towers under construction',
    position: 'object-[center_62%]',
  },
  closing: {
    src: closingSky,
    alt: '',
    position: 'object-bottom',
  },
}

export default aboutImages
