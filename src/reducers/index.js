import { combineReducers } from 'redux'

import calendarReducer from './calendarReducer'
import reservationsReducer from './reservationsReducer'
import roomsReducer from './roomsReducer'

const reducers = combineReducers({
  calendar: calendarReducer,
  reservations: reservationsReducer,
  rooms: roomsReducer
})

export default reducers
