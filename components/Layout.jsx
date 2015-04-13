var React        = require('react'),
    RouteHandler = require('react-router').RouteHandler,
    Nav          = require('./Nav.jsx')

var Layout = React.createClass({

  render: function() {
    return (
      <main className='unit-centered unit-30'>
        <Nav />
        <RouteHandler data={this.props.data} />
      </main>
    )
  }

})

module.exports = Layout
