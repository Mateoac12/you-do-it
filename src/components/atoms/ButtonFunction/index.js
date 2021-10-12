import PropTypes from 'prop-types'
import { ButtonStyle } from './styles'

const ButtonFunction = ({ text, onClick, type }) => {
  return <ButtonStyle onClick={onClick}>{text}</ButtonStyle>
}

ButtonFunction.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  type: PropTypes.number,
}

export default ButtonFunction
