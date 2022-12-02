import React from 'react'
import CreateAccountPage from './components/CreateAccountPage'
import ForgotPasswordPage from './components/ForgotPassworPage'
import Loader from './components/Loader'
import LoginPage from './components/LoginPage'
import Message from './components/Message'
import StartPage from './components/StartPage'
import AdminPageMain from './components/AdminPageMain'
import { validateFormLogIn, validateFormCreate, validateRecover, createUserId } from './helpers'
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
    userEmail: '',

    notLoginUserRoute: 'START', // 'START', 'LOGIN', 'CREATE-ACCOUNT'

    loginEmail: '',
    loginPassword: '',

    createAccountEmail: '',
    createAccountPassword: '',
    createAccountPasswordRepeat: '',

    recoverPasswordEmail: '',

    errorsLogIn: [],
    errorsCreateAccount: [],
    errorsRecover: []
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

  onClickLogin = async () => {
    const { loginEmail, loginPassword } = this.state
    const errors = validateFormLogIn(loginEmail, loginPassword)

    this.setState(() => ({
      isLoading: true,
      errorsLogIn: errors
    }))

    try {
      if (errors.length === 0) {
        await signIn(loginEmail, loginPassword)
        this.setState({
          isUserLoggedIn: true
        })
        this.onUserLogin()
      }
    } catch (error) {
      this.setState(() => ({
        hasError: true,
        errorMessage: error.data.error.message
      }))
    } finally {
      this.setState(() => ({
        isLoading: false,
        loginEmail: '',
        loginPassword: ''
      }))
    }
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

  onClickCreateAccount = async () => {
    const { createAccountEmail, createAccountPassword, createAccountPasswordRepeat } = this.state
    const errors = validateFormCreate(createAccountEmail, createAccountPassword, createAccountPasswordRepeat)

    this.setState(() => ({
      isLoading: true,
      errorsCreateAccount: errors
    }))

    try {
      if (errors.length === 0) {
        await signUp(createAccountEmail, createAccountPassword)
        this.setState({
          isUserLoggedIn: true,
          isInfoDisplayed: true,
          infoMessage: 'Konto utworzone pomyślnie, zostałeś zalogowany'
        })

        const userIdAdded = createUserId(createAccountEmail)
        this.data.addNewUser(userIdAdded)

        this.onUserLogin()
      }
    } catch (error) {
      this.setState(() => ({
        hasError: true,
        errorMessage: error.data.error.message
      }))
    } finally {
      this.setState(() => ({
        isLoading: false,
        createAccountEmail: '',
        createAccountPassword: '',
        createAccountPasswordRepeat: ''
      }))
    }
  }

  onClickRecover = async () => {
    const { recoverPasswordEmail } = this.state
    const errors = validateRecover(recoverPasswordEmail)
    this.setState({
      isLoading: true,
      errorsRecover: errors
    })
    try {
      if (errors.length === 0) {
        await sendPasswordResetEmail(recoverPasswordEmail)
        this.setState(() => ({
          isInfoDisplayed: true,
          infoMessage: 'E-mail został wysłany na podaną pocztę'
        }))
      }
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

    if (errors.length === 0) {
      this.setState({
        notLoginUserRoute: 'LOGIN'
      })
      console.log('mail wysłany')
    }
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
      notLoginUserRoute,
      loginEmail,
      loginPassword,
      recoverPasswordEmail,
      createAccountEmail,
      createAccountPassword,
      createAccountPasswordRepeat,
      errorsLogIn,
      errorsCreateAccount,
      errorsRecover,
      isUserLoggedIn,
      userEmail
    } = this.state
    return (
      <div>
        { isUserLoggedIn ?
          <AdminPageMain
            userLoggedIn={isUserLoggedIn}
            logOut={this.onLogOut}
            user={userEmail}
          />
          :
          notLoginUserRoute === 'START' ?
            <StartPage
              signUp={() => this.setState(() => ({
                notLoginUserRoute: 'CREATE-ACCOUNT'
              }))}
              logIn={() => this.setState(() =>
                ({
                  notLoginUserRoute: 'LOGIN'
                }))}
            /> :
            notLoginUserRoute === 'LOGIN' ?
              <LoginPage
                errors={errorsLogIn}
                email={loginEmail}
                password={loginPassword}
                onClickLogin={this.onClickLogin}
                onClickCreateAccount={() => this.setState(() => ({ notLoginUserRoute: 'CREATE-ACCOUNT' }))}
                onChangeEmail={(e) => this.setState(() => ({ loginEmail: e.target.value }))}
                onClickBackToStartPage={() => this.setState(() => ({ notLoginUserRoute: 'START' }))}
                onChangePassword={(e) => this.setState(() => ({ loginPassword: e.target.value }))}
                onClickRecoverPassword={() => this.setState(() => ({ notLoginUserRoute: 'FORGOT-PASSWORD' }))}
              />
              :
              notLoginUserRoute === 'CREATE-ACCOUNT' ?
                <CreateAccountPage
                  errors={errorsCreateAccount}
                  email={createAccountEmail}
                  password={createAccountPassword}
                  repeatPassword={createAccountPasswordRepeat}
                  onChangeEmail={(e) => this.setState(() => ({ createAccountEmail: e.target.value }))}
                  onChangePassword={(e) => this.setState(() => ({ createAccountPassword: e.target.value }))}
                  onChangeRepeatPassword={(e) => this.setState(() => ({ createAccountPasswordRepeat: e.target.value }))}
                  onClickCreateAccount={this.onClickCreateAccount}
                  onClickBackToStartPage={() => this.setState(() => ({ notLoginUserRoute: 'START' }))}
                  onClickBackToLogin={() => this.setState(() => ({ notLoginUserRoute: 'LOGIN' }))}
                />
                :
                notLoginUserRoute === 'FORGOT-PASSWORD' ?
                  <ForgotPasswordPage
                    email={recoverPasswordEmail}
                    onChangeEmail={(e) => this.setState(() => ({ recoverPasswordEmail: e.target.value }))}
                    onClickRecover={this.onClickRecover}
                    onClickBackToLogin={() => this.setState(() => ({ notLoginUserRoute: 'LOGIN' }))}
                    errors={errorsRecover}
                  />

                  : null
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
