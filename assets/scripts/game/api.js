'use strict'
const config = require('../config')
const store = require('../store')

const update = (currentPlayer, cellId, gameOver) => {
return $.ajax({
  url: config.apiUrl + '/update',
  data: currentPlayer, cellId, gameOver,
  method: 'PATCH',
  headers: {
    Authorization: 'Token token=' + <token>
  }
})
}
--include \
--request PATCH \
--header "Authorization: Token token=${TOKEN}" \
--header "Content-Type: application/json" \
--data '{
  "game": {
    "cell": {
      "index": [0, 1, 2, 3, 4, 5, 6, 7, 8],
      "value":"x"
    },
    "over": false
  }
}'

const changePassword = formData => {
  return $.ajax({
    url: config.apiUrl + '/change-password',
    data: formData,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}
