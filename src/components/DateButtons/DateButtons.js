import React from 'react'
import { StyledButton, StyledButtonGroup } from '../../styledComponents'
import { useDispatch } from 'react-redux'
import { changeMonthAction, changeYearAction } from '../../actions/calendar'
import { years, months } from '../../helpers'

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
      <StyledButtonGroup
        variant={'text'}
      >
        {
        years.map(year => {
          return (
            <StyledButton
              className={'button-date'}
              key={year}
              onClick={() => handleChangeYear(year)}
            >{year}
            </StyledButton>)
        })
      }
      </StyledButtonGroup>

      <StyledButtonGroup
        variant={'text'}
      >
        {
        months.map(month => {
          return (
            <StyledButton
              className={'button-date button-date--months'}
              key={month.id}
              onClick={() => handleChangeMonth(month.id)}
            >{month.name}
            </StyledButton>)
        })
      }
      </StyledButtonGroup>
    </>
  )
}

export default DateButtons
