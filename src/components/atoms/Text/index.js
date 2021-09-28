import { TEXT_STYLE } from 'config/componentsRules'
import PropTypes from 'prop-types'
import { LineText } from './styles'

const Text = ({ children, type = TEXT_STYLE.PRIMARY }) => {
  return <LineText type={type}>{children}</LineText>
}

Text.propTypes = {
  children: PropTypes.string,
  type: PropTypes.number,
}

export default Text
