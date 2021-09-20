import { BUTTON_STYLE, TITLE_STYLE } from 'config/componentsRules'

import ButtonLink from 'components/atoms/ButtonLink'
import Text from 'components/atoms/Text'
import Title from 'components/atoms/Title'
import ListOfTargets from 'components/layouts/ListOfTargets'

const Landing = () => {
  return (
    <>
      <Title type={TITLE_STYLE.PRINCIPAL}>You do it!</Title>
      <Text>Busca tu gimnasio y reserva una hora para ir!</Text>
      <ListOfTargets />
      <div className='button-container'>
        <ButtonLink
          type={BUTTON_STYLE.SECONDARY}
          href='/'
          text='Iniciar sesión'
        />
        <ButtonLink href='/start' text='Empieza Ya!' />
        <ButtonLink
          type={BUTTON_STYLE.TERTIARY}
          href='/'
          text='Como funciona la app?'
        />
      </div>
    </>
  )
}

export default Landing
