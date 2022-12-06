import React from 'react'
import PropTypes from 'prop-types'
import { useDispatch, useSelector } from 'react-redux'
import { loadDataAction } from '../../actions/reservation'
import { loadRoomsDataAction } from '../../actions/rooms'
import DataApi from '../../api/DataApi'
import { StyledTimeline, StyledButton } from '../../styledComponents'
import { itemsConverter, itemRenderer, createUserId } from '../../helpers'
import ReservationForm from '../ReservationForm/ReservationForm'
import RoomForm from '../../components/RoomForm'

export const CalendarTimeline = (props) => {
  const { user } = props
  const userIdAdded = createUserId(user)
  const dispatch = useDispatch()

  const { date } = useSelector((state) => state.calendar)
  const { reservations } = useSelector((state) => state.reservations)
  const { rooms } = useSelector((state) => state.rooms)

  const [addNewRes, setAddNewRes] = React.useState(false)
  const [addNewRoom, setAddNewRoom] = React.useState(false)
  const [edited, setEdited] = React.useState([])
  const [editedRoom, setEditedRoom] = React.useState([])

  const items = Array.isArray(reservations) ? itemsConverter(reservations) : []
  const dataApi = new DataApi()

  React.useEffect(() => {
    dataApi.loadData(userIdAdded, 'rooms')
      .then((data) => {
        dispatch(loadRoomsDataAction(data))
      })
  }, [user])

  React.useEffect(() => {
    dataApi.loadData(userIdAdded, 'reservations')
      .then(data => {
        dispatch(loadDataAction(data))
      })
  }, [user])

  const onClickAddRes = () => {
    if (rooms.length > 0) {
      setAddNewRes(true)
      setAddNewRoom(false)
    } else {
      alert('Najpierw dodaj pokój!')
    }
  }

  const editGroup = (id) => {
    const editedRoom = rooms.filter((data) => data.id === id)
    setEditedRoom(editedRoom)
  }

  return (
    <>
      <StyledTimeline
        groups={Array.isArray(rooms) ? rooms : []}
        items={items}
        visibleTimeStart={date.start}
        visibleTimeEnd={date.end}
        onItemClick={(id) => setEdited(items.filter((item) => item.id === id))}
        itemRenderer={itemRenderer}
        buffer={1}
        canMove={false}
        onCanvasDoubleClick={editGroup}
      />
      <StyledButton
        variant={'contained'}
        className={'button-reservation--add'}
        onClick={() => setAddNewRoom(true)}
      >Dodaj pokój
      </StyledButton>
      <StyledButton
        variant={'contained'}
        className={'button-reservation--add'}
        onClick={onClickAddRes}
      >Dodaj rezerwację
      </StyledButton>
      {
        addNewRes
          ? <ReservationForm
              user={user}
              type={'new'}
              close={() => setAddNewRes(false)}
            />
          : null
      }
      {
        addNewRoom
          ? <RoomForm
              user={user}
              type={'new'}
              close={() => setAddNewRoom(false)}
            />
          : null
      }
      {
        edited.length > 0
          ? <ReservationForm
              user={user}
              type={'edit'}
              close={() => setEdited([])}
              data={Object.assign(edited[0])}
            />
          : null
      }
      {
        editedRoom.length > 0
          ? <RoomForm
              user={user}
              type={'edit'}
              close={() => setEditedRoom([])}
              data={Object.assign(editedRoom[0])}
            />
          : null
      }
    </>

  )
}

CalendarTimeline.propTypes = {
  user: PropTypes.string
}

export default CalendarTimeline
