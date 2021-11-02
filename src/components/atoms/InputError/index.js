import PropTypes from 'prop-types'
import { Error } from './styles'

const InputError = ({ children }) => {
  return <Error>{children}</Error>
}

InputError.propTypes = {
  children: PropTypes.node,
}

export default InputError
