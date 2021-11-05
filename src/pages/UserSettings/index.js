import { useContext, useState } from 'react'

import { Context } from 'context/userContext'
import { useLogout } from 'hooks/useLogout'

import ButtonFunction from 'components/atoms/ButtonFunction'
import AlertModal from 'components/atoms/AlertModal'
import NameSettings from './NameSettings'
import AvatarSettings from './AvatarSettings'

import { PageContent } from './styles'

const UserSettings = () => {
  const { user, setUser } = useContext(Context)

  const [customError, setCustomError] = useState(null)
  const [loadingFetch, setLoadingFetch] = useState(false)

  const handleLogout = () => useLogout(setUser)

  return (
    <PageContent>
      <AvatarSettings
        loadingFetch={loadingFetch}
        setLoadingFetch={setLoadingFetch}
        setCustomError={setCustomError}
        user={user}
        setUser={setUser}
      />

      <NameSettings
        loadingFetch={loadingFetch}
        setLoadingFetch={setLoadingFetch}
        setCustomError={setCustomError}
        user={user}
        setUser={setUser}
      />

      <ButtonFunction text='Cerrar Sesion' onClick={handleLogout} />

      {customError && (
        <AlertModal setNullError={setCustomError}>{customError}</AlertModal>
      )}
    </PageContent>
  )
}

export default UserSettings
