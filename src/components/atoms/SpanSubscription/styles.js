import styled from '@emotion/styled'
import { styles } from 'config/globalStyles'
import { SUBSCRIPTIONS } from 'config/typeOfSubs'

export const SpanText = styled.small`
  position: absolute;
  top: 0;
  right: 0;
  margin: 1rem;
  color: ${styles.whiteAccent};
  background-color: ${styles.primary};
  padding: 8px 18px;
  border-radius: 40px;
  border: 1px solid ${styles.whiteAccent};

  ${({ type }) => {
    return (
      type === SUBSCRIPTIONS.TRAINER &&
      `
      color: ${styles.primary};
      background-color: ${styles.whiteAccent};
      border: 1px solid ${styles.primary};
    `
    )
  }}
`
