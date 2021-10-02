import Text from 'components/atoms/Text'
import Title from 'components/atoms/Title'
import ListOfCardSubscriptions from 'components/layouts/ListOfCardSubscriptions'

const UserNotFound = () => {
  return (
    <section>
      <Title>😭</Title>
      <Title>No estas registrado!</Title>
      <Text>Pero no te preocupes, puedes hacerlo desde aqui!</Text>
      <ListOfCardSubscriptions />
    </section>
  )
}

export default UserNotFound
