import React from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'
import 'moment/locale/pl'

import Alert from '@mui/material/Alert'
import { Divider } from '@mui/material'
import { StyledList, StyledButton } from '../../styledComponents'

export const ReservationList = (props) => {
  const { reservations, onClickDetails, rooms } = props

  const sorted = reservations.sort((a, b) => a.start_time - b.start_time)

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
                    <h3 style={{ textAlign: 'center', backgroundColor: 'rgb(89 137 167 / 35%)', width: '100%' }}>{getDate(res.start_time._i)}</h3>
                    <h5><span style={{ fontWeight: 300, marginLeft: '6px' }}>Pokój:</span> {findRoom(res.group)}</h5>
                    <h6 style={{ marginLeft: '6px' }}>{res.title}</h6>
                    <Divider variant={'middle'}/>
                    <div style={{ display: 'flex', justifyContent: 'center', padding: '4px' }}>
                      <StyledButton
                        className={'button-res-list'}
                        onClick={() => onClickDetails(res.id)}
                      >Szczegóły
                      </StyledButton>
                    </div>

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
