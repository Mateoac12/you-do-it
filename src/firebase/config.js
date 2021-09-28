import { initializeApp, getApps } from 'firebase/app'
import {
  GoogleAuthProvider,
  signInWithPopup,
  getAuth,
  signOut,
  updateProfile,
} from 'firebase/auth'

const firebaseConfig = {
  apiKey: 'AIzaSyC9DnRWHRLrH1xHjD4as8IG02B9_nk1uMw',
  authDomain: 'you-do-it-617b0.firebaseapp.com',
  projectId: 'you-do-it-617b0',
  storageBucket: 'you-do-it-617b0.appspot.com',
  messagingSenderId: '298011529462',
  appId: '1:298011529462:web:c9310bfd43cc60b9229cd7',
}

getApps().length === 0 && initializeApp(firebaseConfig)

const auth = getAuth()

export const LoginWithGoogle = () => {
  const googleProvider = new GoogleAuthProvider()

  return signInWithPopup(auth, googleProvider)
    .then(async ({ user }) => {
      updateProfile(auth, {
        tenantId: 'sportPlayer',
      }).then(() => {
        const { uid, photoURL, email, displayName, tenantId } = user
        console.log({ user })
        return {
          uid,
          photoURL,
          email,
          displayName,
          tenantId,
        }
      })
    })
    .catch((error) => {
      const errorCode = error.code
      const errorMessage = error.message
      const email = error.email
      const credential = GoogleAuthProvider.credentialFromError(error)

      console.log({ errorCode, errorMessage, email, credential })
    })
}

export const SignOut = () => {
  signOut(auth)
    .then(() => {
      console.log('deslogueo correcto')
    })
    .catch((error) => {
      console.log(error)
    })
}
