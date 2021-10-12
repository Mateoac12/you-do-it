import { useState } from 'react'

const TrainerHome = () => {
  const [data, setData] = useState({})

  const handleSubmit = (e) => {
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
      <input name='displayName' placeholder='Nombre del Gym'></input>
      <input
        name='activityName'
        placeholder='Actividad. ej: sala, fisio, etc.'
      ></input>
      <input
        name='limitUsers'
        type='number'
        placeholder='Numero de cupos'
      ></input>
      <input name='date' type='datetime-local'></input>
      <button>Crear clase</button>
    </form>
  )
}

export default TrainerHome
