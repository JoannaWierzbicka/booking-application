export const LOAD = 'reservation/LOAD'
export const ADD = 'reservation/ADD'
export const REMOVE = 'reservation/REMOVE'
export const EDIT = 'reservation/EDIT'

const loadDataAction = (data) => ({
  type: LOAD,
  payload: data
})

const addDataAction = (newData) => ({
  type: ADD,
  payload: newData
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
