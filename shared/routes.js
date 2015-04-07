var Router = require('react-router')

// Components

var Layout = require('./../components/Layout.jsx'),
    Questions = require('./../components/Questions.jsx'),
    About = require('./../components/About.jsx')

// Routes

var 〳 = Router.createRoute({
  path: '/',
  name: 'app',
  handler: Layout
})

Router.createRoute({
  parentRoute: 〳,
  name: 'questions',
  handler: Questions,
  isDefault: true
})

Router.createRoute({
  parentRoute: 〳,
  name: 'about',
  handler: About
})

module.exports = [〳]
