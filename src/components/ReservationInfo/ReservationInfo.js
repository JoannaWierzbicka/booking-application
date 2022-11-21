/* eslint-disable react/prop-types */
import React from 'react'
import DataApi from '../../api/DataApi'
import { useDispatch } from 'react-redux'
import { removeDataAction } from '../../actions/calendar'

export const ReservationInfo = (props) => {
  const dispatch = useDispatch()
  const { close, data } = props

  const dataApi = new DataApi()

  const removeReservation = (id) => {
    if (window.confirm('You sure?')) {
      dataApi.removeReservation(id)
      dispatch(removeDataAction(id))
      close()
    } else {
      console.log('no')
    }
  }

  return (
    <div style={{ zIndex: '999999', width: '80%', height: '80%', backgroundColor: 'white', position: 'fixed', top: 50, left: 50 }}>
      <h3>{data[0].title}</h3>
      <span>Data przyjazdu: {data[0].start_time._i}</span>
      <span>Data wyjazdu: {data[0].end_time._i}</span>
      <span>Pokój: {data[0].group}</span>
      <button onClick={() => removeReservation(data[0].id)}>USUŃ REZERWACJĘ</button>
      <button
        onClick={close}
        style={{ position: 'absolute', right: 5, top: 5 }}
      >X
      </button>
    </div>
  )
}

export default ReservationInfo
