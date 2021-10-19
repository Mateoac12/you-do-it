import PropTypes from 'prop-types'
import { useState } from 'react'
import { InputBar } from './styles'

const Input = ({ placeholder }) => {
  const [inputValue, setInputValue] = useState('')

  const handleChangeValue = (e) => setInputValue(e.target.value)

  return (
    <>
      <InputBar
        placeholder={placeholder}
        value={inputValue}
        onChange={handleChangeValue}
      />
    </>
  )
}

Input.propTypes = {
  placeholder: PropTypes.string,
}

export default Input
