var React      = require('react'),
    superagent = require('superagent')

var API_URL = 'https://api.stackexchange.com/2.2/questions?pagesize=10&sort=hot&tagged=javascript&site=stackoverflow'

var Questions = React.createClass({

  statics: {
    fetch: function(params, callback) {
      superagent.get(API_URL, function(err, res) {
        callback({questions: res.body.items})
      })
    }
  },

  getInitialState: function() {
    return {
      questions: []
    }
  },

  componentDidMount: function() {
    if (this.state.questions.length) return

    var self = this
    Questions.fetch({}, function(data) {
      self.setState({questions: data.questions})
    })
  },

  render: function() {
    var questions = this.state.questions.map(function(q) {
      return <li key={q.question_id}>{q.title}</li>
    })

    return (
      <div>
        <p>The 10 hottest javascript questions on Stack Overflow:</p>
        <ul>
          {questions}
        </ul>
      </div>
    )
  }

})

module.exports = Questions
