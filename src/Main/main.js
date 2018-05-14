import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Start from '../StartPage/Start'
import SignUp from '../SignUp/SignUp'


const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Start}/>
      <Route path='/sign_up' component={SignUp}/>
    </Switch>
  </main>
)

export default Main
