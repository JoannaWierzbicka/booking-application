export const LOAD_ROOM = 'rooms/LOAD_ROOMS'
export const ADD_ROOM = 'rooms/ADD_ROOM'
export const REMOVE_ROOM = 'rooms/REMOVE_ROOM'
export const EDIT_ROOM = 'rooms/EDIT_ROOM'

const loadRoomsDataAction = (data) => ({
  type: LOAD_ROOM,
  payload: data
})

const addRoomDataAction = (newData) => ({
  type: ADD_ROOM,
  payload: newData
})

const removeRoomDataAction = (id) => ({
  type: REMOVE_ROOM,
  payload: id
})

const editRoomDataAction = (edited) => ({
  type: EDIT_ROOM,
  payload: edited
})

export { loadRoomsDataAction, addRoomDataAction, removeRoomDataAction, editRoomDataAction }
