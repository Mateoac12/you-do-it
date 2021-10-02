import firebase from 'firebase/app'

import { useContext, useEffect, useState } from 'react'
import { Context } from 'context/userContext'
import { getUserOfCollection } from 'firebase/googleAuth'

import { Loading } from 'components/atoms/Spinner/styles'
import PrivateRoutes from './privateRoutes'
import PublicRoutes from './publicRoutes'

const Routers = () => {
  const { user, setUser } = useContext(Context)
  const [loader, setLoader] = useState(true)

  useEffect(() => {
    firebase.auth().onAuthStateChanged(async (preUser) => {
      if (preUser?.uid && !user) {
        const userLogged = await getUserOfCollection(preUser.uid)
        userLogged && setUser(userLogged)
      }
      setLoader(false)
    })
  }, [])

  return (
    <>{loader ? <Loading /> : user ? <PrivateRoutes /> : <PublicRoutes />}</>
  )
}

export default Routers
