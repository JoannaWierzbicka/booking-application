import { LOAD, ADD, REMOVE } from '../actions/reservation'

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
    case REMOVE :
      return {
        ...state,
        reservations: state.reservations.filter(
          (reservation) => reservation.id !== action.payload
        )
      }
    default :
      return state
  }
}

export default reservationsReducer
