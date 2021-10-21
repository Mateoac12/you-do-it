import ButtonLink from 'components/atoms/ButtonLink'
import Text from 'components/atoms/Text'
import Title from 'components/atoms/Title'

import { BUTTON_STYLE } from 'config/componentsRules'

const SportPlayerHome = () => {
  return (
    <>
      <Title>Aun no te has inscropto a ningun gimnasio</Title>
      <Text>Quieres agregar uno?</Text>
      <ButtonLink
        href='/add-code-gym'
        text='Agregar gimnasio'
        type={BUTTON_STYLE.SECONDARY}
      />
    </>
  )
}

export default SportPlayerHome
