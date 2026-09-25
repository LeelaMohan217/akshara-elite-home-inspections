import siteInfo from '../data/siteInfo'

function Footer() {
  return (
    <footer className="border-t border-slate-200 py-8 text-center text-sm text-slate-500">
      © {new Date().getFullYear()} {siteInfo.name}. All rights reserved.
    </footer>
  )
}

export default Footer
