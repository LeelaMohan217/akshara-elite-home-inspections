import { FaCertificate, FaClipboardList, FaComments } from 'react-icons/fa6'

export const aboutPage = {
  eyebrow: 'Who We Are',
  heading: 'Every home deserves an honest look.',
  description:
    'Akshara Elite Home Inspections is a locally owned inspection company built on trust, training, and attention to detail. We were founded with a simple belief: that every homebuyer and seller in Hyderabad deserves an honest, detailed picture of a property’s condition before any decision is made. Unlike inspectors who rush through a walkthrough with a generic checklist, our team takes the time to understand the specific construction style, age, and quirks of each property, so nothing gets overlooked. We’ve worked with first-time buyers navigating their very first purchase, seasoned investors comparing multiple properties, and sellers who want a clear record of a home’s condition before it goes on the market.',
  stats: [
    { value: '400+', label: 'Homes Inspected' },
    { value: '98%', label: 'User Satisfaction' },
    { value: '48 hrs', label: 'Avg. Report Turnaround' },
  ],
}

const about = {
  eyebrow: 'About Us',
  headingLines: ['Built on Trust,', 'Backed by Experience'],
  description:
    'We’re a team of certified home inspectors dedicated to giving buyers and sellers a clear, honest picture of a property’s condition. With a sharp eye for detail and a commitment to thorough reporting, we help you make confident decisions about one of the biggest investments of your life.',
  ctaLabel: 'Learn More',
  reasonsEyebrow: 'Why Choose Us',
  reasonsHeading: 'Inspections You Can Rely On',
  reasons: [
    {
      title: 'Licensed & Certified',
      icon: FaCertificate,
      description:
        'Every inspection is carried out by a fully licensed, certified inspector you can trust.',
    },
    {
      title: 'Detailed Reporting',
      icon: FaClipboardList,
      description:
        'Photo-documented reports that explain exactly what we found and why it matters.',
    },
    {
      title: 'Clear Communication',
      icon: FaComments,
      description:
        'We walk you through every finding in plain language — no jargon, no guesswork.',
    },
  ],
}

export default about
