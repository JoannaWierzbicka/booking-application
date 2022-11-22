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

  // const [editable, setEditable] = React.useState(false)
  const { close, data } = props
  const res = Object.assign(data[0])

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

  const editReservation = (id) => {
    console.log(id)
  }

  return (
    <StyledPaper>
      <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px' }}>
        <div>{res.title}</div>
        <div>
          <IconButton onClick={() => removeReservation(res.id)}>
            <DeleteIcon />
          </IconButton>
          <IconButton onClick={() => editReservation(res.id)}>
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
        <p>Data przyjazdu: {res.start_time._i}</p>
        <p>Data wyjazdu: {res.end_time._i}</p>
        <p>Pokój: {res.group}</p>
        <h6>Dane kontaktowe</h6>
        <p>Email: {res.email}</p>
        <p>Telefon: {res.phone}</p>
      </StyledReservationInfo>
    </StyledPaper>
  )
}

export default ReservationInfo
