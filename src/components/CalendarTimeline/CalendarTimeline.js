/* eslint-disable no-unused-vars */
import Timeline from 'react-calendar-timeline'
import React from 'react'
import 'react-calendar-timeline/lib/Timeline.css'
import moment from 'moment'
import { useDispatch, useSelector } from 'react-redux'
import { changeMonthAction, changeYearAction, loadDataAction } from '../../actions/calendar'
import DataApi from '../../api/DataApi'
import ReservationForm from '../ReservationForm'

const rooms = [{ id: 1, title: 'room no.1', height: 50, stackItems: false }, { id: 2, title: 'room no.2', height: 50, stackItems: false }, { id: 3, title: 'room no.3', height: 50, stackItems: false }]

const months = [
  { name: 'STYCZEŃ', id: '01' },
  { name: 'LUTY', id: '02' },
  { name: 'MARZEC', id: '03' },
  { name: 'KWIECIEŃ', id: '04' },
  { name: 'MAJ', id: '05' },
  { name: 'CZERWIEC', id: '06' },
  { name: 'LIPIEC', id: '07' },
  { name: 'SIERPIEŃ', id: '08' },
  { name: 'WRZESIEŃ', id: '09' },
  { name: 'PAŹDZIERNIK', id: '10' },
  { name: 'LISTOPAD', id: '11' },
  { name: 'GRUDZIEŃ', id: '12' }
]

const years = [
  '2022', '2023', '2024', '2025', '2026', '2027', '2028'
]

export const CalendarTimeline = () => {
  const [formVisible, setFormVisible] = React.useState(false)
  const dispatch = useDispatch()
  const { date } = useSelector((state) => state.calendar)
  const { reservations } = useSelector((state) => state.reservations)

  const items = reservations.map(reservation => {
    reservation.start_time = moment(reservation.start_time)
    reservation.end_time = moment(reservation.end_time)
    return reservation
  })

  const dataApi = new DataApi()

  React.useEffect(() => {
    dataApi.loadData()
      .then(data => dispatch(loadDataAction(data)))
  }, [])

  const handleChangeMonth = (month) => {
    return dispatch(changeMonthAction(month))
  }

  const handleChangeYear = (year) => {
    return dispatch(changeYearAction(year))
  }

  return (
    <>
      <div style={{ height: '50px' }}>
        {
        years.map(year => {
          return (
            <button
              key={year}
              onClick={() => handleChangeYear(year)}
            >{year}
            </button>)
        })
      }
      </div>

      <div style={{ height: '50px' }}>
        {
        months.map(month => {
          return (
            <button
              key={month.id}
              onClick={() => handleChangeMonth(month.id)}
            >{month.name}
            </button>)
        })
      }
      </div>
      <Timeline
        groups={rooms}
        items={items}
        visibleTimeStart={date.start}
        visibleTimeEnd={date.end}
      />
      <button onClick={() => setFormVisible(true)}>Dodaj rezerwację</button>
      {
        formVisible ? <ReservationForm close={() => setFormVisible(false)}/> : null
      }

    </>

  )
}

export default CalendarTimeline
