import ButtonLink from 'components/atoms/ButtonLink'
import Title from 'components/atoms/Title'
import ListOfTargets from 'components/layouts/ListOfTargets'
import { BUTTON_STYLE, TITLE_STYLE } from 'config/componentsRules'
import { Context } from 'context/userContext'
import { useContext, useState } from 'react'
import {
  Avatar,
  ButtonMenu,
  Header,
  HomeContainer,
  LineOfButtons,
  Link,
  PrincipalSection,
  SettingsBox,
  TitleOfList,
  UserName,
} from './styles'

const HomeSportPlayer = () => {
  const [isOpenMenu, setIsOpenMenu] = useState(false)
  const { user } = useContext(Context)
  const { displayName, photoURL } = user
  const handleChangeMenu = () => setIsOpenMenu((lastValue) => !lastValue)

  return (
    <HomeContainer>
      <Header>
        <Link href='/user'>
          <Avatar src={photoURL} alt='title' />
          <UserName>{displayName}</UserName>
        </Link>
        <ButtonMenu onClick={handleChangeMenu}>
          <LineOfButtons isOpenMenu={isOpenMenu}></LineOfButtons>
        </ButtonMenu>
      </Header>
      <PrincipalSection>
        {isOpenMenu ? (
          <SettingsBox>
            <Title type={TITLE_STYLE.SECONDARY}>
              Puedes agregar un nuevo gimnasio o salir del que ya estás.
            </Title>
            <div>
              <ButtonLink
                href='/add-code-gym'
                text='Agregar Gym'
                type={BUTTON_STYLE.SECONDARY}
              />
              <ButtonLink
                href=''
                text='Eliminar Gym'
                type={BUTTON_STYLE.ALTERNATIVE}
              />
            </div>
          </SettingsBox>
        ) : (
          <>
            <TitleOfList>Reserva un horario</TitleOfList>
            <ListOfTargets />
          </>
        )}
      </PrincipalSection>
    </HomeContainer>
  )
}

export default HomeSportPlayer
