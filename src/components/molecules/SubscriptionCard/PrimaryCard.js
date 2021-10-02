import {
  BoxTarget,
  ListText,
  NormalText,
  SmallText,
  TitleOfTarget,
} from './styles'

const PrimaryCard = () => {
  return (
    <BoxTarget>
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
