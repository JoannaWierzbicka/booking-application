import React from 'react'
import { useDispatch } from 'react-redux'
import PropTypes from 'prop-types'
import { StyledPaper, StyledForm, StyledInput, StyledButton, StyledSelect, StyledInputWrapper } from '../../styledComponents'
import { rooms } from '../../helpers/rooms'
import Divider from '@mui/material/Divider'
import IconButton from '@mui/material/IconButton'
import CloseTwoToneIcon from '@mui/icons-material/CloseTwoTone'
import { countries } from '../../helpers/countries'
import { addDataAction, removeDataAction, editDataAction } from '../../actions/reservation'
import DataApi from '../../api/DataApi'
import DeleteIcon from '@mui/icons-material/Delete'
import { v4 as uuid } from 'uuid'

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

export const ReservationView = (props) => {
  const { type, data, close } = props
  const dispatch = useDispatch()
  const dataApi = new DataApi()

  const initialGuestData = {
    phone: '',
    email: '',
    street: '',
    houseNum: '',
    apartmentNum: '',
    city: '',
    zipCode: '',
    country: 'Poland'
  }

  const [name, setName] = React.useState(type === 'new' ? '' : data.title)
  const [guests, setGuests] = React.useState(type === 'new' ? '' : data.guests)
  const [start, setStart] = React.useState(type === 'new' ? '' : data.start_time._i)
  const [end, setEnd] = React.useState(type === 'new' ? '' : data.end_time._i)
  const [room, setRoom] = React.useState(type === 'new' ? '' : data.group)
  const [guestData, setGuestData] = React.useState(type === 'new' ? initialGuestData : data.guestData)

  const reservation = {
    id: type === 'new' ? uuid() : data.id,
    group: room,
    title: name,
    start_time: start,
    end_time: end,
    status: '',
    guests: guests,
    guestData: {
      phone: guestData.phone,
      email: guestData.email,
      street: guestData.street,
      houseNum: guestData.houseNum,
      apartmentNum: guestData.apartmentNum,
      city: guestData.city,
      zipCode: guestData.zipCode,
      country: guestData.country
    }
  }

  const removeReservation = (id) => {
    if (window.confirm('You sure?')) {
      dataApi.removeReservation(id)
      dispatch(removeDataAction(id))
      close()
    } else {
      console.log('no')
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    dataApi.addData(reservation)
    dispatch(addDataAction(reservation))
    close()
  }

  const handleChange = (e) => {
    e.preventDefault()
    dataApi.editReservation(data.id, reservation)
    dispatch(editDataAction(reservation))
    close()
  }

  return (
    <StyledPaper className={'form-wrapper'}>
      <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px' }}>
        {type === 'new' ? <div>NOWA REZERWACJA</div> : <div>{data.title.toUpperCase()}</div>}
        <div>
          {
                type === 'edit'
                  ? <IconButton onClick={() => removeReservation(data.id)}>
                    <DeleteIcon />
                    </IconButton>
                  : null
            }
          <IconButton
            onClick={close}
          ><CloseTwoToneIcon/>
          </IconButton>
        </div>
      </header>
      <Divider variant={'middle'}/>
      <StyledForm
        className={'reservation'}
        onSubmit={type === 'new' ? handleSubmit : handleChange}
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

              defaultValue={room}
              name={'room'}
              onChange={(e) => setRoom(e.target.value)}
                     >{rooms.map(room => {
                       return (
                         <option
                           required
                           key={room.id}
                           value={room.id}
                         >{room.id}
                         </option>)
                     })}
            </StyledSelect>
          </StyledInputWrapper>
          <StyledInputWrapper>
            <label htmlFor={'guests'}>
              Ilość osób:

            </label> <StyledSelect
              defaultValue={guests}
              name={'guests'}
              onChange={(e) => setGuests(e.target.value)}
                     >{numbers.map(num => {
                       return (
                         <option
                           key={num}
                           value={num}
                         >{num}
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
              onChange={(e) => setGuestData({ ...guestData, email: e.target.value })}
              value={guestData.email}
              placeholder={'nazwa@poczty.pl'}
            />
          </StyledInputWrapper>
          <StyledInputWrapper>
            <label htmlFor={'phone'}>
              Telefon:

            </label> <StyledInput
              name={'phone'}
              onChange={(e) => setGuestData({ ...guestData, phone: e.target.value })}
              value={guestData.phone}
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
                className={'input--short'}
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
                className={'input--short'}
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
                className={'input--short'}
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
                className={'input--short'}
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
          type={'submit'}
          className={'button-reservation--add'}
        >{type === 'new' ? 'DODAJ' : 'ZAPISZ'}
        </StyledButton>
        {
         type === 'edit' ?
           <StyledButton
             onClick={close}
             className={'button-reservation--leave'}
           >Cofnij zmiany
           </StyledButton>
           : null
        }

      </StyledForm>

    </StyledPaper>
  )
}

ReservationView.propTypes = {
  type: PropTypes.oneOf(['new', 'edit']),
  data: PropTypes.object,
  close: PropTypes.func
}

export default ReservationView
