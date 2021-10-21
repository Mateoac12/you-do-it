import ButtonFunction from 'components/atoms/ButtonFunction'
import Input from 'components/atoms/Input'
import { BUTTON_STYLE } from 'config/componentsRules'
import { useState } from 'react'

const TrainerHome = () => {
  const [data, setData] = useState({})

  const handleSubmit = (e) => {
    console.log(e.target)
    e.preventDefault()
    setData({
      displayName: e.target.displayName.value,
      activityName: e.target.activityName.value,
      limitUsers: e.target.limitUsers.value,
      date: e.target.date.value,
    })
  }
  console.log(data)
  return (
    <form onSubmit={handleSubmit}>
      <Input
        label='Nombre del Gymnasio:'
        name='displayName'
        placeholder='Nombre del Gym'
      />

      <Input
        placeholder='Sala, fisio...'
        name='activityName'
        label='Actividad del dia:'
      />

      <Input
        placeholder='Cupos'
        name='limitUsers'
        type='number'
        label='Cupos de la clase:'
      />

      <Input
        placeholder='Cupos'
        name='date'
        type='datetime-local'
        label='Agregar fecha:'
      />

      <ButtonFunction type={BUTTON_STYLE.SECONDARY} text='Crear clase' />
    </form>
  )
}

export default TrainerHome
