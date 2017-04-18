import React from 'react'
import { connect } from 'react-redux'
import { Route, Link, NavLink } from 'react-router-dom'
import questions from './question_lookup.js'

class QuestionList extends React.Component {
  render () {
      return (
        <div>
        <h2>Questions</h2>
        {Object.keys(questions).map(function(key){
          let l = '/question/'+key
          return <div><Link to={l}>Question {key}</Link><br/></div>
        })}
      </div>)
  }
}

export default QuestionList
