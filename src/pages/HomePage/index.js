import Header from 'components/molecules/Header'
import { Context } from 'context/userContext'
import { useContext } from 'react'
import { HomeContainer, PrincipalSection } from './styles'
import TrainerHome from 'pages/HomePage/TrainerHome'

const HomePage = () => {
  const {
    user: { subscription },
  } = useContext(Context)

  return (
    <HomeContainer>
      <Header />
      <PrincipalSection>{subscription && <TrainerHome />}</PrincipalSection>
    </HomeContainer>
  )
}

export default HomePage
