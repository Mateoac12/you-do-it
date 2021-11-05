import AddCodeGym from 'pages/AddCodeGym'
import HomePage from 'pages/HomePage'
import UserSettings from 'pages/UserSettings'
import { Redirect, Route } from 'wouter'

const SportPlayerRoutes = () => {
  return (
    <>
      <Route path='/' component={HomePage} />
      <Route path='/add-code-gym' component={AddCodeGym} />
      <Route path='/user-settings' component={UserSettings} />
      <Redirect to='/' />
    </>
  )
}

export default SportPlayerRoutes
