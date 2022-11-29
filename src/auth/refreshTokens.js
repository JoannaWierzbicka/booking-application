import { getRefreshToken, setIdToken, setRefreshToken } from './token'
import { makeRequest } from './makeRequest'

import { FIREBASE_APP_KEY } from './const'

const REFRESH_TOKEN_URL = 'https://securetoken.googleapis.com/v1/token?key=' + FIREBASE_APP_KEY

export const refreshTokens = () => {
  const refreshToken = getRefreshToken()
  if (!refreshToken) return Promise.reject(new Error('No refresh token found'))

  return makeRequest(
    REFRESH_TOKEN_URL,
    {
      method: 'POST',
      body: JSON.stringify(
        {
          grant_type: 'refresh_token',
          refresh_token: refreshToken
        }
      )
    }
  )
    .then((data) => {
      setIdToken(data.id_token)
      setRefreshToken(data.refresh_token)
      return data
    })
}

export default refreshTokens
