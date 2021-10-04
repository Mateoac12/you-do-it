import db from 'firebase/config'

const uploadName = ({ id, newName, user, setUser }) => {
  const userCollections = db.collection('users')
  const currentUser = userCollections.doc(id)
  currentUser.update({
    displayName: newName,
  })
  setUser({
    ...user,
    displayName: newName,
  })
}

export default uploadName
