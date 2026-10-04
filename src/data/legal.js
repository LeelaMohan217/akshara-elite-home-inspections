// DRAFT legal text written for this site — have a lawyer review it before
// launch. Update `updated` whenever the wording changes. Each section can
// have `paragraphs` (before the list), `list`, and `after` (after the list).
import siteInfo from './siteInfo'

export const privacyPolicy = {
  breadcrumb: 'Privacy Policy',
  heading: 'Privacy Policy',
  updated: '29 September 2026',
  intro: `This policy explains what personal data ${siteInfo.name} (“we”, “us”) collects through this website, how we use it, and the choices you have. We follow India’s Digital Personal Data Protection Act, 2023.`,
  sections: [
    {
      id: 'what-we-collect',
      heading: 'What we collect',
      paragraphs: ['We only collect what you choose to share with us:'],
      list: [
        'Booking form: your name and phone number, and optionally your email, home type, the service you’re interested in and a message.',
        'Calls, WhatsApp messages and emails you send us, including any photos or documents you attach.',
        'During an inspection: your property address, access details and the findings we record for your report.',
      ],
    },
    {
      id: 'how-the-form-works',
      heading: 'How the booking form works',
      paragraphs: [
        'The booking form does not send your details to a server of ours. When you press “Send on WhatsApp”, your details are written into a WhatsApp message that you can review before sending. Once you send it, WhatsApp (a Meta service) handles that message under its own privacy policy.',
      ],
    },
    {
      id: 'how-we-use-it',
      heading: 'How we use your data',
      list: [
        'To reply to you, give you a quote and schedule your inspection.',
        'To carry out the inspection and prepare and deliver your report.',
        'To follow up on your booking, for example repair verification visits.',
        'To meet legal, tax and accounting obligations.',
      ],
      after: ['We do not sell your personal data or use it for third-party advertising.'],
    },
    {
      id: 'analytics',
      heading: 'Website analytics',
      paragraphs: [
        'We use Vercel Web Analytics to count page visits and see which pages are useful. It does not use cookies and does not identify you personally; we only see combined figures such as page views and referring websites.',
      ],
    },
    {
      id: 'cookies',
      heading: 'Cookies',
      paragraphs: [
        'This website does not set any cookies and does not use advertising or tracking tools, so there is nothing to accept or turn off.',
        'Our font is loaded from Google Fonts, which means your browser connects to Google’s servers and Google can see your IP address. Google states that it does not use this to identify or track you. If we ever add tools that use cookies, we will update this section and ask for your consent where required.',
      ],
    },
    {
      id: 'sharing',
      heading: 'Who we share it with',
      paragraphs: [
        'Your data is seen only by our team and the service providers we rely on to run the business, such as WhatsApp, email and hosting providers. We share your report only with you, or with people you ask us to share it with. We may disclose data if the law requires it.',
      ],
    },
    {
      id: 'retention',
      heading: 'How long we keep it',
      paragraphs: [
        'We keep enquiry messages for as long as needed to respond and follow up, and inspection records and reports for as long as needed for the service and our legal obligations. After that we delete them.',
      ],
    },
    {
      id: 'your-rights',
      heading: 'Your rights',
      paragraphs: ['Under the Digital Personal Data Protection Act, 2023 you can ask us to:'],
      list: [
        'Tell you what personal data we hold about you and how we use it.',
        'Correct or update inaccurate data.',
        'Delete your data, where we don’t need to keep it by law.',
        'Withdraw consent you have given us.',
      ],
    },
    {
      id: 'contact',
      heading: 'Contact and grievances',
      paragraphs: [
        `For any privacy request or complaint, email ${siteInfo.email} or call ${siteInfo.phones[0]}. We aim to respond within 30 days.`,
        'We may update this policy from time to time; the date at the top shows when it last changed.',
      ],
    },
  ],
}

export const termsOfService = {
  breadcrumb: 'Terms of Service',
  heading: 'Terms of Service',
  updated: '29 September 2026',
  intro: `These terms apply when you use this website or book an inspection with ${siteInfo.name} (“we”, “us”). By booking, you agree to them.`,
  sections: [
    {
      id: 'our-services',
      heading: 'Our services',
      paragraphs: [
        'We provide home inspections in and around Hyderabad, including pre-handover, ready-to-move, leakage and dampness, electrical safety and complete home inspections, and repair verification visits. The exact scope of your inspection is confirmed when you book.',
      ],
    },
    {
      id: 'quotes-and-payment',
      heading: 'Quotes, bookings and payment',
      list: [
        'Prices shown on this website are starting prices. Your final price depends on your home’s size and type and the inspection you choose, and is confirmed before you book.',
        'Payment terms, and any rescheduling or cancellation terms, are shared with you when you book.',
      ],
    },
    {
      id: 'access',
      heading: 'Access to the property',
      paragraphs: [
        'You are responsible for arranging access to the property at the agreed time, including permission from the builder, seller or society where needed, and for power and water supply so fixtures can be tested. If we cannot access the property or parts of it, those areas will be noted as not inspected.',
      ],
    },
    {
      id: 'scope-and-limitations',
      heading: 'What an inspection is — and isn’t',
      list: [
        'Our inspection is a visual, non-destructive check of the areas that are accessible on the day, supported by tools such as moisture meters and thermal imaging where relevant.',
        'We do not open walls, lift fixed flooring, move furniture or test concealed systems beyond what our instruments can detect.',
        'A report describes the condition we observed on the day. It is not a guarantee or warranty of the property, a structural engineer’s certification, or a legal or valuation opinion.',
        'Some defects, such as intermittent leaks, may not be visible at the time of the inspection.',
      ],
    },
    {
      id: 'reports',
      heading: 'Your report',
      paragraphs: [
        'Your report is prepared for you. You may share it with your builder, seller, family or advisers, but it may not be relied on by anyone else, or resold, without our written permission.',
      ],
    },
    {
      id: 'liability',
      heading: 'Liability',
      paragraphs: [
        'We carry out every inspection with reasonable care and skill. To the extent the law allows, our total liability for any claim relating to an inspection is limited to the fee you paid for that inspection, and we are not liable for indirect or consequential losses.',
      ],
    },
    {
      id: 'website',
      heading: 'Using this website',
      paragraphs: [
        'The content on this website is general information and may change without notice. Images are for illustration. You may not copy the website’s content or design for commercial use without our permission.',
      ],
    },
    {
      id: 'law',
      heading: 'Governing law',
      paragraphs: [
        'These terms are governed by the laws of India, and the courts in Hyderabad, Telangana have jurisdiction over any dispute.',
      ],
    },
    {
      id: 'contact',
      heading: 'Contact',
      paragraphs: [
        `Questions about these terms? Email ${siteInfo.email} or call ${siteInfo.phones[0]}.`,
      ],
    },
  ],
}
