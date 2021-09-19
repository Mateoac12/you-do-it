import ButtonLink from 'components/atoms/ButtonLink'
import Text from 'components/atoms/Text'
import Title from 'components/atoms/Title'
import Target from 'components/layouts/Target'
import { BUTTON_STYLE, TITLE_STYLE } from 'config/componentsRules'
import './App.css'

function App() {
  return (
    <div className='App'>
      <Title type={TITLE_STYLE.PRINCIPAL}>You do it!</Title>
      <Text>Busca tu gimnasio y reserva una hora para ir!</Text>
      <section className='targetsContainer'>
        <Target />
      </section>
      <div className='button-container'>
        <ButtonLink
          type={BUTTON_STYLE.SECONDARY}
          href='/'
          text='Iniciar sesión'
        />
        <ButtonLink href='/' text='Empieza Ya!' />
        <ButtonLink
          type={BUTTON_STYLE.TERTIARY}
          href='/'
          text='Como funciona la app?'
        />
      </div>
    </div>
  )
}

export default App
