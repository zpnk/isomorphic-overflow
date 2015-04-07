var React = require('react')

var Html = React.createClass({

    render: function() {
      return (
        <html>
          <head>
            <title>Isomorphic Overflow</title>
          </head>
          <body>
            <div id='app' dangerouslySetInnerHTML={{__html: this.props.markup}}></div>
          </body>
        </html>
      )
    }

})

module.exports = Html
