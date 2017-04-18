import React from 'react'
import { connect } from 'react-redux'
import { Route, Link, NavLink } from 'react-router-dom'
import QuestionList from './question_list'

class Welcome extends React.Component {
  render () {
    return (<div>
      <h2>Welcome!</h2>
        <Link to='/question-list'>Take the survey</Link>
    </div>)
  }
}

export default Welcome
