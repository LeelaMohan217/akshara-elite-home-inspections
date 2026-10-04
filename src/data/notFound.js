const notFound = {
  label: 'Error 404',
  heading: 'This page didn’t pass inspection.',
  description:
    'We checked every room, but the page you’re looking for doesn’t exist or may have moved.',
  homeLabel: 'Back to home',
  contactLabel: 'Contact us',
  linksLabel: 'Or head to',
  report: {
    title: 'Inspection report',
    finding: 'Finding #404',
    rows: {
      location: 'Location',
      severity: 'Severity',
      issue: 'Issue',
      fix: 'Recommended fix',
    },
    severity: 'Major',
    issue: 'Page not found',
    fix: 'Return to the home page or pick a page below.',
  },
}

export default notFound
