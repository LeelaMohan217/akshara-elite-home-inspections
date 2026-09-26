import {
  FaBolt,
  FaBorderAll,
  FaDoorOpen,
  FaPaintRoller,
  FaRulerCombined,
} from 'react-icons/fa6'

export const checklistSection = {
  eyebrow: 'What We Inspect',
  heading: 'Our Inspection Checklist',
  description:
    'Every inspection follows a detailed snagging checklist, so nothing in your home gets overlooked.',
}

const checklist = [
  {
    title: 'Tile Work',
    icon: FaBorderAll,
    groups: [
      {
        items: [
          'Hollowness (Tapping Sound)',
          'Cracks & Damages',
          'Chip-Offs',
          'Levelness / Offsets',
          'Stains & Scratches',
          'Color / Shade Variations',
        ],
      },
    ],
  },
  {
    title: 'Doors & Windows',
    icon: FaDoorOpen,
    groups: [
      {
        title: 'Doors & Frames',
        items: [
          'Lock Functionality',
          'Smooth Opening & Closing',
          'Bolt & Latch Alignment',
          'Hinge Screws',
          'Door Bends / Warping',
          'Cracks in Panel / Frame',
          'Frame to Wall Gaps',
          'Hardware Alignment',
        ],
      },
      {
        title: 'Windows',
        items: [
          'Alignment',
          'Lock Mechanism',
          'Smooth Operation',
          'Stains & Scratches on Glass / Frame',
          'Glass Damage',
          'Frame Cracks',
        ],
      },
    ],
  },
  {
    title: 'Electrical & Water',
    icon: FaBolt,
    groups: [
      {
        title: 'Electricity',
        items: [
          'Socket Testing',
          'Switchboard Alignment',
          'Switch Working',
          'Gaps Around Wall Plates',
          'Board Damage',
          'Loose Fittings',
        ],
      },
      {
        title: 'Plumbing & Leaks',
        items: [
          'Shower Leaks',
          'Pipe Leaks',
          'Drain Leaks',
          'Blocked Traps',
          'Bottle Traps',
          'Tap Check',
          'Toilet',
          'Water Pressure',
          'Water Quality (TDS)',
        ],
      },
    ],
  },
  {
    title: 'Walls & Finishing',
    icon: FaPaintRoller,
    groups: [
      {
        title: 'Walls & Ceilings',
        items: [
          'Cracks',
          'Paint Peeling',
          'Paint Touch-Ups',
          'Finishings',
          'Smooth Finishing',
          'Stains',
          'Dampness / Wet Spots',
        ],
      },
      {
        title: 'Fixtures',
        items: [
          'Cabinets / Joinery',
          'Kitchen Platform & Sink',
          'Balcony Railings',
          'Exhaust Fans',
          'Smoke Detectors',
          'Grouting (Tile Gaps)',
          'General Cleanliness',
        ],
      },
    ],
  },
  {
    title: 'Area Measurements & Slopes',
    icon: FaRulerCombined,
    groups: [
      {
        items: ['Total Interior Area', 'Ceiling Height', 'Slopes'],
      },
    ],
  },
]

export default checklist
