'use-strict'

const store = require('../store')

const invalidMove = () => {
  $('#message2').text('INVALID MOVE: Choose empty spot').show()
  setTimeout(() => { $('#message2').hide() }, 5000)
}

const gameOver = () => {
  $('#message').text('Game Over').show()
  setTimeout(() => { $('#message').hide() }, 5000)
}

const win = () => {
  store.gameOver = true
  $('#message2').text(`${store.currentPlayer} Wins! Click 'New Game' to play again`).show()
  setTimeout(() => { $('#message2').hide() }, 5000)
}

const tie = () => {
  store.gameOver = true
  $('#message2').text(`It's a tie! Click 'New Game' to play again`).show()
  setTimeout(() => { $('#message2').hide() }, 5000)
}

const createSuccessful = gameData => {
  $('#message').text(`New game created: x move first`)
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

const indexSuccessful = gameData => {
  $('#message').text(`You have played ${gameData.games.length} games`)
  $('#message').removeClass('failure')
  $('#message').addClass('success')
}

const indexFailure = () => {
  $('#message').text('failed')
  $('#message').removeClass('success')
  $('#message').addClass('failure')
}

const showSuccessful = gameData => {
  $('#message').removeClass('failure')
  $('#message').addClass('success')
}

const showFailure = () => {
  $('#message').text('failed')
  $('#message').removeClass('success')
  $('#message').addClass('failure')
}
module.exports = {
  invalidMove,
  createSuccessful,
  createFailure,
  updateSuccessful,
  updateFailure,
  indexSuccessful,
  indexFailure,
  showSuccessful,
  showFailure,
  gameOver,
  win,
  tie
}
