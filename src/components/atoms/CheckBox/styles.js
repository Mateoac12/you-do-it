import styled from '@emotion/styled'
import { styles } from 'config/globalStyles'

export const InputCheck = styled.input`
  display: none;
`

const setCheck = `
  background-color: ${styles.primary};
  border: 2px solid ${styles.whiteAccent};
  position: relative;

  ::before {
    content: '';
    position: absolute;
    width: 24px;
    height: 16px;
    box-sizing: border-box;
    border: 4px solid white;
    transform: rotate(125deg) translate(-8%, 104%);
    left: 50%;
    top: 50%;
    border-left: none;
    border-bottom: none;
  }
`

export const CircleCheck = styled.label`
  width: 40px;
  height: 40px;
  border: 2px solid ${styles.primary};
  border-radius: 50%;
  align-self: center;
  box-shadow: 0px 0px 8px ${styles.primary};

  position: relative;

  ${({ isChecked }) => isChecked && setCheck}
  ${({ isCompleted }) =>
    isCompleted &&
    `box-shadow: 0px 0px 8px ${styles.secondary}; border: 2px solid ${styles.secondary};`}
`
