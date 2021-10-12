import { SUBSCRIPTIONS } from 'config/typeOfSubs'
import { useGoogleSignIn } from 'hooks/useGoogleSignIn'
import {
  BoxTarget,
  ListText,
  NormalText,
  SmallText,
  TitleOfTarget,
} from './styles'

const PrimaryCard = () => {
  const { handleLogin } = useGoogleSignIn({
    typeOfSub: SUBSCRIPTIONS.SPORTPLAYER,
  })

  return (
    <BoxTarget onClick={handleLogin}>
      <SmallText>Deportista</SmallText>
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
