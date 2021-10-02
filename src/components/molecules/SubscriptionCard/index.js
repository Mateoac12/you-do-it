import PropTypes from 'prop-types'
import PrimaryCard from './PrimaryCard'
import SecondaryCard from './SecondaryCard'

import { START_TARGET } from 'config/componentsRules'

const SubscriptionCard = ({ type }) => {
  return (
    <>{type === START_TARGET.SECONDATY ? <SecondaryCard /> : <PrimaryCard />}</>
  )
}

SubscriptionCard.propTypes = {
  type: PropTypes.number,
}

export default SubscriptionCard
