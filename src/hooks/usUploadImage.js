import axios from 'axios'
import { useControlError } from './useControlError'

export const useUploadImage = async (file, userID, tokenID) => {
  if (!file) {
    return {
      data: null,
      error: 'No se ha seleccionado ninguna imagen',
    }
  }

  try {
    const bodyFormData = new FormData()
    bodyFormData.append('avatar', file)

    const { data } = await axios({
      method: 'put',
      url: `${process.env.REACT_APP_UPLOAD_IMAGE}${userID}`,
      headers: {
        'x-token': tokenID,
        'Content-Type': 'multipart/form-data',
      },
      data: bodyFormData,
    })

    return {
      data,
      error: null,
    }
  } catch (err) {
    console.dir(err)
    const { error } = useControlError(err)
    return {
      data: null,
      error,
    }
  }
}
