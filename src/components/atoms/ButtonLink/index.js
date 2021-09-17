import PropTypes from 'prop-types'
import { BUTTON_STYLE } from 'config/componentsRules'

import { Link } from './styles'

const ButtonLink = ({ href, text, icon, type = BUTTON_STYLE.PRIMARY }) => {
  return (
    <Link href={href} type={type}>
      {text && text}
      {icon && icon}
    </Link>
  )
}

ButtonLink.propTypes = {
  href: PropTypes.string.isRequired,
  text: PropTypes.string,
  icon: PropTypes.node,
  type: PropTypes.number,
}

export default ButtonLink
