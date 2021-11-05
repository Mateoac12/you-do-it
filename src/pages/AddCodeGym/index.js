import { useState, useContext } from 'react'

import { BUTTON_STYLE, TITLE_STYLE } from 'config/componentsRules'
import { Context } from 'context/userContext'

import { PageContainer } from 'pages/AboutApp/styles'

import { useUpdateUser } from 'hooks/useUpdateUser'
import { useSubscribeGym } from 'hooks/useSubscribeGym'

import ButtonFunction from 'components/atoms/ButtonFunction'
import Input from 'components/atoms/Input'
import Title from 'components/atoms/Title'
import AlertModal from 'components/atoms/AlertModal'
import { useLocation } from 'wouter'

const AddCodeGym = () => {
  const [, setLocation] = useLocation()
  const { user, setUser } = useContext(Context)
  const { tokenID } = user

  const [gymName, setGymName] = useState('')
  const [codeGym, setCodeGym] = useState('')
  const [customError, setCustomError] = useState(null)
  const [loadingFetch, setLoadingFetch] = useState(false)

  const handleSetName = (e) => setGymName(e.target.value)
  const handleSetCode = (e) => setCodeGym(e.target.value)

  const handleSubscribeGym = async () => {
    setLoadingFetch(true)
    const { data, error } = await useSubscribeGym(gymName, codeGym, tokenID)

    error
      ? setCustomError(error)
      : useUpdateUser({ ...data.user, tokenID }, setUser).then(setLocation('/'))

    setLoadingFetch(false)
  }

  return (
    <PageContainer>
      <Title>Agregar gimnasio</Title>
      <Title type={TITLE_STYLE.SECONDARY}>
        Ingrese el nick del gimnasio y su codigo
      </Title>
      <Input placeholder='RemoveGym' onChange={handleSetName} value={gymName} />
      <Input placeholder='1423' onChange={handleSetCode} value={codeGym} />
      <ButtonFunction
        onClick={handleSubscribeGym}
        text='Agregar gimnasio'
        type={BUTTON_STYLE.SECONDARY}
        loading={loadingFetch}
      />
      {customError && (
        <AlertModal setNullError={setCustomError}>{customError}</AlertModal>
      )}
    </PageContainer>
  )
}

export default AddCodeGym
