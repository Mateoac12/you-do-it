import { START_TARGET } from 'config/componentsRules'
import { SUBSCRIPTIONS } from 'config/typeOfSubs'
import { useGoogleSignIn } from 'hooks/useGoogleSignIn'

import {
  BoxTarget,
  ListText,
  NormalText,
  SmallText,
  TitleOfTarget,
} from './styles'

const SecondaryCard = () => {
  const { handleLogin } = useGoogleSignIn({
    typeOfSub: SUBSCRIPTIONS.TRAINER,
  })

  return (
    <BoxTarget type={START_TARGET.SECONDATY} onClick={handleLogin}>
      <SmallText>Entrenador</SmallText>
      <TitleOfTarget>Cuenta de entrenador</TitleOfTarget>
      <NormalText>Con este usuario puedes</NormalText>
      <ul>
        <ListText>
          Crear una cuenta de Gimnasio y administrar tus usuarios.
        </ListText>
        <ListText>Crear cupos por día y hora.</ListText>
      </ul>
    </BoxTarget>
  )
}

export default SecondaryCard
