'use strict'

var document = require('global/document')
var nextTick = require('next-tick')

module.exports = document.addEventListener ? ready : noop

function ready (callback) {
  if (document.readyState === 'complete') {
    return nextTick(callback)
  }

  document.addEventListener('DOMContentLoaded', function onLoad () {
    callback()
  })
}

function noop () {}
