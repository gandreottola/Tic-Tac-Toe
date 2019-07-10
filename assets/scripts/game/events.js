'use strict'

const api = require('./api')
const ui = require('./ui')
const store = require('../store')

store.currentPlayer = 'x'
store.cells = ['', '', '', '', '', '', '', '', '']
$('#game-create').hide()
$('.cell').hide()
$('#game-show').hide()

// when cell is clicked
const onMove = event => {
  event.preventDefault()

  const cellId = event.target.id

  if (store.cells[cellId] !== '') {
    ui.invalidMove()
  // if its empty:
  // put current players's token on board
  } else {
    $(event.target).text(store.currentPlayer)
    store.cells[cellId] = store.currentPlayer
    const gameOver = checkGameOver()
    // update api
    api.update(store.currentPlayer, cellId, gameOver)
      .then(ui.updateSuccessful)
      .catch(ui.updateFailure)
    // switch players
    if (store.currentPlayer === 'x') {
      store.currentPlayer = 'o'
      $('#message').text(`Player o turn`)
    } else {
      store.currentPlayer = 'x'
      $('#message').text(`Player x turn`)
    }
  }
}

// create new game
const onNewGame = event => {
  event.preventDefault()
  // reset's game board
  store.cells = ['', '', '', '', '', '', '', '', '']
  $('.cell').empty('reset').text('')
  store.currentPlayer = 'x'
  if ($('.cell').off('click', onMove) !== false) {
    $('.cell').on('click', onMove)
  }
  // show board! if its hidden
  $('.cell').show()
  // ajax request to CREATE (method: POST)
  api.create()
    .then(ui.createSuccessful)
    .catch(ui.createFailure)
}

// show number of games played
const onShowGames = event => {
  event.preventDefault()
  api.index()
    .then(ui.indexSuccessful)
    .catch(ui.indexFailure)
}

// cell click error
const onClick = () => {
  if (store.gameOver === true) {
    ui.gameOver()
  }
}

// check for win or tie
const checkGameOver = () => {
  if ((store.cells[3] && store.cells[3] === store.cells[4] && store.cells[4] === store.cells[5]) ||
     (store.cells[6] && store.cells[6] === store.cells[7] && store.cells[7] === store.cells[8]) ||
     (store.cells[0] && store.cells[0] === store.cells[3] && store.cells[3] === store.cells[6]) ||
     (store.cells[1] && store.cells[1] === store.cells[4] && store.cells[4] === store.cells[7]) ||
     (store.cells[2] && store.cells[2] === store.cells[5] && store.cells[5] === store.cells[8]) ||
     (store.cells[0] && store.cells[0] === store.cells[4] && store.cells[4] === store.cells[8]) ||
     (store.cells[2] && store.cells[2] === store.cells[4] && store.cells[4] === store.cells[6])) {
    if (store.cells.length >= 3) {
      ui.win()
      $('.cell').off('click', onMove)
      store.gameOver = true
    }
  } else if (store.cells.every(id => id !== '')) {
    ui.tie()
    store.gameOver = true
  } else {
    store.gameOver = false
  }
}
module.exports = {
  onMove,
  onNewGame,
  onShowGames,
  onClick
}
