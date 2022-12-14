import React from 'react'
import PropTypes from 'prop-types'
import { StyledList, StyledButton } from '../../styledComponents'
import moment from 'moment'
import 'moment/locale/pl'
import Alert from '@mui/material/Alert'

export const ReservationList = (props) => {
  const { reservations, onClickDetails, rooms } = props

  const sorted = reservations.sort((a, b) => a.start_time - b.start_time)
  console.log(sorted)

  const findRoom = (id) => {
    return rooms.map(room => {
      return room.id === id ? room.title : null
    })
  }

  const getDate = (date) => {
    return moment(date).format('LL')
  }

  return (
    <div>
      {
        sorted.length === 0
          ?
            <Alert
              severity={'info'}
              color={'info'}
            >
              Nie ma jeszcze żadnej rezerwacji
            </Alert> :
            <StyledList>
              {sorted.map(res => {
                return (
                  <li
                    className={'reservation-item'}
                    key={res.id}
                  >
                    <h3 style={{ textAlign: 'center', backgroundColor: '#5989A7', borderRadius: '5px' }}>{getDate(res.start_time._i)}</h3>
                    <h5>Pokój: {findRoom(res.group)}</h5>
                    <h6>{res.title}</h6>
                    <StyledButton
                      className={'button-res-list'}
                      onClick={() => onClickDetails(res.id)}
                    >Szczegóły
                    </StyledButton>
                  </li>)
              })}
            </StyledList>
      }

    </div>
  )
}

ReservationList.propTypes = {
  reservations: PropTypes.array,
  close: PropTypes.func,
  onClickDetails: PropTypes.func,
  rooms: PropTypes.array
}

export default ReservationList
