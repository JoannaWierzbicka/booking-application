import React from 'react'
import PropTypes from 'prop-types'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import PersonIcon from '@mui/icons-material/Person'
import MenuItem from '@mui/material/MenuItem'
import Menu from '@mui/material/Menu'
import Logo from '../Logo'
import { StyledNavLink } from '../../styledComponents'

export const NavBar = (props) => {
  const {
    user,
    logOut,
    userLoggedIn
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
          <Logo
            width={70}
            type={'nav'}
          />
          <div>
            <IconButton
              size={'large'}
              onClick={handleMenu}
              color={'inherit'}
            >
              <PersonIcon fontSize={'inherit'} />
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
                  {!user
                    ?
                      <StyledNavLink
                        to={'/admin'}
                        className={'nav-bar-link'}
                      >
                        <MenuItem>Zobacz swój kalendarz</MenuItem>
                      </StyledNavLink>
                    : <MenuItem>{user}</MenuItem>}

                  <StyledNavLink
                    to={'/'}
                    className={'nav-bar-link'}
                  >
                    <MenuItem onClick={logOut}>Wyloguj</MenuItem>
                  </StyledNavLink>
                </div>
                :
                <div>
                  <StyledNavLink
                    to={'/login'}
                    className={'nav-bar-link'}
                  >
                    <MenuItem >ZALOGUJ SIĘ
                    </MenuItem>
                  </StyledNavLink>
                  <StyledNavLink
                    to={'/create-account'}
                    className={'nav-bar-link'}
                  >
                    <MenuItem >Zarejestruj się
                    </MenuItem>
                  </StyledNavLink>
                </div>
                }
            </Menu>
          </div>
        </Toolbar>
      </AppBar>
    </Box>
  )
}

NavBar.propTypes = {
  user: PropTypes.string,
  logOut: PropTypes.func,
  userLoggedIn: PropTypes.bool
}

export default NavBar
