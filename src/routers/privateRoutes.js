import { useContext } from 'react'
import { Switch } from 'wouter'

import { Context } from 'context/userContext'
import { SUBSCRIPTIONS } from 'config/typeOfSubs'

import Header from 'components/molecules/Header'

import SportPlayerRoutes from './SportPlayerRoutes'
import TrainerRoutes from './TrainerRoutes'

const PrivateRoutes = () => {
  const { user } = useContext(Context)
  const isSportPlayer = user.role === SUBSCRIPTIONS.SPORTPLAYER

  return (
    <>
      <Header />
      <Switch>
        {isSportPlayer ? <SportPlayerRoutes /> : <TrainerRoutes />}
      </Switch>
    </>
  )
}

export default PrivateRoutes
