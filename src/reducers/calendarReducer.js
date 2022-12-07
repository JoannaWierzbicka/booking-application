import { CHANGE_MONTH, CHANGE_YEAR, NEXT_PREV_MONTH, SET_TODAY } from '../actions/calendar'
import moment from 'moment'

const initialState = {
  year: '2022',
  month: '',
  date: {
    start: moment().startOf('month').valueOf(),
    end: moment().endOf('month').valueOf()
  }
}

export const calendarReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_MONTH :
      return {
        ...state,
        month: action.payload,
        date: {
          start: moment(`${state.year}${action.payload}`).startOf('month').valueOf(),
          end: moment(`${state.year}${action.payload}`).endOf('month').valueOf()
        }
      }
    case CHANGE_YEAR :
      return {
        ...state,
        year: action.payload,
        date: {
          start: moment(`${action.payload}${state.month}`).startOf('month').valueOf(),
          end: moment(`${action.payload}${state.month}`).endOf('month').valueOf()
        }
      }
    case NEXT_PREV_MONTH :
      return {
        ...state,
        date: {
          start: Number(action.payload.start),
          end: Number(action.payload.end)
        }

      }
    case SET_TODAY:
      return {
        ...state,
        date: {
          start: moment().startOf('month').valueOf(),
          end: moment().endOf('month').valueOf()
        }

      }
    default:
      return state
  }
}

export default calendarReducer
