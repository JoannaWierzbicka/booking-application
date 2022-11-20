import { CHANGE_MONTH, CHANGE_YEAR } from '../actions/calendar'
import moment from 'moment'

const initialState = {
  year: '2022',
  date: {
    start: moment().startOf('month').valueOf(),
    end: moment().endOf('month').valueOf()
  }

}

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_MONTH :
      return {
        ...state,
        date: {
          start: moment(`${state.year}${action.payload}`).startOf('month').valueOf(),
          end: moment(`${state.year}${action.payload}`).endOf('month').valueOf()
        }
      }
    case CHANGE_YEAR :
      return {
        ...state,
        year: action.payload
      }
    default:
      return state
  }
}

export default reducer
