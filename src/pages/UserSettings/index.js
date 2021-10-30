import Avatar from 'components/atoms/Avatar'
import Title from 'components/atoms/Title'
import { AVATAR_STYLE, BUTTON_STYLE } from 'config/componentsRules'
import { Context } from 'context/userContext'
import { useContext, useRef, useState } from 'react'

import { ButtonInput, Input, InputHidde, PageContent } from './styles'
import ButtonFunction from 'components/atoms/ButtonFunction'

const UserSettings = () => {
  const [showInput, setShowInput] = useState(false)
  const [newName, setNewName] = useState('')
  const { user } = useContext(Context)
  const { displayName, photoURL } = user
  const file = useRef()

  const handleChange = () => {
    file.current.click()
  }

  const handleSubmitImage = (e) => {
    console.log(e)
  }

  const handleLogout = () => {
    console.log('')
  }

  const handleChangeName = () => setShowInput((lastValue) => !lastValue)
  const handleChangeNewName = (e) => setNewName(e.target.value)

  return (
    <PageContent>
      <Avatar type={AVATAR_STYLE.BIG} src={photoURL} alt={displayName} />

      <ButtonInput onClick={handleChange}>Cambiar imagen</ButtonInput>
      <InputHidde
        ref={file}
        type='file'
        accept='image/*'
        onChange={handleSubmitImage}
      />

      <Title>{displayName}</Title>
      {showInput && (
        <section>
          <Input value={newName} onChange={handleChangeNewName} />
          <ButtonFunction text='Confirmar cambios' onClick={() => {}} />
          <ButtonFunction
            type={BUTTON_STYLE.TERTIARY}
            text={showInput ? 'Cancelar' : 'Cambiar nombre'}
            onClick={handleChangeName}
          />
        </section>
      )}
      {!showInput && (
        <ButtonFunction text='Cambiar nombre' onClick={handleChangeName} />
      )}
      <ButtonFunction text='Cerrar Sesion' onClick={handleLogout} />
    </PageContent>
  )
}

export default UserSettings
