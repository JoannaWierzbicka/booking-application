export const validateFormLogIn = (loginEmail, loginPassword) => {
  const errorsLogIn = []

  if (!loginEmail.includes('@')) {
    errorsLogIn.push('Email powinien zawierać @')
  }

  if (loginPassword.length < 3) {
    errorsLogIn.push('Wpisz poprawne hasło')
  }

  return errorsLogIn
}

export const validateFormCreate = (email, password, repeat) => {
  const errorsCreateAccount = []

  if (!email.includes('@')) {
    errorsCreateAccount.push('Email powinien zawierać @')
  }
  if (password.length < 6) {
    errorsCreateAccount.push('Hasło powinno zawierać co najmniej 6 znaków')
  }

  if (repeat !== password) {
    errorsCreateAccount.push('Hasła muszą być takie same')
  }

  return errorsCreateAccount
}
