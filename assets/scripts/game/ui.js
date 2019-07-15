'use-strict'

const store = require('../store')

const successMessage = message => {
  $('#message').text(message).show()
  $('#message').removeClass('failure')
  $('#message').addClass('success')
}

const failureMessage = message => {
  $('#message').text(message).show()
  $('#message').removeClass('success')
  $('#message').addClass('failure')
}

const gameOver = () => {
  successMessage(`Game Over, click 'New Game' to play again!`)
}

const win = () => {
  store.gameOver = true
  $('#message2').text(`${store.currentPlayer} Wins!`).show()
}

const tie = () => {
  store.gameOver = true
  $('#message2').text(`It's a tie!`).show()
}

const invalidMove = () => {
  successMessage('INVALID MOVE: choose empty spot')
}

const playerSwitch = () => {
  successMessage(`player ${store.currentPlayer} turn`)
  if (store.gameOver === true) {
    gameOver()
  }
}

const back = () => {
  $('#game-create').show()
  $('#game-show').show()
  $('#settings').show()
  $('#back').hide()
  $('#sign-out').hide()
  $('#change-password').hide()
}

const createSuccessful = gameData => {
  successMessage(`New game created: X move first`)
  store.game = gameData.game
}

const createFailure = () => {
  failureMessage('failed')
}

const updateSuccessful = gameData => {
  successMessage()
}

const updateFailure = () => {
  failureMessage('failed')
}

const indexSuccessful = gameData => {
  successMessage(`You played ${gameData.games.length} games`)
  setTimeout(() => { $('#message').hide() }, 5000)
}

const indexFailure = () => {
  failureMessage('failed')
}

module.exports = {
  invalidMove,
  createSuccessful,
  createFailure,
  updateSuccessful,
  updateFailure,
  indexSuccessful,
  indexFailure,
  gameOver,
  win,
  tie,
  playerSwitch,
  back
}
