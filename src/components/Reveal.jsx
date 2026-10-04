import { motion } from 'framer-motion'

// Fades its content in while sliding it up once it scrolls into view.
// `as` picks the element to render (div, li, figure, ...); `delay` staggers
// items that appear together.
function Reveal({ as = 'div', delay = 0, y = 40, children, ...props }) {
  const Tag = motion[as]
  return (
    <Tag
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
      {...props}
    >
      {children}
    </Tag>
  )
}

export default Reveal
