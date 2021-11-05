import { useContext, useRef, useState } from 'react'
import { useForm } from 'react-hook-form'
import PropTypes from 'prop-types'

import { useCreateUser } from 'hooks/useCreateUser'
import { useSaveUser } from 'hooks/useSaveUser'

import Form from 'components/molecules/Form'
import Input from 'components/atoms/Input'
import InputError from 'components/atoms/InputError'
import SpanSubscription from 'components/atoms/SpanSubscription'
import Title from 'components/atoms/Title'

import { SUBSCRIPTIONS, SUBSCRIPTION_UI } from 'config/typeOfSubs'
import { Context } from 'context/userContext'

const Register = ({ params }) => {
  const { setUser } = useContext(Context)

  const displayNameInput = useRef(null)
  const emailInput = useRef(null)
  const passwordInput = useRef(null)
  const secondPasswordInput = useRef(null)

  const [customError, setCustomError] = useState(null)
  const [loadingFetching, setLoadingFetching] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = async (data) => {
    setLoadingFetching(true)
    const { error, data: user } = await useCreateUser(data, params.type)

    !error ? useSaveUser(user, setUser) : setCustomError(error)
    setLoadingFetching(false)
  }

  const [displayName, placeholderName] =
    params.type === SUBSCRIPTIONS.SPORTPLAYER
      ? ['Nombre de usuario', 'Juan Carlo']
      : ['Nombre del gimnasio', 'Remove']

  return (
    <>
      <Title>Registrarse con cuenta de {SUBSCRIPTION_UI[params.type]}</Title>

      <Form
        textSubmit='Registrarse'
        onSubmit={handleSubmit(onSubmit)}
        loading={loadingFetching}
      >
        <SpanSubscription>{params.type}</SpanSubscription>

        <Input
          ref={displayNameInput}
          label={displayName}
          name='displayName'
          placeholder={placeholderName}
          {...register('displayName', { required: true })}
        />
        {errors.displayName && (
          <InputError>{displayName} no puede estar vacío</InputError>
        )}

        <Input
          ref={emailInput}
          label='Correo electrónico'
          name='email'
          placeholder='youdoit@test.com'
          {...register('email', { required: true })}
        />
        {errors.email && <InputError>El email no puede estar vacío</InputError>}

        <Input
          ref={passwordInput}
          type='password'
          label='Contraseña'
          name='passwordFirst'
          placeholder='****'
          {...register('password', { required: true })}
        />
        {errors.password && (
          <InputError>La contraseña no puede estar vacía</InputError>
        )}

        <Input
          ref={secondPasswordInput}
          type='password'
          label='Repetir contraseña'
          name='passwordSecond'
          placeholder='****'
          {...register('secondPassword', { required: true })}
        />
        {errors.secondPassword && (
          <InputError>La contraseña no puede estar vacía</InputError>
        )}
        {customError && <InputError>{customError}</InputError>}
      </Form>
    </>
  )
}

Register.propTypes = {
  params: PropTypes.objectOf(PropTypes.string).isRequired,
}

export default Register
