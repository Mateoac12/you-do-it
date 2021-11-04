import logo from 'logo.svg'
import Target from '../Target/demo'
import { Container } from './styles'

const listOfGymTickets = [
  {
    id: 1,
    name: 'Remove',
    avatar: logo,
    activity: 'Musculacion',
    time: '14:00hs',
    maxTickets: 10,
    currentTickets: 9,
    isCompleted: false,
    participants: [
      {
        username: 'Madeval',
        avatar: 'logo',
        email: 'alvarez.fing@gmail.com',
        tel: null,
      },
    ],
  },
  {
    id: 2,
    name: 'Remove',
    avatar: logo,
    activity: 'Fisioterapia',
    time: '13:00hs',
    maxTickets: 8,
    currentTickets: 8,
    isCompleted: true,
    participants: [],
  },
]

const ListOfTargets = () => {
  return (
    <Container>
      {listOfGymTickets.map((gym) => (
        <Target key={gym.gymId} gym={gym} />
      ))}
    </Container>
  )
}

export default ListOfTargets
