import ButtonFunction from 'components/atoms/ButtonFunction'
import Input from 'components/atoms/Input'
import Title from 'components/atoms/Title'
import { BUTTON_STYLE, TITLE_STYLE } from 'config/componentsRules'
import { PageContainer } from 'pages/AboutApp/styles'

const AddCodeGym = () => {
  return (
    <PageContainer>
      <Title>Agregar gimnasio</Title>
      <Title type={TITLE_STYLE.SECONDARY}>
        Ingrese el nick del gimnasio y su codigo
      </Title>
      <Input placeholder='RemoveGym' />
      <Input placeholder='1423' />
      <ButtonFunction
        onClick={() => {}}
        text='Agregar gimnasio'
        type={BUTTON_STYLE.SECONDARY}
      />
    </PageContainer>
  )
}

export default AddCodeGym
