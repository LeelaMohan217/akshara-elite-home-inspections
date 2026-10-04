import {
  FaBolt,
  FaClipboardCheck,
  FaDroplet,
  FaHouseCircleCheck,
  FaKey,
} from 'react-icons/fa6'

export const servicesSection = {
  eyebrow: 'Our Services',
  // Statement heading: the lead is shown dark, the rest in a lighter grey.
  headingLead: 'Thorough home inspections for every stage of ownership.',
  headingRest:
    'Whether you’re buying, selling, or building new, our experienced inspectors give you a clear, detailed picture of the property so every decision is made with confidence.',
  learnMoreLabel: 'Learn more',
  learnMoreHref: '/services',
  // Fills the last grid slot next to the service cards.
  cta: {
    heading: 'Not sure which inspection you need?',
    description:
      'Tell us about your home and we’ll recommend the right inspection — no obligation.',
    label: 'Talk to an inspector',
    href: '/contact',
  },
}

// Shared by the home page cards and the Services page. `id` is the anchor on
// the Services page; `includes` is only shown there.
const services = [
  {
    id: 'pre-handover',
    title: 'Pre-Handover Home Inspection',
    desc: 'Ideal for brand new flats before taking keys from builder. We verify construction quality and finishing in detail.',
    icon: FaKey,
    includes: [
      'Tiles, doors & windows, electrical, plumbing, walls and fixtures',
      'Area, ceiling height and floor slope measurements',
      'Photo report you can hand straight to your builder',
    ],
  },
  {
    id: 'ready-to-move',
    title: 'Ready-to-Move / Pre-Delivery Inspection',
    desc: 'For already completed homes where possession is due. We highlight snags before you sign handover documents.',
    icon: FaHouseCircleCheck,
    includes: [
      'Finishes, fixtures, plumbing and electricals checked',
      'Every snag listed before you sign handover documents',
      'Photo report you can hand straight to your builder',
    ],
  },
  {
    id: 'dampness',
    title: 'Leakage & Dampness Inspection',
    desc: 'Targeted inspection using moisture meters and thermal tools to locate water seepage sources before damage spreads.',
    icon: FaDroplet,
    includes: [
      'Moisture meter and thermal imaging checks',
      'How the damp spreads, read to trace its source',
      'Plain-English findings on what needs repairing',
    ],
  },
  {
    id: 'electrical',
    title: 'Electrical & Safety Audit',
    desc: 'Checks on DB, wiring, earthing, MCB selection and overall electrical safety for peace of mind.',
    icon: FaBolt,
    includes: [
      'Distribution board (DB) and wiring checked',
      'Earthing and MCB selection verified',
      'Overall electrical safety assessed',
    ],
  },
  {
    id: 'complete',
    title: 'Complete Home Inspection',
    desc: 'Comprehensive assessment across 100+ checkpoints covering finishes, fixtures, plumbing and safety.',
    icon: FaClipboardCheck,
    includes: [
      '100+ checkpoints across the whole home',
      'Finishes, fixtures, plumbing and safety covered',
      'Photo-documented report of every finding',
    ],
  },
]

export default services
