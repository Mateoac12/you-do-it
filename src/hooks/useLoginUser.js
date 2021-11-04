import axios from 'axios'
import { useControlError } from './useControlError'

export const useLoginUser = async ({ email, password }) => {
  try {
    const { data } = await axios.post(process.env.REACT_APP_LOGIN_API, {
      email,
      password,
    })
    return { data, error: null }
  } catch (err) {
    const { error } = useControlError(err)
    return { data: null, error }
  }
}
