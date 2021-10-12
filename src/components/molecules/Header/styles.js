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

export const UserName = styled.h2`
  margin: 0;
  font-size: 20px;
  color: var(--white-accent);
  font-weight: 600;
`