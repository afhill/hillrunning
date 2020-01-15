'use strict';

module.exports = {
  url: 'https://hillrunning.netlify.com',
  pathPrefix: '/',
  title: 'Hill Running',
  subtitle: 'Race reports by Andrea Hill',
  copyright: '© All rights reserved.',
  disqusShortname: '',
  postsPerPage: 6,
  googleAnalyticsId: 'UA-73379983-2',
  useKatex: false,
  menu: [
    {
      label: 'Race Reports',
      path: '/'
    },
    {
      label: 'About me',
      path: '/pages/about'
    },
    {
      label: 'Contact me',
      path: '/pages/contacts'
    }
  ],
  author: {
    name: 'Andrea Hill',
    photo: '/photo.jpg',
    bio: 'A plant-powered runner living in Ottawa, Canada. Still chasing the 50 States',
    contacts: {
      email: 'andrea.hill@gmail.com',
      twitter: 'http://twitter.com/afhill',
      instagram: 'https://instagram.com/afhill262',
    }
  }
};
