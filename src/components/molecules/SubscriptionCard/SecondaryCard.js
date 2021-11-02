import SpanSubscription from 'components/atoms/SpanSubscription'
import { START_TARGET } from 'config/componentsRules'
import { SUBSCRIPTIONS } from 'config/typeOfSubs'
import { useLocation } from 'wouter'

import { BoxTarget, ListText, NormalText, TitleOfTarget } from './styles'

const SecondaryCard = () => {
  const [, setLocation] = useLocation()

  const handleRegisterSportPlayer = () =>
    setLocation(`/register/${SUBSCRIPTIONS.TRAINER}`)

  return (
    <BoxTarget
      type={START_TARGET.SECONDATY}
      onClick={handleRegisterSportPlayer}
    >
      <SpanSubscription>{SUBSCRIPTIONS.TRAINER}</SpanSubscription>
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
