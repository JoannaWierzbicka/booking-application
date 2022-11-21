import { combineReducers } from 'redux'

import calendarReducer from './calendarReducer'
import reservationsReducer from './reservationsReducer'

const reducers = combineReducers({
  calendar: calendarReducer,
  reservations: reservationsReducer
})

export default reducers
