import HomeSportPlayer from 'pages/HomeSportPlayer'
import { onAuthStateChanged, getAuth } from 'firebase/auth'

import Landing from 'pages/Landing'
import Start from 'pages/Start'
import StartAthlete from 'pages/StartAthlete'
import { Switch, Route, Redirect } from 'wouter'
import { useContext, useEffect, useState } from 'react'
import { collection, getDocs, getFirestore } from '@firebase/firestore'
import { Loading } from 'components/atoms/Spinner/styles'
import { Context } from 'context/userContext'
import SignIn from 'pages/SignIn'

const Routers = () => {
  const { setUser } = useContext(Context)
  const [userAuth, setUserAuth] = useState('')
  const [loading, setLoading] = useState(true)
  const auth = getAuth()

  useEffect(() => {
    onAuthStateChanged(auth, async (user) => {
      if (user?.uid) {
        const db = getFirestore()
        const usersMap = await getDocs(collection(db, 'users'))
        const currentUser = await usersMap.docs.find(
          (doc) => doc.data().uid === user.uid
        )
        const { subscription } = currentUser.data()
        setUserAuth(subscription)
        setUser(currentUser.data())
        setLoading(false)
      } else {
        setUser({})
        setUserAuth('')
      }
      setLoading(false)
    })
    return () => {}
  }, [])

  return (
    <Switch>
      {loading === false ? (
        <>
          {userAuth === 'sportPlayer' ? (
            <>
              <Route path='/home' component={HomeSportPlayer} />
              <Redirect to='/home' />
            </>
          ) : (
            <>
              <Route path='/' component={Landing} />
              <Route path='/start' component={Start} />
              <Route path='/sign-in' component={SignIn} />
              <Route path='/start-as-athlete' component={StartAthlete} />
              <Redirect to='/' />
            </>
          )}
        </>
      ) : (
        <Loading />
      )}
    </Switch>
  )
}

export default Routers
