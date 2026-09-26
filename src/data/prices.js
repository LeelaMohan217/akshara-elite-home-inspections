import { FaCamera, FaDroplet, FaListCheck, FaPhone } from 'react-icons/fa6'

const prices = {
  eyebrow: 'Pricing',
  heading: 'Simple, flat‑rate pricing.',
  description:
    'One clear price by home size, with the full checklist and report included. Your final quote is confirmed at booking.',
  plans: [
    {
      name: '1BHK Flat',
      description: 'Ideal for 1BHK apartments and compact flats.',
      price: '₹5,500',
      features: [
        'Full structural & systems review',
        'Digital report within 48 hrs',
        'Dampness check included',
      ],
    },
    {
      name: '2BHK Flat',
      description: 'Our most popular plan for 2BHK apartments.',
      price: '₹6,700',
      popular: true,
      features: [
        'Everything in 1BHK Flat',
        'Detailed electrical & plumbing check',
        'Priority scheduling',
      ],
    },
    {
      name: '3BHK Flat',
      description: 'For spacious 3BHK apartments and family homes.',
      price: '₹7,000',
      features: [
        'Everything in 2BHK Flat',
        'Balcony & utility area inspection',
        'Room-by-room findings summary',
      ],
    },
    {
      name: '4BHK Flat',
      description: 'For large 4BHK apartments and duplex flats.',
      price: '₹7,300',
      features: [
        'Everything in 3BHK Flat',
        'Extra on-site time for larger layouts',
        'Senior inspector assigned',
      ],
    },
    {
      name: 'Villa',
      description: 'For independent villas and larger homes.',
      price: '₹7,500',
      features: [
        'Everything in 4BHK Flat',
        'Multi stage inspection option',
        'Extended on-site walkthrough',
      ],
    },
  ],
  priceUnit: 'per inspection',
  ctaLabel: 'Book This Plan',
  quoteText: 'Larger home, or not sure which plan fits?',
  quoteLinkLabel: 'Ask us for a quote',
  included: {
    eyebrow: 'Every plan includes',
    heading: 'No add-ons, no surprises.',
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
