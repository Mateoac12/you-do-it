import ListOfTargets from 'components/layouts/ListOfTargets'
import logo from 'logo.svg'
import { useState } from 'react'
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

  const handleChangeMenu = () => setIsOpenMenu((lastValue) => !lastValue)

  return (
    <HomeContainer>
      <Header>
        <Link href='/user'>
          <Avatar src={logo} alt='nameOfUser' />
          <UserName>Mateo Alvarez</UserName>
        </Link>
        <ButtonMenu onClick={handleChangeMenu}>
          <LineOfButtons></LineOfButtons>
        </ButtonMenu>
        {isOpenMenu && <section>information</section>}
      </Header>
      <PrincipalSection>
        <TitleOfList>Reserva un horario</TitleOfList>
        <ListOfTargets />
      </PrincipalSection>
    </HomeContainer>
  )
}

export default HomeSportPlayer
