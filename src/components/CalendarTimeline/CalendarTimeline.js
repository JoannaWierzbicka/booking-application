import React from 'react'
import PropTypes from 'prop-types'
import { useDispatch, useSelector } from 'react-redux'
// import { Eventcalendar } from '@mobiscroll/react'
// import '@mobiscroll/react/dist/css/mobiscroll.min.css'

import { loadDataAction } from '../../actions/reservation'
import { loadRoomsDataAction } from '../../actions/rooms'
import DataApi from '../../api/DataApi'

import { itemsConverter, itemRenderer, createUserId } from '../../helpers'
import { StyledTimeline, StyledButton } from '../../styledComponents'
import ReservationForm from '../ReservationForm'
import RoomForm from '../RoomForm'
import ReservationList from '../ReservationList'

export const CalendarTimeline = (props) => {
  const { user } = props
  const userIdAdded = createUserId(user)
  const dataApi = new DataApi()
  const dispatch = useDispatch()

  const { date } = useSelector((state) => state.calendar)
  const { reservations } = useSelector((state) => state.reservations)
  const { rooms } = useSelector((state) => state.rooms)

  const [addNewRes, setAddNewRes] = React.useState(false)
  const [addNewRoom, setAddNewRoom] = React.useState(false)
  const [params, setParams] = React.useState([])
  const [addNewResWithParams, setAddResWithParams] = React.useState(false)
  const [edited, setEdited] = React.useState([])
  const [editedRoom, setEditedRoom] = React.useState([])
  const [reservationListOn, setReservationListOn] = React.useState(false)

  const items = Array.isArray(reservations) ? itemsConverter(reservations) : []

  React.useEffect(() => {
    dataApi.loadData(userIdAdded, 'reservations')
      .then(data => {
        dispatch(loadDataAction(data))
      })
    dataApi.loadData(userIdAdded, 'rooms')
      .then((data) => {
        dispatch(loadRoomsDataAction(data))
      })
  }, [user])

  React.useEffect(() => {
    const roomsList = document.querySelectorAll('.rct-sidebar-row')
    roomsList.forEach(room => {
      room.style.cursor = 'pointer'
      room.addEventListener('click', () => {
        editRooms(room.innerHTML)
      })
    })
  }, [rooms])

  const onClickAddRes = (id, time) => {
    if (rooms.length > 0) {
      time ? setAddResWithParams(true) : setAddNewRes(true)
      setParams([id, time])
      setAddNewRoom(false)
    } else {
      alert('Najpierw dodaj pokój!')
    }
  }

  const editRooms = (title) => {
    const editedRoom = rooms.filter((data) => data.title === title)
    setEditedRoom(editedRoom)
  }

  // const view = React.useMemo(() => {
  //   return {
  //     timeline: {
  //       type: 'month'
  //     }
  //   }
  // }, [])

  return (
    <>
      <div>
        <StyledTimeline
          groups={Array.isArray(rooms) ? rooms : []}
          items={items}
          visibleTimeStart={date.start}
          visibleTimeEnd={date.end}
          onItemClick={(id) => setEdited(items.filter((item) => item.id === id))}
          itemRenderer={itemRenderer}
          buffer={1}
          canMove={false}
          onCanvasDoubleClick={(id, time) => onClickAddRes(id, time)}
          sidebarWidth={75}
        />

        {/* <Eventcalendar
          theme={'ios'}
          themeVariant={'light'}
          view={view}
          data={items}
          resources={Array.isArray(rooms) ? rooms : []}
        /> */}

      </div>
      <div>
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
        <StyledButton
          variant={'contained'}
          className={'button-reservation--add'}
          onClick={() => setReservationListOn(!reservationListOn)}
        >Lista rezerwacji
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
        addNewResWithParams
          ? <ReservationForm
              user={user}
              type={'newPar'}
              params={params}
              close={() => setAddResWithParams(false)}
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
        {
        reservationListOn ?
          <ReservationList
            reservations={reservations}
            onClickDetails={(id) => setEdited(items.filter((item) => item.id === id))}
            rooms={rooms}
          />
          : null
      }
      </div>

    </>
  )
}

CalendarTimeline.propTypes = {
  user: PropTypes.string
}

export default CalendarTimeline
