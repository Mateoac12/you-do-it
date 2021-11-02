import PropTypes from 'prop-types'
import { forwardRef } from 'react'
import { InputBar, Label } from './styles'

const Input = forwardRef(({ placeholder, label, name, ...props }, ref) => {
  return (
    <>
      {label && <Label htmlFor={name}>{label}</Label>}
      <InputBar placeholder={placeholder} name={name} ref={ref} {...props} />
    </>
  )
})

Input.propTypes = {
  placeholder: PropTypes.string,
  label: PropTypes.node,
  name: PropTypes.string,
}

export default Input
