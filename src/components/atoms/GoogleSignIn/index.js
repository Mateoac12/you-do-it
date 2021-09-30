import { useGoogleSignIn } from 'hooks/useGoogleSignIn'
import googleLogo from 'assets/logo/google.png'
import { ButtonContainer, GoogleImage, TextButton } from './styles'

const GoogleSignIn = () => {
  const { handleLogin } = useGoogleSignIn()

  return (
    <ButtonContainer onClick={handleLogin}>
      <GoogleImage src={googleLogo} alt='Google' />
      <TextButton>Sign in with Google</TextButton>
    </ButtonContainer>
  )
}

export default GoogleSignIn
