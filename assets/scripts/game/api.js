'use strict'
const config = require('../config')
const store = require('../store')

const update = (currentPlayer, cellId, gameOver) => {
  return $.ajax({
    url: config.apiUrl + '/update',
    data: currentPlayer,
    cellId,
    gameOver,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

module.exports = {
  update
}
