import store from './store.js'
import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import AppRoot from './components/app_root.js'
import Welcome from './components/welcome.js'
import Question from './components/question.js'
import QuestionList from './components/question_list.js'
import Results from './components/results.js'


export default function app() {
  render(
    <Provider store={store}>
      <Router>
        <div>
          <Route exact path="/" component={AppRoot}/>
          <Route path="/welcome" component={Welcome} />
          <Route path="/results" component={Results} />
          <Route path="/question-list" component={QuestionList} />
          <Route path="/question/:id" component={Question} />
        </div>
      </Router>
    </Provider>,
    document.getElementById('app')
  )
}
