import axios from 'axios'
import { useControlError } from './useControlError'

export const useUploadName = async (name, user) => {
  if (name.trim().length === 0)
    return {
      data: null,
      error: 'El nombre debe tener al menos un caracter',
    }

  try {
    const { data } = await axios.put(
      process.env.REACT_APP_USER_API,
      {
        uid: user.uid,
        displayName: name,
      },
      {
        headers: {
          'x-token': user.tokenID,
        },
      }
    )

    return {
      data: {
        ...data.user,
        tokenID: user.tokenID,
      },
      error: null,
    }
  } catch (err) {
    const { error } = useControlError(err)
    return {
      data: null,
      error,
    }
  }
}
