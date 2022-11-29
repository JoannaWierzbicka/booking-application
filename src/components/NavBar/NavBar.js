/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'
import AppBar from '@mui/material/AppBar'
import Button from '@mui/material/Button'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'
import AccountCircle from '@mui/icons-material/AccountCircle'
import Switch from '@mui/material/Switch'
import FormControlLabel from '@mui/material/FormControlLabel'
import FormGroup from '@mui/material/FormGroup'
import MenuItem from '@mui/material/MenuItem'
import Menu from '@mui/material/Menu'
import Logo from '../Logo'

export const NavBar = (props) => {
  const {
    user,
    logOut,
    userLoggedIn,
    logIn
  } = props
  const [anchorEl, setAnchorEl] = React.useState(null)

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <Box sx={{ position: 'fixed', top: 0, left: 0, width: '100vw' }}>
      <AppBar position={'static'}>
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Logo style={{ width: '50px', height: '50px' }}/>

          <div>
            <IconButton
              size={'large'}
              onClick={handleMenu}
              color={'inherit'}
            >
              <AccountCircle />
            </IconButton>
            <Menu
              id={'menu-appbar'}
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right'
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right'
              }}
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >{
              userLoggedIn ?
                <div>
                  <MenuItem>{user}</MenuItem>
                  <MenuItem onClick={logOut}>Wyloguj</MenuItem>
                </div>

                : <MenuItem onClick={logIn}>ZALOGUJ SIĘ</MenuItem>}
            </Menu>
          </div>
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default NavBar
