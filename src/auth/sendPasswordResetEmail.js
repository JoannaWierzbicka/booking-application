import { makeRequest } from './makeRequest'
import { FIREBASE_APP_KEY } from './const'

const PASSWORD_RESET_EMAIL_URL = 'https://identitytoolkit.googleapis.com/v1/accounts:sendOobCode?key=' + FIREBASE_APP_KEY

export const sendPasswordResetEmail = (email) => {
  return makeRequest(
    PASSWORD_RESET_EMAIL_URL,
    {
      method: 'POST',
      body: JSON.stringify(
        {
          requestType: 'PASSWORD_RESET',
          email
        }
      )
    }
  )
}

export default sendPasswordResetEmail
