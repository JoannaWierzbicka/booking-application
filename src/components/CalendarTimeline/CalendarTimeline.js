import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { loadDataAction } from '../../actions/reservation'
import DataApi from '../../api/DataApi'
import ReservationForm from '../ReservationForm'
import ReservationInfo from '../ReservationInfo'
import { StyledTimeline, StyledButton } from '../../styledComponents'
import itemsConverter from '../../helpers/itemsConverter'
import { rooms } from '../../helpers/rooms'

export const CalendarTimeline = () => {
  const dispatch = useDispatch()
  const [formOn, setFormVisible] = React.useState(false)
  const [reservationOn, setReservationOn] = React.useState([])

  const { date } = useSelector((state) => state.calendar)
  const { reservations } = useSelector((state) => state.reservations)

  const items = itemsConverter(reservations)

  const dataApi = new DataApi()

  React.useEffect(() => {
    dataApi.loadData()
      .then(data => dispatch(loadDataAction(data)))
  }, [])

  return (
    <>
      <StyledTimeline
        groups={rooms}
        items={items}
        visibleTimeStart={date.start}
        visibleTimeEnd={date.end}
        onItemClick={(id) => setReservationOn(items.filter((item) => item.id === id))}
      />
      <StyledButton
        className={'button-reservation--add'}
        onClick={() => setFormVisible(true)}
      >Dodaj rezerwację
      </StyledButton>
      {
        formOn ? <ReservationForm close={() => setFormVisible(false)}/> : null
      }
      {
        reservationOn.length > 0
          ? <ReservationInfo
              close={() => setReservationOn([])}
              data={reservationOn}
            />
          : null
      }
    </>

  )
}

export default CalendarTimeline
