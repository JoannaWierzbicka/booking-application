/* eslint-disable no-unused-vars */
import { LOAD, ADD, REMOVE, EDIT } from '../actions/reservation'

const initialState = {
  reservations: []
}

// const filtered = (array, id, add) => {
//   const newArr = array.filter(el => el.id !== id)
//   return newArr.concat(add)
// }

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
          (res) => res.id !== action.payload
        )
      }
    case EDIT :
      return {
        ...state,
        reservations: state.reservations.map(res => res.id === action.payload.id ? action.payload : res)
      }
    default :
      return state
  }
}

export default reservationsReducer
