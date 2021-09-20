import Landing from 'pages/Landing'
import Start from 'pages/Start'
import { Switch, Route } from 'wouter'

const Routers = () => {
  return (
    <Switch>
      <Route path='/' component={Landing} />
      <Route path='/start' component={Start} />
    </Switch>
  )
}

export default Routers
