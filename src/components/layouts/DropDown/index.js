import { useState } from 'react'
import {
  ButtonMenu,
  DropDownBox,
  DropDownItem,
  LineOfButtons,
  MenuAndButtonBox,
} from './styles'

const DropDown = () => {
  const [isOpenMenu, setIsOpenMenu] = useState(false)
  const handleChangeMenu = () => setIsOpenMenu((lastValue) => !lastValue)

  return (
    <MenuAndButtonBox>
      <ButtonMenu onClick={handleChangeMenu}>
        <LineOfButtons isOpenMenu={isOpenMenu}></LineOfButtons>
      </ButtonMenu>
      <DropDownBox isOpenMenu={isOpenMenu}>
        <DropDownItem>Agregar Gym</DropDownItem>
        <DropDownItem>Eliminar Gym</DropDownItem>
      </DropDownBox>
    </MenuAndButtonBox>
  )
}

export default DropDown
