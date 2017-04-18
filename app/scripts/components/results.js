import React from 'react'
import { connect } from 'react-redux'
import { Route, Link, NavLink } from 'react-router-dom'
import questions from './question_lookup.js'
import container from '../containers/all.js'
import { browserHistory } from 'react-router';
import server from '../actions/server.js'

class Results extends React.Component {

  constructor(props) {
    super(props);
  }

  getResponse(id){
    this.props.answers.forEach(function(i){
      if (i.id==id){
        return i.answer
      }
    })
  }

  test () {
    return "foo"
  }

  compile(i) {
    //i wanted to do this, but it won't work???
    //return <tr><td>{questions[i]}</td><td>{this.getResponse(i)}</td></tr>
    return <tr><td>{questions[i]}</td><td>how do you call function in return statement?</td></tr>
  }

  getResults () {
    // console.log("works here ",this.test())
    return Object.keys(questions).map(this.compile)
  }

  render () {
    return (<table className="table">
    <tbody>
      <tr>
        <th>Question</th>
        <th>Your Answer</th>
      </tr>
      {this.getResults()}
    </tbody>
    </table>)
  }
}

export default connect(container.allState)(Results)
