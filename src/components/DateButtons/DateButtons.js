import React from 'react'
import { StyledButton } from '../../styledComponents'
import { useDispatch } from 'react-redux'
import { changeMonthAction, changeYearAction } from '../../actions/calendar'
import { years } from '../../helpers/years'
import { months } from '../../helpers/months'

export const DateButtons = () => {
  const dispatch = useDispatch()
  const handleChangeMonth = (month) => {
    return dispatch(changeMonthAction(month))
  }

  const handleChangeYear = (year) => {
    return dispatch(changeYearAction(year))
  }
  return (
    <>
      <div>
        {
        years.map(year => {
          return (
            <StyledButton
              key={year}
              onClick={() => handleChangeYear(year)}
            >{year}
            </StyledButton>)
        })
      }
      </div>

      <div>
        {
        months.map(month => {
          return (
            <StyledButton
              key={month.id}
              onClick={() => handleChangeMonth(month.id)}
            >{month.name}
            </StyledButton>)
        })
      }
      </div>
    </>
  )
}

export default DateButtons
