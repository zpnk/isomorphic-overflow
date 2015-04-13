var React = require('react'),
    Link  = require('react-router').Link

var Nav = React.createClass({

  render: function() {
    return (
      <nav className='units-row'>
        <Link to='questions' className='btn btn-blue btn-outline' activeClassName='btn-active'>Top 10</Link>
        <Link to='about' className='btn btn-blue btn-outline' activeClassName='btn-active'>About</Link>
      </nav>
    )
  }

})

module.exports = Nav
