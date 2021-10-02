import AddCodeGym from 'pages/AddCodeGym'
import HomeSportPlayer from 'pages/HomeSportPlayer'
import { Redirect, Route, Switch } from 'wouter'

const PrivateRoutes = () => {
  return (
    <Switch>
      <Route path='/home' component={HomeSportPlayer} />
      <Route path='/add-code-gym' component={AddCodeGym} />
      <Redirect to='/home' />
    </Switch>
  )
}

export default PrivateRoutes
