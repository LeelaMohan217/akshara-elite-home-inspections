const contactPage = {
  hero: {
    breadcrumb: 'Contact',
    heading: 'Contact',
  },
  methods: {
    call: 'Call us',
    whatsapp: 'WhatsApp',
    whatsappLabel: 'Chat with us',
    email: 'Email',
    location: 'Based in',
  },
  form: {
    heading: 'Book your inspection',
    description: 'Share a few details and we’ll continue the conversation on WhatsApp.',
    name: 'Name',
    phone: 'Phone',
    email: 'Email',
    homeType: 'Home type',
    service: 'Service',
    message: 'Message',
    optional: 'optional',
    selectPlaceholder: 'Select…',
    messagePlaceholder: 'Handover date, location, anything we should know…',
    submitLabel: 'Send on WhatsApp',
    note: 'Opens WhatsApp with your details filled in — just press send.',
    errors: {
      nameRequired: 'Please enter your name.',
      nameInvalid: 'Please enter a valid name (letters only, at least 2).',
      phoneRequired: 'Please enter your phone number.',
      phoneInvalid: 'Enter a valid mobile number (add your country code if outside India).',
      emailInvalid: 'Please enter a valid email address.',
      messageTooLong: 'Please keep your message under 1000 characters.',
    },
  },
  steps: {
    label: 'What happens next',
  },
}

export default contactPage
