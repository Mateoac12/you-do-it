import PropTypes from 'prop-types'

import Target from '../Target'
import { Container } from './styles'

const ListOfTargets = ({ gymPartners }) => {
  return (
    <Container>
      {gymPartners.map((gymPartner) => (
        <Target
          key={gymPartner._id}
          classes={gymPartner.classes}
          gymPartner={gymPartner}
        />
      ))}
    </Container>
  )
}

ListOfTargets.propTypes = {
  gymPartners: PropTypes.array,
}

export default ListOfTargets
