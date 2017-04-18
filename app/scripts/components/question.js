import React from 'react'
import { connect } from 'react-redux'
import { Route, Link, NavLink } from 'react-router-dom'
import questions from './question_lookup.js'
import container from '../containers/all.js'
import { browserHistory } from 'react-router';
import server from '../actions/server.js'

class Question extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      value: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  getCurrentId() {
    return this.props.match.params.id;
  }

  getCurrentQuestion () {
    return questions[this.props.match.params.id]
  }

  handleChange(event) {
    this.setState({
      value: event.target.value,
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    let a = this.state.value;
    if (a){
      this.setState({value: ''});
      let next = `/question/${Number(this.getCurrentId())+1}`
      if (this.getCurrentId()==10) next = '/results'
      let data = {
        "id":this.getCurrentId(),
        "question":this.getCurrentQuestion(),
        "answer":a
      }
      this.props.dispatch(server(data));
      this.props.history.push(next);
    } else {
      alert("CLOWN!")
    }
  }

  questionNav () {
    let next = `/question/${Number(this.getCurrentId())+1}`
    let prev = `/question/${Number(this.getCurrentId())-1}`
    let id = Number(this.getCurrentId())
    switch (true){
      case (id==1):
        return (<div>
            <Link to={next}>Next Question</Link><br/>
            </div>)
      case (id > 1 && id < 10):
        return (<div>
            <Link to={prev}>Previous Question</Link><br/>
            <Link to={next}>Next Question</Link>
            </div>)
      case (id==10):
        return (<div>
            <Link to={prev}>Previous Question</Link><br/>
            <Link to="/results">Results</Link>
            </div>)
    }
  }

  render () {
    return (<div>
    <form onSubmit={this.handleSubmit}>
      <label className="question">{this.getCurrentQuestion()}<br/>
        <input className="question" type="text" value={this.state.value} onChange={this.handleChange} />
      </label>
      <input type="submit" value="Submit" />
    </form><br/>
    {this.questionNav()}
    </div>)
  }
}

export default connect(container.allState)(Question)
