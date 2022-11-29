import { removeRefreshToken, removeIdToken } from './token'

export const logOut = () => {
  removeIdToken()
  removeRefreshToken()
  return Promise.resolve()
}

export default logOut
