import styled from '@emotion/styled'
import { BUTTON_STYLE } from 'config/componentsRules'
import { styles } from 'config/globalStyles'
import { Link as LinkOfWouter } from 'wouter'

const primary = `
color: ${styles.whiteAccent};
background-color: ${styles.primary};
border: 1px solid ${styles.whiteAccent};

:hover {
  background-color: ${styles.primaryDark};
}
`
const secondary = `
color: ${styles.primary};
background-color: ${styles.whiteAccent};
border: 1px solid ${styles.lowAccent};

:hover {
  background-color: ${styles.lowAccent};
  border: 1px solid ${styles.lowAccent}
}
`
const tertiary = `
  color: ${styles.primary};
  font-size: 16px;
  
`

const alternative = `
  color: ${styles.whiteAccent};
  border: 1px dashed ${styles.whiteAccent};

  :hover {
    background-color: ${styles.primaryDark};
  }
`

const allStyles = {
  [BUTTON_STYLE.PRIMARY]: primary,
  [BUTTON_STYLE.SECONDARY]: secondary,
  [BUTTON_STYLE.TERTIARY]: tertiary,
  [BUTTON_STYLE.ALTERNATIVE]: alternative,
  default: primary,
}

const setStyles = (type) => {
  return allStyles[type] || allStyles.default
}

export const Link = styled(LinkOfWouter)`
  padding: 8px 48px;
  margin: 8px;
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
