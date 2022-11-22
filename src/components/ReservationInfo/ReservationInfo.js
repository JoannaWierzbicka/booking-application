/* eslint-disable react/prop-types */
import React from 'react'
import DataApi from '../../api/DataApi'
import { useDispatch } from 'react-redux'
import { removeDataAction } from '../../actions/reservation'
import { StyledPaper, StyledReservationInfo } from '../../styledComponents'
import IconButton from '@mui/material/IconButton'
import DeleteIcon from '@mui/icons-material/Delete'
import CloseTwoToneIcon from '@mui/icons-material/CloseTwoTone'
import EditTwoToneIcon from '@mui/icons-material/EditTwoTone'
import Divider from '@mui/material/Divider'

export const ReservationInfo = (props) => {
  const dispatch = useDispatch()
  const { close, data } = props

  const dataApi = new DataApi()

  const removeReservation = (id) => {
    if (window.confirm('You sure?')) {
      dataApi.removeReservation(id)
      dispatch(removeDataAction(id))
      close()
    } else {
      console.log('no')
    }
  }

  return (
    <StyledPaper>
      <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px' }}>
        <div>{data[0].title}</div>
        <div>
          <IconButton onClick={() => removeReservation(data[0].id)}>
            <DeleteIcon />
          </IconButton>
          <IconButton onClick={() => console.log('edytuj')}>
            <EditTwoToneIcon/>
          </IconButton>
          <IconButton
            onClick={close}
          ><CloseTwoToneIcon/>
          </IconButton>
        </div>
      </header>
      <Divider variant={'middle'}/>
      <StyledReservationInfo>
        <p>Data przyjazdu: {data[0].start_time._i}</p>
        <p>Data wyjazdu: {data[0].end_time._i}</p>
        <p>Pokój: {data[0].group}</p>
        <h6>Dane kontaktowe</h6>
        <p>Email: {data[0].email}</p>
        <p>Telefon: {data[0].phone}</p>
      </StyledReservationInfo>
    </StyledPaper>
  )
}

export default ReservationInfo
