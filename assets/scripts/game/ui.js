'use-strict'

// const store = require('../store')

const invalidMove = () => {
  $('#message').show(300)
  $('#message').text('Invalid click')
}

module.exports = {
  invalidMove
}
