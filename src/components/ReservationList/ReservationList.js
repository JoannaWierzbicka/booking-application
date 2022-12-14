/* eslint-disable no-unused-vars */
import React from 'react'
import PropTypes from 'prop-types'
import { StyledList } from '../../styledComponents'
import moment from 'moment'

export const ReservationList = (props) => {
  const { reservations, close, onClickDetails, rooms } = props

  const sorted = reservations.sort((a, b) => a.start_time - b.start_time)

  const findRoom = (id) => {
    return rooms.map(room => {
      return room.id === id ? room.title : null
    })
  }

  return (
    <div>
      <StyledList>
        {sorted.map(res => {
          return (
            <li
              className={'reservation-item'}
              key={res.id}
            >
              <h4>Przyjazd: {res.start_time._i}</h4>
              <h5>Pokój: {findRoom(res.group)}</h5>
              <h6>{res.title}</h6>
              <button onClick={() => onClickDetails(res.id)}>Szczegóły</button>
            </li>)
        })}
      </StyledList>
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
