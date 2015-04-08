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
            <script src='/public/build.js'></script>
          </body>
        </html>
      )
    }

})

module.exports = Html
