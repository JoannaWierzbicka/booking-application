import makeRequest from "./makeRequest"
import {setIdToken, setRefreshToken} from './token'
import { FIREBASE_APP_KEY } from './const'

const SIGN_UP_URL = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=' + FIREBASE_APP_KEY

export const signUp = (email, password) => {
    return makeRequest(
        SIGN_UP_URL,
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

export default signUp