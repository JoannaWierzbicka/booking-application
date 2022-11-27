/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react'
import { useDispatch } from 'react-redux'
import PropTypes from 'prop-types'
import Radio from '@mui/material/Radio'
import RadioGroup from '@mui/material/RadioGroup'
import FormControlLabel from '@mui/material/FormControlLabel'
import { StyledPaper, StyledForm, StyledInput, StyledButton, StyledSelect, StyledInputWrapper, StyledLabel } from '../../styledComponents'
import { rooms } from '../../helpers/rooms'
import Divider from '@mui/material/Divider'
import IconButton from '@mui/material/IconButton'
import CloseTwoToneIcon from '@mui/icons-material/CloseTwoTone'
import { countries } from '../../helpers/countries'
import { addDataAction, removeDataAction, editDataAction } from '../../actions/reservation'
import DataApi from '../../api/DataApi'
import DeleteIcon from '@mui/icons-material/Delete'
import { v4 as uuid } from 'uuid'

export const RoomForm = (props) => {
  const { close } = props
  const dispatch = useDispatch()
  const dataApi = new DataApi()

  const [id, setId] = React.useState('')
  const [title, setTitle] = React.useState('')

  const room = {
    id: id,
    title: title,
    height: 30,
    stackItems: false
  }

  // const removeReservation = (id) => {
  //   if (window.confirm('Na pewno chcesz usunąć rezerwację?')) {
  //     dataApi.removeReservation('reservations', id)
  //     dispatch(removeDataAction(id))
  //     close()
  //   } else {
  //     console.log('no')
  //   }
  // }

  // const handleSubmit = (e) => {
  //   e.preventDefault()
  //   dataApi.addData('reservations', reservation)
  //   dispatch(addDataAction(reservation))
  //   close()
  // }

  // const handleChange = (e) => {
  //   e.preventDefault()
  //   dataApi.editReservation('reservations', data.id, reservation)
  //   dispatch(editDataAction(reservation))
  //   console.log(reservation)
  //   close()
  // }

  return (
    <StyledPaper>
      <header className={'form-header'}>
        <div>DODAJ POKÓJ
          <IconButton
            onClick={close}
          ><CloseTwoToneIcon/>
          </IconButton>
        </div>
      </header>
      <StyledForm
        className={'reservation'}
        onSubmit={console.log()}
        // onSubmit={type === 'new' ? handleSubmit : handleChange}
      >
        <StyledInputWrapper className={'row-wrapper'}>
          <h5>Dane na temat pokoju</h5>
          <StyledInputWrapper>
            <StyledLabel htmlFor={'title'}>
              Nazwa:

            </StyledLabel><StyledInput
              name={'title'}
              onChange={(e) => setTitle(e.target.value)}
              value={title}
              required
                          />
          </StyledInputWrapper>
          <StyledInputWrapper>
            <StyledLabel htmlFor={'beds'}>
              Ilość osób:

            </StyledLabel>
            <StyledInput
              name={'beds'}
              onChange={console.log()}
              value={'beds'}
              required
            />
          </StyledInputWrapper>
        </StyledInputWrapper>
        <StyledButton
          className={'button-reservation--form'}
          variant={'contained'}
          type={'submit'}
        >DODAJ
        </StyledButton>
        <StyledButton
          className={'button-reservation--form'}
          variant={'outlined'}
          onClick={close}
        >ANULUJ
        </StyledButton>

      </StyledForm>

    </StyledPaper>
  )
}

RoomForm.propTypes = {

}

export default RoomForm
