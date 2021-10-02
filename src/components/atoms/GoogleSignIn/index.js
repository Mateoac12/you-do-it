import { useGoogleSignIn } from 'hooks/useGoogleSignIn'
import PropTypes from 'prop-types'
import googleLogo from 'assets/logo/google.png'

import { ButtonContainer, GoogleImage, TextButton } from './styles'

const GoogleSignIn = ({ typeOfSub = null } = {}) => {
  const { handleLogin } = useGoogleSignIn({ typeOfSub })

  return (
    <ButtonContainer onClick={handleLogin}>
      <GoogleImage src={googleLogo} alt='Google' />
      <TextButton>Sign in with Google</TextButton>
    </ButtonContainer>
  )
}

GoogleSignIn.propTypes = {
  typeOfSub: PropTypes.oneOfType([PropTypes.any, PropTypes.string]),
}

export default GoogleSignIn
