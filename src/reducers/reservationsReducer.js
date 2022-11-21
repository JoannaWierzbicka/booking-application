import { LOAD, ADD } from '../actions/calendar'

const initialState = {
  reservations: []
}

export const reservationsReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD :
      return {
        ...state,
        reservations: action.payload
      }
    case ADD :
      return {
        ...state,
        reservations: [...state.reservations, action.payload]
      }
    default :
      return state
  }
}

export default reservationsReducer
