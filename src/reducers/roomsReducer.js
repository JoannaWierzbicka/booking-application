import { LOAD_ROOM, ADD_ROOM, REMOVE_ROOM, EDIT_ROOM } from '../actions/rooms'

const initialState = {
  rooms: []
}

export const roomsReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_ROOM :
      return {
        ...state,
        rooms: action.payload
      }
    case ADD_ROOM :
      return {
        ...state,
        rooms: [...state.rooms, action.payload]
      }
    case REMOVE_ROOM :
      return {
        ...state,
        rooms: state.rooms.filter(
          (room) => room.id !== action.payload
        )
      }
    case EDIT_ROOM :
      return {
        ...state,
        rooms: state.rooms.map(room => room.id === action.payload.id ? action.payload : room)
      }
    default :
      return state
  }
}

export default roomsReducer
