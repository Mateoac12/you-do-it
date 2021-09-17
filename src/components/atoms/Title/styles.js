import styled from '@emotion/styled'
import { TITLE_STYLE } from 'config/componentsRules'
import { styles } from 'config/globalStyles'

const principal = `
  font-size: 64px;
  font-weight: 800;
  margin: 32px 0;
  position: relative;
  display: inline-block;

  ::before {
    content: "";
    width: 100%;
    height: .40em;
    position: absolute;
    background-color: ${styles.primary};
    bottom: 0;
    transform: translateY(-50%);
    z-index: -1;
  }

  @media(${styles.desktopQuery}) {
    font-size: 104px;
  }
`
const primary = ``
const secondary = ``
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
