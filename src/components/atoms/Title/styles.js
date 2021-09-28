import styled from '@emotion/styled'
import { TITLE_STYLE } from 'config/componentsRules'
import { styles } from 'config/globalStyles'

const principal = `
  font-size: 64px;
  font-weight: 800;
  margin: 32px 0;
  position: relative;
  display: inline-block;
  color: ${styles.whiteAccent};

  @media(${styles.desktopQuery}) {
    font-size: 104px;
  }

  @media(${styles.smallQuery}) {
    font-size: 48px;
  }
`
const primary = `
  font-size: 24px;
  margin: 32px 0;
  color: ${styles.whiteAccent};

  @media(${styles.desktopQuery}) {
    font-size: 40px;
  }
`
const secondary = `
  font-size: 20px;
  color: ${styles.whiteAccent};
`

const tertiary = ``

const listOfStyles = {
  [TITLE_STYLE.PRINCIPAL]: principal,
  [TITLE_STYLE.PRIMARY]: primary,
  [TITLE_STYLE.SECONDARY]: secondary,
  [TITLE_STYLE.TERTIARY]: tertiary,
  default: primary,
}

const setIndividualStyle = (type) => {
  return listOfStyles[type] || listOfStyles.default
}

export const TextOfTitle = styled.h1`
  margin: 0;
  ${({ type }) => setIndividualStyle(type)}
`
