import styled from '@emotion/styled'
import { styles } from 'config/globalStyles'

export const SpanText = styled.span`
  font-size: 12px;
  padding: 4px 8px;
  border: 1px dashed ${styles.whiteAccent};
  border-radius: 16px;

  @media (${styles.smallQuery}) {
    font-size: 8px;
  }
`
