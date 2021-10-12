import Avatar from 'components/atoms/Avatar'
import Title from 'components/atoms/Title'
import { AVATAR_STYLE } from 'config/componentsRules'
import { Context } from 'context/userContext'
import { useContext, useEffect, useRef, useState } from 'react'
import firebase from 'firebase/app'
import uploadImage from 'firebase/upleadUserImage'
import { ButtonInput, Input, InputHidde, PageContent } from './styles'
import ButtonFunction from 'components/atoms/ButtonFunction'

const UserSettings = () => {
  const [task, setTask] = useState(null)
  const [showInput, setShowInput] = useState(false)
  const [newName, setNewName] = useState('')
  const { user, setUser } = useContext(Context)
  const { displayName, photoURL, id } = user
  const file = useRef()

  const handleChange = () => {
    file.current.click()
  }

  const handleSubmitImage = (e) => {
    const file = e.target.files[0]
    const ref = firebase
      .storage()
      .ref(`/user-images/${encodeURI(displayName)}/${file.name}`)
    const task = ref.put(file)
    setTask(task)
  }

  const handleLogout = () => {
    firebase
      .auth()
      .signOut()
      .then(() => {
        setUser(null)
      })
  }

  const handleChangeName = () => setShowInput((lastValue) => !lastValue)
  const handleChangeNewName = (e) => setNewName(e.target.value)

  useEffect(() => {
    if (task) {
      const getComplete = () => {
        task.snapshot.ref.getDownloadURL().then((newImage) => {
          uploadImage({ id, image: newImage, user, setUser })
        })
      }

      task.on('state_changed', getComplete)
    }
  }, [task])

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
