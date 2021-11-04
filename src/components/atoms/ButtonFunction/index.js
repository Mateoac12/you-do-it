import PropTypes from 'prop-types'
import { ButtonStyle } from './styles'

const ButtonFunction = ({ text, onClick, type, loading }) => {
  return (
    <ButtonStyle onClick={onClick} type={type} disabled={loading}>
      {text}
    </ButtonStyle>
  )
}

ButtonFunction.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  type: PropTypes.number,
  loading: PropTypes.bool,
}

export default ButtonFunction
