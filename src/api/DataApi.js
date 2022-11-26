import React from 'react'

export class DataApi extends React.Component {
  apiUrl = 'http://localhost:3005';

  loadData = (db) => {
    return fetch(`${this.apiUrl}/${db}`)
      .then((resp) => {
        if (resp.ok) {
          return resp.json()
        }
      })
      .catch((error) => {
        console.error(error)
      })
  };

  addData = (db, data) => {
    fetch(`${this.apiUrl}/${db}`, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then((resp) => {
        if (resp.ok) {
          return resp.json()
        }
      })
      .catch((error) => {
        console.error(error)
      })
  };

  removeReservation = (db, id) => {
    fetch(`${this.apiUrl}/${db}/${id}`, {
      method: 'DELETE'
    })
      .then((resp) => {
        if (resp.ok) {
          return resp.json()
        }
      })
      .catch((error) => {
        console.error(error)
      })
  };

  editReservation = (db, id, newRes) => {
    fetch(`${this.apiUrl}/${db}/${id}`, {
      method: 'PUT',
      body: JSON.stringify(newRes),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then((resp) => {
        if (resp.ok) {
          return resp.json()
        }
      })
      .catch((error) => {
        console.error(error)
      })
  };
}

export default DataApi
