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
    'Whether you’re buying, selling, or building new, our certified inspectors give you a clear, detailed picture of the property so every decision is made with confidence.',
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

const services = [
  {
    title: 'Pre-Handover Home Inspection',
    desc: 'Ideal for brand new flats before taking keys from builder. We verify construction quality and finishing in detail.',
    icon: FaKey,
  },
  {
    title: 'Ready-to-Move / Pre-Delivery Inspection',
    desc: 'For already completed homes where possession is due. We highlight snags before you sign handover documents.',
    icon: FaHouseCircleCheck,
  },
  {
    title: 'Leakage & Dampness Inspection',
    desc: 'Targeted inspection using moisture meters and thermal tools to locate water seepage sources before damage spreads.',
    icon: FaDroplet,
  },
  {
    title: 'Electrical & Safety Audit',
    desc: 'Checks on DB, wiring, earthing, MCB selection and overall electrical safety for peace of mind.',
    icon: FaBolt,
  },
  {
    title: 'Complete Home Inspection',
    desc: 'Comprehensive assessment across 100+ checkpoints covering finishes, fixtures, plumbing and safety.',
    icon: FaClipboardCheck,
  },
]

export default services
