export const CHANGE_MONTH = 'calendar/CHANGE_MONTH'
export const CHANGE_YEAR = 'calendar/CHANGE_YEAR'
export const NEXT_PREV_MONTH = 'calendar/NEXT_PREV_MONTH'
export const SET_TODAY = 'calendar/SET_TODAY'

const changeMonthAction = (newMonth) => ({
  type: CHANGE_MONTH,
  payload: newMonth
})

const changeYearAction = (newYear) => ({
  type: CHANGE_YEAR,
  payload: newYear
})

const arrowMonthAction = (start, end) => ({
  type: NEXT_PREV_MONTH,
  payload: {
    start, end
  }
})
const setTodayAction = () => ({
  type: SET_TODAY
})

export { changeMonthAction, changeYearAction, arrowMonthAction, setTodayAction }
