export const CHANGE_MONTH = 'calendar/CHANGE_MONTH'
export const CHANGE_YEAR = 'calendar/CHANGE_YEAR'
export const LOAD = 'calendar/LOAD'
export const ADD = 'calendar/ADD'

const changeMonthAction = (newMonth) => ({
  type: CHANGE_MONTH,
  payload: newMonth
})

const changeYearAction = (newYear) => ({
  type: CHANGE_YEAR,
  payload: newYear
})

const loadDataAction = (data) => ({
  type: LOAD,
  payload: data
})

const addDataAction = (newReservation) => ({
  type: ADD,
  payload: newReservation
})

export { changeMonthAction, changeYearAction, loadDataAction, addDataAction }
