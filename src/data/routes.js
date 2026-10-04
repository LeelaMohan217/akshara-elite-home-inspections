// Every public page, with its browser-tab title and search description.
// Also read by vite.config.js to build sitemap.xml.
const routes = [
  {
    path: '/',
    title: 'Akshara Elite Home Inspections | Home Inspection in Hyderabad',
    description:
      'Pre-handover, dampness, electrical and complete home inspections in Hyderabad. Photo-documented reports within 48 hours. Inspections from ₹5,000.',
  },
  {
    path: '/about',
    title: 'About Us | Akshara Elite Home Inspections',
    description:
      'A Hyderabad home inspection team that checks construction quality, finishing, dampness and electrical safety before you sign, move in or pay.',
  },
  {
    path: '/services',
    title: 'Home Inspection Services in Hyderabad | Akshara Elite',
    description:
      'Pre-handover, ready-to-move, leakage & dampness, electrical safety and complete home inspections, plus repair verification visits.',
  },
  {
    path: '/prices',
    title: 'Home Inspection Pricing | Akshara Elite Home Inspections',
    description:
      'Home inspections in Hyderabad start from ₹5,000. Get a quote for your 1BHK, 2BHK, 3BHK, 4BHK flat or villa.',
  },
  {
    path: '/contact',
    title: 'Contact & Book an Inspection | Akshara Elite',
    description:
      'Book a home inspection in Hyderabad. Call, WhatsApp or email Akshara Elite Home Inspections.',
  },
  {
    path: '/privacy',
    title: 'Privacy Policy | Akshara Elite Home Inspections',
    description: 'How Akshara Elite Home Inspections collects, uses and protects your personal data.',
  },
  {
    path: '/terms',
    title: 'Terms of Service | Akshara Elite Home Inspections',
    description: 'The terms that apply when you use this website or book an inspection with Akshara Elite.',
  },
]

export const notFoundMeta = {
  title: 'Page Not Found | Akshara Elite Home Inspections',
  description: 'The page you’re looking for doesn’t exist or may have moved.',
}

export default routes
