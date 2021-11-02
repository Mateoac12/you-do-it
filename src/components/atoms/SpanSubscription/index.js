import { SUBSCRIPTION_UI } from 'config/typeOfSubs'
import PropTypes from 'prop-types'
import { SpanText } from './styles'

const SpanSubscription = ({ children }) => {
  const textToUI = SUBSCRIPTION_UI[children] || children

  return <SpanText type={children}>{textToUI}</SpanText>
}

SpanSubscription.propTypes = {
  children: PropTypes.node.isRequired,
}

export default SpanSubscription
