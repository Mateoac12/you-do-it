import PropTypes from 'prop-types'
import { CircleCheck, InputCheck } from './styles'

const CheckBox = ({ setIsChecked, isChecked, gymId, isCompleted }) => {
  return (
    <>
      <InputCheck
        id={gymId}
        type='checkbox'
        onChange={() => setIsChecked((lastValue) => !lastValue)}
        checked={isChecked}
        disabled={isCompleted}
      />
      <CircleCheck
        htmlFor={gymId}
        isChecked={isChecked}
        isCompleted={isCompleted}
      ></CircleCheck>
    </>
  )
}

CheckBox.propTypes = {
  setIsChecked: PropTypes.func,
  isChecked: PropTypes.bool,
  gymId: PropTypes.number,
  isCompleted: PropTypes.bool,
}

export default CheckBox
