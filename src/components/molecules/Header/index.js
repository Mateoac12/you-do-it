import Avatar from 'components/atoms/Avatar'
import DropDown from 'components/layouts/DropDown'
import HomeIcon from 'components/ui/HomeIcon'
import { Context } from 'context/userContext'
import { useContext, useEffect, useState } from 'react'

import { useLocation } from 'wouter'
import { HeaderContainer, Link, LinkHome, UserName } from './styles'

const Header = () => {
  const { user } = useContext(Context)
  const { displayName, avatar } = user

  const [showHome, setShowHome] = useState(false)
  const [location] = useLocation()

  useEffect(() => {
    setShowHome(location !== '/')
  }, [location])

  return (
    <>
      <HeaderContainer>
        <Link href='/user-settings'>
          <Avatar src={avatar} alt={displayName} />
          <UserName>{displayName}</UserName>
        </Link>
        {showHome && (
          <LinkHome href='/'>
            <HomeIcon />
            Inicio
          </LinkHome>
        )}
        <DropDown />
      </HeaderContainer>
    </>
  )
}

export default Header
