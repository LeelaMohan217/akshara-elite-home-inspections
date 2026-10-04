import {
  FaArrowsRotate,
  FaBuilding,
  FaChartLine,
  FaEarthAsia,
  FaHouseFloodWater,
  FaKey,
  FaLayerGroup,
  FaPeopleRoof,
  FaPlaneDeparture,
} from 'react-icons/fa6'

export const serviceHero = {
  breadcrumb: 'Services',
  heading: 'Services',
  subheading: 'Home inspection services in Hyderabad',
  description:
    'From your first snag list to confirming every fix — an inspection for each stage of your home journey.',
  caption: 'Pre-handover · Dampness · Electrical',
}

// The main service cards come from data/services.js, shared with the home page.
export const serviceListSection = {
  label: 'What we offer',
  headingLead: 'Seven inspections,',
  headingRest: 'each built for a different moment in owning your home.',
  bookLabel: 'Book now',
}

export const addonsSection = {
  label: 'Add-ons',
  heading: 'Follow-up visits once the builder has made repairs.',
}

export const serviceAddons = [
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
      'Pre-Handover Home Inspection and report',
      'Repair Verification Visit after the builder’s repairs',
      'Booked once, scheduled around your builder',
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
    desc: 'Book a Pre-Handover Home Inspection first to get every defect in writing. Once repairs are done, a Repair Verification Visit — or the Snag & Verify Package booked together — confirms nothing slipped through before you sign.',
    icon: FaBuilding,
    services: ['pre-handover', 'verification', 'package'],
  },
  {
    label: 'Damp that won’t go away',
    title: 'Repainting hasn’t fixed it',
    desc: 'A Leakage & Dampness Inspection measures moisture around the problem area and studies how it spreads, so the real cause gets repaired instead of painted over again.',
    icon: FaHouseFloodWater,
    services: ['dampness'],
  },
  {
    label: 'Living overseas',
    title: 'You’re only in town for a few days',
    desc: 'Schedule the Pre-Handover Home Inspection while you’re here. When the builder reports the fixes are complete, we carry out the Repair Verification Visit and send you the results wherever you are.',
    icon: FaPlaneDeparture,
    services: ['pre-handover', 'verification', 'package'],
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
