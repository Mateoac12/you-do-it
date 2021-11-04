const ERROR_LIST = {
  'Must be a strong password':
    'La contraseña debe tener al menos una mayúscula, un símbolo, un número y varios caracteres',

  'Was exist this user with the same email':
    'Ya existe un usuario registrado con ese email',

  'Incorrect password or login with signIn with Google':
    'Email o contraseña incorrecta',

  'User not exist': 'El usuario no existe',

  'Is not a corrert image format. Must like: png,jpeg,jpg,gif ':
    'La imagen tiene que tener un formato de .png, .jpeg, .jpg o .gif',

  'Gym not valid in database':
    'No se ha encontrado un gimnasio con esas características',

  default: 'Ha ocurrido un error, revise sus campos.',
}

export const useControlError = (error) => {
  const { data } = error.response
  const errorName = data.error || data.errors[0].msg
  console.error(errorName)

  const message = ERROR_LIST[errorName] || ERROR_LIST.default

  return {
    error: message,
  }
}
