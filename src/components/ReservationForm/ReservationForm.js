/* eslint-disable no-unused-vars */
import React from 'react'
import PropTypes from 'prop-types'
import DataApi from '../../api/DataApi'
import { addDataAction } from '../../actions/reservation'
import { useDispatch } from 'react-redux'
import { v4 as uuid } from 'uuid'
import { StyledPaper, StyledForm, StyledInput, StyledButton, StyledSelect, StyledInputWrapper } from '../../styledComponents'
import { rooms } from '../../helpers/rooms'
import Divider from '@mui/material/Divider'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import IconButton from '@mui/material/IconButton'
import CloseTwoToneIcon from '@mui/icons-material/CloseTwoTone'
import { countries } from '../../helpers/countries'

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

  const emptyGuestData = {
    street: '',
    houseNum: '',
    apartmentNum: '',
    city: '',
    zipCode: '',
    country: 'Poland'
  }

  const [name, setName] = React.useState('')
  const [start, setStart] = React.useState('')
  const [end, setEnd] = React.useState('')
  const [phone, setPhone] = React.useState('')
  const [email, setEmail] = React.useState('')
  const [room, setRoom] = React.useState('')
  const [guestData, setGuestData] = React.useState(emptyGuestData)

  const newReservation = {
    id: uuid(),
    group: room,
    title: name,
    start_time: start,
    end_time: end,
    phone: phone,
    email: email,
    status: '',
    itemProps: {
      style: initialResStyles
    },
    guestData: {
      phone: phone,
      email: email,
      street: guestData.street,
      houseNum: guestData.houseNum,
      apartmentNum: guestData.apartmentNum,
      city: guestData.city,
      zipCode: guestData.zipCode,
      country: guestData.country
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    dataApi.addData(newReservation)
    dispatch(addDataAction(newReservation))
    close()
  }

  return (
    <StyledPaper className={'form-wrapper'}>
      <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px' }}>
        <div>NOWA REZERWACJA</div>
        <div>
          <IconButton
            onClick={close}
          ><CloseTwoToneIcon/>
          </IconButton>
        </div>
      </header>
      <Divider variant={'middle'}/>
      <StyledForm
        className={'reservation'}
        onSubmit={handleSubmit}
      >
        <StyledInputWrapper style={{ width: '50%' }}>
          <h5>Rezerwacja</h5>
          <StyledInputWrapper>
            <label htmlFor={'start'}>
              Data przyjazdu:

            </label><StyledInput
              type={'date'}
              name={'start'}
              onChange={(e) => setStart(e.target.value)}
              value={start}
              required
                    />
          </StyledInputWrapper>
          <StyledInputWrapper>
            <label htmlFor={'end'}>
              Data wyjazdu:

            </label>
            <StyledInput
              type={'date'}
              name={'end'}
              onChange={(e) => setEnd(e.target.value)}
              value={end}
              required
            />
          </StyledInputWrapper>
          <StyledInputWrapper>
            <label htmlFor={'room'}>
              Numer pokoju:

            </label> <StyledSelect
              name={'room'}
              onChange={(e) => setRoom(e.target.value)}
                     >{rooms.map(room => {
                       return (
                         <option
                           key={room.id}
                           value={room.id}
                         >{room.id}
                         </option>)
                     })}
            </StyledSelect>
          </StyledInputWrapper>
          <StyledInputWrapper>
            <label htmlFor={'status'}>
              Status

            </label> <StyledSelect
              name={'status'}
              onChange={(e) => console.log(e)}
                     >
                     </StyledSelect>
          </StyledInputWrapper>
        </StyledInputWrapper>

        <StyledInputWrapper
          style={{ width: '50%' }}
        ><h5>Gość</h5>
          <StyledInputWrapper>
            <label htmlFor={'name'}>
              Imię i nazwisko
            </label>
            <StyledInput
              name={'name'}
              onChange={(e) => setName(e.target.value)}
              value={name}
              required
            />
          </StyledInputWrapper>
          <StyledInputWrapper>
            <label htmlFor={'email'}>
              Email:
            </label>
            <StyledInput
              type={'email'}
              name={'email'}
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              placeholder={'nazwa@poczty.pl'}
            />
          </StyledInputWrapper>
          <StyledInputWrapper>
            <label htmlFor={'phone'}>
              Telefon:

            </label> <StyledInput
              name={'phone'}
              onChange={(e) => setPhone(e.target.value)}
              value={phone}
              placeholder={'xxx-xxx-xxx'}
                     />
          </StyledInputWrapper>
          <StyledInputWrapper>
            <label htmlFor={'street'}>
              Ulica:

            </label> <StyledInput
              name={'street'}
              onChange={(e) => setGuestData({ ...guestData, street: e.target.value })}
              value={guestData.street}
                     />
          </StyledInputWrapper>
          <div style={{ display: 'flex' }}>
            <StyledInputWrapper>
              <label htmlFor={'houseNum'}>
                Numer domu:
              </label> <StyledInput
                name={'houseNum'}
                onChange={(e) => setGuestData({ ...guestData, houseNum: e.target.value })}
                value={guestData.houseNum}
                       />

            </StyledInputWrapper>
            <StyledInputWrapper>
              <label htmlFor={'apartmentNum'}>
                Numer lokalu:
              </label>
              <StyledInput
                name={'apartmentNum'}
                onChange={(e) => setGuestData({ ...guestData, apartmentNum: e.target.value })}
                value={guestData.apartmentNum}
              />
            </StyledInputWrapper>
          </div>
          <div style={{ display: 'flex' }}>
            <StyledInputWrapper>
              <label htmlFor={'zipCode'}>
                Kod pocztowy:
              </label> <StyledInput
                name={'zipCode'}
                onChange={(e) => setGuestData({ ...guestData, zipCode: e.target.value })}
                value={guestData.zipCode}
                       />

            </StyledInputWrapper>
            <StyledInputWrapper>
              <label htmlFor={'city'}>
                Miasto:
              </label>
              <StyledInput
                name={'city'}
                onChange={(e) => setGuestData({ ...guestData, city: e.target.value })}
                value={guestData.city}
              />
            </StyledInputWrapper>
          </div>
          <StyledInputWrapper>
            <label htmlFor={'country'}>
              Kraj:

            </label>  <StyledSelect
              defaultValue={guestData.country}
              name={'country'}
              onChange={(e) => setGuestData({ ...guestData, country: e.target.value })}
                      >{countries.map(country => {
                        return (
                          <option
                            key={country.code}
                            value={country.label}
                          >{country.label}
                          </option>)
                      })}
            </StyledSelect>
          </StyledInputWrapper>

        </StyledInputWrapper>
        <StyledButton
          className={'button-reservation--add'}
        >DODAJ
        </StyledButton>

      </StyledForm>

    </StyledPaper>
  )
}

ReservationForm.propTypes = {
  close: PropTypes.func
}

export default ReservationForm
