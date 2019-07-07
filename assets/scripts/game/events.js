'use strict'

const api = require('./api')
const ui = require('./ui')
const store = require('../store')

let currentPlayer = store.currentPlayer = 'x'
let cells = store.cells
cells = ['', '', '', '', '', '', '', '', '']
$('#game-create').hide()
$('.cell').hide()

// when cell is clicked
const onMove = event => {
  event.preventDefault()
  const cellId = event.target.id

  // if not empty, display message to user
  if (cells[cellId] !== '') {
    ui.invalidMove()
    // if its empty:
  } else {
    // put current players's token on board
    $(event.target).text(currentPlayer)
    cells[cellId] = currentPlayer
    let gameOver = store.gameOver
    gameOver = checkGameOver()
    // update api\
    api.update(currentPlayer, cellId, gameOver)
      .then(ui.updateSuccessful)
      .catch(ui.updateFailure)
    // switch players
    if (currentPlayer === 'x') {
      currentPlayer = 'o'
      $('#message').text(`Player ${currentPlayer} turn`)
    } else {
      currentPlayer = 'x'
      $('#message').text(`Player ${currentPlayer} turn`)
    }
  }
}
// create new game
const onNewGame = event => {
  event.preventDefault()
  // reset's game board
  cells = ['', '', '', '', '', '', '', '', '']
  $('.cell').empty('reset').text('')
  currentPlayer = 'x'
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
// check for win or tie
const checkGameOver = () => {
  // if ($('.cell').off('click', onMove) !== false) {
  //  $('.cell').on('click', onMove)
  //  currentPlayer = 'x'
  // }

  if ((cells[0] && cells[0] === cells[1] && cells[1] === cells[2]) ||
     (cells[3] && cells[3] === cells[4] && cells[4] === cells[5]) ||
     (cells[6] && cells[6] === cells[7] && cells[7] === cells[8]) ||
     (cells[0] && cells[0] === cells[3] && cells[3] === cells[6]) ||
     (cells[1] && cells[1] === cells[4] && cells[4] === cells[7]) ||
     (cells[2] && cells[2] === cells[5] && cells[5] === cells[8]) ||
     (cells[0] && cells[0] === cells[4] && cells[4] === cells[8]) ||
     (cells[2] && cells[2] === cells[4] && cells[4] === cells[6])) {
    if (cells.length >= 3) {
      console.log('win!')
      $('.cell').off('click')
      $('.cell').on('click', checkGameOver)
      ui.invalidMove()
      return true
    }
  } else if (cells.every(id => id !== '')) {
    console.log('tie!')
    return true
  } else {
    return false
  }
}
module.exports = {
  onMove,
  onNewGame
}
