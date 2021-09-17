import styled from '@emotion/styled'
import { BUTTON_STYLE } from 'config/componentsRules'
import { styles } from 'config/globalStyles'
import { Link as LinkOfWouter } from 'wouter'

const primary = `
color: ${styles.whiteAccent};
background-color: ${styles.blackAccent};
border: 1px solid black;

:hover {
  color: ${styles.blackAccent};
  background-color: ${styles.whiteAccent};
}
`
const secondary = ``
const tertiary = ``

const allStyles = {
  [BUTTON_STYLE.PRIMARY]: primary,
  [BUTTON_STYLE.SECONDARY]: secondary,
  [BUTTON_STYLE.TERTIARY]: tertiary,
  default: primary,
}

const setStyles = (type) => {
  return allStyles[type] || allStyles.default
}

export const Link = styled(LinkOfWouter)`
  padding: 16px 48px;
  font-size: 24px;
  font-weight: 400;
  text-decoration: none;
  cursor: pointer;
  border-radius: 16px;
  display: block;
  box-sizing: border-box;

  @media (${styles.desktopQuery}) {
    display: inline-block;
  }
  ${({ type }) => setStyles(type)}
`
