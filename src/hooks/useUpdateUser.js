export const useUpdateUser = async (updateUser, setUser) => {
  const { tokenID, ...user } = updateUser
  console.log({ tokenID, user })
  window.localStorage.setItem('user', JSON.stringify(user))
  window.localStorage.setItem('token', tokenID)

  setUser({
    ...updateUser,
  })
}
