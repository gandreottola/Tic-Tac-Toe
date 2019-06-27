'use strict'

const store = require('../store')

const successMessage = message => {
  $('#message').text(message)
  $('#message').removeClass('failure')
  $('#message').addClass('success')

  // clear out our forms
  $('form').trigger('reset')
}

const failureMessage = message => {
  $('#message').text(message)
  $('#message').removeClass('success')
  $('#message').addClass('failure')

  // clear out our forms
  $('form').trigger('reset')
}

const signUpSuccessful = responseData => {
  successMessage('You are ready to play!')
}

const signUpFailure = () => {
  failureMessage('I believe you made a mistake, try again!')
}

const signInSuccessful = responseData => {
  successMessage('Nice to see you again!')

  // keeping track of the user, so we can have the token for the api
  // we use 'store' so we can access the token in any file
  store.user = responseData.user
}

const signInFailure = () => {
  failureMessage('I believe you made a mistake, try again!')
}

const changePasswordSuccessful = responseData => {
  successMessage('Your password was changed successfully')
}

const changePasswordFailure = () => {
  failureMessage('Password change failed')
}

const signOutSuccessful = responseData => {
  successMessage('Too bad you have to go, see you next time!')
}

const signOutFailure = () => {
  failureMessage('I believe you made a mistake, try again!')
}

module.exports = {
  signUpSuccessful,
  signUpFailure,
  signInSuccessful,
  signInFailure,
  signOutSuccessful,
  signOutFailure,
  changePasswordSuccessful,
  changePasswordFailure
}
