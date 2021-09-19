import CheckBox from 'components/atoms/CheckBox'
import logo from 'logo.svg'

import {
  Container,
  GymActivity,
  GymAvatar,
  GymDate,
  GymName,
  TicketCount,
} from './styles'

const gym = {
  id: 1,
  name: 'Remove',
  avatar: logo,
  activity: 'Musculacion',
  time: '14:00hs',
  maxTickets: 10,
  currentTickets: 8,
}

const Target = () => {
  return (
    <Container>
      <GymAvatar src={gym.avatar} />
      <div>
        <GymName>{gym.name}</GymName>
        <GymActivity>{gym.activity}</GymActivity>
      </div>
      <div>
        <GymDate>{gym.time}</GymDate>
        <TicketCount>
          {gym.currentTickets}/{gym.maxTickets}
        </TicketCount>
      </div>
      <CheckBox />
    </Container>
  )
}

export default Target
