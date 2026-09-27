import { FaHelmetSafety, FaHouseCircleCheck, FaSignHanging } from 'react-icons/fa6'

export const servicesSection = {
  eyebrow: 'Our Services',
  // Statement heading: the lead is shown dark, the rest in a lighter grey.
  headingLead: 'Thorough home inspections for every stage of ownership.',
  headingRest:
    'Whether you’re buying, selling, or building new, our certified inspectors give you a clear, detailed picture of the property so every decision is made with confidence.',
}

const services = [
  {
    title: 'Pre-Purchase Inspection',
    desc: 'A full structural and systems review before you close.',
    icon: FaHouseCircleCheck,
  },
  {
    title: 'Pre-Listing Inspection',
    desc: 'Know your home’s condition before it hits the market.',
    icon: FaSignHanging,
  },
  {
    title: 'New Construction',
    desc: 'Independent review of new builds before final walkthrough.',
    icon: FaHelmetSafety,
  },
]

export default services
