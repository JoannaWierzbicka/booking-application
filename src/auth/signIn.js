import makeRequest from './makeRequest'
import { setIdToken, setRefreshToken } from './token'
import { FIREBASE_APP_KEY } from './const'

const SIGN_IN_URL = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=' + FIREBASE_APP_KEY

export const signIn = (email, password) => {
  return makeRequest(
    SIGN_IN_URL,
    {
      method: 'POST',
      body: JSON.stringify(
        {
          email,
          password,
          returnSecureToken: true
        }
      )
    }
  )
    .then((data) => {
      setIdToken(data.idToken)
      setRefreshToken(data.refreshToken)
      return data
    })
}

export default signIn
