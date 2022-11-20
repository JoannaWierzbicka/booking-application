/* eslint-disable no-unused-vars */
import Timeline from 'react-calendar-timeline'
import React from 'react'
import 'react-calendar-timeline/lib/Timeline.css'
import moment from 'moment'
import { useDispatch, useSelector } from 'react-redux'
import { changeMonthAction, changeYearAction } from '../../actions/calendar'

const rooms = [{ id: 1, title: 'room no.1', height: 50, stackItems: false }, { id: 2, title: 'room no.2', height: 50, stackItems: false }, { id: 3, title: 'room no.3', height: 50, stackItems: false }]

const reservations = [
  {
    id: 1,
    group: 1,
    title: 'Jan Nowak',
    start_time: moment([2023, 0, 10]),
    end_time: moment([2023, 0, 12]).add(10, 'hours'),
    canChangeGroup: true
  },
  {
    id: 2,
    group: 2,
    title: 'Anna Polak',
    start_time: moment([2022, 11, 10]),
    end_time: moment([2022, 11, 15]).add(10, 'hours'),
    itemProps: {
      onDoubleClick: () => console.log('click'),
      style: {
        background: 'red'
      }
    }
  },
  {
    id: 3,
    group: 3,
    title: 'Piotr Kowalski',
    start_time: moment('20221111'),
    end_time: moment('20221112').add(10, 'hours')
  }
]

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
  const dispatch = useDispatch()

  const handleChangeMonth = (month) => {
    return dispatch(changeMonthAction(month))
  }

  const handleChangeYear = (year) => {
    return dispatch(changeYearAction(year))
  }

  const date = useSelector((state) => state.date)

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
        items={reservations}
        visibleTimeStart={date.start}
        visibleTimeEnd={date.end}
      />
    </>

  )
}

export default CalendarTimeline
