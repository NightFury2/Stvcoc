require('babel-polyfill');

const environment = {
  development: {
    isProduction: false
  },
  production: {
    isProduction: true
  }
}[process.env.NODE_ENV || 'development'];

module.exports = Object.assign({
  host: process.env.HOST || 'localhost',
  port: process.env.PORT,
  apiHost: process.env.APIHOST || '127.0.0.1',
  apiPort: process.env.APIPORT,
  app: {
    title: 'Ставропольский колледж связи',
    description: 'Официальный сайт Ставропольского колледжа связи',
    head: {
      titleTemplate: 'Ставропольский колледж связи: %s',
      meta: [
        {name: 'description', content: 'Официальный сайт Ставропольского колледжа связи'},
        {charset: 'utf-8'},
        {property: 'og:site_name', content: 'Ставропольский колледж связи'},
        {property: 'og:image', content: 'https://react-redux.herokuapp.com/logo.jpg'},
        {property: 'og:locale', content: 'en_US'},
        {property: 'og:title', content: 'Ставропольский колледж связи'},
        {property: 'og:description', content: 'Официальный сайт Ставропольского колледжа связи'},
        {property: 'og:card', content: 'summary'},
        {property: 'og:site', content: '@nightfuruy2'},
        {property: 'og:creator', content: '@enightfury2'},
        {property: 'og:image:width', content: '200'},
        {property: 'og:image:height', content: '200'}
      ]
    }
  },

}, environment);
