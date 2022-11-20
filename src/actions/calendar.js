export const CHANGE_MONTH = 'calendar/CHANGE_MONTH'
export const CHANGE_YEAR = 'calendar/CHANGE_YEAR'

const changeMonthAction = (newMonth) => ({
  type: CHANGE_MONTH,
  payload: newMonth
})

const changeYearAction = (newYear) => ({
  type: CHANGE_YEAR,
  payload: newYear
})

export { changeMonthAction, changeYearAction }
