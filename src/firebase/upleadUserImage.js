import db from 'firebase/config'

const uploadImage = ({ id, image, user, setUser }) => {
  const userCollections = db.collection('users')
  const currentUser = userCollections.doc(id)
  currentUser.update({
    photoURL: image,
  })
  setUser({
    ...user,
    photoURL: image,
  })
}

export default uploadImage
