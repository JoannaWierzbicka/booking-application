import moment from 'moment'

export const itemsConverter = (reservations) => {
  const items = reservations.map(reservation => {
    reservation.start_time = moment(reservation.start_time)
    reservation.end_time = moment(reservation.end_time)
    return reservation
  })

  return items
}

export default itemsConverter
