import Text from 'components/atoms/Text'
import Title from 'components/atoms/Title'

import { TEXT_STYLE, TITLE_STYLE } from 'config/componentsRules'

import sportPlayerImage from 'assets/img/sportPlayer.svg'
import trainerImage from 'assets/img/trainer.svg'
import { ArticleContainer, PageContainer, TextInformation } from './styles'

const AboutApp = () => {
  return (
    <PageContainer>
      <Title type={TITLE_STYLE.PRIMARY}>Cómo funciona la app?</Title>
      <ArticleContainer>
        <img src={sportPlayerImage} />
        <TextInformation>
          <Title type={TITLE_STYLE.SECONDARY}>Cuenta de deportista</Title>
          <Text type={TEXT_STYLE.SECONDARY}>
            Esta cuenta es para los socios de clubes o gimnasios que quieran
            asistir a sus clases con cupos limitados. Los pasos a seguir son
            simplemente dos, crear una cuenta y acceder al nombre y código que
            te va a pasar tu instituto para poder acceder a esa información.
          </Text>
        </TextInformation>
      </ArticleContainer>
      <ArticleContainer>
        <img src={trainerImage} />
        <TextInformation>
          <Title type={TITLE_STYLE.SECONDARY}>Cuenta de Entrenador</Title>
          <Text type={TEXT_STYLE.SECONDARY}>
            Esta cuenta es para los entrenadores de gimnasios. Al crearte una
            cuenta como esta, podrás crear cupos para tus clases, con tus
            horarios, días y modalidad. Con tu cuenta se generará una clave, la
            que tienes que mandar a tus socios para que puedan registrarse y ver
            los cupos que has creado.
          </Text>
        </TextInformation>
      </ArticleContainer>
    </PageContainer>
  )
}

export default AboutApp
