'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

const authEvents = require('./auth/events')
const gameEvents = require('./game/events')

$(() => {
  $('#sign-up').on('submit', authEvents.onSignUp)
  $('#sign-in').on('submit', authEvents.onSignIn)
  $('#change-password').on('submit', authEvents.onChangePassword)
  $('#sign-out').on('click', authEvents.onSignOut)
  $('#settings').on('click', authEvents.onSettings)
  $('#back').on('click', gameEvents.onBack)
  $('.cell').on('click', gameEvents.onMove)
  $('.cell').on('click', gameEvents.onClick)
  $('#game-create').on('click', gameEvents.onNewGame)
  $('#game-show').on('click', gameEvents.onShowGames)
})
