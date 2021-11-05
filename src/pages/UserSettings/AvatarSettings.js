import { useRef } from 'react'
import PropTypes from 'prop-types'

import { AVATAR_STYLE } from 'config/componentsRules'

import { useUploadImage } from 'hooks/usUploadImage'
import { useUpdateUser } from 'hooks/useUpdateUser'

import Avatar from 'components/atoms/Avatar'

import { ButtonInput, InputHidde } from './styles'

const AvatarSettings = ({
  setLoadingFetch,
  loadingFetch,
  setCustomError,
  user,
  setUser,
}) => {
  const file = useRef()

  const handleSetFileImage = () => file.current.click()

  const handleSubmitImage = async (e) => {
    const imageFile = e.target.files[0]

    setLoadingFetch(true)
    const { data, error } = await useUploadImage(
      imageFile,
      user.uid,
      user.tokenID
    )
    setLoadingFetch(false)

    error
      ? setCustomError(error)
      : await useUpdateUser({ tokenID: user.tokenID, ...data.user }, setUser)
  }
  return (
    <>
      <Avatar
        type={AVATAR_STYLE.BIG}
        src={user.avatar}
        alt={user.displayName}
        loading={loadingFetch}
      />

      <ButtonInput onClick={handleSetFileImage}>Cambiar imagen</ButtonInput>

      <InputHidde
        ref={file}
        type='file'
        accept='image/*'
        onChange={handleSubmitImage}
      />
    </>
  )
}

AvatarSettings.propTypes = {
  setLoadingFetch: PropTypes.func,
  loadingFetch: PropTypes.bool,
  setCustomError: PropTypes.func,
  user: PropTypes.object,
  setUser: PropTypes.func,
}

export default AvatarSettings
