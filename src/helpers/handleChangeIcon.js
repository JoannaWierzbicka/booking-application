import React from 'react'
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

export const handleChangeIcon = (name) => {
  return name === 'Czajnik'
    ? <EmojiFoodBeverageOutlinedIcon/> :
    name === 'Ekspres do kawy'
      ? <CoffeeMakerOutlinedIcon/> :
      name === 'Lodówka'
        ? <KitchenOutlinedIcon/> :
        name === 'Telewizor'
          ? <DesktopWindowsOutlinedIcon/> :
          name === 'Radio'
            ? <RadioOutlinedIcon/> :
            name === 'Ręczniki'
              ? <DryCleaningOutlinedIcon/> :
              name === 'Zestaw kosmetyków'
                ? <SoapOutlinedIcon/> :
                name === 'Łóżeczko dla dziecka'
                  ? <CribOutlinedIcon/> :
                  name === 'Możliwość dostawki'
                    ? <BedroomChildOutlinedIcon/> :
                    null
}

export const handleChangeCheckedIcon = (name) => {
  return name === 'Czajnik'
    ? <EmojiFoodBeverageIcon/> :
    name === 'Ekspres do kawy'
      ? <CoffeeMakerIcon/> :
      name === 'Lodówka'
        ? <KitchenIcon/> :
        name === 'Telewizor'
          ? <DesktopWindowsIcon/> :
          name === 'Radio'
            ? <RadioIcon/> :
            name === 'Ręczniki'
              ? <DryCleaningIcon/> :
              name === 'Zestaw kosmetyków'
                ? <SoapIcon/> :
                name === 'Łóżeczko dla dziecka'
                  ? <CribIcon/> :
                  name === 'Możliwość dostawki'
                    ? <BedroomChildIcon/> :
                    null
}
