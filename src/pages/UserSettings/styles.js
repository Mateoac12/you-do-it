import styled from '@emotion/styled'
import { styles } from 'config/globalStyles'

export const PageContent = styled.section`
  max-width: 550px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 40px auto 0;
`

export const ButtonInput = styled.button`
  background-color: ${styles.primary};
  border: 1px dashed ${styles.whiteAccent};
  border-radius: 40px;
  padding: 8px 16px;
  display: inline-block;
  color: ${styles.whiteAccent};
  cursor: pointer;
  margin: 8px 0;

  :hover {
    background-color: ${styles.primaryDark};
  }
`

export const InputHidde = styled.input`
  display: none;
`

export const Input = styled.input`
  padding: 8px 16px;
  border-radius: 8px;
  border: 1px solid ${styles.primary};
  font-size: 24px;
  text-align: center;
`
