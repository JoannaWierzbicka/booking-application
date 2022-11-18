import React from 'react'
import CreateAccountPage from './components/CreateAccountPage'
import Loader from './components/Loader'
import LoginPage from './components/LoginPage'
import Message from './components/Message'
import StyledFullPage from './styledComponents/StyledFullPage'
import StartPage from './components/StartPage'
import { validateFormLogIn, validateFormCreate } from './helpers/validation'

export class App extends React.Component {
  state = {
    isLoading: false,
    hasError: false,
    isInfoDisplayed: false,
    errorMessage: 'Error occurred',
    infoMessage: 'Some information',

    isUserLoggedIn: false,
    userName: '',
    userEmail: '',

    notLoginUserRoute: 'START', // 'START', 'LOGIN', 'CREATE-ACCOUNT'

    // login page
    loginEmail: '',
    loginPassword: '',

    // create account page
    createAccountEmail: '',
    createAccountPassword: '',
    createAccountPasswordRepeat: '',

    recoverPasswordEmail: '',

    errorsLogIn: [],
    errorsCreateAccount: []

  }

  onClickLogin = () => {
    const { loginEmail, loginPassword } = this.state
    const errors = validateFormLogIn(loginEmail, loginPassword)

    this.setState({
      errorsLogIn: errors
    })

    if (errors.length === 0) {
      console.log('zalogowano pomyślnie')
    }
  }

  onClickCreateAccount = () => {
    const { createAccountEmail, createAccountPassword, createAccountPasswordRepeat } = this.state
    const errors = validateFormCreate(createAccountEmail, createAccountPassword, createAccountPasswordRepeat)

    this.setState({
      errorsCreateAccount: errors
    })

    if (errors.length === 0) {
      console.log('konto utworzone pomyślnie')
    }
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
      createAccountEmail,
      createAccountPassword,
      createAccountPasswordRepeat,
      errorsLogIn,
      errorsCreateAccount
    } = this.state
    return (

      <div>
        {notLoginUserRoute === 'START' ?
          <StyledFullPage>
            <StartPage
              onClickLogin={() => this.setState(() => ({ notLoginUserRoute: 'LOGIN' }))}
            />
          </StyledFullPage> :
          notLoginUserRoute === 'LOGIN' ?
            <StyledFullPage>
              <LoginPage
                errors={errorsLogIn}
                email={loginEmail}
                password={loginPassword}
                onClickLogin={this.onClickLogin}
                onClickCreateAccount={() => this.setState(() => ({ notLoginUserRoute: 'CREATE-ACCOUNT' }))}
                onChangeEmail={(e) => this.setState(() => ({ loginEmail: e.target.value }))}
                onClickBackToStartPage={() => this.setState(() => ({ notLoginUserRoute: 'START' }))}
                onChangePassword={(e) => this.setState(() => ({ loginPassword: e.target.value }))}
              />
            </StyledFullPage>
            :
            notLoginUserRoute === 'CREATE-ACCOUNT' ?
              <StyledFullPage>
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
              </StyledFullPage>
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
                onButtonClick={() => console.log('hello')}
              />
              : null
          }
        {
             hasError ?
               <Message
                 message={errorMessage}
                 icon={'error'}
                 onButtonClick={() => console.log('hello')}
               />
               : null
          }

      </div>
    )
  }
}

export default App
