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

  @media (${styles.smallQuery}) {
    box-sizing: border-box;
    column-gap: 8px;
    width: 100%;
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
`
