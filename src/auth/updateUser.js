import { makeRequest } from './makeRequest'
import { getIdToken } from './token'
import { FIREBASE_APP_KEY } from './const'

const UPDATE_USER_URL = 'https://identitytoolkit.googleapis.com/v1/accounts:update?key=' + FIREBASE_APP_KEY

export const updateUser = (displayName, photoUrl) => {
  const token = getIdToken()

  if (!token) return Promise.reject(new Error('No token found'))

  const deleteAttribute = (
    displayName && photoUrl ?
      undefined
      :
        [
          ...(!displayName ? ['DISPLAY_NAME'] : []),
          ...(!photoUrl ? ['PHOTO_URL'] : [])
        ]
  )

  return makeRequest(
    UPDATE_USER_URL,
    {
      method: 'POST',
      body: JSON.stringify({
        idToken: token,
        ...(!displayName ? {} : { displayName }),
        ...(!photoUrl ? {} : { photoUrl }),
        deleteAttribute,
        returnSecureToken: true
      })
    }
  )
}

export default updateUser
