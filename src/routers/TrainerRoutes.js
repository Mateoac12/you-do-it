import UserSettings from 'pages/UserSettings'
import { Route } from 'wouter'

const TrainerRoutes = () => {
  return (
    <>
      <Route path='/user-settings' component={UserSettings} />
    </>
  )
}

export default TrainerRoutes
