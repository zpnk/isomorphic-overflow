require('node-jsx').install({extension: '.jsx'})

var express = require('express'),
    server  = express(),
    React   = require('react'),
    Html    = React.createFactory(require('./components/Html.jsx'))

server.use(function(req, res) {
  var html = React.renderToStaticMarkup(Html())
  res.send(html)
})

var port = process.env.PORT || 9765

server.listen(port, function() {
  console.log('Now serving on port', port)
})
