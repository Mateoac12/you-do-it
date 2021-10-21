import Avatar from 'components/atoms/Avatar'
import SpanSubscription from 'components/atoms/SpanSubscription'
import DropDown from 'components/layouts/DropDown'
import { Context } from 'context/userContext'
import { useContext } from 'react'
import { HeaderContainer, Link, UserName } from './styles'

const Header = () => {
  const { user } = useContext(Context)
  const { displayName, photoURL, subscription } = user

  return (
    <>
      <HeaderContainer>
        <Link href='/user-settings'>
          <Avatar src={photoURL} alt={displayName} />
          <UserName>
            {displayName} <SpanSubscription>{subscription}</SpanSubscription>
          </UserName>
        </Link>
        <DropDown />
      </HeaderContainer>
    </>
  )
}

export default Header
