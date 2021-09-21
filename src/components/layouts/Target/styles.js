import styled from '@emotion/styled'
import { styles } from 'config/globalStyles'

export const Container = styled.article`
  display: inline-flex;
  border: 1px solid ${styles.lowAccent};
  border-radius: 16px;
  column-gap: 16px;
  padding: 8px;
  background-color: ${styles.whiteAccent};
  width: 300px;
  justify-content: center;
  transform: rotate(0) scale(1);
  box-sizing: border-box;
  display: flex;
  max-width: 350px;
  width: 100%;
  padding: 8px 16px;

  @media (${styles.smallQuery}) {
    box-sizing: border-box;
    column-gap: 8px;
    padding: 8px;
    width: 100%;
  }

  ${({ isChecked }) =>
    isChecked
      ? `animation: checked .2s ease;`
      : `animation: notChecked .2s ease;`}

  ${({ isCompleted }) => isCompleted && `opacity: 0.8;`}

  @keyframes notChecked {
    0% {
      transform: rotate(0) scale(1);
    }
    50% {
      transform: rotate(1deg) scale(1);
    }
    100% {
      transform: rotate(-1deg) scale(1);
    }
  }
  @keyframes checked {
    0% {
      transform: rotate(0) scale(1);
    }
    50% {
      transform: rotate(0) scale(1.05);
    }
    100% {
      transform: rotate(0) scale(0.95);
    }
  }
`

export const GymAvatar = styled.img`
  width: 48px;
  background-color: ${styles.whiteAccent};
  height: 48px;
  border-radius: 16px;
  border: 1px solid ${styles.lowAccent};
  box-sizing: border-box;
`

export const GymName = styled.h2`
  margin: 0;
  font-size: 16px;
  color: ${styles.mediumAccent};
  text-align: left;
`

export const GymActivity = styled.h2`
  margin: 0;
  font-size: 16px;
  text-align: left;
`

export const GymDate = styled.time`
  font-weight: 600;
`

export const TicketCount = styled.h2`
  margin: 0;
  font-size: 16px;

  ${({ fullTicket }) => fullTicket && `color: ${styles.primary};`}
  ${({ isCompleted }) => isCompleted && `color: ${styles.secondary};`}
`

export const GymBoxInformation = styled.div`
  flex: 1;
`
