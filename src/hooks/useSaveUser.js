export const useSaveUser = async (userData, setUser) => {
  const tokenSave = window.localStorage.getItem('token')
  const userSave = window.localStorage.getItem('user')

  if (tokenSave && userSave) {
    return setUser({
      ...JSON.parse(userSave),
      tokenID: tokenSave,
    })
  } else {
    if (!userData) return

    window.localStorage.setItem('token', userData?.tokenID)
    window.localStorage.setItem('user', JSON.stringify(userData?.user))

    setUser({
      ...userData.user,
      tokenID: userData.tokenID,
    })
  }
}
