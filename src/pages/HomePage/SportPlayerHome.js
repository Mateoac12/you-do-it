import PropTypes from 'prop-types'

import ButtonLink from 'components/atoms/ButtonLink'
import Text from 'components/atoms/Text'
import Title from 'components/atoms/Title'

import { BUTTON_STYLE, TEXT_STYLE } from 'config/componentsRules'
import ListOfTargets from 'components/layouts/ListOfTargets'

const SportPlayerHome = ({ user }) => {
  const haveGymPartner = user?.gymPartner.length !== 0

  return (
    <>
      {haveGymPartner ? (
        <SportPlayerWithGym gymPartners={user.gymPartner} />
      ) : (
        <SportPlayerWithoutGym />
      )}
    </>
  )
}

function SportPlayerWithoutGym() {
  return (
    <>
      <Title>Aún no te has inscrito a ningún gimnasio</Title>
      <Text>Quieres agregar uno?</Text>
      <ButtonLink
        href='/add-code-gym'
        text='Agregar gimnasio'
        type={BUTTON_STYLE.SECONDARY}
      />
    </>
  )
}

function SportPlayerWithGym({ gymPartners }) {
  return (
    <>
      <Text type={TEXT_STYLE.SECONDARY}>Mis Clases</Text>
      <ListOfTargets gymPartners={gymPartners} />
    </>
  )
}

SportPlayerHome.propTypes = {
  user: PropTypes.object,
}

SportPlayerWithGym.propTypes = {
  gymPartners: PropTypes.array,
}

export default SportPlayerHome
