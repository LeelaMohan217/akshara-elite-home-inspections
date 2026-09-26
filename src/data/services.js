import { FaHelmetSafety, FaHouseCircleCheck, FaSignHanging } from 'react-icons/fa6'

export const servicesSection = {
  eyebrow: 'Our Services',
  headingLines: ['Expert Inspections', 'for Every Stage', 'of Your Home'],
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
