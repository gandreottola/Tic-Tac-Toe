'use strict'

const getFormFields = require('../../../lib/get-form-fields')
const api = require('./api')
const ui = require('./ui')

$('#change-password').hide()
$('#sign-out').hide()
$('#settings').hide()

const onSignUp = event => {
  event.preventDefault()

  const form = event.target
  const formData = getFormFields(form)
  api.signUp(formData)
    .then(ui.signUpSuccessful)
    .catch(ui.signUpFailure)
}

const onSignIn = event => {
  event.preventDefault()

  const form = event.target
  const formData = getFormFields(form)
  api.signIn(formData)
    .then(ui.signInSuccessful)
    .catch(ui.signInFailure)
}

const onSettings = () => {
  ui.settings()
}

const onChangePassword = event => {
  event.preventDefault()

  const form = event.target
  const formData = getFormFields(form)
  api.changePassword(formData)
    .then(ui.changePasswordSuccessful)
    .catch(ui.changePasswordFailure)
}

const onSignOut = event => {
  event.preventDefault()

  api.signOut()
    .then(ui.signOutSuccessful)
    .catch(ui.signOutFailure)
}

module.exports = {
  onSignUp,
  onSignIn,
  onSignOut,
  onChangePassword,
  onSettings
}
