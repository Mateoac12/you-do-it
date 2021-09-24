import { createContext, useState } from 'react'
import PropTypes from 'prop-types'

export const Context = createContext({ type: 'Not permission' })

const UserProvider = ({ children }) => {
  const [user, setUser] = useState({})
  console.log('info del user desde el contexto', user)
  return (
    <Context.Provider value={{ user, setUser }}>{children}</Context.Provider>
  )
}

UserProvider.propTypes = {
  children: PropTypes.node.isRequired,
}

export default UserProvider
