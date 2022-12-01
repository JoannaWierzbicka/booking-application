/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import PropTypes from 'prop-types'
import Radio from '@mui/material/Radio'
import RadioGroup from '@mui/material/RadioGroup'
import FormControlLabel from '@mui/material/FormControlLabel'
import { StyledPaper, StyledForm, StyledInput, StyledButton, StyledSelect, StyledInputWrapper, StyledLabel } from '../../styledComponents'
import IconButton from '@mui/material/IconButton'
import CloseTwoToneIcon from '@mui/icons-material/CloseTwoTone'
import { countries } from '../../helpers/countries'
import { addDataAction, removeDataAction, editDataAction } from '../../actions/reservation'
import DataApi from '../../api/DataApi'
import DeleteIcon from '@mui/icons-material/Delete'
import { v4 as uuid } from 'uuid'
import objectToArray from '../../api/objectToArray'
import moment from 'moment'

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const options = [
  {
    name: 'Rezerwacja wstępna',
    status: 'pre-booking',
    color: 'orange'
  },
  {
    name: 'Zaliczka opłacona',
    status: 'pre-paid',
    color: 'blue'
  },
  {
    name: 'Całość opłacona',
    status: 'paid-all',
    color: 'green'
  },
  {
    name: 'Anulowana',
    status: 'cancelled',
    color: 'grey'
  }
]

