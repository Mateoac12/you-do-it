import { Context } from 'context/userContext'
import { useContext } from 'react'
import { HomeContainer, PrincipalSection } from './styles'
// import TrainerHome from 'pages/HomePage/TrainerHome'
import SportPlayerHome from './SportPlaterHome'

const HomePage = () => {
  const {
    user: { subscription },
  } = useContext(Context)

  return (
    <HomeContainer>
      <PrincipalSection>{subscription && <SportPlayerHome />}</PrincipalSection>
    </HomeContainer>
  )
}

export default HomePage
