/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// See https://docusaurus.io/docs/site-config for all the possible
// site configuration options.
const RemarkablePlugins = require('./core/RemarkablePlugin');

// List of projects/orgs using your project for the users page.
const users = [
  {
    caption: 'User1',
    image: 'img/kuc_logo.png',
    infoLink: 'https://tomokomiyake.github.io/docusaurus-proto/',
    pinned: true,
  },
];

const siteConfig = {
  title: 'kintone UI Component', // Title for your website.
  tagline: 'A reference website for kintone UI Component',
  url: 'https://tomokomiyake.github.io',
  baseUrl: '/docusaurus-proto/',
  projectName: 'docusaurus-proto',
  organizationName: 'tomokomiyake',

  // For no header links in the top nav bar -> headerLinks: [],
  headerLinks: [
    {doc: 'getting-started', label: 'Reference'},
    {blog: true, label: 'Blog'},
    {page: 'versions', label: 'Version'},
    {page: 'help', label: 'Help'},
    {href: 'https://github.com/TomokoMiyake/docusaurus-proto', label: 'GitHub'}, // Need to change to kuc repo
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

  markdownPlugins: [
    RemarkablePlugins.KUCComponentRenderer,
  ],
  scripts: [
    'https://unpkg.com/@kintone/kintone-ui-component@0.3.3/dist/kintone-ui-component.min.js',
    '/docusaurus-proto/js/extra.js'
  ],
  stylesheets: [
    'https://unpkg.com/@kintone/kintone-ui-component@0.3.3/dist/kintone-ui-component.min.css',
    '/docusaurus-proto/css/custom.css'
  ],

  // Option for Algolia DocSearch(It can be set at production-ready.)
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
  // repoUrl: 'https://github.com/TomokoMiyake/docusaurus-proto',
};

module.exports = siteConfig;
