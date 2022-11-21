import React from 'react'

export class DataApi extends React.Component {
  apiUrl = 'http://localhost:3005/reservations';

  loadData = () => {
    return fetch(this.apiUrl)
      .then((resp) => {
        if (resp.ok) {
          return resp.json()
        }
      })
      .catch((error) => {
        console.error(error)
      })
  };

  addData = (data) => {
    fetch(this.apiUrl, {
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

  // removeMeetingFromApi = (id, callback) => {
  //   fetch(`${this.apiUrl}/${id}`, {
  //     method: 'DELETE'
  //   })
  //     .then((resp) => {
  //       if (resp.ok) {
  //         return resp.json()
  //       }
  //       throw new Error('Network error!')
  //     })
  // };
}

export default DataApi
