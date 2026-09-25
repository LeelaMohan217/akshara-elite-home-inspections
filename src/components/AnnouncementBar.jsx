import siteInfo from '../data/siteInfo'

function AnnouncementBar() {
  return (
    <a
      href={siteInfo.announcementHref}
      className="block bg-accent px-5 py-3 text-center text-sm font-medium text-white hover:bg-accent-hover"
    >
      {siteInfo.announcementText}
    </a>
  )
}

export default AnnouncementBar
