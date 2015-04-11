require('node-jsx').install({extension: '.jsx'})

var express = require('express'),
    server  = express(),
    React   = require('react'),
    Router  = require('react-router'),
    Routes  = require('./shared/routes'),
    Html    = React.createFactory(require('./components/Html.jsx')),
    hydrate = require('./shared/hydrate.js')

server.use('/public', express.static(__dirname + '/public'))

server.use(function(req, res) {

  Router.run(Routes, req.path, function(Handler, state) {

    var Component = React.createFactory(Handler)

    var currentRoute = state.routes[1]
    currentRoute.params = state.params

    hydrate(currentRoute, function(data) {
      var html = React.renderToStaticMarkup(Html({
        state:  'window.App = ' + JSON.stringify(data),
        markup: React.renderToString(Component({data: data}))
      }))

      res.send('<!doctype html>' + html)
    })

  })

})

var port = process.env.PORT || 9765

server.listen(port, function() {
  console.log('Now serving on port', port)
})
