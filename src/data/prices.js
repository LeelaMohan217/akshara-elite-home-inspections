import { FaCamera, FaDroplet, FaListCheck, FaPhone } from 'react-icons/fa6'

// Exact prices are deliberately not published — only the starting price.
const prices = {
  hero: {
    breadcrumb: 'Pricing',
    heading: 'Pricing',
    subheading: 'Home inspection pricing in Hyderabad',
    description:
      'One clear price for your home, with the full checklist and report included. Your exact quote is confirmed before you book.',
  },
  startingPrice: {
    label: 'Inspections start from',
    amount: '₹5,000',
    unit: 'per inspection',
    factorsLabel: 'Your quote depends on',
    factors: ['Your home’s size and type — 1BHK flat to villa', 'The inspection you choose'],
    ctaLabel: 'Get your quote',
  },
  plansSection: {
    label: 'Plans by home size',
    headingLead: 'One visit, sized to your home.',
    headingRest: 'Tell us about your home and we’ll confirm the exact price before booking.',
    ctaLabel: 'Get a quote',
  },
  plans: [
    {
      name: '1BHK Flat',
      description: 'Ideal for 1BHK apartments and compact flats.',
      features: [
        'Full structural & systems review',
        'Digital report within 48 hrs',
        'Dampness check included',
      ],
    },
    {
      name: '2BHK Flat',
      description: 'Ideal for 2BHK apartments and mid-sized flats.',
      features: [
        'Everything in 1BHK Flat',
        'Detailed electrical & plumbing check',
        'Priority scheduling',
      ],
    },
    {
      name: '3BHK Flat',
      description: 'For spacious 3BHK apartments and family homes.',
      features: [
        'Everything in 2BHK Flat',
        'Balcony & utility area inspection',
        'Room-by-room findings summary',
      ],
    },
    {
      name: '4BHK Flat',
      description: 'For large 4BHK apartments and duplex flats.',
      features: [
        'Everything in 3BHK Flat',
        'Extra on-site time for larger layouts',
        'Senior inspector assigned',
      ],
    },
    {
      name: 'Villa',
      description: 'For independent villas and larger homes.',
      features: [
        'Everything in 4BHK Flat',
        'Multi stage inspection option',
        'Extended on-site walkthrough',
      ],
    },
  ],
  quoteText: 'Larger home, or not sure which plan fits?',
  quoteLinkLabel: 'Ask us for a quote',
  included: {
    eyebrow: 'Every plan includes',
    headingLead: 'No add-ons,',
    headingRest: 'no surprises.',
    items: [
      {
        title: '52-point snagging checklist',
        desc: 'Tile work, doors and windows, electrical, plumbing, walls, fixtures and measurements.',
        icon: FaListCheck,
      },
      {
        title: 'Photo-backed digital report',
        desc: 'Every finding graded major, minor or cosmetic, delivered within 48 hours.',
        icon: FaCamera,
      },
      {
        title: 'Dampness check',
        desc: 'Moisture, seepage and wet spots, checked on every visit.',
        icon: FaDroplet,
      },
      {
        title: 'Talk to your inspector',
        desc: 'Call the inspector who was on site to walk through any finding.',
        icon: FaPhone,
      },
    ],
  },
}

export default prices
