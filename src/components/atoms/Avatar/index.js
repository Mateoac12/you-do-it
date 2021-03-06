import PropTypes from 'prop-types'
import defaultAvatar from 'assets/logo/default-avatar.png'

import { AvatarImage } from './styles'
import { AVATAR_STYLE } from 'config/componentsRules'

const Avatar = ({
  alt,
  src = defaultAvatar,
  type = AVATAR_STYLE.SMALL,
  loading,
} = {}) => {
  return (
    <AvatarImage
      src={src || defaultAvatar}
      alt={alt}
      type={type}
      loading={loading}
    />
  )
}

Avatar.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
  type: PropTypes.number,
  loading: PropTypes.bool,
}

export default Avatar
