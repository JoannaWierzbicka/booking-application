import makeRequest from './makeRequest'
import { getIdToken } from './token'
import { refreshTokens } from './refreshTokens'

export const makeAuthorizedRequest = (url, options) => {
  const token = getIdToken()
  if (!token) return Promise.reject(new Error('No token found'))

  const containsQuestionMark = url.indexOf('?') !== -1

  const urlWithToken = `${url}${containsQuestionMark ? '&' : '?'}auth=${token}`

  return makeRequest(urlWithToken, options)
    .catch((error) => {
      const { code } = error
      if (code === 401) {
        return refreshTokens()
          .then(() => {
            const refreshedToken = getIdToken()
            const urlWithRefreshedToken = `${url}${containsQuestionMark ? '&' : '?'}auth=${refreshedToken}`
            return makeRequest(urlWithRefreshedToken, options)
          })
          .catch(() => {
            throw error
          })
      }
      throw error
    })
}

export default makeAuthorizedRequest
