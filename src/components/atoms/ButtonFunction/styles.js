import styled from '@emotion/styled'
import { BUTTON_STYLE } from 'config/componentsRules'

import { styles } from 'config/globalStyles'

export const ButtonStyle = styled.button`
  background-color: ${styles.primary};
  border: 1px dashed ${styles.whiteAccent};
  border-radius: 40px;
  padding: 8px 16px;
  display: inline-block;
  color: ${styles.whiteAccent};
  cursor: pointer;
  margin: 8px;

  :hover {
    background-color: ${styles.primaryDark};
  }

  ${({ type }) => setStyles(type)}
`

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
font-size: 24px;

:hover {
  background-color: ${styles.lowAccent};
  border: 1px solid ${styles.lowAccent}
}
`
const tertiary = `
  color: ${styles.primary};
  font-size: 16px;
  
  :hover {
    color: ${styles.primaryDark};
  }
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
