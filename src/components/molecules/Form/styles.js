import styled from '@emotion/styled'
import { styles } from 'config/globalStyles'

export const FormContainer = styled.form`
  position: relative;
  background-color: ${styles.whiteAccent};
  width: 100%;
  max-width: 400px;
  margin: 0 auto;
  box-sizing: border-box;
  padding: 3rem 1rem;
  border: 1px solid ${styles.lowAccent};
  border-radius: 16px;
  text-align: left;
`

export const ButtonSubmit = styled.input`
  width: 100%;
  box-sizing: border-box;
  border-radius: 8px;
  background-color: ${styles.primary};
  color: ${styles.whiteAccent};
  border: none;
  padding: 8px 8px;
  margin: 1rem auto;
  font-size: 16px;
  cursor: pointer;

  :hover {
    background-color: ${styles.primaryDark};
  }

  :disabled {
    cursor: no-drop;
    opacity: 0.5;
  }
`
