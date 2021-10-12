import AddCodeGym from 'pages/AddCodeGym'
import HomePage from 'pages/HomePage'
import UserSettings from 'pages/UserSettings'
import { Redirect, Route, Switch } from 'wouter'

const PrivateRoutes = () => {
  return (
    <Switch>
      <Route path='/home' component={HomePage} />
      <Route path='/add-code-gym' component={AddCodeGym} />
      <Route path='/user-settings' component={UserSettings} />
      <Redirect to='/home' />
    </Switch>
  )
}

export default PrivateRoutes
