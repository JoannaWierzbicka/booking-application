import React from 'react'
import { StyledButton, StyledButtonGroup } from '../../styledComponents'
import { useDispatch, useSelector } from 'react-redux'
import { changeMonthAction, changeYearAction, arrowMonthAction, setTodayAction } from '../../actions/calendar'
import { years, months } from '../../helpers'
import moment from 'moment'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAnglesRight, faAnglesLeft } from '@fortawesome/free-solid-svg-icons'

export const DateButtons = () => {
  const dispatch = useDispatch()
  const { date } = useSelector((state) => state.calendar)
  const startSliced = date.start.toString().slice(0, -3)
  const endSliced = date.end.toString().slice(0, -3)

  const handleChangeMonth = (month) => {
    return dispatch(changeMonthAction(month))
  }

  const handleChangeYear = (year) => {
    return dispatch(changeYearAction(year))
  }

  const onClickNext = () => {
    const nextStart = moment.unix(startSliced).add(1, 'month')
    const nextEnd = moment.unix(endSliced).add(1, 'month')

    return dispatch(arrowMonthAction(nextStart, nextEnd))
  }

  const onClickPrev = () => {
    const prevStart = moment.unix(startSliced).subtract(1, 'month')
    const prevEnd = moment.unix(endSliced).subtract(1, 'month')

    return dispatch(arrowMonthAction(prevStart, prevEnd))
  }

  const setTodayDate = () => {
    return dispatch(setTodayAction())
  }

  return (
    <>
      <StyledButtonGroup className={'button-today'}>
        <StyledButton
          className={'button-today'}
          onClick={setTodayDate}
        >Dzisiaj
        </StyledButton>
      </StyledButtonGroup>
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
      <StyledButtonGroup className={'button-prev-next'}>
        <StyledButton onClick={onClickPrev}>
          <FontAwesomeIcon icon={faAnglesLeft} />
        </StyledButton>
        <StyledButton onClick={onClickNext}>
          <FontAwesomeIcon
            icon={faAnglesRight}
          />
        </StyledButton>
      </StyledButtonGroup>

    </>
  )
}

export default DateButtons
