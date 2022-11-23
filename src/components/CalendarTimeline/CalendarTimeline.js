import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { loadDataAction } from '../../actions/reservation'
import DataApi from '../../api/DataApi'
import { StyledTimeline, StyledButton } from '../../styledComponents'
import itemsConverter from '../../helpers/itemsConverter'
import { rooms } from '../../helpers/rooms'
import ReservationView from '../ReservationView/ReservationView'

export const CalendarTimeline = () => {
  const dispatch = useDispatch()
  const [addNew, setAddNew] = React.useState(false)
  const [edited, setEdited] = React.useState([])

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
        onItemClick={(id) => setEdited(items.filter((item) => item.id === id))}
      />
      <StyledButton
        className={'button-reservation--new'}
        onClick={() => setAddNew(true)}
      >Dodaj rezerwację
      </StyledButton>
      {
        addNew
          ? <ReservationView
              type={'new'}
              close={() => setAddNew(false)}
            />
          : null
      }
      {
        edited.length > 0
          ? <ReservationView
              type={'edit'}
              close={() => setEdited([])}
              data={Object.assign(edited[0])}
            />
          : null
      }
    </>

  )
}

export default CalendarTimeline
