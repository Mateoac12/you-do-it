import ButtonLink from 'components/atoms/ButtonLink'
import Avatar from 'components/atoms/Avatar'
import Text from 'components/atoms/Text'
import Title from 'components/atoms/Title'
import ListOfTargets from 'components/layouts/ListOfTargets'
import { BUTTON_STYLE, TITLE_STYLE } from 'config/componentsRules'
import { Context } from 'context/userContext'
import { useContext, useState } from 'react'
import {
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

const testArray = []

const HomeSportPlayer = () => {
  const [isOpenMenu, setIsOpenMenu] = useState(false)
  const { user } = useContext(Context)
  const { displayName, photoURL } = user
  const handleChangeMenu = () => setIsOpenMenu((lastValue) => !lastValue)

  return (
    <HomeContainer>
      <Header>
        <Link href='/user-settings'>
          <Avatar src={photoURL} alt={displayName} />
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
            {testArray.length > 0 ? (
              <>
                <TitleOfList>Reserva un horario</TitleOfList>
                <ListOfTargets />
              </>
            ) : (
              <>
                <Text>Bienvenido!</Text>
                <Text>
                  Aquí vas a poder ver la disponibilidad de cupos en tu
                  gimnasio!
                </Text>
                <ButtonLink
                  href='#'
                  text='Agregar gimnasio'
                  type={BUTTON_STYLE.SECONDARY}
                />
              </>
            )}
          </>
        )}
      </PrincipalSection>
    </HomeContainer>
  )
}

export default HomeSportPlayer
