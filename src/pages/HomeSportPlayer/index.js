import ListOfTargets from 'components/layouts/ListOfTargets'
import { Context } from 'context/userContext'
import { SignOut } from 'firebase/config'
import { useContext, useState } from 'react'
import { useLocation } from 'wouter'
import {
  Avatar,
  ButtonMenu,
  Header,
  HomeContainer,
  LineOfButtons,
  Link,
  PrincipalSection,
  TitleOfList,
  UserName,
} from './styles'

const HomeSportPlayer = () => {
  const [isOpenMenu, setIsOpenMenu] = useState(false)
  const [, setLocation] = useLocation()
  const { user, setUser } = useContext(Context)
  const handleChangeMenu = () => setIsOpenMenu((lastValue) => !lastValue)

  const { displayName = '', photoURL = '' } = user

  const handleLogOut = () => {
    SignOut()
    setUser(null)
    setLocation('/')
  }

  return (
    <HomeContainer>
      <Header>
        <Link href='/user'>
          <Avatar src={photoURL} alt={displayName} />
          <UserName>{displayName}</UserName>
        </Link>
        <ButtonMenu onClick={handleChangeMenu}>
          <LineOfButtons></LineOfButtons>
        </ButtonMenu>
        {isOpenMenu && <section></section>}
      </Header>
      <PrincipalSection>
        <TitleOfList>Reserva un horario</TitleOfList>
        <ListOfTargets />
      </PrincipalSection>
      <button onClick={handleLogOut}>Salir de aqui</button>
    </HomeContainer>
  )
}

export default HomeSportPlayer
