import { FaCalendarCheck, FaComments, FaFileLines, FaMagnifyingGlass } from 'react-icons/fa6'

const process = {
  eyebrow: 'Our Process',
  heading: 'Four steps from booking to clarity.',
  description:
    'A simple process built around clear communication, so you always know exactly what’s happening and what it means for your home.',
  steps: [
    {
      number: '1',
      title: 'Book Online or by Phone',
      duration: 'Same Day',
      icon: FaCalendarCheck,
      description:
        'Pick a time that works for you — we’ll confirm within minutes.',
    },
    {
      number: '2',
      title: 'We Inspect the Property',
      duration: '2–4 Hours',
      icon: FaMagnifyingGlass,
      description:
        'A certified inspector examines every major system, top to bottom.',
    },
    {
      number: '3',
      title: 'Get Your Digital Report',
      duration: '48 Hours',
      icon: FaFileLines,
      description:
        'Receive a clear, photo-backed report within 48 hours.',
    },
    {
      number: '4',
      title: 'Ask Us Anything',
      duration: 'Anytime',
      icon: FaComments,
      description:
        'We’re available to walk through the findings and answer questions.',
    },
  ],
}

export default process
