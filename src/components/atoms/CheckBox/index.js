import { useState } from 'react'
import { CircleCheck, InputCheck } from './styles'

const CheckBox = () => {
  const [isChecked, setIsChecked] = useState(false)

  return (
    <>
      <InputCheck
        id='name'
        type='checkbox'
        onChange={() => setIsChecked((lastValue) => !lastValue)}
        checked={isChecked}
      />
      <CircleCheck htmlFor='name' isChecked={isChecked}></CircleCheck>
    </>
  )
}

export default CheckBox
