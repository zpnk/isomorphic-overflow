require('node-jsx').install({extension: '.jsx'})

var express = require('express'),
    server  = express(),
    React   = require('react'),
    Router  = require('react-router'),
    Routes  = require('./shared/routes'),
    Html    = React.createFactory(require('./components/Html.jsx'))

server.use('/public', express.static(__dirname + '/public'))

server.use(function(req, res) {

  Router.run(Routes, req.path, function(Handler) {
    var Component = React.createFactory(Handler)

    var html = React.renderToStaticMarkup(Html({
      markup: React.renderToString(Component())
    }))

    res.send('<!doctype html>' + html)
  })

})

var port = process.env.PORT || 9765

server.listen(port, function() {
  console.log('Now serving on port', port)
})
