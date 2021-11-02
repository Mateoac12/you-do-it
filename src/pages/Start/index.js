import Text from 'components/atoms/Text'
import Title from 'components/atoms/Title'
import ListOfCardSubscriptions from 'components/layouts/ListOfCardSubscriptions'
import { TEXT_STYLE, TITLE_STYLE } from 'config/componentsRules'

const Start = () => {
  return (
    <>
      <Title type={TITLE_STYLE.PRINCIPAL}>Comienza!</Title>
      <Text>👇🏻 Elige tu tipo de perfil! 👇🏻</Text>
      <Text type={TEXT_STYLE.SECONDARY}>
        Si eres socio de un Club debes inscribete como Deportista. Si eres el
        dueño o el Entrenador, debes inscribirte como Entrenador.
      </Text>
      <ListOfCardSubscriptions />
    </>
  )
}

export default Start
