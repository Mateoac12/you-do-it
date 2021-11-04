import { useEffect } from 'react'
import { createPortal } from 'react-dom'
import PropTypes from 'prop-types'

import { Modal } from './styles'

const AlertModal = ({ children, type, setNullError }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      setNullError(null)
    }, 5000)

    return () => clearTimeout(timer)
  }, [])

  return createPortal(
    <Modal type={type}>{children}</Modal>,
    document.getElementById('modal')
  )
}

AlertModal.propTypes = {
  children: PropTypes.node,
  type: PropTypes.string,
  setNullError: PropTypes.func,
}

export default AlertModal
