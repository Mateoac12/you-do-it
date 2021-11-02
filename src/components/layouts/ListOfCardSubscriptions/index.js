import SubscriptionCard from 'components/molecules/SubscriptionCard'
import { START_TARGET } from 'config/componentsRules'

import { ListOfTargets } from './styles'

const ListOfCardSubscriptions = () => {
  return (
    <ListOfTargets>
      <SubscriptionCard key={1} />
      <SubscriptionCard key={2} type={START_TARGET.SECONDATY} />
    </ListOfTargets>
  )
}

export default ListOfCardSubscriptions
