import axios from 'axios'

import { usePasswordChecker } from 'hooks/usePasswordChecker'
import { useControlError } from 'hooks/useControlError'

export const useCreateUser = async (userData, typeUser) => {
  const { password, secondPassword } = userData
  const isSamePassword = usePasswordChecker(password, secondPassword)

  try {
    if (!isSamePassword) {
      return { data: null, error: 'Revise que ambas contraseñas sean iguales' }
    }

    const { data } = await axios.post(process.env.REACT_APP_USER_API, {
      ...userData,
      role: typeUser,
    })

    return { data, error: null }
  } catch (err) {
    const { error } = useControlError(err)
    return { data: null, error }
  }
}
