'use strict'
const config = require('../config')
const store = require('../store')

const update = (currentPlayer, cellId, gameOver) => {
  return $.ajax({
    url: config.apiUrl + `/games/${store.game.id}`,
    data: {
      'game': {
        'cell': {
          'index': cellId,
          'value': currentPlayer
        },
        'over': gameOver
      }
    },
    method: 'PATCH',
    headers: {
      Authorization: `Token token=${store.user.token}`
    }
  })
}

const create = () => {
  return $.ajax({
    url: config.apiUrl + '/games',
    method: 'POST',
    headers: {
      Authorization: `Token token=${store.user.token}`
    }
  })
}

module.exports = {
  update,
  create
}
