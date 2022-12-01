/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'
import Button from '@mui/material/Button'
import NavBar from '../NavBar'
import { PropTypes } from 'prop-types'
import Logo from '../Logo'
import DateButtons from '../DateButtons'
import CalendarTimeline from '../CalendarTimeline'
import { useDispatch, useSelector } from 'react-redux'
import { addDataAction, removeDataAction, editDataAction, loadDataAction } from '../../actions/reservation'
import { loadRoomsDataAction } from '../../actions/rooms'
import DataApi from '../../api/DataApi'
import { StyledButtonsContainer, StyledFullPage, StyledCalendarContainer, StyledHeader } from '../../styledComponents'

export const AdminPageMain = (props) => {
  const dispatch = useDispatch()
  const { logOut, user, userLoggedIn } = props
  const searched = '@'
  const withNew = ''
  const newEm = user.replace(searched, withNew)
  const sear = '.'
  const userIdAdded = newEm.replaceAll(sear, withNew)

  const dataApi = new DataApi()

  React.useEffect(() => {
    dataApi.loadData(userIdAdded, 'rooms')
      .then((data) => {
        dispatch(loadRoomsDataAction(data))
      })
  }, [])

  React.useEffect(() => {
    dataApi.loadData(userIdAdded, 'reservations')
      .then(data => {
        dispatch(loadDataAction(data))
      })
  }, [])
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
        <CalendarTimeline user={user}/>
      </StyledCalendarContainer>

    </StyledFullPage>

  )
}

AdminPageMain.propTypes = {
  logOut: PropTypes.func,
  user: PropTypes.string
}

export default AdminPageMain
