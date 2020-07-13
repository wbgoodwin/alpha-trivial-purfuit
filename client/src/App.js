import React from 'react'
import './App.css'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from './pages/Home'
import Admin from './pages/Admin/Admin'
import NewQuestion from './pages/Admin/NewQuestion'
import EditQuestion from './pages/Admin/EditQuestion'

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
              <Route path={`${url}/new`} component={NewQuestion} />
              <Route path={`${url}/edit`} component={EditQuestion} />
            </>
          )}
        />
      </Switch>
    </BrowserRouter>
  )
}

export default App;
