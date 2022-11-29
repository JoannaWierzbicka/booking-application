import { refreshTokens } from './refreshTokens'

export const checkIfUserIsLoggedIn = () => {
  return refreshTokens()
    .then(() => true)
    .catch(() => false)
}

export default checkIfUserIsLoggedIn
