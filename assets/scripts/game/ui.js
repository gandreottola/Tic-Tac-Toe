'use-strict'

const store = require('../store')

const invalidMove = () => {
  $('#message').text('Invalid click')
}

const createSuccessful = gameData => {
  $('#message').text('New game created')
  $('#message').removeClass('failure')
  $('#message').addClass('success')
  store.game = gameData.game
}

const createFailure = () => {
  $('#message').text('failed')
  $('#message').removeClass('success')
  $('#message').addClass('failure')
}

const updateSuccessful = gameData => {
  $('#message').removeClass('failure')
  $('#message').addClass('success')
}

const updateFailure = () => {
  $('#message').text('failed')
  $('#message').removeClass('success')
  $('#message').addClass('failure')
}

module.exports = {
  invalidMove,
  createSuccessful,
  createFailure,
  updateSuccessful,
  updateFailure
}
