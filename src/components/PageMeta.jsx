import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import routes, { notFoundMeta } from '../data/routes'

const siteUrl = import.meta.env.VITE_SITE_URL

function setMeta(selector, attribute, value) {
  document.querySelector(selector)?.setAttribute(attribute, value)
}

// Keeps the tab title, description, canonical URL and preview tags in step
// with the current page.
function PageMeta() {
  const { pathname } = useLocation()

  useEffect(() => {
    const route = routes.find((r) => r.path === pathname)
    const { title, description } = route ?? notFoundMeta
    const url = `${siteUrl}${pathname}`

    document.title = title
    setMeta('meta[name="description"]', 'content', description)
    setMeta('meta[property="og:title"]', 'content', title)
    setMeta('meta[property="og:description"]', 'content', description)
    setMeta('meta[property="og:url"]', 'content', url)
    setMeta('link[rel="canonical"]', 'href', url)
  }, [pathname])

  return null
}

export default PageMeta
