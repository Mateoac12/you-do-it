import { Context } from 'context/userContext'
import { useContext } from 'react'
import { HomeContainer, PrincipalSection } from './styles'
import TrainerHome from 'pages/HomePage/TrainerHome'
import SportPlayerHome from './SportPlayerHome'
import { SUBSCRIPTIONS } from 'config/typeOfSubs'

const HomePage = () => {
  const { user } = useContext(Context)
  const isSportPlayer = user.role === SUBSCRIPTIONS.SPORTPLAYER

  return (
    <HomeContainer>
      <PrincipalSection>
        {isSportPlayer ? <SportPlayerHome user={user} /> : <TrainerHome />}
      </PrincipalSection>
    </HomeContainer>
  )
}

export default HomePage
