import React from 'react'
import objectToArray from './objectToArray'

export class DataApi extends React.Component {
  apiUrl = 'https://booking-app-jw-default-rtdb.firebaseio.com/dataBase';

  loadData = (key) => {
    return fetch(`${this.apiUrl}/${key}.json`)
      .then((resp) => {
        if (resp.ok) {
          return resp.json()
        }
      })
      .then((data) => objectToArray(data))
      .catch((error) => {
        console.error(error)
      })
  };

  addData = (key, data) => {
    fetch(`${this.apiUrl}/${key}.json`, {
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
      .then((data) => objectToArray(data))
      .catch((error) => {
        console.error(error)
      })
  };

  removeData = (key, id) => {
    fetch(`${this.apiUrl}/${key}/${id}.json`, {
      method: 'DELETE'
    })
      .then((resp) => {
        if (resp.ok) {
          return resp.json()
        }
      })
      .then((data) => objectToArray(data))
      .catch((error) => {
        console.error(error)
      })
  };

  editData = (key, id, newData) => {
    fetch(`${this.apiUrl}/${key}/${id}.json`, {
      method: 'PUT',
      body: JSON.stringify(newData),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then((resp) => {
        if (resp.ok) {
          return resp.json()
        }
      })
      .then((data) => objectToArray(data))
      .catch((error) => {
        console.error(error)
      })
  };
}

export default DataApi
