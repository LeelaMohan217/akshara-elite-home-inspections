import {
  FaArrowsRotate,
  FaBuilding,
  FaChartLine,
  FaClipboardCheck,
  FaDroplet,
  FaEarthAsia,
  FaHouseFloodWater,
  FaKey,
  FaLayerGroup,
  FaPeopleRoof,
  FaPlaneDeparture,
} from 'react-icons/fa6'

export const serviceOfferings = [
  {
    id: 'complete',
    title: 'Complete Inspection',
    desc: 'A full room-by-room snagging inspection of your flat or villa, so you know every defect before you take possession.',
    icon: FaClipboardCheck,
    includes: [
      'Tiles, doors & windows, electrical, plumbing, walls and fixtures',
      'Area, ceiling height and floor slope checks',
      'Photo-backed snag report to share with your builder',
    ],
  },
  {
    id: 'reinspection',
    title: 'Re-Inspection',
    desc: 'Once the builder says the snags are fixed, we come back and check each one against your original report.',
    icon: FaArrowsRotate,
    includes: [
      'Item-by-item check of the earlier snag list',
      'Updated report showing what’s fixed and what’s still pending',
      'Clear sign-off before you sign possession documents',
    ],
  },
  {
    id: 'combo',
    title: 'Combo Package',
    desc: 'Complete Inspection and Re-Inspection booked together — the simplest way to go from snag list to a genuinely finished home.',
    icon: FaLayerGroup,
    includes: [
      'Complete Inspection with full snag report',
      'Re-Inspection once the builder completes repairs',
      'One booking covering both visits',
    ],
  },
  {
    id: 'dampness',
    title: 'Advanced Dampness & Leakage Detection',
    desc: 'For damp patches and leaks that keep coming back, we trace where the moisture is actually coming from.',
    icon: FaDroplet,
    includes: [
      'Moisture readings across walls, ceilings and floors',
      'Reading the damp pattern to find the likely source',
      'Report explaining the cause, not just the stain',
    ],
  },
]

export const useCasesSection = {
  eyebrow: 'Which service fits',
  headingLead: 'The right inspection,',
  headingRest: 'at the right moment in your home journey.',
}

export const useCases = [
  {
    label: 'New flat',
    title: 'Before you sign for possession',
    desc: 'Start with a Complete Inspection to get a detailed snag list. Then use a Re-Inspection, or book the Combo Package up front, to confirm every snag is properly fixed before you sign.',
    icon: FaBuilding,
    services: ['complete', 'reinspection', 'combo'],
  },
  {
    label: 'Recurring dampness',
    title: 'The patch that keeps coming back',
    desc: 'If repainting hasn’t solved it, Advanced Dampness & Leakage Detection uses moisture readings and damp patterns to find the real cause, so it can be fixed for good.',
    icon: FaHouseFloodWater,
    services: ['dampness'],
  },
  {
    label: 'NRI buyers',
    title: 'When you can’t visit twice',
    desc: 'Book a Complete Inspection during your visit, then schedule a Re-Inspection (or take the Combo) for when the builder says the work is done — we check it even after you’ve flown back.',
    icon: FaPlaneDeparture,
    services: ['complete', 'reinspection', 'combo'],
  },
]

export const audienceSection = {
  eyebrow: 'Who we help',
  headingLead: 'Every buyer has different worries.',
  headingRest: 'Our reports are built around yours.',
}

export const audiences = [
  {
    label: 'First-time buyers',
    title: 'Buying your first flat',
    desc: 'A clear, plain-language list of issues, so you can talk to your builder about repairs with confidence.',
    icon: FaKey,
  },
  {
    label: 'NRI buyers',
    title: 'Owning from abroad',
    desc: 'Detailed photos and a well-organised report keep you in control, even when you can’t visit often.',
    icon: FaEarthAsia,
  },
  {
    label: 'Investors',
    title: 'Buying to rent or resell',
    desc: 'Know about likely repairs and problem areas before you commit to the purchase or a tenant.',
    icon: FaChartLine,
  },
  {
    label: 'Families',
    title: 'Moving in with kids or parents',
    desc: 'We note safety and everyday-use concerns too, so they shape your decision from the start.',
    icon: FaPeopleRoof,
  },
]
