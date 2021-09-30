import styled from '@emotion/styled'
import { styles } from 'config/globalStyles'

export const ButtonContainer = styled.button`
  margin: 16px;
  display: inline-block;
  max-width: 300px;
  width: 100%;
  border: 1px solid #4285f4;
  cursor: pointer;
  box-shadow: 0 0 0 0px #4285f490;
  transition: box-shadow 0.25s ease;
  display: flex;
  align-items: center;
  padding: 0;
  background-color: #4285f4;
  margin-left: auto;
  margin-right: auto;

  :hover {
    box-shadow: 0 0 0 2px #4285f490;
  }
`

export const TextButton = styled.span`
  color: ${styles.whiteAccent};
  font-size: 16px;
  font-weight: 400;
  text-align: center;
  flex: 1;
`

export const GoogleImage = styled.img`
  width: 48px;
  padding: 15px;
  box-sizing: border-box;
  background-color: ${styles.whiteAccent};
`
