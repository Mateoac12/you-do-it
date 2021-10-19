import { useState } from 'react'

import {
  ButtonMenu,
  DropDownBox,
  DropDownItem,
  LineOfButtons,
  MenuAndButtonBox,
  Link,
} from './styles'

const DropDown = () => {
  const [isOpenMenu, setIsOpenMenu] = useState(false)
  const handleChangeMenu = () => setIsOpenMenu((lastValue) => !lastValue)

  return (
    <MenuAndButtonBox>
      <ButtonMenu onClick={handleChangeMenu}>
        <LineOfButtons isOpenMenu={isOpenMenu}></LineOfButtons>
      </ButtonMenu>
      <DropDownBox isOpenMenu={isOpenMenu} onClick={handleChangeMenu}>
        <DropDownItem>
          <Link href='/add-code-gym'>Agregar Gym</Link>
        </DropDownItem>
        <DropDownItem>Eliminar Gym</DropDownItem>
      </DropDownBox>
    </MenuAndButtonBox>
  )
}

export default DropDown
