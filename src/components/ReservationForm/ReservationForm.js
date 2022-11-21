/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react'
import DataApi from '../../api/DataApi'
import { addDataAction } from '../../actions/calendar'
import { useDispatch, useSelector } from 'react-redux'
import { v4 as uuid } from 'uuid'
import { validateNewReservation } from '../../helpers/validationReservation'

const divStyles = { zIndex: '999999', width: '80%', height: '80%', backgroundColor: 'white', position: 'fixed', top: 50, left: 50 }
const initialResStyles = {
  background: '#ffc107',
  color: 'black',
  borderRadius: '5px',
  border: '1px solid orange'
}

export const ReservationForm = (props) => {
  const { close } = props
  const dispatch = useDispatch()
  const { reservations } = useSelector((state) => state.reservations)

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
    validateNewReservation(newReservation)
    dataApi.addData(newReservation)
    dispatch(addDataAction(newReservation))
    close()
  }

  return (
    <div style={divStyles}>
      <form
        onSubmit={handleSubmit}
      >
        <h3>Dodaj rezerwację: </h3>
        <div>
          <div>
            <label>
              Imię i nazwisko:
              <input
                name={'name'}
                onChange={(e) => setName(e.target.value)}
                value={name}
              />
            </label>
          </div>
          <label>
            Data przyjazdu:
            <input
              name={'start'}
              onChange={(e) => setStart(e.target.value)}
              value={start}
              placeholder={'RRRR-MM-DD'}
            />
          </label>
          <label>
            Data wyjazdu:
            <input
              name={'end'}
              onChange={(e) => setEnd(e.target.value)}
              value={end}
              placeholder={'RRRR-MM-DD'}
            />
          </label>
        </div>
        <div>
        </div>

        <div>
          <label>
            Email:
            <input
              name={'email'}
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              placeholder={'nazwa@poczty.pl'}
            />
          </label>
          <label>
            Telefon:
            <input
              name={'phone'}
              onChange={(e) => setPhone(e.target.value)}
              value={phone}
              placeholder={'xxx-xxx-xxx'}
            />
          </label>
          <label>
            Numer pokoju:
            <input
              name={'room'}
              onChange={(e) => setRoom(e.target.value)}
              value={room}
              placeholder={'room nr'}
            />
          </label>
        </div>
        <div>
          <button>DODAJ</button>
        </div>
      </form>
      <button
        onClick={close}
        style={{ position: 'absolute', right: 5, top: 5 }}
      >X
      </button>
    </div>
  )
}

export default ReservationForm
