'use strict'

// const api = require('./api')
// const ui = require('./ui')

let player = 'O'

const onCellClick = event => {
  event.preventDefault()

  const cell = $(event.target).val('#id')
  // console.log(cell)
  cell.text(player)

  if (player === 'X') {
    player = 'O'
    cell.text(player)
  } else if (player === 'O') {
    player = 'X'
    cell.text(player)
  }

  // api.CellClick(player)
  // .then(ui.cellClickSuccessful)
  // .catch(ui.cellClickFailure)
}

const cells = []

const onCheckForMatch = event => {
  event.preventDefault()

  const cellId = cells[event.target.id]
  const cellIndex = $(event.target).index(cellId)
  const cell = [cellIndex]
  console.log(cellIndex)

  if (cell[1] && player === 'X') {
    console.log('test')
  }
}

module.exports = {
  onCellClick,
  onCheckForMatch
}
