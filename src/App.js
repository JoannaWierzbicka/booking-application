import React from 'react'
import CreateAccountPage from './components/CreateAccountPage'
import Loader from './components/Loader'
import LoginPage from './components/LoginPage'
import Message from './components/Message'
import StyledFullPage from './styledComponents/StyledFullPage'

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

    notLoginUserRoute: 'LOGIN',

    // login page
    loginEmail: '',
    loginPassword: '',

    // create account page
    createAccountEmail: '',
    createAccountPassword: '',
    createAccountPasswordRepeat: ''
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
      createAccountPasswordRepeat
    } = this.state
    return (
      <div>
        <h2>Booking APPLICATION</h2>
        {notLoginUserRoute === 'LOGIN' ?
          <StyledFullPage>
            <LoginPage
              email={loginEmail}
              password={loginPassword}
              onClickLogin={() => console.log('login')}
              onClickCreateAccount={() => console.log('create')}
              onChangeEmail={(e) => this.setState(() => ({ loginEmail: e.target.value }))}
              onChangePassword={(e) => this.setState(() => ({ loginPassword: e.target.value }))}
            />
          </StyledFullPage>

          :
          notLoginUserRoute === 'CREATE-ACCOUNT' ?
            <StyledFullPage>
              <CreateAccountPage
                email={createAccountEmail}
                password={createAccountPassword}
                repeatPassword={createAccountPasswordRepeat}
                onChangeEmail={(e) => this.setState(() => ({ createAccountEmail: e.target.value }))}
                onChangePassword={(e) => this.setState(() => ({ createAccountPassword: e.target.value }))}
                onChangeRepeatPassword={(e) => this.setState(() => ({ createAccountPasswordRepeat: e.target.value }))}
                onClickCreateAccount={() => console.log('onClickCreateAccount')}
                onClickBackToLogin={() => console.log('onClickBackToLogin')}
              />
            </StyledFullPage>
            : null}
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
