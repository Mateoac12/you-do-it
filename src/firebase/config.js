import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyC9DnRWHRLrH1xHjD4as8IG02B9_nk1uMw',
  authDomain: 'you-do-it-617b0.firebaseapp.com',
  projectId: 'you-do-it-617b0',
  storageBucket: 'you-do-it-617b0.appspot.com',
  messagingSenderId: '298011529462',
  appId: '1:298011529462:web:c9310bfd43cc60b9229cd7',
  measurementId: 'G-4P27S7FZXZ',
}

firebase.apps.length === 0 && firebase.initializeApp(firebaseConfig)
export default firebase.firestore()
