import PropTypes from 'prop-types'
import { LineText } from './styles'

const Text = ({ children }) => {
  return <LineText>{children}</LineText>
}

Text.propTypes = {
  children: PropTypes.string,
}

export default Text
