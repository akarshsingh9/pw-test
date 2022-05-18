const siteMetadata = {
  title: 'akarshsingh.com',
  author: 'Akarsh Singh',
  headerTitle: '@_akarshsingh',
  description: 'This is my personal website where you can read my thoughts on topics that have peaked my interest.',
  language: 'en-us',
  theme: 'light', // system, dark or light
  siteUrl: 'https://pw-test-akarshsingh9.vercel.app/',
  siteRepo: 'https://github.com/akarshsingh9/pw-test',
  siteLogo: '/static/images/logo.png',
  image: '/static/images/avatar.png',
  socialBanner: '/static/images/twitter-card.png',
  email: 'akarsh@duck.com',
  twitter: 'https://twitter.com/_akarshsingh',
  linkedin: 'https://www.linkedin.com/in/akarshsingh',
  locale: 'en-US',
  analytics: {
    // If you want to use an analytics provider you have to add it to the
    // content security policy in the `next.config.js` file.
    googleAnalyticsId: '', // e.g. UA-000000-2 or G-XXXXXXX
  },
  newsletter: {
    // supports mailchimp, buttondown, convertkit, klaviyo, revue, emailoctopus
    // Please add your .env file and modify it according to your selection
    provider: 'revue',
  }
}

module.exports = siteMetadata
