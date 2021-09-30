import { GOOGLE_ERRORS } from 'config/errorTypes'
import { Context } from 'context/userContext'
import { signInWithGoogle } from 'firebase/googleAuth'
import { useContext } from 'react'
import { useLocation } from 'wouter'

export const useGoogleSignIn = () => {
  const [, setLocation] = useLocation()
  const { setUser } = useContext(Context)

  const handleLogin = async () => {
    const user = await signInWithGoogle()

    user === GOOGLE_ERRORS.NOT_SUBSCRIPTION
      ? setLocation('/user-not-found')
      : setUser(user)
  }

  return { handleLogin }
}
