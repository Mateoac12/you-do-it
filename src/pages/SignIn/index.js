import { Context } from 'context/userContext'
import { LoginWithGoogle } from 'firebase/config'
import { useContext } from 'react'

const SignIn = () => {
  const { setUser } = useContext(Context)

  const handleLogin = () => {
    LoginWithGoogle().then((data) => setUser({ ...data }))
  }

  return (
    <>
      <h1>Iniciar sesion</h1>
      <button onClick={handleLogin}>Iniciar sesion con google</button>
    </>
  )
}

export default SignIn
