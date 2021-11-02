import { useContext, useEffect, useState } from 'react'
import { Context } from 'context/userContext'

import { Loading } from 'components/atoms/Spinner/styles'
import PrivateRoutes from './privateRoutes'
import PublicRoutes from './publicRoutes'

const Routers = () => {
  const { user } = useContext(Context)
  const [loader, setLoader] = useState(true)

  // TODO: chequear en indexedDB o localStorage si existe un token y el objeto User. (posible hook)
  useEffect(() => {
    setLoader(false)
  }, [])

  return (
    <>{loader ? <Loading /> : user ? <PrivateRoutes /> : <PublicRoutes />}</>
  )
}

export default Routers
