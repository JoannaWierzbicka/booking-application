import React from 'react'
import objectToArray from './objectToArray'
import { makeAuthorizedRequest } from '../auth'
import handleIdChange from '../helpers/handleIdChange'

export class DataApi extends React.Component {
  apiUrl = 'https://booking-app-jw-default-rtdb.firebaseio.com/dataBase';
  // apiUrl = 'http://localhost:3005/dataBase'

  loadData = (user, key) => {
    return makeAuthorizedRequest(`${this.apiUrl}/${user}/${key}.json`)
      // .then((resp) => {
      //   if (resp.ok) {
      //     return resp.json()
      //   }
      // })
      .then((data) => objectToArray(data))
      .catch((error) => {
        console.error(error)
      })
  };

  addNewUser = (user) => {
    fetch(`${this.apiUrl}/${user}.json`, {
      method: 'POST',
      body: JSON.stringify({}),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then((data) => objectToArray(data))
      .catch((error) => {
        console.error(error)
      })
  };

  addData = (user, key, data) => {
    makeAuthorizedRequest(`${this.apiUrl}/${user}/${key}.json`, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then((data) => {
        objectToArray(data)
      })
      .catch((error) => {
        console.error(error)
      })
  };

  addRoomData = (user, key, data) => {
    makeAuthorizedRequest(`${this.apiUrl}/${user}/${key}.json`, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then((resp) => {
        handleIdChange(user, resp.name, data)
      })
      .catch((error) => {
        console.error(error)
      })
  };

  removeData = (user, key, id) => {
    makeAuthorizedRequest(`${this.apiUrl}/${user}/${key}/${id}.json`, {
      method: 'DELETE'
    })
      // .then((resp) => {
      //   if (resp.ok) {
      //     return resp.json()
      //   }
      // })
      .then((data) => {
        objectToArray(data)
      })
      .catch((error) => {
        console.error(error)
      })
  };

  editData = (user, key, id, newData) => {
    makeAuthorizedRequest(`${this.apiUrl}/${user}/${key}/${id}.json`, {
      method: 'PUT',
      body: JSON.stringify(newData),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      // .then((resp) => {
      //   if (resp.ok) {
      //     return resp.json()
      //   }
      // })
      .then((data) => objectToArray(data))
      .catch((error) => {
        console.error(error)
      })
  };
}

export default DataApi
