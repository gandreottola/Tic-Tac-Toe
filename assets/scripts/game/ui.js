'use-strict'

// const store = require('../store')

const invalidMove = () => {
  $('#message').text('Invalid click')
}

// // const updateSuccessful = gameData => {
// $('#message').text('')
// $('#message').removeClass('failure')
// $('#message').addClass('success')
// }

// // const updateFailure = () => {
// $('#message').text(message)
// $('#message').removeClass('success')
// $('#message').addClass('failure')
// }
module.exports = {
  invalidMove
}
