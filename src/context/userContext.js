import { createContext, useState } from 'react'
import PropTypes from 'prop-types'

export const Context = createContext({
  type: 'Impossible make connection with user provider. Check the rrot access.',
})

const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  return (
    <Context.Provider value={{ user, setUser }}>{children}</Context.Provider>
  )
}

UserProvider.propTypes = {
  children: PropTypes.node.isRequired,
}

export default UserProvider
