'use strict'

var document = require('global/document')

module.exports = document.addEventListener ? ready : noop

function ready (callback) {
  if (document.readyState === 'complete') {
    return setTimeout(callback, 0)
  }

  document.addEventListener('DOMContentLoaded', function onLoad () {
    callback()
  })
}

function noop () {}
