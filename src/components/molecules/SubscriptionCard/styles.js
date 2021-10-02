import styled from '@emotion/styled'
import { START_TARGET } from 'config/componentsRules'
import { styles } from 'config/globalStyles'

const secondary = `
  background-color: ${styles.primary};
  color: ${styles.whiteAccent};
  border: 4px dotted ${styles.whiteAccent};

  small {
    color: ${styles.primary};
    background-color: ${styles.whiteAccent};
  }

   li::before {
    border-color: ${styles.whiteAccent};
  }
`

const allStyles = {
  [START_TARGET.SECONDATY]: secondary,
}

const handleSetStyles = (type) => {
  return allStyles[type] || ''
}

export const SmallText = styled.small`
  position: absolute;
  right: 16px;
  color: ${styles.whiteAccent};
  background-color: ${styles.primary};
  padding: 8px 18px;
  border-radius: 40px;
`

export const BoxTarget = styled.article`
  position: relative;
  display: inline-block;
  padding: 16px;
  color: ${styles.primaryDark};
  border-radius: 16px;
  max-width: 320px;
  border: 1px solid ${styles.primary};
  background-color: ${styles.whiteAccent};
  cursor: pointer;
  transition: transform 0.25s ease;

  :hover {
    transform: translateY(-8px);
  }

  ${({ type }) => handleSetStyles(type)};
`

export const TitleOfTarget = styled.h2`
  text-align: left;
  margin-top: 32px;
  font-size: 40px;
`

export const NormalText = styled.p`
  text-align: left;
  font-size: 20px;
`

export const ListText = styled.li`
  text-align: left;
  font-size: 18px;
  list-style: none;
  position: relative;
  margin-bottom: 16px;

  ::before {
    content: '';
    position: absolute;
    width: 24px;
    height: 16px;
    left: -40px;
    top: 32%;
    border: 4px solid ${styles.primary};
    box-sizing: border-box;
    transform: translateY(-50%) rotate(-45deg);
    border-top: none;
    border-right: none;
  }
`
