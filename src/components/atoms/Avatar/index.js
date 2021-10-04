import PropTypes from 'prop-types'
import defaultAvatar from 'assets/logo/default-avatar.png'

import { AvatarImage } from './styles'
import { AVATAR_STYLE } from 'config/componentsRules'

const Avatar = ({
  alt,
  src = defaultAvatar,
  type = AVATAR_STYLE.SMALL,
} = {}) => {
  return <AvatarImage src={src} alt={alt} type={type} />
}

Avatar.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
  type: PropTypes.number,
}

export default Avatar
