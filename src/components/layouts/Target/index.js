import { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import CheckBox from 'components/atoms/CheckBox'

import AvatarDefault from 'assets/logo/default-avatar.png'

import {
  Container,
  GymActivity,
  GymAvatar,
  GymBoxInformation,
  GymDate,
  GymName,
  TicketCount,
} from './styles'

const Target = ({ gymPartner, classes }) => {
  const [isChecked, setIsChecked] = useState(false)
  const [dinamicTicket, setDynamicTicket] = useState(2)

  useEffect(() => {
    isChecked
      ? setDynamicTicket((lastValue) => ++lastValue)
      : setDynamicTicket(2)
  }, [isChecked])

  return (
    <>
      {classes &&
        classes.map((singleClass) => (
          <>
            <Container
              key={singleClass._id}
              isChecked={isChecked}
              isCompleted={singleClass.isCompleted}
            >
              <GymAvatar src={gymPartner.avatar || AvatarDefault} />

              <GymBoxInformation>
                <GymName>{gymPartner.displayName}</GymName>
                <GymActivity>{singleClass.activity}</GymActivity>
              </GymBoxInformation>

              <div>
                <GymDate>{new Date(singleClass.date).getHours()} hs.</GymDate>
                <TicketCount
                  fullTicket={dinamicTicket === singleClass.limitQuotas}
                  isCompleted={singleClass.isCompleted}
                >
                  {singleClass.quotas.length}/{singleClass.limitQuotas}
                </TicketCount>
              </div>

              <CheckBox
                gymId={singleClass._id}
                setIsChecked={setIsChecked}
                isChecked={isChecked}
                isCompleted={singleClass.isCompleted}
                key={singleClass._id}
              />
            </Container>
          </>
        ))}
    </>
  )
}

Target.propTypes = {
  classes: PropTypes.object,
  gymPartner: PropTypes.object,
}

export default Target
