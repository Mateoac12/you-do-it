import { useContext, useEffect, useState } from 'react'
import { Context } from 'context/userContext'

import { Loading } from 'components/atoms/Spinner/styles'
import PrivateRoutes from './privateRoutes'
import PublicRoutes from './publicRoutes'

const Routers = () => {
  const { user } = useContext(Context)
  const [loader, setLoader] = useState(true)

  useEffect(() => {
    setLoader(false)
  }, [])

  return (
    <>{loader ? <Loading /> : user ? <PrivateRoutes /> : <PublicRoutes />}</>
  )
}

export default Routers
