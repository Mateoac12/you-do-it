import PropTypes from 'prop-types'
import { TITLE_STYLE } from 'config/componentsRules'

import { TextOfTitle } from './styles'

const Title = ({ type = TITLE_STYLE.PRIMARY, children }) => {
  return <TextOfTitle type={type}>{children}</TextOfTitle>
}

Title.propTypes = {
  type: PropTypes.oneOf([{ ...TITLE_STYLE }]),
  children: PropTypes.node,
}

export default Title
