import PropTypes from 'prop-types'
import { useState } from 'react'
import { InputBar, Label } from './styles'

const Input = ({ placeholder, label, name, ...props }) => {
  const [inputValue, setInputValue] = useState('')

  const handleChangeValue = (e) => setInputValue(e.target.value)

  return (
    <>
      {label && <Label htmlFor={name}>{label}</Label>}
      <InputBar
        placeholder={placeholder}
        value={inputValue}
        onChange={handleChangeValue}
        name={name}
        {...props}
      />
    </>
  )
}

Input.propTypes = {
  placeholder: PropTypes.string,
  label: PropTypes.node,
  name: PropTypes.string,
}

export default Input
