import HomeSportPlayer from 'pages/HomeSportPlayer'
import firebase from 'firebase/app'
import Landing from 'pages/Landing'
import Start from 'pages/Start'
import StartAthlete from 'pages/StartAthlete'
import { Switch, Route } from 'wouter'
import SignIn from 'pages/SignIn'
import AboutApp from 'pages/AboutApp'
import AddCodeGym from 'pages/AddCodeGym'
import { useContext, useEffect } from 'react'
import { Context } from 'context/userContext'
import { getUserOfCollection } from 'firebase/googleAuth'

const Routers = () => {
  const { user, setUser } = useContext(Context)

  useEffect(() => {
    firebase.auth().onAuthStateChanged(async (preUser) => {
      if (preUser?.uid && !user) {
        const userLogged = await getUserOfCollection(preUser.uid)
        userLogged && setUser(userLogged)
      }
    })
  }, [])

  return (
    <Switch>
      <>
        <Route path='/home' component={HomeSportPlayer} />

        <Route path='/' component={Landing} />
        <Route path='/start' component={Start} />
        <Route path='/sign-in' component={SignIn} />
        <Route path='/start-as-athlete' component={StartAthlete} />
        <Route path='/about-app' component={AboutApp} />
        <Route path='/add-code-gym' component={AddCodeGym} />
      </>
    </Switch>
  )
}

export default Routers
