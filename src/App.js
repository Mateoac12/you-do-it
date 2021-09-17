import ButtonLink from 'components/atoms/ButtonLink'
import Title from 'components/atoms/Title'
import { TITLE_STYLE } from 'config/componentsRules'
import './App.css'

function App() {
  return (
    <div className='App'>
      <Title type={TITLE_STYLE.PRINCIPAL}>You do it</Title>
      <div>
        <ButtonLink href='/' text='Continuar' />
      </div>
    </div>
  )
}

export default App
