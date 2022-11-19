import Timeline from 'react-calendar-timeline'
import React from 'react'
import 'react-calendar-timeline/lib/Timeline.css'
import moment from 'moment'

const rooms = [{ id: 1, title: 'group 1', height: 50, stackItems: false }, { id: 2, title: 'group 2', height: 50, stackItems: false }]

const reservations = [
  {
    id: 1,
    group: 1,
    title: 'item 1',
    start_time: moment(),
    end_time: moment().add(1, 'days')
  },
  {
    id: 2,
    group: 2,
    title: 'item 2',
    start_time: moment([2022, 11, 10]),
    end_time: moment([2022, 11, 15]).add(10, 'hours')
  },
  {
    id: 3,
    group: 1,
    title: 'item 3',
    start_time: moment().add(2, 'days'),
    end_time: moment().add(3, 'days')
  }
]

const start = moment().startOf('month')
const end = moment().endOf('month')

export const CalendarTimeline = () => {
  return (
    <Timeline
      groups={rooms}
      items={reservations}
      defaultTimeStart={start}
      defaultTimeEnd={end}
    />

  )
}

export default CalendarTimeline
