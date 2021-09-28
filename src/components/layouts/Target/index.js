import { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import CheckBox from 'components/atoms/CheckBox'

import {
  Container,
  GymActivity,
  GymAvatar,
  GymBoxInformation,
  GymDate,
  GymName,
  TicketCount,
} from './styles'

const Target = ({ gym }) => {
  const [isChecked, setIsChecked] = useState(false)
  const [dinamicTicket, setDynamicTicket] = useState(gym.currentTickets)

  useEffect(() => {
    isChecked
      ? setDynamicTicket((lastValue) => ++lastValue)
      : setDynamicTicket(gym.currentTickets)
  }, [isChecked])

  return (
    <Container isChecked={isChecked} isCompleted={gym.isCompleted}>
      <GymAvatar src={gym.avatar} />

      <GymBoxInformation>
        <GymName>{gym.name}</GymName>
        <GymActivity>{gym.activity}</GymActivity>
      </GymBoxInformation>

      <div>
        <GymDate>{gym.time}</GymDate>
        <TicketCount
          fullTicket={dinamicTicket === gym.maxTickets}
          isCompleted={gym.isCompleted}
        >
          {dinamicTicket}/{gym.maxTickets}
        </TicketCount>
      </div>

      <CheckBox
        gymId={gym.id}
        setIsChecked={setIsChecked}
        isChecked={isChecked}
        isCompleted={gym.isCompleted}
      />
    </Container>
  )
}

Target.propTypes = {
  gym: PropTypes.object,
}

export default Target
