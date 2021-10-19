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
