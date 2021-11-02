import SpanSubscription from 'components/atoms/SpanSubscription'
import { SUBSCRIPTIONS } from 'config/typeOfSubs'
import { useLocation } from 'wouter'
import { BoxTarget, ListText, NormalText, TitleOfTarget } from './styles'

const PrimaryCard = () => {
  const [, setLocation] = useLocation()

  const handleRegisterSportPlayer = () =>
    setLocation(`/register/${SUBSCRIPTIONS.SPORTPLAYER}`)

  return (
    <BoxTarget onClick={handleRegisterSportPlayer}>
      <SpanSubscription>{SUBSCRIPTIONS.SPORTPLAYER}</SpanSubscription>
      <TitleOfTarget>Cuenta de deportista</TitleOfTarget>
      <NormalText>Con este usuario puedes</NormalText>
      <ul>
        <ListText>Ver los cupos libres de tu gimnasio.</ListText>
        <ListText>Inscribirte a ellos.</ListText>
      </ul>
    </BoxTarget>
  )
}

export default PrimaryCard
