export const usePasswordChecker = (firstPassword, secondPassword) => {
  const normalizedFirst = firstPassword.trim()
  const normalizedSeocnd = secondPassword.trim()

  const isSamePassword = normalizedFirst === normalizedSeocnd
  return isSamePassword
}
