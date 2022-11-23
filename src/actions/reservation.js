export const LOAD = 'calendar/LOAD'
export const ADD = 'calendar/ADD'
export const REMOVE = 'calendar/REMOVE'
export const EDIT = 'calendar/EDIT'

const loadDataAction = (data) => ({
  type: LOAD,
  payload: data
})

const addDataAction = (newReservation) => ({
  type: ADD,
  payload: newReservation
})

const removeDataAction = (id) => ({
  type: REMOVE,
  payload: id
})

const editDataAction = (edited) => ({
  type: EDIT,
  payload: edited
})

export { loadDataAction, addDataAction, removeDataAction, editDataAction }
