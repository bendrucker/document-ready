'use strict'

var test = require('tape')
var EventTarget = require('dom-event-target')
var proxyquire = require('proxyquire')

test('node', function (t) {
  var ready = require('./')
  t.doesNotThrow(ready)
  t.end()
})

test('browser', function (t) {
  t.plan(3)

  var document = new EventTarget()
  var ready = proxyquire('./', {
    'global/document': document
  })

  ready(t.pass)

  document.send('DOMContentLoaded')

  document.readyState = 'complete'
  ready(t.pass)

  document.readyState = 'interactive'
  ready(t.pass)
})
