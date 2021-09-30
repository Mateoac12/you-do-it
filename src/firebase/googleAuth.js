import { GOOGLE_ERRORS } from 'config/errorTypes'
import firebase from 'firebase'
import 'firebase/auth'
import db from 'firebase/config'

const googleProvider = new firebase.auth.GoogleAuthProvider()
const usersCollection = db.collection('users')

export const signInWithGoogle = async () => {
  const { user } = await firebase.auth().signInWithPopup(googleProvider)
  const { email, displayName, photoURL, uid } = user

  usersCollection.add({
    email,
    displayName,
    photoURL,
    uid,
  })

  return await getUserOfCollection(uid)
}

/**
 * @param {String} uid ID of user that login
 * @returns {(object|GOOGLE_ERRORS.NOT_SUBSCRIPTION)} if user exist in user's collection, return user. If not return custom error
 */
export const getUserOfCollection = async (uid) => {
  const userFound = await usersCollection.where('uid', '==', uid).get()
  const [userLogged] = userFound.docs.map((u) => getStatusOfSubscription(u))

  return userLogged
}

const getStatusOfSubscription = (user) => {
  const userData = user.data()
  const typeOfUser = userData.subscription

  return typeof typeOfUser === 'undefined'
    ? GOOGLE_ERRORS.NOT_SUBSCRIPTION
    : userData
}
