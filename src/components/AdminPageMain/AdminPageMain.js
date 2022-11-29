/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'
import Button from '@mui/material/Button'
import NavBar from '../NavBar'
import { PropTypes } from 'prop-types'
import Logo from '../Logo'
import DateButtons from '../DateButtons'
import CalendarTimeline from '../CalendarTimeline'
import { StyledButtonsContainer, StyledFullPage, StyledCalendarContainer, StyledHeader } from '../../styledComponents'

export const AdminPageMain = (props) => {
  const { logOut, user, userLoggedIn } = props
  return (
    <StyledFullPage>
      <NavBar
        user={user}
        logOut={logOut}
        userLoggedIn={userLoggedIn}
      />
      <StyledButtonsContainer>
        <DateButtons/>
      </StyledButtonsContainer>
      <StyledCalendarContainer>
        <CalendarTimeline/>
      </StyledCalendarContainer>

    </StyledFullPage>

  )
}

AdminPageMain.propTypes = {
  logOut: PropTypes.func,
  user: PropTypes.string
}

export default AdminPageMain
