import { useContext, useEffect, useState } from 'react'
import { Context } from 'context/userContext'

import { Loading } from 'components/atoms/Spinner/styles'
import PrivateRoutes from './privateRoutes'
import PublicRoutes from './publicRoutes'
import { useSaveUser } from 'hooks/useSaveUser'

const Routers = () => {
  const { user, setUser } = useContext(Context)
  const [loader, setLoader] = useState(true)

  useEffect(() => {
    useSaveUser(null, setUser)
    setLoader(false)
  }, [])

  return (
    <>{loader ? <Loading /> : user ? <PrivateRoutes /> : <PublicRoutes />}</>
  )
}

export default Routers
