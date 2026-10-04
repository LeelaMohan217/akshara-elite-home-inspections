import { FaClipboardList, FaComments, FaUserCheck } from 'react-icons/fa6'

export const aboutPage = {
  hero: {
    breadcrumb: 'About us',
    heading: 'About us',
    subheading: 'Home inspection company in Hyderabad',
    description: [
      'We help homebuyers and owners check construction quality, finishing, dampness and electrical safety before they sign, move in, or pay the final instalment.',
      'Every visit ends with a clear, photo-documented report on the home you are about to own.',
    ],
    caption: 'Pre-handover · Dampness · Electrical',
  },
  band: {
    location: 'Hyderabad, Telangana',
    tags: ['Pre-Handover', 'Dampness', 'Electrical', 'Complete Home'],
    noteTitle: 'Photo-documented reports',
    noteText: 'Every finding is photographed, explained and prioritised.',
  },
  intro: {
    label: 'Who we are',
    // Statement: the lead is shown dark, the rest in a lighter grey.
    lead: 'Akshara Elite Home Inspections is a locally owned inspection company built on trust, training, and attention to detail.',
    rest: 'We believe every homebuyer and seller in Hyderabad deserves an honest, detailed picture of a property before any decision is made.',
    paragraphs: [
      'Unlike inspectors who rush through a walkthrough with a generic checklist, our team takes the time to understand the construction style, age, and quirks of each property, so nothing gets overlooked.',
      'We work with first-time buyers taking their first set of keys, investors comparing multiple properties, and sellers who want a clear record of a home’s condition before it goes on the market.',
    ],
  },
  approach: [
    {
      label: 'What we do',
      title: 'We inspect homes before you commit to them.',
      text: 'From brand-new flats at handover to older homes with hidden seepage, we find the problems that are easy to miss and expensive to fix later.',
    },
    {
      label: 'How we inspect',
      title: 'Room by room, against 100+ checkpoints.',
      text: 'Structure, finishes, doors and windows, plumbing, electricals and safety — each checked methodically, never skimmed.',
    },
    {
      label: 'Tools we use',
      title: 'Instruments, not guesswork.',
      text: 'Moisture meters and thermal imaging trace dampness to its source, and electrical testers check wiring, earthing and breakers.',
    },
    {
      label: 'Your report',
      title: 'Clear findings you can act on.',
      text: 'A photo-documented report that explains each issue in plain language, so you can take it straight to your builder or seller.',
    },
  ],
  inspect: {
    label: 'What we inspect',
    subheading: 'Specialist inspections for every stage of owning a home',
    word: 'Inspections',
    text: 'Whether you are collecting keys to a new flat or chasing a damp patch in an older home, there is an inspection built for it.',
    // Short names so they fit the tall vertical columns.
    items: ['Pre-Handover', 'Pre-Delivery', 'Dampness', 'Electrical', 'Complete Home'],
  },
  reasonsLabel: 'Why choose us',
  reasonsWord: 'Akshara',
}

const about = {
  eyebrow: 'About Us',
  // Statement heading: the lead is shown dark, the rest in a lighter grey.
  headingLead: 'Every home has a story worth knowing. At Akshara, we',
  headingRest:
    'inspect each property with precision and care, turning hidden issues into clear answers so you can step into your next home with complete confidence.',
  description:
    'We’re a team of experienced home inspectors dedicated to giving buyers and sellers a clear, honest picture of a property’s condition. With a sharp eye for detail and a commitment to thorough reporting, we help you make confident decisions about one of the biggest investments of your life.',
  ctaLabel: 'Learn More',
  reasonsEyebrow: 'Why Choose Us',
  reasonsHeading: 'Inspections You Can Rely On',
  reasons: [
    {
      title: 'Experienced Inspectors',
      icon: FaUserCheck,
      description:
        'Every inspection is carried out by a trained inspector who knows how homes in Hyderabad are built.',
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
