export const useLogout = (setUser) => {
  window.localStorage.removeItem('token')
  window.localStorage.removeItem('user')
  setUser(null)
}
