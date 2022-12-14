import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Loader from './components/Loader'
import Message from './components/Message'
import PageMain from './pages/PageMain'
import PageAdmin from './pages/PageAdmin'
import PageLogin from './pages/PageLogin'
import PageInfo from './pages/PageInfo'
import PageCreateAccount from './pages/PageCreateAccount'
import PageRecoverPassword from './pages/PageRecoverPassword'
import { createUserId } from './helpers'
import DataApi from './api/DataApi'
import { signIn, signUp, getUserData, checkIfUserIsLoggedIn, sendPasswordResetEmail, logOut } from './auth'

export class App extends React.Component {
  data = new DataApi()
  state = {
    isLoading: false,
    hasError: false,
    isInfoDisplayed: false,
    errorMessage: '',
    infoMessage: '',

    isUserLoggedIn: false,
    userName: '',
    userEmail: ''
  }

  async componentDidMount () {
    this.setState(() => ({ isLoading: true }))
    const userIsLoggedIn = await checkIfUserIsLoggedIn()
    this.setState(() => ({ isLoading: false }))
    if (userIsLoggedIn) this.onUserLogin()
  }

  onUserLogin = () => {
    getUserData().then(data => {
      this.setState(() => ({
        userEmail: data.email,
        isUserLoggedIn: true
      }))
    })
  }

  dismissError = () => {
    this.setState(() => ({
      hasError: false,
      errorMessage: ''
    }))
  }

  dismissMessage = () => {
    this.setState(() => ({
      isInfoDisplayed: false,
      infoMessage: ''
    }))
  }

  handleUserAction = async (userAction) => {
    this.setState(() => ({
      isLoading: true
    }))

    try {
      await userAction()
    } catch (error) {
      this.setState(() => ({
        hasError: true,
        errorMessage: error.data.error.message
      }))
    } finally {
      this.setState(() => ({
        isLoading: false
      }))
    }
  }

  onClickLogin = async (email, login) => {
    this.handleUserAction(async () => {
      await signIn(email, login)
      this.onUserLogin()
    })
  }

  onClickCreateAccount = async (email, password) => {
    this.handleUserAction(async () => {
      await signUp(email, password)
      this.setState({
        isInfoDisplayed: true,
        infoMessage: 'Konto utworzone pomyślnie, zostałeś zalogowany'
      })
      this.onUserLogin()
      const userIdAdded = createUserId(email)
      this.data.addNewUser(userIdAdded)
    })
  }

  onClickRecover = async (email) => {
    this.handleUserAction(async () => {
      await sendPasswordResetEmail(email)
      this.setState(() => ({
        isInfoDisplayed: true,
        infoMessage: 'E-mail został wysłany na podaną pocztę'
      }))
    })
  }

  onLogOut=() => {
    logOut()
    this.setState(() => ({
      isUserLoggedIn: false,
      userEmail: ''
    }))
  }

  render () {
    const {
      isLoading,
      hasError,
      errorMessage,
      isInfoDisplayed,
      infoMessage,
      isUserLoggedIn,
      userEmail
    } = this.state
    return (
      <div>
        {
        isUserLoggedIn ?
          <Routes>
            <Route
              path={'/admin'}
              element={<PageAdmin
                userLoggedIn={isUserLoggedIn}
                logOut={this.onLogOut}
                user={userEmail}
                       />}
            />
            <Route
              path={'/'}
              element={<PageMain
                userLoggedIn={isUserLoggedIn}
                logOut={this.onLogOut}
                       />
                }
            />
            <Route
              path={'/info'}
              element={<PageInfo
                userLoggedIn={isUserLoggedIn}
                logOut={this.onLogOut}
                       />}
            />
            <Route
              path={'/login'}
              element={<Message
                message={'Użytkownik jest zalogowany!'}
                icon={'info'}
                onButtonClick={this.dismissMessage}
                       />}
            />
            <Route
              path={'/create-account'}
              element={<Message
                message={'Użytkownik jest zalogowany!'}
                icon={'info'}
                onButtonClick={this.dismissMessage}
                       />}
            />
            <Route
              path={'/recover-password'}
              element={<Message
                message={'Użytkownik jest zalogowany!'}
                icon={'info'}
                onButtonClick={this.dismissMessage}
                       />}
            />

          </Routes>
          :
          <Routes>
            <Route
              path={'/info'}
              element={<PageInfo
                userLoggedIn={isUserLoggedIn}
                       />}
            />
            <Route
              path={'/'}
              element={<PageMain
                userLoggedIn={isUserLoggedIn}
                       />}
            />
            <Route
              path={'/login'}
              element={<PageLogin
                onClickLogin={this.onClickLogin}
                       />}
            />
            <Route
              path={'/admin'}
              element={<PageLogin
                onClickLogin={this.onClickLogin}
                       />}
            />
            <Route
              path={'/create-account'}
              element={<PageCreateAccount
                onClickCreateAccount={this.onClickCreateAccount}
                       />}
            />
            <Route
              path={'/recover-password'}
              element={<PageRecoverPassword
                onClickRecover={this.onClickRecover}
                       />}
            />

          </Routes>
        }
        {
          isLoading ?
            <Loader/>
            : null
          }
        {
            isInfoDisplayed ?
              <Message
                message={infoMessage}
                icon={'info'}
                onButtonClick={this.dismissMessage}
              />
              : null
          }
        {
             hasError ?
               <Message
                 message={errorMessage}
                 icon={'error'}
                 onButtonClick={this.dismissError}
               />
               : null
          }

      </div>
    )
  }
}

export default App
