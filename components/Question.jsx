var React = require('react'),
    superagent = require('superagent')

var API = {
  url: 'https://api.stackexchange.com/2.2/questions/',
  site: '?site=stackoverflow'
}

var Question = React.createClass({

  contextTypes: {
    router: React.PropTypes.func
  },

  params: function() {
    return this.context.router.getCurrentParams()
  },

  statics: {
    fetch: function(params, callback) {
      superagent.get(API.url + params.id + API.site, function(err, res) {
        callback({question: res.body.items[0]})
      })
    }
  },

  getInitialState: function() {
    return {
      questions: this.props.data.questions || [],
      question: this.props.data.question || {}
    }
  },

  componentWillMount: function() {
    var id = this.params().id
    var questions = this.state.questions
    if (questions.length) {
      var question = questions.filter(function(q) {
        return q.question_id.toString() === id
      })[0]
      this.setState({question: question })
    }
  },

  render: function() {
    var question = this.state.question
    var tags = question.tags.map(function(tag, index) {
      return <i key={index}>#{tag} </i>
    })

    return (
      <section>
        <p>{question.title}</p>
        <p>
          <span>
            Asked by <a href={question.owner.link}>{question.owner.display_name}</a>
          </span>
          <span> {question.view_count} views, {question.answer_count} answers</span>
        </p>
        <p>{tags}</p>
        <a href={question.link}>Have an answer?</a>
      </section>
    )
  }

})

module.exports = Question
