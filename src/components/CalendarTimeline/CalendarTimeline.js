/* eslint-disable no-trailing-spaces */
/* eslint-disable no-unused-vars */
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { loadDataAction } from '../../actions/reservation'
import { loadRoomsDataAction } from '../../actions/rooms'
import DataApi from '../../api/DataApi'
import { StyledTimeline, StyledButton } from '../../styledComponents'
import itemsConverter from '../../helpers/itemsConverter'
import ReservationForm from '../ReservationForm/ReservationForm'
import itemRenderer from '../../helpers/itemRenderer'
import RoomForm from '../../components/RoomForm'

export const CalendarTimeline = () => {
  const dispatch = useDispatch()
  const [addNewRes, setAddNewRes] = React.useState(false)
  const [addNewRoom, setAddNewRoom] = React.useState(false)
  const [edited, setEdited] = React.useState([])
  const [editedRoom, setEditedRoom] = React.useState([])

  const { date } = useSelector((state) => state.calendar)
  const { reservations } = useSelector((state) => state.reservations)
  const { rooms } = useSelector((state) => state.rooms)

  const items = Array.isArray(reservations) ? itemsConverter(reservations) : []
  
  const dataApi = new DataApi()
  
  React.useEffect(() => {
    dataApi.loadData('rooms')
      .then((data) => {
        console.log(data)
        dispatch(loadRoomsDataAction(data)) 
      })
  }, [])

  React.useEffect(() => {
    dataApi.loadData('reservations')
      .then(data => {
        console.log(data)
        dispatch(loadDataAction(data)) 
      })
  }, []) 

  const onClickAddRes = () => {
    setAddNewRes(true)
    setAddNewRoom(false)
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
        // onItemMove={onItemMove(itemId, dragTime, newGroupOrder)}
        // onTimeChange={onTimeChange(visibleTimeStart, visibleTimeEnd, updateScrollCanvas, unit)}
      />
      <StyledButton
        variant={'contained'}
        className={'button-reservation--add'}
        onClick={onClickAddRes}
      >Dodaj rezerwację
      </StyledButton>
      <StyledButton
        variant={'contained'}
        className={'button-reservation--add'}
        onClick={() => setAddNewRoom(true)}
      >Dodaj pokój
      </StyledButton>
      {
        addNewRes
          ? <ReservationForm
              type={'new'}
              close={() => setAddNewRes(false)}
            />
          : null
      }
      {
        addNewRoom
          ? <RoomForm
              type={'new'}
              close={() => setAddNewRoom(false)}
            />
          : null
      }
      {
        edited.length > 0
          ? <ReservationForm
              type={'edit'}
              close={() => setEdited([])}
              data={Object.assign(edited[0])}
            />
          : null
      }
      {
        editedRoom.length > 0
          ? <RoomForm
              type={'edit'}
              close={() => setEditedRoom([])}
              data={Object.assign(editedRoom[0])}
            />
          : null
      }
    </>

  )
}

export default CalendarTimeline
