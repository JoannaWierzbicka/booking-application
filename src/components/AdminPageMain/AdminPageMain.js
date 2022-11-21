import React from 'react'
import Button from '@mui/material/Button'
import { PropTypes } from 'prop-types'
import StyledHeader from '../../styledComponents/StyledHeader'
import StyledCalendarContainer from '../../styledComponents/StyledCalendarContainer'
import Logo from '../Logo'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'
import CalendarTimeline from '../CalendarTimeline'

export const AdminPageMain = (props) => {
  const { logOut } = props
  return (
    <div>
      <StyledHeader>
        <div style={{ width: '25%', display: 'flex', alignItems: 'center' }}>
          <Logo style={{ marginLeft: '15px', width: '50px', height: '50px' }}/>
          <IconButton onClick={() => console.log('clicked menu')}>
            <MenuIcon/>
          </IconButton>
        </div>
        <Button onClick={logOut}>WYLOGUJ</Button>
      </StyledHeader>
      <StyledCalendarContainer>
        <CalendarTimeline/>

      </StyledCalendarContainer>

    </div>

  )
}

AdminPageMain.propTypes = {
  logOut: PropTypes.func
}

export default AdminPageMain
