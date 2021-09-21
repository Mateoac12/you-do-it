import Text from 'components/atoms/Text'
import Title from 'components/atoms/Title'
import { START_TARGET, TITLE_STYLE } from 'config/componentsRules'
import { useLocation } from 'wouter'
import {
  BoxTarget,
  ListOfTargets,
  ListText,
  NormalText,
  SmallText,
  TitleOfTarget,
} from './styles'

const Start = () => {
  const [, setLocation] = useLocation()

  return (
    <>
      <Title type={TITLE_STYLE.PRINCIPAL}>Comienza!</Title>
      <Text>Elige un tipo de perfil</Text>
      <ListOfTargets onClick={() => setLocation('/home')}>
        <BoxTarget>
          <SmallText>Deportista</SmallText>
          <TitleOfTarget>Cuenta de deportista</TitleOfTarget>
          <NormalText>Con este usuario puedes</NormalText>
          <ul>
            <ListText>Ver los cupos libres de tu gimnasio.</ListText>
            <ListText>Inscribirte a ellos.</ListText>
          </ul>
        </BoxTarget>
        <BoxTarget type={START_TARGET.SECONDATY}>
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
      </ListOfTargets>
    </>
  )
}

export default Start
