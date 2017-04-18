import React from 'react'
import { connect } from 'react-redux'
import { Route, Link, NavLink } from 'react-router-dom'
import container from '../containers/all.js'
import QuestionList from './question_list.js'
import Question from './question.js'
import Welcome from './welcome.js'



class AppRoot extends React.Component {
  constructor (props) {
    super(props)
  }

  render () {
    return (
      <main>
        <Welcome/>
      </main>
    );
  }
}

export default connect(container.allState)(AppRoot)
