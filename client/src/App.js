import React from 'react'
import './App.css'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from './pages/Home'
import Admin from './pages/Admin/Admin'
import Questions from './pages/Admin/Questions'
import NewQuestion from './pages/Admin/NewQuestion'
import EditQuestion from './pages/Admin/EditQuestion'
import ImportQuestions from './pages/Admin/ImportQuestions'
import Categories from './pages/Admin/Categories'
import Game from './pages/Game/Game'

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route
          path="/admin"
          render={({ match: { url } }) => (
            <>
              <Route path={`${url}/`} component={Admin} exact />
              <Route path={`${url}/questions`} component={Questions} exact />
              <Route path={`${url}/questions/new`} component={NewQuestion} />
              <Route path={`${url}/questions/edit/:id`} component={EditQuestion} />
              <Route path={`${url}/questions/import`} component={ImportQuestions} />
              <Route path={`${url}/categories`} component={Categories} />
            </>
          )}
        />
        <Route
          path="/game"
          render={({ match: { url } }) => (
            <>
              <Route path={`${url}/`} component={Game} exact />
            </>
          )}
        />
      </Switch>
    </BrowserRouter>
  )
}

export default App;
