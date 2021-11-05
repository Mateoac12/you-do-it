import { useContext, useRef, useState } from 'react'
import { useForm } from 'react-hook-form'

import Input from 'components/atoms/Input'
import InputError from 'components/atoms/InputError'
import Title from 'components/atoms/Title'
import Form from 'components/molecules/Form'
import { useLoginUser } from 'hooks/useLoginUser'
import { useSaveUser } from 'hooks/useSaveUser'
import { Context } from 'context/userContext'

const SignIn = () => {
  const emailInput = useRef()
  const passwordInput = useRef()

  const [customError, setCustomError] = useState(null)
  const [loadingFetching, setLoadingFetching] = useState(false)

  const { setUser } = useContext(Context)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = async (data) => {
    setLoadingFetching(true)

    const { email, password } = data
    const { error, data: user } = await useLoginUser({ email, password })

    error ? setCustomError(error) : useSaveUser(user, setUser)
    setLoadingFetching(false)
  }

  return (
    <>
      <Title>Iniciar sesión</Title>
      <Form
        textSubmit='Iniciar sesión'
        onSubmit={handleSubmit(onSubmit)}
        loading={loadingFetching}
      >
        <Input
          ref={emailInput}
          label='Correo electrónico'
          name='email'
          placeholder='you.do.it@gym.com'
          {...register('email', { required: true })}
        />
        {errors.email && <InputError>El email no puede estar vacío</InputError>}

        <Input
          ref={passwordInput}
          label='Contraseña'
          name='password'
          type='password'
          placeholder='****'
          {...register('password', { required: true })}
        />
        {errors.password && (
          <InputError>La contraseña no puede estar vacía</InputError>
        )}
        {customError && <InputError>{customError}</InputError>}
      </Form>
    </>
  )
}

export default SignIn
