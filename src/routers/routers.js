import HomeSportPlayer from 'pages/HomeSportPlayer'
import Landing from 'pages/Landing'
import Start from 'pages/Start'
import StartAthlete from 'pages/StartAthlete'
import { Switch, Route } from 'wouter'

const Routers = () => {
  return (
    <Switch>
      <Route path='/' component={Landing} />
      <Route path='/start' component={Start} />
      <Route path='/start-as-athlete' component={StartAthlete} />
      <Route path='/home' component={HomeSportPlayer} />
    </Switch>
  )
}

export default Routers
