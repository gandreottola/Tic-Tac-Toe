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
  successMessage('Sign up successfull')
}

const signUpFailure = () => {
  failureMessage('Sign up failed!')
}

const signInSuccessful = responseData => {
  successMessage('Sign in successfull')
  $('#game-create').show()
  $('#change-password').show()
  $('#sign-out').show()
  $('#sign-in').hide()
  $('#sign-up').hide()
  // keeping track of the user, so we can have the token for the api
  // we use 'store' so we can access the token in any file
  store.user = responseData.user
}

const signInFailure = () => {
  failureMessage('Sign in failed')
}

const changePasswordSuccessful = responseData => {
  successMessage('Password has successfully changed')
}

const changePasswordFailure = () => {
  failureMessage('Password change has failed!')
}

const signOutSuccessful = responseData => {
  successMessage('Sign out successful')
}

const signOutFailure = () => {
  failureMessage('Sign out failed!')
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
