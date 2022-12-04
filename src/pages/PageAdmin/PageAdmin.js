import React from 'react'
import NavBar from '../../components/NavBar'
import { PropTypes } from 'prop-types'
import DateButtons from '../../components/DateButtons'
import CalendarTimeline from '../../components/CalendarTimeline'
import { StyledButtonsContainer, StyledFullPage, StyledCalendarContainer } from '../../styledComponents'

export const PageAdmin = (props) => {
  const { logOut, user, userLoggedIn } = props

  return (
    <StyledFullPage className={'admin-page'}>
      <NavBar
        user={user}
        logOut={logOut}
        userLoggedIn={userLoggedIn}
      />
      <StyledButtonsContainer>
        <DateButtons/>
      </StyledButtonsContainer>
      <StyledCalendarContainer>
        <CalendarTimeline user={user}/>
      </StyledCalendarContainer>

    </StyledFullPage>
  )
}

PageAdmin.propTypes = {
  logOut: PropTypes.func,
  user: PropTypes.string,
  userLoggedIn: PropTypes.bool
}

export default PageAdmin
