import Text from 'components/atoms/Text'
import Title from 'components/atoms/Title'
import ListOfCardSubscriptions from 'components/layouts/ListOfCardSubscriptions'
import { TITLE_STYLE } from 'config/componentsRules'

const Start = () => {
  return (
    <>
      <Title type={TITLE_STYLE.PRINCIPAL}>Comienza!</Title>
      <Text>Elige un tipo de perfil</Text>
      <ListOfCardSubscriptions />
    </>
  )
}

export default Start
