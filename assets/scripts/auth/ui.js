'use strict'

const store = require('../store')

const successMessage = message => {
  $('#message').text(message).show()
  setTimeout(() => { $('#message').hide() }, 3000)
  $('#message').removeClass('failure')
  $('#message').addClass('success')

  // clear out our forms
  $('form').trigger('reset')
}

const failureMessage = message => {
  $('#message').text(message).show()
  setTimeout(() => { $('#message').hide() }, 3000)
  $('#message').removeClass('success')
  $('#message').addClass('failure')

  // clear out our forms
  $('form').trigger('reset')
}

const signUpSuccessful = responseData => {
  successMessage('Sign up successful')
}

const signUpFailure = () => {
  failureMessage('Sign up failed!')
}

const signInSuccessful = responseData => {
  successMessage('Sign in successful')
  $('#game-create').show()
  $('#game-show').show()
  $('#settings').show()
  $('#sign-in').hide()
  $('#sign-up').hide()
  // keeping track of the user, so we can have the token for the api
  // we use 'store' so we can access the token in any file
  store.user = responseData.user
}

const signInFailure = () => {
  failureMessage('Sign in failed!')
}

const settings = () => {
  $('#change-password').show()
  $('#sign-out').show()
  $('#back').show()
  $('#game-create').hide()
  $('#game-show').hide()
  $('.cell').hide()
  $('#settings').hide()
  $('#message').hide()
  $('#message2').hide()
}

const changePasswordSuccessful = responseData => {
  successMessage('Password successfully changed')
}

const changePasswordFailure = () => {
  failureMessage('Password change has failed!')
}

const signOutSuccessful = responseData => {
  successMessage('Sign out successful')
  $('#game-create').hide()
  $('#game-show').hide()
  $('.board').hide()
  $('#sign-out').hide()
  $('#change-password').hide()
  $('#settings').hide()
  $('#back').hide()
  $('#sign-in').show()
  $('#sign-up').show()
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
  changePasswordFailure,
  settings
}
