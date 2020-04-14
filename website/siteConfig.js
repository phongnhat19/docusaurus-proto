/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// See https://docusaurus.io/docs/site-config for all the possible
// site configuration options.

// List of projects/orgs using your project for the users page.
const users = [
  {
    caption: 'User1',
    // You will need to prepend the image path with your baseUrl
    // if it is not '/', like: '/test-site/img/image.jpg'.
    image: 'img/kuc_logo.png', //'/img/undraw_open_source.svg',
    infoLink: 'https://tomokomiyake.github.io/docusaurus-proto/', //'https://www.facebook.com',
    pinned: true,
  },
];

const siteConfig = {
  title: 'kintone UI Component', // Title for your website.
  tagline: 'A reference website for kintone UI Component',
  //url: 'https://your-docusaurus-test-site.com', // Your website URL
  //baseUrl: '/', // Base URL for your project */
  // For github.io type URLs, you would set the url and baseUrl like:
  //   url: 'https://facebook.github.io',
  //   baseUrl: '/test-site/',
  url: 'https://tomokomiyake.github.io',
  baseUrl: '/docusaurus-proto/',

  // Used for publishing and more
  // projectName: 'test-site',
  // organizationName: 'facebook',
  // For top-level user or org sites, the organization is still the same.
  // e.g., for the https://JoelMarcey.github.io site, it would be set like...
  //   organizationName: 'JoelMarcey'
  projectName: 'docusaurus-proto',
  organizationName: 'tomokomiyake',

  // For no header links in the top nav bar -> headerLinks: [],
  headerLinks: [
    {doc: 'doc1', label: 'Docs'},
    {doc: 'doc4', label: 'API'},
    {page: 'help', label: 'Help'},
    {blog: true, label: 'Blog'},
    {search: true},
    {languages: true}
  ],

  // If you have users set above, you add it here:
  users,

  /* path to images for header/footer */
  headerIcon: 'img/kuc_logo_white.png',
  //footerIcon: 'img/kuc_logo.png',
  //favicon: 'img/kuc_logo.png',

  /* Colors for website */
  colors: {
    primaryColor: '#000', //'#609f6f',
    secondaryColor: '#333333',// '#24292e', //'#436f4d',
  },

  /* Custom fonts for website */
  
  fonts: {
    myFont: [
      "Times New Roman",
      "Serif"
    ],
    myOtherFont: [
      "-apple-system",
      "system-ui"
    ]
  },
  

  // This copyright info is used in /core/Footer.js and blog RSS/Atom feeds.
  copyright: `Copyright © ${new Date().getFullYear()} Facebook Inc.`,

  highlight: {
    // Highlight.js theme to use for syntax highlighting in code blocks.
    theme: 'default',
    defaultLang: 'javascript'
  },

  // Add custom scripts here that would be placed in <script> tags.
  scripts: ['https://buttons.github.io/buttons.js'],

  // On page navigation for the current documentation page.
  onPageNav: 'separate',
  // No .html extensions for paths.
  cleanUrl: true,

  // Open Graph and Twitter card images.
  ogImage: 'img/kuc_logo.png',
  twitterImage: 'img/kuc_logo.png',
  disableHeaderTitle: true,
  scrollToTop: true,

  // Option for Algolia DocSearch
  // algolia: {
  //   apiKey: '',
  //   indexName: ''
  // },

  // For sites with a sizable amount of content, set collapsible to true.
  // Expand/collapse the links and subcategories under categories.
  // docsSideNavCollapsible: true,

  // Show documentation's last contributor's name.
  // enableUpdateBy: true,

  // Show documentation's last update time.
  // enableUpdateTime: true,

  // You may provide arbitrary config keys to be used as needed by your
  // template. For example, if you need your repo's URL...
  //   repoUrl: 'https://github.com/facebook/test-site',
};

module.exports = siteConfig;
