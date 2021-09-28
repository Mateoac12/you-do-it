import styled from '@emotion/styled'
import { Link as LinkOfWouter } from 'wouter'
import { styles } from 'config/globalStyles'

export const HomeContainer = styled.section`
  max-width: 550px;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
`

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  top: 0;
  left: 0;
  background-color: var(--primary);
  z-index: 100;
  padding: 16px 0;

  @media (${styles.desktopQuery}) {
    margin-top: 0;
  }
`

export const Link = styled(LinkOfWouter)`
  display: inline-flex;
  column-gap: 8px;
  align-items: center;
  text-decoration: none;
`

export const Avatar = styled.img`
  width: 32px;
  background-color: var(--white-accent);
  height: 32px;
  border-radius: 50%;
`

export const UserName = styled.h2`
  margin: 0;
  font-size: 20px;
  color: var(--white-accent);
  font-weight: 600;
`

export const ButtonMenu = styled.div`
  width: 32px;
  height: 24px;
  display: flex;
  align-items: center;
  position: relative;
  cursor: pointer;
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

export const PrincipalSection = styled.section`
  padding: 40px 0 80px;
`

export const TitleOfList = styled.h2`
  color: ${styles.whiteAccent};
  font-size: 22px;
`

export const SettingsBox = styled.section`
  display: grid;
  row-gap: 40px;
`
