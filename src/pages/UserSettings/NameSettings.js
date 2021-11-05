import PropTypes from 'prop-types'

import { BoxDisplayNameSettings, ButtonInput } from './styles'
import Input from 'components/atoms/Input'
import { useState } from 'react'
import { useUploadName } from 'hooks/useUploadName'
import { useUpdateUser } from 'hooks/useUpdateUser'

const NameSettings = ({
  setUser,
  user,
  loadingFetch,
  setLoadingFetch,
  setCustomError,
}) => {
  const [nameValue, setNameValue] = useState(user.displayName)

  const handleChangeName = (e) => setNameValue(e.target.value)

  const handleSubmitName = async () => {
    setLoadingFetch(true)
    const { data, error } = await useUploadName(nameValue, user)
    setLoadingFetch(false)

    error ? setCustomError(error) : await useUpdateUser(data, setUser)
  }

  return (
    <BoxDisplayNameSettings>
      <Input
        value={nameValue}
        onChange={handleChangeName}
        placeholder={user.displayName}
      />
      <ButtonInput onClick={handleSubmitName} disabled={loadingFetch}>
        Guardar Nombre
      </ButtonInput>
    </BoxDisplayNameSettings>
  )
}

NameSettings.propTypes = {
  setUser: PropTypes.func,
  user: PropTypes.object,
  loadingFetch: PropTypes.bool,
  setLoadingFetch: PropTypes.func,
  setCustomError: PropTypes.func,
}

export default NameSettings
