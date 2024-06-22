/**
 * Application Identity (Brand)
 *
 * Also note that the 'Brand' is used in the following places:
 *  - README.md               all over
 *  - package.json            app-slug and version
 *  - [public/manifest.json]  name, short_name, description, theme_color, background_color
 */
export const Brand = {
  Title: {
    Base: 'viswa2k-GPT',
    Common: (process.env.NODE_ENV === 'development' ? '[DEV] ' : '') + 'viswa2k-GPT',
  },
  Meta: {
    Description: 'Launch viswa2k-GPT to unlock the full potential of AI, with precise control over your data and models. Voice interface, AI personas, advanced features, and fun UX.',
    SiteName: 'viswa2k-GPT | Precision AI for You',
    ThemeColor: '#32383E',
    TwitterSite: '@enricoros',
  },
  URIs: {
    Home: 'https://viswa2k.in',
    // App: 'https://get.big-agi.com',
    CardImage: 'https://big-agi.com/icons/card-dark-1200.png',
    OpenRepo: 'https://github.com/viswanathanTJ',
    OpenProject: 'https://github.com/viswanathanTJ',
    SupportInvite: 'https://viswa2k.in',
    // Twitter: 'https://www.twitter.com/enricoros',
    PrivacyPolicy: 'https://viswa2k.in',
  },
} as const;