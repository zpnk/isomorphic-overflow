var React = require('react')

var Html = React.createClass({

    render: function() {
      return (
        <html>
          <head>
            <title>Isomorphic Overflow</title>
            <link rel='icon' href='/favicon.ico' />
            <link rel='stylesheet' href='/vendor/kube.min.css' />
          </head>
          <body>
            <div id='app' dangerouslySetInnerHTML={{__html: this.props.markup}}></div>
            <script dangerouslySetInnerHTML={{__html: this.props.state}}></script>
            <script src='/build.js'></script>
          </body>
        </html>
      )
    }

})

module.exports = Html