export const ReservationForm = (props) => {
  const { type, data, close, user } = props
  const dispatch = useDispatch()
  const dataApi = new DataApi()
  const { rooms } = useSelector((state) => state.rooms)

  const searched = '@'
  const withNew = ''
  const newEm = user.replace(searched, withNew)
  const sear = '.'
  const userIdAdded = newEm.replaceAll(sear, withNew)

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
  const [start, setStart] = React.useState(type === 'new' ? '' : moment(data.start_time._i).format('YYYY-MM-DD'))
  const [end, setEnd] = React.useState(type === 'new' ? '' : moment(data.end_time._i).format('YYYY-MM-DD'))
  const [room, setRoom] = React.useState(type === 'new' ? rooms[0].id : data.group)
  const [guestData, setGuestData] = React.useState(type === 'new' ? initialGuestData : data.guestData)
  const [status, setStatus] = React.useState(type === 'new' ? 'pre-booking' : data.status)

  const reservation = {
    id: type === 'new' ? uuid() : data.id,
    group: room,
    title: name,
    start_time: moment(start),
    end_time: moment(end),
    status: status,
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
    if (window.confirm('Na pewno chcesz usunąć rezerwację?')) {
      dataApi.removeData(userIdAdded, 'reservations', id)
      dispatch(removeDataAction(id))
      close()
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    dataApi.addData(userIdAdded, 'reservations', reservation)
    dispatch(addDataAction(reservation))
    close()
  }

  const handleChange = (e) => {
    e.preventDefault()
    dataApi.editData(userIdAdded, 'reservations', data.id, reservation)
    dispatch(editDataAction(reservation))
    close()
  }

  return (
    <StyledPaper>
      <header className={'form-header'}>
        {type === 'new' ? <div>NOWA REZERWACJA</div> : <div>{data.title.toUpperCase()}</div>}
        <div>
          {
                type === 'edit'
                  ?
                    <IconButton onClick={() => removeReservation(data.id)}>
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
      <StyledForm
        className={'reservation'}
        onSubmit={type === 'new' ? handleSubmit : handleChange}
      >
        <StyledInputWrapper className={'row-wrapper'}>
          <h5>Rezerwacja</h5>
          <StyledInputWrapper>
            <StyledLabel htmlFor={'start'}>
              Data przyjazdu:

            </StyledLabel><StyledInput
              type={'date'}
              name={'start'}
              onChange={(e) => setStart(e.target.value)}
              value={start}
              required
                          />
          </StyledInputWrapper>
          <StyledInputWrapper>
            <StyledLabel htmlFor={'end'}>
              Data wyjazdu:

            </StyledLabel>
            <StyledInput
              type={'date'}
              name={'end'}
              onChange={(e) => setEnd(e.target.value)}
              value={end}
              required
            />
          </StyledInputWrapper>
          <StyledInputWrapper>
            <StyledLabel htmlFor={'room'}>
              Nazwa pokoju:

            </StyledLabel> <StyledSelect

              defaultValue={room}
              name={'room'}
              onChange={(e) => setRoom(e.target.value)}
                           >{rooms.map(room => {
                             return (
                               <option
                                 required
                                 key={room.id}
                                 value={room.id}
                               >{room.title}
                               </option>)
                           })}
                           </StyledSelect>
          </StyledInputWrapper>
          <StyledInputWrapper>
            <StyledLabel htmlFor={'guests'}>
              Ilość osób:

            </StyledLabel> <StyledSelect
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
            <StyledLabel htmlFor={'status'}>
              Status

            </StyledLabel>
            <RadioGroup
              name={'status'}
              onChange={(e) => setStatus(e.target.value)}
            >{options.map(stat => {
              return (
                <FormControlLabel
                  key={stat.name}
                  value={stat.status}
                  control={<Radio
                    sx={{
                      color: stat.color,
                      '&.Mui-checked': {
                        color: stat.color
                      }
                    }}
                           />}
                  label={stat.name}
                />
              )
            })}
            </RadioGroup>
          </StyledInputWrapper>
        </StyledInputWrapper>

        <StyledInputWrapper
          className={'row-wrapper'}
        ><h5>Gość</h5>
          <StyledInputWrapper>
            <StyledLabel htmlFor={'name'}>
              Imię i nazwisko
            </StyledLabel>
            <StyledInput
              name={'name'}
              onChange={(e) => setName(e.target.value)}
              value={name}
              required
            />
          </StyledInputWrapper>
          <StyledInputWrapper>
            <StyledLabel htmlFor={'email'}>
              Email:
            </StyledLabel>
            <StyledInput
              type={'email'}
              name={'email'}
              onChange={(e) => setGuestData({ ...guestData, email: e.target.value })}
              value={guestData.email}
              placeholder={'nazwa@poczty.pl'}
            />
          </StyledInputWrapper>
          <StyledInputWrapper>
            <StyledLabel htmlFor={'phone'}>
              Telefon:

            </StyledLabel> <StyledInput
              name={'phone'}
              onChange={(e) => setGuestData({ ...guestData, phone: e.target.value })}
              value={guestData.phone}
              placeholder={'xxx-xxx-xxx'}
                           />
          </StyledInputWrapper>
          <StyledInputWrapper>
            <StyledLabel htmlFor={'street'}>
              Ulica:

            </StyledLabel> <StyledInput
              name={'street'}
              onChange={(e) => setGuestData({ ...guestData, street: e.target.value })}
              value={guestData.street}
                           />
          </StyledInputWrapper>
          <div style={{ display: 'flex' }}>
            <StyledInputWrapper>
              <StyledLabel htmlFor={'houseNum'}>
                Numer domu:
              </StyledLabel> <StyledInput
                className={'input--short'}
                name={'houseNum'}
                onChange={(e) => setGuestData({ ...guestData, houseNum: e.target.value })}
                value={guestData.houseNum}
                             />

            </StyledInputWrapper>
            <StyledInputWrapper>
              <StyledLabel htmlFor={'apartmentNum'}>
                Numer lokalu:
              </StyledLabel>
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
              <StyledLabel htmlFor={'zipCode'}>
                Kod pocztowy:
              </StyledLabel> <StyledInput
                className={'input--short'}
                name={'zipCode'}
                onChange={(e) => setGuestData({ ...guestData, zipCode: e.target.value })}
                value={guestData.zipCode}
                             />

            </StyledInputWrapper>
            <StyledInputWrapper>
              <StyledLabel htmlFor={'city'}>
                Miasto:
              </StyledLabel>
              <StyledInput
                className={'input--short'}
                name={'city'}
                onChange={(e) => setGuestData({ ...guestData, city: e.target.value })}
                value={guestData.city}
              />
            </StyledInputWrapper>
          </div>
          <StyledInputWrapper>
            <StyledLabel htmlFor={'country'}>
              Kraj:

            </StyledLabel>  <StyledSelect
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
          className={'button-reservation--form'}
          variant={'contained'}
          type={'submit'}
        >{type === 'new' ? 'DODAJ' : 'ZAPISZ'}
        </StyledButton>
        {
         type === 'edit' ?
           <StyledButton
             className={'button-reservation--form'}
             variant={'outlined'}
             onClick={close}
           >ANULUJ
           </StyledButton>
           : null
        }

      </StyledForm>

    </StyledPaper>
  )
}

ReservationForm.propTypes = {
  type: PropTypes.oneOf(['new', 'edit']),
  data: PropTypes.object,
  close: PropTypes.func
}

export default ReservationForm
