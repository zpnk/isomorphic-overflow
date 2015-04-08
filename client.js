var React  = require('react'),
    Router = require('react-router'),
    Routes = require('./shared/routes')

Router.run(Routes, Router.HistoryLocation, function(Handler, state) {

  var mountNode = document.getElementById('app')
  var Component = React.createFactory(Handler)

  React.render(Component(), mountNode)

})
