var React        = require('react'),
    RouteHandler = require('react-router').RouteHandler,
    Nav          = require('./Nav.jsx')

var Layout = React.createClass({

  render: function() {
    return (
      <div>
        <Nav />
        <RouteHandler data={this.props.data} />
      </div>
    )
  }

})

module.exports = Layout
