import React from 'react'
import PropTypes from 'prop-types'
import DataApi from '../../api/DataApi'
import { addDataAction } from '../../actions/reservation'
import { useDispatch } from 'react-redux'
import { v4 as uuid } from 'uuid'
import { StyledPaper, StyledForm, StyledInput, StyledButton, StyledSelect } from '../../styledComponents'
import { rooms } from '../../helpers/rooms'

const initialResStyles = {
  background: '#ffc107',
  color: 'black',
  borderRadius: '5px',
  border: '1px solid orange'
}

export const ReservationForm = (props) => {
  const { close } = props
  const dispatch = useDispatch()

  const dataApi = new DataApi()

  const [name, setName] = React.useState('')
  const [start, setStart] = React.useState('')
  const [end, setEnd] = React.useState('')
  const [phone, setPhone] = React.useState('')
  const [email, setEmail] = React.useState('')
  const [room, setRoom] = React.useState('')

  const newReservation = {
    id: uuid(),
    group: room,
    title: name,
    start_time: start,
    end_time: end,
    phone: phone,
    email: email,
    itemProps: {
      style: initialResStyles
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    dataApi.addData(newReservation)
    dispatch(addDataAction(newReservation))
    close()
  }

  return (
    <StyledPaper>
      <StyledForm
        className={'reservation'}
        onSubmit={handleSubmit}
      >
        <h3>Dodaj rezerwację: </h3>
        <div>
          <label>
            Imię i nazwisko:
            <StyledInput
              name={'name'}
              onChange={(e) => setName(e.target.value)}
              value={name}
              required
            />
          </label>
        </div><div>
          <label>
            Data przyjazdu:
            <StyledInput
              type={'date'}
              name={'start'}
              onChange={(e) => setStart(e.target.value)}
              value={start}
              required
            />
          </label>
        </div>
        <div>
          <label>
            Data wyjazdu:
            <StyledInput
              type={'date'}
              name={'end'}
              onChange={(e) => setEnd(e.target.value)}
              value={end}
              required
            />
          </label>
        </div><div>
          <label>
            Email:
            <StyledInput
              type={'email'}
              name={'email'}
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              placeholder={'nazwa@poczty.pl'}
            />
          </label>
        </div>
        <div>
          <label>
            Telefon:
            <StyledInput
              name={'phone'}
              onChange={(e) => setPhone(e.target.value)}
              value={phone}
              placeholder={'xxx-xxx-xxx'}
            />
          </label>
        </div>
        <div>
          <label>
            Numer pokoju:
            <StyledSelect onChange={(e) => setRoom(e.target.value)}>{rooms.map(room => {
              return (
                <option
                  key={room.id}
                  value={room.id}
                >{room.id}
                </option>)
            })}
            </StyledSelect>
          </label>
        </div>

        <StyledButton>DODAJ</StyledButton>

      </StyledForm>
      <StyledButton
        className={'button--close'}
        onClick={close}
      >X
      </StyledButton>
    </StyledPaper>
  )
}

ReservationForm.propTypes = {
  close: PropTypes.func
}

export default ReservationForm
