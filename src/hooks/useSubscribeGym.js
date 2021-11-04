import axios from 'axios'
import { useControlError } from 'hooks/useControlError'

export const useSubscribeGym = async (gymName, codeGym, tokenID) => {
  const nameEmpty =
    gymName.trim().length === 0 && 'El nombre no puede estar vacio'
  const gymEmpty =
    codeGym.trim().length === 0 && 'El codigo no puede estar vacio'

  const haveError = nameEmpty || gymEmpty

  try {
    if (haveError) {
      return {
        error: haveError,
        data: null,
      }
    }
    const { data } = await axios.put(
      process.env.REACT_APP_SUBSCRIBE_CLASS,
      {
        nameGym: gymName,
        gymCodeID: codeGym,
      },
      {
        headers: {
          'x-token': tokenID,
        },
      }
    )

    return {
      data,
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
