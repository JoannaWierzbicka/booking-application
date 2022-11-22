export const LOAD = 'calendar/LOAD'
export const ADD = 'calendar/ADD'
export const REMOVE = 'calendar/REMOVE'

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

export { loadDataAction, addDataAction, removeDataAction }
