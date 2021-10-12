import styled from '@emotion/styled'
import { styles } from 'config/globalStyles'

export const ButtonStyle = styled.button`
  background-color: ${styles.primary};
  border: 1px dashed ${styles.whiteAccent};
  border-radius: 40px;
  padding: 8px 16px;
  display: inline-block;
  color: ${styles.whiteAccent};
  cursor: pointer;
  margin: 8px;

  :hover {
    background-color: ${styles.primaryDark};
  }
`
