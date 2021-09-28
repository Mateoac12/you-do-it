import styled from '@emotion/styled'
import { TEXT_STYLE } from 'config/componentsRules'
import { styles } from 'config/globalStyles'

const primary = `
  font-size: 24px;
`

const secondary = `
  font-size: 16px;
`

const tertiary = ``

const allStyles = {
  [TEXT_STYLE.PRIMARY]: primary,
  [TEXT_STYLE.SECONDARY]: secondary,
  [TEXT_STYLE.TERTIARY]: tertiary,
  default: primary,
}

const handleSelectStyle = (type) => {
  return allStyles[type] || allStyles.default
}

export const LineText = styled.p`
  color: ${styles.whiteAccent};
  margin: 16px 0;

  ${({ type }) => handleSelectStyle(type)};
`
