import HomeSportPlayer from 'pages/HomeSportPlayer'

import Landing from 'pages/Landing'
import Start from 'pages/Start'
import StartAthlete from 'pages/StartAthlete'
import { Switch, Route } from 'wouter'
import SignIn from 'pages/SignIn'
import AboutApp from 'pages/AboutApp'
import AddCodeGym from 'pages/AddCodeGym'

const Routers = () => {
  return (
    <Switch>
      <>
        <Route path='/home' component={HomeSportPlayer} />

        <Route path='/' component={Landing} />
        <Route path='/start' component={Start} />
        <Route path='/sign-in' component={SignIn} />
        <Route path='/start-as-athlete' component={StartAthlete} />
        <Route path='/about-app' component={AboutApp} />
        <Route path='/add-code-gym' component={AddCodeGym} />
      </>
    </Switch>
  )
}

export default Routers
