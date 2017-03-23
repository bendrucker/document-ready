'use strict'

if (typeof document === 'undefined') {
  throw new Error('document-ready only runs in the browser')
}

module.exports = ready

function ready (callback) {
  var state = document.readyState
  if (state === 'complete' || state === 'interactive') {
    return setTimeout(callback, 0)
  }

  document.addEventListener('DOMContentLoaded', function onLoad () {
    callback()
  })
}
