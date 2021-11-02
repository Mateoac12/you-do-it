import PropTypes from 'prop-types'
import { ButtonSubmit, FormContainer } from './styles'

const Form = ({ children, textSubmit, loading, ...props }) => {
  return (
    <FormContainer {...props}>
      {children}
      <ButtonSubmit type='submit' value={textSubmit} disabled={loading} />
    </FormContainer>
  )
}

Form.propTypes = {
  children: PropTypes.node,
  textSubmit: PropTypes.string.isRequired,
  submit: PropTypes.func,
  loading: PropTypes.bool,
}

export default Form
