import styled from '@emotion/styled'
import { styles } from 'config/globalStyles'

export const InputBar = styled.input`
  display: block;
  font-size: 24px;
  padding: 8px 16px;
  border-radius: 8px;
  max-width: 400px;
  width: 100%;
  margin: 8px auto;
  text-align: center;
  border: 1px solid ${styles.lowAccent};
  box-sizing: border-box;

  :focus {
    outline: 2px solid ${styles.primaryDark};
  }
`

export const Label = styled.label`
  display: block;
  font-size: 20px;
  color: ${styles.whiteAccent};
  margin-top: 16px;
  font-weight: 600;
  text-shadow: 2px 0 0 ${styles.primary}, -2px 0 0 ${styles.primary},
    0 2px 0 ${styles.primary}, 0 -2px 0 ${styles.primary},
    1px 1px ${styles.primary}, -1px -1px 0 ${styles.primary},
    1px -1px 0 ${styles.primary}, -1px 1px 0 ${styles.primary};
`
