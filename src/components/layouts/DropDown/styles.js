import styled from '@emotion/styled'
import { styles } from 'config/globalStyles'
import { Link as LinkOfWouter } from 'wouter'

export const MenuAndButtonBox = styled.div`
  position: relative;
  flex: 1;
`

export const ButtonMenu = styled.div`
  width: 32px;
  height: 24px;
  display: flex;
  align-items: center;
  position: relative;
  cursor: pointer;
  margin-left: auto;
`

const setCloseStyle = (isOpen) => {
  return (
    isOpen &&
    `
    background-color: transparent;

    ::before {
      width: 100%;
      transform: translateY(0) rotate(45deg);
    }
    ::after {
      transform: translateY(0) rotate(-45deg);
    }
  `
  )
}

export const LineOfButtons = styled.div`
  width: 100%;
  height: 4px;
  background-color: ${styles.whiteAccent};
  border-radius: 40px;

  transition: background-color 0.2s ease;

  ::before,
  ::after {
    content: '';
    position: absolute;
    height: 4px;
    width: 100%;
    background-color: ${styles.whiteAccent};
    border-radius: 999px;
    transition: transform 0.2s ease, width 0.2s ease;
  }

  ::before {
    width: 60%;
    right: 0;
    transform: translateY(8px) rotate(0);
  }
  ::after {
    left: 0;
    transform: translateY(-8px) rotate(0);
  }
  ${({ isOpenMenu }) => setCloseStyle(isOpenMenu)};
`

export const DropDownBox = styled.ul`
  position: absolute;
  right: 0;
  top: 24px;
  background-color: ${styles.whiteAccent};
  padding: 0.5rem 0rem;
  width: max-content;
  border: 1px solid ${styles.lowAccent};
  border-radius: 8px;
  list-style: none;
  transform: rotateX(0);
  transform-origin: top;

  transition: transform 0.25s ease;

  ${({ isOpenMenu }) => !isOpenMenu && `transform: rotateX(90deg);`};
`

export const DropDownItem = styled.li`
  padding: 0.5rem 2rem;
  font-size: 16px;
  text-align: right;
  cursor: pointer;

  :hover {
    background-color: ${styles.lowAccent};
  }
`

export const Link = styled(LinkOfWouter)`
  text-decoration: none;
  color: ${styles.blackAccent};
`
