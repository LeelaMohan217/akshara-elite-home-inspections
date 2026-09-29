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
    id: 'snagging',
    title: 'Full Snagging Inspection',
    desc: 'A top-to-bottom, room-by-room check of your new home before you accept the keys — every defect found, photographed and written down.',
    icon: FaClipboardCheck,
    includes: [
      'Tiles, doors & windows, electrical, plumbing, walls and fixtures',
      'Area, ceiling height and floor slope measurements',
      'Photo report you can hand straight to your builder',
    ],
  },
  {
    id: 'verification',
    title: 'Repair Verification Visit',
    desc: 'When the builder says everything is fixed, we return with your snag report and tick off each item — or flag what still isn’t right.',
    icon: FaArrowsRotate,
    includes: [
      'Every item from your earlier report rechecked',
      'Updated report marking each snag as fixed or pending',
      'Confidence to sign handover papers',
    ],
  },
  {
    id: 'package',
    title: 'Snag & Verify Package',
    desc: 'Both visits in a single booking: we find the defects first, then come back to make sure they’re genuinely gone.',
    icon: FaLayerGroup,
    includes: [
      'Full Snagging Inspection and report',
      'Repair Verification Visit after the builder’s repairs',
      'Booked once, scheduled around your builder',
    ],
  },
  {
    id: 'damp',
    title: 'Damp & Leak Diagnosis',
    desc: 'Stains that return after every repaint usually have a hidden cause. We track down where the water is really getting in.',
    icon: FaDroplet,
    includes: [
      'Moisture measurements around the affected area',
      'How the damp spreads, read to trace its source',
      'Plain-English findings on what needs repairing',
    ],
  },
]

export const useCasesSection = {
  eyebrow: 'Real situations',
  headingLead: 'Not sure where to start?',
  headingRest: 'Here’s what we’d recommend.',
}

export const useCases = [
  {
    label: 'Handover is close',
    title: 'Your builder is ready to hand over the keys',
    desc: 'Book a Full Snagging Inspection first to get every defect in writing. Once repairs are done, a Repair Verification Visit — or the Snag & Verify Package booked together — confirms nothing slipped through before you sign.',
    icon: FaBuilding,
    services: ['snagging', 'verification', 'package'],
  },
  {
    label: 'Damp that won’t go away',
    title: 'Repainting hasn’t fixed it',
    desc: 'A Damp & Leak Diagnosis measures moisture around the problem area and studies how it spreads, so the real cause gets repaired instead of painted over again.',
    icon: FaHouseFloodWater,
    services: ['damp'],
  },
  {
    label: 'Living overseas',
    title: 'You’re only in town for a few days',
    desc: 'Schedule the Full Snagging Inspection while you’re here. When the builder reports the fixes are complete, we carry out the Repair Verification Visit and send you the results wherever you are.',
    icon: FaPlaneDeparture,
    services: ['snagging', 'verification', 'package'],
  },
]

export const audienceSection = {
  eyebrow: 'Who it’s for',
  headingLead: 'Whatever brings you here,',
  headingRest: 'we shape the report around what matters to you.',
}

export const audiences = [
  {
    label: 'First home',
    title: 'Your first home, minus the guesswork',
    desc: 'Every issue explained in simple terms, so you walk into builder meetings knowing exactly what to ask for.',
    icon: FaKey,
  },
  {
    label: 'Living outside India',
    title: 'Keep an eye on it from anywhere',
    desc: 'Photo-rich, clearly laid-out reports mean your decisions don’t have to wait for your next trip home.',
    icon: FaEarthAsia,
  },
  {
    label: 'Rental & resale',
    title: 'Protect your returns',
    desc: 'Spot costly repairs early and factor them in before you close the deal or hand over to a tenant.',
    icon: FaChartLine,
  },
  {
    label: 'Growing families',
    title: 'A home that’s safe for everyone',
    desc: 'We flag hazards and practical concerns that matter for children and elderly parents, not just construction defects.',
    icon: FaPeopleRoof,
  },
]
