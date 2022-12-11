import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import PropTypes from 'prop-types'
import Radio from '@mui/material/Radio'
import RadioGroup from '@mui/material/RadioGroup'
import FormControlLabel from '@mui/material/FormControlLabel'
import FormElement from '../../components/FormElement'
import FormElementWithSelect from '../../components/FormElementWithSelect'
import { StyledPaper, StyledForm, StyledButton, StyledInputWrapper, StyledLabel } from '../../styledComponents'
import IconButton from '@mui/material/IconButton'
import CloseTwoToneIcon from '@mui/icons-material/CloseTwoTone'
import { countries, createUserId, statusOptions, initialGuestData } from '../../helpers'
import { addDataAction, removeDataAction, editDataAction } from '../../actions/reservation'
import DataApi from '../../api/DataApi'
import DeleteIcon from '@mui/icons-material/Delete'
import { v4 as uuid } from 'uuid'
import moment from 'moment'

export const ReservationForm = (props) => {
  const { type, data, close, user, params } = props
  const dispatch = useDispatch()
  const userId = createUserId(user)

  const dataApi = new DataApi()
  const { rooms } = useSelector((state) => state.rooms)

  const [name, setName] = React.useState(type === 'edit' ? data.title : '')
  const [guests, setGuests] = React.useState(type === 'edit' ? data.guests : '')
  const [start, setStart] = React.useState(type === 'new' ? '' : type === 'newPar' ? moment(params[1]).format('YYYY-MM-DD') : moment(data.start_time._i).format('YYYY-MM-DD'))
  const [end, setEnd] = React.useState(type === 'edit' ? moment(data.end_time._i).format('YYYY-MM-DD') : '')
  const [room, setRoom] = React.useState(type === 'new' ? rooms[0].id : type === 'newPar' ? params[0] : data.group)
  const [price, setPrice] = React.useState(type === 'edit' ? data.price : '')
  const [guestData, setGuestData] = React.useState(type === 'edit' ? data.guestData : initialGuestData)
  const [status, setStatus] = React.useState(type === 'edit' ? data.status : 'pre-booking')

  const getTotalPrice = () => {
    const arrival = moment(start).valueOf()
    const departure = moment(end).valueOf()
    if (departure > arrival) {
      return ((departure - arrival) / 86400000) * price
    }
  }

  const reservation = {
    id: type === 'edit' ? data.id : uuid(),
    group: room,
    title: name,
    start_time: moment(start),
    end_time: moment(end),
    price: price,
    totalPrice: getTotalPrice(),
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
      dataApi.removeData(userId, 'reservations', id)
      dispatch(removeDataAction(id))
      close()
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    dataApi.addData(userId, 'reservations', reservation)
      .then((resp) => {
        const newID = resp.name
        const newData = { ...reservation, id: newID }
        dataApi.editData(userId, 'reservations', newID, newData)
        dispatch(addDataAction(newData))
      })
    close()
  }

  const handleChange = (e) => {
    e.preventDefault()
    dataApi.editData(userId, 'reservations', data.id, reservation)
    dispatch(editDataAction(reservation))
    close()
  }

  return (
    <StyledPaper className={'paper-reservation'}>
      <header className={'form-header'}>
        {type === 'edit' ? <div>{data.title.toUpperCase()}</div> : <div>NOWA REZERWACJA</div>}
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
        onSubmit={type === 'edit' ? handleChange : handleSubmit}
      >
        <StyledInputWrapper className={'row-wrapper'}>
          <h5>Rezerwacja</h5>
          <FormElement
            title = {'Data przyjazdu'}
            name={'start'}
            type={'date'}
            onChange={(e) => setStart(e.target.value)}
            value={start}
            required
          />
          <FormElement
            title = {'Data wyjazdu'}
            name={'end'}
            type={'date'}
            onChange={(e) => setEnd(e.target.value)}
            value={end}
            required
          />

          <StyledInputWrapper className={'reservation-layout'}>
            <StyledInputWrapper>
              <FormElementWithSelect
                title = {'Nazwa pokoju'}
                name = {'room'}
                onChange = {(e) => setRoom(e.target.value)}
                defaultValue = {room}
                options = {rooms}
                className={'select--short'}
                required
              />
              <FormElementWithSelect
                title = {'Ilość osób'}
                name = {'guests'}
                onChange = {(e) => setGuests(e.target.value)}
                defaultValue = {guests}
                options = {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
                className={'select--short'}
              />
            </StyledInputWrapper>
            <StyledInputWrapper className={'reservation-layout-prices'}>
              <FormElement
                title = {'Cena za dobę'}
                name={'price'}
                type={'number'}
                onChange={(e) => setPrice(e.target.value)}
                value={price}
                min={0}
                className={'input-price'}
              />
              <FormElement
                title = {'Cena za cały pobyt*'}
                name={'price'}
                type={'number'}
                value={getTotalPrice() || 0}
                className={'input-price-read'}
                readOnly
              />
            </StyledInputWrapper>
          </StyledInputWrapper>
          <StyledInputWrapper>
            <StyledLabel htmlFor={'status'}>
              Status
            </StyledLabel>
            <RadioGroup
              name={'status'}
              onChange={(e) => setStatus(e.target.value)}
            >{statusOptions.map(stat => {
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
          <FormElement
            title = {'Imię i nazwisko'}
            name={'name'}
            onChange={(e) => setName(e.target.value)}
            value={name}
            required
          />
          <FormElement
            title = {'Email'}
            type={'email'}
            name={'email'}
            onChange={(e) => setGuestData({ ...guestData, email: e.target.value })}
            value={guestData.email}
            placeholder={'nazwa@poczty.pl'}
          />
          <FormElement
            title = {'Telefon'}
            name={'phone'}
            onChange={(e) => setGuestData({ ...guestData, phone: e.target.value })}
            value={guestData.phone}
            placeholder={'xxx-xxx-xxx'}
          />
          <FormElement
            title = {'Ulica'}
            name={'street'}
            onChange={(e) => setGuestData({ ...guestData, street: e.target.value })}
            value={guestData.street}
          />
          <div style={{ display: 'flex' }}>
            <FormElement
              title = {'Number domu'}
              name={'houseNum'}
              className={'input--short'}
              onChange={(e) => setGuestData({ ...guestData, houseNum: e.target.value })}
              value={guestData.houseNum}
            />
            <FormElement
              title = {'Numer lokalu'}
              name={'apartmentNum'}
              className={'input--short'}
              onChange={(e) => setGuestData({ ...guestData, apartmentNum: e.target.value })}
              value={guestData.apartmentNum}
            />
          </div>
          <div style={{ display: 'flex' }}>
            <FormElement
              title = {'Kod pocztowy'}
              name={'zipCode'}
              className={'input--short'}
              onChange={(e) => setGuestData({ ...guestData, zipCode: e.target.value })}
              value={guestData.zipCode}
            />
            <FormElement
              title = {'Miasto'}
              name={'city'}
              className={'input--short'}
              onChange={(e) => setGuestData({ ...guestData, city: e.target.value })}
              value={guestData.city}
            />
          </div>
          <FormElementWithSelect
            title = {'Kraj'}
            name = {'country'}
            onChange = {(e) => setGuestData({ ...guestData, country: e.target.value })}
            defaultValue = {guestData.country}
            options = {countries}
          />
        </StyledInputWrapper>
        <StyledButton
          className={'button-reservation--form'}
          variant={'contained'}
          type={'submit'}
        >{type === 'edit' ? 'ZAPISZ' : 'DODAJ'}
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
  type: PropTypes.oneOf(['new', 'edit', 'newPar']),
  data: PropTypes.object,
  close: PropTypes.func,
  user: PropTypes.string,
  params: PropTypes.array
}

export default ReservationForm
