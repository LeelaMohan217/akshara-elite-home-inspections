// Projects where we've inspected homes, each shown with its builder's logo.
// Logos are from each builder's official website (My Home and Rajapushpa
// recoloured from white to dark so they show on light cards).
import aparnaLogo from '../assets/projects/aparna.svg'
import aprLogo from '../assets/projects/apr-group.webp'
import ghrLogo from '../assets/projects/ghr-infra.svg'
import myHomeLogo from '../assets/projects/my-home-group.svg'
import rajapushpaLogo from '../assets/projects/rajapushpa.png'

export const projectsSection = {
  eyebrow: 'Projects we’ve inspected',
  headingLead: 'Trusted by homebuyers in Hyderabad’s leading communities.',
  headingRest: 'We’ve inspected homes in these projects, so we know what to look for.',
}

const builders = {
  myHome: { name: 'My Home', logo: myHomeLogo },
  aparna: { name: 'Aparna', logo: aparnaLogo },
  rajapushpa: { name: 'Rajapushpa', logo: rajapushpaLogo },
  ghr: { name: 'GHR Infra', logo: ghrLogo },
  apr: { name: 'APR Praveen', logo: aprLogo },
}

const projects = [
  { builder: builders.myHome, name: 'Nishada' },
  { builder: builders.myHome, name: 'Sayuk' },
  { builder: builders.aparna, name: 'Sarovar Zicon' },
  { builder: builders.aparna, name: 'Zenon' },
  { builder: builders.rajapushpa, name: 'Provincia' },
  { builder: builders.ghr, name: 'Callisto' },
  { builder: builders.apr, name: 'Golden Leaf' },
  { builder: builders.aparna, name: 'CyberHeights' },
  { builder: builders.aparna, name: 'Cuberon' },
]

export default projects
