import React from 'react'
import objectToArray from './objectToArray'
import { makeAuthorizedRequest } from '../auth'

export class DataApi extends React.Component {
  apiUrl = 'https://booking-app-jw-default-rtdb.firebaseio.com/dataBase';

  loadData = (user, key) => {
    return makeAuthorizedRequest(`${this.apiUrl}/${user}/${key}.json`)
      .then((data) => objectToArray(data))
      .catch((error) => {
        console.error(error)
      })
  }

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
    return makeAuthorizedRequest(`${this.apiUrl}/${user}/${key}.json`, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .catch((error) => {
        console.error(error)
      })
  };

  removeData = (user, key, id) => {
    makeAuthorizedRequest(`${this.apiUrl}/${user}/${key}/${id}.json`, {
      method: 'DELETE'
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
      .then((data) => objectToArray(data))
      .catch((error) => {
        console.error(error)
      })
  };
}

export default DataApi
