// import React from 'react'
import KitchenOutlinedIcon from '@mui/icons-material/KitchenOutlined'
import KitchenIcon from '@mui/icons-material/Kitchen'
import DesktopWindowsOutlinedIcon from '@mui/icons-material/DesktopWindowsOutlined'
import DesktopWindowsIcon from '@mui/icons-material/DesktopWindows'
import CoffeeMakerOutlinedIcon from '@mui/icons-material/CoffeeMakerOutlined'
import CoffeeMakerIcon from '@mui/icons-material/CoffeeMaker'
import EmojiFoodBeverageOutlinedIcon from '@mui/icons-material/EmojiFoodBeverageOutlined'
import EmojiFoodBeverageIcon from '@mui/icons-material/EmojiFoodBeverage'
import RadioIcon from '@mui/icons-material/Radio'
import RadioOutlinedIcon from '@mui/icons-material/RadioOutlined'
import DryCleaningOutlinedIcon from '@mui/icons-material/DryCleaningOutlined'
import DryCleaningIcon from '@mui/icons-material/DryCleaning'
import SoapOutlinedIcon from '@mui/icons-material/SoapOutlined'
import SoapIcon from '@mui/icons-material/Soap'
import CribOutlinedIcon from '@mui/icons-material/CribOutlined'
import CribIcon from '@mui/icons-material/Crib'
import BedroomChildOutlinedIcon from '@mui/icons-material/BedroomChildOutlined'
import BedroomChildIcon from '@mui/icons-material/BedroomChild'

export const getRoomEquipment = () => {
  return [
    {
      name: 'Czajnik',
      checked: false,
      icon: EmojiFoodBeverageOutlinedIcon,
      checkedIcon: EmojiFoodBeverageIcon
    },
    {
      name: 'Ekspres do kawy',
      checked: false,
      icon: CoffeeMakerOutlinedIcon,
      checkedIcon: CoffeeMakerIcon
    },
    {
      name: 'Lodówka',
      checked: false,
      icon: KitchenOutlinedIcon,
      checkedIcon: KitchenIcon
    },
    {
      name: 'Telewizor',
      checked: false,
      icon: DesktopWindowsOutlinedIcon,
      checkedIcon: DesktopWindowsIcon
    },
    {
      name: 'Radio',
      checked: false,
      icon: RadioOutlinedIcon,
      checkedIcon: RadioIcon
    },
    {
      name: 'Ręczniki',
      checked: false,
      icon: DryCleaningOutlinedIcon,
      checkedIcon: DryCleaningIcon
    },
    {
      name: 'Zestaw kosmetyków',
      checked: false,
      icon: SoapOutlinedIcon,
      checkedIcon: SoapIcon
    },
    {
      name: 'Łóżeczko dla dziecka',
      checked: false,
      icon: CribOutlinedIcon,
      checkedIcon: CribIcon
    },
    {
      name: 'Możliwość dostawki',
      checked: false,
      icon: BedroomChildOutlinedIcon,
      checkedIcon: BedroomChildIcon
    }
  ]
}

export default getRoomEquipment
