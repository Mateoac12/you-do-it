import styled from '@emotion/styled'
import { Link as LinkOfWouter } from 'wouter'
import { styles } from 'config/globalStyles'

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  top: 0;
  left: 0;
  background-color: var(--primary);
  z-index: 100;
  padding: 16px 0;

  max-width: 550px;
  width: 100%;
  margin-left: auto;
  margin-right: auto;

  @media (${styles.desktopQuery}) {
    margin-top: 0;
  }
`

export const Link = styled(LinkOfWouter)`
  display: inline-flex;
  column-gap: 8px;
  align-items: center;
  text-decoration: none;
  flex: 1;
`

export const LinkHome = styled(LinkOfWouter)`
  color: ${styles.whiteAccent};
  background-color: ${styles.primary};
  padding: 1rem 1rem 0.5rem;
  border-radius: 40px 40px 0 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  position: fixed;
  bottom: 0;
  left: 50%;
  font-size: 12px;
  transform: translateX(-50%);

  :hover {
    background-color: ${styles.primaryDark};
  }
`

export const UserName = styled.h2`
  margin: 0;
  font-size: 20px;
  color: var(--white-accent);
  font-weight: 600;
  display: flex;
  align-items: center;
  column-gap: 8px;
`
