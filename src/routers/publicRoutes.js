import { Redirect, Route, Switch } from 'wouter'

import Landing from 'pages/Landing'
import Start from 'pages/Start'
import StartAthlete from 'pages/StartAthlete'
import SignIn from 'pages/SignIn'
import AboutApp from 'pages/AboutApp'
import UserNotFound from 'pages/UserNotFound'
import Register from 'pages/Register'

const PublicRoutes = () => {
  return (
    <Switch>
      <Route path='/' component={Landing} />
      <Route path='/start' component={Start} />
      <Route path='/register/:type?' component={Register} />
      <Route path='/sign-in' component={SignIn} />
      <Route path='/start-as-athlete' component={StartAthlete} />
      <Route path='/about-app' component={AboutApp} />
      <Route path='/user-not-found' component={UserNotFound} />
      <Redirect to='/' />
    </Switch>
  )
}

export default PublicRoutes
