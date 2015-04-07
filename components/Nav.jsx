var React = require('react'),
    Link  = require('react-router').Link

var Nav = React.createClass({

  render: function() {
    return (
      <nav>
        <Link to='questions'>Top 10</Link>
        <span> | </span>
        <Link to='about'>About</Link>
      </nav>
    )
  }

})

module.exports = Nav
