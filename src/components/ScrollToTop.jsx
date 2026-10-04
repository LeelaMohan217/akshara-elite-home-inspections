import { useLayoutEffect } from 'react'
import { useLocation, useNavigationType } from 'react-router-dom'

// Start each page at the top when a link is clicked (including a link to the
// page you're already on). Links with a #hash scroll to that section instead,
// and back/forward navigation is left to the browser.
function ScrollToTop() {
  const { key, hash } = useLocation()
  const navigationType = useNavigationType()

  useLayoutEffect(() => {
    if (navigationType === 'POP') return
    const target = hash && document.getElementById(hash.slice(1))
    if (target) {
      target.scrollIntoView()
    } else {
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
    }
  }, [key, hash, navigationType])

  return null
}

export default ScrollToTop
