var React        = require('react'),
    RouteHandler = require('react-router').RouteHandler,
    Nav          = require('./Nav.jsx')

var Layout = React.createClass({

  render: function() {
    return (
      <div>
        <Nav />
        <RouteHandler />
      </div>
    )
  }

})

module.exports = Layout
