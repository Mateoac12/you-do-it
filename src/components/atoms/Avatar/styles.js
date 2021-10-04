import styled from '@emotion/styled'
import { AVATAR_STYLE } from 'config/componentsRules'

const allSizes = {
  [AVATAR_STYLE.SMALL]: `
  width: 32px;
  height: 32px;
  `,
  [AVATAR_STYLE.BIG]: `  
  width: 120px;
  height: 120px;
  `,
}

const handleSelectSize = (type) => {
  return allSizes[type] || allSizes[AVATAR_STYLE.SMALL]
}

export const AvatarImage = styled.img`
  background-color: var(--white-accent);
  object-fit: cover;
  border-radius: 50%;
  ${({ type }) => handleSelectSize(type)}
`
