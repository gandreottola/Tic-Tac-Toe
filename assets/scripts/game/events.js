'use strict'

// const api = require('./api')
const ui = require('./ui')

let currentPlayer = 'x'
const cells = ['', '', '', '', '', '', '', '', '']

// when cell is clicked
const onMove = event => {
  event.preventDefault()
  const cellId = event.target.id
  console.log(cells[cellId])

  // if not empty, display message to user
  if (cells[cellId] !== '') {
    ui.invalidMove()
    // if its empty:
    // put current players's token on board
    // update api
    // switch players
  } else {
    $(event.target).text(currentPlayer)
    cells[cellId] = currentPlayer
    checkGameOver()
    // api.update(currentPlayer, cellId, gameOver)
    // .then(ui.updateSuccessful)
    // .catch(ui.updateFailure)
    if (currentPlayer === 'x') {
      currentPlayer = 'o'
      $('#message').text(`Player ${currentPlayer} turn`)
    } else {
      currentPlayer = 'x'
      $('#message').text(`Player ${currentPlayer} turn`)
    }
  }
}

// check for win or tie
const checkGameOver = () => {
  if ((cells[0] && cells[0] === cells[1] && cells[1] === cells[2]) ||
     (cells[3] && cells[3] === cells[4] && cells[4] === cells[5]) ||
     (cells[6] && cells[6] === cells[7] && cells[7] === cells[8]) ||
     (cells[0] && cells[0] === cells[3] && cells[3] === cells[6]) ||
     (cells[1] && cells[1] === cells[4] && cells[4] === cells[7]) ||
     (cells[2] && cells[2] === cells[5] && cells[5] === cells[8]) ||
     (cells[0] && cells[0] === cells[4] && cells[4] === cells[8]) ||
     (cells[2] && cells[2] === cells[4] && cells[4] === cells[6])) {
    return true
  } else {
    return false
  }
}

module.exports = {
  onMove
}
